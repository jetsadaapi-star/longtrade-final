import type * as runtime from "@prisma/client/runtime/client";
import type * as Prisma from "../internal/prismaNamespace.js";
export type social_accountsModel = runtime.Types.Result.DefaultSelection<Prisma.$social_accountsPayload>;
export type AggregateSocial_accounts = {
    _count: Social_accountsCountAggregateOutputType | null;
    _avg: Social_accountsAvgAggregateOutputType | null;
    _sum: Social_accountsSumAggregateOutputType | null;
    _min: Social_accountsMinAggregateOutputType | null;
    _max: Social_accountsMaxAggregateOutputType | null;
};
export type Social_accountsAvgAggregateOutputType = {
    id: number | null;
    user_id: number | null;
};
export type Social_accountsSumAggregateOutputType = {
    id: bigint | null;
    user_id: bigint | null;
};
export type Social_accountsMinAggregateOutputType = {
    id: bigint | null;
    user_id: bigint | null;
    provider: string | null;
    provider_id: string | null;
    provider_token: string | null;
    provider_refresh_token: string | null;
    token_expires_at: Date | null;
    avatar: string | null;
    created_at: Date | null;
    updated_at: Date | null;
};
export type Social_accountsMaxAggregateOutputType = {
    id: bigint | null;
    user_id: bigint | null;
    provider: string | null;
    provider_id: string | null;
    provider_token: string | null;
    provider_refresh_token: string | null;
    token_expires_at: Date | null;
    avatar: string | null;
    created_at: Date | null;
    updated_at: Date | null;
};
export type Social_accountsCountAggregateOutputType = {
    id: number;
    user_id: number;
    provider: number;
    provider_id: number;
    provider_token: number;
    provider_refresh_token: number;
    token_expires_at: number;
    avatar: number;
    provider_data: number;
    created_at: number;
    updated_at: number;
    _all: number;
};
export type Social_accountsAvgAggregateInputType = {
    id?: true;
    user_id?: true;
};
export type Social_accountsSumAggregateInputType = {
    id?: true;
    user_id?: true;
};
export type Social_accountsMinAggregateInputType = {
    id?: true;
    user_id?: true;
    provider?: true;
    provider_id?: true;
    provider_token?: true;
    provider_refresh_token?: true;
    token_expires_at?: true;
    avatar?: true;
    created_at?: true;
    updated_at?: true;
};
export type Social_accountsMaxAggregateInputType = {
    id?: true;
    user_id?: true;
    provider?: true;
    provider_id?: true;
    provider_token?: true;
    provider_refresh_token?: true;
    token_expires_at?: true;
    avatar?: true;
    created_at?: true;
    updated_at?: true;
};
export type Social_accountsCountAggregateInputType = {
    id?: true;
    user_id?: true;
    provider?: true;
    provider_id?: true;
    provider_token?: true;
    provider_refresh_token?: true;
    token_expires_at?: true;
    avatar?: true;
    provider_data?: true;
    created_at?: true;
    updated_at?: true;
    _all?: true;
};
export type Social_accountsAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.social_accountsWhereInput;
    orderBy?: Prisma.social_accountsOrderByWithRelationInput | Prisma.social_accountsOrderByWithRelationInput[];
    cursor?: Prisma.social_accountsWhereUniqueInput;
    take?: number;
    skip?: number;
    _count?: true | Social_accountsCountAggregateInputType;
    _avg?: Social_accountsAvgAggregateInputType;
    _sum?: Social_accountsSumAggregateInputType;
    _min?: Social_accountsMinAggregateInputType;
    _max?: Social_accountsMaxAggregateInputType;
};
export type GetSocial_accountsAggregateType<T extends Social_accountsAggregateArgs> = {
    [P in keyof T & keyof AggregateSocial_accounts]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateSocial_accounts[P]> : Prisma.GetScalarType<T[P], AggregateSocial_accounts[P]>;
};
export type social_accountsGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.social_accountsWhereInput;
    orderBy?: Prisma.social_accountsOrderByWithAggregationInput | Prisma.social_accountsOrderByWithAggregationInput[];
    by: Prisma.Social_accountsScalarFieldEnum[] | Prisma.Social_accountsScalarFieldEnum;
    having?: Prisma.social_accountsScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: Social_accountsCountAggregateInputType | true;
    _avg?: Social_accountsAvgAggregateInputType;
    _sum?: Social_accountsSumAggregateInputType;
    _min?: Social_accountsMinAggregateInputType;
    _max?: Social_accountsMaxAggregateInputType;
};
export type Social_accountsGroupByOutputType = {
    id: bigint;
    user_id: bigint;
    provider: string;
    provider_id: string;
    provider_token: string | null;
    provider_refresh_token: string | null;
    token_expires_at: Date | null;
    avatar: string | null;
    provider_data: runtime.JsonValue | null;
    created_at: Date | null;
    updated_at: Date | null;
    _count: Social_accountsCountAggregateOutputType | null;
    _avg: Social_accountsAvgAggregateOutputType | null;
    _sum: Social_accountsSumAggregateOutputType | null;
    _min: Social_accountsMinAggregateOutputType | null;
    _max: Social_accountsMaxAggregateOutputType | null;
};
type GetSocial_accountsGroupByPayload<T extends social_accountsGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<Social_accountsGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof Social_accountsGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], Social_accountsGroupByOutputType[P]> : Prisma.GetScalarType<T[P], Social_accountsGroupByOutputType[P]>;
}>>;
export type social_accountsWhereInput = {
    AND?: Prisma.social_accountsWhereInput | Prisma.social_accountsWhereInput[];
    OR?: Prisma.social_accountsWhereInput[];
    NOT?: Prisma.social_accountsWhereInput | Prisma.social_accountsWhereInput[];
    id?: Prisma.BigIntFilter<"social_accounts"> | bigint | number;
    user_id?: Prisma.BigIntFilter<"social_accounts"> | bigint | number;
    provider?: Prisma.StringFilter<"social_accounts"> | string;
    provider_id?: Prisma.StringFilter<"social_accounts"> | string;
    provider_token?: Prisma.StringNullableFilter<"social_accounts"> | string | null;
    provider_refresh_token?: Prisma.StringNullableFilter<"social_accounts"> | string | null;
    token_expires_at?: Prisma.DateTimeNullableFilter<"social_accounts"> | Date | string | null;
    avatar?: Prisma.StringNullableFilter<"social_accounts"> | string | null;
    provider_data?: Prisma.JsonNullableFilter<"social_accounts">;
    created_at?: Prisma.DateTimeNullableFilter<"social_accounts"> | Date | string | null;
    updated_at?: Prisma.DateTimeNullableFilter<"social_accounts"> | Date | string | null;
    users?: Prisma.XOR<Prisma.UsersScalarRelationFilter, Prisma.usersWhereInput>;
};
export type social_accountsOrderByWithRelationInput = {
    id?: Prisma.SortOrder;
    user_id?: Prisma.SortOrder;
    provider?: Prisma.SortOrder;
    provider_id?: Prisma.SortOrder;
    provider_token?: Prisma.SortOrderInput | Prisma.SortOrder;
    provider_refresh_token?: Prisma.SortOrderInput | Prisma.SortOrder;
    token_expires_at?: Prisma.SortOrderInput | Prisma.SortOrder;
    avatar?: Prisma.SortOrderInput | Prisma.SortOrder;
    provider_data?: Prisma.SortOrderInput | Prisma.SortOrder;
    created_at?: Prisma.SortOrderInput | Prisma.SortOrder;
    updated_at?: Prisma.SortOrderInput | Prisma.SortOrder;
    users?: Prisma.usersOrderByWithRelationInput;
    _relevance?: Prisma.social_accountsOrderByRelevanceInput;
};
export type social_accountsWhereUniqueInput = Prisma.AtLeast<{
    id?: bigint | number;
    user_id_provider?: Prisma.social_accountsUser_idProviderCompoundUniqueInput;
    AND?: Prisma.social_accountsWhereInput | Prisma.social_accountsWhereInput[];
    OR?: Prisma.social_accountsWhereInput[];
    NOT?: Prisma.social_accountsWhereInput | Prisma.social_accountsWhereInput[];
    user_id?: Prisma.BigIntFilter<"social_accounts"> | bigint | number;
    provider?: Prisma.StringFilter<"social_accounts"> | string;
    provider_id?: Prisma.StringFilter<"social_accounts"> | string;
    provider_token?: Prisma.StringNullableFilter<"social_accounts"> | string | null;
    provider_refresh_token?: Prisma.StringNullableFilter<"social_accounts"> | string | null;
    token_expires_at?: Prisma.DateTimeNullableFilter<"social_accounts"> | Date | string | null;
    avatar?: Prisma.StringNullableFilter<"social_accounts"> | string | null;
    provider_data?: Prisma.JsonNullableFilter<"social_accounts">;
    created_at?: Prisma.DateTimeNullableFilter<"social_accounts"> | Date | string | null;
    updated_at?: Prisma.DateTimeNullableFilter<"social_accounts"> | Date | string | null;
    users?: Prisma.XOR<Prisma.UsersScalarRelationFilter, Prisma.usersWhereInput>;
}, "id" | "user_id_provider">;
export type social_accountsOrderByWithAggregationInput = {
    id?: Prisma.SortOrder;
    user_id?: Prisma.SortOrder;
    provider?: Prisma.SortOrder;
    provider_id?: Prisma.SortOrder;
    provider_token?: Prisma.SortOrderInput | Prisma.SortOrder;
    provider_refresh_token?: Prisma.SortOrderInput | Prisma.SortOrder;
    token_expires_at?: Prisma.SortOrderInput | Prisma.SortOrder;
    avatar?: Prisma.SortOrderInput | Prisma.SortOrder;
    provider_data?: Prisma.SortOrderInput | Prisma.SortOrder;
    created_at?: Prisma.SortOrderInput | Prisma.SortOrder;
    updated_at?: Prisma.SortOrderInput | Prisma.SortOrder;
    _count?: Prisma.social_accountsCountOrderByAggregateInput;
    _avg?: Prisma.social_accountsAvgOrderByAggregateInput;
    _max?: Prisma.social_accountsMaxOrderByAggregateInput;
    _min?: Prisma.social_accountsMinOrderByAggregateInput;
    _sum?: Prisma.social_accountsSumOrderByAggregateInput;
};
export type social_accountsScalarWhereWithAggregatesInput = {
    AND?: Prisma.social_accountsScalarWhereWithAggregatesInput | Prisma.social_accountsScalarWhereWithAggregatesInput[];
    OR?: Prisma.social_accountsScalarWhereWithAggregatesInput[];
    NOT?: Prisma.social_accountsScalarWhereWithAggregatesInput | Prisma.social_accountsScalarWhereWithAggregatesInput[];
    id?: Prisma.BigIntWithAggregatesFilter<"social_accounts"> | bigint | number;
    user_id?: Prisma.BigIntWithAggregatesFilter<"social_accounts"> | bigint | number;
    provider?: Prisma.StringWithAggregatesFilter<"social_accounts"> | string;
    provider_id?: Prisma.StringWithAggregatesFilter<"social_accounts"> | string;
    provider_token?: Prisma.StringNullableWithAggregatesFilter<"social_accounts"> | string | null;
    provider_refresh_token?: Prisma.StringNullableWithAggregatesFilter<"social_accounts"> | string | null;
    token_expires_at?: Prisma.DateTimeNullableWithAggregatesFilter<"social_accounts"> | Date | string | null;
    avatar?: Prisma.StringNullableWithAggregatesFilter<"social_accounts"> | string | null;
    provider_data?: Prisma.JsonNullableWithAggregatesFilter<"social_accounts">;
    created_at?: Prisma.DateTimeNullableWithAggregatesFilter<"social_accounts"> | Date | string | null;
    updated_at?: Prisma.DateTimeNullableWithAggregatesFilter<"social_accounts"> | Date | string | null;
};
export type social_accountsCreateInput = {
    id?: bigint | number;
    provider: string;
    provider_id: string;
    provider_token?: string | null;
    provider_refresh_token?: string | null;
    token_expires_at?: Date | string | null;
    avatar?: string | null;
    provider_data?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    created_at?: Date | string | null;
    updated_at?: Date | string | null;
    users: Prisma.usersCreateNestedOneWithoutSocial_accountsInput;
};
export type social_accountsUncheckedCreateInput = {
    id?: bigint | number;
    user_id: bigint | number;
    provider: string;
    provider_id: string;
    provider_token?: string | null;
    provider_refresh_token?: string | null;
    token_expires_at?: Date | string | null;
    avatar?: string | null;
    provider_data?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    created_at?: Date | string | null;
    updated_at?: Date | string | null;
};
export type social_accountsUpdateInput = {
    id?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    provider?: Prisma.StringFieldUpdateOperationsInput | string;
    provider_id?: Prisma.StringFieldUpdateOperationsInput | string;
    provider_token?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    provider_refresh_token?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    token_expires_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    avatar?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    provider_data?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    created_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    updated_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    users?: Prisma.usersUpdateOneRequiredWithoutSocial_accountsNestedInput;
};
export type social_accountsUncheckedUpdateInput = {
    id?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    user_id?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    provider?: Prisma.StringFieldUpdateOperationsInput | string;
    provider_id?: Prisma.StringFieldUpdateOperationsInput | string;
    provider_token?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    provider_refresh_token?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    token_expires_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    avatar?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    provider_data?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    created_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    updated_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
};
export type social_accountsCreateManyInput = {
    id?: bigint | number;
    user_id: bigint | number;
    provider: string;
    provider_id: string;
    provider_token?: string | null;
    provider_refresh_token?: string | null;
    token_expires_at?: Date | string | null;
    avatar?: string | null;
    provider_data?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    created_at?: Date | string | null;
    updated_at?: Date | string | null;
};
export type social_accountsUpdateManyMutationInput = {
    id?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    provider?: Prisma.StringFieldUpdateOperationsInput | string;
    provider_id?: Prisma.StringFieldUpdateOperationsInput | string;
    provider_token?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    provider_refresh_token?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    token_expires_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    avatar?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    provider_data?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    created_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    updated_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
};
export type social_accountsUncheckedUpdateManyInput = {
    id?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    user_id?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    provider?: Prisma.StringFieldUpdateOperationsInput | string;
    provider_id?: Prisma.StringFieldUpdateOperationsInput | string;
    provider_token?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    provider_refresh_token?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    token_expires_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    avatar?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    provider_data?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    created_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    updated_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
};
export type social_accountsOrderByRelevanceInput = {
    fields: Prisma.social_accountsOrderByRelevanceFieldEnum | Prisma.social_accountsOrderByRelevanceFieldEnum[];
    sort: Prisma.SortOrder;
    search: string;
};
export type social_accountsUser_idProviderCompoundUniqueInput = {
    user_id: bigint | number;
    provider: string;
};
export type social_accountsCountOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    user_id?: Prisma.SortOrder;
    provider?: Prisma.SortOrder;
    provider_id?: Prisma.SortOrder;
    provider_token?: Prisma.SortOrder;
    provider_refresh_token?: Prisma.SortOrder;
    token_expires_at?: Prisma.SortOrder;
    avatar?: Prisma.SortOrder;
    provider_data?: Prisma.SortOrder;
    created_at?: Prisma.SortOrder;
    updated_at?: Prisma.SortOrder;
};
export type social_accountsAvgOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    user_id?: Prisma.SortOrder;
};
export type social_accountsMaxOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    user_id?: Prisma.SortOrder;
    provider?: Prisma.SortOrder;
    provider_id?: Prisma.SortOrder;
    provider_token?: Prisma.SortOrder;
    provider_refresh_token?: Prisma.SortOrder;
    token_expires_at?: Prisma.SortOrder;
    avatar?: Prisma.SortOrder;
    created_at?: Prisma.SortOrder;
    updated_at?: Prisma.SortOrder;
};
export type social_accountsMinOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    user_id?: Prisma.SortOrder;
    provider?: Prisma.SortOrder;
    provider_id?: Prisma.SortOrder;
    provider_token?: Prisma.SortOrder;
    provider_refresh_token?: Prisma.SortOrder;
    token_expires_at?: Prisma.SortOrder;
    avatar?: Prisma.SortOrder;
    created_at?: Prisma.SortOrder;
    updated_at?: Prisma.SortOrder;
};
export type social_accountsSumOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    user_id?: Prisma.SortOrder;
};
export type Social_accountsListRelationFilter = {
    every?: Prisma.social_accountsWhereInput;
    some?: Prisma.social_accountsWhereInput;
    none?: Prisma.social_accountsWhereInput;
};
export type social_accountsOrderByRelationAggregateInput = {
    _count?: Prisma.SortOrder;
};
export type social_accountsCreateNestedManyWithoutUsersInput = {
    create?: Prisma.XOR<Prisma.social_accountsCreateWithoutUsersInput, Prisma.social_accountsUncheckedCreateWithoutUsersInput> | Prisma.social_accountsCreateWithoutUsersInput[] | Prisma.social_accountsUncheckedCreateWithoutUsersInput[];
    connectOrCreate?: Prisma.social_accountsCreateOrConnectWithoutUsersInput | Prisma.social_accountsCreateOrConnectWithoutUsersInput[];
    createMany?: Prisma.social_accountsCreateManyUsersInputEnvelope;
    connect?: Prisma.social_accountsWhereUniqueInput | Prisma.social_accountsWhereUniqueInput[];
};
export type social_accountsUncheckedCreateNestedManyWithoutUsersInput = {
    create?: Prisma.XOR<Prisma.social_accountsCreateWithoutUsersInput, Prisma.social_accountsUncheckedCreateWithoutUsersInput> | Prisma.social_accountsCreateWithoutUsersInput[] | Prisma.social_accountsUncheckedCreateWithoutUsersInput[];
    connectOrCreate?: Prisma.social_accountsCreateOrConnectWithoutUsersInput | Prisma.social_accountsCreateOrConnectWithoutUsersInput[];
    createMany?: Prisma.social_accountsCreateManyUsersInputEnvelope;
    connect?: Prisma.social_accountsWhereUniqueInput | Prisma.social_accountsWhereUniqueInput[];
};
export type social_accountsUpdateManyWithoutUsersNestedInput = {
    create?: Prisma.XOR<Prisma.social_accountsCreateWithoutUsersInput, Prisma.social_accountsUncheckedCreateWithoutUsersInput> | Prisma.social_accountsCreateWithoutUsersInput[] | Prisma.social_accountsUncheckedCreateWithoutUsersInput[];
    connectOrCreate?: Prisma.social_accountsCreateOrConnectWithoutUsersInput | Prisma.social_accountsCreateOrConnectWithoutUsersInput[];
    upsert?: Prisma.social_accountsUpsertWithWhereUniqueWithoutUsersInput | Prisma.social_accountsUpsertWithWhereUniqueWithoutUsersInput[];
    createMany?: Prisma.social_accountsCreateManyUsersInputEnvelope;
    set?: Prisma.social_accountsWhereUniqueInput | Prisma.social_accountsWhereUniqueInput[];
    disconnect?: Prisma.social_accountsWhereUniqueInput | Prisma.social_accountsWhereUniqueInput[];
    delete?: Prisma.social_accountsWhereUniqueInput | Prisma.social_accountsWhereUniqueInput[];
    connect?: Prisma.social_accountsWhereUniqueInput | Prisma.social_accountsWhereUniqueInput[];
    update?: Prisma.social_accountsUpdateWithWhereUniqueWithoutUsersInput | Prisma.social_accountsUpdateWithWhereUniqueWithoutUsersInput[];
    updateMany?: Prisma.social_accountsUpdateManyWithWhereWithoutUsersInput | Prisma.social_accountsUpdateManyWithWhereWithoutUsersInput[];
    deleteMany?: Prisma.social_accountsScalarWhereInput | Prisma.social_accountsScalarWhereInput[];
};
export type social_accountsUncheckedUpdateManyWithoutUsersNestedInput = {
    create?: Prisma.XOR<Prisma.social_accountsCreateWithoutUsersInput, Prisma.social_accountsUncheckedCreateWithoutUsersInput> | Prisma.social_accountsCreateWithoutUsersInput[] | Prisma.social_accountsUncheckedCreateWithoutUsersInput[];
    connectOrCreate?: Prisma.social_accountsCreateOrConnectWithoutUsersInput | Prisma.social_accountsCreateOrConnectWithoutUsersInput[];
    upsert?: Prisma.social_accountsUpsertWithWhereUniqueWithoutUsersInput | Prisma.social_accountsUpsertWithWhereUniqueWithoutUsersInput[];
    createMany?: Prisma.social_accountsCreateManyUsersInputEnvelope;
    set?: Prisma.social_accountsWhereUniqueInput | Prisma.social_accountsWhereUniqueInput[];
    disconnect?: Prisma.social_accountsWhereUniqueInput | Prisma.social_accountsWhereUniqueInput[];
    delete?: Prisma.social_accountsWhereUniqueInput | Prisma.social_accountsWhereUniqueInput[];
    connect?: Prisma.social_accountsWhereUniqueInput | Prisma.social_accountsWhereUniqueInput[];
    update?: Prisma.social_accountsUpdateWithWhereUniqueWithoutUsersInput | Prisma.social_accountsUpdateWithWhereUniqueWithoutUsersInput[];
    updateMany?: Prisma.social_accountsUpdateManyWithWhereWithoutUsersInput | Prisma.social_accountsUpdateManyWithWhereWithoutUsersInput[];
    deleteMany?: Prisma.social_accountsScalarWhereInput | Prisma.social_accountsScalarWhereInput[];
};
export type social_accountsCreateWithoutUsersInput = {
    id?: bigint | number;
    provider: string;
    provider_id: string;
    provider_token?: string | null;
    provider_refresh_token?: string | null;
    token_expires_at?: Date | string | null;
    avatar?: string | null;
    provider_data?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    created_at?: Date | string | null;
    updated_at?: Date | string | null;
};
export type social_accountsUncheckedCreateWithoutUsersInput = {
    id?: bigint | number;
    provider: string;
    provider_id: string;
    provider_token?: string | null;
    provider_refresh_token?: string | null;
    token_expires_at?: Date | string | null;
    avatar?: string | null;
    provider_data?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    created_at?: Date | string | null;
    updated_at?: Date | string | null;
};
export type social_accountsCreateOrConnectWithoutUsersInput = {
    where: Prisma.social_accountsWhereUniqueInput;
    create: Prisma.XOR<Prisma.social_accountsCreateWithoutUsersInput, Prisma.social_accountsUncheckedCreateWithoutUsersInput>;
};
export type social_accountsCreateManyUsersInputEnvelope = {
    data: Prisma.social_accountsCreateManyUsersInput | Prisma.social_accountsCreateManyUsersInput[];
    skipDuplicates?: boolean;
};
export type social_accountsUpsertWithWhereUniqueWithoutUsersInput = {
    where: Prisma.social_accountsWhereUniqueInput;
    update: Prisma.XOR<Prisma.social_accountsUpdateWithoutUsersInput, Prisma.social_accountsUncheckedUpdateWithoutUsersInput>;
    create: Prisma.XOR<Prisma.social_accountsCreateWithoutUsersInput, Prisma.social_accountsUncheckedCreateWithoutUsersInput>;
};
export type social_accountsUpdateWithWhereUniqueWithoutUsersInput = {
    where: Prisma.social_accountsWhereUniqueInput;
    data: Prisma.XOR<Prisma.social_accountsUpdateWithoutUsersInput, Prisma.social_accountsUncheckedUpdateWithoutUsersInput>;
};
export type social_accountsUpdateManyWithWhereWithoutUsersInput = {
    where: Prisma.social_accountsScalarWhereInput;
    data: Prisma.XOR<Prisma.social_accountsUpdateManyMutationInput, Prisma.social_accountsUncheckedUpdateManyWithoutUsersInput>;
};
export type social_accountsScalarWhereInput = {
    AND?: Prisma.social_accountsScalarWhereInput | Prisma.social_accountsScalarWhereInput[];
    OR?: Prisma.social_accountsScalarWhereInput[];
    NOT?: Prisma.social_accountsScalarWhereInput | Prisma.social_accountsScalarWhereInput[];
    id?: Prisma.BigIntFilter<"social_accounts"> | bigint | number;
    user_id?: Prisma.BigIntFilter<"social_accounts"> | bigint | number;
    provider?: Prisma.StringFilter<"social_accounts"> | string;
    provider_id?: Prisma.StringFilter<"social_accounts"> | string;
    provider_token?: Prisma.StringNullableFilter<"social_accounts"> | string | null;
    provider_refresh_token?: Prisma.StringNullableFilter<"social_accounts"> | string | null;
    token_expires_at?: Prisma.DateTimeNullableFilter<"social_accounts"> | Date | string | null;
    avatar?: Prisma.StringNullableFilter<"social_accounts"> | string | null;
    provider_data?: Prisma.JsonNullableFilter<"social_accounts">;
    created_at?: Prisma.DateTimeNullableFilter<"social_accounts"> | Date | string | null;
    updated_at?: Prisma.DateTimeNullableFilter<"social_accounts"> | Date | string | null;
};
export type social_accountsCreateManyUsersInput = {
    id?: bigint | number;
    provider: string;
    provider_id: string;
    provider_token?: string | null;
    provider_refresh_token?: string | null;
    token_expires_at?: Date | string | null;
    avatar?: string | null;
    provider_data?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    created_at?: Date | string | null;
    updated_at?: Date | string | null;
};
export type social_accountsUpdateWithoutUsersInput = {
    id?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    provider?: Prisma.StringFieldUpdateOperationsInput | string;
    provider_id?: Prisma.StringFieldUpdateOperationsInput | string;
    provider_token?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    provider_refresh_token?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    token_expires_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    avatar?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    provider_data?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    created_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    updated_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
};
export type social_accountsUncheckedUpdateWithoutUsersInput = {
    id?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    provider?: Prisma.StringFieldUpdateOperationsInput | string;
    provider_id?: Prisma.StringFieldUpdateOperationsInput | string;
    provider_token?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    provider_refresh_token?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    token_expires_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    avatar?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    provider_data?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    created_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    updated_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
};
export type social_accountsUncheckedUpdateManyWithoutUsersInput = {
    id?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    provider?: Prisma.StringFieldUpdateOperationsInput | string;
    provider_id?: Prisma.StringFieldUpdateOperationsInput | string;
    provider_token?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    provider_refresh_token?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    token_expires_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    avatar?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    provider_data?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    created_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    updated_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
};
export type social_accountsSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    user_id?: boolean;
    provider?: boolean;
    provider_id?: boolean;
    provider_token?: boolean;
    provider_refresh_token?: boolean;
    token_expires_at?: boolean;
    avatar?: boolean;
    provider_data?: boolean;
    created_at?: boolean;
    updated_at?: boolean;
    users?: boolean | Prisma.usersDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["social_accounts"]>;
export type social_accountsSelectScalar = {
    id?: boolean;
    user_id?: boolean;
    provider?: boolean;
    provider_id?: boolean;
    provider_token?: boolean;
    provider_refresh_token?: boolean;
    token_expires_at?: boolean;
    avatar?: boolean;
    provider_data?: boolean;
    created_at?: boolean;
    updated_at?: boolean;
};
export type social_accountsOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "user_id" | "provider" | "provider_id" | "provider_token" | "provider_refresh_token" | "token_expires_at" | "avatar" | "provider_data" | "created_at" | "updated_at", ExtArgs["result"]["social_accounts"]>;
export type social_accountsInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    users?: boolean | Prisma.usersDefaultArgs<ExtArgs>;
};
export type $social_accountsPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "social_accounts";
    objects: {
        users: Prisma.$usersPayload<ExtArgs>;
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id: bigint;
        user_id: bigint;
        provider: string;
        provider_id: string;
        provider_token: string | null;
        provider_refresh_token: string | null;
        token_expires_at: Date | null;
        avatar: string | null;
        provider_data: runtime.JsonValue | null;
        created_at: Date | null;
        updated_at: Date | null;
    }, ExtArgs["result"]["social_accounts"]>;
    composites: {};
};
export type social_accountsGetPayload<S extends boolean | null | undefined | social_accountsDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$social_accountsPayload, S>;
export type social_accountsCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<social_accountsFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: Social_accountsCountAggregateInputType | true;
};
export interface social_accountsDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['social_accounts'];
        meta: {
            name: 'social_accounts';
        };
    };
    findUnique<T extends social_accountsFindUniqueArgs>(args: Prisma.SelectSubset<T, social_accountsFindUniqueArgs<ExtArgs>>): Prisma.Prisma__social_accountsClient<runtime.Types.Result.GetResult<Prisma.$social_accountsPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findUniqueOrThrow<T extends social_accountsFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, social_accountsFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__social_accountsClient<runtime.Types.Result.GetResult<Prisma.$social_accountsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findFirst<T extends social_accountsFindFirstArgs>(args?: Prisma.SelectSubset<T, social_accountsFindFirstArgs<ExtArgs>>): Prisma.Prisma__social_accountsClient<runtime.Types.Result.GetResult<Prisma.$social_accountsPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findFirstOrThrow<T extends social_accountsFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, social_accountsFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__social_accountsClient<runtime.Types.Result.GetResult<Prisma.$social_accountsPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findMany<T extends social_accountsFindManyArgs>(args?: Prisma.SelectSubset<T, social_accountsFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$social_accountsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    create<T extends social_accountsCreateArgs>(args: Prisma.SelectSubset<T, social_accountsCreateArgs<ExtArgs>>): Prisma.Prisma__social_accountsClient<runtime.Types.Result.GetResult<Prisma.$social_accountsPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    createMany<T extends social_accountsCreateManyArgs>(args?: Prisma.SelectSubset<T, social_accountsCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    delete<T extends social_accountsDeleteArgs>(args: Prisma.SelectSubset<T, social_accountsDeleteArgs<ExtArgs>>): Prisma.Prisma__social_accountsClient<runtime.Types.Result.GetResult<Prisma.$social_accountsPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    update<T extends social_accountsUpdateArgs>(args: Prisma.SelectSubset<T, social_accountsUpdateArgs<ExtArgs>>): Prisma.Prisma__social_accountsClient<runtime.Types.Result.GetResult<Prisma.$social_accountsPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    deleteMany<T extends social_accountsDeleteManyArgs>(args?: Prisma.SelectSubset<T, social_accountsDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateMany<T extends social_accountsUpdateManyArgs>(args: Prisma.SelectSubset<T, social_accountsUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    upsert<T extends social_accountsUpsertArgs>(args: Prisma.SelectSubset<T, social_accountsUpsertArgs<ExtArgs>>): Prisma.Prisma__social_accountsClient<runtime.Types.Result.GetResult<Prisma.$social_accountsPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    count<T extends social_accountsCountArgs>(args?: Prisma.Subset<T, social_accountsCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], Social_accountsCountAggregateOutputType> : number>;
    aggregate<T extends Social_accountsAggregateArgs>(args: Prisma.Subset<T, Social_accountsAggregateArgs>): Prisma.PrismaPromise<GetSocial_accountsAggregateType<T>>;
    groupBy<T extends social_accountsGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: social_accountsGroupByArgs['orderBy'];
    } : {
        orderBy?: social_accountsGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, social_accountsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetSocial_accountsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    readonly fields: social_accountsFieldRefs;
}
export interface Prisma__social_accountsClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    users<T extends Prisma.usersDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.usersDefaultArgs<ExtArgs>>): Prisma.Prisma__usersClient<runtime.Types.Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): runtime.Types.Utils.JsPromise<TResult1 | TResult2>;
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): runtime.Types.Utils.JsPromise<T | TResult>;
    finally(onfinally?: (() => void) | undefined | null): runtime.Types.Utils.JsPromise<T>;
}
export interface social_accountsFieldRefs {
    readonly id: Prisma.FieldRef<"social_accounts", 'BigInt'>;
    readonly user_id: Prisma.FieldRef<"social_accounts", 'BigInt'>;
    readonly provider: Prisma.FieldRef<"social_accounts", 'String'>;
    readonly provider_id: Prisma.FieldRef<"social_accounts", 'String'>;
    readonly provider_token: Prisma.FieldRef<"social_accounts", 'String'>;
    readonly provider_refresh_token: Prisma.FieldRef<"social_accounts", 'String'>;
    readonly token_expires_at: Prisma.FieldRef<"social_accounts", 'DateTime'>;
    readonly avatar: Prisma.FieldRef<"social_accounts", 'String'>;
    readonly provider_data: Prisma.FieldRef<"social_accounts", 'Json'>;
    readonly created_at: Prisma.FieldRef<"social_accounts", 'DateTime'>;
    readonly updated_at: Prisma.FieldRef<"social_accounts", 'DateTime'>;
}
export type social_accountsFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.social_accountsSelect<ExtArgs> | null;
    omit?: Prisma.social_accountsOmit<ExtArgs> | null;
    include?: Prisma.social_accountsInclude<ExtArgs> | null;
    where: Prisma.social_accountsWhereUniqueInput;
};
export type social_accountsFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.social_accountsSelect<ExtArgs> | null;
    omit?: Prisma.social_accountsOmit<ExtArgs> | null;
    include?: Prisma.social_accountsInclude<ExtArgs> | null;
    where: Prisma.social_accountsWhereUniqueInput;
};
export type social_accountsFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.social_accountsSelect<ExtArgs> | null;
    omit?: Prisma.social_accountsOmit<ExtArgs> | null;
    include?: Prisma.social_accountsInclude<ExtArgs> | null;
    where?: Prisma.social_accountsWhereInput;
    orderBy?: Prisma.social_accountsOrderByWithRelationInput | Prisma.social_accountsOrderByWithRelationInput[];
    cursor?: Prisma.social_accountsWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.Social_accountsScalarFieldEnum | Prisma.Social_accountsScalarFieldEnum[];
};
export type social_accountsFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.social_accountsSelect<ExtArgs> | null;
    omit?: Prisma.social_accountsOmit<ExtArgs> | null;
    include?: Prisma.social_accountsInclude<ExtArgs> | null;
    where?: Prisma.social_accountsWhereInput;
    orderBy?: Prisma.social_accountsOrderByWithRelationInput | Prisma.social_accountsOrderByWithRelationInput[];
    cursor?: Prisma.social_accountsWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.Social_accountsScalarFieldEnum | Prisma.Social_accountsScalarFieldEnum[];
};
export type social_accountsFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.social_accountsSelect<ExtArgs> | null;
    omit?: Prisma.social_accountsOmit<ExtArgs> | null;
    include?: Prisma.social_accountsInclude<ExtArgs> | null;
    where?: Prisma.social_accountsWhereInput;
    orderBy?: Prisma.social_accountsOrderByWithRelationInput | Prisma.social_accountsOrderByWithRelationInput[];
    cursor?: Prisma.social_accountsWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.Social_accountsScalarFieldEnum | Prisma.Social_accountsScalarFieldEnum[];
};
export type social_accountsCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.social_accountsSelect<ExtArgs> | null;
    omit?: Prisma.social_accountsOmit<ExtArgs> | null;
    include?: Prisma.social_accountsInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.social_accountsCreateInput, Prisma.social_accountsUncheckedCreateInput>;
};
export type social_accountsCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.social_accountsCreateManyInput | Prisma.social_accountsCreateManyInput[];
    skipDuplicates?: boolean;
};
export type social_accountsUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.social_accountsSelect<ExtArgs> | null;
    omit?: Prisma.social_accountsOmit<ExtArgs> | null;
    include?: Prisma.social_accountsInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.social_accountsUpdateInput, Prisma.social_accountsUncheckedUpdateInput>;
    where: Prisma.social_accountsWhereUniqueInput;
};
export type social_accountsUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.XOR<Prisma.social_accountsUpdateManyMutationInput, Prisma.social_accountsUncheckedUpdateManyInput>;
    where?: Prisma.social_accountsWhereInput;
    limit?: number;
};
export type social_accountsUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.social_accountsSelect<ExtArgs> | null;
    omit?: Prisma.social_accountsOmit<ExtArgs> | null;
    include?: Prisma.social_accountsInclude<ExtArgs> | null;
    where: Prisma.social_accountsWhereUniqueInput;
    create: Prisma.XOR<Prisma.social_accountsCreateInput, Prisma.social_accountsUncheckedCreateInput>;
    update: Prisma.XOR<Prisma.social_accountsUpdateInput, Prisma.social_accountsUncheckedUpdateInput>;
};
export type social_accountsDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.social_accountsSelect<ExtArgs> | null;
    omit?: Prisma.social_accountsOmit<ExtArgs> | null;
    include?: Prisma.social_accountsInclude<ExtArgs> | null;
    where: Prisma.social_accountsWhereUniqueInput;
};
export type social_accountsDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.social_accountsWhereInput;
    limit?: number;
};
export type social_accountsDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.social_accountsSelect<ExtArgs> | null;
    omit?: Prisma.social_accountsOmit<ExtArgs> | null;
    include?: Prisma.social_accountsInclude<ExtArgs> | null;
};
export {};
