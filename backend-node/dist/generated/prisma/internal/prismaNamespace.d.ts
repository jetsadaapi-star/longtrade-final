import * as runtime from "@prisma/client/runtime/client";
import type * as Prisma from "../models.js";
import { type PrismaClient } from "./class.js";
export type * from '../models.js';
export type DMMF = typeof runtime.DMMF;
export type PrismaPromise<T> = runtime.Types.Public.PrismaPromise<T>;
export declare const PrismaClientKnownRequestError: any;
export type PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError;
export declare const PrismaClientUnknownRequestError: any;
export type PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError;
export declare const PrismaClientRustPanicError: any;
export type PrismaClientRustPanicError = runtime.PrismaClientRustPanicError;
export declare const PrismaClientInitializationError: any;
export type PrismaClientInitializationError = runtime.PrismaClientInitializationError;
export declare const PrismaClientValidationError: any;
export type PrismaClientValidationError = runtime.PrismaClientValidationError;
export declare const sql: any;
export declare const empty: any;
export declare const join: any;
export declare const raw: any;
export declare const Sql: any;
export type Sql = runtime.Sql;
export declare const Decimal: any;
export type Decimal = runtime.Decimal;
export type DecimalJsLike = runtime.DecimalJsLike;
export type Extension = runtime.Types.Extensions.UserArgs;
export declare const getExtensionContext: any;
export type Args<T, F extends runtime.Operation> = runtime.Types.Public.Args<T, F>;
export type Payload<T, F extends runtime.Operation = never> = runtime.Types.Public.Payload<T, F>;
export type Result<T, A, F extends runtime.Operation> = runtime.Types.Public.Result<T, A, F>;
export type Exact<A, W> = runtime.Types.Public.Exact<A, W>;
export type PrismaVersion = {
    client: string;
    engine: string;
};
export declare const prismaVersion: PrismaVersion;
export type Bytes = runtime.Bytes;
export type JsonObject = runtime.JsonObject;
export type JsonArray = runtime.JsonArray;
export type JsonValue = runtime.JsonValue;
export type InputJsonObject = runtime.InputJsonObject;
export type InputJsonArray = runtime.InputJsonArray;
export type InputJsonValue = runtime.InputJsonValue;
export declare const NullTypes: {
    DbNull: (new (secret: never) => typeof runtime.DbNull);
    JsonNull: (new (secret: never) => typeof runtime.JsonNull);
    AnyNull: (new (secret: never) => typeof runtime.AnyNull);
};
export declare const DbNull: any;
export declare const JsonNull: any;
export declare const AnyNull: any;
type SelectAndInclude = {
    select: any;
    include: any;
};
type SelectAndOmit = {
    select: any;
    omit: any;
};
type Prisma__Pick<T, K extends keyof T> = {
    [P in K]: T[P];
};
export type Enumerable<T> = T | Array<T>;
export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
};
export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
} & (T extends SelectAndInclude ? 'Please either choose `select` or `include`.' : T extends SelectAndOmit ? 'Please either choose `select` or `omit`.' : {});
export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
} & K;
type Without<T, U> = {
    [P in Exclude<keyof T, keyof U>]?: never;
};
export type XOR<T, U> = T extends object ? U extends object ? (Without<T, U> & U) | (Without<U, T> & T) : U : T;
type IsObject<T extends any> = T extends Array<any> ? False : T extends Date ? False : T extends Uint8Array ? False : T extends BigInt ? False : T extends object ? True : False;
export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T;
type __Either<O extends object, K extends Key> = Omit<O, K> & {
    [P in K]: Prisma__Pick<O, P & keyof O>;
}[K];
type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>;
type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>;
type _Either<O extends object, K extends Key, strict extends Boolean> = {
    1: EitherStrict<O, K>;
    0: EitherLoose<O, K>;
}[strict];
export type Either<O extends object, K extends Key, strict extends Boolean = 1> = O extends unknown ? _Either<O, K, strict> : never;
export type Union = any;
export type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K];
} & {};
export type IntersectOf<U extends Union> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;
export type Overwrite<O extends object, O1 extends object> = {
    [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
} & {};
type _Merge<U extends object> = IntersectOf<Overwrite<U, {
    [K in keyof U]-?: At<U, K>;
}>>;
type Key = string | number | symbol;
type AtStrict<O extends object, K extends Key> = O[K & keyof O];
type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
    1: AtStrict<O, K>;
    0: AtLoose<O, K>;
}[strict];
export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
} & {};
export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
} & {};
type _Record<K extends keyof any, T> = {
    [P in K]: T;
};
type NoExpand<T> = T extends unknown ? T : never;
export type AtLeast<O extends object, K extends string> = NoExpand<O extends unknown ? (K extends keyof O ? {
    [P in K]: O[P];
} & O : O) | {
    [P in keyof O as P extends K ? P : never]-?: O[P];
} & O : never>;
type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;
export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;
export type Boolean = True | False;
export type True = 1;
export type False = 0;
export type Not<B extends Boolean> = {
    0: 1;
    1: 0;
}[B];
export type Extends<A1 extends any, A2 extends any> = [A1] extends [never] ? 0 : A1 extends A2 ? 1 : 0;
export type Has<U extends Union, U1 extends Union> = Not<Extends<Exclude<U1, U>, U1>>;
export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
        0: 0;
        1: 1;
    };
    1: {
        0: 1;
        1: 1;
    };
}[B1][B2];
export type Keys<U extends Union> = U extends unknown ? keyof U : never;
export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O ? O[P] : never;
} : never;
type FieldPaths<T, U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>> = IsObject<T> extends True ? U : T;
export type GetHavingFields<T> = {
    [K in keyof T]: Or<Or<Extends<'OR', K>, Extends<'AND', K>>, Extends<'NOT', K>> extends True ? T[K] extends infer TK ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never> : never : {} extends FieldPaths<T[K]> ? never : K;
}[keyof T];
type _TupleToUnion<T> = T extends (infer E)[] ? E : never;
type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>;
export type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T;
export type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>;
export type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T;
export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>;
type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>;
export declare const ModelName: {
    readonly activity_logs: "activity_logs";
    readonly api_settings: "api_settings";
    readonly article_views: "article_views";
    readonly articles: "articles";
    readonly bookings: "bookings";
    readonly cache: "cache";
    readonly cache_locks: "cache_locks";
    readonly categories: "categories";
    readonly certificates: "certificates";
    readonly coupons: "coupons";
    readonly course_schedules: "course_schedules";
    readonly courses: "courses";
    readonly ebooks: "ebooks";
    readonly email_campaigns: "email_campaigns";
    readonly email_templates: "email_templates";
    readonly enrollments: "enrollments";
    readonly expert_advisors: "expert_advisors";
    readonly failed_jobs: "failed_jobs";
    readonly indicators: "indicators";
    readonly job_batches: "job_batches";
    readonly jobs: "jobs";
    readonly lesson_completions: "lesson_completions";
    readonly lesson_videos: "lesson_videos";
    readonly marketing_analytics: "marketing_analytics";
    readonly media: "media";
    readonly migrations: "migrations";
    readonly model_has_permissions: "model_has_permissions";
    readonly model_has_roles: "model_has_roles";
    readonly pages: "pages";
    readonly password_reset_tokens: "password_reset_tokens";
    readonly payment_settings: "payment_settings";
    readonly permissions: "permissions";
    readonly personal_access_tokens: "personal_access_tokens";
    readonly popups: "popups";
    readonly product_screenshots: "product_screenshots";
    readonly products: "products";
    readonly promotion_user: "promotion_user";
    readonly promotions: "promotions";
    readonly quiz_attempts: "quiz_attempts";
    readonly reviews: "reviews";
    readonly role_has_permissions: "role_has_permissions";
    readonly roles: "roles";
    readonly sessions: "sessions";
    readonly site_settings: "site_settings";
    readonly sms_campaigns: "sms_campaigns";
    readonly social_accounts: "social_accounts";
    readonly subscription_plans: "subscription_plans";
    readonly system_settings: "system_settings";
    readonly two_factor_auth: "two_factor_auth";
    readonly user_profiles: "user_profiles";
    readonly user_subscriptions: "user_subscriptions";
    readonly users: "users";
    readonly verification_codes: "verification_codes";
};
export type ModelName = (typeof ModelName)[keyof typeof ModelName];
export interface TypeMapCb<GlobalOmitOptions = {}> extends runtime.Types.Utils.Fn<{
    extArgs: runtime.Types.Extensions.InternalArgs;
}, runtime.Types.Utils.Record<string, any>> {
    returns: TypeMap<this['params']['extArgs'], GlobalOmitOptions>;
}
export type TypeMap<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
        omit: GlobalOmitOptions;
    };
    meta: {
        modelProps: "activity_logs" | "api_settings" | "article_views" | "articles" | "bookings" | "cache" | "cache_locks" | "categories" | "certificates" | "coupons" | "course_schedules" | "courses" | "ebooks" | "email_campaigns" | "email_templates" | "enrollments" | "expert_advisors" | "failed_jobs" | "indicators" | "job_batches" | "jobs" | "lesson_completions" | "lesson_videos" | "marketing_analytics" | "media" | "migrations" | "model_has_permissions" | "model_has_roles" | "pages" | "password_reset_tokens" | "payment_settings" | "permissions" | "personal_access_tokens" | "popups" | "product_screenshots" | "products" | "promotion_user" | "promotions" | "quiz_attempts" | "reviews" | "role_has_permissions" | "roles" | "sessions" | "site_settings" | "sms_campaigns" | "social_accounts" | "subscription_plans" | "system_settings" | "two_factor_auth" | "user_profiles" | "user_subscriptions" | "users" | "verification_codes";
        txIsolationLevel: TransactionIsolationLevel;
    };
    model: {
        activity_logs: {
            payload: Prisma.$activity_logsPayload<ExtArgs>;
            fields: Prisma.activity_logsFieldRefs;
            operations: {
                findUnique: {
                    args: Prisma.activity_logsFindUniqueArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$activity_logsPayload> | null;
                };
                findUniqueOrThrow: {
                    args: Prisma.activity_logsFindUniqueOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$activity_logsPayload>;
                };
                findFirst: {
                    args: Prisma.activity_logsFindFirstArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$activity_logsPayload> | null;
                };
                findFirstOrThrow: {
                    args: Prisma.activity_logsFindFirstOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$activity_logsPayload>;
                };
                findMany: {
                    args: Prisma.activity_logsFindManyArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$activity_logsPayload>[];
                };
                create: {
                    args: Prisma.activity_logsCreateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$activity_logsPayload>;
                };
                createMany: {
                    args: Prisma.activity_logsCreateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                delete: {
                    args: Prisma.activity_logsDeleteArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$activity_logsPayload>;
                };
                update: {
                    args: Prisma.activity_logsUpdateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$activity_logsPayload>;
                };
                deleteMany: {
                    args: Prisma.activity_logsDeleteManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateMany: {
                    args: Prisma.activity_logsUpdateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                upsert: {
                    args: Prisma.activity_logsUpsertArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$activity_logsPayload>;
                };
                aggregate: {
                    args: Prisma.Activity_logsAggregateArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AggregateActivity_logs>;
                };
                groupBy: {
                    args: Prisma.activity_logsGroupByArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.Activity_logsGroupByOutputType>[];
                };
                count: {
                    args: Prisma.activity_logsCountArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.Activity_logsCountAggregateOutputType> | number;
                };
            };
        };
        api_settings: {
            payload: Prisma.$api_settingsPayload<ExtArgs>;
            fields: Prisma.api_settingsFieldRefs;
            operations: {
                findUnique: {
                    args: Prisma.api_settingsFindUniqueArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$api_settingsPayload> | null;
                };
                findUniqueOrThrow: {
                    args: Prisma.api_settingsFindUniqueOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$api_settingsPayload>;
                };
                findFirst: {
                    args: Prisma.api_settingsFindFirstArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$api_settingsPayload> | null;
                };
                findFirstOrThrow: {
                    args: Prisma.api_settingsFindFirstOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$api_settingsPayload>;
                };
                findMany: {
                    args: Prisma.api_settingsFindManyArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$api_settingsPayload>[];
                };
                create: {
                    args: Prisma.api_settingsCreateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$api_settingsPayload>;
                };
                createMany: {
                    args: Prisma.api_settingsCreateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                delete: {
                    args: Prisma.api_settingsDeleteArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$api_settingsPayload>;
                };
                update: {
                    args: Prisma.api_settingsUpdateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$api_settingsPayload>;
                };
                deleteMany: {
                    args: Prisma.api_settingsDeleteManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateMany: {
                    args: Prisma.api_settingsUpdateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                upsert: {
                    args: Prisma.api_settingsUpsertArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$api_settingsPayload>;
                };
                aggregate: {
                    args: Prisma.Api_settingsAggregateArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AggregateApi_settings>;
                };
                groupBy: {
                    args: Prisma.api_settingsGroupByArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.Api_settingsGroupByOutputType>[];
                };
                count: {
                    args: Prisma.api_settingsCountArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.Api_settingsCountAggregateOutputType> | number;
                };
            };
        };
        article_views: {
            payload: Prisma.$article_viewsPayload<ExtArgs>;
            fields: Prisma.article_viewsFieldRefs;
            operations: {
                findUnique: {
                    args: Prisma.article_viewsFindUniqueArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$article_viewsPayload> | null;
                };
                findUniqueOrThrow: {
                    args: Prisma.article_viewsFindUniqueOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$article_viewsPayload>;
                };
                findFirst: {
                    args: Prisma.article_viewsFindFirstArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$article_viewsPayload> | null;
                };
                findFirstOrThrow: {
                    args: Prisma.article_viewsFindFirstOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$article_viewsPayload>;
                };
                findMany: {
                    args: Prisma.article_viewsFindManyArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$article_viewsPayload>[];
                };
                create: {
                    args: Prisma.article_viewsCreateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$article_viewsPayload>;
                };
                createMany: {
                    args: Prisma.article_viewsCreateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                delete: {
                    args: Prisma.article_viewsDeleteArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$article_viewsPayload>;
                };
                update: {
                    args: Prisma.article_viewsUpdateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$article_viewsPayload>;
                };
                deleteMany: {
                    args: Prisma.article_viewsDeleteManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateMany: {
                    args: Prisma.article_viewsUpdateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                upsert: {
                    args: Prisma.article_viewsUpsertArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$article_viewsPayload>;
                };
                aggregate: {
                    args: Prisma.Article_viewsAggregateArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AggregateArticle_views>;
                };
                groupBy: {
                    args: Prisma.article_viewsGroupByArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.Article_viewsGroupByOutputType>[];
                };
                count: {
                    args: Prisma.article_viewsCountArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.Article_viewsCountAggregateOutputType> | number;
                };
            };
        };
        articles: {
            payload: Prisma.$articlesPayload<ExtArgs>;
            fields: Prisma.articlesFieldRefs;
            operations: {
                findUnique: {
                    args: Prisma.articlesFindUniqueArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$articlesPayload> | null;
                };
                findUniqueOrThrow: {
                    args: Prisma.articlesFindUniqueOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$articlesPayload>;
                };
                findFirst: {
                    args: Prisma.articlesFindFirstArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$articlesPayload> | null;
                };
                findFirstOrThrow: {
                    args: Prisma.articlesFindFirstOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$articlesPayload>;
                };
                findMany: {
                    args: Prisma.articlesFindManyArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$articlesPayload>[];
                };
                create: {
                    args: Prisma.articlesCreateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$articlesPayload>;
                };
                createMany: {
                    args: Prisma.articlesCreateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                delete: {
                    args: Prisma.articlesDeleteArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$articlesPayload>;
                };
                update: {
                    args: Prisma.articlesUpdateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$articlesPayload>;
                };
                deleteMany: {
                    args: Prisma.articlesDeleteManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateMany: {
                    args: Prisma.articlesUpdateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                upsert: {
                    args: Prisma.articlesUpsertArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$articlesPayload>;
                };
                aggregate: {
                    args: Prisma.ArticlesAggregateArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AggregateArticles>;
                };
                groupBy: {
                    args: Prisma.articlesGroupByArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.ArticlesGroupByOutputType>[];
                };
                count: {
                    args: Prisma.articlesCountArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.ArticlesCountAggregateOutputType> | number;
                };
            };
        };
        bookings: {
            payload: Prisma.$bookingsPayload<ExtArgs>;
            fields: Prisma.bookingsFieldRefs;
            operations: {
                findUnique: {
                    args: Prisma.bookingsFindUniqueArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$bookingsPayload> | null;
                };
                findUniqueOrThrow: {
                    args: Prisma.bookingsFindUniqueOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$bookingsPayload>;
                };
                findFirst: {
                    args: Prisma.bookingsFindFirstArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$bookingsPayload> | null;
                };
                findFirstOrThrow: {
                    args: Prisma.bookingsFindFirstOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$bookingsPayload>;
                };
                findMany: {
                    args: Prisma.bookingsFindManyArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$bookingsPayload>[];
                };
                create: {
                    args: Prisma.bookingsCreateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$bookingsPayload>;
                };
                createMany: {
                    args: Prisma.bookingsCreateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                delete: {
                    args: Prisma.bookingsDeleteArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$bookingsPayload>;
                };
                update: {
                    args: Prisma.bookingsUpdateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$bookingsPayload>;
                };
                deleteMany: {
                    args: Prisma.bookingsDeleteManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateMany: {
                    args: Prisma.bookingsUpdateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                upsert: {
                    args: Prisma.bookingsUpsertArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$bookingsPayload>;
                };
                aggregate: {
                    args: Prisma.BookingsAggregateArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AggregateBookings>;
                };
                groupBy: {
                    args: Prisma.bookingsGroupByArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.BookingsGroupByOutputType>[];
                };
                count: {
                    args: Prisma.bookingsCountArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.BookingsCountAggregateOutputType> | number;
                };
            };
        };
        cache: {
            payload: Prisma.$cachePayload<ExtArgs>;
            fields: Prisma.cacheFieldRefs;
            operations: {
                findUnique: {
                    args: Prisma.cacheFindUniqueArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$cachePayload> | null;
                };
                findUniqueOrThrow: {
                    args: Prisma.cacheFindUniqueOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$cachePayload>;
                };
                findFirst: {
                    args: Prisma.cacheFindFirstArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$cachePayload> | null;
                };
                findFirstOrThrow: {
                    args: Prisma.cacheFindFirstOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$cachePayload>;
                };
                findMany: {
                    args: Prisma.cacheFindManyArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$cachePayload>[];
                };
                create: {
                    args: Prisma.cacheCreateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$cachePayload>;
                };
                createMany: {
                    args: Prisma.cacheCreateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                delete: {
                    args: Prisma.cacheDeleteArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$cachePayload>;
                };
                update: {
                    args: Prisma.cacheUpdateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$cachePayload>;
                };
                deleteMany: {
                    args: Prisma.cacheDeleteManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateMany: {
                    args: Prisma.cacheUpdateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                upsert: {
                    args: Prisma.cacheUpsertArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$cachePayload>;
                };
                aggregate: {
                    args: Prisma.CacheAggregateArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AggregateCache>;
                };
                groupBy: {
                    args: Prisma.cacheGroupByArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.CacheGroupByOutputType>[];
                };
                count: {
                    args: Prisma.cacheCountArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.CacheCountAggregateOutputType> | number;
                };
            };
        };
        cache_locks: {
            payload: Prisma.$cache_locksPayload<ExtArgs>;
            fields: Prisma.cache_locksFieldRefs;
            operations: {
                findUnique: {
                    args: Prisma.cache_locksFindUniqueArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$cache_locksPayload> | null;
                };
                findUniqueOrThrow: {
                    args: Prisma.cache_locksFindUniqueOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$cache_locksPayload>;
                };
                findFirst: {
                    args: Prisma.cache_locksFindFirstArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$cache_locksPayload> | null;
                };
                findFirstOrThrow: {
                    args: Prisma.cache_locksFindFirstOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$cache_locksPayload>;
                };
                findMany: {
                    args: Prisma.cache_locksFindManyArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$cache_locksPayload>[];
                };
                create: {
                    args: Prisma.cache_locksCreateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$cache_locksPayload>;
                };
                createMany: {
                    args: Prisma.cache_locksCreateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                delete: {
                    args: Prisma.cache_locksDeleteArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$cache_locksPayload>;
                };
                update: {
                    args: Prisma.cache_locksUpdateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$cache_locksPayload>;
                };
                deleteMany: {
                    args: Prisma.cache_locksDeleteManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateMany: {
                    args: Prisma.cache_locksUpdateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                upsert: {
                    args: Prisma.cache_locksUpsertArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$cache_locksPayload>;
                };
                aggregate: {
                    args: Prisma.Cache_locksAggregateArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AggregateCache_locks>;
                };
                groupBy: {
                    args: Prisma.cache_locksGroupByArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.Cache_locksGroupByOutputType>[];
                };
                count: {
                    args: Prisma.cache_locksCountArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.Cache_locksCountAggregateOutputType> | number;
                };
            };
        };
        categories: {
            payload: Prisma.$categoriesPayload<ExtArgs>;
            fields: Prisma.categoriesFieldRefs;
            operations: {
                findUnique: {
                    args: Prisma.categoriesFindUniqueArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$categoriesPayload> | null;
                };
                findUniqueOrThrow: {
                    args: Prisma.categoriesFindUniqueOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$categoriesPayload>;
                };
                findFirst: {
                    args: Prisma.categoriesFindFirstArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$categoriesPayload> | null;
                };
                findFirstOrThrow: {
                    args: Prisma.categoriesFindFirstOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$categoriesPayload>;
                };
                findMany: {
                    args: Prisma.categoriesFindManyArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$categoriesPayload>[];
                };
                create: {
                    args: Prisma.categoriesCreateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$categoriesPayload>;
                };
                createMany: {
                    args: Prisma.categoriesCreateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                delete: {
                    args: Prisma.categoriesDeleteArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$categoriesPayload>;
                };
                update: {
                    args: Prisma.categoriesUpdateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$categoriesPayload>;
                };
                deleteMany: {
                    args: Prisma.categoriesDeleteManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateMany: {
                    args: Prisma.categoriesUpdateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                upsert: {
                    args: Prisma.categoriesUpsertArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$categoriesPayload>;
                };
                aggregate: {
                    args: Prisma.CategoriesAggregateArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AggregateCategories>;
                };
                groupBy: {
                    args: Prisma.categoriesGroupByArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.CategoriesGroupByOutputType>[];
                };
                count: {
                    args: Prisma.categoriesCountArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.CategoriesCountAggregateOutputType> | number;
                };
            };
        };
        certificates: {
            payload: Prisma.$certificatesPayload<ExtArgs>;
            fields: Prisma.certificatesFieldRefs;
            operations: {
                findUnique: {
                    args: Prisma.certificatesFindUniqueArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$certificatesPayload> | null;
                };
                findUniqueOrThrow: {
                    args: Prisma.certificatesFindUniqueOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$certificatesPayload>;
                };
                findFirst: {
                    args: Prisma.certificatesFindFirstArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$certificatesPayload> | null;
                };
                findFirstOrThrow: {
                    args: Prisma.certificatesFindFirstOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$certificatesPayload>;
                };
                findMany: {
                    args: Prisma.certificatesFindManyArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$certificatesPayload>[];
                };
                create: {
                    args: Prisma.certificatesCreateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$certificatesPayload>;
                };
                createMany: {
                    args: Prisma.certificatesCreateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                delete: {
                    args: Prisma.certificatesDeleteArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$certificatesPayload>;
                };
                update: {
                    args: Prisma.certificatesUpdateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$certificatesPayload>;
                };
                deleteMany: {
                    args: Prisma.certificatesDeleteManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateMany: {
                    args: Prisma.certificatesUpdateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                upsert: {
                    args: Prisma.certificatesUpsertArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$certificatesPayload>;
                };
                aggregate: {
                    args: Prisma.CertificatesAggregateArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AggregateCertificates>;
                };
                groupBy: {
                    args: Prisma.certificatesGroupByArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.CertificatesGroupByOutputType>[];
                };
                count: {
                    args: Prisma.certificatesCountArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.CertificatesCountAggregateOutputType> | number;
                };
            };
        };
        coupons: {
            payload: Prisma.$couponsPayload<ExtArgs>;
            fields: Prisma.couponsFieldRefs;
            operations: {
                findUnique: {
                    args: Prisma.couponsFindUniqueArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$couponsPayload> | null;
                };
                findUniqueOrThrow: {
                    args: Prisma.couponsFindUniqueOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$couponsPayload>;
                };
                findFirst: {
                    args: Prisma.couponsFindFirstArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$couponsPayload> | null;
                };
                findFirstOrThrow: {
                    args: Prisma.couponsFindFirstOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$couponsPayload>;
                };
                findMany: {
                    args: Prisma.couponsFindManyArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$couponsPayload>[];
                };
                create: {
                    args: Prisma.couponsCreateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$couponsPayload>;
                };
                createMany: {
                    args: Prisma.couponsCreateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                delete: {
                    args: Prisma.couponsDeleteArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$couponsPayload>;
                };
                update: {
                    args: Prisma.couponsUpdateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$couponsPayload>;
                };
                deleteMany: {
                    args: Prisma.couponsDeleteManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateMany: {
                    args: Prisma.couponsUpdateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                upsert: {
                    args: Prisma.couponsUpsertArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$couponsPayload>;
                };
                aggregate: {
                    args: Prisma.CouponsAggregateArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AggregateCoupons>;
                };
                groupBy: {
                    args: Prisma.couponsGroupByArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.CouponsGroupByOutputType>[];
                };
                count: {
                    args: Prisma.couponsCountArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.CouponsCountAggregateOutputType> | number;
                };
            };
        };
        course_schedules: {
            payload: Prisma.$course_schedulesPayload<ExtArgs>;
            fields: Prisma.course_schedulesFieldRefs;
            operations: {
                findUnique: {
                    args: Prisma.course_schedulesFindUniqueArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$course_schedulesPayload> | null;
                };
                findUniqueOrThrow: {
                    args: Prisma.course_schedulesFindUniqueOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$course_schedulesPayload>;
                };
                findFirst: {
                    args: Prisma.course_schedulesFindFirstArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$course_schedulesPayload> | null;
                };
                findFirstOrThrow: {
                    args: Prisma.course_schedulesFindFirstOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$course_schedulesPayload>;
                };
                findMany: {
                    args: Prisma.course_schedulesFindManyArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$course_schedulesPayload>[];
                };
                create: {
                    args: Prisma.course_schedulesCreateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$course_schedulesPayload>;
                };
                createMany: {
                    args: Prisma.course_schedulesCreateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                delete: {
                    args: Prisma.course_schedulesDeleteArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$course_schedulesPayload>;
                };
                update: {
                    args: Prisma.course_schedulesUpdateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$course_schedulesPayload>;
                };
                deleteMany: {
                    args: Prisma.course_schedulesDeleteManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateMany: {
                    args: Prisma.course_schedulesUpdateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                upsert: {
                    args: Prisma.course_schedulesUpsertArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$course_schedulesPayload>;
                };
                aggregate: {
                    args: Prisma.Course_schedulesAggregateArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AggregateCourse_schedules>;
                };
                groupBy: {
                    args: Prisma.course_schedulesGroupByArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.Course_schedulesGroupByOutputType>[];
                };
                count: {
                    args: Prisma.course_schedulesCountArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.Course_schedulesCountAggregateOutputType> | number;
                };
            };
        };
        courses: {
            payload: Prisma.$coursesPayload<ExtArgs>;
            fields: Prisma.coursesFieldRefs;
            operations: {
                findUnique: {
                    args: Prisma.coursesFindUniqueArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$coursesPayload> | null;
                };
                findUniqueOrThrow: {
                    args: Prisma.coursesFindUniqueOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$coursesPayload>;
                };
                findFirst: {
                    args: Prisma.coursesFindFirstArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$coursesPayload> | null;
                };
                findFirstOrThrow: {
                    args: Prisma.coursesFindFirstOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$coursesPayload>;
                };
                findMany: {
                    args: Prisma.coursesFindManyArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$coursesPayload>[];
                };
                create: {
                    args: Prisma.coursesCreateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$coursesPayload>;
                };
                createMany: {
                    args: Prisma.coursesCreateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                delete: {
                    args: Prisma.coursesDeleteArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$coursesPayload>;
                };
                update: {
                    args: Prisma.coursesUpdateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$coursesPayload>;
                };
                deleteMany: {
                    args: Prisma.coursesDeleteManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateMany: {
                    args: Prisma.coursesUpdateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                upsert: {
                    args: Prisma.coursesUpsertArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$coursesPayload>;
                };
                aggregate: {
                    args: Prisma.CoursesAggregateArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AggregateCourses>;
                };
                groupBy: {
                    args: Prisma.coursesGroupByArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.CoursesGroupByOutputType>[];
                };
                count: {
                    args: Prisma.coursesCountArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.CoursesCountAggregateOutputType> | number;
                };
            };
        };
        ebooks: {
            payload: Prisma.$ebooksPayload<ExtArgs>;
            fields: Prisma.ebooksFieldRefs;
            operations: {
                findUnique: {
                    args: Prisma.ebooksFindUniqueArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ebooksPayload> | null;
                };
                findUniqueOrThrow: {
                    args: Prisma.ebooksFindUniqueOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ebooksPayload>;
                };
                findFirst: {
                    args: Prisma.ebooksFindFirstArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ebooksPayload> | null;
                };
                findFirstOrThrow: {
                    args: Prisma.ebooksFindFirstOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ebooksPayload>;
                };
                findMany: {
                    args: Prisma.ebooksFindManyArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ebooksPayload>[];
                };
                create: {
                    args: Prisma.ebooksCreateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ebooksPayload>;
                };
                createMany: {
                    args: Prisma.ebooksCreateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                delete: {
                    args: Prisma.ebooksDeleteArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ebooksPayload>;
                };
                update: {
                    args: Prisma.ebooksUpdateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ebooksPayload>;
                };
                deleteMany: {
                    args: Prisma.ebooksDeleteManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateMany: {
                    args: Prisma.ebooksUpdateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                upsert: {
                    args: Prisma.ebooksUpsertArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ebooksPayload>;
                };
                aggregate: {
                    args: Prisma.EbooksAggregateArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AggregateEbooks>;
                };
                groupBy: {
                    args: Prisma.ebooksGroupByArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.EbooksGroupByOutputType>[];
                };
                count: {
                    args: Prisma.ebooksCountArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.EbooksCountAggregateOutputType> | number;
                };
            };
        };
        email_campaigns: {
            payload: Prisma.$email_campaignsPayload<ExtArgs>;
            fields: Prisma.email_campaignsFieldRefs;
            operations: {
                findUnique: {
                    args: Prisma.email_campaignsFindUniqueArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$email_campaignsPayload> | null;
                };
                findUniqueOrThrow: {
                    args: Prisma.email_campaignsFindUniqueOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$email_campaignsPayload>;
                };
                findFirst: {
                    args: Prisma.email_campaignsFindFirstArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$email_campaignsPayload> | null;
                };
                findFirstOrThrow: {
                    args: Prisma.email_campaignsFindFirstOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$email_campaignsPayload>;
                };
                findMany: {
                    args: Prisma.email_campaignsFindManyArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$email_campaignsPayload>[];
                };
                create: {
                    args: Prisma.email_campaignsCreateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$email_campaignsPayload>;
                };
                createMany: {
                    args: Prisma.email_campaignsCreateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                delete: {
                    args: Prisma.email_campaignsDeleteArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$email_campaignsPayload>;
                };
                update: {
                    args: Prisma.email_campaignsUpdateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$email_campaignsPayload>;
                };
                deleteMany: {
                    args: Prisma.email_campaignsDeleteManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateMany: {
                    args: Prisma.email_campaignsUpdateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                upsert: {
                    args: Prisma.email_campaignsUpsertArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$email_campaignsPayload>;
                };
                aggregate: {
                    args: Prisma.Email_campaignsAggregateArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AggregateEmail_campaigns>;
                };
                groupBy: {
                    args: Prisma.email_campaignsGroupByArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.Email_campaignsGroupByOutputType>[];
                };
                count: {
                    args: Prisma.email_campaignsCountArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.Email_campaignsCountAggregateOutputType> | number;
                };
            };
        };
        email_templates: {
            payload: Prisma.$email_templatesPayload<ExtArgs>;
            fields: Prisma.email_templatesFieldRefs;
            operations: {
                findUnique: {
                    args: Prisma.email_templatesFindUniqueArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$email_templatesPayload> | null;
                };
                findUniqueOrThrow: {
                    args: Prisma.email_templatesFindUniqueOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$email_templatesPayload>;
                };
                findFirst: {
                    args: Prisma.email_templatesFindFirstArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$email_templatesPayload> | null;
                };
                findFirstOrThrow: {
                    args: Prisma.email_templatesFindFirstOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$email_templatesPayload>;
                };
                findMany: {
                    args: Prisma.email_templatesFindManyArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$email_templatesPayload>[];
                };
                create: {
                    args: Prisma.email_templatesCreateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$email_templatesPayload>;
                };
                createMany: {
                    args: Prisma.email_templatesCreateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                delete: {
                    args: Prisma.email_templatesDeleteArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$email_templatesPayload>;
                };
                update: {
                    args: Prisma.email_templatesUpdateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$email_templatesPayload>;
                };
                deleteMany: {
                    args: Prisma.email_templatesDeleteManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateMany: {
                    args: Prisma.email_templatesUpdateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                upsert: {
                    args: Prisma.email_templatesUpsertArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$email_templatesPayload>;
                };
                aggregate: {
                    args: Prisma.Email_templatesAggregateArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AggregateEmail_templates>;
                };
                groupBy: {
                    args: Prisma.email_templatesGroupByArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.Email_templatesGroupByOutputType>[];
                };
                count: {
                    args: Prisma.email_templatesCountArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.Email_templatesCountAggregateOutputType> | number;
                };
            };
        };
        enrollments: {
            payload: Prisma.$enrollmentsPayload<ExtArgs>;
            fields: Prisma.enrollmentsFieldRefs;
            operations: {
                findUnique: {
                    args: Prisma.enrollmentsFindUniqueArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$enrollmentsPayload> | null;
                };
                findUniqueOrThrow: {
                    args: Prisma.enrollmentsFindUniqueOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$enrollmentsPayload>;
                };
                findFirst: {
                    args: Prisma.enrollmentsFindFirstArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$enrollmentsPayload> | null;
                };
                findFirstOrThrow: {
                    args: Prisma.enrollmentsFindFirstOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$enrollmentsPayload>;
                };
                findMany: {
                    args: Prisma.enrollmentsFindManyArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$enrollmentsPayload>[];
                };
                create: {
                    args: Prisma.enrollmentsCreateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$enrollmentsPayload>;
                };
                createMany: {
                    args: Prisma.enrollmentsCreateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                delete: {
                    args: Prisma.enrollmentsDeleteArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$enrollmentsPayload>;
                };
                update: {
                    args: Prisma.enrollmentsUpdateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$enrollmentsPayload>;
                };
                deleteMany: {
                    args: Prisma.enrollmentsDeleteManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateMany: {
                    args: Prisma.enrollmentsUpdateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                upsert: {
                    args: Prisma.enrollmentsUpsertArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$enrollmentsPayload>;
                };
                aggregate: {
                    args: Prisma.EnrollmentsAggregateArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AggregateEnrollments>;
                };
                groupBy: {
                    args: Prisma.enrollmentsGroupByArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.EnrollmentsGroupByOutputType>[];
                };
                count: {
                    args: Prisma.enrollmentsCountArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.EnrollmentsCountAggregateOutputType> | number;
                };
            };
        };
        expert_advisors: {
            payload: Prisma.$expert_advisorsPayload<ExtArgs>;
            fields: Prisma.expert_advisorsFieldRefs;
            operations: {
                findUnique: {
                    args: Prisma.expert_advisorsFindUniqueArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$expert_advisorsPayload> | null;
                };
                findUniqueOrThrow: {
                    args: Prisma.expert_advisorsFindUniqueOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$expert_advisorsPayload>;
                };
                findFirst: {
                    args: Prisma.expert_advisorsFindFirstArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$expert_advisorsPayload> | null;
                };
                findFirstOrThrow: {
                    args: Prisma.expert_advisorsFindFirstOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$expert_advisorsPayload>;
                };
                findMany: {
                    args: Prisma.expert_advisorsFindManyArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$expert_advisorsPayload>[];
                };
                create: {
                    args: Prisma.expert_advisorsCreateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$expert_advisorsPayload>;
                };
                createMany: {
                    args: Prisma.expert_advisorsCreateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                delete: {
                    args: Prisma.expert_advisorsDeleteArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$expert_advisorsPayload>;
                };
                update: {
                    args: Prisma.expert_advisorsUpdateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$expert_advisorsPayload>;
                };
                deleteMany: {
                    args: Prisma.expert_advisorsDeleteManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateMany: {
                    args: Prisma.expert_advisorsUpdateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                upsert: {
                    args: Prisma.expert_advisorsUpsertArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$expert_advisorsPayload>;
                };
                aggregate: {
                    args: Prisma.Expert_advisorsAggregateArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AggregateExpert_advisors>;
                };
                groupBy: {
                    args: Prisma.expert_advisorsGroupByArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.Expert_advisorsGroupByOutputType>[];
                };
                count: {
                    args: Prisma.expert_advisorsCountArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.Expert_advisorsCountAggregateOutputType> | number;
                };
            };
        };
        failed_jobs: {
            payload: Prisma.$failed_jobsPayload<ExtArgs>;
            fields: Prisma.failed_jobsFieldRefs;
            operations: {
                findUnique: {
                    args: Prisma.failed_jobsFindUniqueArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$failed_jobsPayload> | null;
                };
                findUniqueOrThrow: {
                    args: Prisma.failed_jobsFindUniqueOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$failed_jobsPayload>;
                };
                findFirst: {
                    args: Prisma.failed_jobsFindFirstArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$failed_jobsPayload> | null;
                };
                findFirstOrThrow: {
                    args: Prisma.failed_jobsFindFirstOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$failed_jobsPayload>;
                };
                findMany: {
                    args: Prisma.failed_jobsFindManyArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$failed_jobsPayload>[];
                };
                create: {
                    args: Prisma.failed_jobsCreateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$failed_jobsPayload>;
                };
                createMany: {
                    args: Prisma.failed_jobsCreateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                delete: {
                    args: Prisma.failed_jobsDeleteArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$failed_jobsPayload>;
                };
                update: {
                    args: Prisma.failed_jobsUpdateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$failed_jobsPayload>;
                };
                deleteMany: {
                    args: Prisma.failed_jobsDeleteManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateMany: {
                    args: Prisma.failed_jobsUpdateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                upsert: {
                    args: Prisma.failed_jobsUpsertArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$failed_jobsPayload>;
                };
                aggregate: {
                    args: Prisma.Failed_jobsAggregateArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AggregateFailed_jobs>;
                };
                groupBy: {
                    args: Prisma.failed_jobsGroupByArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.Failed_jobsGroupByOutputType>[];
                };
                count: {
                    args: Prisma.failed_jobsCountArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.Failed_jobsCountAggregateOutputType> | number;
                };
            };
        };
        indicators: {
            payload: Prisma.$indicatorsPayload<ExtArgs>;
            fields: Prisma.indicatorsFieldRefs;
            operations: {
                findUnique: {
                    args: Prisma.indicatorsFindUniqueArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$indicatorsPayload> | null;
                };
                findUniqueOrThrow: {
                    args: Prisma.indicatorsFindUniqueOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$indicatorsPayload>;
                };
                findFirst: {
                    args: Prisma.indicatorsFindFirstArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$indicatorsPayload> | null;
                };
                findFirstOrThrow: {
                    args: Prisma.indicatorsFindFirstOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$indicatorsPayload>;
                };
                findMany: {
                    args: Prisma.indicatorsFindManyArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$indicatorsPayload>[];
                };
                create: {
                    args: Prisma.indicatorsCreateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$indicatorsPayload>;
                };
                createMany: {
                    args: Prisma.indicatorsCreateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                delete: {
                    args: Prisma.indicatorsDeleteArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$indicatorsPayload>;
                };
                update: {
                    args: Prisma.indicatorsUpdateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$indicatorsPayload>;
                };
                deleteMany: {
                    args: Prisma.indicatorsDeleteManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateMany: {
                    args: Prisma.indicatorsUpdateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                upsert: {
                    args: Prisma.indicatorsUpsertArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$indicatorsPayload>;
                };
                aggregate: {
                    args: Prisma.IndicatorsAggregateArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AggregateIndicators>;
                };
                groupBy: {
                    args: Prisma.indicatorsGroupByArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.IndicatorsGroupByOutputType>[];
                };
                count: {
                    args: Prisma.indicatorsCountArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.IndicatorsCountAggregateOutputType> | number;
                };
            };
        };
        job_batches: {
            payload: Prisma.$job_batchesPayload<ExtArgs>;
            fields: Prisma.job_batchesFieldRefs;
            operations: {
                findUnique: {
                    args: Prisma.job_batchesFindUniqueArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$job_batchesPayload> | null;
                };
                findUniqueOrThrow: {
                    args: Prisma.job_batchesFindUniqueOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$job_batchesPayload>;
                };
                findFirst: {
                    args: Prisma.job_batchesFindFirstArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$job_batchesPayload> | null;
                };
                findFirstOrThrow: {
                    args: Prisma.job_batchesFindFirstOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$job_batchesPayload>;
                };
                findMany: {
                    args: Prisma.job_batchesFindManyArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$job_batchesPayload>[];
                };
                create: {
                    args: Prisma.job_batchesCreateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$job_batchesPayload>;
                };
                createMany: {
                    args: Prisma.job_batchesCreateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                delete: {
                    args: Prisma.job_batchesDeleteArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$job_batchesPayload>;
                };
                update: {
                    args: Prisma.job_batchesUpdateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$job_batchesPayload>;
                };
                deleteMany: {
                    args: Prisma.job_batchesDeleteManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateMany: {
                    args: Prisma.job_batchesUpdateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                upsert: {
                    args: Prisma.job_batchesUpsertArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$job_batchesPayload>;
                };
                aggregate: {
                    args: Prisma.Job_batchesAggregateArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AggregateJob_batches>;
                };
                groupBy: {
                    args: Prisma.job_batchesGroupByArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.Job_batchesGroupByOutputType>[];
                };
                count: {
                    args: Prisma.job_batchesCountArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.Job_batchesCountAggregateOutputType> | number;
                };
            };
        };
        jobs: {
            payload: Prisma.$jobsPayload<ExtArgs>;
            fields: Prisma.jobsFieldRefs;
            operations: {
                findUnique: {
                    args: Prisma.jobsFindUniqueArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$jobsPayload> | null;
                };
                findUniqueOrThrow: {
                    args: Prisma.jobsFindUniqueOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$jobsPayload>;
                };
                findFirst: {
                    args: Prisma.jobsFindFirstArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$jobsPayload> | null;
                };
                findFirstOrThrow: {
                    args: Prisma.jobsFindFirstOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$jobsPayload>;
                };
                findMany: {
                    args: Prisma.jobsFindManyArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$jobsPayload>[];
                };
                create: {
                    args: Prisma.jobsCreateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$jobsPayload>;
                };
                createMany: {
                    args: Prisma.jobsCreateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                delete: {
                    args: Prisma.jobsDeleteArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$jobsPayload>;
                };
                update: {
                    args: Prisma.jobsUpdateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$jobsPayload>;
                };
                deleteMany: {
                    args: Prisma.jobsDeleteManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateMany: {
                    args: Prisma.jobsUpdateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                upsert: {
                    args: Prisma.jobsUpsertArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$jobsPayload>;
                };
                aggregate: {
                    args: Prisma.JobsAggregateArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AggregateJobs>;
                };
                groupBy: {
                    args: Prisma.jobsGroupByArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.JobsGroupByOutputType>[];
                };
                count: {
                    args: Prisma.jobsCountArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.JobsCountAggregateOutputType> | number;
                };
            };
        };
        lesson_completions: {
            payload: Prisma.$lesson_completionsPayload<ExtArgs>;
            fields: Prisma.lesson_completionsFieldRefs;
            operations: {
                findUnique: {
                    args: Prisma.lesson_completionsFindUniqueArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$lesson_completionsPayload> | null;
                };
                findUniqueOrThrow: {
                    args: Prisma.lesson_completionsFindUniqueOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$lesson_completionsPayload>;
                };
                findFirst: {
                    args: Prisma.lesson_completionsFindFirstArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$lesson_completionsPayload> | null;
                };
                findFirstOrThrow: {
                    args: Prisma.lesson_completionsFindFirstOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$lesson_completionsPayload>;
                };
                findMany: {
                    args: Prisma.lesson_completionsFindManyArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$lesson_completionsPayload>[];
                };
                create: {
                    args: Prisma.lesson_completionsCreateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$lesson_completionsPayload>;
                };
                createMany: {
                    args: Prisma.lesson_completionsCreateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                delete: {
                    args: Prisma.lesson_completionsDeleteArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$lesson_completionsPayload>;
                };
                update: {
                    args: Prisma.lesson_completionsUpdateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$lesson_completionsPayload>;
                };
                deleteMany: {
                    args: Prisma.lesson_completionsDeleteManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateMany: {
                    args: Prisma.lesson_completionsUpdateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                upsert: {
                    args: Prisma.lesson_completionsUpsertArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$lesson_completionsPayload>;
                };
                aggregate: {
                    args: Prisma.Lesson_completionsAggregateArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AggregateLesson_completions>;
                };
                groupBy: {
                    args: Prisma.lesson_completionsGroupByArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.Lesson_completionsGroupByOutputType>[];
                };
                count: {
                    args: Prisma.lesson_completionsCountArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.Lesson_completionsCountAggregateOutputType> | number;
                };
            };
        };
        lesson_videos: {
            payload: Prisma.$lesson_videosPayload<ExtArgs>;
            fields: Prisma.lesson_videosFieldRefs;
            operations: {
                findUnique: {
                    args: Prisma.lesson_videosFindUniqueArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$lesson_videosPayload> | null;
                };
                findUniqueOrThrow: {
                    args: Prisma.lesson_videosFindUniqueOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$lesson_videosPayload>;
                };
                findFirst: {
                    args: Prisma.lesson_videosFindFirstArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$lesson_videosPayload> | null;
                };
                findFirstOrThrow: {
                    args: Prisma.lesson_videosFindFirstOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$lesson_videosPayload>;
                };
                findMany: {
                    args: Prisma.lesson_videosFindManyArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$lesson_videosPayload>[];
                };
                create: {
                    args: Prisma.lesson_videosCreateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$lesson_videosPayload>;
                };
                createMany: {
                    args: Prisma.lesson_videosCreateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                delete: {
                    args: Prisma.lesson_videosDeleteArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$lesson_videosPayload>;
                };
                update: {
                    args: Prisma.lesson_videosUpdateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$lesson_videosPayload>;
                };
                deleteMany: {
                    args: Prisma.lesson_videosDeleteManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateMany: {
                    args: Prisma.lesson_videosUpdateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                upsert: {
                    args: Prisma.lesson_videosUpsertArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$lesson_videosPayload>;
                };
                aggregate: {
                    args: Prisma.Lesson_videosAggregateArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AggregateLesson_videos>;
                };
                groupBy: {
                    args: Prisma.lesson_videosGroupByArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.Lesson_videosGroupByOutputType>[];
                };
                count: {
                    args: Prisma.lesson_videosCountArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.Lesson_videosCountAggregateOutputType> | number;
                };
            };
        };
        marketing_analytics: {
            payload: Prisma.$marketing_analyticsPayload<ExtArgs>;
            fields: Prisma.marketing_analyticsFieldRefs;
            operations: {
                findUnique: {
                    args: Prisma.marketing_analyticsFindUniqueArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$marketing_analyticsPayload> | null;
                };
                findUniqueOrThrow: {
                    args: Prisma.marketing_analyticsFindUniqueOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$marketing_analyticsPayload>;
                };
                findFirst: {
                    args: Prisma.marketing_analyticsFindFirstArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$marketing_analyticsPayload> | null;
                };
                findFirstOrThrow: {
                    args: Prisma.marketing_analyticsFindFirstOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$marketing_analyticsPayload>;
                };
                findMany: {
                    args: Prisma.marketing_analyticsFindManyArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$marketing_analyticsPayload>[];
                };
                create: {
                    args: Prisma.marketing_analyticsCreateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$marketing_analyticsPayload>;
                };
                createMany: {
                    args: Prisma.marketing_analyticsCreateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                delete: {
                    args: Prisma.marketing_analyticsDeleteArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$marketing_analyticsPayload>;
                };
                update: {
                    args: Prisma.marketing_analyticsUpdateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$marketing_analyticsPayload>;
                };
                deleteMany: {
                    args: Prisma.marketing_analyticsDeleteManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateMany: {
                    args: Prisma.marketing_analyticsUpdateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                upsert: {
                    args: Prisma.marketing_analyticsUpsertArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$marketing_analyticsPayload>;
                };
                aggregate: {
                    args: Prisma.Marketing_analyticsAggregateArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AggregateMarketing_analytics>;
                };
                groupBy: {
                    args: Prisma.marketing_analyticsGroupByArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.Marketing_analyticsGroupByOutputType>[];
                };
                count: {
                    args: Prisma.marketing_analyticsCountArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.Marketing_analyticsCountAggregateOutputType> | number;
                };
            };
        };
        media: {
            payload: Prisma.$mediaPayload<ExtArgs>;
            fields: Prisma.mediaFieldRefs;
            operations: {
                findUnique: {
                    args: Prisma.mediaFindUniqueArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$mediaPayload> | null;
                };
                findUniqueOrThrow: {
                    args: Prisma.mediaFindUniqueOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$mediaPayload>;
                };
                findFirst: {
                    args: Prisma.mediaFindFirstArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$mediaPayload> | null;
                };
                findFirstOrThrow: {
                    args: Prisma.mediaFindFirstOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$mediaPayload>;
                };
                findMany: {
                    args: Prisma.mediaFindManyArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$mediaPayload>[];
                };
                create: {
                    args: Prisma.mediaCreateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$mediaPayload>;
                };
                createMany: {
                    args: Prisma.mediaCreateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                delete: {
                    args: Prisma.mediaDeleteArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$mediaPayload>;
                };
                update: {
                    args: Prisma.mediaUpdateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$mediaPayload>;
                };
                deleteMany: {
                    args: Prisma.mediaDeleteManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateMany: {
                    args: Prisma.mediaUpdateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                upsert: {
                    args: Prisma.mediaUpsertArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$mediaPayload>;
                };
                aggregate: {
                    args: Prisma.MediaAggregateArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AggregateMedia>;
                };
                groupBy: {
                    args: Prisma.mediaGroupByArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.MediaGroupByOutputType>[];
                };
                count: {
                    args: Prisma.mediaCountArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.MediaCountAggregateOutputType> | number;
                };
            };
        };
        migrations: {
            payload: Prisma.$migrationsPayload<ExtArgs>;
            fields: Prisma.migrationsFieldRefs;
            operations: {
                findUnique: {
                    args: Prisma.migrationsFindUniqueArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$migrationsPayload> | null;
                };
                findUniqueOrThrow: {
                    args: Prisma.migrationsFindUniqueOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$migrationsPayload>;
                };
                findFirst: {
                    args: Prisma.migrationsFindFirstArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$migrationsPayload> | null;
                };
                findFirstOrThrow: {
                    args: Prisma.migrationsFindFirstOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$migrationsPayload>;
                };
                findMany: {
                    args: Prisma.migrationsFindManyArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$migrationsPayload>[];
                };
                create: {
                    args: Prisma.migrationsCreateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$migrationsPayload>;
                };
                createMany: {
                    args: Prisma.migrationsCreateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                delete: {
                    args: Prisma.migrationsDeleteArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$migrationsPayload>;
                };
                update: {
                    args: Prisma.migrationsUpdateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$migrationsPayload>;
                };
                deleteMany: {
                    args: Prisma.migrationsDeleteManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateMany: {
                    args: Prisma.migrationsUpdateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                upsert: {
                    args: Prisma.migrationsUpsertArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$migrationsPayload>;
                };
                aggregate: {
                    args: Prisma.MigrationsAggregateArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AggregateMigrations>;
                };
                groupBy: {
                    args: Prisma.migrationsGroupByArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.MigrationsGroupByOutputType>[];
                };
                count: {
                    args: Prisma.migrationsCountArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.MigrationsCountAggregateOutputType> | number;
                };
            };
        };
        model_has_permissions: {
            payload: Prisma.$model_has_permissionsPayload<ExtArgs>;
            fields: Prisma.model_has_permissionsFieldRefs;
            operations: {
                findUnique: {
                    args: Prisma.model_has_permissionsFindUniqueArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$model_has_permissionsPayload> | null;
                };
                findUniqueOrThrow: {
                    args: Prisma.model_has_permissionsFindUniqueOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$model_has_permissionsPayload>;
                };
                findFirst: {
                    args: Prisma.model_has_permissionsFindFirstArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$model_has_permissionsPayload> | null;
                };
                findFirstOrThrow: {
                    args: Prisma.model_has_permissionsFindFirstOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$model_has_permissionsPayload>;
                };
                findMany: {
                    args: Prisma.model_has_permissionsFindManyArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$model_has_permissionsPayload>[];
                };
                create: {
                    args: Prisma.model_has_permissionsCreateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$model_has_permissionsPayload>;
                };
                createMany: {
                    args: Prisma.model_has_permissionsCreateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                delete: {
                    args: Prisma.model_has_permissionsDeleteArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$model_has_permissionsPayload>;
                };
                update: {
                    args: Prisma.model_has_permissionsUpdateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$model_has_permissionsPayload>;
                };
                deleteMany: {
                    args: Prisma.model_has_permissionsDeleteManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateMany: {
                    args: Prisma.model_has_permissionsUpdateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                upsert: {
                    args: Prisma.model_has_permissionsUpsertArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$model_has_permissionsPayload>;
                };
                aggregate: {
                    args: Prisma.Model_has_permissionsAggregateArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AggregateModel_has_permissions>;
                };
                groupBy: {
                    args: Prisma.model_has_permissionsGroupByArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.Model_has_permissionsGroupByOutputType>[];
                };
                count: {
                    args: Prisma.model_has_permissionsCountArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.Model_has_permissionsCountAggregateOutputType> | number;
                };
            };
        };
        model_has_roles: {
            payload: Prisma.$model_has_rolesPayload<ExtArgs>;
            fields: Prisma.model_has_rolesFieldRefs;
            operations: {
                findUnique: {
                    args: Prisma.model_has_rolesFindUniqueArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$model_has_rolesPayload> | null;
                };
                findUniqueOrThrow: {
                    args: Prisma.model_has_rolesFindUniqueOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$model_has_rolesPayload>;
                };
                findFirst: {
                    args: Prisma.model_has_rolesFindFirstArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$model_has_rolesPayload> | null;
                };
                findFirstOrThrow: {
                    args: Prisma.model_has_rolesFindFirstOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$model_has_rolesPayload>;
                };
                findMany: {
                    args: Prisma.model_has_rolesFindManyArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$model_has_rolesPayload>[];
                };
                create: {
                    args: Prisma.model_has_rolesCreateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$model_has_rolesPayload>;
                };
                createMany: {
                    args: Prisma.model_has_rolesCreateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                delete: {
                    args: Prisma.model_has_rolesDeleteArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$model_has_rolesPayload>;
                };
                update: {
                    args: Prisma.model_has_rolesUpdateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$model_has_rolesPayload>;
                };
                deleteMany: {
                    args: Prisma.model_has_rolesDeleteManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateMany: {
                    args: Prisma.model_has_rolesUpdateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                upsert: {
                    args: Prisma.model_has_rolesUpsertArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$model_has_rolesPayload>;
                };
                aggregate: {
                    args: Prisma.Model_has_rolesAggregateArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AggregateModel_has_roles>;
                };
                groupBy: {
                    args: Prisma.model_has_rolesGroupByArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.Model_has_rolesGroupByOutputType>[];
                };
                count: {
                    args: Prisma.model_has_rolesCountArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.Model_has_rolesCountAggregateOutputType> | number;
                };
            };
        };
        pages: {
            payload: Prisma.$pagesPayload<ExtArgs>;
            fields: Prisma.pagesFieldRefs;
            operations: {
                findUnique: {
                    args: Prisma.pagesFindUniqueArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$pagesPayload> | null;
                };
                findUniqueOrThrow: {
                    args: Prisma.pagesFindUniqueOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$pagesPayload>;
                };
                findFirst: {
                    args: Prisma.pagesFindFirstArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$pagesPayload> | null;
                };
                findFirstOrThrow: {
                    args: Prisma.pagesFindFirstOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$pagesPayload>;
                };
                findMany: {
                    args: Prisma.pagesFindManyArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$pagesPayload>[];
                };
                create: {
                    args: Prisma.pagesCreateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$pagesPayload>;
                };
                createMany: {
                    args: Prisma.pagesCreateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                delete: {
                    args: Prisma.pagesDeleteArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$pagesPayload>;
                };
                update: {
                    args: Prisma.pagesUpdateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$pagesPayload>;
                };
                deleteMany: {
                    args: Prisma.pagesDeleteManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateMany: {
                    args: Prisma.pagesUpdateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                upsert: {
                    args: Prisma.pagesUpsertArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$pagesPayload>;
                };
                aggregate: {
                    args: Prisma.PagesAggregateArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AggregatePages>;
                };
                groupBy: {
                    args: Prisma.pagesGroupByArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.PagesGroupByOutputType>[];
                };
                count: {
                    args: Prisma.pagesCountArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.PagesCountAggregateOutputType> | number;
                };
            };
        };
        password_reset_tokens: {
            payload: Prisma.$password_reset_tokensPayload<ExtArgs>;
            fields: Prisma.password_reset_tokensFieldRefs;
            operations: {
                findUnique: {
                    args: Prisma.password_reset_tokensFindUniqueArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$password_reset_tokensPayload> | null;
                };
                findUniqueOrThrow: {
                    args: Prisma.password_reset_tokensFindUniqueOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$password_reset_tokensPayload>;
                };
                findFirst: {
                    args: Prisma.password_reset_tokensFindFirstArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$password_reset_tokensPayload> | null;
                };
                findFirstOrThrow: {
                    args: Prisma.password_reset_tokensFindFirstOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$password_reset_tokensPayload>;
                };
                findMany: {
                    args: Prisma.password_reset_tokensFindManyArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$password_reset_tokensPayload>[];
                };
                create: {
                    args: Prisma.password_reset_tokensCreateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$password_reset_tokensPayload>;
                };
                createMany: {
                    args: Prisma.password_reset_tokensCreateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                delete: {
                    args: Prisma.password_reset_tokensDeleteArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$password_reset_tokensPayload>;
                };
                update: {
                    args: Prisma.password_reset_tokensUpdateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$password_reset_tokensPayload>;
                };
                deleteMany: {
                    args: Prisma.password_reset_tokensDeleteManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateMany: {
                    args: Prisma.password_reset_tokensUpdateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                upsert: {
                    args: Prisma.password_reset_tokensUpsertArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$password_reset_tokensPayload>;
                };
                aggregate: {
                    args: Prisma.Password_reset_tokensAggregateArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AggregatePassword_reset_tokens>;
                };
                groupBy: {
                    args: Prisma.password_reset_tokensGroupByArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.Password_reset_tokensGroupByOutputType>[];
                };
                count: {
                    args: Prisma.password_reset_tokensCountArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.Password_reset_tokensCountAggregateOutputType> | number;
                };
            };
        };
        payment_settings: {
            payload: Prisma.$payment_settingsPayload<ExtArgs>;
            fields: Prisma.payment_settingsFieldRefs;
            operations: {
                findUnique: {
                    args: Prisma.payment_settingsFindUniqueArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$payment_settingsPayload> | null;
                };
                findUniqueOrThrow: {
                    args: Prisma.payment_settingsFindUniqueOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$payment_settingsPayload>;
                };
                findFirst: {
                    args: Prisma.payment_settingsFindFirstArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$payment_settingsPayload> | null;
                };
                findFirstOrThrow: {
                    args: Prisma.payment_settingsFindFirstOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$payment_settingsPayload>;
                };
                findMany: {
                    args: Prisma.payment_settingsFindManyArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$payment_settingsPayload>[];
                };
                create: {
                    args: Prisma.payment_settingsCreateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$payment_settingsPayload>;
                };
                createMany: {
                    args: Prisma.payment_settingsCreateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                delete: {
                    args: Prisma.payment_settingsDeleteArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$payment_settingsPayload>;
                };
                update: {
                    args: Prisma.payment_settingsUpdateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$payment_settingsPayload>;
                };
                deleteMany: {
                    args: Prisma.payment_settingsDeleteManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateMany: {
                    args: Prisma.payment_settingsUpdateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                upsert: {
                    args: Prisma.payment_settingsUpsertArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$payment_settingsPayload>;
                };
                aggregate: {
                    args: Prisma.Payment_settingsAggregateArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AggregatePayment_settings>;
                };
                groupBy: {
                    args: Prisma.payment_settingsGroupByArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.Payment_settingsGroupByOutputType>[];
                };
                count: {
                    args: Prisma.payment_settingsCountArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.Payment_settingsCountAggregateOutputType> | number;
                };
            };
        };
        permissions: {
            payload: Prisma.$permissionsPayload<ExtArgs>;
            fields: Prisma.permissionsFieldRefs;
            operations: {
                findUnique: {
                    args: Prisma.permissionsFindUniqueArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$permissionsPayload> | null;
                };
                findUniqueOrThrow: {
                    args: Prisma.permissionsFindUniqueOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$permissionsPayload>;
                };
                findFirst: {
                    args: Prisma.permissionsFindFirstArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$permissionsPayload> | null;
                };
                findFirstOrThrow: {
                    args: Prisma.permissionsFindFirstOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$permissionsPayload>;
                };
                findMany: {
                    args: Prisma.permissionsFindManyArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$permissionsPayload>[];
                };
                create: {
                    args: Prisma.permissionsCreateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$permissionsPayload>;
                };
                createMany: {
                    args: Prisma.permissionsCreateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                delete: {
                    args: Prisma.permissionsDeleteArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$permissionsPayload>;
                };
                update: {
                    args: Prisma.permissionsUpdateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$permissionsPayload>;
                };
                deleteMany: {
                    args: Prisma.permissionsDeleteManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateMany: {
                    args: Prisma.permissionsUpdateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                upsert: {
                    args: Prisma.permissionsUpsertArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$permissionsPayload>;
                };
                aggregate: {
                    args: Prisma.PermissionsAggregateArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AggregatePermissions>;
                };
                groupBy: {
                    args: Prisma.permissionsGroupByArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.PermissionsGroupByOutputType>[];
                };
                count: {
                    args: Prisma.permissionsCountArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.PermissionsCountAggregateOutputType> | number;
                };
            };
        };
        personal_access_tokens: {
            payload: Prisma.$personal_access_tokensPayload<ExtArgs>;
            fields: Prisma.personal_access_tokensFieldRefs;
            operations: {
                findUnique: {
                    args: Prisma.personal_access_tokensFindUniqueArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$personal_access_tokensPayload> | null;
                };
                findUniqueOrThrow: {
                    args: Prisma.personal_access_tokensFindUniqueOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$personal_access_tokensPayload>;
                };
                findFirst: {
                    args: Prisma.personal_access_tokensFindFirstArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$personal_access_tokensPayload> | null;
                };
                findFirstOrThrow: {
                    args: Prisma.personal_access_tokensFindFirstOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$personal_access_tokensPayload>;
                };
                findMany: {
                    args: Prisma.personal_access_tokensFindManyArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$personal_access_tokensPayload>[];
                };
                create: {
                    args: Prisma.personal_access_tokensCreateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$personal_access_tokensPayload>;
                };
                createMany: {
                    args: Prisma.personal_access_tokensCreateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                delete: {
                    args: Prisma.personal_access_tokensDeleteArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$personal_access_tokensPayload>;
                };
                update: {
                    args: Prisma.personal_access_tokensUpdateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$personal_access_tokensPayload>;
                };
                deleteMany: {
                    args: Prisma.personal_access_tokensDeleteManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateMany: {
                    args: Prisma.personal_access_tokensUpdateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                upsert: {
                    args: Prisma.personal_access_tokensUpsertArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$personal_access_tokensPayload>;
                };
                aggregate: {
                    args: Prisma.Personal_access_tokensAggregateArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AggregatePersonal_access_tokens>;
                };
                groupBy: {
                    args: Prisma.personal_access_tokensGroupByArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.Personal_access_tokensGroupByOutputType>[];
                };
                count: {
                    args: Prisma.personal_access_tokensCountArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.Personal_access_tokensCountAggregateOutputType> | number;
                };
            };
        };
        popups: {
            payload: Prisma.$popupsPayload<ExtArgs>;
            fields: Prisma.popupsFieldRefs;
            operations: {
                findUnique: {
                    args: Prisma.popupsFindUniqueArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$popupsPayload> | null;
                };
                findUniqueOrThrow: {
                    args: Prisma.popupsFindUniqueOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$popupsPayload>;
                };
                findFirst: {
                    args: Prisma.popupsFindFirstArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$popupsPayload> | null;
                };
                findFirstOrThrow: {
                    args: Prisma.popupsFindFirstOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$popupsPayload>;
                };
                findMany: {
                    args: Prisma.popupsFindManyArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$popupsPayload>[];
                };
                create: {
                    args: Prisma.popupsCreateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$popupsPayload>;
                };
                createMany: {
                    args: Prisma.popupsCreateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                delete: {
                    args: Prisma.popupsDeleteArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$popupsPayload>;
                };
                update: {
                    args: Prisma.popupsUpdateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$popupsPayload>;
                };
                deleteMany: {
                    args: Prisma.popupsDeleteManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateMany: {
                    args: Prisma.popupsUpdateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                upsert: {
                    args: Prisma.popupsUpsertArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$popupsPayload>;
                };
                aggregate: {
                    args: Prisma.PopupsAggregateArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AggregatePopups>;
                };
                groupBy: {
                    args: Prisma.popupsGroupByArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.PopupsGroupByOutputType>[];
                };
                count: {
                    args: Prisma.popupsCountArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.PopupsCountAggregateOutputType> | number;
                };
            };
        };
        product_screenshots: {
            payload: Prisma.$product_screenshotsPayload<ExtArgs>;
            fields: Prisma.product_screenshotsFieldRefs;
            operations: {
                findUnique: {
                    args: Prisma.product_screenshotsFindUniqueArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$product_screenshotsPayload> | null;
                };
                findUniqueOrThrow: {
                    args: Prisma.product_screenshotsFindUniqueOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$product_screenshotsPayload>;
                };
                findFirst: {
                    args: Prisma.product_screenshotsFindFirstArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$product_screenshotsPayload> | null;
                };
                findFirstOrThrow: {
                    args: Prisma.product_screenshotsFindFirstOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$product_screenshotsPayload>;
                };
                findMany: {
                    args: Prisma.product_screenshotsFindManyArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$product_screenshotsPayload>[];
                };
                create: {
                    args: Prisma.product_screenshotsCreateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$product_screenshotsPayload>;
                };
                createMany: {
                    args: Prisma.product_screenshotsCreateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                delete: {
                    args: Prisma.product_screenshotsDeleteArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$product_screenshotsPayload>;
                };
                update: {
                    args: Prisma.product_screenshotsUpdateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$product_screenshotsPayload>;
                };
                deleteMany: {
                    args: Prisma.product_screenshotsDeleteManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateMany: {
                    args: Prisma.product_screenshotsUpdateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                upsert: {
                    args: Prisma.product_screenshotsUpsertArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$product_screenshotsPayload>;
                };
                aggregate: {
                    args: Prisma.Product_screenshotsAggregateArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AggregateProduct_screenshots>;
                };
                groupBy: {
                    args: Prisma.product_screenshotsGroupByArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.Product_screenshotsGroupByOutputType>[];
                };
                count: {
                    args: Prisma.product_screenshotsCountArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.Product_screenshotsCountAggregateOutputType> | number;
                };
            };
        };
        products: {
            payload: Prisma.$productsPayload<ExtArgs>;
            fields: Prisma.productsFieldRefs;
            operations: {
                findUnique: {
                    args: Prisma.productsFindUniqueArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$productsPayload> | null;
                };
                findUniqueOrThrow: {
                    args: Prisma.productsFindUniqueOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$productsPayload>;
                };
                findFirst: {
                    args: Prisma.productsFindFirstArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$productsPayload> | null;
                };
                findFirstOrThrow: {
                    args: Prisma.productsFindFirstOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$productsPayload>;
                };
                findMany: {
                    args: Prisma.productsFindManyArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$productsPayload>[];
                };
                create: {
                    args: Prisma.productsCreateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$productsPayload>;
                };
                createMany: {
                    args: Prisma.productsCreateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                delete: {
                    args: Prisma.productsDeleteArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$productsPayload>;
                };
                update: {
                    args: Prisma.productsUpdateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$productsPayload>;
                };
                deleteMany: {
                    args: Prisma.productsDeleteManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateMany: {
                    args: Prisma.productsUpdateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                upsert: {
                    args: Prisma.productsUpsertArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$productsPayload>;
                };
                aggregate: {
                    args: Prisma.ProductsAggregateArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AggregateProducts>;
                };
                groupBy: {
                    args: Prisma.productsGroupByArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.ProductsGroupByOutputType>[];
                };
                count: {
                    args: Prisma.productsCountArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.ProductsCountAggregateOutputType> | number;
                };
            };
        };
        promotion_user: {
            payload: Prisma.$promotion_userPayload<ExtArgs>;
            fields: Prisma.promotion_userFieldRefs;
            operations: {
                findUnique: {
                    args: Prisma.promotion_userFindUniqueArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$promotion_userPayload> | null;
                };
                findUniqueOrThrow: {
                    args: Prisma.promotion_userFindUniqueOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$promotion_userPayload>;
                };
                findFirst: {
                    args: Prisma.promotion_userFindFirstArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$promotion_userPayload> | null;
                };
                findFirstOrThrow: {
                    args: Prisma.promotion_userFindFirstOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$promotion_userPayload>;
                };
                findMany: {
                    args: Prisma.promotion_userFindManyArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$promotion_userPayload>[];
                };
                create: {
                    args: Prisma.promotion_userCreateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$promotion_userPayload>;
                };
                createMany: {
                    args: Prisma.promotion_userCreateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                delete: {
                    args: Prisma.promotion_userDeleteArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$promotion_userPayload>;
                };
                update: {
                    args: Prisma.promotion_userUpdateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$promotion_userPayload>;
                };
                deleteMany: {
                    args: Prisma.promotion_userDeleteManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateMany: {
                    args: Prisma.promotion_userUpdateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                upsert: {
                    args: Prisma.promotion_userUpsertArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$promotion_userPayload>;
                };
                aggregate: {
                    args: Prisma.Promotion_userAggregateArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AggregatePromotion_user>;
                };
                groupBy: {
                    args: Prisma.promotion_userGroupByArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.Promotion_userGroupByOutputType>[];
                };
                count: {
                    args: Prisma.promotion_userCountArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.Promotion_userCountAggregateOutputType> | number;
                };
            };
        };
        promotions: {
            payload: Prisma.$promotionsPayload<ExtArgs>;
            fields: Prisma.promotionsFieldRefs;
            operations: {
                findUnique: {
                    args: Prisma.promotionsFindUniqueArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$promotionsPayload> | null;
                };
                findUniqueOrThrow: {
                    args: Prisma.promotionsFindUniqueOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$promotionsPayload>;
                };
                findFirst: {
                    args: Prisma.promotionsFindFirstArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$promotionsPayload> | null;
                };
                findFirstOrThrow: {
                    args: Prisma.promotionsFindFirstOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$promotionsPayload>;
                };
                findMany: {
                    args: Prisma.promotionsFindManyArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$promotionsPayload>[];
                };
                create: {
                    args: Prisma.promotionsCreateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$promotionsPayload>;
                };
                createMany: {
                    args: Prisma.promotionsCreateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                delete: {
                    args: Prisma.promotionsDeleteArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$promotionsPayload>;
                };
                update: {
                    args: Prisma.promotionsUpdateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$promotionsPayload>;
                };
                deleteMany: {
                    args: Prisma.promotionsDeleteManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateMany: {
                    args: Prisma.promotionsUpdateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                upsert: {
                    args: Prisma.promotionsUpsertArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$promotionsPayload>;
                };
                aggregate: {
                    args: Prisma.PromotionsAggregateArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AggregatePromotions>;
                };
                groupBy: {
                    args: Prisma.promotionsGroupByArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.PromotionsGroupByOutputType>[];
                };
                count: {
                    args: Prisma.promotionsCountArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.PromotionsCountAggregateOutputType> | number;
                };
            };
        };
        quiz_attempts: {
            payload: Prisma.$quiz_attemptsPayload<ExtArgs>;
            fields: Prisma.quiz_attemptsFieldRefs;
            operations: {
                findUnique: {
                    args: Prisma.quiz_attemptsFindUniqueArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$quiz_attemptsPayload> | null;
                };
                findUniqueOrThrow: {
                    args: Prisma.quiz_attemptsFindUniqueOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$quiz_attemptsPayload>;
                };
                findFirst: {
                    args: Prisma.quiz_attemptsFindFirstArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$quiz_attemptsPayload> | null;
                };
                findFirstOrThrow: {
                    args: Prisma.quiz_attemptsFindFirstOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$quiz_attemptsPayload>;
                };
                findMany: {
                    args: Prisma.quiz_attemptsFindManyArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$quiz_attemptsPayload>[];
                };
                create: {
                    args: Prisma.quiz_attemptsCreateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$quiz_attemptsPayload>;
                };
                createMany: {
                    args: Prisma.quiz_attemptsCreateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                delete: {
                    args: Prisma.quiz_attemptsDeleteArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$quiz_attemptsPayload>;
                };
                update: {
                    args: Prisma.quiz_attemptsUpdateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$quiz_attemptsPayload>;
                };
                deleteMany: {
                    args: Prisma.quiz_attemptsDeleteManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateMany: {
                    args: Prisma.quiz_attemptsUpdateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                upsert: {
                    args: Prisma.quiz_attemptsUpsertArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$quiz_attemptsPayload>;
                };
                aggregate: {
                    args: Prisma.Quiz_attemptsAggregateArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AggregateQuiz_attempts>;
                };
                groupBy: {
                    args: Prisma.quiz_attemptsGroupByArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.Quiz_attemptsGroupByOutputType>[];
                };
                count: {
                    args: Prisma.quiz_attemptsCountArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.Quiz_attemptsCountAggregateOutputType> | number;
                };
            };
        };
        reviews: {
            payload: Prisma.$reviewsPayload<ExtArgs>;
            fields: Prisma.reviewsFieldRefs;
            operations: {
                findUnique: {
                    args: Prisma.reviewsFindUniqueArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$reviewsPayload> | null;
                };
                findUniqueOrThrow: {
                    args: Prisma.reviewsFindUniqueOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$reviewsPayload>;
                };
                findFirst: {
                    args: Prisma.reviewsFindFirstArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$reviewsPayload> | null;
                };
                findFirstOrThrow: {
                    args: Prisma.reviewsFindFirstOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$reviewsPayload>;
                };
                findMany: {
                    args: Prisma.reviewsFindManyArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$reviewsPayload>[];
                };
                create: {
                    args: Prisma.reviewsCreateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$reviewsPayload>;
                };
                createMany: {
                    args: Prisma.reviewsCreateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                delete: {
                    args: Prisma.reviewsDeleteArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$reviewsPayload>;
                };
                update: {
                    args: Prisma.reviewsUpdateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$reviewsPayload>;
                };
                deleteMany: {
                    args: Prisma.reviewsDeleteManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateMany: {
                    args: Prisma.reviewsUpdateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                upsert: {
                    args: Prisma.reviewsUpsertArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$reviewsPayload>;
                };
                aggregate: {
                    args: Prisma.ReviewsAggregateArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AggregateReviews>;
                };
                groupBy: {
                    args: Prisma.reviewsGroupByArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.ReviewsGroupByOutputType>[];
                };
                count: {
                    args: Prisma.reviewsCountArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.ReviewsCountAggregateOutputType> | number;
                };
            };
        };
        role_has_permissions: {
            payload: Prisma.$role_has_permissionsPayload<ExtArgs>;
            fields: Prisma.role_has_permissionsFieldRefs;
            operations: {
                findUnique: {
                    args: Prisma.role_has_permissionsFindUniqueArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$role_has_permissionsPayload> | null;
                };
                findUniqueOrThrow: {
                    args: Prisma.role_has_permissionsFindUniqueOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$role_has_permissionsPayload>;
                };
                findFirst: {
                    args: Prisma.role_has_permissionsFindFirstArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$role_has_permissionsPayload> | null;
                };
                findFirstOrThrow: {
                    args: Prisma.role_has_permissionsFindFirstOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$role_has_permissionsPayload>;
                };
                findMany: {
                    args: Prisma.role_has_permissionsFindManyArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$role_has_permissionsPayload>[];
                };
                create: {
                    args: Prisma.role_has_permissionsCreateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$role_has_permissionsPayload>;
                };
                createMany: {
                    args: Prisma.role_has_permissionsCreateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                delete: {
                    args: Prisma.role_has_permissionsDeleteArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$role_has_permissionsPayload>;
                };
                update: {
                    args: Prisma.role_has_permissionsUpdateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$role_has_permissionsPayload>;
                };
                deleteMany: {
                    args: Prisma.role_has_permissionsDeleteManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateMany: {
                    args: Prisma.role_has_permissionsUpdateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                upsert: {
                    args: Prisma.role_has_permissionsUpsertArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$role_has_permissionsPayload>;
                };
                aggregate: {
                    args: Prisma.Role_has_permissionsAggregateArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AggregateRole_has_permissions>;
                };
                groupBy: {
                    args: Prisma.role_has_permissionsGroupByArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.Role_has_permissionsGroupByOutputType>[];
                };
                count: {
                    args: Prisma.role_has_permissionsCountArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.Role_has_permissionsCountAggregateOutputType> | number;
                };
            };
        };
        roles: {
            payload: Prisma.$rolesPayload<ExtArgs>;
            fields: Prisma.rolesFieldRefs;
            operations: {
                findUnique: {
                    args: Prisma.rolesFindUniqueArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$rolesPayload> | null;
                };
                findUniqueOrThrow: {
                    args: Prisma.rolesFindUniqueOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$rolesPayload>;
                };
                findFirst: {
                    args: Prisma.rolesFindFirstArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$rolesPayload> | null;
                };
                findFirstOrThrow: {
                    args: Prisma.rolesFindFirstOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$rolesPayload>;
                };
                findMany: {
                    args: Prisma.rolesFindManyArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$rolesPayload>[];
                };
                create: {
                    args: Prisma.rolesCreateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$rolesPayload>;
                };
                createMany: {
                    args: Prisma.rolesCreateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                delete: {
                    args: Prisma.rolesDeleteArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$rolesPayload>;
                };
                update: {
                    args: Prisma.rolesUpdateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$rolesPayload>;
                };
                deleteMany: {
                    args: Prisma.rolesDeleteManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateMany: {
                    args: Prisma.rolesUpdateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                upsert: {
                    args: Prisma.rolesUpsertArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$rolesPayload>;
                };
                aggregate: {
                    args: Prisma.RolesAggregateArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AggregateRoles>;
                };
                groupBy: {
                    args: Prisma.rolesGroupByArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.RolesGroupByOutputType>[];
                };
                count: {
                    args: Prisma.rolesCountArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.RolesCountAggregateOutputType> | number;
                };
            };
        };
        sessions: {
            payload: Prisma.$sessionsPayload<ExtArgs>;
            fields: Prisma.sessionsFieldRefs;
            operations: {
                findUnique: {
                    args: Prisma.sessionsFindUniqueArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$sessionsPayload> | null;
                };
                findUniqueOrThrow: {
                    args: Prisma.sessionsFindUniqueOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$sessionsPayload>;
                };
                findFirst: {
                    args: Prisma.sessionsFindFirstArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$sessionsPayload> | null;
                };
                findFirstOrThrow: {
                    args: Prisma.sessionsFindFirstOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$sessionsPayload>;
                };
                findMany: {
                    args: Prisma.sessionsFindManyArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$sessionsPayload>[];
                };
                create: {
                    args: Prisma.sessionsCreateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$sessionsPayload>;
                };
                createMany: {
                    args: Prisma.sessionsCreateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                delete: {
                    args: Prisma.sessionsDeleteArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$sessionsPayload>;
                };
                update: {
                    args: Prisma.sessionsUpdateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$sessionsPayload>;
                };
                deleteMany: {
                    args: Prisma.sessionsDeleteManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateMany: {
                    args: Prisma.sessionsUpdateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                upsert: {
                    args: Prisma.sessionsUpsertArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$sessionsPayload>;
                };
                aggregate: {
                    args: Prisma.SessionsAggregateArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AggregateSessions>;
                };
                groupBy: {
                    args: Prisma.sessionsGroupByArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.SessionsGroupByOutputType>[];
                };
                count: {
                    args: Prisma.sessionsCountArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.SessionsCountAggregateOutputType> | number;
                };
            };
        };
        site_settings: {
            payload: Prisma.$site_settingsPayload<ExtArgs>;
            fields: Prisma.site_settingsFieldRefs;
            operations: {
                findUnique: {
                    args: Prisma.site_settingsFindUniqueArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$site_settingsPayload> | null;
                };
                findUniqueOrThrow: {
                    args: Prisma.site_settingsFindUniqueOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$site_settingsPayload>;
                };
                findFirst: {
                    args: Prisma.site_settingsFindFirstArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$site_settingsPayload> | null;
                };
                findFirstOrThrow: {
                    args: Prisma.site_settingsFindFirstOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$site_settingsPayload>;
                };
                findMany: {
                    args: Prisma.site_settingsFindManyArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$site_settingsPayload>[];
                };
                create: {
                    args: Prisma.site_settingsCreateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$site_settingsPayload>;
                };
                createMany: {
                    args: Prisma.site_settingsCreateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                delete: {
                    args: Prisma.site_settingsDeleteArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$site_settingsPayload>;
                };
                update: {
                    args: Prisma.site_settingsUpdateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$site_settingsPayload>;
                };
                deleteMany: {
                    args: Prisma.site_settingsDeleteManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateMany: {
                    args: Prisma.site_settingsUpdateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                upsert: {
                    args: Prisma.site_settingsUpsertArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$site_settingsPayload>;
                };
                aggregate: {
                    args: Prisma.Site_settingsAggregateArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AggregateSite_settings>;
                };
                groupBy: {
                    args: Prisma.site_settingsGroupByArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.Site_settingsGroupByOutputType>[];
                };
                count: {
                    args: Prisma.site_settingsCountArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.Site_settingsCountAggregateOutputType> | number;
                };
            };
        };
        sms_campaigns: {
            payload: Prisma.$sms_campaignsPayload<ExtArgs>;
            fields: Prisma.sms_campaignsFieldRefs;
            operations: {
                findUnique: {
                    args: Prisma.sms_campaignsFindUniqueArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$sms_campaignsPayload> | null;
                };
                findUniqueOrThrow: {
                    args: Prisma.sms_campaignsFindUniqueOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$sms_campaignsPayload>;
                };
                findFirst: {
                    args: Prisma.sms_campaignsFindFirstArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$sms_campaignsPayload> | null;
                };
                findFirstOrThrow: {
                    args: Prisma.sms_campaignsFindFirstOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$sms_campaignsPayload>;
                };
                findMany: {
                    args: Prisma.sms_campaignsFindManyArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$sms_campaignsPayload>[];
                };
                create: {
                    args: Prisma.sms_campaignsCreateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$sms_campaignsPayload>;
                };
                createMany: {
                    args: Prisma.sms_campaignsCreateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                delete: {
                    args: Prisma.sms_campaignsDeleteArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$sms_campaignsPayload>;
                };
                update: {
                    args: Prisma.sms_campaignsUpdateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$sms_campaignsPayload>;
                };
                deleteMany: {
                    args: Prisma.sms_campaignsDeleteManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateMany: {
                    args: Prisma.sms_campaignsUpdateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                upsert: {
                    args: Prisma.sms_campaignsUpsertArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$sms_campaignsPayload>;
                };
                aggregate: {
                    args: Prisma.Sms_campaignsAggregateArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AggregateSms_campaigns>;
                };
                groupBy: {
                    args: Prisma.sms_campaignsGroupByArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.Sms_campaignsGroupByOutputType>[];
                };
                count: {
                    args: Prisma.sms_campaignsCountArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.Sms_campaignsCountAggregateOutputType> | number;
                };
            };
        };
        social_accounts: {
            payload: Prisma.$social_accountsPayload<ExtArgs>;
            fields: Prisma.social_accountsFieldRefs;
            operations: {
                findUnique: {
                    args: Prisma.social_accountsFindUniqueArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$social_accountsPayload> | null;
                };
                findUniqueOrThrow: {
                    args: Prisma.social_accountsFindUniqueOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$social_accountsPayload>;
                };
                findFirst: {
                    args: Prisma.social_accountsFindFirstArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$social_accountsPayload> | null;
                };
                findFirstOrThrow: {
                    args: Prisma.social_accountsFindFirstOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$social_accountsPayload>;
                };
                findMany: {
                    args: Prisma.social_accountsFindManyArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$social_accountsPayload>[];
                };
                create: {
                    args: Prisma.social_accountsCreateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$social_accountsPayload>;
                };
                createMany: {
                    args: Prisma.social_accountsCreateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                delete: {
                    args: Prisma.social_accountsDeleteArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$social_accountsPayload>;
                };
                update: {
                    args: Prisma.social_accountsUpdateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$social_accountsPayload>;
                };
                deleteMany: {
                    args: Prisma.social_accountsDeleteManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateMany: {
                    args: Prisma.social_accountsUpdateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                upsert: {
                    args: Prisma.social_accountsUpsertArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$social_accountsPayload>;
                };
                aggregate: {
                    args: Prisma.Social_accountsAggregateArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AggregateSocial_accounts>;
                };
                groupBy: {
                    args: Prisma.social_accountsGroupByArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.Social_accountsGroupByOutputType>[];
                };
                count: {
                    args: Prisma.social_accountsCountArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.Social_accountsCountAggregateOutputType> | number;
                };
            };
        };
        subscription_plans: {
            payload: Prisma.$subscription_plansPayload<ExtArgs>;
            fields: Prisma.subscription_plansFieldRefs;
            operations: {
                findUnique: {
                    args: Prisma.subscription_plansFindUniqueArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$subscription_plansPayload> | null;
                };
                findUniqueOrThrow: {
                    args: Prisma.subscription_plansFindUniqueOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$subscription_plansPayload>;
                };
                findFirst: {
                    args: Prisma.subscription_plansFindFirstArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$subscription_plansPayload> | null;
                };
                findFirstOrThrow: {
                    args: Prisma.subscription_plansFindFirstOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$subscription_plansPayload>;
                };
                findMany: {
                    args: Prisma.subscription_plansFindManyArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$subscription_plansPayload>[];
                };
                create: {
                    args: Prisma.subscription_plansCreateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$subscription_plansPayload>;
                };
                createMany: {
                    args: Prisma.subscription_plansCreateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                delete: {
                    args: Prisma.subscription_plansDeleteArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$subscription_plansPayload>;
                };
                update: {
                    args: Prisma.subscription_plansUpdateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$subscription_plansPayload>;
                };
                deleteMany: {
                    args: Prisma.subscription_plansDeleteManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateMany: {
                    args: Prisma.subscription_plansUpdateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                upsert: {
                    args: Prisma.subscription_plansUpsertArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$subscription_plansPayload>;
                };
                aggregate: {
                    args: Prisma.Subscription_plansAggregateArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AggregateSubscription_plans>;
                };
                groupBy: {
                    args: Prisma.subscription_plansGroupByArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.Subscription_plansGroupByOutputType>[];
                };
                count: {
                    args: Prisma.subscription_plansCountArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.Subscription_plansCountAggregateOutputType> | number;
                };
            };
        };
        system_settings: {
            payload: Prisma.$system_settingsPayload<ExtArgs>;
            fields: Prisma.system_settingsFieldRefs;
            operations: {
                findUnique: {
                    args: Prisma.system_settingsFindUniqueArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$system_settingsPayload> | null;
                };
                findUniqueOrThrow: {
                    args: Prisma.system_settingsFindUniqueOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$system_settingsPayload>;
                };
                findFirst: {
                    args: Prisma.system_settingsFindFirstArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$system_settingsPayload> | null;
                };
                findFirstOrThrow: {
                    args: Prisma.system_settingsFindFirstOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$system_settingsPayload>;
                };
                findMany: {
                    args: Prisma.system_settingsFindManyArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$system_settingsPayload>[];
                };
                create: {
                    args: Prisma.system_settingsCreateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$system_settingsPayload>;
                };
                createMany: {
                    args: Prisma.system_settingsCreateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                delete: {
                    args: Prisma.system_settingsDeleteArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$system_settingsPayload>;
                };
                update: {
                    args: Prisma.system_settingsUpdateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$system_settingsPayload>;
                };
                deleteMany: {
                    args: Prisma.system_settingsDeleteManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateMany: {
                    args: Prisma.system_settingsUpdateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                upsert: {
                    args: Prisma.system_settingsUpsertArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$system_settingsPayload>;
                };
                aggregate: {
                    args: Prisma.System_settingsAggregateArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AggregateSystem_settings>;
                };
                groupBy: {
                    args: Prisma.system_settingsGroupByArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.System_settingsGroupByOutputType>[];
                };
                count: {
                    args: Prisma.system_settingsCountArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.System_settingsCountAggregateOutputType> | number;
                };
            };
        };
        two_factor_auth: {
            payload: Prisma.$two_factor_authPayload<ExtArgs>;
            fields: Prisma.two_factor_authFieldRefs;
            operations: {
                findUnique: {
                    args: Prisma.two_factor_authFindUniqueArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$two_factor_authPayload> | null;
                };
                findUniqueOrThrow: {
                    args: Prisma.two_factor_authFindUniqueOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$two_factor_authPayload>;
                };
                findFirst: {
                    args: Prisma.two_factor_authFindFirstArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$two_factor_authPayload> | null;
                };
                findFirstOrThrow: {
                    args: Prisma.two_factor_authFindFirstOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$two_factor_authPayload>;
                };
                findMany: {
                    args: Prisma.two_factor_authFindManyArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$two_factor_authPayload>[];
                };
                create: {
                    args: Prisma.two_factor_authCreateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$two_factor_authPayload>;
                };
                createMany: {
                    args: Prisma.two_factor_authCreateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                delete: {
                    args: Prisma.two_factor_authDeleteArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$two_factor_authPayload>;
                };
                update: {
                    args: Prisma.two_factor_authUpdateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$two_factor_authPayload>;
                };
                deleteMany: {
                    args: Prisma.two_factor_authDeleteManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateMany: {
                    args: Prisma.two_factor_authUpdateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                upsert: {
                    args: Prisma.two_factor_authUpsertArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$two_factor_authPayload>;
                };
                aggregate: {
                    args: Prisma.Two_factor_authAggregateArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AggregateTwo_factor_auth>;
                };
                groupBy: {
                    args: Prisma.two_factor_authGroupByArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.Two_factor_authGroupByOutputType>[];
                };
                count: {
                    args: Prisma.two_factor_authCountArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.Two_factor_authCountAggregateOutputType> | number;
                };
            };
        };
        user_profiles: {
            payload: Prisma.$user_profilesPayload<ExtArgs>;
            fields: Prisma.user_profilesFieldRefs;
            operations: {
                findUnique: {
                    args: Prisma.user_profilesFindUniqueArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$user_profilesPayload> | null;
                };
                findUniqueOrThrow: {
                    args: Prisma.user_profilesFindUniqueOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$user_profilesPayload>;
                };
                findFirst: {
                    args: Prisma.user_profilesFindFirstArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$user_profilesPayload> | null;
                };
                findFirstOrThrow: {
                    args: Prisma.user_profilesFindFirstOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$user_profilesPayload>;
                };
                findMany: {
                    args: Prisma.user_profilesFindManyArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$user_profilesPayload>[];
                };
                create: {
                    args: Prisma.user_profilesCreateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$user_profilesPayload>;
                };
                createMany: {
                    args: Prisma.user_profilesCreateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                delete: {
                    args: Prisma.user_profilesDeleteArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$user_profilesPayload>;
                };
                update: {
                    args: Prisma.user_profilesUpdateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$user_profilesPayload>;
                };
                deleteMany: {
                    args: Prisma.user_profilesDeleteManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateMany: {
                    args: Prisma.user_profilesUpdateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                upsert: {
                    args: Prisma.user_profilesUpsertArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$user_profilesPayload>;
                };
                aggregate: {
                    args: Prisma.User_profilesAggregateArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AggregateUser_profiles>;
                };
                groupBy: {
                    args: Prisma.user_profilesGroupByArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.User_profilesGroupByOutputType>[];
                };
                count: {
                    args: Prisma.user_profilesCountArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.User_profilesCountAggregateOutputType> | number;
                };
            };
        };
        user_subscriptions: {
            payload: Prisma.$user_subscriptionsPayload<ExtArgs>;
            fields: Prisma.user_subscriptionsFieldRefs;
            operations: {
                findUnique: {
                    args: Prisma.user_subscriptionsFindUniqueArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$user_subscriptionsPayload> | null;
                };
                findUniqueOrThrow: {
                    args: Prisma.user_subscriptionsFindUniqueOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$user_subscriptionsPayload>;
                };
                findFirst: {
                    args: Prisma.user_subscriptionsFindFirstArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$user_subscriptionsPayload> | null;
                };
                findFirstOrThrow: {
                    args: Prisma.user_subscriptionsFindFirstOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$user_subscriptionsPayload>;
                };
                findMany: {
                    args: Prisma.user_subscriptionsFindManyArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$user_subscriptionsPayload>[];
                };
                create: {
                    args: Prisma.user_subscriptionsCreateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$user_subscriptionsPayload>;
                };
                createMany: {
                    args: Prisma.user_subscriptionsCreateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                delete: {
                    args: Prisma.user_subscriptionsDeleteArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$user_subscriptionsPayload>;
                };
                update: {
                    args: Prisma.user_subscriptionsUpdateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$user_subscriptionsPayload>;
                };
                deleteMany: {
                    args: Prisma.user_subscriptionsDeleteManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateMany: {
                    args: Prisma.user_subscriptionsUpdateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                upsert: {
                    args: Prisma.user_subscriptionsUpsertArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$user_subscriptionsPayload>;
                };
                aggregate: {
                    args: Prisma.User_subscriptionsAggregateArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AggregateUser_subscriptions>;
                };
                groupBy: {
                    args: Prisma.user_subscriptionsGroupByArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.User_subscriptionsGroupByOutputType>[];
                };
                count: {
                    args: Prisma.user_subscriptionsCountArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.User_subscriptionsCountAggregateOutputType> | number;
                };
            };
        };
        users: {
            payload: Prisma.$usersPayload<ExtArgs>;
            fields: Prisma.usersFieldRefs;
            operations: {
                findUnique: {
                    args: Prisma.usersFindUniqueArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$usersPayload> | null;
                };
                findUniqueOrThrow: {
                    args: Prisma.usersFindUniqueOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$usersPayload>;
                };
                findFirst: {
                    args: Prisma.usersFindFirstArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$usersPayload> | null;
                };
                findFirstOrThrow: {
                    args: Prisma.usersFindFirstOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$usersPayload>;
                };
                findMany: {
                    args: Prisma.usersFindManyArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$usersPayload>[];
                };
                create: {
                    args: Prisma.usersCreateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$usersPayload>;
                };
                createMany: {
                    args: Prisma.usersCreateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                delete: {
                    args: Prisma.usersDeleteArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$usersPayload>;
                };
                update: {
                    args: Prisma.usersUpdateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$usersPayload>;
                };
                deleteMany: {
                    args: Prisma.usersDeleteManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateMany: {
                    args: Prisma.usersUpdateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                upsert: {
                    args: Prisma.usersUpsertArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$usersPayload>;
                };
                aggregate: {
                    args: Prisma.UsersAggregateArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AggregateUsers>;
                };
                groupBy: {
                    args: Prisma.usersGroupByArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.UsersGroupByOutputType>[];
                };
                count: {
                    args: Prisma.usersCountArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.UsersCountAggregateOutputType> | number;
                };
            };
        };
        verification_codes: {
            payload: Prisma.$verification_codesPayload<ExtArgs>;
            fields: Prisma.verification_codesFieldRefs;
            operations: {
                findUnique: {
                    args: Prisma.verification_codesFindUniqueArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$verification_codesPayload> | null;
                };
                findUniqueOrThrow: {
                    args: Prisma.verification_codesFindUniqueOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$verification_codesPayload>;
                };
                findFirst: {
                    args: Prisma.verification_codesFindFirstArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$verification_codesPayload> | null;
                };
                findFirstOrThrow: {
                    args: Prisma.verification_codesFindFirstOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$verification_codesPayload>;
                };
                findMany: {
                    args: Prisma.verification_codesFindManyArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$verification_codesPayload>[];
                };
                create: {
                    args: Prisma.verification_codesCreateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$verification_codesPayload>;
                };
                createMany: {
                    args: Prisma.verification_codesCreateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                delete: {
                    args: Prisma.verification_codesDeleteArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$verification_codesPayload>;
                };
                update: {
                    args: Prisma.verification_codesUpdateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$verification_codesPayload>;
                };
                deleteMany: {
                    args: Prisma.verification_codesDeleteManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateMany: {
                    args: Prisma.verification_codesUpdateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                upsert: {
                    args: Prisma.verification_codesUpsertArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$verification_codesPayload>;
                };
                aggregate: {
                    args: Prisma.Verification_codesAggregateArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AggregateVerification_codes>;
                };
                groupBy: {
                    args: Prisma.verification_codesGroupByArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.Verification_codesGroupByOutputType>[];
                };
                count: {
                    args: Prisma.verification_codesCountArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.Verification_codesCountAggregateOutputType> | number;
                };
            };
        };
    };
} & {
    other: {
        payload: any;
        operations: {
            $executeRaw: {
                args: [query: TemplateStringsArray | Sql, ...values: any[]];
                result: any;
            };
            $executeRawUnsafe: {
                args: [query: string, ...values: any[]];
                result: any;
            };
            $queryRaw: {
                args: [query: TemplateStringsArray | Sql, ...values: any[]];
                result: any;
            };
            $queryRawUnsafe: {
                args: [query: string, ...values: any[]];
                result: any;
            };
        };
    };
};
export declare const TransactionIsolationLevel: any;
export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel];
export declare const Activity_logsScalarFieldEnum: {
    readonly id: "id";
    readonly user_id: "user_id";
    readonly log_name: "log_name";
    readonly description: "description";
    readonly subject_type: "subject_type";
    readonly subject_id: "subject_id";
    readonly event: "event";
    readonly causer_type: "causer_type";
    readonly causer_id: "causer_id";
    readonly properties: "properties";
    readonly batch_uuid: "batch_uuid";
    readonly ip_address: "ip_address";
    readonly user_agent: "user_agent";
    readonly created_at: "created_at";
    readonly updated_at: "updated_at";
};
export type Activity_logsScalarFieldEnum = (typeof Activity_logsScalarFieldEnum)[keyof typeof Activity_logsScalarFieldEnum];
export declare const Api_settingsScalarFieldEnum: {
    readonly id: "id";
    readonly category: "category";
    readonly key: "key";
    readonly name: "name";
    readonly value: "value";
    readonly description: "description";
    readonly is_encrypted: "is_encrypted";
    readonly is_active: "is_active";
    readonly created_at: "created_at";
    readonly updated_at: "updated_at";
};
export type Api_settingsScalarFieldEnum = (typeof Api_settingsScalarFieldEnum)[keyof typeof Api_settingsScalarFieldEnum];
export declare const Article_viewsScalarFieldEnum: {
    readonly id: "id";
    readonly article_id: "article_id";
    readonly user_id: "user_id";
    readonly ip_address: "ip_address";
    readonly user_agent: "user_agent";
    readonly viewed_at: "viewed_at";
};
export type Article_viewsScalarFieldEnum = (typeof Article_viewsScalarFieldEnum)[keyof typeof Article_viewsScalarFieldEnum];
export declare const ArticlesScalarFieldEnum: {
    readonly id: "id";
    readonly slug: "slug";
    readonly title: "title";
    readonly meta_title: "meta_title";
    readonly meta_description: "meta_description";
    readonly meta_keywords: "meta_keywords";
    readonly focus_keyword: "focus_keyword";
    readonly og_title: "og_title";
    readonly og_description: "og_description";
    readonly og_image: "og_image";
    readonly twitter_card: "twitter_card";
    readonly twitter_title: "twitter_title";
    readonly twitter_description: "twitter_description";
    readonly twitter_image: "twitter_image";
    readonly canonical_url: "canonical_url";
    readonly schema_type: "schema_type";
    readonly schema_data: "schema_data";
    readonly seo_score: "seo_score";
    readonly excerpt: "excerpt";
    readonly content: "content";
    readonly featured_image: "featured_image";
    readonly author: "author";
    readonly read_time: "read_time";
    readonly is_published: "is_published";
    readonly is_featured: "is_featured";
    readonly published_at: "published_at";
    readonly category_id: "category_id";
    readonly tags: "tags";
    readonly views_count: "views_count";
    readonly created_at: "created_at";
    readonly updated_at: "updated_at";
    readonly deleted_at: "deleted_at";
};
export type ArticlesScalarFieldEnum = (typeof ArticlesScalarFieldEnum)[keyof typeof ArticlesScalarFieldEnum];
export declare const BookingsScalarFieldEnum: {
    readonly id: "id";
    readonly created_at: "created_at";
    readonly updated_at: "updated_at";
};
export type BookingsScalarFieldEnum = (typeof BookingsScalarFieldEnum)[keyof typeof BookingsScalarFieldEnum];
export declare const CacheScalarFieldEnum: {
    readonly key: "key";
    readonly value: "value";
    readonly expiration: "expiration";
};
export type CacheScalarFieldEnum = (typeof CacheScalarFieldEnum)[keyof typeof CacheScalarFieldEnum];
export declare const Cache_locksScalarFieldEnum: {
    readonly key: "key";
    readonly owner: "owner";
    readonly expiration: "expiration";
};
export type Cache_locksScalarFieldEnum = (typeof Cache_locksScalarFieldEnum)[keyof typeof Cache_locksScalarFieldEnum];
export declare const CategoriesScalarFieldEnum: {
    readonly id: "id";
    readonly name: "name";
    readonly slug: "slug";
    readonly description: "description";
    readonly type: "type";
    readonly icon: "icon";
    readonly color: "color";
    readonly order: "order";
    readonly is_active: "is_active";
    readonly created_at: "created_at";
    readonly updated_at: "updated_at";
};
export type CategoriesScalarFieldEnum = (typeof CategoriesScalarFieldEnum)[keyof typeof CategoriesScalarFieldEnum];
export declare const CertificatesScalarFieldEnum: {
    readonly id: "id";
    readonly user_id: "user_id";
    readonly course_id: "course_id";
    readonly enrollment_id: "enrollment_id";
    readonly certificate_number: "certificate_number";
    readonly issued_date: "issued_date";
    readonly verification_code: "verification_code";
    readonly pdf_path: "pdf_path";
    readonly created_at: "created_at";
    readonly updated_at: "updated_at";
};
export type CertificatesScalarFieldEnum = (typeof CertificatesScalarFieldEnum)[keyof typeof CertificatesScalarFieldEnum];
export declare const CouponsScalarFieldEnum: {
    readonly id: "id";
    readonly code: "code";
    readonly description: "description";
    readonly type: "type";
    readonly value: "value";
    readonly min_purchase: "min_purchase";
    readonly max_discount: "max_discount";
    readonly usage_limit: "usage_limit";
    readonly used_count: "used_count";
    readonly valid_from: "valid_from";
    readonly valid_until: "valid_until";
    readonly is_active: "is_active";
    readonly created_at: "created_at";
    readonly updated_at: "updated_at";
    readonly deleted_at: "deleted_at";
};
export type CouponsScalarFieldEnum = (typeof CouponsScalarFieldEnum)[keyof typeof CouponsScalarFieldEnum];
export declare const Course_schedulesScalarFieldEnum: {
    readonly id: "id";
    readonly created_at: "created_at";
    readonly updated_at: "updated_at";
};
export type Course_schedulesScalarFieldEnum = (typeof Course_schedulesScalarFieldEnum)[keyof typeof Course_schedulesScalarFieldEnum];
export declare const CoursesScalarFieldEnum: {
    readonly id: "id";
    readonly slug: "slug";
    readonly title: "title";
    readonly description: "description";
    readonly meta_title: "meta_title";
    readonly meta_description: "meta_description";
    readonly meta_keywords: "meta_keywords";
    readonly og_image: "og_image";
    readonly og_description: "og_description";
    readonly canonical_url: "canonical_url";
    readonly schema_markup: "schema_markup";
    readonly cover: "cover";
    readonly price: "price";
    readonly original_price: "original_price";
    readonly hours: "hours";
    readonly level: "level";
    readonly lessons_count: "lessons_count";
    readonly what_you_learn: "what_you_learn";
    readonly requirements: "requirements";
    readonly is_published: "is_published";
    readonly is_featured: "is_featured";
    readonly average_rating: "average_rating";
    readonly reviews_count: "reviews_count";
    readonly order: "order";
    readonly category_id: "category_id";
    readonly unlock_code: "unlock_code";
    readonly sections: "sections";
    readonly quiz: "quiz";
    readonly created_at: "created_at";
    readonly updated_at: "updated_at";
    readonly deleted_at: "deleted_at";
};
export type CoursesScalarFieldEnum = (typeof CoursesScalarFieldEnum)[keyof typeof CoursesScalarFieldEnum];
export declare const EbooksScalarFieldEnum: {
    readonly id: "id";
    readonly slug: "slug";
    readonly title: "title";
    readonly author: "author";
    readonly pages_count: "pages_count";
    readonly description: "description";
    readonly meta_title: "meta_title";
    readonly meta_description: "meta_description";
    readonly meta_keywords: "meta_keywords";
    readonly focus_keyword: "focus_keyword";
    readonly og_title: "og_title";
    readonly og_description: "og_description";
    readonly og_image: "og_image";
    readonly twitter_card: "twitter_card";
    readonly twitter_title: "twitter_title";
    readonly twitter_description: "twitter_description";
    readonly twitter_image: "twitter_image";
    readonly canonical_url: "canonical_url";
    readonly schema_type: "schema_type";
    readonly schema_data: "schema_data";
    readonly seo_score: "seo_score";
    readonly cover_image: "cover_image";
    readonly price: "price";
    readonly original_price: "original_price";
    readonly pages: "pages";
    readonly format: "format";
    readonly file_path: "file_path";
    readonly preview_link: "preview_link";
    readonly is_published: "is_published";
    readonly access_type: "access_type";
    readonly preview_pages: "preview_pages";
    readonly preview_percentage: "preview_percentage";
    readonly is_featured: "is_featured";
    readonly average_rating: "average_rating";
    readonly reviews_count: "reviews_count";
    readonly downloads_count: "downloads_count";
    readonly views_count: "views_count";
    readonly category_id: "category_id";
    readonly created_at: "created_at";
    readonly updated_at: "updated_at";
    readonly deleted_at: "deleted_at";
};
export type EbooksScalarFieldEnum = (typeof EbooksScalarFieldEnum)[keyof typeof EbooksScalarFieldEnum];
export declare const Email_campaignsScalarFieldEnum: {
    readonly id: "id";
    readonly name: "name";
    readonly type: "type";
    readonly subject: "subject";
    readonly preview_text: "preview_text";
    readonly from_name: "from_name";
    readonly from_email: "from_email";
    readonly reply_to: "reply_to";
    readonly html_content: "html_content";
    readonly plain_text_content: "plain_text_content";
    readonly template_id: "template_id";
    readonly target_audience: "target_audience";
    readonly segment_filter: "segment_filter";
    readonly recipient_count: "recipient_count";
    readonly schedule_type: "schedule_type";
    readonly scheduled_at: "scheduled_at";
    readonly automation_trigger: "automation_trigger";
    readonly status: "status";
    readonly is_active: "is_active";
    readonly sent_count: "sent_count";
    readonly delivered_count: "delivered_count";
    readonly opened_count: "opened_count";
    readonly clicked_count: "clicked_count";
    readonly bounced_count: "bounced_count";
    readonly unsubscribed_count: "unsubscribed_count";
    readonly is_ab_test: "is_ab_test";
    readonly ab_test_variant: "ab_test_variant";
    readonly sent_at: "sent_at";
    readonly created_at: "created_at";
    readonly updated_at: "updated_at";
    readonly deleted_at: "deleted_at";
};
export type Email_campaignsScalarFieldEnum = (typeof Email_campaignsScalarFieldEnum)[keyof typeof Email_campaignsScalarFieldEnum];
export declare const Email_templatesScalarFieldEnum: {
    readonly id: "id";
    readonly name: "name";
    readonly category: "category";
    readonly subject: "subject";
    readonly html_content: "html_content";
    readonly plain_text_content: "plain_text_content";
    readonly available_variables: "available_variables";
    readonly thumbnail_url: "thumbnail_url";
    readonly is_active: "is_active";
    readonly is_default: "is_default";
    readonly created_at: "created_at";
    readonly updated_at: "updated_at";
    readonly deleted_at: "deleted_at";
};
export type Email_templatesScalarFieldEnum = (typeof Email_templatesScalarFieldEnum)[keyof typeof Email_templatesScalarFieldEnum];
export declare const EnrollmentsScalarFieldEnum: {
    readonly id: "id";
    readonly user_id: "user_id";
    readonly course_id: "course_id";
    readonly coupon_id: "coupon_id";
    readonly enrollment_date: "enrollment_date";
    readonly completion_date: "completion_date";
    readonly status: "status";
    readonly payment_status: "payment_status";
    readonly progress_percentage: "progress_percentage";
    readonly original_price: "original_price";
    readonly final_price: "final_price";
    readonly created_at: "created_at";
    readonly updated_at: "updated_at";
};
export type EnrollmentsScalarFieldEnum = (typeof EnrollmentsScalarFieldEnum)[keyof typeof EnrollmentsScalarFieldEnum];
export declare const Expert_advisorsScalarFieldEnum: {
    readonly id: "id";
    readonly slug: "slug";
    readonly title: "title";
    readonly description: "description";
    readonly image: "image";
    readonly price: "price";
    readonly original_price: "original_price";
    readonly platform: "platform";
    readonly features: "features";
    readonly strategy: "strategy";
    readonly download_link: "download_link";
    readonly is_published: "is_published";
    readonly is_featured: "is_featured";
    readonly average_rating: "average_rating";
    readonly reviews_count: "reviews_count";
    readonly downloads_count: "downloads_count";
    readonly category_id: "category_id";
    readonly created_at: "created_at";
    readonly updated_at: "updated_at";
    readonly deleted_at: "deleted_at";
};
export type Expert_advisorsScalarFieldEnum = (typeof Expert_advisorsScalarFieldEnum)[keyof typeof Expert_advisorsScalarFieldEnum];
export declare const Failed_jobsScalarFieldEnum: {
    readonly id: "id";
    readonly uuid: "uuid";
    readonly connection: "connection";
    readonly queue: "queue";
    readonly payload: "payload";
    readonly exception: "exception";
    readonly failed_at: "failed_at";
};
export type Failed_jobsScalarFieldEnum = (typeof Failed_jobsScalarFieldEnum)[keyof typeof Failed_jobsScalarFieldEnum];
export declare const IndicatorsScalarFieldEnum: {
    readonly id: "id";
    readonly slug: "slug";
    readonly title: "title";
    readonly description: "description";
    readonly image: "image";
    readonly price: "price";
    readonly original_price: "original_price";
    readonly platform: "platform";
    readonly features: "features";
    readonly download_link: "download_link";
    readonly is_published: "is_published";
    readonly is_featured: "is_featured";
    readonly average_rating: "average_rating";
    readonly reviews_count: "reviews_count";
    readonly downloads_count: "downloads_count";
    readonly category_id: "category_id";
    readonly created_at: "created_at";
    readonly updated_at: "updated_at";
    readonly deleted_at: "deleted_at";
};
export type IndicatorsScalarFieldEnum = (typeof IndicatorsScalarFieldEnum)[keyof typeof IndicatorsScalarFieldEnum];
export declare const Job_batchesScalarFieldEnum: {
    readonly id: "id";
    readonly name: "name";
    readonly total_jobs: "total_jobs";
    readonly pending_jobs: "pending_jobs";
    readonly failed_jobs: "failed_jobs";
    readonly failed_job_ids: "failed_job_ids";
    readonly options: "options";
    readonly cancelled_at: "cancelled_at";
    readonly created_at: "created_at";
    readonly finished_at: "finished_at";
};
export type Job_batchesScalarFieldEnum = (typeof Job_batchesScalarFieldEnum)[keyof typeof Job_batchesScalarFieldEnum];
export declare const JobsScalarFieldEnum: {
    readonly id: "id";
    readonly queue: "queue";
    readonly payload: "payload";
    readonly attempts: "attempts";
    readonly reserved_at: "reserved_at";
    readonly available_at: "available_at";
    readonly created_at: "created_at";
};
export type JobsScalarFieldEnum = (typeof JobsScalarFieldEnum)[keyof typeof JobsScalarFieldEnum];
export declare const Lesson_completionsScalarFieldEnum: {
    readonly id: "id";
    readonly user_id: "user_id";
    readonly course_id: "course_id";
    readonly section_id: "section_id";
    readonly lesson_id: "lesson_id";
    readonly completed_at: "completed_at";
    readonly video_progress: "video_progress";
    readonly created_at: "created_at";
    readonly updated_at: "updated_at";
};
export type Lesson_completionsScalarFieldEnum = (typeof Lesson_completionsScalarFieldEnum)[keyof typeof Lesson_completionsScalarFieldEnum];
export declare const Lesson_videosScalarFieldEnum: {
    readonly id: "id";
    readonly course_id: "course_id";
    readonly lesson_id: "lesson_id";
    readonly video_type: "video_type";
    readonly youtube_id: "youtube_id";
    readonly file_path: "file_path";
    readonly file_size: "file_size";
    readonly duration: "duration";
    readonly mime_type: "mime_type";
    readonly thumbnail_path: "thumbnail_path";
    readonly status: "status";
    readonly created_at: "created_at";
    readonly updated_at: "updated_at";
};
export type Lesson_videosScalarFieldEnum = (typeof Lesson_videosScalarFieldEnum)[keyof typeof Lesson_videosScalarFieldEnum];
export declare const Marketing_analyticsScalarFieldEnum: {
    readonly id: "id";
    readonly campaign_type: "campaign_type";
    readonly campaign_id: "campaign_id";
    readonly user_id: "user_id";
    readonly session_id: "session_id";
    readonly event_type: "event_type";
    readonly event_data: "event_data";
    readonly page_url: "page_url";
    readonly referrer: "referrer";
    readonly device_type: "device_type";
    readonly browser: "browser";
    readonly created_at: "created_at";
};
export type Marketing_analyticsScalarFieldEnum = (typeof Marketing_analyticsScalarFieldEnum)[keyof typeof Marketing_analyticsScalarFieldEnum];
export declare const MediaScalarFieldEnum: {
    readonly id: "id";
    readonly disk: "disk";
    readonly directory: "directory";
    readonly visibility: "visibility";
    readonly name: "name";
    readonly path: "path";
    readonly original_path: "original_path";
    readonly optimized_path: "optimized_path";
    readonly optimization_status: "optimization_status";
    readonly original_size: "original_size";
    readonly optimized_size: "optimized_size";
    readonly compression_ratio: "compression_ratio";
    readonly width: "width";
    readonly height: "height";
    readonly size: "size";
    readonly type: "type";
    readonly ext: "ext";
    readonly alt: "alt";
    readonly title: "title";
    readonly description: "description";
    readonly caption: "caption";
    readonly exif: "exif";
    readonly curations: "curations";
    readonly created_at: "created_at";
    readonly updated_at: "updated_at";
    readonly tenant_id: "tenant_id";
};
export type MediaScalarFieldEnum = (typeof MediaScalarFieldEnum)[keyof typeof MediaScalarFieldEnum];
export declare const MigrationsScalarFieldEnum: {
    readonly id: "id";
    readonly migration: "migration";
    readonly batch: "batch";
};
export type MigrationsScalarFieldEnum = (typeof MigrationsScalarFieldEnum)[keyof typeof MigrationsScalarFieldEnum];
export declare const Model_has_permissionsScalarFieldEnum: {
    readonly permission_id: "permission_id";
    readonly model_type: "model_type";
    readonly model_id: "model_id";
};
export type Model_has_permissionsScalarFieldEnum = (typeof Model_has_permissionsScalarFieldEnum)[keyof typeof Model_has_permissionsScalarFieldEnum];
export declare const Model_has_rolesScalarFieldEnum: {
    readonly role_id: "role_id";
    readonly model_type: "model_type";
    readonly model_id: "model_id";
};
export type Model_has_rolesScalarFieldEnum = (typeof Model_has_rolesScalarFieldEnum)[keyof typeof Model_has_rolesScalarFieldEnum];
export declare const PagesScalarFieldEnum: {
    readonly id: "id";
    readonly title: "title";
    readonly slug: "slug";
    readonly content: "content";
    readonly custom_css: "custom_css";
    readonly is_active: "is_active";
    readonly is_home: "is_home";
    readonly seo_title: "seo_title";
    readonly seo_description: "seo_description";
    readonly seo_keywords: "seo_keywords";
    readonly created_at: "created_at";
    readonly updated_at: "updated_at";
};
export type PagesScalarFieldEnum = (typeof PagesScalarFieldEnum)[keyof typeof PagesScalarFieldEnum];
export declare const Password_reset_tokensScalarFieldEnum: {
    readonly email: "email";
    readonly token: "token";
    readonly created_at: "created_at";
};
export type Password_reset_tokensScalarFieldEnum = (typeof Password_reset_tokensScalarFieldEnum)[keyof typeof Password_reset_tokensScalarFieldEnum];
export declare const Payment_settingsScalarFieldEnum: {
    readonly id: "id";
    readonly key: "key";
    readonly name: "name";
    readonly is_enabled: "is_enabled";
    readonly configuration: "configuration";
    readonly sort_order: "sort_order";
    readonly created_at: "created_at";
    readonly updated_at: "updated_at";
};
export type Payment_settingsScalarFieldEnum = (typeof Payment_settingsScalarFieldEnum)[keyof typeof Payment_settingsScalarFieldEnum];
export declare const PermissionsScalarFieldEnum: {
    readonly id: "id";
    readonly name: "name";
    readonly guard_name: "guard_name";
    readonly created_at: "created_at";
    readonly updated_at: "updated_at";
};
export type PermissionsScalarFieldEnum = (typeof PermissionsScalarFieldEnum)[keyof typeof PermissionsScalarFieldEnum];
export declare const Personal_access_tokensScalarFieldEnum: {
    readonly id: "id";
    readonly tokenable_type: "tokenable_type";
    readonly tokenable_id: "tokenable_id";
    readonly name: "name";
    readonly token: "token";
    readonly abilities: "abilities";
    readonly last_used_at: "last_used_at";
    readonly expires_at: "expires_at";
    readonly created_at: "created_at";
    readonly updated_at: "updated_at";
};
export type Personal_access_tokensScalarFieldEnum = (typeof Personal_access_tokensScalarFieldEnum)[keyof typeof Personal_access_tokensScalarFieldEnum];
export declare const PopupsScalarFieldEnum: {
    readonly id: "id";
    readonly name: "name";
    readonly title: "title";
    readonly content: "content";
    readonly trigger_type: "trigger_type";
    readonly trigger_value: "trigger_value";
    readonly display_type: "display_type";
    readonly position: "position";
    readonly width: "width";
    readonly height: "height";
    readonly target_pages: "target_pages";
    readonly target_user_type: "target_user_type";
    readonly frequency: "frequency";
    readonly image_url: "image_url";
    readonly button_text: "button_text";
    readonly button_url: "button_url";
    readonly button_color: "button_color";
    readonly background_color: "background_color";
    readonly is_active: "is_active";
    readonly starts_at: "starts_at";
    readonly ends_at: "ends_at";
    readonly impressions: "impressions";
    readonly clicks: "clicks";
    readonly conversions: "conversions";
    readonly created_at: "created_at";
    readonly updated_at: "updated_at";
    readonly deleted_at: "deleted_at";
};
export type PopupsScalarFieldEnum = (typeof PopupsScalarFieldEnum)[keyof typeof PopupsScalarFieldEnum];
export declare const Product_screenshotsScalarFieldEnum: {
    readonly id: "id";
    readonly product_id: "product_id";
    readonly media_id: "media_id";
    readonly order: "order";
    readonly created_at: "created_at";
    readonly updated_at: "updated_at";
};
export type Product_screenshotsScalarFieldEnum = (typeof Product_screenshotsScalarFieldEnum)[keyof typeof Product_screenshotsScalarFieldEnum];
export declare const ProductsScalarFieldEnum: {
    readonly id: "id";
    readonly name: "name";
    readonly slug: "slug";
    readonly description: "description";
    readonly category: "category";
    readonly price: "price";
    readonly access_type: "access_type";
    readonly file_path: "file_path";
    readonly file_size: "file_size";
    readonly file_version: "file_version";
    readonly requirements: "requirements";
    readonly installation_guide: "installation_guide";
    readonly demo_url: "demo_url";
    readonly thumbnail_id: "thumbnail_id";
    readonly featured_image_id: "featured_image_id";
    readonly downloads_count: "downloads_count";
    readonly views_count: "views_count";
    readonly rating: "rating";
    readonly status: "status";
    readonly is_featured: "is_featured";
    readonly published_at: "published_at";
    readonly created_at: "created_at";
    readonly updated_at: "updated_at";
    readonly deleted_at: "deleted_at";
};
export type ProductsScalarFieldEnum = (typeof ProductsScalarFieldEnum)[keyof typeof ProductsScalarFieldEnum];
export declare const Promotion_userScalarFieldEnum: {
    readonly id: "id";
    readonly user_id: "user_id";
    readonly promotion_id: "promotion_id";
    readonly usage_count: "usage_count";
    readonly discount_amount: "discount_amount";
    readonly order_amount: "order_amount";
    readonly used_at: "used_at";
    readonly created_at: "created_at";
    readonly updated_at: "updated_at";
};
export type Promotion_userScalarFieldEnum = (typeof Promotion_userScalarFieldEnum)[keyof typeof Promotion_userScalarFieldEnum];
export declare const PromotionsScalarFieldEnum: {
    readonly id: "id";
    readonly name: "name";
    readonly slug: "slug";
    readonly description: "description";
    readonly type: "type";
    readonly discount_type: "discount_type";
    readonly discount_value: "discount_value";
    readonly max_discount_amount: "max_discount_amount";
    readonly min_purchase_amount: "min_purchase_amount";
    readonly applicable_to: "applicable_to";
    readonly applicable_ids: "applicable_ids";
    readonly starts_at: "starts_at";
    readonly ends_at: "ends_at";
    readonly is_active: "is_active";
    readonly usage_limit: "usage_limit";
    readonly usage_per_user: "usage_per_user";
    readonly current_usage: "current_usage";
    readonly banner_image: "banner_image";
    readonly badge_text: "badge_text";
    readonly badge_color: "badge_color";
    readonly priority: "priority";
    readonly created_at: "created_at";
    readonly updated_at: "updated_at";
    readonly deleted_at: "deleted_at";
};
export type PromotionsScalarFieldEnum = (typeof PromotionsScalarFieldEnum)[keyof typeof PromotionsScalarFieldEnum];
export declare const Quiz_attemptsScalarFieldEnum: {
    readonly id: "id";
    readonly user_id: "user_id";
    readonly course_id: "course_id";
    readonly score: "score";
    readonly total_questions: "total_questions";
    readonly percentage: "percentage";
    readonly passed: "passed";
    readonly answers: "answers";
    readonly attempted_at: "attempted_at";
    readonly created_at: "created_at";
    readonly updated_at: "updated_at";
};
export type Quiz_attemptsScalarFieldEnum = (typeof Quiz_attemptsScalarFieldEnum)[keyof typeof Quiz_attemptsScalarFieldEnum];
export declare const ReviewsScalarFieldEnum: {
    readonly id: "id";
    readonly reviewable_type: "reviewable_type";
    readonly reviewable_id: "reviewable_id";
    readonly user_name: "user_name";
    readonly user_email: "user_email";
    readonly rating: "rating";
    readonly title: "title";
    readonly comment: "comment";
    readonly is_approved: "is_approved";
    readonly is_verified_purchase: "is_verified_purchase";
    readonly ip_address: "ip_address";
    readonly approved_at: "approved_at";
    readonly approved_by: "approved_by";
    readonly created_at: "created_at";
    readonly updated_at: "updated_at";
    readonly deleted_at: "deleted_at";
};
export type ReviewsScalarFieldEnum = (typeof ReviewsScalarFieldEnum)[keyof typeof ReviewsScalarFieldEnum];
export declare const Role_has_permissionsScalarFieldEnum: {
    readonly permission_id: "permission_id";
    readonly role_id: "role_id";
};
export type Role_has_permissionsScalarFieldEnum = (typeof Role_has_permissionsScalarFieldEnum)[keyof typeof Role_has_permissionsScalarFieldEnum];
export declare const RolesScalarFieldEnum: {
    readonly id: "id";
    readonly name: "name";
    readonly guard_name: "guard_name";
    readonly created_at: "created_at";
    readonly updated_at: "updated_at";
};
export type RolesScalarFieldEnum = (typeof RolesScalarFieldEnum)[keyof typeof RolesScalarFieldEnum];
export declare const SessionsScalarFieldEnum: {
    readonly id: "id";
    readonly user_id: "user_id";
    readonly ip_address: "ip_address";
    readonly user_agent: "user_agent";
    readonly payload: "payload";
    readonly last_activity: "last_activity";
};
export type SessionsScalarFieldEnum = (typeof SessionsScalarFieldEnum)[keyof typeof SessionsScalarFieldEnum];
export declare const Site_settingsScalarFieldEnum: {
    readonly id: "id";
    readonly site_name: "site_name";
    readonly site_description: "site_description";
    readonly logo: "logo";
    readonly favicon: "favicon";
    readonly contact_email: "contact_email";
    readonly contact_address: "contact_address";
    readonly contact_line: "contact_line";
    readonly contact_facebook: "contact_facebook";
    readonly contact_twitter: "contact_twitter";
    readonly contact_instagram: "contact_instagram";
    readonly contact_youtube: "contact_youtube";
    readonly business_hours: "business_hours";
    readonly tax_id: "tax_id";
    readonly company_name: "company_name";
    readonly contact_phone: "contact_phone";
    readonly address: "address";
    readonly facebook_url: "facebook_url";
    readonly line_url: "line_url";
    readonly tiktok_url: "tiktok_url";
    readonly youtube_url: "youtube_url";
    readonly created_at: "created_at";
    readonly updated_at: "updated_at";
    readonly header_menu: "header_menu";
    readonly header_style: "header_style";
    readonly header_colors: "header_colors";
    readonly footer_menu: "footer_menu";
    readonly cta_text: "cta_text";
    readonly cta_link: "cta_link";
    readonly footer_text: "footer_text";
    readonly footer_columns: "footer_columns";
    readonly footer_social_links: "footer_social_links";
    readonly footer_style: "footer_style";
    readonly footer_colors: "footer_colors";
    readonly theme_colors: "theme_colors";
    readonly theme_font_heading: "theme_font_heading";
    readonly theme_font_body: "theme_font_body";
    readonly theme_layout: "theme_layout";
    readonly theme_dark_mode: "theme_dark_mode";
    readonly theme_glassmorphism: "theme_glassmorphism";
};
export type Site_settingsScalarFieldEnum = (typeof Site_settingsScalarFieldEnum)[keyof typeof Site_settingsScalarFieldEnum];
export declare const Sms_campaignsScalarFieldEnum: {
    readonly id: "id";
    readonly name: "name";
    readonly type: "type";
    readonly message: "message";
    readonly sender_name: "sender_name";
    readonly target_audience: "target_audience";
    readonly segment_filter: "segment_filter";
    readonly recipient_count: "recipient_count";
    readonly schedule_type: "schedule_type";
    readonly scheduled_at: "scheduled_at";
    readonly recurrence_pattern: "recurrence_pattern";
    readonly status: "status";
    readonly is_active: "is_active";
    readonly sent_count: "sent_count";
    readonly delivered_count: "delivered_count";
    readonly failed_count: "failed_count";
    readonly clicked_count: "clicked_count";
    readonly estimated_cost: "estimated_cost";
    readonly actual_cost: "actual_cost";
    readonly sent_at: "sent_at";
    readonly created_at: "created_at";
    readonly updated_at: "updated_at";
    readonly deleted_at: "deleted_at";
};
export type Sms_campaignsScalarFieldEnum = (typeof Sms_campaignsScalarFieldEnum)[keyof typeof Sms_campaignsScalarFieldEnum];
export declare const Social_accountsScalarFieldEnum: {
    readonly id: "id";
    readonly user_id: "user_id";
    readonly provider: "provider";
    readonly provider_id: "provider_id";
    readonly provider_token: "provider_token";
    readonly provider_refresh_token: "provider_refresh_token";
    readonly token_expires_at: "token_expires_at";
    readonly avatar: "avatar";
    readonly provider_data: "provider_data";
    readonly created_at: "created_at";
    readonly updated_at: "updated_at";
};
export type Social_accountsScalarFieldEnum = (typeof Social_accountsScalarFieldEnum)[keyof typeof Social_accountsScalarFieldEnum];
export declare const Subscription_plansScalarFieldEnum: {
    readonly id: "id";
    readonly name: "name";
    readonly slug: "slug";
    readonly description: "description";
    readonly price: "price";
    readonly billing_cycle: "billing_cycle";
    readonly trial_days: "trial_days";
    readonly features: "features";
    readonly limitations: "limitations";
    readonly max_courses: "max_courses";
    readonly max_downloads_per_month: "max_downloads_per_month";
    readonly max_ebooks: "max_ebooks";
    readonly max_products: "max_products";
    readonly ai_chat_access: "ai_chat_access";
    readonly ai_messages_per_month: "ai_messages_per_month";
    readonly sort_order: "sort_order";
    readonly is_popular: "is_popular";
    readonly is_active: "is_active";
    readonly badge_text: "badge_text";
    readonly badge_color: "badge_color";
    readonly created_at: "created_at";
    readonly updated_at: "updated_at";
    readonly deleted_at: "deleted_at";
};
export type Subscription_plansScalarFieldEnum = (typeof Subscription_plansScalarFieldEnum)[keyof typeof Subscription_plansScalarFieldEnum];
export declare const System_settingsScalarFieldEnum: {
    readonly id: "id";
    readonly key: "key";
    readonly value: "value";
    readonly type: "type";
    readonly group: "group";
    readonly description: "description";
    readonly created_at: "created_at";
    readonly updated_at: "updated_at";
};
export type System_settingsScalarFieldEnum = (typeof System_settingsScalarFieldEnum)[keyof typeof System_settingsScalarFieldEnum];
export declare const Two_factor_authScalarFieldEnum: {
    readonly id: "id";
    readonly user_id: "user_id";
    readonly enabled: "enabled";
    readonly secret: "secret";
    readonly recovery_codes: "recovery_codes";
    readonly enabled_at: "enabled_at";
    readonly last_used_at: "last_used_at";
    readonly created_at: "created_at";
    readonly updated_at: "updated_at";
};
export type Two_factor_authScalarFieldEnum = (typeof Two_factor_authScalarFieldEnum)[keyof typeof Two_factor_authScalarFieldEnum];
export declare const User_profilesScalarFieldEnum: {
    readonly id: "id";
    readonly user_id: "user_id";
    readonly bio: "bio";
    readonly address: "address";
    readonly city: "city";
    readonly country: "country";
    readonly interests: "interests";
    readonly created_at: "created_at";
    readonly updated_at: "updated_at";
};
export type User_profilesScalarFieldEnum = (typeof User_profilesScalarFieldEnum)[keyof typeof User_profilesScalarFieldEnum];
export declare const User_subscriptionsScalarFieldEnum: {
    readonly id: "id";
    readonly user_id: "user_id";
    readonly subscription_plan_id: "subscription_plan_id";
    readonly status: "status";
    readonly started_at: "started_at";
    readonly expires_at: "expires_at";
    readonly cancelled_at: "cancelled_at";
    readonly trial_ends_at: "trial_ends_at";
    readonly payment_id: "payment_id";
    readonly amount_paid: "amount_paid";
    readonly payment_method: "payment_method";
    readonly payment_reference: "payment_reference";
    readonly auto_renew: "auto_renew";
    readonly stripe_subscription_id: "stripe_subscription_id";
    readonly usage_stats: "usage_stats";
    readonly created_at: "created_at";
    readonly updated_at: "updated_at";
    readonly deleted_at: "deleted_at";
};
export type User_subscriptionsScalarFieldEnum = (typeof User_subscriptionsScalarFieldEnum)[keyof typeof User_subscriptionsScalarFieldEnum];
export declare const UsersScalarFieldEnum: {
    readonly id: "id";
    readonly name: "name";
    readonly email: "email";
    readonly phone: "phone";
    readonly avatar: "avatar";
    readonly role: "role";
    readonly email_verified_at: "email_verified_at";
    readonly phone_verified_at: "phone_verified_at";
    readonly password: "password";
    readonly remember_token: "remember_token";
    readonly created_at: "created_at";
    readonly updated_at: "updated_at";
};
export type UsersScalarFieldEnum = (typeof UsersScalarFieldEnum)[keyof typeof UsersScalarFieldEnum];
export declare const Verification_codesScalarFieldEnum: {
    readonly id: "id";
    readonly user_id: "user_id";
    readonly type: "type";
    readonly code: "code";
    readonly contact: "contact";
    readonly expires_at: "expires_at";
    readonly verified: "verified";
    readonly verified_at: "verified_at";
    readonly created_at: "created_at";
    readonly updated_at: "updated_at";
};
export type Verification_codesScalarFieldEnum = (typeof Verification_codesScalarFieldEnum)[keyof typeof Verification_codesScalarFieldEnum];
export declare const SortOrder: {
    readonly asc: "asc";
    readonly desc: "desc";
};
export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder];
export declare const NullableJsonNullValueInput: {
    readonly DbNull: any;
    readonly JsonNull: any;
};
export type NullableJsonNullValueInput = (typeof NullableJsonNullValueInput)[keyof typeof NullableJsonNullValueInput];
export declare const JsonNullValueInput: {
    readonly JsonNull: any;
};
export type JsonNullValueInput = (typeof JsonNullValueInput)[keyof typeof JsonNullValueInput];
export declare const JsonNullValueFilter: {
    readonly DbNull: any;
    readonly JsonNull: any;
    readonly AnyNull: any;
};
export type JsonNullValueFilter = (typeof JsonNullValueFilter)[keyof typeof JsonNullValueFilter];
export declare const QueryMode: {
    readonly default: "default";
    readonly insensitive: "insensitive";
};
export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode];
export declare const NullsOrder: {
    readonly first: "first";
    readonly last: "last";
};
export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder];
export declare const activity_logsOrderByRelevanceFieldEnum: {
    readonly log_name: "log_name";
    readonly description: "description";
    readonly subject_type: "subject_type";
    readonly event: "event";
    readonly causer_type: "causer_type";
    readonly batch_uuid: "batch_uuid";
    readonly ip_address: "ip_address";
    readonly user_agent: "user_agent";
};
export type activity_logsOrderByRelevanceFieldEnum = (typeof activity_logsOrderByRelevanceFieldEnum)[keyof typeof activity_logsOrderByRelevanceFieldEnum];
export declare const api_settingsOrderByRelevanceFieldEnum: {
    readonly category: "category";
    readonly key: "key";
    readonly name: "name";
    readonly value: "value";
    readonly description: "description";
};
export type api_settingsOrderByRelevanceFieldEnum = (typeof api_settingsOrderByRelevanceFieldEnum)[keyof typeof api_settingsOrderByRelevanceFieldEnum];
export declare const article_viewsOrderByRelevanceFieldEnum: {
    readonly ip_address: "ip_address";
    readonly user_agent: "user_agent";
};
export type article_viewsOrderByRelevanceFieldEnum = (typeof article_viewsOrderByRelevanceFieldEnum)[keyof typeof article_viewsOrderByRelevanceFieldEnum];
export declare const articlesOrderByRelevanceFieldEnum: {
    readonly slug: "slug";
    readonly title: "title";
    readonly meta_title: "meta_title";
    readonly meta_description: "meta_description";
    readonly meta_keywords: "meta_keywords";
    readonly focus_keyword: "focus_keyword";
    readonly og_title: "og_title";
    readonly og_description: "og_description";
    readonly og_image: "og_image";
    readonly twitter_title: "twitter_title";
    readonly twitter_description: "twitter_description";
    readonly twitter_image: "twitter_image";
    readonly canonical_url: "canonical_url";
    readonly excerpt: "excerpt";
    readonly content: "content";
    readonly featured_image: "featured_image";
    readonly author: "author";
};
export type articlesOrderByRelevanceFieldEnum = (typeof articlesOrderByRelevanceFieldEnum)[keyof typeof articlesOrderByRelevanceFieldEnum];
export declare const cacheOrderByRelevanceFieldEnum: {
    readonly key: "key";
    readonly value: "value";
};
export type cacheOrderByRelevanceFieldEnum = (typeof cacheOrderByRelevanceFieldEnum)[keyof typeof cacheOrderByRelevanceFieldEnum];
export declare const cache_locksOrderByRelevanceFieldEnum: {
    readonly key: "key";
    readonly owner: "owner";
};
export type cache_locksOrderByRelevanceFieldEnum = (typeof cache_locksOrderByRelevanceFieldEnum)[keyof typeof cache_locksOrderByRelevanceFieldEnum];
export declare const categoriesOrderByRelevanceFieldEnum: {
    readonly name: "name";
    readonly slug: "slug";
    readonly description: "description";
    readonly type: "type";
    readonly icon: "icon";
    readonly color: "color";
};
export type categoriesOrderByRelevanceFieldEnum = (typeof categoriesOrderByRelevanceFieldEnum)[keyof typeof categoriesOrderByRelevanceFieldEnum];
export declare const certificatesOrderByRelevanceFieldEnum: {
    readonly certificate_number: "certificate_number";
    readonly verification_code: "verification_code";
    readonly pdf_path: "pdf_path";
};
export type certificatesOrderByRelevanceFieldEnum = (typeof certificatesOrderByRelevanceFieldEnum)[keyof typeof certificatesOrderByRelevanceFieldEnum];
export declare const couponsOrderByRelevanceFieldEnum: {
    readonly code: "code";
    readonly description: "description";
};
export type couponsOrderByRelevanceFieldEnum = (typeof couponsOrderByRelevanceFieldEnum)[keyof typeof couponsOrderByRelevanceFieldEnum];
export declare const coursesOrderByRelevanceFieldEnum: {
    readonly slug: "slug";
    readonly title: "title";
    readonly description: "description";
    readonly meta_title: "meta_title";
    readonly meta_description: "meta_description";
    readonly meta_keywords: "meta_keywords";
    readonly og_image: "og_image";
    readonly og_description: "og_description";
    readonly canonical_url: "canonical_url";
    readonly cover: "cover";
    readonly hours: "hours";
    readonly level: "level";
    readonly what_you_learn: "what_you_learn";
    readonly requirements: "requirements";
    readonly unlock_code: "unlock_code";
};
export type coursesOrderByRelevanceFieldEnum = (typeof coursesOrderByRelevanceFieldEnum)[keyof typeof coursesOrderByRelevanceFieldEnum];
export declare const ebooksOrderByRelevanceFieldEnum: {
    readonly slug: "slug";
    readonly title: "title";
    readonly author: "author";
    readonly description: "description";
    readonly meta_title: "meta_title";
    readonly meta_description: "meta_description";
    readonly meta_keywords: "meta_keywords";
    readonly focus_keyword: "focus_keyword";
    readonly og_title: "og_title";
    readonly og_description: "og_description";
    readonly og_image: "og_image";
    readonly twitter_title: "twitter_title";
    readonly twitter_description: "twitter_description";
    readonly twitter_image: "twitter_image";
    readonly canonical_url: "canonical_url";
    readonly cover_image: "cover_image";
    readonly format: "format";
    readonly file_path: "file_path";
    readonly preview_link: "preview_link";
    readonly preview_pages: "preview_pages";
};
export type ebooksOrderByRelevanceFieldEnum = (typeof ebooksOrderByRelevanceFieldEnum)[keyof typeof ebooksOrderByRelevanceFieldEnum];
export declare const email_campaignsOrderByRelevanceFieldEnum: {
    readonly name: "name";
    readonly subject: "subject";
    readonly preview_text: "preview_text";
    readonly from_name: "from_name";
    readonly from_email: "from_email";
    readonly reply_to: "reply_to";
    readonly html_content: "html_content";
    readonly plain_text_content: "plain_text_content";
    readonly automation_trigger: "automation_trigger";
    readonly ab_test_variant: "ab_test_variant";
};
export type email_campaignsOrderByRelevanceFieldEnum = (typeof email_campaignsOrderByRelevanceFieldEnum)[keyof typeof email_campaignsOrderByRelevanceFieldEnum];
export declare const email_templatesOrderByRelevanceFieldEnum: {
    readonly name: "name";
    readonly subject: "subject";
    readonly html_content: "html_content";
    readonly plain_text_content: "plain_text_content";
    readonly thumbnail_url: "thumbnail_url";
};
export type email_templatesOrderByRelevanceFieldEnum = (typeof email_templatesOrderByRelevanceFieldEnum)[keyof typeof email_templatesOrderByRelevanceFieldEnum];
export declare const expert_advisorsOrderByRelevanceFieldEnum: {
    readonly slug: "slug";
    readonly title: "title";
    readonly description: "description";
    readonly image: "image";
    readonly platform: "platform";
    readonly features: "features";
    readonly strategy: "strategy";
    readonly download_link: "download_link";
};
export type expert_advisorsOrderByRelevanceFieldEnum = (typeof expert_advisorsOrderByRelevanceFieldEnum)[keyof typeof expert_advisorsOrderByRelevanceFieldEnum];
export declare const failed_jobsOrderByRelevanceFieldEnum: {
    readonly uuid: "uuid";
    readonly connection: "connection";
    readonly queue: "queue";
    readonly payload: "payload";
    readonly exception: "exception";
};
export type failed_jobsOrderByRelevanceFieldEnum = (typeof failed_jobsOrderByRelevanceFieldEnum)[keyof typeof failed_jobsOrderByRelevanceFieldEnum];
export declare const indicatorsOrderByRelevanceFieldEnum: {
    readonly slug: "slug";
    readonly title: "title";
    readonly description: "description";
    readonly image: "image";
    readonly platform: "platform";
    readonly features: "features";
    readonly download_link: "download_link";
};
export type indicatorsOrderByRelevanceFieldEnum = (typeof indicatorsOrderByRelevanceFieldEnum)[keyof typeof indicatorsOrderByRelevanceFieldEnum];
export declare const job_batchesOrderByRelevanceFieldEnum: {
    readonly id: "id";
    readonly name: "name";
    readonly failed_job_ids: "failed_job_ids";
    readonly options: "options";
};
export type job_batchesOrderByRelevanceFieldEnum = (typeof job_batchesOrderByRelevanceFieldEnum)[keyof typeof job_batchesOrderByRelevanceFieldEnum];
export declare const jobsOrderByRelevanceFieldEnum: {
    readonly queue: "queue";
    readonly payload: "payload";
};
export type jobsOrderByRelevanceFieldEnum = (typeof jobsOrderByRelevanceFieldEnum)[keyof typeof jobsOrderByRelevanceFieldEnum];
export declare const lesson_completionsOrderByRelevanceFieldEnum: {
    readonly section_id: "section_id";
    readonly lesson_id: "lesson_id";
};
export type lesson_completionsOrderByRelevanceFieldEnum = (typeof lesson_completionsOrderByRelevanceFieldEnum)[keyof typeof lesson_completionsOrderByRelevanceFieldEnum];
export declare const lesson_videosOrderByRelevanceFieldEnum: {
    readonly lesson_id: "lesson_id";
    readonly youtube_id: "youtube_id";
    readonly file_path: "file_path";
    readonly mime_type: "mime_type";
    readonly thumbnail_path: "thumbnail_path";
};
export type lesson_videosOrderByRelevanceFieldEnum = (typeof lesson_videosOrderByRelevanceFieldEnum)[keyof typeof lesson_videosOrderByRelevanceFieldEnum];
export declare const marketing_analyticsOrderByRelevanceFieldEnum: {
    readonly session_id: "session_id";
    readonly page_url: "page_url";
    readonly referrer: "referrer";
    readonly device_type: "device_type";
    readonly browser: "browser";
};
export type marketing_analyticsOrderByRelevanceFieldEnum = (typeof marketing_analyticsOrderByRelevanceFieldEnum)[keyof typeof marketing_analyticsOrderByRelevanceFieldEnum];
export declare const mediaOrderByRelevanceFieldEnum: {
    readonly disk: "disk";
    readonly directory: "directory";
    readonly visibility: "visibility";
    readonly name: "name";
    readonly path: "path";
    readonly original_path: "original_path";
    readonly optimized_path: "optimized_path";
    readonly type: "type";
    readonly ext: "ext";
    readonly alt: "alt";
    readonly title: "title";
    readonly description: "description";
    readonly caption: "caption";
    readonly exif: "exif";
    readonly curations: "curations";
};
export type mediaOrderByRelevanceFieldEnum = (typeof mediaOrderByRelevanceFieldEnum)[keyof typeof mediaOrderByRelevanceFieldEnum];
export declare const migrationsOrderByRelevanceFieldEnum: {
    readonly migration: "migration";
};
export type migrationsOrderByRelevanceFieldEnum = (typeof migrationsOrderByRelevanceFieldEnum)[keyof typeof migrationsOrderByRelevanceFieldEnum];
export declare const model_has_permissionsOrderByRelevanceFieldEnum: {
    readonly model_type: "model_type";
};
export type model_has_permissionsOrderByRelevanceFieldEnum = (typeof model_has_permissionsOrderByRelevanceFieldEnum)[keyof typeof model_has_permissionsOrderByRelevanceFieldEnum];
export declare const model_has_rolesOrderByRelevanceFieldEnum: {
    readonly model_type: "model_type";
};
export type model_has_rolesOrderByRelevanceFieldEnum = (typeof model_has_rolesOrderByRelevanceFieldEnum)[keyof typeof model_has_rolesOrderByRelevanceFieldEnum];
export declare const pagesOrderByRelevanceFieldEnum: {
    readonly title: "title";
    readonly slug: "slug";
    readonly content: "content";
    readonly custom_css: "custom_css";
    readonly seo_title: "seo_title";
    readonly seo_description: "seo_description";
    readonly seo_keywords: "seo_keywords";
};
export type pagesOrderByRelevanceFieldEnum = (typeof pagesOrderByRelevanceFieldEnum)[keyof typeof pagesOrderByRelevanceFieldEnum];
export declare const password_reset_tokensOrderByRelevanceFieldEnum: {
    readonly email: "email";
    readonly token: "token";
};
export type password_reset_tokensOrderByRelevanceFieldEnum = (typeof password_reset_tokensOrderByRelevanceFieldEnum)[keyof typeof password_reset_tokensOrderByRelevanceFieldEnum];
export declare const payment_settingsOrderByRelevanceFieldEnum: {
    readonly key: "key";
    readonly name: "name";
};
export type payment_settingsOrderByRelevanceFieldEnum = (typeof payment_settingsOrderByRelevanceFieldEnum)[keyof typeof payment_settingsOrderByRelevanceFieldEnum];
export declare const permissionsOrderByRelevanceFieldEnum: {
    readonly name: "name";
    readonly guard_name: "guard_name";
};
export type permissionsOrderByRelevanceFieldEnum = (typeof permissionsOrderByRelevanceFieldEnum)[keyof typeof permissionsOrderByRelevanceFieldEnum];
export declare const personal_access_tokensOrderByRelevanceFieldEnum: {
    readonly tokenable_type: "tokenable_type";
    readonly name: "name";
    readonly token: "token";
    readonly abilities: "abilities";
};
export type personal_access_tokensOrderByRelevanceFieldEnum = (typeof personal_access_tokensOrderByRelevanceFieldEnum)[keyof typeof personal_access_tokensOrderByRelevanceFieldEnum];
export declare const popupsOrderByRelevanceFieldEnum: {
    readonly name: "name";
    readonly title: "title";
    readonly content: "content";
    readonly image_url: "image_url";
    readonly button_text: "button_text";
    readonly button_url: "button_url";
    readonly button_color: "button_color";
    readonly background_color: "background_color";
};
export type popupsOrderByRelevanceFieldEnum = (typeof popupsOrderByRelevanceFieldEnum)[keyof typeof popupsOrderByRelevanceFieldEnum];
export declare const productsOrderByRelevanceFieldEnum: {
    readonly name: "name";
    readonly slug: "slug";
    readonly description: "description";
    readonly file_path: "file_path";
    readonly file_version: "file_version";
    readonly requirements: "requirements";
    readonly installation_guide: "installation_guide";
    readonly demo_url: "demo_url";
};
export type productsOrderByRelevanceFieldEnum = (typeof productsOrderByRelevanceFieldEnum)[keyof typeof productsOrderByRelevanceFieldEnum];
export declare const promotionsOrderByRelevanceFieldEnum: {
    readonly name: "name";
    readonly slug: "slug";
    readonly description: "description";
    readonly banner_image: "banner_image";
    readonly badge_text: "badge_text";
    readonly badge_color: "badge_color";
};
export type promotionsOrderByRelevanceFieldEnum = (typeof promotionsOrderByRelevanceFieldEnum)[keyof typeof promotionsOrderByRelevanceFieldEnum];
export declare const reviewsOrderByRelevanceFieldEnum: {
    readonly reviewable_type: "reviewable_type";
    readonly user_name: "user_name";
    readonly user_email: "user_email";
    readonly title: "title";
    readonly comment: "comment";
    readonly ip_address: "ip_address";
};
export type reviewsOrderByRelevanceFieldEnum = (typeof reviewsOrderByRelevanceFieldEnum)[keyof typeof reviewsOrderByRelevanceFieldEnum];
export declare const rolesOrderByRelevanceFieldEnum: {
    readonly name: "name";
    readonly guard_name: "guard_name";
};
export type rolesOrderByRelevanceFieldEnum = (typeof rolesOrderByRelevanceFieldEnum)[keyof typeof rolesOrderByRelevanceFieldEnum];
export declare const sessionsOrderByRelevanceFieldEnum: {
    readonly id: "id";
    readonly ip_address: "ip_address";
    readonly user_agent: "user_agent";
    readonly payload: "payload";
};
export type sessionsOrderByRelevanceFieldEnum = (typeof sessionsOrderByRelevanceFieldEnum)[keyof typeof sessionsOrderByRelevanceFieldEnum];
export declare const site_settingsOrderByRelevanceFieldEnum: {
    readonly site_name: "site_name";
    readonly site_description: "site_description";
    readonly logo: "logo";
    readonly favicon: "favicon";
    readonly contact_email: "contact_email";
    readonly contact_address: "contact_address";
    readonly contact_line: "contact_line";
    readonly contact_facebook: "contact_facebook";
    readonly contact_twitter: "contact_twitter";
    readonly contact_instagram: "contact_instagram";
    readonly contact_youtube: "contact_youtube";
    readonly business_hours: "business_hours";
    readonly tax_id: "tax_id";
    readonly company_name: "company_name";
    readonly contact_phone: "contact_phone";
    readonly address: "address";
    readonly facebook_url: "facebook_url";
    readonly line_url: "line_url";
    readonly tiktok_url: "tiktok_url";
    readonly youtube_url: "youtube_url";
    readonly header_style: "header_style";
    readonly cta_text: "cta_text";
    readonly cta_link: "cta_link";
    readonly footer_text: "footer_text";
    readonly footer_style: "footer_style";
    readonly theme_font_heading: "theme_font_heading";
    readonly theme_font_body: "theme_font_body";
    readonly theme_layout: "theme_layout";
};
export type site_settingsOrderByRelevanceFieldEnum = (typeof site_settingsOrderByRelevanceFieldEnum)[keyof typeof site_settingsOrderByRelevanceFieldEnum];
export declare const sms_campaignsOrderByRelevanceFieldEnum: {
    readonly name: "name";
    readonly message: "message";
    readonly sender_name: "sender_name";
    readonly recurrence_pattern: "recurrence_pattern";
};
export type sms_campaignsOrderByRelevanceFieldEnum = (typeof sms_campaignsOrderByRelevanceFieldEnum)[keyof typeof sms_campaignsOrderByRelevanceFieldEnum];
export declare const social_accountsOrderByRelevanceFieldEnum: {
    readonly provider: "provider";
    readonly provider_id: "provider_id";
    readonly provider_token: "provider_token";
    readonly provider_refresh_token: "provider_refresh_token";
    readonly avatar: "avatar";
};
export type social_accountsOrderByRelevanceFieldEnum = (typeof social_accountsOrderByRelevanceFieldEnum)[keyof typeof social_accountsOrderByRelevanceFieldEnum];
export declare const subscription_plansOrderByRelevanceFieldEnum: {
    readonly name: "name";
    readonly slug: "slug";
    readonly description: "description";
    readonly billing_cycle: "billing_cycle";
    readonly badge_text: "badge_text";
    readonly badge_color: "badge_color";
};
export type subscription_plansOrderByRelevanceFieldEnum = (typeof subscription_plansOrderByRelevanceFieldEnum)[keyof typeof subscription_plansOrderByRelevanceFieldEnum];
export declare const system_settingsOrderByRelevanceFieldEnum: {
    readonly key: "key";
    readonly value: "value";
    readonly type: "type";
    readonly group: "group";
    readonly description: "description";
};
export type system_settingsOrderByRelevanceFieldEnum = (typeof system_settingsOrderByRelevanceFieldEnum)[keyof typeof system_settingsOrderByRelevanceFieldEnum];
export declare const two_factor_authOrderByRelevanceFieldEnum: {
    readonly secret: "secret";
};
export type two_factor_authOrderByRelevanceFieldEnum = (typeof two_factor_authOrderByRelevanceFieldEnum)[keyof typeof two_factor_authOrderByRelevanceFieldEnum];
export declare const user_profilesOrderByRelevanceFieldEnum: {
    readonly bio: "bio";
    readonly address: "address";
    readonly city: "city";
    readonly country: "country";
};
export type user_profilesOrderByRelevanceFieldEnum = (typeof user_profilesOrderByRelevanceFieldEnum)[keyof typeof user_profilesOrderByRelevanceFieldEnum];
export declare const user_subscriptionsOrderByRelevanceFieldEnum: {
    readonly status: "status";
    readonly payment_method: "payment_method";
    readonly payment_reference: "payment_reference";
    readonly stripe_subscription_id: "stripe_subscription_id";
};
export type user_subscriptionsOrderByRelevanceFieldEnum = (typeof user_subscriptionsOrderByRelevanceFieldEnum)[keyof typeof user_subscriptionsOrderByRelevanceFieldEnum];
export declare const usersOrderByRelevanceFieldEnum: {
    readonly name: "name";
    readonly email: "email";
    readonly phone: "phone";
    readonly avatar: "avatar";
    readonly password: "password";
    readonly remember_token: "remember_token";
};
export type usersOrderByRelevanceFieldEnum = (typeof usersOrderByRelevanceFieldEnum)[keyof typeof usersOrderByRelevanceFieldEnum];
export declare const verification_codesOrderByRelevanceFieldEnum: {
    readonly code: "code";
    readonly contact: "contact";
};
export type verification_codesOrderByRelevanceFieldEnum = (typeof verification_codesOrderByRelevanceFieldEnum)[keyof typeof verification_codesOrderByRelevanceFieldEnum];
export type BigIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'BigInt'>;
export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>;
export type JsonFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Json'>;
export type EnumQueryModeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'QueryMode'>;
export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>;
export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>;
export type Enumarticles_twitter_cardFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'articles_twitter_card'>;
export type Enumarticles_schema_typeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'articles_schema_type'>;
export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>;
export type Enumcoupons_typeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'coupons_type'>;
export type DecimalFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Decimal'>;
export type Enumebooks_twitter_cardFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'ebooks_twitter_card'>;
export type Enumebooks_schema_typeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'ebooks_schema_type'>;
export type Enumebooks_access_typeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'ebooks_access_type'>;
export type Enumemail_campaigns_typeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'email_campaigns_type'>;
export type Enumemail_campaigns_target_audienceFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'email_campaigns_target_audience'>;
export type Enumemail_campaigns_schedule_typeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'email_campaigns_schedule_type'>;
export type Enumemail_campaigns_statusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'email_campaigns_status'>;
export type Enumemail_templates_categoryFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'email_templates_category'>;
export type Enumenrollments_statusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'enrollments_status'>;
export type Enumenrollments_payment_statusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'enrollments_payment_status'>;
export type Enumlesson_videos_video_typeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'lesson_videos_video_type'>;
export type Enumlesson_videos_statusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'lesson_videos_status'>;
export type Enummarketing_analytics_campaign_typeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'marketing_analytics_campaign_type'>;
export type Enummarketing_analytics_event_typeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'marketing_analytics_event_type'>;
export type Enummedia_optimization_statusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'media_optimization_status'>;
export type Enumpopups_trigger_typeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'popups_trigger_type'>;
export type Enumpopups_display_typeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'popups_display_type'>;
export type Enumpopups_positionFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'popups_position'>;
export type Enumpopups_target_user_typeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'popups_target_user_type'>;
export type Enumpopups_frequencyFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'popups_frequency'>;
export type Enumproducts_categoryFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'products_category'>;
export type Enumproducts_access_typeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'products_access_type'>;
export type Enumproducts_statusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'products_status'>;
export type Enumpromotions_typeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'promotions_type'>;
export type Enumpromotions_discount_typeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'promotions_discount_type'>;
export type Enumpromotions_applicable_toFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'promotions_applicable_to'>;
export type Enumsms_campaigns_typeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'sms_campaigns_type'>;
export type Enumsms_campaigns_target_audienceFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'sms_campaigns_target_audience'>;
export type Enumsms_campaigns_schedule_typeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'sms_campaigns_schedule_type'>;
export type Enumsms_campaigns_statusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'sms_campaigns_status'>;
export type Enumusers_roleFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'users_role'>;
export type Enumverification_codes_typeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'verification_codes_type'>;
export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>;
export type BatchPayload = {
    count: number;
};
export declare const defineExtension: runtime.Types.Extensions.ExtendsHook<"define", TypeMapCb, runtime.Types.Extensions.DefaultArgs>;
export type DefaultPrismaClient = PrismaClient;
export type ErrorFormat = 'pretty' | 'colorless' | 'minimal';
export type PrismaClientOptions = ({
    adapter: runtime.SqlDriverAdapterFactory;
    accelerateUrl?: never;
} | {
    accelerateUrl: string;
    adapter?: never;
}) & {
    errorFormat?: ErrorFormat;
    log?: (LogLevel | LogDefinition)[];
    transactionOptions?: {
        maxWait?: number;
        timeout?: number;
        isolationLevel?: TransactionIsolationLevel;
    };
    omit?: GlobalOmitConfig;
    comments?: runtime.SqlCommenterPlugin[];
};
export type GlobalOmitConfig = {
    activity_logs?: Prisma.activity_logsOmit;
    api_settings?: Prisma.api_settingsOmit;
    article_views?: Prisma.article_viewsOmit;
    articles?: Prisma.articlesOmit;
    bookings?: Prisma.bookingsOmit;
    cache?: Prisma.cacheOmit;
    cache_locks?: Prisma.cache_locksOmit;
    categories?: Prisma.categoriesOmit;
    certificates?: Prisma.certificatesOmit;
    coupons?: Prisma.couponsOmit;
    course_schedules?: Prisma.course_schedulesOmit;
    courses?: Prisma.coursesOmit;
    ebooks?: Prisma.ebooksOmit;
    email_campaigns?: Prisma.email_campaignsOmit;
    email_templates?: Prisma.email_templatesOmit;
    enrollments?: Prisma.enrollmentsOmit;
    expert_advisors?: Prisma.expert_advisorsOmit;
    failed_jobs?: Prisma.failed_jobsOmit;
    indicators?: Prisma.indicatorsOmit;
    job_batches?: Prisma.job_batchesOmit;
    jobs?: Prisma.jobsOmit;
    lesson_completions?: Prisma.lesson_completionsOmit;
    lesson_videos?: Prisma.lesson_videosOmit;
    marketing_analytics?: Prisma.marketing_analyticsOmit;
    media?: Prisma.mediaOmit;
    migrations?: Prisma.migrationsOmit;
    model_has_permissions?: Prisma.model_has_permissionsOmit;
    model_has_roles?: Prisma.model_has_rolesOmit;
    pages?: Prisma.pagesOmit;
    password_reset_tokens?: Prisma.password_reset_tokensOmit;
    payment_settings?: Prisma.payment_settingsOmit;
    permissions?: Prisma.permissionsOmit;
    personal_access_tokens?: Prisma.personal_access_tokensOmit;
    popups?: Prisma.popupsOmit;
    product_screenshots?: Prisma.product_screenshotsOmit;
    products?: Prisma.productsOmit;
    promotion_user?: Prisma.promotion_userOmit;
    promotions?: Prisma.promotionsOmit;
    quiz_attempts?: Prisma.quiz_attemptsOmit;
    reviews?: Prisma.reviewsOmit;
    role_has_permissions?: Prisma.role_has_permissionsOmit;
    roles?: Prisma.rolesOmit;
    sessions?: Prisma.sessionsOmit;
    site_settings?: Prisma.site_settingsOmit;
    sms_campaigns?: Prisma.sms_campaignsOmit;
    social_accounts?: Prisma.social_accountsOmit;
    subscription_plans?: Prisma.subscription_plansOmit;
    system_settings?: Prisma.system_settingsOmit;
    two_factor_auth?: Prisma.two_factor_authOmit;
    user_profiles?: Prisma.user_profilesOmit;
    user_subscriptions?: Prisma.user_subscriptionsOmit;
    users?: Prisma.usersOmit;
    verification_codes?: Prisma.verification_codesOmit;
};
export type LogLevel = 'info' | 'query' | 'warn' | 'error';
export type LogDefinition = {
    level: LogLevel;
    emit: 'stdout' | 'event';
};
export type CheckIsLogLevel<T> = T extends LogLevel ? T : never;
export type GetLogType<T> = CheckIsLogLevel<T extends LogDefinition ? T['level'] : T>;
export type GetEvents<T extends any[]> = T extends Array<LogLevel | LogDefinition> ? GetLogType<T[number]> : never;
export type QueryEvent = {
    timestamp: Date;
    query: string;
    params: string;
    duration: number;
    target: string;
};
export type LogEvent = {
    timestamp: Date;
    message: string;
    target: string;
};
export type PrismaAction = 'findUnique' | 'findUniqueOrThrow' | 'findMany' | 'findFirst' | 'findFirstOrThrow' | 'create' | 'createMany' | 'createManyAndReturn' | 'update' | 'updateMany' | 'updateManyAndReturn' | 'upsert' | 'delete' | 'deleteMany' | 'executeRaw' | 'queryRaw' | 'aggregate' | 'count' | 'runCommandRaw' | 'findRaw' | 'groupBy';
export type TransactionClient = Omit<DefaultPrismaClient, runtime.ITXClientDenyList>;
