/* eslint-disable */
/* tslint:disable */
/*
 * ---------------------------------------------------------------
 * ## THIS FILE WAS GENERATED VIA SWAGGER-TYPESCRIPT-API        ##
 * ##                                                           ##
 * ## AUTHOR: acacode                                           ##
 * ## SOURCE: https://github.com/acacode/swagger-typescript-api ##
 * ---------------------------------------------------------------
 */

export interface IsTenantAvailableInput {
  tenancyName: string;
}

/**
 * @format int32
 */
export enum TenantAvailabilityState {
  Available = 1,
  InActive = 2,
  NotFound = 3,
}

export interface IsTenantAvailableOutput {
  state?: TenantAvailabilityState;

  /** @format int32 */
  tenantId?: number | null;
  serverRootAddress?: string | null;
}

export interface ResolveTenantIdInput {
  c?: string | null;
}

export interface RegisterInput {
  name: string;
  surname: string;
  userName: string;

  /** @format email */
  emailAddress: string;
  password: string;
  captchaResponse?: string | null;
}

export interface RegisterOutput {
  canLogin?: boolean;
}

export interface SendPasswordResetCodeInput {
  emailAddress: string;
}

export interface ResetPasswordInput {
  /** @format int64 */
  userId?: number;
  resetCode?: string | null;
  password?: string | null;
  returnUrl?: string | null;
  singleSignIn?: string | null;
  c?: string | null;
}

export interface ResetPasswordOutput {
  canLogin?: boolean;
  userName?: string | null;
}

export interface SendEmailActivationLinkInput {
  emailAddress: string;
}

export interface ActivateEmailInput {
  /** @format int64 */
  userId?: number;
  confirmationCode?: string | null;
  c?: string | null;
}

export interface ImpersonateInput {
  /** @format int32 */
  tenantId?: number | null;

  /**
   * @format int64
   * @min 1
   */
  userId?: number;
}

export interface ImpersonateOutput {
  impersonationToken?: string | null;
  tenancyName?: string | null;
}

export interface DelegatedImpersonateInput {
  /** @format int64 */
  userDelegationId?: number;
}

export interface SwitchToLinkedAccountInput {
  /** @format int32 */
  targetTenantId?: number | null;

  /**
   * @format int64
   * @min 1
   */
  targetUserId?: number;
}

export interface SwitchToLinkedAccountOutput {
  switchAccountToken?: string | null;
  tenancyName?: string | null;
}

export interface AuditLogListDto {
  /** @format int64 */
  userId?: number | null;
  userName?: string | null;

  /** @format int32 */
  impersonatorTenantId?: number | null;

  /** @format int64 */
  impersonatorUserId?: number | null;
  serviceName?: string | null;
  methodName?: string | null;
  parameters?: string | null;

  /** @format date-time */
  executionTime?: string;

  /** @format int32 */
  executionDuration?: number;
  clientIpAddress?: string | null;
  clientName?: string | null;
  browserInfo?: string | null;
  exception?: string | null;
  customData?: string | null;

  /** @format int64 */
  id?: number;
}

export interface PagedResultDtoOfAuditLogListDto {
  /** @format int32 */
  totalCount?: number;
  items?: AuditLogListDto[] | null;
}

export interface FileDto {
  fileName: string;
  fileType?: string | null;
  fileToken: string;
}

export interface NameValueDto {
  name?: string | null;
  value?: string | null;
}

/**
 * @format int32
 */
export enum EntityChangeType {
  Created = 0,
  Updated = 1,
  Deleted = 2,
}

export interface EntityChangeListDto {
  /** @format int64 */
  userId?: number | null;
  userName?: string | null;

  /** @format date-time */
  changeTime?: string;
  entityTypeFullName?: string | null;
  changeType?: EntityChangeType;
  changeTypeName?: string | null;

  /** @format int64 */
  entityChangeSetId?: number;

  /** @format int64 */
  id?: number;
}

export interface PagedResultDtoOfEntityChangeListDto {
  /** @format int32 */
  totalCount?: number;
  items?: EntityChangeListDto[] | null;
}

export interface EntityPropertyChangeDto {
  /** @format int64 */
  entityChangeId?: number;
  newValue?: string | null;
  originalValue?: string | null;
  propertyName?: string | null;
  propertyTypeFullName?: string | null;

  /** @format int32 */
  tenantId?: number | null;

  /** @format int64 */
  id?: number;
}

export interface AuthorListDto {
  fullName?: string | null;
  logo?: string | null;

  /** @format int32 */
  id?: number;
}

export interface PagedResultDtoOfAuthorListDto {
  /** @format int32 */
  totalCount?: number;
  items?: AuthorListDto[] | null;
}

export interface CreateOrEditAuthorDto {
  /** @format int32 */
  id?: number | null;
  fullName?: string | null;
  logo?: string | null;
}

export interface IdTitleDto {
  /** @format int32 */
  id?: number;
  title?: string | null;
  selected?: boolean;
}

export interface EventListDto {
  _ThumbnailImageAddress?: string | null;
  thumbnailImageAddress?: string | null;
  title?: string | null;
  isPublished?: boolean;

  /** @format date-time */
  startDate?: string;

  /** @format date-time */
  finishDate?: string;
  location?: string | null;
  eventType?: string | null;

  /** @format int32 */
  id?: number;
}

export interface PagedResultDtoOfEventListDto {
  /** @format int32 */
  totalCount?: number;
  items?: EventListDto[] | null;
}

export interface CreateEventTranslationInput {
  title?: string | null;
  language?: string | null;
}

export interface CreateEventInput {
  translations?: CreateEventTranslationInput[] | null;
}

export interface BCEventTranslationDto {
  title?: string | null;
  miniDescription?: string | null;
  description?: string | null;
  location?: string | null;
  eventType?: string | null;
  language?: string | null;
}

/**
 * @format int32
 */
export enum PartnerType {
  Normal = 0,
  NetworkMedia = 10,
}

export interface PartnerDto {
  title?: string | null;
  _Image?: string | null;
  image?: string | null;
  link?: string | null;

  /** @format int32 */
  eventId?: number;
  type?: PartnerType;

  /** @format int32 */
  id?: number;
}

export interface SchedulePartDto {
  /** @format date-span */
  time?: string;

  /** @format int32 */
  scheduleId?: number;
  title?: string | null;
  description?: string | null;

  /** @format int32 */
  id?: number;
}

export interface ScheduleDto {
  /** @format int32 */
  day?: number | null;

  /** @format date-time */
  date?: string;
  parts?: SchedulePartDto[] | null;

  /** @format int32 */
  eventId?: number;

  /** @format int32 */
  id?: number;
}

export interface SimpleCourseDto {
  title?: string | null;

  /** @format int32 */
  id?: number;
}

export interface LecturerDto {
  _ProfilePicture?: string | null;
  profilePicture?: string | null;
  fullName?: string | null;
  headline?: string | null;
  bio?: string | null;
  _CVAddress?: string | null;
  cvAddress?: string | null;
  courses?: SimpleCourseDto[] | null;
  events?: EventListDto[] | null;

  /** @format int32 */
  id?: number;
}

/**
 * @format int32
 */
export enum LecturerRole {
  Lecturer = 0,
  Initiator = 10,
  TechnicalManagement = 20,
  Moderation = 30,
}

export interface EventLecturerDto {
  /** @format int32 */
  eventId?: number;

  /** @format int32 */
  lecturerId?: number;
  lecturer?: LecturerDto;
  role?: LecturerRole;

  /** @format int32 */
  id?: number;
}

/**
 * @format int32
 */
export enum EventTimeType {
  Offline = 0,
  Online = 10,
}

export interface EventTimeDto {
  /** @format date-time */
  startDate?: string;

  /** @format date-time */
  finishDate?: string;

  /** @format double */
  price?: number;
  description?: string | null;
  location?: string | null;

  /** @format int32 */
  eventId?: number;
  type?: EventTimeType;

  /** @format int32 */
  id?: number;
}

export interface EventViewPartDto {
  /** @format int32 */
  eventId?: number;

  /** @format int32 */
  position?: number;
  title?: string | null;
  htmlContent?: string | null;

  /** @format int32 */
  id?: number;
}

export interface ChannelDto {
  title?: string | null;
  coverImage?: string | null;
  slug?: string | null;
  description?: string | null;

  /** @format int32 */
  id?: number;
}

/**
 * @format int32
 */
export enum CourseUserState {
  NotStarted = 0,
  Started = 10,
  Completed = 20,
}

/**
 * @format int32
 */
export enum CoursesResourceType {
  Link = 0,
  File = 10,
}

export interface CoursesResourceDto {
  /** @format int32 */
  courseId?: number;

  /** @format int32 */
  position?: number;
  url?: string | null;
  type?: CoursesResourceType;
  content?: string | null;
  title?: string | null;

  /** @format int32 */
  id?: number;
}

export interface CourseDto {
  title?: string | null;
  description?: string | null;
  coverImage?: string | null;

  /** @format int32 */
  duration?: number;

  /** @format date-time */
  creationTime?: string;

  /** @format int32 */
  courseMediasCount?: number;
  channel?: ChannelDto;
  overview?: string | null;

  /** @format int32 */
  likes?: number;
  isLiked?: boolean;
  access?: boolean;
  state?: CourseUserState;
  coursesResources?: CoursesResourceDto[] | null;
  lecturers?: LecturerDto[] | null;

  /** @format int32 */
  id?: number;
}

export interface EventCourseDto {
  /** @format int32 */
  eventId?: number;

  /** @format int32 */
  courseId?: number;
  course?: CourseDto;

  /** @format int32 */
  id?: number;
}

export interface GetForEditEventDto {
  /** @format int32 */
  id?: number | null;
  slug?: string | null;
  thumbnailImageAddress?: string | null;
  coverImageAddress?: string | null;
  pdf?: string | null;
  isPublished?: boolean;

  /** @format date-time */
  startDate?: string;

  /** @format date-time */
  finishDate?: string;

  /** @format int32 */
  speakers?: number;

  /** @format int32 */
  participants?: number;

  /** @format int32 */
  innovativeDays?: number;
  categories?: number[] | null;
  translations?: BCEventTranslationDto[] | null;
  partners?: PartnerDto[] | null;
  schedules?: ScheduleDto[] | null;
  lecturers?: EventLecturerDto[] | null;
  eventTimes?: EventTimeDto[] | null;
  viewParts?: EventViewPartDto[] | null;
  courses?: EventCourseDto[] | null;
}

export interface EditEventInputTranslationDto {
  title?: string | null;
  description?: string | null;
  miniDescription?: string | null;
  location?: string | null;
  eventType?: string | null;
  language?: string | null;
}

export interface EditEventInput {
  slug?: string | null;
  thumbnailImageAddress?: string | null;
  coverImageAddress?: string | null;
  pdf?: string | null;
  isPublished?: boolean;

  /** @format date-time */
  startDate?: string;

  /** @format date-time */
  finishDate?: string;
  categories?: number[] | null;

  /** @format int32 */
  speakers?: number;

  /** @format int32 */
  participants?: number;

  /** @format int32 */
  innovativeDays?: number;
  translations?: EditEventInputTranslationDto[] | null;

  /** @format int32 */
  id?: number;
}

export interface AddEventLecturerInput {
  role?: LecturerRole;

  /** @format int32 */
  lecturerId?: number;

  /** @format int32 */
  eventId?: number;
}

export interface AddEventCourseInput {
  /** @format int32 */
  eventId?: number;

  /** @format int32 */
  courseId?: number;
}

export interface CreateOrEditScheduleInput {
  /** @format int32 */
  id?: number | null;

  /** @format int32 */
  eventId?: number;

  /** @format int32 */
  day?: number | null;

  /** @format date-time */
  date?: string;
}

export interface SchedulePartTranslationDto {
  title?: string | null;
  description?: string | null;
  language?: string | null;
}

export interface GetForEditSchedulePartDto {
  /** @format int32 */
  id?: number | null;

  /** @format date-span */
  time?: string;

  /** @format int32 */
  scheduleId?: number;
  translations?: SchedulePartTranslationDto[] | null;
}

export interface GetForEditScheduleDto {
  /** @format int32 */
  id?: number | null;

  /** @format int32 */
  day?: number | null;

  /** @format date-time */
  date?: string;

  /** @format int32 */
  eventId?: number;
  parts?: GetForEditSchedulePartDto[] | null;
}

export interface CreateOrEditSchedulePartInput {
  /** @format int32 */
  id?: number | null;

  /** @format date-span */
  time?: string;

  /** @format int32 */
  scheduleId?: number;
  translations?: SchedulePartTranslationDto[] | null;
}

export interface EventTimeTranslationDto {
  description?: string | null;
  location?: string | null;
  language?: string | null;
}

export interface CreateOrEditEventTimeInput {
  /** @format int32 */
  id?: number | null;

  /** @format date-time */
  startDate?: string;

  /** @format date-time */
  finishDate?: string;

  /** @format double */
  price?: number;

  /** @format int32 */
  eventId?: number;
  type?: EventTimeType;
  translations?: EventTimeTranslationDto[] | null;
}

export interface GetForEditEventTimeDto {
  /** @format int32 */
  id?: number | null;

  /** @format date-time */
  startDate?: string;

  /** @format date-time */
  finishDate?: string;

  /** @format double */
  price?: number;

  /** @format int32 */
  eventId?: number;
  type?: EventTimeType;
  translations?: EventTimeTranslationDto[] | null;
}

export interface CreateOrEditPartnerInput {
  /** @format int32 */
  id?: number | null;
  title?: string | null;
  image?: string | null;
  link?: string | null;
  type?: PartnerType;

  /** @format int32 */
  eventId?: number;
}

export interface GetForEditPartnerDto {
  /** @format int32 */
  id?: number | null;
  title?: string | null;
  image?: string | null;
  link?: string | null;

  /** @format int32 */
  eventId?: number;
  type?: PartnerType;
}

export interface EventViewPartTranslationDto {
  title?: string | null;
  htmlContent?: string | null;
  language?: string | null;
}

export interface CreateOrEditEventViewPartInput {
  /** @format int32 */
  id?: number | null;

  /** @format int32 */
  eventId?: number;

  /** @format int32 */
  position?: number;
  translations?: EventViewPartTranslationDto[] | null;
}

export interface GetForEditEventViewPartDto {
  /** @format int32 */
  id?: number | null;

  /** @format int32 */
  eventId?: number;

  /** @format int32 */
  position?: number;
  translations?: EventViewPartTranslationDto[] | null;
}

export interface CategoryDto {
  slug?: string | null;
  title?: string | null;

  /** @format int32 */
  id?: number;
}

export interface EventTileDto {
  slug?: string | null;
  _ThumbnailImageAddress?: string | null;
  thumbnailImageAddress?: string | null;
  title?: string | null;
  miniDescription?: string | null;
  location?: string | null;
  eventType?: string | null;

  /** @format date-time */
  startDate?: string;

  /** @format date-time */
  finishDate?: string;
  categories?: CategoryDto[] | null;

  /** @format int32 */
  id?: number;
}

export interface PagedResultDtoOfEventTileDto {
  /** @format int32 */
  totalCount?: number;
  items?: EventTileDto[] | null;
}

export interface PerfectEventDto {
  slug?: string | null;
  _ThumbnailImageAddress?: string | null;
  _CoverImageAddress?: string | null;
  thumbnailImageAddress?: string | null;
  coverImageAddress?: string | null;
  _PDF?: string | null;
  pdf?: string | null;
  title?: string | null;
  miniDescription?: string | null;
  description?: string | null;
  location?: string | null;
  eventType?: string | null;

  /** @format int32 */
  speakers?: number;

  /** @format int32 */
  participants?: number;

  /** @format int32 */
  innovativeDays?: number;
  categories?: CategoryDto[] | null;
  lecturers?: {
    Lecturer?: LecturerDto[];
    Initiator?: LecturerDto[];
    TechnicalManagement?: LecturerDto[];
    Moderation?: LecturerDto[];
  };
  schedules?: ScheduleDto[] | null;
  eventTimes?: EventTimeDto[] | null;
  viewParts?: EventViewPartDto[] | null;
  partners?: { Normal?: PartnerDto[]; NetworkMedia?: PartnerDto[] };

  /** @format int32 */
  id?: number;
}

export interface TestsListDto {
  /** @format date-time */
  creationTime?: string;
  isPublished?: boolean;
  course?: CourseDto;
  title?: string | null;

  /** @format int32 */
  questionsCount?: number;

  /** @format int32 */
  takesCount?: number;

  /** @format int32 */
  id?: number;
}

export interface PagedResultDtoOfTestsListDto {
  /** @format int32 */
  totalCount?: number;
  items?: TestsListDto[] | null;
}

export interface BCTestTranslationDto {
  title?: string | null;
  language?: string | null;
}

export interface CreateOrEditTestDto {
  /** @format int32 */
  id?: number | null;

  /** @format int32 */
  courseId?: number | null;

  /** @format int32 */
  scoreToPass?: number;
  translations?: BCTestTranslationDto[] | null;
}

export interface BCQuestionTranslationDto {
  title?: string | null;
  language?: string | null;
}

export interface CreateOrEditBCQuestionDto {
  /** @format int32 */
  id?: number | null;

  /** @format int32 */
  testId?: number;

  /** @format int32 */
  position?: number;
  translations?: BCQuestionTranslationDto[] | null;
}

export interface BCAnswerTranslationDto {
  title?: string | null;
  language?: string | null;
}

export interface CreateOrEditBCAnswerDto {
  /** @format int32 */
  id?: number | null;

  /** @format int32 */
  questionId?: number;

  /** @format int32 */
  position?: number;
  isCorrect?: boolean;

  /** @format int32 */
  score?: number;
  translations?: BCAnswerTranslationDto[] | null;
}

export interface GetForEditTestDto {
  /** @format int32 */
  id?: number | null;

  /** @format int32 */
  courseId?: number | null;

  /** @format int32 */
  scoreToPass?: number;
  translations?: BCTestTranslationDto[] | null;
}

export interface GetForEditEditQuestionDto {
  /** @format int32 */
  id?: number | null;

  /** @format int32 */
  testId?: number;

  /** @format int32 */
  position?: number;
  translations?: BCQuestionTranslationDto[] | null;
}

export interface GetForEditEditAnswerDto {
  /** @format int32 */
  id?: number | null;

  /** @format int32 */
  questionId?: number;

  /** @format int32 */
  position?: number;
  isCorrect?: boolean;

  /** @format int32 */
  score?: number;
  translations?: BCAnswerTranslationDto[] | null;
}

export interface GetAnswerDetailOutput {
  title?: string | null;

  /** @format int32 */
  position?: number;
  isCorrect?: boolean;

  /** @format int32 */
  score?: number;

  /** @format int32 */
  id?: number;
}

export interface GetQuestionDetailOutput {
  title?: string | null;

  /** @format int32 */
  position?: number;

  /** @format int32 */
  totalScore?: number;
  answers?: GetAnswerDetailOutput[] | null;

  /** @format int32 */
  id?: number;
}

export interface GetTestDetailOutput {
  title?: string | null;
  questions?: GetQuestionDetailOutput[] | null;

  /** @format int32 */
  id?: number;
}

export interface GetTestsOutput {
  /** @format int32 */
  questionsCount?: number;
  title?: string | null;
  participated?: boolean;

  /** @format int32 */
  score?: number;
  isCompleted?: boolean;

  /** @format int32 */
  id?: number;
}

export interface BCAnswerDto {
  title?: string | null;

  /** @format int32 */
  id?: number;
}

export interface BCQuestionAnswerDto {
  title?: string | null;

  /** @format int32 */
  totalScore?: number;

  /** @format int32 */
  optionCount?: number;
  answers?: BCAnswerDto[] | null;

  /** @format int32 */
  id?: number;
}

export interface GetTestTakesAnswersOutput {
  /** @format int32 */
  questionId?: number;

  /** @format int32 */
  score?: number;
  answers?: number[] | null;

  /** @format int32 */
  id?: number;
}

export interface GetTestTakesOutput {
  /** @format int32 */
  score?: number;
  isCompleted?: boolean;
  answers?: GetTestTakesAnswersOutput[] | null;

  /** @format int32 */
  id?: number;
}

export interface GetTestOutput {
  /** @format int32 */
  questionsCount?: number;
  title?: string | null;

  /** @format int32 */
  scoreToPass?: number;
  questions?: BCQuestionAnswerDto[] | null;
  takes?: GetTestTakesOutput[] | null;

  /** @format int32 */
  id?: number;
}

export interface SendAnswerInput {
  /** @format int32 */
  takeId?: number;

  /** @format int32 */
  questionId?: number;
  answerId?: number[] | null;
}

export interface SendAnswerOutput {
  correctAnswersId?: number[] | null;

  /** @format int32 */
  score?: number;
}

/**
 * @format int32
 */
export enum BlobType {
  News = 0,
  EventPdf = 10,
  CoursesMedia = 20,
}

/**
 * @format int32
 */
export enum BlobDirectoryContentType {
  File = 0,
  Directory = 10,
}

export interface GetContentOutput {
  type?: BlobDirectoryContentType;
  name?: string | null;

  /** @format int64 */
  size?: number;
  path?: string | null;
  mediaType?: string | null;
  extension?: string | null;

  /** @format date-time */
  creationTime?: string;
}

export type TypeDefinitionsBlobType = BlobType;

export interface BlobStorageOutput {
  succeed?: boolean;
  url?: string | null;
  message?: string | null;
}

export interface CacheDto {
  name?: string | null;
}

export interface ListResultDtoOfCacheDto {
  items?: CacheDto[] | null;
}

export interface EntityDtoOfString {
  id?: string | null;
}

/**
 * @format int32
 */
export enum CategoryType {
  News = 0,
  Events = 10,
}

export interface CategoryListDto {
  /** @format int32 */
  position?: number;
  slug?: string | null;
  title?: string | null;
  description?: string | null;
  type?: CategoryType;

  /** @format int64 */
  dataCount?: number;

  /** @format int32 */
  id?: number;
}

export interface PagedResultDtoOfCategoryListDto {
  /** @format int32 */
  totalCount?: number;
  items?: CategoryListDto[] | null;
}

export interface CategoryTranslationDto {
  title?: string | null;
  description?: string | null;
  language?: string | null;
}

export interface CreateOrEditCategoryDto {
  /** @format int32 */
  id?: number | null;

  /** @format int32 */
  position?: number;
  slug?: string | null;
  type?: CategoryType;
  translations?: CategoryTranslationDto[] | null;
}

export interface GetForEditCategoryDto {
  /** @format int32 */
  id?: number | null;

  /** @format int32 */
  position?: number;
  slug?: string | null;
  type?: CategoryType;
  translations?: CategoryTranslationDto[] | null;
}

export interface ChannelListDto {
  title?: string | null;
  coverImage?: string | null;
  description?: string | null;

  /** @format int32 */
  position?: number;
  slug?: string | null;

  /** @format int32 */
  coursesCount?: number;

  /** @format int32 */
  id?: number;
}

export interface PagedResultDtoOfChannelListDto {
  /** @format int32 */
  totalCount?: number;
  items?: ChannelListDto[] | null;
}

export interface ChannelTranslationDto {
  title?: string | null;
  description?: string | null;
  language?: string | null;
}

export interface CreateOrEditChannelDto {
  /** @format int32 */
  id?: number | null;

  /** @format int32 */
  position?: number;
  slug?: string | null;
  coverImage?: string | null;

  /** @format int32 */
  librarySubjectId?: number;

  /** @format double */
  price?: number;
  translations?: ChannelTranslationDto[] | null;
}

export interface GetForEditChannelDto {
  /** @format int32 */
  id?: number | null;

  /** @format int32 */
  position?: number;
  slug?: string | null;
  coverImage?: string | null;

  /** @format int32 */
  librarySubjectId?: number;

  /** @format double */
  price?: number;
  translations?: ChannelTranslationDto[] | null;
}

export interface GetChannelsOutput {
  title?: string | null;
  coverImage?: string | null;
  description?: string | null;
  slug?: string | null;

  /** @format double */
  price?: number;

  /** @format int32 */
  id?: number;
}

export interface SimpleUserDto {
  profilePictureAddress?: string | null;
  name?: string | null;
  surname?: string | null;
  userName?: string | null;

  /** @format int64 */
  id?: number;
}

/**
 * @format int32
 */
export enum CommentObjectType {
  News = 0,
  CoursesMedia = 10,
  Course = 20,
  Tweet = 30,
}

export interface CommentDto {
  body?: string | null;

  /** @format int32 */
  parentId?: number | null;
  creatorUser?: SimpleUserDto;

  /** @format date-time */
  creationTime?: string;
  type?: CommentObjectType;
  isMine?: boolean;

  /** @format int32 */
  id?: number;
}

export interface PagedResultDtoOfCommentDto {
  /** @format int32 */
  totalCount?: number;
  items?: CommentDto[] | null;
}

export interface CreateOrUpdateCommentInput {
  /** @format int32 */
  id?: number | null;
  body?: string | null;

  /** @format int32 */
  parentId?: number | null;

  /** @format int32 */
  objectId?: number;
}

export interface CreateOrUpdateCommentInputOfNullableOfInt64 {
  /** @format int32 */
  id?: number | null;
  body?: string | null;

  /** @format int32 */
  parentId?: number | null;

  /** @format int64 */
  objectId?: number | null;
}

export interface SubscribableEditionComboboxItemDto {
  isFree?: boolean | null;
  value?: string | null;
  displayText?: string | null;
  isSelected?: boolean;
}

export interface ListResultDtoOfSubscribableEditionComboboxItemDto {
  items?: SubscribableEditionComboboxItemDto[] | null;
}

export interface FindUsersInput {
  /** @format int32 */
  tenantId?: number | null;
  excludeCurrentUser?: boolean;

  /**
   * @format int32
   * @min 1
   * @max 1000
   */
  maxResultCount?: number;

  /**
   * @format int32
   * @min 0
   * @max 2147483647
   */
  skipCount?: number;
  filter?: string | null;
}

export interface PagedResultDtoOfNameValueDto {
  /** @format int32 */
  totalCount?: number;
  items?: NameValueDto[] | null;
}

export interface GetDefaultEditionNameOutput {
  name?: string | null;
}

export interface CompanyListDto {
  name?: string | null;
  symbol?: string | null;
  marketName?: string | null;

  /** @format int32 */
  id?: number;
}

export interface PagedResultDtoOfCompanyListDto {
  /** @format int32 */
  totalCount?: number;
  items?: CompanyListDto[] | null;
}

export interface CreateOrEditCompanyDto {
  /** @format int32 */
  id?: number | null;
  name?: string | null;
  symbol?: string | null;

  /** @format int32 */
  marketId?: number;
}

export interface GetForEditCompanyDto {
  /** @format int32 */
  id?: number | null;
  name?: string | null;
  symbol?: string | null;

  /** @format int32 */
  marketId?: number;
}

export interface MarketDto {
  name?: string | null;
  symbol?: string | null;

  /** @format int32 */
  id?: number;
}

export interface CompanyDto {
  name?: string | null;
  symbol?: string | null;
  market?: MarketDto;

  /** @format int32 */
  id?: number;
}

export interface CountryListDto {
  title?: string | null;

  /** @format int32 */
  id?: number;
}

export interface PagedResultDtoOfCountryListDto {
  /** @format int32 */
  totalCount?: number;
  items?: CountryListDto[] | null;
}

export interface CountryTranslationDto {
  title?: string | null;
  language?: string | null;
}

export interface CreateOrEditCountryDto {
  /** @format int32 */
  id?: number | null;
  translations?: CountryTranslationDto[] | null;
}

export interface GetForEditCountryDto {
  /** @format int32 */
  id?: number | null;
  translations?: CountryTranslationDto[] | null;
}

export interface CourseListDto {
  title?: string | null;
  description?: string | null;
  coverImage?: string | null;

  /** @format date-time */
  creationTime?: string;

  /** @format int32 */
  courseMediasCount?: number;

  /** @format int32 */
  duration?: number;

  /** @format int32 */
  channelId?: number | null;

  /** @format int32 */
  position?: number;

  /** @format double */
  price?: number;

  /** @format int32 */
  id?: number;
}

export interface PagedResultDtoOfCourseListDto {
  /** @format int32 */
  totalCount?: number;
  items?: CourseListDto[] | null;
}

export interface CourseTranslationDto {
  overview?: string | null;
  language?: string | null;
}

export interface CreateOrEditCourseDto {
  /** @format int32 */
  id?: number | null;
  title?: string | null;
  description?: string | null;
  coverImage?: string | null;

  /** @format int32 */
  channelId?: number | null;

  /** @format int32 */
  position?: number;

  /** @format double */
  price?: number;
  translations?: CourseTranslationDto[] | null;
}

export interface GetForEditCourseDto {
  /** @format int32 */
  id?: number | null;
  title?: string | null;
  description?: string | null;
  coverImage?: string | null;

  /** @format int32 */
  channelId?: number | null;

  /** @format int32 */
  position?: number;

  /** @format double */
  price?: number;
  translations?: CourseTranslationDto[] | null;
}

export interface CoursesResourceListDto {
  title?: string | null;
  type?: CoursesResourceType;
  url?: string | null;

  /** @format int32 */
  id?: number;
}

export interface PagedResultDtoOfCoursesResourceListDto {
  /** @format int32 */
  totalCount?: number;
  items?: CoursesResourceListDto[] | null;
}

export interface CoursesResourceTranslationDto {
  content?: string | null;
  title?: string | null;
  language?: string | null;
}

export interface CreateOrEditCoursesResourceDto {
  /** @format int32 */
  id?: number | null;

  /** @format int32 */
  courseId?: number;
  url?: string | null;

  /** @format int32 */
  position?: number;
  type?: CoursesResourceType;
  translations?: CoursesResourceTranslationDto[] | null;
}

export interface CourseLecturerDto {
  /** @format int32 */
  courseId?: number;

  /** @format int32 */
  lecturerId?: number;
  lecturer?: LecturerDto;

  /** @format int32 */
  id?: number;
}

export interface AddCourseLecturerInput {
  /** @format int32 */
  lecturerId?: number;

  /** @format int32 */
  courseId?: number;
}

export interface GetCoursesLiestOutput {
  title?: string | null;
  description?: string | null;

  /** @format double */
  price?: number;
  coverImage?: string | null;

  /** @format int32 */
  duration?: number;

  /** @format int32 */
  courseMediasCount?: number;

  /** @format int32 */
  likes?: number;
  isLiked?: boolean;
  access?: boolean;
  state?: CourseUserState;

  /** @format int32 */
  id?: number;
}

export interface PagedResultDtoOfGetCoursesLiestOutput {
  /** @format int32 */
  totalCount?: number;
  items?: GetCoursesLiestOutput[] | null;
}

export interface WatchedCourseDto {
  title?: string | null;
  description?: string | null;
  coverImage?: string | null;

  /** @format int32 */
  duration?: number;

  /** @format date-time */
  creationTime?: string;

  /** @format int32 */
  courseMediasCount?: number;

  /** @format int32 */
  seenDuration?: number;

  /** @format int32 */
  id?: number;
}

export interface PagedResultDtoOfWatchedCourseDto {
  /** @format int32 */
  totalCount?: number;
  items?: WatchedCourseDto[] | null;
}

export interface CoursesReportDto {
  /** @format int32 */
  inProgress?: number;

  /** @format int32 */
  completed?: number;
}

export interface EntityDtoOfInt32 {
  /** @format int32 */
  id?: number;
}

export interface CoursesMediaListDto {
  /** @format int32 */
  duration?: number;

  /** @format int32 */
  position?: number;
  title?: string | null;
  address?: string | null;
  mediaType?: string | null;

  /** @format int32 */
  courseId?: number;

  /** @format int32 */
  likes?: number;

  /** @format int32 */
  comments?: number;

  /** @format int32 */
  id?: number;
}

export interface PagedResultDtoOfCoursesMediaListDto {
  /** @format int32 */
  totalCount?: number;
  items?: CoursesMediaListDto[] | null;
}

export interface CreateOrEditCoursesMediaDto {
  /** @format int32 */
  id?: number | null;

  /** @format int32 */
  duration?: number;

  /** @format int32 */
  position?: number;
  title?: string | null;
  address?: string | null;
  mediaType?: string | null;

  /** @format int32 */
  courseId?: number;
  description?: string | null;
}

export interface GetForEditCoursesMediaDto {
  /** @format int32 */
  id?: number | null;

  /** @format int32 */
  duration?: number;

  /** @format int32 */
  position?: number;
  title?: string | null;
  address?: string | null;
  mediaType?: string | null;

  /** @format int32 */
  courseId?: number;
  course?: CourseDto;
  description?: string | null;
}

export interface CoursesMediaDto {
  /** @format int32 */
  duration?: number;

  /** @format int32 */
  position?: number;
  title?: string | null;
  address?: string | null;
  mediaType?: string | null;

  /** @format int32 */
  courseId?: number;
  course?: CourseDto;

  /** @format int32 */
  likes?: number;

  /** @format int32 */
  comments?: number;
  isLiked?: boolean;
  isWatched?: boolean;

  /** @format int32 */
  watchedDuration?: number;
  description?: string | null;
  isCompleted?: boolean;

  /** @format int32 */
  id?: number;
}

export interface CoursesMediaArrowDto {
  /** @format int32 */
  position?: number;
  title?: string | null;
  address?: string | null;
  mediaType?: string | null;

  /** @format int32 */
  id?: number;
}

export interface CoursesMediaSingleDto {
  /** @format int32 */
  duration?: number;

  /** @format int32 */
  position?: number;
  title?: string | null;
  address?: string | null;
  mediaType?: string | null;

  /** @format int32 */
  courseId?: number;
  course?: CourseDto;

  /** @format int32 */
  likes?: number;

  /** @format int32 */
  comments?: number;
  isLiked?: boolean;
  next?: CoursesMediaArrowDto;
  previous?: CoursesMediaArrowDto;
  isWatched?: boolean;

  /** @format int32 */
  watchedDuration?: number;
  description?: string | null;
  isCompleted?: boolean;

  /** @format int32 */
  id?: number;
}

export interface CoursesMediaSeenInput {
  /** @format int32 */
  coursesMediaId?: number;

  /** @format int32 */
  duration?: number;
}

export interface Widget {
  widgetId?: string | null;

  /** @format int32 */
  height?: number;

  /** @format int32 */
  width?: number;

  /** @format int32 */
  positionX?: number;

  /** @format int32 */
  positionY?: number;
}

export interface Page {
  id?: string | null;
  name?: string | null;
  widgets?: Widget[] | null;
}

export interface Dashboard {
  dashboardName?: string | null;
  pages?: Page[] | null;
}

export interface SavePageInput {
  dashboardName?: string | null;
  application?: string | null;
  pages?: Page[] | null;
}

export interface RenamePageInput {
  dashboardName?: string | null;
  id?: string | null;
  name?: string | null;
  application?: string | null;
}

export interface AddNewPageInput {
  dashboardName?: string | null;
  name?: string | null;
  application?: string | null;
}

export interface AddNewPageOutput {
  pageId?: string | null;
}

export interface AddWidgetInput {
  widgetId?: string | null;
  pageId?: string | null;
  dashboardName?: string | null;

  /** @format int32 */
  width?: number;

  /** @format int32 */
  height?: number;
  application?: string | null;
}

export interface WidgetFilterOutput {
  id?: string | null;
  name?: string | null;
}

export interface WidgetOutput {
  id?: string | null;
  name?: string | null;
  description?: string | null;
  filters?: WidgetFilterOutput[] | null;
}

export interface DashboardOutput {
  name?: string | null;
  widgets?: WidgetOutput[] | null;
}

export interface DateToStringOutput {
  dateString?: string | null;
}

export interface NameValueOfString {
  name?: string | null;
  value?: string | null;
}

export interface StringOutput {
  output?: string | null;
}

export interface DynamicEntityPropertyDto {
  entityFullName?: string | null;
  dynamicPropertyName?: string | null;

  /** @format int32 */
  dynamicPropertyId?: number;

  /** @format int32 */
  tenantId?: number | null;

  /** @format int32 */
  id?: number;
}

export interface ListResultDtoOfDynamicEntityPropertyDto {
  items?: DynamicEntityPropertyDto[] | null;
}

export interface GetAllEntitiesHasDynamicPropertyOutput {
  entityFullName?: string | null;
}

export interface ListResultDtoOfGetAllEntitiesHasDynamicPropertyOutput {
  items?: GetAllEntitiesHasDynamicPropertyOutput[] | null;
}

export interface DynamicEntityPropertyValueDto {
  value?: string | null;
  entityId?: string | null;

  /** @format int32 */
  dynamicEntityPropertyId?: number;

  /** @format int32 */
  id?: number;
}

export interface ListResultDtoOfDynamicEntityPropertyValueDto {
  items?: DynamicEntityPropertyValueDto[] | null;
}

export interface IValueValidator {
  name?: string | null;
  attributes?: Record<string, any>;
}

export interface IInputType {
  name?: string | null;
  attributes?: Record<string, any>;
  validator?: IValueValidator;
}

export interface GetAllDynamicEntityPropertyValuesOutputItem {
  /** @format int32 */
  dynamicEntityPropertyId?: number;
  propertyName?: string | null;
  inputType?: IInputType;
  selectedValues?: string[] | null;
  allValuesInputTypeHas?: string[] | null;
}

export interface GetAllDynamicEntityPropertyValuesOutput {
  items?: GetAllDynamicEntityPropertyValuesOutputItem[] | null;
}

export interface InsertOrUpdateAllValuesInputItem {
  entityId?: string | null;

  /** @format int32 */
  dynamicEntityPropertyId?: number;
  values?: string[] | null;
}

export interface InsertOrUpdateAllValuesInput {
  items?: InsertOrUpdateAllValuesInputItem[] | null;
}

export interface CleanValuesInput {
  /** @format int32 */
  dynamicEntityPropertyId?: number;
  entityId?: string | null;
}

export interface DynamicPropertyDto {
  propertyName?: string | null;
  displayName?: string | null;
  inputType?: string | null;
  permission?: string | null;

  /** @format int32 */
  tenantId?: number | null;

  /** @format int32 */
  id?: number;
}

export interface ListResultDtoOfDynamicPropertyDto {
  items?: DynamicPropertyDto[] | null;
}

export interface DynamicPropertyValueDto {
  value?: string | null;

  /** @format int32 */
  tenantId?: number | null;

  /** @format int32 */
  dynamicPropertyId?: number;

  /** @format int32 */
  id?: number;
}

export interface ListResultDtoOfDynamicPropertyValueDto {
  items?: DynamicPropertyValueDto[] | null;
}

export interface EditionListDto {
  name?: string | null;
  displayName?: string | null;

  /** @format double */
  dailyPrice?: number | null;

  /** @format double */
  weeklyPrice?: number | null;

  /** @format double */
  monthlyPrice?: number | null;

  /** @format double */
  annualPrice?: number | null;

  /** @format int32 */
  waitingDayAfterExpire?: number | null;

  /** @format int32 */
  trialDayCount?: number | null;
  expiringEditionDisplayName?: string | null;

  /** @format int32 */
  id?: number;
}

export interface ListResultDtoOfEditionListDto {
  items?: EditionListDto[] | null;
}

export interface EditionEditDto {
  /** @format int32 */
  id?: number | null;
  displayName: string;

  /** @format int32 */
  expiringEditionId?: number | null;
}

export interface LocalizableComboboxItemDto {
  value?: string | null;
  displayText?: string | null;
}

export interface LocalizableComboboxItemSourceDto {
  items?: LocalizableComboboxItemDto[] | null;
}

export interface FeatureInputTypeDto {
  name?: string | null;
  attributes?: Record<string, any>;
  validator?: IValueValidator;
  itemSource?: LocalizableComboboxItemSourceDto;
}

export interface FlatFeatureDto {
  parentName?: string | null;
  name?: string | null;
  displayName?: string | null;
  description?: string | null;
  defaultValue?: string | null;
  inputType?: FeatureInputTypeDto;
}

export interface GetEditionEditOutput {
  edition?: EditionEditDto;
  featureValues?: NameValueDto[] | null;
  features?: FlatFeatureDto[] | null;
}

export interface EditionCreateDto {
  /** @format int32 */
  id?: number | null;
  displayName: string;

  /** @format double */
  dailyPrice?: number | null;

  /** @format double */
  weeklyPrice?: number | null;

  /** @format double */
  monthlyPrice?: number | null;

  /** @format double */
  annualPrice?: number | null;

  /** @format int32 */
  trialDayCount?: number | null;

  /** @format int32 */
  waitingDayAfterExpire?: number | null;

  /** @format int32 */
  expiringEditionId?: number | null;
}

export interface CreateEditionDto {
  edition: EditionCreateDto;
  featureValues: NameValueDto[];
}

export interface UpdateEditionDto {
  edition: EditionEditDto;
  featureValues: NameValueDto[];
}

export interface MoveTenantsToAnotherEditionDto {
  /**
   * @format int32
   * @min 1
   * @max 2147483647
   */
  sourceEditionId?: number;

  /**
   * @format int32
   * @min 1
   * @max 2147483647
   */
  targetEditionId?: number;
}

export interface PagedResultDtoOfSimpleUserDto {
  /** @format int32 */
  totalCount?: number;
  items?: SimpleUserDto[] | null;
}

export interface EntityDtoOfInt64 {
  /** @format int64 */
  id?: number;
}

export interface TopStatsData {
  /** @format int32 */
  newTenantsCount?: number;

  /** @format double */
  newSubscriptionAmount?: number;

  /** @format int32 */
  dashboardPlaceholder1?: number;

  /** @format int32 */
  dashboardPlaceholder2?: number;
}

export interface RecentTenant {
  /** @format int32 */
  id?: number;
  name?: string | null;

  /** @format date-time */
  creationTime?: string;
}

export interface GetRecentTenantsOutput {
  /** @format int32 */
  recentTenantsDayCount?: number;

  /** @format int32 */
  maxRecentTenantsShownCount?: number;

  /** @format date-time */
  tenantCreationStartDate?: string;
  recentTenants?: RecentTenant[] | null;
}

export interface ExpiringTenant {
  tenantName?: string | null;

  /** @format int32 */
  remainingDayCount?: number;
}

export interface GetExpiringTenantsOutput {
  expiringTenants?: ExpiringTenant[] | null;

  /** @format int32 */
  subscriptionEndAlertDayCount?: number;

  /** @format int32 */
  maxExpiringTenantsShownCount?: number;

  /** @format date-time */
  subscriptionEndDateStart?: string;

  /** @format date-time */
  subscriptionEndDateEnd?: string;
}

/**
 * @format int32
 */
export enum ChartDateInterval {
  Daily = 1,
  Weekly = 2,
  Monthly = 3,
}

export interface IncomeStastistic {
  label?: string | null;

  /** @format date-time */
  date?: string;

  /** @format double */
  amount?: number;
}

export interface GetIncomeStatisticsDataOutput {
  incomeStatistics?: IncomeStastistic[] | null;
}

export interface TenantEdition {
  label?: string | null;

  /** @format int32 */
  value?: number;
}

export interface GetEditionTenantStatisticsOutput {
  editionStatistics?: TenantEdition[] | null;
}

export interface GeneralSettingsEditDto {
  timezone?: string | null;
  timezoneForComparison?: string | null;
}

export interface SessionTimeOutSettingsEditDto {
  isEnabled?: boolean;

  /**
   * @format int32
   * @min 10
   * @max 2147483647
   */
  timeOutSecond?: number;

  /**
   * @format int32
   * @min 10
   * @max 2147483647
   */
  showTimeOutNotificationSecond?: number;
  showLockScreenWhenTimedOut?: boolean;
}

export interface HostUserManagementSettingsEditDto {
  isEmailConfirmationRequiredForLogin?: boolean;
  smsVerificationEnabled?: boolean;
  isCookieConsentEnabled?: boolean;
  isQuickThemeSelectEnabled?: boolean;
  useCaptchaOnLogin?: boolean;
  allowUsingGravatarProfilePicture?: boolean;
  sessionTimeOutSettings?: SessionTimeOutSettingsEditDto;
}

export interface EmailSettingsEditDto {
  defaultFromAddress?: string | null;
  defaultFromDisplayName?: string | null;
  smtpHost?: string | null;

  /** @format int32 */
  smtpPort?: number;
  smtpUserName?: string | null;
  smtpPassword?: string | null;
  smtpDomain?: string | null;
  smtpEnableSsl?: boolean;
  smtpUseDefaultCredentials?: boolean;
}

export interface TenantManagementSettingsEditDto {
  allowSelfRegistration?: boolean;
  isNewRegisteredTenantActiveByDefault?: boolean;
  useCaptchaOnRegistration?: boolean;

  /** @format int32 */
  defaultEditionId?: number | null;
}

export interface PasswordComplexitySetting {
  requireDigit?: boolean;
  requireLowercase?: boolean;
  requireNonAlphanumeric?: boolean;
  requireUppercase?: boolean;

  /** @format int32 */
  requiredLength?: number;
}

export interface UserLockOutSettingsEditDto {
  isEnabled?: boolean;

  /** @format int32 */
  maxFailedAccessAttemptsBeforeLockout?: number;

  /** @format int32 */
  defaultAccountLockoutSeconds?: number;
}

export interface TwoFactorLoginSettingsEditDto {
  isEnabledForApplication?: boolean;
  isEnabled?: boolean;
  isEmailProviderEnabled?: boolean;
  isSmsProviderEnabled?: boolean;
  isRememberBrowserEnabled?: boolean;
  isGoogleAuthenticatorEnabled?: boolean;
}

export interface SecuritySettingsEditDto {
  allowOneConcurrentLoginPerUser?: boolean;
  useDefaultPasswordComplexitySettings?: boolean;
  passwordComplexity?: PasswordComplexitySetting;
  defaultPasswordComplexity?: PasswordComplexitySetting;
  userLockOut?: UserLockOutSettingsEditDto;
  twoFactorLogin?: TwoFactorLoginSettingsEditDto;
}

export interface HostBillingSettingsEditDto {
  legalName?: string | null;
  address?: string | null;
}

export interface OtherSettingsEditDto {
  isQuickThemeSelectEnabled?: boolean;
}

export interface FacebookExternalLoginProviderSettings {
  appId?: string | null;
  appSecret?: string | null;
}

export interface GoogleExternalLoginProviderSettings {
  clientId?: string | null;
  clientSecret?: string | null;
  userInfoEndpoint?: string | null;
}

export interface TwitterExternalLoginProviderSettings {
  consumerKey?: string | null;
  consumerSecret?: string | null;
}

export interface MicrosoftExternalLoginProviderSettings {
  clientId?: string | null;
  clientSecret?: string | null;
}

export interface OpenIdConnectExternalLoginProviderSettings {
  clientId?: string | null;
  clientSecret?: string | null;
  authority?: string | null;
  loginUrl?: string | null;
  validateIssuer?: boolean;
}

export interface JsonClaimMapDto {
  claim?: string | null;
  key?: string | null;
}

export interface WsFederationExternalLoginProviderSettings {
  clientId?: string | null;
  tenant?: string | null;
  metaDataAddress?: string | null;
  wtrealm?: string | null;
  authority?: string | null;
}

export interface ExternalLoginProviderSettingsEditDto {
  facebook_IsDeactivated?: boolean;
  facebook?: FacebookExternalLoginProviderSettings;
  google_IsDeactivated?: boolean;
  google?: GoogleExternalLoginProviderSettings;
  twitter_IsDeactivated?: boolean;
  twitter?: TwitterExternalLoginProviderSettings;
  microsoft_IsDeactivated?: boolean;
  microsoft?: MicrosoftExternalLoginProviderSettings;
  openIdConnect_IsDeactivated?: boolean;
  openIdConnect?: OpenIdConnectExternalLoginProviderSettings;
  openIdConnectClaimsMapping?: JsonClaimMapDto[] | null;
  wsFederation_IsDeactivated?: boolean;
  wsFederation?: WsFederationExternalLoginProviderSettings;
  wsFederationClaimsMapping?: JsonClaimMapDto[] | null;
}

export interface HostSettingsEditDto {
  general: GeneralSettingsEditDto;
  userManagement: HostUserManagementSettingsEditDto;
  email: EmailSettingsEditDto;
  tenantManagement: TenantManagementSettingsEditDto;
  security: SecuritySettingsEditDto;
  billing?: HostBillingSettingsEditDto;
  otherSettings?: OtherSettingsEditDto;
  externalLoginProviderSettings?: ExternalLoginProviderSettingsEditDto;
}

export interface SendTestEmailInput {
  emailAddress: string;
}

export interface ExternalLoginSettingsDto {
  enabledSocialLoginSettings?: string[] | null;
}

export interface InstallDto {
  connectionString: string;
  adminPassword: string;
  webSiteUrl: string;
  serverUrl?: string | null;
  defaultLanguage: string;
  smtpSettings?: EmailSettingsEditDto;
  billInfo?: HostBillingSettingsEditDto;
}

export interface NameValue {
  name?: string | null;
  value?: string | null;
}

export interface AppSettingsJsonDto {
  webSiteUrl?: string | null;
  serverSiteUrl?: string | null;
  languages?: NameValue[] | null;
}

export interface CheckDatabaseOutput {
  isDatabaseExist?: boolean;
}

export interface InvoiceDto {
  /** @format double */
  amount?: number;
  editionDisplayName?: string | null;
  invoiceNo?: string | null;

  /** @format date-time */
  invoiceDate?: string;
  tenantLegalName?: string | null;
  tenantAddress?: string[] | null;
  tenantTaxNo?: string | null;
  hostLegalName?: string | null;
  hostAddress?: string[] | null;
}

export interface CreateInvoiceDto {
  /** @format int64 */
  subscriptionPaymentId?: number;
}

export interface ApplicationLanguageListDto {
  /** @format int32 */
  tenantId?: number | null;
  name?: string | null;
  displayName?: string | null;
  icon?: string | null;
  isDisabled?: boolean;
  isDeleted?: boolean;

  /** @format int64 */
  deleterUserId?: number | null;

  /** @format date-time */
  deletionTime?: string | null;

  /** @format date-time */
  lastModificationTime?: string | null;

  /** @format int64 */
  lastModifierUserId?: number | null;

  /** @format date-time */
  creationTime?: string;

  /** @format int64 */
  creatorUserId?: number | null;

  /** @format int32 */
  id?: number;
}

export interface GetLanguagesOutput {
  defaultLanguageName?: string | null;
  items?: ApplicationLanguageListDto[] | null;
}

export interface ApplicationLanguageEditDto {
  /** @format int32 */
  id?: number | null;
  name: string;
  icon?: string | null;
  isEnabled?: boolean;
}

export interface ComboboxItemDto {
  value?: string | null;
  displayText?: string | null;
  isSelected?: boolean;
}

export interface GetLanguageForEditOutput {
  language?: ApplicationLanguageEditDto;
  languageNames?: ComboboxItemDto[] | null;
  flags?: ComboboxItemDto[] | null;
}

export interface CreateOrUpdateLanguageInput {
  language: ApplicationLanguageEditDto;
}

export interface SetDefaultLanguageInput {
  name: string;
}

export interface LanguageTextListDto {
  key?: string | null;
  baseValue?: string | null;
  targetValue?: string | null;
}

export interface PagedResultDtoOfLanguageTextListDto {
  /** @format int32 */
  totalCount?: number;
  items?: LanguageTextListDto[] | null;
}

export interface UpdateLanguageTextInput {
  languageName: string;
  sourceName: string;
  key: string;
  value: string;
}

export interface LecturerListDto {
  profilePicture?: string | null;
  fullName?: string | null;
  headline?: string | null;
  bio?: string | null;

  /** @format int32 */
  id?: number;
}

export interface PagedResultDtoOfLecturerListDto {
  /** @format int32 */
  totalCount?: number;
  items?: LecturerListDto[] | null;
}

export interface CreateOrEditLecturerDto {
  /** @format int32 */
  id?: number | null;
  profilePicture?: string | null;
  fullName?: string | null;
  headline?: string | null;
  bio?: string | null;
  cvAddress?: string | null;
}

export interface UpdateLecturerProfileInput {
  fullName?: string | null;
  headline?: string | null;
  bio?: string | null;
}

export interface LibraryListDto {
  title?: string | null;
  coverImage?: string | null;
  description?: string | null;

  /** @format int32 */
  position?: number;
  slug?: string | null;

  /** @format int32 */
  id?: number;
}

export interface PagedResultDtoOfLibraryListDto {
  /** @format int32 */
  totalCount?: number;
  items?: LibraryListDto[] | null;
}

export interface LibraryTranslationDto {
  title?: string | null;
  description?: string | null;
  language?: string | null;
}

export interface CreateOrEditLibraryDto {
  /** @format int32 */
  id?: number | null;

  /** @format int32 */
  position?: number;
  slug?: string | null;
  coverImage?: string | null;
  translations?: LibraryTranslationDto[] | null;
}

export interface GetForEditLibraryDto {
  /** @format int32 */
  id?: number | null;

  /** @format int32 */
  position?: number;
  slug?: string | null;
  coverImage?: string | null;
  translations?: LibraryTranslationDto[] | null;
}

export interface LibraryDto {
  title?: string | null;
  coverImage?: string | null;
  slug?: string | null;
  description?: string | null;

  /** @format int32 */
  id?: number;
}

export interface GetLibrariesOutput {
  title?: string | null;
  coverImage?: string | null;
  description?: string | null;
  slug?: string | null;

  /** @format int32 */
  id?: number;
}

export interface GetChannelMenuOutput {
  title?: string | null;
  slug?: string | null;

  /** @format int32 */
  id?: number;
}

export interface GetLibrarySubjectMenuOutput {
  title?: string | null;
  slug?: string | null;
  channels?: GetChannelMenuOutput[] | null;

  /** @format int32 */
  id?: number;
}

export interface GetLibraryMenuOutput {
  title?: string | null;
  slug?: string | null;
  subjects?: GetLibrarySubjectMenuOutput[] | null;

  /** @format int32 */
  id?: number;
}

export interface LibrarySubjectListDto {
  title?: string | null;
  coverImage?: string | null;
  description?: string | null;

  /** @format int32 */
  position?: number;
  slug?: string | null;

  /** @format int32 */
  id?: number;
}

export interface PagedResultDtoOfLibrarySubjectListDto {
  /** @format int32 */
  totalCount?: number;
  items?: LibrarySubjectListDto[] | null;
}

export interface LibrarySubjectTranslationDto {
  title?: string | null;
  description?: string | null;
  language?: string | null;
}

export interface CreateOrEditLibrarySubjectDto {
  /** @format int32 */
  id?: number | null;

  /** @format int32 */
  position?: number;
  slug?: string | null;
  coverImage?: string | null;

  /** @format int32 */
  libraryId?: number;
  translations?: LibrarySubjectTranslationDto[] | null;
}

export interface GetForEditLibrarySubjectDto {
  /** @format int32 */
  id?: number | null;

  /** @format int32 */
  position?: number;
  slug?: string | null;
  coverImage?: string | null;

  /** @format int32 */
  libraryId?: number;
  translations?: LibrarySubjectTranslationDto[] | null;
}

export interface LibrarySubjectDto {
  title?: string | null;
  coverImage?: string | null;
  slug?: string | null;
  description?: string | null;

  /** @format int32 */
  id?: number;
}

export interface GetLibrarySubjectsOutput {
  title?: string | null;
  coverImage?: string | null;
  description?: string | null;
  slug?: string | null;

  /** @format int32 */
  id?: number;
}

export interface NewsListDto {
  title?: string | null;
  coverImageAddress?: string | null;

  /** @format date-time */
  creationTime?: string;

  /** @format int32 */
  likes?: number;

  /** @format int32 */
  comments?: number;

  /** @format int32 */
  id?: number;
}

export interface PagedResultDtoOfNewsListDto {
  /** @format int32 */
  totalCount?: number;
  items?: NewsListDto[] | null;
}

export interface CreateOrEditNewsDto {
  /** @format int32 */
  id?: number | null;
  title?: string | null;
  body?: string | null;
  slug?: string | null;
  coverImageAddress?: string | null;
  categories?: number[] | null;

  /** @format int32 */
  languageId?: number | null;
  authorAlias?: string | null;

  /** @format int32 */
  authorId?: number | null;
}

export interface GetForEditNewsDto {
  /** @format int32 */
  id?: number | null;
  coverImageAddress?: string | null;
  title?: string | null;
  body?: string | null;
  slug?: string | null;

  /** @format int32 */
  languageId?: number | null;
  categories?: number[] | null;
  authorAlias?: string | null;

  /** @format int32 */
  authorId?: number | null;
}

export interface CMSChangeStatusInput {
  /** @format int32 */
  id?: number;
  isPublished?: boolean;
}

export interface AuthorDto {
  fullName?: string | null;
  logo?: string | null;

  /** @format int32 */
  id?: number;
}

export interface NewsTileDto {
  title?: string | null;
  body?: string | null;
  slug?: string | null;
  coverImageAddress?: string | null;

  /** @format date-time */
  creationTime?: string;

  /** @format int32 */
  likes?: number;

  /** @format int32 */
  comments?: number;
  isLiked?: boolean;
  categories?: CategoryDto[] | null;
  author?: AuthorDto;

  /** @format int64 */
  views?: number;

  /** @format int32 */
  id?: number;
}

export interface PagedResultDtoOfNewsTileDto {
  /** @format int32 */
  totalCount?: number;
  items?: NewsTileDto[] | null;
}

export interface NewsDto {
  title?: string | null;
  coverImageAddress?: string | null;
  body?: string | null;
  slug?: string | null;

  /** @format date-time */
  creationTime?: string;

  /** @format int32 */
  likes?: number;

  /** @format int32 */
  comments?: number;
  isLiked?: boolean;

  /** @format int64 */
  views?: number;
  categories?: CategoryDto[] | null;
  author?: AuthorDto;

  /** @format int32 */
  id?: number;
}

/**
 * @format int32
 */
export enum UserNotificationState {
  Unread = 0,
  Read = 1,
}

export interface NotificationData {
  type?: string | null;
  properties?: Record<string, any>;
}

/**
 * @format int32
 */
export enum NotificationSeverity {
  Info = 0,
  Success = 1,
  Warn = 2,
  Error = 3,
  Fatal = 4,
}

export interface TenantNotification {
  /** @format int32 */
  tenantId?: number | null;
  notificationName?: string | null;
  data?: NotificationData;
  entityType?: string | null;
  entityTypeName?: string | null;
  entityId?: any;
  severity?: NotificationSeverity;

  /** @format date-time */
  creationTime?: string;

  /** @format uuid */
  id?: string;
}

export interface UserNotification {
  /** @format int32 */
  tenantId?: number | null;

  /** @format int64 */
  userId?: number;
  state?: UserNotificationState;
  notification?: TenantNotification;

  /** @format uuid */
  id?: string;
}

export interface GetNotificationsOutput {
  /** @format int32 */
  unreadCount?: number;

  /** @format int32 */
  totalCount?: number;
  items?: UserNotification[] | null;
}

export interface EntityDtoOfGuid {
  /** @format uuid */
  id?: string;
}

export interface NotificationSubscriptionWithDisplayNameDto {
  displayName?: string | null;
  description?: string | null;
  name: string;
  isSubscribed?: boolean;
}

export interface GetNotificationSettingsOutput {
  receiveNotifications?: boolean;
  notifications?: NotificationSubscriptionWithDisplayNameDto[] | null;
}

export interface NotificationSubscriptionDto {
  name: string;
  isSubscribed?: boolean;
}

export interface UpdateNotificationSettingsInput {
  receiveNotifications?: boolean;
  notifications?: NotificationSubscriptionDto[] | null;
}

export interface EventTime2Dto {
  /** @format date-time */
  startDate?: string;

  /** @format date-time */
  finishDate?: string;

  /** @format double */
  price?: number;
  description?: string | null;
  location?: string | null;

  /** @format int32 */
  eventId?: number;
  type?: EventTimeType;
  event?: EventListDto;

  /** @format int32 */
  id?: number;
}

export interface OrderListDto {
  owner?: SimpleUserDto;
  isPaid?: boolean;

  /** @format double */
  subTotalPrice?: number;

  /** @format double */
  totalPrice?: number;
  channel?: ChannelDto;
  course?: CourseListDto;
  eventTime?: EventTime2Dto;

  /** @format int32 */
  participants?: number;
  allCoureAccess?: boolean;

  /** @format int32 */
  channelId?: number | null;

  /** @format int32 */
  courseId?: number | null;

  /** @format int32 */
  eventTimeId?: number | null;

  /** @format int32 */
  id?: number;
}

export interface PagedResultDtoOfOrderListDto {
  /** @format int32 */
  totalCount?: number;
  items?: OrderListDto[] | null;
}

export interface AddressInfoDto {
  firstName?: string | null;
  lastName?: string | null;
  city?: string | null;
  country?: string | null;
  address1?: string | null;
  address2?: string | null;
  zipCode?: string | null;
  phoneNumber?: string | null;
  email?: string | null;

  /** @format int32 */
  id?: number;
}

/**
 * @format int32
 */
export enum PromoCodeType {
  PercentageOfTotal = 0,
}

/**
 * @format int32
 */
export enum SexTitle {
  Mr = 0,
  Mrs = 10,
}

export interface ParticipantDto {
  title?: SexTitle;
  firstName?: string | null;
  lastName?: string | null;
  phoneNumber?: string | null;
  email?: string | null;

  /** @format int32 */
  id?: number;
}

/**
 * @format int32
 */
export enum PaymentMethod {
  Credit = 10,
  PaymentGateway = 20,
  ByAdmin = 30,
}

/**
 * @format int32
 */
export enum PaymentGateway {
  Stripe = 10,
  Paypal = 20,
  EPSDirect = 30,
  Amazon = 40,
  ApplePay = 50,
  GooglePay = 60,
}

/**
 * @format int32
 */
export enum PaymentStatus {
  Successful = 10,
  Faild = 20,
}

export interface PaymentDto {
  /** @format int32 */
  orderId?: number;

  /** @format double */
  totalPrice?: number;

  /** @format int64 */
  creatorUserId?: number | null;
  isPaid?: boolean;
  message?: string | null;
  method?: PaymentMethod;
  gateway?: PaymentGateway;
  status?: PaymentStatus;

  /** @format date-time */
  creationTime?: string;

  /** @format int64 */
  deleterUserId?: number | null;

  /** @format date-time */
  deletionTime?: string | null;
  isDeleted?: boolean;

  /** @format int32 */
  id?: number;
}

export interface GetForEditOrderDto {
  /** @format int32 */
  id?: number | null;

  /** @format int32 */
  addressId?: number | null;
  address?: AddressInfoDto;

  /** @format int32 */
  billingAddressId?: number | null;
  billingAddress?: AddressInfoDto;

  /** @format int64 */
  ownerId?: number;
  owner?: SimpleUserDto;
  isPaid?: boolean;

  /** @format double */
  subTotalPrice?: number;

  /** @format double */
  totalPrice?: number;

  /** @format int32 */
  promoCodeId?: number | null;

  /** @format double */
  promoCodeValue?: number;
  promoCodeType?: PromoCodeType;
  channel?: ChannelDto;
  course?: CourseListDto;
  eventTime?: EventTime2Dto;

  /** @format int32 */
  channelId?: number | null;

  /** @format int32 */
  courseId?: number | null;

  /** @format int32 */
  eventTimeId?: number | null;
  participants?: ParticipantDto[] | null;
  payments?: PaymentDto[] | null;
  allCoureAccess?: boolean;
}

export interface NewOrderByAdminInput {
  address?: AddressInfoDto;
  billingAddress?: AddressInfoDto;

  /** @format int32 */
  channelId?: number | null;

  /** @format int32 */
  courseId?: number | null;

  /** @format int32 */
  eventTimeId?: number | null;
  participants?: ParticipantDto[] | null;

  /** @format int64 */
  ownerId?: number;
  allCoureAccess?: boolean;
}

/**
 * @format int32
 */
export type TypeDefinitionsInt32 = number;

export interface NewOrderInput {
  address?: AddressInfoDto;
  billingAddress?: AddressInfoDto;

  /** @format int32 */
  channelId?: number | null;

  /** @format int32 */
  courseId?: number | null;

  /** @format int32 */
  eventTimeId?: number | null;
  participants?: ParticipantDto[] | null;
}

export interface CreateOrderOutput {
  /** @format int32 */
  orderId?: number;
  secretKey?: string | null;

  /** @format int64 */
  transactionId?: number;

  /** @format double */
  amount?: number;
  currency?: string | null;
}

export interface OrganizationUnitDto {
  /** @format int64 */
  parentId?: number | null;
  code?: string | null;
  displayName?: string | null;

  /** @format int32 */
  memberCount?: number;

  /** @format int32 */
  roleCount?: number;

  /** @format date-time */
  lastModificationTime?: string | null;

  /** @format int64 */
  lastModifierUserId?: number | null;

  /** @format date-time */
  creationTime?: string;

  /** @format int64 */
  creatorUserId?: number | null;

  /** @format int64 */
  id?: number;
}

export interface ListResultDtoOfOrganizationUnitDto {
  items?: OrganizationUnitDto[] | null;
}

export interface OrganizationUnitUserListDto {
  name?: string | null;
  surname?: string | null;
  userName?: string | null;
  emailAddress?: string | null;

  /** @format uuid */
  profilePictureId?: string | null;

  /** @format date-time */
  addedTime?: string;

  /** @format int64 */
  id?: number;
}

export interface PagedResultDtoOfOrganizationUnitUserListDto {
  /** @format int32 */
  totalCount?: number;
  items?: OrganizationUnitUserListDto[] | null;
}

export interface OrganizationUnitRoleListDto {
  displayName?: string | null;
  name?: string | null;

  /** @format date-time */
  addedTime?: string;

  /** @format int64 */
  id?: number;
}

export interface PagedResultDtoOfOrganizationUnitRoleListDto {
  /** @format int32 */
  totalCount?: number;
  items?: OrganizationUnitRoleListDto[] | null;
}

export interface CreateOrganizationUnitInput {
  /** @format int64 */
  parentId?: number | null;
  displayName: string;
}

export interface UpdateOrganizationUnitInput {
  /**
   * @format int64
   * @min 1
   */
  id?: number;
  displayName: string;
}

export interface MoveOrganizationUnitInput {
  /**
   * @format int64
   * @min 1
   */
  id?: number;

  /** @format int64 */
  newParentId?: number | null;
}

export interface UsersToOrganizationUnitInput {
  userIds?: number[] | null;

  /**
   * @format int64
   * @min 1
   */
  organizationUnitId?: number;
}

export interface RolesToOrganizationUnitInput {
  roleIds?: number[] | null;

  /**
   * @format int64
   * @min 1
   */
  organizationUnitId?: number;
}

export interface FindOrganizationUnitUsersInput {
  /** @format int64 */
  organizationUnitId?: number;

  /**
   * @format int32
   * @min 1
   * @max 1000
   */
  maxResultCount?: number;

  /**
   * @format int32
   * @min 0
   * @max 2147483647
   */
  skipCount?: number;
  filter?: string | null;
}

export interface FindOrganizationUnitRolesInput {
  /** @format int64 */
  organizationUnitId?: number;

  /**
   * @format int32
   * @min 1
   * @max 1000
   */
  maxResultCount?: number;

  /**
   * @format int32
   * @min 0
   * @max 2147483647
   */
  skipCount?: number;
  filter?: string | null;
}

export interface EditionSelectDto {
  /** @format int32 */
  id?: number;
  name?: string | null;
  displayName?: string | null;

  /** @format int32 */
  expiringEditionId?: number | null;

  /** @format double */
  dailyPrice?: number | null;

  /** @format double */
  weeklyPrice?: number | null;

  /** @format double */
  monthlyPrice?: number | null;

  /** @format double */
  annualPrice?: number | null;

  /** @format int32 */
  trialDayCount?: number | null;

  /** @format int32 */
  waitingDayAfterExpire?: number | null;
  isFree?: boolean;
  additionalData?: { Paypal?: Record<string, string>; Stripe?: Record<string, string> };
}

export interface PaymentInfoDto {
  edition?: EditionSelectDto;

  /** @format double */
  additionalPrice?: number;
}

/**
 * @format int32
 */
export enum EditionPaymentType {
  NewRegistration = 0,
  BuyNow = 1,
  Upgrade = 2,
  Extend = 3,
}

/**
 * @format int32
 */
export enum PaymentPeriodType {
  Daily = 1,
  Weekly = 7,
  Monthly = 30,
  Annual = 365,
}

/**
 * @format int32
 */
export enum SubscriptionPaymentGatewayType {
  Paypal = 1,
  Stripe = 2,
}

export interface CreatePaymentDto {
  /** @format int32 */
  editionId?: number;
  editionPaymentType?: EditionPaymentType;
  paymentPeriodType?: PaymentPeriodType;
  subscriptionPaymentGatewayType?: SubscriptionPaymentGatewayType;
  recurringPaymentEnabled?: boolean;
  successUrl?: string | null;
  errorUrl?: string | null;
}

export interface CancelPaymentDto {
  paymentId?: string | null;
  gateway?: SubscriptionPaymentGatewayType;
}

export interface SubscriptionPaymentListDto {
  gateway?: string | null;

  /** @format double */
  amount?: number;

  /** @format int32 */
  editionId?: number;

  /** @format int32 */
  dayCount?: number;
  paymentPeriodType?: string | null;
  externalPaymentId?: string | null;
  payerId?: string | null;
  status?: string | null;
  editionDisplayName?: string | null;

  /** @format int32 */
  tenantId?: number;
  invoiceNo?: string | null;

  /** @format date-time */
  lastModificationTime?: string | null;

  /** @format int64 */
  lastModifierUserId?: number | null;

  /** @format date-time */
  creationTime?: string;

  /** @format int64 */
  creatorUserId?: number | null;

  /** @format int32 */
  id?: number;
}

export interface PagedResultDtoOfSubscriptionPaymentListDto {
  /** @format int32 */
  totalCount?: number;
  items?: SubscriptionPaymentListDto[] | null;
}

export interface PaymentGatewayModel {
  gatewayType?: SubscriptionPaymentGatewayType;
  supportsRecurringPayments?: boolean;
}

/**
 * @format int32
 */
export enum SubscriptionPaymentStatus {
  NotPaid = 1,
  Paid = 2,
  Failed = 3,
  Cancelled = 4,
  Completed = 5,
}

export interface SubscriptionPaymentDto {
  description?: string | null;
  gateway?: SubscriptionPaymentGatewayType;

  /** @format double */
  amount?: number;

  /** @format int32 */
  editionId?: number;

  /** @format int32 */
  tenantId?: number;

  /** @format int32 */
  dayCount?: number;
  paymentPeriodType?: PaymentPeriodType;
  paymentId?: string | null;
  payerId?: string | null;
  editionDisplayName?: string | null;

  /** @format int64 */
  invoiceNo?: number;
  status?: SubscriptionPaymentStatus;
  isRecurring?: boolean;
  externalPaymentId?: string | null;
  successUrl?: string | null;
  errorUrl?: string | null;
  editionPaymentType?: EditionPaymentType;

  /** @format int64 */
  id?: number;
}

export interface PayPalConfigurationDto {
  clientId?: string | null;
  demoUsername?: string | null;
  demoPassword?: string | null;
}

export interface FlatPermissionWithLevelDto {
  /** @format int32 */
  level?: number;
  parentName?: string | null;
  name?: string | null;
  displayName?: string | null;
  description?: string | null;
  isGrantedByDefault?: boolean;
}

export interface ListResultDtoOfFlatPermissionWithLevelDto {
  items?: FlatPermissionWithLevelDto[] | null;
}

export interface PodcastListDto {
  title?: string | null;
  description?: string | null;
  thumbnailImageAddress?: string | null;
  coverImageAddress?: string | null;
  data?: string | null;

  /** @format date-time */
  creationTime?: string;

  /** @format int32 */
  id?: number;
}

export interface PagedResultDtoOfPodcastListDto {
  /** @format int32 */
  totalCount?: number;
  items?: PodcastListDto[] | null;
}

export interface PodcastTranslationDto {
  title?: string | null;
  description?: string | null;
  language?: string | null;
}

export interface CreateOrEditPodcastDto {
  /** @format int32 */
  id?: number | null;
  thumbnailImageAddress?: string | null;
  coverImageAddress?: string | null;
  data?: string | null;
  translations?: PodcastTranslationDto[] | null;
}

export interface GetForEditPodcastDto {
  /** @format int32 */
  id?: number | null;
  thumbnailImageAddress?: string | null;
  coverImageAddress?: string | null;
  data?: string | null;
  translations?: PodcastTranslationDto[] | null;
}

export interface PodcastDto {
  title?: string | null;
  description?: string | null;
  thumbnailImageAddress?: string | null;
  coverImageAddress?: string | null;
  data?: string | null;

  /** @format date-time */
  creationTime?: string;

  /** @format int32 */
  id?: number;
}

export interface CurrentUserProfileEditDto {
  name: string;
  surname: string;
  userName: string;
  emailAddress: string;
  phoneNumber?: string | null;
  isPhoneNumberConfirmed?: boolean;
  timezone?: string | null;
  qrCodeSetupImageUrl?: string | null;
  isGoogleAuthenticatorEnabled?: boolean;
  bio?: string | null;

  /** @format int32 */
  countryId?: number | null;
}

export interface UpdateGoogleAuthenticatorKeyOutput {
  qrCodeSetupImageUrl?: string | null;
}

export interface SendVerificationSmsInputDto {
  phoneNumber?: string | null;
}

export interface VerifySmsCodeInputDto {
  code?: string | null;
  phoneNumber?: string | null;
}

export interface ChangePasswordInput {
  currentPassword: string;
  newPassword: string;
}

export interface GetPasswordComplexitySettingOutput {
  setting?: PasswordComplexitySetting;
}

export interface GetProfilePictureOutput {
  profilePicture?: string | null;
}

export interface ChangeUserLanguageDto {
  languageName: string;
}

export interface GetMyProfileDetailOutput {
  name?: string | null;
  surname?: string | null;
  userName?: string | null;
  emailAddress?: string | null;
  phoneNumber?: string | null;
  profilePictureAddress?: string | null;
  isPhoneNumberConfirmed?: boolean;

  /** @format int32 */
  following?: number;

  /** @format int32 */
  followers?: number;
  bio?: string | null;

  /** @format int32 */
  xp?: number;

  /** @format int32 */
  level?: number;
  roles?: string[] | null;

  /** @format int32 */
  lecturerId?: number | null;
  country?: CountryListDto;

  /** @format int64 */
  id?: number;
}

export interface GetProfileDetailOutput {
  name?: string | null;
  surname?: string | null;
  userName?: string | null;
  profilePictureAddress?: string | null;

  /** @format int32 */
  following?: number;

  /** @format int32 */
  followers?: number;
  isMine?: boolean;
  bio?: string | null;
  isFollowing?: boolean;
  country?: CountryListDto;

  /** @format int64 */
  id?: number;
}

export interface GetRolesInput {
  permissions?: string[] | null;
}

export interface RoleListDto {
  name?: string | null;
  displayName?: string | null;
  isStatic?: boolean;
  isDefault?: boolean;

  /** @format date-time */
  creationTime?: string;

  /** @format int32 */
  id?: number;
}

export interface ListResultDtoOfRoleListDto {
  items?: RoleListDto[] | null;
}

export interface RoleEditDto {
  /** @format int32 */
  id?: number | null;
  displayName: string;
  isDefault?: boolean;
}

export interface FlatPermissionDto {
  parentName?: string | null;
  name?: string | null;
  displayName?: string | null;
  description?: string | null;
  isGrantedByDefault?: boolean;
}

export interface GetRoleForEditOutput {
  role?: RoleEditDto;
  permissions?: FlatPermissionDto[] | null;
  grantedPermissionNames?: string[] | null;
}

export interface CreateOrUpdateRoleInput {
  role: RoleEditDto;
  grantedPermissionNames: string[];
}

export interface UserLoginInfoDto {
  name?: string | null;
  surname?: string | null;
  userName?: string | null;
  emailAddress?: string | null;
  profilePictureId?: string | null;

  /** @format int64 */
  id?: number;
}

/**
 * @format int32
 */
export enum SubscriptionPaymentType {
  Manual = 0,
  RecurringAutomatic = 1,
  RecurringManual = 2,
}

export interface EditionInfoDto {
  displayName?: string | null;

  /** @format int32 */
  trialDayCount?: number | null;

  /** @format double */
  monthlyPrice?: number | null;

  /** @format double */
  annualPrice?: number | null;
  isHighestEdition?: boolean;
  isFree?: boolean;

  /** @format int32 */
  id?: number;
}

export interface TenantLoginInfoDto {
  tenancyName?: string | null;
  name?: string | null;

  /** @format uuid */
  logoId?: string | null;
  logoFileType?: string | null;

  /** @format uuid */
  customCssId?: string | null;

  /** @format date-time */
  subscriptionEndDateUtc?: string | null;
  isInTrialPeriod?: boolean;
  subscriptionPaymentType?: SubscriptionPaymentType;
  edition?: EditionInfoDto;

  /** @format date-time */
  creationTime?: string;
  paymentPeriodType?: PaymentPeriodType;
  subscriptionDateString?: string | null;
  creationTimeString?: string | null;

  /** @format int32 */
  id?: number;
}

export interface ApplicationInfoDto {
  version?: string | null;

  /** @format date-time */
  releaseDate?: string;
  currency?: string | null;
  currencySign?: string | null;
  allowTenantsToChangeEmailSettings?: boolean;
  userDelegationIsEnabled?: boolean;
  features?: Record<string, boolean>;
}

export interface ThemeLayoutSettingsDto {
  layoutType?: string | null;
}

export interface ThemeHeaderSettingsDto {
  desktopFixedHeader?: boolean;
  mobileFixedHeader?: boolean;
  headerSkin?: string | null;
  minimizeDesktopHeaderType?: string | null;
}

export interface ThemeSubHeaderSettingsDto {
  fixedSubHeader?: boolean;
  subheaderStyle?: string | null;

  /** @format int32 */
  subheaderSize?: number;
  titleStlye?: string | null;
  containerStyle?: string | null;
}

export interface ThemeMenuSettingsDto {
  position?: string | null;
  asideSkin?: string | null;
  fixedAside?: boolean;
  allowAsideMinimizing?: boolean;
  defaultMinimizedAside?: boolean;
  submenuToggle?: string | null;
  searchActive?: boolean;
  enableSecondary?: boolean;
  hoverableAside?: boolean;
}

export interface ThemeFooterSettingsDto {
  fixedFooter?: boolean;
}

export interface ThemeSettingsDto {
  theme?: string | null;
  layout?: ThemeLayoutSettingsDto;
  header?: ThemeHeaderSettingsDto;
  subHeader?: ThemeSubHeaderSettingsDto;
  menu?: ThemeMenuSettingsDto;
  footer?: ThemeFooterSettingsDto;
}

export interface UiCustomizationSettingsDto {
  baseSettings?: ThemeSettingsDto;
  isLeftMenuUsed?: boolean;
  isTopMenuUsed?: boolean;
  isTabMenuUsed?: boolean;
  allowMenuScroll?: boolean;
}

export interface GetCurrentLoginInformationsOutput {
  user?: UserLoginInfoDto;
  impersonatorUser?: UserLoginInfoDto;
  tenant?: TenantLoginInfoDto;
  impersonatorTenant?: TenantLoginInfoDto;
  application?: ApplicationInfoDto;
  theme?: UiCustomizationSettingsDto;
}

export interface UpdateUserSignInTokenOutput {
  signInToken?: string | null;
  encodedUserId?: string | null;
  encodedTenantId?: string | null;
}

/**
 * @format int32
 */
export enum SiteMenuType {
  MenuItem = 0,
  Divider = 10,
  HeaderTitle = 20,
}

export interface SiteMenuDto {
  title?: string | null;
  description?: string | null;
  url?: string | null;

  /** @format int32 */
  parentId?: number | null;
  type?: SiteMenuType;
  subMenus?: SiteMenuDto[] | null;

  /** @format int32 */
  id?: number;
}

export interface SiteMenuTranslationDto {
  title?: string | null;
  description?: string | null;
  language?: string | null;
}

export interface CreateOrEditSiteMenuDto {
  /** @format int32 */
  id?: number | null;
  translations?: SiteMenuTranslationDto[] | null;

  /** @format int32 */
  position?: number;
  url?: string | null;

  /** @format int32 */
  parentId?: number | null;
  type?: SiteMenuType;
}

export interface GetForEditSiteMenuDto {
  /** @format int32 */
  id?: number | null;
  translations?: SiteMenuTranslationDto[] | null;

  /** @format int32 */
  position?: number;
  url?: string | null;

  /** @format int32 */
  parentId?: number | null;
  type?: SiteMenuType;
}

export interface StripeConfigurationDto {
  publishableKey?: string | null;
}

export interface StripeCreatePaymentSessionInput {
  /** @format int64 */
  paymentId?: number;
  successUrl?: string | null;
  cancelUrl?: string | null;
}

export interface StripePaymentResultOutput {
  paymentDone?: boolean;
}

export interface TagsListDto {
  label?: string | null;

  /** @format int32 */
  tweets?: number;

  /** @format int32 */
  id?: number;
}

export interface PagedResultDtoOfTagsListDto {
  /** @format int32 */
  totalCount?: number;
  items?: TagsListDto[] | null;
}

export interface TenantListDto {
  tenancyName?: string | null;
  name?: string | null;
  editionDisplayName?: string | null;
  connectionString?: string | null;
  isActive?: boolean;

  /** @format date-time */
  creationTime?: string;

  /** @format date-time */
  subscriptionEndDateUtc?: string | null;

  /** @format int32 */
  editionId?: number | null;
  isInTrialPeriod?: boolean;

  /** @format int32 */
  id?: number;
}

export interface PagedResultDtoOfTenantListDto {
  /** @format int32 */
  totalCount?: number;
  items?: TenantListDto[] | null;
}

export interface CreateTenantInput {
  /** @pattern ^[a-zA-Z][a-zA-Z0-9_-]{1,}$ */
  tenancyName: string;
  name: string;

  /** @format email */
  adminEmailAddress: string;
  adminPassword?: string | null;
  connectionString?: string | null;
  shouldChangePasswordOnNextLogin?: boolean;
  sendActivationEmail?: boolean;

  /** @format int32 */
  editionId?: number | null;
  isActive?: boolean;

  /** @format date-time */
  subscriptionEndDateUtc?: string | null;
  isInTrialPeriod?: boolean;
}

export interface TenantEditDto {
  tenancyName: string;
  name: string;
  connectionString?: string | null;

  /** @format int32 */
  editionId?: number | null;
  isActive?: boolean;

  /** @format date-time */
  subscriptionEndDateUtc?: string | null;
  isInTrialPeriod?: boolean;

  /** @format int32 */
  id?: number;
}

export interface GetTenantFeaturesEditOutput {
  featureValues?: NameValueDto[] | null;
  features?: FlatFeatureDto[] | null;
}

export interface UpdateTenantFeaturesInput {
  /**
   * @format int32
   * @min 1
   * @max 2147483647
   */
  id?: number;
  featureValues: NameValueDto[];
}

export interface EntityDto {
  /** @format int32 */
  id?: number;
}

export interface MemberActivity {
  name?: string | null;
  earnings?: string | null;

  /** @format int32 */
  cases?: number;

  /** @format int32 */
  closed?: number;
  rate?: string | null;
}

export interface GetMemberActivityOutput {
  memberActivities?: MemberActivity[] | null;
}

/**
 * @format int32
 */
export enum SalesSummaryDatePeriod {
  Daily = 1,
  Weekly = 2,
  Monthly = 3,
}

export interface SalesSummaryData {
  period?: string | null;

  /** @format int32 */
  sales?: number;

  /** @format int32 */
  profit?: number;
}

export interface GetDashboardDataOutput {
  /** @format int32 */
  totalProfit?: number;

  /** @format int32 */
  newFeedbacks?: number;

  /** @format int32 */
  newOrders?: number;

  /** @format int32 */
  newUsers?: number;
  salesSummary?: SalesSummaryData[] | null;

  /** @format int32 */
  totalSales?: number;

  /** @format int32 */
  revenue?: number;

  /** @format int32 */
  expenses?: number;

  /** @format int32 */
  growth?: number;

  /** @format int32 */
  transactionPercent?: number;

  /** @format int32 */
  newVisitPercent?: number;

  /** @format int32 */
  bouncePercent?: number;
  dailySales?: number[] | null;
  profitShares?: number[] | null;
}

export interface GetTopStatsOutput {
  /** @format int32 */
  totalProfit?: number;

  /** @format int32 */
  newFeedbacks?: number;

  /** @format int32 */
  newOrders?: number;

  /** @format int32 */
  newUsers?: number;
}

export interface GetProfitShareOutput {
  profitShares?: number[] | null;
}

export interface GetDailySalesOutput {
  dailySales?: number[] | null;
}

export interface GetSalesSummaryOutput {
  /** @format int32 */
  totalSales?: number;

  /** @format int32 */
  revenue?: number;

  /** @format int32 */
  expenses?: number;

  /** @format int32 */
  growth?: number;
  salesSummary?: SalesSummaryData[] | null;
}

export interface RegionalStatCountry {
  countryName?: string | null;

  /** @format double */
  sales?: number;
  change?: number[] | null;

  /** @format double */
  averagePrice?: number;

  /** @format double */
  totalPrice?: number;
}

export interface GetRegionalStatsOutput {
  stats?: RegionalStatCountry[] | null;
}

export interface GetGeneralStatsOutput {
  /** @format int32 */
  transactionPercent?: number;

  /** @format int32 */
  newVisitPercent?: number;

  /** @format int32 */
  bouncePercent?: number;
}

export interface GetCountBoxOutput {
  /** @format int32 */
  podcastsCount?: number;

  /** @format int32 */
  coursesCount?: number;

  /** @format int32 */
  companiesCount?: number;

  /** @format int32 */
  newsCount?: number;
}

export interface GetNewUsersOutput {
  usersCountPerDay?: number[] | null;
  lables?: string[] | null;

  /** @format int64 */
  totalUsersCount?: number;
}

export interface GetNewTweetsOutput {
  tweetsCountPerDay?: number[] | null;
  lables?: string[] | null;

  /** @format int32 */
  totalTweetsCount?: number;
}

export interface GetNewCommentsOutput {
  commentsCountPerDay?: number[] | null;
  lables?: string[] | null;

  /** @format int32 */
  totalCommentsCount?: number;
}

export interface TagDto {
  label?: string | null;

  /** @format int32 */
  id?: number;
}

export interface TweetDto {
  content?: string | null;
  creatorUser?: SimpleUserDto;

  /** @format int32 */
  companyId?: number | null;
  company?: CompanyDto;

  /** @format date-time */
  creationTime?: string;

  /** @format int32 */
  likes?: number;

  /** @format int32 */
  comments?: number;
  tags?: TagDto[] | null;
  isLiked?: boolean;
  attachment?: string | null;
  attachmentType?: string | null;
  baseAddress?: string | null;

  /** @format int64 */
  id?: number;
}

export interface GetTopTweetOutput {
  tweet?: TweetDto;
  any?: boolean;
}

export interface GetTopCoursesOutput {
  chartLables?: string[] | null;
  chartDatas?: number[] | null;

  /** @format int32 */
  totalCoursesViews?: number;
  topCourses?: CourseDto[] | null;
}

/**
 * @format int32
 */
export enum SubscriptionStartType {
  Free = 1,
  Trial = 2,
  Paid = 3,
}

export interface RegisterTenantInput {
  tenancyName: string;
  name: string;

  /** @format email */
  adminEmailAddress: string;
  adminPassword?: string | null;
  captchaResponse?: string | null;
  subscriptionStartType?: SubscriptionStartType;

  /** @format int32 */
  editionId?: number | null;
}

export interface RegisterTenantOutput {
  /** @format int32 */
  tenantId?: number;
  tenancyName?: string | null;
  name?: string | null;
  userName?: string | null;
  emailAddress?: string | null;
  isTenantActive?: boolean;
  isActive?: boolean;
  isEmailConfirmationRequired?: boolean;
}

export interface FlatFeatureSelectDto {
  parentName?: string | null;
  name?: string | null;
  displayName?: string | null;
  description?: string | null;
  defaultValue?: string | null;
  inputType?: IInputType;
  textHtmlColor?: string | null;
}

export interface EditionWithFeaturesDto {
  edition?: EditionSelectDto;
  featureValues?: NameValueDto[] | null;
}

export interface EditionsSelectOutput {
  allFeatures?: FlatFeatureSelectDto[] | null;
  editionsWithFeatures?: EditionWithFeaturesDto[] | null;
}

export interface TenantUserManagementSettingsEditDto {
  allowSelfRegistration?: boolean;
  isNewRegisteredUserActiveByDefault?: boolean;
  isEmailConfirmationRequiredForLogin?: boolean;
  useCaptchaOnRegistration?: boolean;
  useCaptchaOnLogin?: boolean;
  isCookieConsentEnabled?: boolean;
  isQuickThemeSelectEnabled?: boolean;
  allowUsingGravatarProfilePicture?: boolean;
  sessionTimeOutSettings?: SessionTimeOutSettingsEditDto;
}

export interface TenantEmailSettingsEditDto {
  useHostDefaultEmailSettings?: boolean;
  defaultFromAddress?: string | null;
  defaultFromDisplayName?: string | null;
  smtpHost?: string | null;

  /** @format int32 */
  smtpPort?: number;
  smtpUserName?: string | null;
  smtpPassword?: string | null;
  smtpDomain?: string | null;
  smtpEnableSsl?: boolean;
  smtpUseDefaultCredentials?: boolean;
}

export interface LdapSettingsEditDto {
  isModuleEnabled?: boolean;
  isEnabled?: boolean;
  domain?: string | null;
  userName?: string | null;
  password?: string | null;
}

export interface TenantBillingSettingsEditDto {
  legalName?: string | null;
  address?: string | null;
  taxVatNo?: string | null;
}

export interface TenantOtherSettingsEditDto {
  isQuickThemeSelectEnabled?: boolean;
}

export interface TenantSettingsEditDto {
  general?: GeneralSettingsEditDto;
  userManagement: TenantUserManagementSettingsEditDto;
  email?: TenantEmailSettingsEditDto;
  ldap?: LdapSettingsEditDto;
  security: SecuritySettingsEditDto;
  billing?: TenantBillingSettingsEditDto;
  otherSettings?: TenantOtherSettingsEditDto;
  externalLoginProviderSettings?: ExternalLoginProviderSettingsEditDto;
}

/**
 * @format int32
 */
export enum SettingScopes {
  Application = 1,
  Tenant = 2,
  User = 4,
  All = 7,
}

export interface ListResultDtoOfNameValueDto {
  items?: NameValueDto[] | null;
}

export interface AuthenticateModel {
  userNameOrEmailAddress: string;
  password: string;
  twoFactorVerificationCode?: string | null;
  rememberClient?: boolean;
  twoFactorRememberClientToken?: string | null;
  singleSignIn?: boolean | null;
  returnUrl?: string | null;
  captchaResponse?: string | null;
}

export interface AuthenticateResultModel {
  accessToken?: string | null;
  encryptedAccessToken?: string | null;

  /** @format int32 */
  expireInSeconds?: number;
  shouldResetPassword?: boolean;
  passwordResetCode?: string | null;

  /** @format int64 */
  userId?: number;
  requiresTwoFactorVerification?: boolean;
  twoFactorAuthProviders?: string[] | null;
  twoFactorRememberClientToken?: string | null;
  returnUrl?: string | null;
  refreshToken?: string | null;

  /** @format int32 */
  refreshTokenExpireInSeconds?: number;
}

export interface RefreshTokenResult {
  accessToken?: string | null;
  encryptedAccessToken?: string | null;

  /** @format int32 */
  expireInSeconds?: number;
}

export interface SendTwoFactorAuthCodeModel {
  /**
   * @format int64
   * @min 1
   */
  userId?: number;
  provider: string;
}

export interface ImpersonatedAuthenticateResultModel {
  accessToken?: string | null;
  encryptedAccessToken?: string | null;

  /** @format int32 */
  expireInSeconds?: number;
}

export interface SwitchedAccountAuthenticateResultModel {
  accessToken?: string | null;
  encryptedAccessToken?: string | null;

  /** @format int32 */
  expireInSeconds?: number;
}

export interface ExternalLoginProviderInfoModel {
  name?: string | null;
  clientId?: string | null;
  additionalParams?: Record<string, string>;
}

export interface ExternalAuthenticateModel {
  authProvider: string;
  providerKey: string;
  providerAccessCode: string;
  returnUrl?: string | null;
  singleSignIn?: boolean | null;
}

export interface ExternalAuthenticateResultModel {
  accessToken?: string | null;
  encryptedAccessToken?: string | null;

  /** @format int32 */
  expireInSeconds?: number;
  waitingForActivation?: boolean;
  returnUrl?: string | null;
  refreshToken?: string | null;

  /** @format int32 */
  refreshTokenExpireInSeconds?: number;
}

export interface TweetListDto {
  content?: string | null;
  creatorUser?: SimpleUserDto;

  /** @format date-time */
  creationTime?: string;

  /** @format int32 */
  likes?: number;

  /** @format int32 */
  comments?: number;

  /** @format int64 */
  id?: number;
}

export interface PagedResultDtoOfTweetListDto {
  /** @format int32 */
  totalCount?: number;
  items?: TweetListDto[] | null;
}

export interface CreateOrEditTweetDto {
  /** @format int64 */
  id?: number | null;
  content?: string | null;

  /** @format int32 */
  companyId?: number | null;
}

export interface GetForEditTweetDto {
  /** @format int64 */
  id?: number | null;
  content?: string | null;

  /** @format int32 */
  companyId?: number | null;
  creatorUser?: SimpleUserDto;

  /** @format date-time */
  creationTime?: string;
  attachment?: string | null;
  attachmentType?: string | null;
}

export interface PagedResultDtoOfTweetDto {
  /** @format int32 */
  totalCount?: number;
  items?: TweetDto[] | null;
}

export interface SendNewTweetDto {
  content?: string | null;

  /** @format int32 */
  companyId?: number | null;
  attachment?: string | null;
  attachmentType?: string | null;
}

export interface UploadAttachmentOutput {
  attachment?: string | null;
  attachmentType?: string | null;
  succeed?: boolean;
  baseAddress?: string | null;
}

export interface TwitterGetRequestTokenResponse {
  token?: string | null;
  secret?: string | null;
  confirmed?: boolean;
  redirectUrl?: string | null;
}

export interface TwitterGetAccessTokenResponse {
  accessToken?: string | null;
  accessTokenSecret?: string | null;
  userId?: string | null;
  userName?: string | null;
}

export interface GetUsersInput {
  filter?: string | null;
  permissions?: string[] | null;

  /** @format int32 */
  role?: number | null;
  onlyLockedUsers?: boolean;
  sorting?: string | null;

  /**
   * @format int32
   * @min 1
   * @max 1000
   */
  maxResultCount?: number;

  /**
   * @format int32
   * @min 0
   * @max 2147483647
   */
  skipCount?: number;
}

export interface UserListRoleDto {
  /** @format int32 */
  roleId?: number;
  roleName?: string | null;
}

export interface UserListDto {
  name?: string | null;
  surname?: string | null;
  userName?: string | null;
  emailAddress?: string | null;
  phoneNumber?: string | null;

  /** @format uuid */
  profilePictureId?: string | null;
  isEmailConfirmed?: boolean;
  roles?: UserListRoleDto[] | null;
  isActive?: boolean;

  /** @format date-time */
  creationTime?: string;

  /** @format int64 */
  id?: number;
}

export interface PagedResultDtoOfUserListDto {
  /** @format int32 */
  totalCount?: number;
  items?: UserListDto[] | null;
}

export type TypeDefinitionsString = string;

export interface UserEditDto {
  /** @format int64 */
  id?: number | null;
  name: string;
  surname: string;
  userName: string;

  /** @format email */
  emailAddress: string;
  phoneNumber?: string | null;
  password?: string | null;
  isActive?: boolean;

  /** @format int32 */
  lecturerId?: number | null;
  shouldChangePasswordOnNextLogin?: boolean;
  isTwoFactorEnabled?: boolean;
  isLockoutEnabled?: boolean;
}

export interface UserRoleDto {
  /** @format int32 */
  roleId?: number;
  roleName?: string | null;
  roleDisplayName?: string | null;
  isAssigned?: boolean;
  inheritedFromOrganizationUnit?: boolean;
}

export interface GetUserForEditOutput {
  /** @format uuid */
  profilePictureId?: string | null;
  user?: UserEditDto;
  roles?: UserRoleDto[] | null;
  allOrganizationUnits?: OrganizationUnitDto[] | null;
  memberedOrganizationUnits?: string[] | null;
}

export interface GetUserPermissionsForEditOutput {
  permissions?: FlatPermissionDto[] | null;
  grantedPermissionNames?: string[] | null;
}

export interface UpdateUserPermissionsInput {
  /**
   * @format int64
   * @min 1
   * @max 2147483647
   */
  id?: number;
  grantedPermissionNames: string[];
}

export interface CreateOrUpdateUserInput {
  user: UserEditDto;
  assignedRoleNames: string[];
  sendActivationEmail?: boolean;
  setRandomPassword?: boolean;

  /** @format int32 */
  lecturerId?: number | null;
  organizationUnits?: number[] | null;
}

export interface UserDelegationDto {
  username?: string | null;

  /** @format date-time */
  startTime?: string;

  /** @format date-time */
  endTime?: string;

  /** @format int64 */
  id?: number;
}

export interface PagedResultDtoOfUserDelegationDto {
  /** @format int32 */
  totalCount?: number;
  items?: UserDelegationDto[] | null;
}

export interface CreateUserDelegationDto {
  /**
   * @format int64
   * @min 1
   */
  targetUserId: number;

  /** @format date-time */
  startTime: string;

  /** @format date-time */
  endTime: string;
}

export interface LinkToUserInput {
  tenancyName?: string | null;
  usernameOrEmailAddress: string;
  password: string;
}

export interface LinkedUserDto {
  /** @format int32 */
  tenantId?: number | null;
  tenancyName?: string | null;
  username?: string | null;

  /** @format int64 */
  id?: number;
}

export interface PagedResultDtoOfLinkedUserDto {
  /** @format int32 */
  totalCount?: number;
  items?: LinkedUserDto[] | null;
}

export interface ListResultDtoOfLinkedUserDto {
  items?: LinkedUserDto[] | null;
}

export interface UnlinkUserInput {
  /** @format int32 */
  tenantId?: number | null;

  /** @format int64 */
  userId?: number;
}

export interface UserLoginAttemptDto {
  tenancyName?: string | null;
  userNameOrEmail?: string | null;
  clientIpAddress?: string | null;
  clientName?: string | null;
  browserInfo?: string | null;
  result?: string | null;

  /** @format date-time */
  creationTime?: string;
}

export interface ListResultDtoOfUserLoginAttemptDto {
  items?: UserLoginAttemptDto[] | null;
}

export interface WebhookEvent {
  webhookName: string;
  data?: string | null;

  /** @format date-time */
  creationTime?: string;

  /** @format int32 */
  tenantId?: number | null;
  isDeleted?: boolean;

  /** @format date-time */
  deletionTime?: string | null;

  /** @format uuid */
  id?: string;
}

/**
 * @format int32
 */
export enum HttpStatusCode {
  Continue = 100,
  SwitchingProtocols = 101,
  Processing = 102,
  EarlyHints = 103,
  OK = 200,
  Created = 201,
  Accepted = 202,
  NonAuthoritativeInformation = 203,
  NoContent = 204,
  ResetContent = 205,
  PartialContent = 206,
  MultiStatus = 207,
  AlreadyReported = 208,
  IMUsed = 226,
  MultipleChoices = 300,
  Ambiguous = 301,
  MovedPermanently = 302,
  Moved = 303,
  Found = 304,
  Redirect = 305,
  SeeOther = 306,
  RedirectMethod = 307,
  NotModified = 308,
  UseProxy = 400,
  Unused = 401,
  TemporaryRedirect = 402,
  RedirectKeepVerb = 403,
  PermanentRedirect = 404,
  BadRequest = 405,
  Unauthorized = 406,
  PaymentRequired = 407,
  Forbidden = 408,
  NotFound = 409,
  MethodNotAllowed = 410,
  NotAcceptable = 411,
  ProxyAuthenticationRequired = 412,
  RequestTimeout = 413,
  Conflict = 414,
  Gone = 415,
  LengthRequired = 416,
  PreconditionFailed = 417,
  RequestEntityTooLarge = 421,
  RequestUriTooLong = 422,
  UnsupportedMediaType = 423,
  RequestedRangeNotSatisfiable = 424,
  ExpectationFailed = 426,
  MisdirectedRequest = 428,
  UnprocessableEntity = 429,
  Locked = 431,
  FailedDependency = 451,
  UpgradeRequired = 500,
  PreconditionRequired = 501,
  TooManyRequests = 502,
  RequestHeaderFieldsTooLarge = 503,
  UnavailableForLegalReasons = 504,
  InternalServerError = 505,
  NotImplemented = 506,
  BadGateway = 507,
  ServiceUnavailable = 508,
  GatewayTimeout = 510,
  HttpVersionNotSupported = 511,
  VariantAlsoNegotiates = "VariantAlsoNegotiates",
  InsufficientStorage = "InsufficientStorage",
  LoopDetected = "LoopDetected",
  NotExtended = "NotExtended",
  NetworkAuthenticationRequired = "NetworkAuthenticationRequired",
}

export interface GetAllSendAttemptsOutput {
  /** @format uuid */
  id?: string;

  /** @format uuid */
  webhookEventId?: string;
  webhookName?: string | null;
  data?: string | null;
  response?: string | null;
  responseStatusCode?: HttpStatusCode;

  /** @format date-time */
  creationTime?: string;
}

export interface PagedResultDtoOfGetAllSendAttemptsOutput {
  /** @format int32 */
  totalCount?: number;
  items?: GetAllSendAttemptsOutput[] | null;
}

export interface GetAllSendAttemptsOfWebhookEventOutput {
  /** @format uuid */
  id?: string;
  webhookUri?: string | null;

  /** @format uuid */
  webhookSubscriptionId?: string;
  response?: string | null;
  responseStatusCode?: HttpStatusCode;

  /** @format date-time */
  creationTime?: string;

  /** @format date-time */
  lastModificationTime?: string | null;
}

export interface ListResultDtoOfGetAllSendAttemptsOfWebhookEventOutput {
  items?: GetAllSendAttemptsOfWebhookEventOutput[] | null;
}

export interface GetAllSubscriptionsOutput {
  webhookUri?: string | null;
  isActive?: boolean;
  webhooks?: string[] | null;

  /** @format uuid */
  id?: string;
}

export interface ListResultDtoOfGetAllSubscriptionsOutput {
  items?: GetAllSubscriptionsOutput[] | null;
}

export interface WebhookSubscription {
  /** @format int32 */
  tenantId?: number | null;
  webhookUri?: string | null;
  secret?: string | null;
  isActive?: boolean;
  webhooks?: string[] | null;
  headers?: Record<string, string>;

  /** @format uuid */
  id?: string;
}

export interface ActivateWebhookSubscriptionInput {
  /** @format uuid */
  subscriptionId?: string;
  isActive?: boolean;
}

export interface GetAllAvailableWebhooksOutput {
  name?: string | null;
  displayName?: string | null;
  description?: string | null;
}

export interface ListResultDtoOfGetAllAvailableWebhooksOutput {
  items?: GetAllAvailableWebhooksOutput[] | null;
}

export interface GetLatestWebLogsOutput {
  latestWebLogLines?: string[] | null;
}

export interface ApiServicesAppBceventGetlatestGetParams {
  /** @format int32 */
  count?: number;
}

export interface ApiServicesAppBceventGetlatestbycategoryGetParams {
  /** @format int32 */
  CategoryMaxCount?: number;

  /** @format int32 */
  ListMinCount?: number;

  /** @format int32 */
  ListMaxCount?: number;
}

export interface ApiServicesAppBceventGeteventslistGetParams {
  Filter?: string | null;

  /** @format int32 */
  CategoryId?: number | null;
  Sorting?: string | null;

  /**
   * @format int32
   * @min 1
   * @max 1000
   */
  MaxResultCount?: number;

  /**
   * @format int32
   * @min 0
   * @max 2147483647
   */
  SkipCount?: number;
}

export interface ApiServicesAppBceventGeteventGetParams {
  /** @format int32 */
  Id?: number;
}

export interface ApiServicesAppBctestGettestsGetParams {
  /** @format int32 */
  CourseId?: number;
}

export interface ApiServicesAppBctestGettestGetParams {
  /** @format int32 */
  Id?: number;
}

export interface ApiServicesAppBctestParticipatePostParams {
  /** @format int32 */
  testId?: number;
}

export interface ApiServicesAppBlobdirectoryGetcontentGetParams {
  type: BlobType;
  Path?: string | null;
}

export interface ApiServicesAppBlobdirectoryCreatedirectoryPostParams {
  Path?: BlobType;
}

export interface ApiServicesAppBlobdirectoryCreatefilePostParams {
  Path?: BlobType;
}

export interface ApiServicesAppBlobdirectoryDeletedirectoryDeleteParams {
  type: BlobType;
  Path?: string | null;
}

export interface ApiServicesAppBlobdirectoryDeletefileDeleteParams {
  type: BlobType;
  Path?: string | null;
}

export interface ApiServicesAppCategoryGetcategoriesGetParams {
  Type?: CategoryType;
}

export interface ApiServicesAppChannelGetchannelsGetParams {
  /** @format int32 */
  SubjectId?: number | null;
}

export interface ApiServicesAppChannelGetchannelGetParams {
  /** @format int32 */
  ChannelId?: number;
}

export interface ApiServicesAppCommentGetnewscommentGetParams {
  /** @format int32 */
  Id?: number;

  /**
   * @format int32
   * @min 1
   * @max 1000
   */
  MaxResultCount?: number;

  /**
   * @format int32
   * @min 0
   * @max 2147483647
   */
  SkipCount?: number;
}

export interface ApiServicesAppCommentGetcoursemediacommentGetParams {
  /** @format int32 */
  Id?: number;

  /**
   * @format int32
   * @min 1
   * @max 1000
   */
  MaxResultCount?: number;

  /**
   * @format int32
   * @min 0
   * @max 2147483647
   */
  SkipCount?: number;
}

export interface ApiServicesAppCommentGettweetcommentGetParams {
  /** @format int64 */
  Id?: number;

  /**
   * @format int32
   * @min 1
   * @max 1000
   */
  MaxResultCount?: number;

  /**
   * @format int32
   * @min 0
   * @max 2147483647
   */
  SkipCount?: number;
}

export interface ApiServicesAppCommentGetsinglecommentGetParams {
  /** @format int32 */
  Id?: number;
}

export interface ApiServicesAppCommentDeleteDeleteParams {
  /** @format int32 */
  Id?: number;
}

export interface ApiServicesAppCompanySearchPostParams {
  term?: string | null;
}

export interface ApiServicesAppCourseGetcoursesGetParams {
  /** @format int32 */
  ChannelId?: number;

  /**
   * @format int32
   * @min 1
   * @max 1000
   */
  MaxResultCount?: number;

  /**
   * @format int32
   * @min 0
   * @max 2147483647
   */
  SkipCount?: number;
}

export interface ApiServicesAppCourseGetwatchedcoursesGetParams {
  /** @format int32 */
  ChannelId?: number;

  /**
   * @format int32
   * @min 1
   * @max 1000
   */
  MaxResultCount?: number;

  /**
   * @format int32
   * @min 0
   * @max 2147483647
   */
  SkipCount?: number;
}

export interface ApiServicesAppCourseGetsingleGetParams {
  /** @format int32 */
  id?: number;
}

export interface ApiServicesAppCoursesmediaGetcoursesmediasGetParams {
  /** @format int32 */
  Id?: number;
}

export interface ApiServicesAppCoursesmediaGetsingleGetParams {
  /** @format int32 */
  Id?: number;
}

export interface ApiServicesAppFollowerrelationshipGetfollowinglistGetParams {
  /** @format int64 */
  UserId?: number | null;

  /**
   * @format int32
   * @min 1
   * @max 1000
   */
  MaxResultCount?: number;

  /**
   * @format int32
   * @min 0
   * @max 2147483647
   */
  SkipCount?: number;
}

export interface ApiServicesAppFollowerrelationshipGetfollowerlistGetParams {
  /** @format int64 */
  UserId?: number | null;

  /**
   * @format int32
   * @min 1
   * @max 1000
   */
  MaxResultCount?: number;

  /**
   * @format int32
   * @min 0
   * @max 2147483647
   */
  SkipCount?: number;
}

export interface ApiServicesAppLanguageGetlanguagetextsGetParams {
  /**
   * @format int32
   * @min 0
   * @max 2147483647
   */
  MaxResultCount?: number;

  /**
   * @format int32
   * @min 0
   * @max 2147483647
   */
  SkipCount?: number;
  Sorting?: string | null;
  SourceName: string;
  BaseLanguageName?: string | null;
  TargetLanguageName: string;
  TargetValueFilter?: string | null;
  FilterText?: string | null;
}

export interface ApiServicesAppLanguageGetlanguagetextsfromcashGetParams {
  /**
   * @format int32
   * @min 0
   * @max 2147483647
   */
  MaxResultCount?: number;

  /**
   * @format int32
   * @min 0
   * @max 2147483647
   */
  SkipCount?: number;
  Sorting?: string | null;
  SourceName: string;
  BaseLanguageName?: string | null;
  TargetLanguageName: string;
  TargetValueFilter?: string | null;
  FilterText?: string | null;
}

export interface ApiServicesAppLecturerGetlecturerGetParams {
  /** @format int32 */
  Id?: number;
}

export interface ApiServicesAppLibrarysubjectGetsubjectsGetParams {
  /** @format int32 */
  LibraryId?: number | null;
}

export interface ApiServicesAppNewsGetrelatedGetParams {
  /** @format int32 */
  Id?: number;
}

export interface ApiServicesAppNewsGetlatestnewsGetParams {
  /** @format int32 */
  count?: number;
}

export interface ApiServicesAppNewsGetmostengagednewsGetParams {
  /** @format int32 */
  count?: number;
}

export interface ApiServicesAppNewsGetnewslistGetParams {
  Filter?: string | null;

  /** @format int32 */
  CategoryId?: number | null;
  Sorting?: string | null;

  /**
   * @format int32
   * @min 1
   * @max 1000
   */
  MaxResultCount?: number;

  /**
   * @format int32
   * @min 0
   * @max 2147483647
   */
  SkipCount?: number;
}

export interface ApiServicesAppNewsGetsinglenewsGetParams {
  /** @format int32 */
  Id?: number;
}

export interface ApiServicesAppNotificationGetusernotificationsGetParams {
  State?: UserNotificationState;

  /** @format date-time */
  StartDate?: string | null;

  /** @format date-time */
  EndDate?: string | null;

  /**
   * @format int32
   * @min 1
   * @max 1000
   */
  MaxResultCount?: number;

  /**
   * @format int32
   * @min 0
   * @max 2147483647
   */
  SkipCount?: number;
}

export interface ApiServicesAppNotificationDeletenotificationDeleteParams {
  /** @format uuid */
  Id?: string;
}

export interface ApiServicesAppNotificationDeleteallusernotificationsDeleteParams {
  State?: UserNotificationState;

  /** @format date-time */
  StartDate?: string | null;

  /** @format date-time */
  EndDate?: string | null;
}

export interface ApiServicesAppPodcastGetpodcastsGetParams {
  /**
   * @format int32
   * @min 1
   * @max 1000
   */
  MaxResultCount?: number;

  /**
   * @format int32
   * @min 0
   * @max 2147483647
   */
  SkipCount?: number;
}

export interface ApiServicesAppPodcastGetpodcastGetParams {
  /** @format int32 */
  id?: number;
}

export interface ApiServicesAppProfileGetprofiledetailGetParams {
  /** @format int64 */
  userId?: number;
}

export interface ApiServicesAppTagSearchPostParams {
  term?: string | null;
}

export interface ApiTokenauthRefreshtokenPostParams {
  refreshToken?: string | null;
}

export interface ApiTokenauthImpersonatedauthenticatePostParams {
  impersonationToken?: string | null;
}

export interface ApiTokenauthDelegatedimpersonatedauthenticatePostParams {
  /** @format int64 */
  userDelegationId?: number;
  impersonationToken?: string | null;
}

export interface ApiTokenauthLinkedaccountauthenticatePostParams {
  switchAccountToken?: string | null;
}

export interface ApiTokenauthTestnotificationGetParams {
  message?: string | null;
  severity?: string | null;
}

export interface ApiServicesAppTweetGetlatesttweetsGetParams {
  /** @format int32 */
  count?: number;
}

export interface ApiServicesAppTweetGetsingletweetGetParams {
  /** @format int64 */
  Id?: number;
}

export interface ApiServicesAppTweetGettweetsGetParams {
  /** @format int32 */
  CompanyId?: number | null;

  /** @format int32 */
  Tag?: number | null;

  /** @format int64 */
  UserId?: number | null;

  /**
   * @format int32
   * @min 1
   * @max 1000
   */
  MaxResultCount?: number;

  /**
   * @format int32
   * @min 0
   * @max 2147483647
   */
  SkipCount?: number;
}

export interface ApiServicesAppTweetGetmyfollowingstweetsGetParams {
  /** @format int32 */
  CompanyId?: number | null;

  /** @format int32 */
  Tag?: number | null;

  /** @format int64 */
  UserId?: number | null;

  /**
   * @format int32
   * @min 1
   * @max 1000
   */
  MaxResultCount?: number;

  /**
   * @format int32
   * @min 0
   * @max 2147483647
   */
  SkipCount?: number;
}
