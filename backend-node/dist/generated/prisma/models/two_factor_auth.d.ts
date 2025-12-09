import type * as runtime from "@prisma/client/runtime/client";
import type * as Prisma from "../internal/prismaNamespace.js";
export type two_factor_authModel = runtime.Types.Result.DefaultSelection<Prisma.$two_factor_authPayload>;
export type AggregateTwo_factor_auth = {
    _count: Two_factor_authCountAggregateOutputType | null;
    _avg: Two_factor_authAvgAggregateOutputType | null;
    _sum: Two_factor_authSumAggregateOutputType | null;
    _min: Two_factor_authMinAggregateOutputType | null;
    _max: Two_factor_authMaxAggregateOutputType | null;
};
export type Two_factor_authAvgAggregateOutputType = {
    id: number | null;
    user_id: number | null;
};
export type Two_factor_authSumAggregateOutputType = {
    id: bigint | null;
    user_id: bigint | null;
};
export type Two_factor_authMinAggregateOutputType = {
    id: bigint | null;
    user_id: bigint | null;
    enabled: boolean | null;
    secret: string | null;
    enabled_at: Date | null;
    last_used_at: Date | null;
    created_at: Date | null;
    updated_at: Date | null;
};
export type Two_factor_authMaxAggregateOutputType = {
    id: bigint | null;
    user_id: bigint | null;
    enabled: boolean | null;
    secret: string | null;
    enabled_at: Date | null;
    last_used_at: Date | null;
    created_at: Date | null;
    updated_at: Date | null;
};
export type Two_factor_authCountAggregateOutputType = {
    id: number;
    user_id: number;
    enabled: number;
    secret: number;
    recovery_codes: number;
    enabled_at: number;
    last_used_at: number;
    created_at: number;
    updated_at: number;
    _all: number;
};
export type Two_factor_authAvgAggregateInputType = {
    id?: true;
    user_id?: true;
};
export type Two_factor_authSumAggregateInputType = {
    id?: true;
    user_id?: true;
};
export type Two_factor_authMinAggregateInputType = {
    id?: true;
    user_id?: true;
    enabled?: true;
    secret?: true;
    enabled_at?: true;
    last_used_at?: true;
    created_at?: true;
    updated_at?: true;
};
export type Two_factor_authMaxAggregateInputType = {
    id?: true;
    user_id?: true;
    enabled?: true;
    secret?: true;
    enabled_at?: true;
    last_used_at?: true;
    created_at?: true;
    updated_at?: true;
};
export type Two_factor_authCountAggregateInputType = {
    id?: true;
    user_id?: true;
    enabled?: true;
    secret?: true;
    recovery_codes?: true;
    enabled_at?: true;
    last_used_at?: true;
    created_at?: true;
    updated_at?: true;
    _all?: true;
};
export type Two_factor_authAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.two_factor_authWhereInput;
    orderBy?: Prisma.two_factor_authOrderByWithRelationInput | Prisma.two_factor_authOrderByWithRelationInput[];
    cursor?: Prisma.two_factor_authWhereUniqueInput;
    take?: number;
    skip?: number;
    _count?: true | Two_factor_authCountAggregateInputType;
    _avg?: Two_factor_authAvgAggregateInputType;
    _sum?: Two_factor_authSumAggregateInputType;
    _min?: Two_factor_authMinAggregateInputType;
    _max?: Two_factor_authMaxAggregateInputType;
};
export type GetTwo_factor_authAggregateType<T extends Two_factor_authAggregateArgs> = {
    [P in keyof T & keyof AggregateTwo_factor_auth]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateTwo_factor_auth[P]> : Prisma.GetScalarType<T[P], AggregateTwo_factor_auth[P]>;
};
export type two_factor_authGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.two_factor_authWhereInput;
    orderBy?: Prisma.two_factor_authOrderByWithAggregationInput | Prisma.two_factor_authOrderByWithAggregationInput[];
    by: Prisma.Two_factor_authScalarFieldEnum[] | Prisma.Two_factor_authScalarFieldEnum;
    having?: Prisma.two_factor_authScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: Two_factor_authCountAggregateInputType | true;
    _avg?: Two_factor_authAvgAggregateInputType;
    _sum?: Two_factor_authSumAggregateInputType;
    _min?: Two_factor_authMinAggregateInputType;
    _max?: Two_factor_authMaxAggregateInputType;
};
export type Two_factor_authGroupByOutputType = {
    id: bigint;
    user_id: bigint;
    enabled: boolean;
    secret: string | null;
    recovery_codes: runtime.JsonValue | null;
    enabled_at: Date | null;
    last_used_at: Date | null;
    created_at: Date | null;
    updated_at: Date | null;
    _count: Two_factor_authCountAggregateOutputType | null;
    _avg: Two_factor_authAvgAggregateOutputType | null;
    _sum: Two_factor_authSumAggregateOutputType | null;
    _min: Two_factor_authMinAggregateOutputType | null;
    _max: Two_factor_authMaxAggregateOutputType | null;
};
type GetTwo_factor_authGroupByPayload<T extends two_factor_authGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<Two_factor_authGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof Two_factor_authGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], Two_factor_authGroupByOutputType[P]> : Prisma.GetScalarType<T[P], Two_factor_authGroupByOutputType[P]>;
}>>;
export type two_factor_authWhereInput = {
    AND?: Prisma.two_factor_authWhereInput | Prisma.two_factor_authWhereInput[];
    OR?: Prisma.two_factor_authWhereInput[];
    NOT?: Prisma.two_factor_authWhereInput | Prisma.two_factor_authWhereInput[];
    id?: Prisma.BigIntFilter<"two_factor_auth"> | bigint | number;
    user_id?: Prisma.BigIntFilter<"two_factor_auth"> | bigint | number;
    enabled?: Prisma.BoolFilter<"two_factor_auth"> | boolean;
    secret?: Prisma.StringNullableFilter<"two_factor_auth"> | string | null;
    recovery_codes?: Prisma.JsonNullableFilter<"two_factor_auth">;
    enabled_at?: Prisma.DateTimeNullableFilter<"two_factor_auth"> | Date | string | null;
    last_used_at?: Prisma.DateTimeNullableFilter<"two_factor_auth"> | Date | string | null;
    created_at?: Prisma.DateTimeNullableFilter<"two_factor_auth"> | Date | string | null;
    updated_at?: Prisma.DateTimeNullableFilter<"two_factor_auth"> | Date | string | null;
    users?: Prisma.XOR<Prisma.UsersScalarRelationFilter, Prisma.usersWhereInput>;
};
export type two_factor_authOrderByWithRelationInput = {
    id?: Prisma.SortOrder;
    user_id?: Prisma.SortOrder;
    enabled?: Prisma.SortOrder;
    secret?: Prisma.SortOrderInput | Prisma.SortOrder;
    recovery_codes?: Prisma.SortOrderInput | Prisma.SortOrder;
    enabled_at?: Prisma.SortOrderInput | Prisma.SortOrder;
    last_used_at?: Prisma.SortOrderInput | Prisma.SortOrder;
    created_at?: Prisma.SortOrderInput | Prisma.SortOrder;
    updated_at?: Prisma.SortOrderInput | Prisma.SortOrder;
    users?: Prisma.usersOrderByWithRelationInput;
    _relevance?: Prisma.two_factor_authOrderByRelevanceInput;
};
export type two_factor_authWhereUniqueInput = Prisma.AtLeast<{
    id?: bigint | number;
    user_id?: bigint | number;
    AND?: Prisma.two_factor_authWhereInput | Prisma.two_factor_authWhereInput[];
    OR?: Prisma.two_factor_authWhereInput[];
    NOT?: Prisma.two_factor_authWhereInput | Prisma.two_factor_authWhereInput[];
    enabled?: Prisma.BoolFilter<"two_factor_auth"> | boolean;
    secret?: Prisma.StringNullableFilter<"two_factor_auth"> | string | null;
    recovery_codes?: Prisma.JsonNullableFilter<"two_factor_auth">;
    enabled_at?: Prisma.DateTimeNullableFilter<"two_factor_auth"> | Date | string | null;
    last_used_at?: Prisma.DateTimeNullableFilter<"two_factor_auth"> | Date | string | null;
    created_at?: Prisma.DateTimeNullableFilter<"two_factor_auth"> | Date | string | null;
    updated_at?: Prisma.DateTimeNullableFilter<"two_factor_auth"> | Date | string | null;
    users?: Prisma.XOR<Prisma.UsersScalarRelationFilter, Prisma.usersWhereInput>;
}, "id" | "user_id">;
export type two_factor_authOrderByWithAggregationInput = {
    id?: Prisma.SortOrder;
    user_id?: Prisma.SortOrder;
    enabled?: Prisma.SortOrder;
    secret?: Prisma.SortOrderInput | Prisma.SortOrder;
    recovery_codes?: Prisma.SortOrderInput | Prisma.SortOrder;
    enabled_at?: Prisma.SortOrderInput | Prisma.SortOrder;
    last_used_at?: Prisma.SortOrderInput | Prisma.SortOrder;
    created_at?: Prisma.SortOrderInput | Prisma.SortOrder;
    updated_at?: Prisma.SortOrderInput | Prisma.SortOrder;
    _count?: Prisma.two_factor_authCountOrderByAggregateInput;
    _avg?: Prisma.two_factor_authAvgOrderByAggregateInput;
    _max?: Prisma.two_factor_authMaxOrderByAggregateInput;
    _min?: Prisma.two_factor_authMinOrderByAggregateInput;
    _sum?: Prisma.two_factor_authSumOrderByAggregateInput;
};
export type two_factor_authScalarWhereWithAggregatesInput = {
    AND?: Prisma.two_factor_authScalarWhereWithAggregatesInput | Prisma.two_factor_authScalarWhereWithAggregatesInput[];
    OR?: Prisma.two_factor_authScalarWhereWithAggregatesInput[];
    NOT?: Prisma.two_factor_authScalarWhereWithAggregatesInput | Prisma.two_factor_authScalarWhereWithAggregatesInput[];
    id?: Prisma.BigIntWithAggregatesFilter<"two_factor_auth"> | bigint | number;
    user_id?: Prisma.BigIntWithAggregatesFilter<"two_factor_auth"> | bigint | number;
    enabled?: Prisma.BoolWithAggregatesFilter<"two_factor_auth"> | boolean;
    secret?: Prisma.StringNullableWithAggregatesFilter<"two_factor_auth"> | string | null;
    recovery_codes?: Prisma.JsonNullableWithAggregatesFilter<"two_factor_auth">;
    enabled_at?: Prisma.DateTimeNullableWithAggregatesFilter<"two_factor_auth"> | Date | string | null;
    last_used_at?: Prisma.DateTimeNullableWithAggregatesFilter<"two_factor_auth"> | Date | string | null;
    created_at?: Prisma.DateTimeNullableWithAggregatesFilter<"two_factor_auth"> | Date | string | null;
    updated_at?: Prisma.DateTimeNullableWithAggregatesFilter<"two_factor_auth"> | Date | string | null;
};
export type two_factor_authCreateInput = {
    id?: bigint | number;
    enabled?: boolean;
    secret?: string | null;
    recovery_codes?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    enabled_at?: Date | string | null;
    last_used_at?: Date | string | null;
    created_at?: Date | string | null;
    updated_at?: Date | string | null;
    users: Prisma.usersCreateNestedOneWithoutTwo_factor_authInput;
};
export type two_factor_authUncheckedCreateInput = {
    id?: bigint | number;
    user_id: bigint | number;
    enabled?: boolean;
    secret?: string | null;
    recovery_codes?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    enabled_at?: Date | string | null;
    last_used_at?: Date | string | null;
    created_at?: Date | string | null;
    updated_at?: Date | string | null;
};
export type two_factor_authUpdateInput = {
    id?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    enabled?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    secret?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    recovery_codes?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    enabled_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    last_used_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    created_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    updated_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    users?: Prisma.usersUpdateOneRequiredWithoutTwo_factor_authNestedInput;
};
export type two_factor_authUncheckedUpdateInput = {
    id?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    user_id?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    enabled?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    secret?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    recovery_codes?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    enabled_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    last_used_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    created_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    updated_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
};
export type two_factor_authCreateManyInput = {
    id?: bigint | number;
    user_id: bigint | number;
    enabled?: boolean;
    secret?: string | null;
    recovery_codes?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    enabled_at?: Date | string | null;
    last_used_at?: Date | string | null;
    created_at?: Date | string | null;
    updated_at?: Date | string | null;
};
export type two_factor_authUpdateManyMutationInput = {
    id?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    enabled?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    secret?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    recovery_codes?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    enabled_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    last_used_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    created_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    updated_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
};
export type two_factor_authUncheckedUpdateManyInput = {
    id?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    user_id?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    enabled?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    secret?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    recovery_codes?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    enabled_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    last_used_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    created_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    updated_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
};
export type two_factor_authOrderByRelevanceInput = {
    fields: Prisma.two_factor_authOrderByRelevanceFieldEnum | Prisma.two_factor_authOrderByRelevanceFieldEnum[];
    sort: Prisma.SortOrder;
    search: string;
};
export type two_factor_authCountOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    user_id?: Prisma.SortOrder;
    enabled?: Prisma.SortOrder;
    secret?: Prisma.SortOrder;
    recovery_codes?: Prisma.SortOrder;
    enabled_at?: Prisma.SortOrder;
    last_used_at?: Prisma.SortOrder;
    created_at?: Prisma.SortOrder;
    updated_at?: Prisma.SortOrder;
};
export type two_factor_authAvgOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    user_id?: Prisma.SortOrder;
};
export type two_factor_authMaxOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    user_id?: Prisma.SortOrder;
    enabled?: Prisma.SortOrder;
    secret?: Prisma.SortOrder;
    enabled_at?: Prisma.SortOrder;
    last_used_at?: Prisma.SortOrder;
    created_at?: Prisma.SortOrder;
    updated_at?: Prisma.SortOrder;
};
export type two_factor_authMinOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    user_id?: Prisma.SortOrder;
    enabled?: Prisma.SortOrder;
    secret?: Prisma.SortOrder;
    enabled_at?: Prisma.SortOrder;
    last_used_at?: Prisma.SortOrder;
    created_at?: Prisma.SortOrder;
    updated_at?: Prisma.SortOrder;
};
export type two_factor_authSumOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    user_id?: Prisma.SortOrder;
};
export type Two_factor_authNullableScalarRelationFilter = {
    is?: Prisma.two_factor_authWhereInput | null;
    isNot?: Prisma.two_factor_authWhereInput | null;
};
export type two_factor_authCreateNestedOneWithoutUsersInput = {
    create?: Prisma.XOR<Prisma.two_factor_authCreateWithoutUsersInput, Prisma.two_factor_authUncheckedCreateWithoutUsersInput>;
    connectOrCreate?: Prisma.two_factor_authCreateOrConnectWithoutUsersInput;
    connect?: Prisma.two_factor_authWhereUniqueInput;
};
export type two_factor_authUncheckedCreateNestedOneWithoutUsersInput = {
    create?: Prisma.XOR<Prisma.two_factor_authCreateWithoutUsersInput, Prisma.two_factor_authUncheckedCreateWithoutUsersInput>;
    connectOrCreate?: Prisma.two_factor_authCreateOrConnectWithoutUsersInput;
    connect?: Prisma.two_factor_authWhereUniqueInput;
};
export type two_factor_authUpdateOneWithoutUsersNestedInput = {
    create?: Prisma.XOR<Prisma.two_factor_authCreateWithoutUsersInput, Prisma.two_factor_authUncheckedCreateWithoutUsersInput>;
    connectOrCreate?: Prisma.two_factor_authCreateOrConnectWithoutUsersInput;
    upsert?: Prisma.two_factor_authUpsertWithoutUsersInput;
    disconnect?: Prisma.two_factor_authWhereInput | boolean;
    delete?: Prisma.two_factor_authWhereInput | boolean;
    connect?: Prisma.two_factor_authWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.two_factor_authUpdateToOneWithWhereWithoutUsersInput, Prisma.two_factor_authUpdateWithoutUsersInput>, Prisma.two_factor_authUncheckedUpdateWithoutUsersInput>;
};
export type two_factor_authUncheckedUpdateOneWithoutUsersNestedInput = {
    create?: Prisma.XOR<Prisma.two_factor_authCreateWithoutUsersInput, Prisma.two_factor_authUncheckedCreateWithoutUsersInput>;
    connectOrCreate?: Prisma.two_factor_authCreateOrConnectWithoutUsersInput;
    upsert?: Prisma.two_factor_authUpsertWithoutUsersInput;
    disconnect?: Prisma.two_factor_authWhereInput | boolean;
    delete?: Prisma.two_factor_authWhereInput | boolean;
    connect?: Prisma.two_factor_authWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.two_factor_authUpdateToOneWithWhereWithoutUsersInput, Prisma.two_factor_authUpdateWithoutUsersInput>, Prisma.two_factor_authUncheckedUpdateWithoutUsersInput>;
};
export type two_factor_authCreateWithoutUsersInput = {
    id?: bigint | number;
    enabled?: boolean;
    secret?: string | null;
    recovery_codes?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    enabled_at?: Date | string | null;
    last_used_at?: Date | string | null;
    created_at?: Date | string | null;
    updated_at?: Date | string | null;
};
export type two_factor_authUncheckedCreateWithoutUsersInput = {
    id?: bigint | number;
    enabled?: boolean;
    secret?: string | null;
    recovery_codes?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    enabled_at?: Date | string | null;
    last_used_at?: Date | string | null;
    created_at?: Date | string | null;
    updated_at?: Date | string | null;
};
export type two_factor_authCreateOrConnectWithoutUsersInput = {
    where: Prisma.two_factor_authWhereUniqueInput;
    create: Prisma.XOR<Prisma.two_factor_authCreateWithoutUsersInput, Prisma.two_factor_authUncheckedCreateWithoutUsersInput>;
};
export type two_factor_authUpsertWithoutUsersInput = {
    update: Prisma.XOR<Prisma.two_factor_authUpdateWithoutUsersInput, Prisma.two_factor_authUncheckedUpdateWithoutUsersInput>;
    create: Prisma.XOR<Prisma.two_factor_authCreateWithoutUsersInput, Prisma.two_factor_authUncheckedCreateWithoutUsersInput>;
    where?: Prisma.two_factor_authWhereInput;
};
export type two_factor_authUpdateToOneWithWhereWithoutUsersInput = {
    where?: Prisma.two_factor_authWhereInput;
    data: Prisma.XOR<Prisma.two_factor_authUpdateWithoutUsersInput, Prisma.two_factor_authUncheckedUpdateWithoutUsersInput>;
};
export type two_factor_authUpdateWithoutUsersInput = {
    id?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    enabled?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    secret?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    recovery_codes?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    enabled_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    last_used_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    created_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    updated_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
};
export type two_factor_authUncheckedUpdateWithoutUsersInput = {
    id?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    enabled?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    secret?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    recovery_codes?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    enabled_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    last_used_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    created_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    updated_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
};
export type two_factor_authSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    user_id?: boolean;
    enabled?: boolean;
    secret?: boolean;
    recovery_codes?: boolean;
    enabled_at?: boolean;
    last_used_at?: boolean;
    created_at?: boolean;
    updated_at?: boolean;
    users?: boolean | Prisma.usersDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["two_factor_auth"]>;
export type two_factor_authSelectScalar = {
    id?: boolean;
    user_id?: boolean;
    enabled?: boolean;
    secret?: boolean;
    recovery_codes?: boolean;
    enabled_at?: boolean;
    last_used_at?: boolean;
    created_at?: boolean;
    updated_at?: boolean;
};
export type two_factor_authOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "user_id" | "enabled" | "secret" | "recovery_codes" | "enabled_at" | "last_used_at" | "created_at" | "updated_at", ExtArgs["result"]["two_factor_auth"]>;
export type two_factor_authInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    users?: boolean | Prisma.usersDefaultArgs<ExtArgs>;
};
export type $two_factor_authPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "two_factor_auth";
    objects: {
        users: Prisma.$usersPayload<ExtArgs>;
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id: bigint;
        user_id: bigint;
        enabled: boolean;
        secret: string | null;
        recovery_codes: runtime.JsonValue | null;
        enabled_at: Date | null;
        last_used_at: Date | null;
        created_at: Date | null;
        updated_at: Date | null;
    }, ExtArgs["result"]["two_factor_auth"]>;
    composites: {};
};
export type two_factor_authGetPayload<S extends boolean | null | undefined | two_factor_authDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$two_factor_authPayload, S>;
export type two_factor_authCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<two_factor_authFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: Two_factor_authCountAggregateInputType | true;
};
export interface two_factor_authDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['two_factor_auth'];
        meta: {
            name: 'two_factor_auth';
        };
    };
    findUnique<T extends two_factor_authFindUniqueArgs>(args: Prisma.SelectSubset<T, two_factor_authFindUniqueArgs<ExtArgs>>): Prisma.Prisma__two_factor_authClient<runtime.Types.Result.GetResult<Prisma.$two_factor_authPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findUniqueOrThrow<T extends two_factor_authFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, two_factor_authFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__two_factor_authClient<runtime.Types.Result.GetResult<Prisma.$two_factor_authPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findFirst<T extends two_factor_authFindFirstArgs>(args?: Prisma.SelectSubset<T, two_factor_authFindFirstArgs<ExtArgs>>): Prisma.Prisma__two_factor_authClient<runtime.Types.Result.GetResult<Prisma.$two_factor_authPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findFirstOrThrow<T extends two_factor_authFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, two_factor_authFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__two_factor_authClient<runtime.Types.Result.GetResult<Prisma.$two_factor_authPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findMany<T extends two_factor_authFindManyArgs>(args?: Prisma.SelectSubset<T, two_factor_authFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$two_factor_authPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    create<T extends two_factor_authCreateArgs>(args: Prisma.SelectSubset<T, two_factor_authCreateArgs<ExtArgs>>): Prisma.Prisma__two_factor_authClient<runtime.Types.Result.GetResult<Prisma.$two_factor_authPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    createMany<T extends two_factor_authCreateManyArgs>(args?: Prisma.SelectSubset<T, two_factor_authCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    delete<T extends two_factor_authDeleteArgs>(args: Prisma.SelectSubset<T, two_factor_authDeleteArgs<ExtArgs>>): Prisma.Prisma__two_factor_authClient<runtime.Types.Result.GetResult<Prisma.$two_factor_authPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    update<T extends two_factor_authUpdateArgs>(args: Prisma.SelectSubset<T, two_factor_authUpdateArgs<ExtArgs>>): Prisma.Prisma__two_factor_authClient<runtime.Types.Result.GetResult<Prisma.$two_factor_authPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    deleteMany<T extends two_factor_authDeleteManyArgs>(args?: Prisma.SelectSubset<T, two_factor_authDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateMany<T extends two_factor_authUpdateManyArgs>(args: Prisma.SelectSubset<T, two_factor_authUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    upsert<T extends two_factor_authUpsertArgs>(args: Prisma.SelectSubset<T, two_factor_authUpsertArgs<ExtArgs>>): Prisma.Prisma__two_factor_authClient<runtime.Types.Result.GetResult<Prisma.$two_factor_authPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    count<T extends two_factor_authCountArgs>(args?: Prisma.Subset<T, two_factor_authCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], Two_factor_authCountAggregateOutputType> : number>;
    aggregate<T extends Two_factor_authAggregateArgs>(args: Prisma.Subset<T, Two_factor_authAggregateArgs>): Prisma.PrismaPromise<GetTwo_factor_authAggregateType<T>>;
    groupBy<T extends two_factor_authGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: two_factor_authGroupByArgs['orderBy'];
    } : {
        orderBy?: two_factor_authGroupByArgs['orderBy'];
    }, OrderFields extends Prisma.ExcludeUnderscoreKeys<Prisma.Keys<Prisma.MaybeTupleToUnion<T['orderBy']>>>, ByFields extends Prisma.MaybeTupleToUnion<T['by']>, ByValid extends Prisma.Has<ByFields, OrderFields>, HavingFields extends Prisma.GetHavingFields<T['having']>, HavingValid extends Prisma.Has<ByFields, HavingFields>, ByEmpty extends T['by'] extends never[] ? Prisma.True : Prisma.False, InputErrors extends ByEmpty extends Prisma.True ? `Error: "by" must not be empty.` : HavingValid extends Prisma.False ? {
        [P in HavingFields]: P extends ByFields ? never : P extends string ? `Error: Field "${P}" used in "having" needs to be provided in "by".` : [
            Error,
            'Field ',
            P,
            ` in "having" needs to be provided in "by"`
        ];
    }[HavingFields] : 'take' extends Prisma.Keys<T> ? 'orderBy' extends Prisma.Keys<T> ? ByValid extends Prisma.True ? {} : {
        [P in OrderFields]: P extends ByFields ? never : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
    }[OrderFields] : 'Error: If you provide "take", you also need to provide "orderBy"' : 'skip' extends Prisma.Keys<T> ? 'orderBy' extends Prisma.Keys<T> ? ByValid extends Prisma.True ? {} : {
        [P in OrderFields]: P extends ByFields ? never : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
    }[OrderFields] : 'Error: If you provide "skip", you also need to provide "orderBy"' : ByValid extends Prisma.True ? {} : {
        [P in OrderFields]: P extends ByFields ? never : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, two_factor_authGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetTwo_factor_authGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    readonly fields: two_factor_authFieldRefs;
}
export interface Prisma__two_factor_authClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    users<T extends Prisma.usersDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.usersDefaultArgs<ExtArgs>>): Prisma.Prisma__usersClient<runtime.Types.Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): runtime.Types.Utils.JsPromise<TResult1 | TResult2>;
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): runtime.Types.Utils.JsPromise<T | TResult>;
    finally(onfinally?: (() => void) | undefined | null): runtime.Types.Utils.JsPromise<T>;
}
export interface two_factor_authFieldRefs {
    readonly id: Prisma.FieldRef<"two_factor_auth", 'BigInt'>;
    readonly user_id: Prisma.FieldRef<"two_factor_auth", 'BigInt'>;
    readonly enabled: Prisma.FieldRef<"two_factor_auth", 'Boolean'>;
    readonly secret: Prisma.FieldRef<"two_factor_auth", 'String'>;
    readonly recovery_codes: Prisma.FieldRef<"two_factor_auth", 'Json'>;
    readonly enabled_at: Prisma.FieldRef<"two_factor_auth", 'DateTime'>;
    readonly last_used_at: Prisma.FieldRef<"two_factor_auth", 'DateTime'>;
    readonly created_at: Prisma.FieldRef<"two_factor_auth", 'DateTime'>;
    readonly updated_at: Prisma.FieldRef<"two_factor_auth", 'DateTime'>;
}
export type two_factor_authFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.two_factor_authSelect<ExtArgs> | null;
    omit?: Prisma.two_factor_authOmit<ExtArgs> | null;
    include?: Prisma.two_factor_authInclude<ExtArgs> | null;
    where: Prisma.two_factor_authWhereUniqueInput;
};
export type two_factor_authFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.two_factor_authSelect<ExtArgs> | null;
    omit?: Prisma.two_factor_authOmit<ExtArgs> | null;
    include?: Prisma.two_factor_authInclude<ExtArgs> | null;
    where: Prisma.two_factor_authWhereUniqueInput;
};
export type two_factor_authFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.two_factor_authSelect<ExtArgs> | null;
    omit?: Prisma.two_factor_authOmit<ExtArgs> | null;
    include?: Prisma.two_factor_authInclude<ExtArgs> | null;
    where?: Prisma.two_factor_authWhereInput;
    orderBy?: Prisma.two_factor_authOrderByWithRelationInput | Prisma.two_factor_authOrderByWithRelationInput[];
    cursor?: Prisma.two_factor_authWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.Two_factor_authScalarFieldEnum | Prisma.Two_factor_authScalarFieldEnum[];
};
export type two_factor_authFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.two_factor_authSelect<ExtArgs> | null;
    omit?: Prisma.two_factor_authOmit<ExtArgs> | null;
    include?: Prisma.two_factor_authInclude<ExtArgs> | null;
    where?: Prisma.two_factor_authWhereInput;
    orderBy?: Prisma.two_factor_authOrderByWithRelationInput | Prisma.two_factor_authOrderByWithRelationInput[];
    cursor?: Prisma.two_factor_authWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.Two_factor_authScalarFieldEnum | Prisma.Two_factor_authScalarFieldEnum[];
};
export type two_factor_authFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.two_factor_authSelect<ExtArgs> | null;
    omit?: Prisma.two_factor_authOmit<ExtArgs> | null;
    include?: Prisma.two_factor_authInclude<ExtArgs> | null;
    where?: Prisma.two_factor_authWhereInput;
    orderBy?: Prisma.two_factor_authOrderByWithRelationInput | Prisma.two_factor_authOrderByWithRelationInput[];
    cursor?: Prisma.two_factor_authWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.Two_factor_authScalarFieldEnum | Prisma.Two_factor_authScalarFieldEnum[];
};
export type two_factor_authCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.two_factor_authSelect<ExtArgs> | null;
    omit?: Prisma.two_factor_authOmit<ExtArgs> | null;
    include?: Prisma.two_factor_authInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.two_factor_authCreateInput, Prisma.two_factor_authUncheckedCreateInput>;
};
export type two_factor_authCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.two_factor_authCreateManyInput | Prisma.two_factor_authCreateManyInput[];
    skipDuplicates?: boolean;
};
export type two_factor_authUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.two_factor_authSelect<ExtArgs> | null;
    omit?: Prisma.two_factor_authOmit<ExtArgs> | null;
    include?: Prisma.two_factor_authInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.two_factor_authUpdateInput, Prisma.two_factor_authUncheckedUpdateInput>;
    where: Prisma.two_factor_authWhereUniqueInput;
};
export type two_factor_authUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.XOR<Prisma.two_factor_authUpdateManyMutationInput, Prisma.two_factor_authUncheckedUpdateManyInput>;
    where?: Prisma.two_factor_authWhereInput;
    limit?: number;
};
export type two_factor_authUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.two_factor_authSelect<ExtArgs> | null;
    omit?: Prisma.two_factor_authOmit<ExtArgs> | null;
    include?: Prisma.two_factor_authInclude<ExtArgs> | null;
    where: Prisma.two_factor_authWhereUniqueInput;
    create: Prisma.XOR<Prisma.two_factor_authCreateInput, Prisma.two_factor_authUncheckedCreateInput>;
    update: Prisma.XOR<Prisma.two_factor_authUpdateInput, Prisma.two_factor_authUncheckedUpdateInput>;
};
export type two_factor_authDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.two_factor_authSelect<ExtArgs> | null;
    omit?: Prisma.two_factor_authOmit<ExtArgs> | null;
    include?: Prisma.two_factor_authInclude<ExtArgs> | null;
    where: Prisma.two_factor_authWhereUniqueInput;
};
export type two_factor_authDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.two_factor_authWhereInput;
    limit?: number;
};
export type two_factor_authDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.two_factor_authSelect<ExtArgs> | null;
    omit?: Prisma.two_factor_authOmit<ExtArgs> | null;
    include?: Prisma.two_factor_authInclude<ExtArgs> | null;
};
export {};
