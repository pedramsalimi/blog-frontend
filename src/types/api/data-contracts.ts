export {};
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
export interface RefreshTokenResult {
    accessToken?: string | null;
    encryptedAccessToken?: string | null;

    /** @format int32 */
    expireInSeconds?: number;
}

export interface ApiTokenauthRefreshtokenPostParams {
    refreshToken?: string | null;
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
  
    roles?: string[] | null;
   
    /** @format int64 */
    id?: number;
  }
  