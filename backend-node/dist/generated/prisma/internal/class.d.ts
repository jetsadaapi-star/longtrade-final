import * as runtime from "@prisma/client/runtime/client";
import type * as Prisma from "./prismaNamespace.js";
export type LogOptions<ClientOptions extends Prisma.PrismaClientOptions> = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never;
export interface PrismaClientConstructor {
    new <Options extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions, LogOpts extends LogOptions<Options> = LogOptions<Options>, OmitOpts extends Prisma.PrismaClientOptions['omit'] = Options extends {
        omit: infer U;
    } ? U : Prisma.PrismaClientOptions['omit'], ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs>(options: Prisma.Subset<Options, Prisma.PrismaClientOptions>): PrismaClient<LogOpts, OmitOpts, ExtArgs>;
}
export interface PrismaClient<in LogOpts extends Prisma.LogLevel = never, in out OmitOpts extends Prisma.PrismaClientOptions['omit'] = undefined, in out ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['other'];
    };
    $on<V extends LogOpts>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): PrismaClient;
    $connect(): runtime.Types.Utils.JsPromise<void>;
    $disconnect(): runtime.Types.Utils.JsPromise<void>;
    $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;
    $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;
    $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;
    $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;
    $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: {
        isolationLevel?: Prisma.TransactionIsolationLevel;
    }): runtime.Types.Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>;
    $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => runtime.Types.Utils.JsPromise<R>, options?: {
        maxWait?: number;
        timeout?: number;
        isolationLevel?: Prisma.TransactionIsolationLevel;
    }): runtime.Types.Utils.JsPromise<R>;
    $extends: runtime.Types.Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<OmitOpts>, ExtArgs, runtime.Types.Utils.Call<Prisma.TypeMapCb<OmitOpts>, {
        extArgs: ExtArgs;
    }>>;
    get activity_logs(): Prisma.activity_logsDelegate<ExtArgs, {
        omit: OmitOpts;
    }>;
    get api_settings(): Prisma.api_settingsDelegate<ExtArgs, {
        omit: OmitOpts;
    }>;
    get article_views(): Prisma.article_viewsDelegate<ExtArgs, {
        omit: OmitOpts;
    }>;
    get articles(): Prisma.articlesDelegate<ExtArgs, {
        omit: OmitOpts;
    }>;
    get bookings(): Prisma.bookingsDelegate<ExtArgs, {
        omit: OmitOpts;
    }>;
    get cache(): Prisma.cacheDelegate<ExtArgs, {
        omit: OmitOpts;
    }>;
    get cache_locks(): Prisma.cache_locksDelegate<ExtArgs, {
        omit: OmitOpts;
    }>;
    get categories(): Prisma.categoriesDelegate<ExtArgs, {
        omit: OmitOpts;
    }>;
    get certificates(): Prisma.certificatesDelegate<ExtArgs, {
        omit: OmitOpts;
    }>;
    get coupons(): Prisma.couponsDelegate<ExtArgs, {
        omit: OmitOpts;
    }>;
    get course_schedules(): Prisma.course_schedulesDelegate<ExtArgs, {
        omit: OmitOpts;
    }>;
    get courses(): Prisma.coursesDelegate<ExtArgs, {
        omit: OmitOpts;
    }>;
    get ebooks(): Prisma.ebooksDelegate<ExtArgs, {
        omit: OmitOpts;
    }>;
    get email_campaigns(): Prisma.email_campaignsDelegate<ExtArgs, {
        omit: OmitOpts;
    }>;
    get email_templates(): Prisma.email_templatesDelegate<ExtArgs, {
        omit: OmitOpts;
    }>;
    get enrollments(): Prisma.enrollmentsDelegate<ExtArgs, {
        omit: OmitOpts;
    }>;
    get expert_advisors(): Prisma.expert_advisorsDelegate<ExtArgs, {
        omit: OmitOpts;
    }>;
    get failed_jobs(): Prisma.failed_jobsDelegate<ExtArgs, {
        omit: OmitOpts;
    }>;
    get indicators(): Prisma.indicatorsDelegate<ExtArgs, {
        omit: OmitOpts;
    }>;
    get job_batches(): Prisma.job_batchesDelegate<ExtArgs, {
        omit: OmitOpts;
    }>;
    get jobs(): Prisma.jobsDelegate<ExtArgs, {
        omit: OmitOpts;
    }>;
    get lesson_completions(): Prisma.lesson_completionsDelegate<ExtArgs, {
        omit: OmitOpts;
    }>;
    get lesson_videos(): Prisma.lesson_videosDelegate<ExtArgs, {
        omit: OmitOpts;
    }>;
    get marketing_analytics(): Prisma.marketing_analyticsDelegate<ExtArgs, {
        omit: OmitOpts;
    }>;
    get media(): Prisma.mediaDelegate<ExtArgs, {
        omit: OmitOpts;
    }>;
    get migrations(): Prisma.migrationsDelegate<ExtArgs, {
        omit: OmitOpts;
    }>;
    get model_has_permissions(): Prisma.model_has_permissionsDelegate<ExtArgs, {
        omit: OmitOpts;
    }>;
    get model_has_roles(): Prisma.model_has_rolesDelegate<ExtArgs, {
        omit: OmitOpts;
    }>;
    get pages(): Prisma.pagesDelegate<ExtArgs, {
        omit: OmitOpts;
    }>;
    get password_reset_tokens(): Prisma.password_reset_tokensDelegate<ExtArgs, {
        omit: OmitOpts;
    }>;
    get payment_settings(): Prisma.payment_settingsDelegate<ExtArgs, {
        omit: OmitOpts;
    }>;
    get permissions(): Prisma.permissionsDelegate<ExtArgs, {
        omit: OmitOpts;
    }>;
    get personal_access_tokens(): Prisma.personal_access_tokensDelegate<ExtArgs, {
        omit: OmitOpts;
    }>;
    get popups(): Prisma.popupsDelegate<ExtArgs, {
        omit: OmitOpts;
    }>;
    get product_screenshots(): Prisma.product_screenshotsDelegate<ExtArgs, {
        omit: OmitOpts;
    }>;
    get products(): Prisma.productsDelegate<ExtArgs, {
        omit: OmitOpts;
    }>;
    get promotion_user(): Prisma.promotion_userDelegate<ExtArgs, {
        omit: OmitOpts;
    }>;
    get promotions(): Prisma.promotionsDelegate<ExtArgs, {
        omit: OmitOpts;
    }>;
    get quiz_attempts(): Prisma.quiz_attemptsDelegate<ExtArgs, {
        omit: OmitOpts;
    }>;
    get reviews(): Prisma.reviewsDelegate<ExtArgs, {
        omit: OmitOpts;
    }>;
    get role_has_permissions(): Prisma.role_has_permissionsDelegate<ExtArgs, {
        omit: OmitOpts;
    }>;
    get roles(): Prisma.rolesDelegate<ExtArgs, {
        omit: OmitOpts;
    }>;
    get sessions(): Prisma.sessionsDelegate<ExtArgs, {
        omit: OmitOpts;
    }>;
    get site_settings(): Prisma.site_settingsDelegate<ExtArgs, {
        omit: OmitOpts;
    }>;
    get sms_campaigns(): Prisma.sms_campaignsDelegate<ExtArgs, {
        omit: OmitOpts;
    }>;
    get social_accounts(): Prisma.social_accountsDelegate<ExtArgs, {
        omit: OmitOpts;
    }>;
    get subscription_plans(): Prisma.subscription_plansDelegate<ExtArgs, {
        omit: OmitOpts;
    }>;
    get system_settings(): Prisma.system_settingsDelegate<ExtArgs, {
        omit: OmitOpts;
    }>;
    get two_factor_auth(): Prisma.two_factor_authDelegate<ExtArgs, {
        omit: OmitOpts;
    }>;
    get user_profiles(): Prisma.user_profilesDelegate<ExtArgs, {
        omit: OmitOpts;
    }>;
    get user_subscriptions(): Prisma.user_subscriptionsDelegate<ExtArgs, {
        omit: OmitOpts;
    }>;
    get users(): Prisma.usersDelegate<ExtArgs, {
        omit: OmitOpts;
    }>;
    get verification_codes(): Prisma.verification_codesDelegate<ExtArgs, {
        omit: OmitOpts;
    }>;
}
export declare function getPrismaClientClass(): PrismaClientConstructor;
