const plugin = async () => {
  const fs = require('fs')
  const path = require('path')
  const axios = require('axios')
  const del = require('del')

  const dir = path.resolve(path.relative(process.cwd(), '.'))

  try {
    console.log('loading translations ...')
    const { locales, pages } = require(path.join(dir, 'i18n'))
    const namespaces = Object.keys(pages).reduce(
      (acc, curr) => {
        const p = pages[curr]
        p.forEach((f) => {
          if (!acc[f]) {
            acc[f] = true
            acc['array'].push(f)
          }
        })
        return acc
      },
      { array: [] }
    ).array

    const localesPath = path.join(dir, 'locales')
    try {
      try {
        if (fs.existsSync(localesPath)) {
          try {
            await del(localesPath)

            console.log(`previous ${localesPath} is deleted!`)
          } catch (err) {
            throw `Error while deleting ${localesPath}` + err
          }
        }

        fs.mkdirSync(localesPath)
      } catch (er) {
        throw 'cannot create directory ' + localesPath + '\n' + er
      }
      for (let i = 0; i < locales.length; i++) {
        const lang = locales[i]
        const localePath = path.join(localesPath, lang)
        try {
          // if (!fs.existsSync(localePath)) {
          fs.mkdirSync(localePath)
          // }
        } catch (er) {
          throw 'cannot create directory ' + localePath + '\n' + er
        }
        try {
          const result = await axios.get(
            `https://storyapi.story.one/api/services/app/CacheManager/GetTextsFromCache?SourceName=StoryOne&TargetLanguageName=${lang}`,
            { timeout: 20000 }
          )

          if (result.data.success) {
            const res = result.data.result.items
            for (let j = 0; j < namespaces.length; j++) {
              const ns = namespaces[j]

              const file = res
                .filter((f) => f.key.startsWith(`${ns}.`))
                .reduce((prev, curr) => {
                  const { key, targetValue, baseValue } = curr
                  const parts = key.split(`${ns}.`)
                  if (parts.length > 1 && parts[0] === '' && parts[1] !== '') {
                    prev[parts[1]] = targetValue
                      ? targetValue
                      : baseValue
                      ? baseValue
                      : parts[1]
                  }
                  return prev
                }, {})

              const nsPath = path.join(localePath, `${ns}.json`)
              try {
                fs.writeFileSync(nsPath, JSON.stringify(file, null, 2), {
                  flag: 'w+',
                })

                console.log(
                  `file ${lang}/${ns}.json downloaded (${(
                    ((i * namespaces.length + j) * 100) /
                    (locales.length * namespaces.length)
                  ).toFixed(0)}%)\n`
                )
              } catch (er) {
                throw 'cannot create file ' + nsPath + '\n' + er
              }
            }
          } else throw 'download failed ' + result.data.message
        } catch (er) {
          throw 'cannot download file ' + lang + '.json\n' + er
        }
      }
    } catch (e) {
      throw 'cannot load translations: \n' + e
    }
  } catch (e) {
    console.log('loading i18n config file failed: \n' + e)
    process.exit(1)
  }
  console.log('translations loaded successfully')
  return Promise.resolve(true)
}

plugin()
