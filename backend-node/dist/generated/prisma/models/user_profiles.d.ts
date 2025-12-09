import type * as runtime from "@prisma/client/runtime/client";
import type * as Prisma from "../internal/prismaNamespace.js";
export type user_profilesModel = runtime.Types.Result.DefaultSelection<Prisma.$user_profilesPayload>;
export type AggregateUser_profiles = {
    _count: User_profilesCountAggregateOutputType | null;
    _avg: User_profilesAvgAggregateOutputType | null;
    _sum: User_profilesSumAggregateOutputType | null;
    _min: User_profilesMinAggregateOutputType | null;
    _max: User_profilesMaxAggregateOutputType | null;
};
export type User_profilesAvgAggregateOutputType = {
    id: number | null;
    user_id: number | null;
};
export type User_profilesSumAggregateOutputType = {
    id: bigint | null;
    user_id: bigint | null;
};
export type User_profilesMinAggregateOutputType = {
    id: bigint | null;
    user_id: bigint | null;
    bio: string | null;
    address: string | null;
    city: string | null;
    country: string | null;
    created_at: Date | null;
    updated_at: Date | null;
};
export type User_profilesMaxAggregateOutputType = {
    id: bigint | null;
    user_id: bigint | null;
    bio: string | null;
    address: string | null;
    city: string | null;
    country: string | null;
    created_at: Date | null;
    updated_at: Date | null;
};
export type User_profilesCountAggregateOutputType = {
    id: number;
    user_id: number;
    bio: number;
    address: number;
    city: number;
    country: number;
    interests: number;
    created_at: number;
    updated_at: number;
    _all: number;
};
export type User_profilesAvgAggregateInputType = {
    id?: true;
    user_id?: true;
};
export type User_profilesSumAggregateInputType = {
    id?: true;
    user_id?: true;
};
export type User_profilesMinAggregateInputType = {
    id?: true;
    user_id?: true;
    bio?: true;
    address?: true;
    city?: true;
    country?: true;
    created_at?: true;
    updated_at?: true;
};
export type User_profilesMaxAggregateInputType = {
    id?: true;
    user_id?: true;
    bio?: true;
    address?: true;
    city?: true;
    country?: true;
    created_at?: true;
    updated_at?: true;
};
export type User_profilesCountAggregateInputType = {
    id?: true;
    user_id?: true;
    bio?: true;
    address?: true;
    city?: true;
    country?: true;
    interests?: true;
    created_at?: true;
    updated_at?: true;
    _all?: true;
};
export type User_profilesAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.user_profilesWhereInput;
    orderBy?: Prisma.user_profilesOrderByWithRelationInput | Prisma.user_profilesOrderByWithRelationInput[];
    cursor?: Prisma.user_profilesWhereUniqueInput;
    take?: number;
    skip?: number;
    _count?: true | User_profilesCountAggregateInputType;
    _avg?: User_profilesAvgAggregateInputType;
    _sum?: User_profilesSumAggregateInputType;
    _min?: User_profilesMinAggregateInputType;
    _max?: User_profilesMaxAggregateInputType;
};
export type GetUser_profilesAggregateType<T extends User_profilesAggregateArgs> = {
    [P in keyof T & keyof AggregateUser_profiles]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateUser_profiles[P]> : Prisma.GetScalarType<T[P], AggregateUser_profiles[P]>;
};
export type user_profilesGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.user_profilesWhereInput;
    orderBy?: Prisma.user_profilesOrderByWithAggregationInput | Prisma.user_profilesOrderByWithAggregationInput[];
    by: Prisma.User_profilesScalarFieldEnum[] | Prisma.User_profilesScalarFieldEnum;
    having?: Prisma.user_profilesScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: User_profilesCountAggregateInputType | true;
    _avg?: User_profilesAvgAggregateInputType;
    _sum?: User_profilesSumAggregateInputType;
    _min?: User_profilesMinAggregateInputType;
    _max?: User_profilesMaxAggregateInputType;
};
export type User_profilesGroupByOutputType = {
    id: bigint;
    user_id: bigint;
    bio: string | null;
    address: string | null;
    city: string | null;
    country: string;
    interests: runtime.JsonValue | null;
    created_at: Date | null;
    updated_at: Date | null;
    _count: User_profilesCountAggregateOutputType | null;
    _avg: User_profilesAvgAggregateOutputType | null;
    _sum: User_profilesSumAggregateOutputType | null;
    _min: User_profilesMinAggregateOutputType | null;
    _max: User_profilesMaxAggregateOutputType | null;
};
type GetUser_profilesGroupByPayload<T extends user_profilesGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<User_profilesGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof User_profilesGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], User_profilesGroupByOutputType[P]> : Prisma.GetScalarType<T[P], User_profilesGroupByOutputType[P]>;
}>>;
export type user_profilesWhereInput = {
    AND?: Prisma.user_profilesWhereInput | Prisma.user_profilesWhereInput[];
    OR?: Prisma.user_profilesWhereInput[];
    NOT?: Prisma.user_profilesWhereInput | Prisma.user_profilesWhereInput[];
    id?: Prisma.BigIntFilter<"user_profiles"> | bigint | number;
    user_id?: Prisma.BigIntFilter<"user_profiles"> | bigint | number;
    bio?: Prisma.StringNullableFilter<"user_profiles"> | string | null;
    address?: Prisma.StringNullableFilter<"user_profiles"> | string | null;
    city?: Prisma.StringNullableFilter<"user_profiles"> | string | null;
    country?: Prisma.StringFilter<"user_profiles"> | string;
    interests?: Prisma.JsonNullableFilter<"user_profiles">;
    created_at?: Prisma.DateTimeNullableFilter<"user_profiles"> | Date | string | null;
    updated_at?: Prisma.DateTimeNullableFilter<"user_profiles"> | Date | string | null;
    users?: Prisma.XOR<Prisma.UsersScalarRelationFilter, Prisma.usersWhereInput>;
};
export type user_profilesOrderByWithRelationInput = {
    id?: Prisma.SortOrder;
    user_id?: Prisma.SortOrder;
    bio?: Prisma.SortOrderInput | Prisma.SortOrder;
    address?: Prisma.SortOrderInput | Prisma.SortOrder;
    city?: Prisma.SortOrderInput | Prisma.SortOrder;
    country?: Prisma.SortOrder;
    interests?: Prisma.SortOrderInput | Prisma.SortOrder;
    created_at?: Prisma.SortOrderInput | Prisma.SortOrder;
    updated_at?: Prisma.SortOrderInput | Prisma.SortOrder;
    users?: Prisma.usersOrderByWithRelationInput;
    _relevance?: Prisma.user_profilesOrderByRelevanceInput;
};
export type user_profilesWhereUniqueInput = Prisma.AtLeast<{
    id?: bigint | number;
    AND?: Prisma.user_profilesWhereInput | Prisma.user_profilesWhereInput[];
    OR?: Prisma.user_profilesWhereInput[];
    NOT?: Prisma.user_profilesWhereInput | Prisma.user_profilesWhereInput[];
    user_id?: Prisma.BigIntFilter<"user_profiles"> | bigint | number;
    bio?: Prisma.StringNullableFilter<"user_profiles"> | string | null;
    address?: Prisma.StringNullableFilter<"user_profiles"> | string | null;
    city?: Prisma.StringNullableFilter<"user_profiles"> | string | null;
    country?: Prisma.StringFilter<"user_profiles"> | string;
    interests?: Prisma.JsonNullableFilter<"user_profiles">;
    created_at?: Prisma.DateTimeNullableFilter<"user_profiles"> | Date | string | null;
    updated_at?: Prisma.DateTimeNullableFilter<"user_profiles"> | Date | string | null;
    users?: Prisma.XOR<Prisma.UsersScalarRelationFilter, Prisma.usersWhereInput>;
}, "id">;
export type user_profilesOrderByWithAggregationInput = {
    id?: Prisma.SortOrder;
    user_id?: Prisma.SortOrder;
    bio?: Prisma.SortOrderInput | Prisma.SortOrder;
    address?: Prisma.SortOrderInput | Prisma.SortOrder;
    city?: Prisma.SortOrderInput | Prisma.SortOrder;
    country?: Prisma.SortOrder;
    interests?: Prisma.SortOrderInput | Prisma.SortOrder;
    created_at?: Prisma.SortOrderInput | Prisma.SortOrder;
    updated_at?: Prisma.SortOrderInput | Prisma.SortOrder;
    _count?: Prisma.user_profilesCountOrderByAggregateInput;
    _avg?: Prisma.user_profilesAvgOrderByAggregateInput;
    _max?: Prisma.user_profilesMaxOrderByAggregateInput;
    _min?: Prisma.user_profilesMinOrderByAggregateInput;
    _sum?: Prisma.user_profilesSumOrderByAggregateInput;
};
export type user_profilesScalarWhereWithAggregatesInput = {
    AND?: Prisma.user_profilesScalarWhereWithAggregatesInput | Prisma.user_profilesScalarWhereWithAggregatesInput[];
    OR?: Prisma.user_profilesScalarWhereWithAggregatesInput[];
    NOT?: Prisma.user_profilesScalarWhereWithAggregatesInput | Prisma.user_profilesScalarWhereWithAggregatesInput[];
    id?: Prisma.BigIntWithAggregatesFilter<"user_profiles"> | bigint | number;
    user_id?: Prisma.BigIntWithAggregatesFilter<"user_profiles"> | bigint | number;
    bio?: Prisma.StringNullableWithAggregatesFilter<"user_profiles"> | string | null;
    address?: Prisma.StringNullableWithAggregatesFilter<"user_profiles"> | string | null;
    city?: Prisma.StringNullableWithAggregatesFilter<"user_profiles"> | string | null;
    country?: Prisma.StringWithAggregatesFilter<"user_profiles"> | string;
    interests?: Prisma.JsonNullableWithAggregatesFilter<"user_profiles">;
    created_at?: Prisma.DateTimeNullableWithAggregatesFilter<"user_profiles"> | Date | string | null;
    updated_at?: Prisma.DateTimeNullableWithAggregatesFilter<"user_profiles"> | Date | string | null;
};
export type user_profilesCreateInput = {
    id?: bigint | number;
    bio?: string | null;
    address?: string | null;
    city?: string | null;
    country?: string;
    interests?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    created_at?: Date | string | null;
    updated_at?: Date | string | null;
    users: Prisma.usersCreateNestedOneWithoutUser_profilesInput;
};
export type user_profilesUncheckedCreateInput = {
    id?: bigint | number;
    user_id: bigint | number;
    bio?: string | null;
    address?: string | null;
    city?: string | null;
    country?: string;
    interests?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    created_at?: Date | string | null;
    updated_at?: Date | string | null;
};
export type user_profilesUpdateInput = {
    id?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    bio?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    address?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    city?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    country?: Prisma.StringFieldUpdateOperationsInput | string;
    interests?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    created_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    updated_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    users?: Prisma.usersUpdateOneRequiredWithoutUser_profilesNestedInput;
};
export type user_profilesUncheckedUpdateInput = {
    id?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    user_id?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    bio?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    address?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    city?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    country?: Prisma.StringFieldUpdateOperationsInput | string;
    interests?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    created_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    updated_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
};
export type user_profilesCreateManyInput = {
    id?: bigint | number;
    user_id: bigint | number;
    bio?: string | null;
    address?: string | null;
    city?: string | null;
    country?: string;
    interests?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    created_at?: Date | string | null;
    updated_at?: Date | string | null;
};
export type user_profilesUpdateManyMutationInput = {
    id?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    bio?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    address?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    city?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    country?: Prisma.StringFieldUpdateOperationsInput | string;
    interests?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    created_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    updated_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
};
export type user_profilesUncheckedUpdateManyInput = {
    id?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    user_id?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    bio?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    address?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    city?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    country?: Prisma.StringFieldUpdateOperationsInput | string;
    interests?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    created_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    updated_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
};
export type user_profilesOrderByRelevanceInput = {
    fields: Prisma.user_profilesOrderByRelevanceFieldEnum | Prisma.user_profilesOrderByRelevanceFieldEnum[];
    sort: Prisma.SortOrder;
    search: string;
};
export type user_profilesCountOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    user_id?: Prisma.SortOrder;
    bio?: Prisma.SortOrder;
    address?: Prisma.SortOrder;
    city?: Prisma.SortOrder;
    country?: Prisma.SortOrder;
    interests?: Prisma.SortOrder;
    created_at?: Prisma.SortOrder;
    updated_at?: Prisma.SortOrder;
};
export type user_profilesAvgOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    user_id?: Prisma.SortOrder;
};
export type user_profilesMaxOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    user_id?: Prisma.SortOrder;
    bio?: Prisma.SortOrder;
    address?: Prisma.SortOrder;
    city?: Prisma.SortOrder;
    country?: Prisma.SortOrder;
    created_at?: Prisma.SortOrder;
    updated_at?: Prisma.SortOrder;
};
export type user_profilesMinOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    user_id?: Prisma.SortOrder;
    bio?: Prisma.SortOrder;
    address?: Prisma.SortOrder;
    city?: Prisma.SortOrder;
    country?: Prisma.SortOrder;
    created_at?: Prisma.SortOrder;
    updated_at?: Prisma.SortOrder;
};
export type user_profilesSumOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    user_id?: Prisma.SortOrder;
};
export type User_profilesListRelationFilter = {
    every?: Prisma.user_profilesWhereInput;
    some?: Prisma.user_profilesWhereInput;
    none?: Prisma.user_profilesWhereInput;
};
export type user_profilesOrderByRelationAggregateInput = {
    _count?: Prisma.SortOrder;
};
export type user_profilesCreateNestedManyWithoutUsersInput = {
    create?: Prisma.XOR<Prisma.user_profilesCreateWithoutUsersInput, Prisma.user_profilesUncheckedCreateWithoutUsersInput> | Prisma.user_profilesCreateWithoutUsersInput[] | Prisma.user_profilesUncheckedCreateWithoutUsersInput[];
    connectOrCreate?: Prisma.user_profilesCreateOrConnectWithoutUsersInput | Prisma.user_profilesCreateOrConnectWithoutUsersInput[];
    createMany?: Prisma.user_profilesCreateManyUsersInputEnvelope;
    connect?: Prisma.user_profilesWhereUniqueInput | Prisma.user_profilesWhereUniqueInput[];
};
export type user_profilesUncheckedCreateNestedManyWithoutUsersInput = {
    create?: Prisma.XOR<Prisma.user_profilesCreateWithoutUsersInput, Prisma.user_profilesUncheckedCreateWithoutUsersInput> | Prisma.user_profilesCreateWithoutUsersInput[] | Prisma.user_profilesUncheckedCreateWithoutUsersInput[];
    connectOrCreate?: Prisma.user_profilesCreateOrConnectWithoutUsersInput | Prisma.user_profilesCreateOrConnectWithoutUsersInput[];
    createMany?: Prisma.user_profilesCreateManyUsersInputEnvelope;
    connect?: Prisma.user_profilesWhereUniqueInput | Prisma.user_profilesWhereUniqueInput[];
};
export type user_profilesUpdateManyWithoutUsersNestedInput = {
    create?: Prisma.XOR<Prisma.user_profilesCreateWithoutUsersInput, Prisma.user_profilesUncheckedCreateWithoutUsersInput> | Prisma.user_profilesCreateWithoutUsersInput[] | Prisma.user_profilesUncheckedCreateWithoutUsersInput[];
    connectOrCreate?: Prisma.user_profilesCreateOrConnectWithoutUsersInput | Prisma.user_profilesCreateOrConnectWithoutUsersInput[];
    upsert?: Prisma.user_profilesUpsertWithWhereUniqueWithoutUsersInput | Prisma.user_profilesUpsertWithWhereUniqueWithoutUsersInput[];
    createMany?: Prisma.user_profilesCreateManyUsersInputEnvelope;
    set?: Prisma.user_profilesWhereUniqueInput | Prisma.user_profilesWhereUniqueInput[];
    disconnect?: Prisma.user_profilesWhereUniqueInput | Prisma.user_profilesWhereUniqueInput[];
    delete?: Prisma.user_profilesWhereUniqueInput | Prisma.user_profilesWhereUniqueInput[];
    connect?: Prisma.user_profilesWhereUniqueInput | Prisma.user_profilesWhereUniqueInput[];
    update?: Prisma.user_profilesUpdateWithWhereUniqueWithoutUsersInput | Prisma.user_profilesUpdateWithWhereUniqueWithoutUsersInput[];
    updateMany?: Prisma.user_profilesUpdateManyWithWhereWithoutUsersInput | Prisma.user_profilesUpdateManyWithWhereWithoutUsersInput[];
    deleteMany?: Prisma.user_profilesScalarWhereInput | Prisma.user_profilesScalarWhereInput[];
};
export type user_profilesUncheckedUpdateManyWithoutUsersNestedInput = {
    create?: Prisma.XOR<Prisma.user_profilesCreateWithoutUsersInput, Prisma.user_profilesUncheckedCreateWithoutUsersInput> | Prisma.user_profilesCreateWithoutUsersInput[] | Prisma.user_profilesUncheckedCreateWithoutUsersInput[];
    connectOrCreate?: Prisma.user_profilesCreateOrConnectWithoutUsersInput | Prisma.user_profilesCreateOrConnectWithoutUsersInput[];
    upsert?: Prisma.user_profilesUpsertWithWhereUniqueWithoutUsersInput | Prisma.user_profilesUpsertWithWhereUniqueWithoutUsersInput[];
    createMany?: Prisma.user_profilesCreateManyUsersInputEnvelope;
    set?: Prisma.user_profilesWhereUniqueInput | Prisma.user_profilesWhereUniqueInput[];
    disconnect?: Prisma.user_profilesWhereUniqueInput | Prisma.user_profilesWhereUniqueInput[];
    delete?: Prisma.user_profilesWhereUniqueInput | Prisma.user_profilesWhereUniqueInput[];
    connect?: Prisma.user_profilesWhereUniqueInput | Prisma.user_profilesWhereUniqueInput[];
    update?: Prisma.user_profilesUpdateWithWhereUniqueWithoutUsersInput | Prisma.user_profilesUpdateWithWhereUniqueWithoutUsersInput[];
    updateMany?: Prisma.user_profilesUpdateManyWithWhereWithoutUsersInput | Prisma.user_profilesUpdateManyWithWhereWithoutUsersInput[];
    deleteMany?: Prisma.user_profilesScalarWhereInput | Prisma.user_profilesScalarWhereInput[];
};
export type user_profilesCreateWithoutUsersInput = {
    id?: bigint | number;
    bio?: string | null;
    address?: string | null;
    city?: string | null;
    country?: string;
    interests?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    created_at?: Date | string | null;
    updated_at?: Date | string | null;
};
export type user_profilesUncheckedCreateWithoutUsersInput = {
    id?: bigint | number;
    bio?: string | null;
    address?: string | null;
    city?: string | null;
    country?: string;
    interests?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    created_at?: Date | string | null;
    updated_at?: Date | string | null;
};
export type user_profilesCreateOrConnectWithoutUsersInput = {
    where: Prisma.user_profilesWhereUniqueInput;
    create: Prisma.XOR<Prisma.user_profilesCreateWithoutUsersInput, Prisma.user_profilesUncheckedCreateWithoutUsersInput>;
};
export type user_profilesCreateManyUsersInputEnvelope = {
    data: Prisma.user_profilesCreateManyUsersInput | Prisma.user_profilesCreateManyUsersInput[];
    skipDuplicates?: boolean;
};
export type user_profilesUpsertWithWhereUniqueWithoutUsersInput = {
    where: Prisma.user_profilesWhereUniqueInput;
    update: Prisma.XOR<Prisma.user_profilesUpdateWithoutUsersInput, Prisma.user_profilesUncheckedUpdateWithoutUsersInput>;
    create: Prisma.XOR<Prisma.user_profilesCreateWithoutUsersInput, Prisma.user_profilesUncheckedCreateWithoutUsersInput>;
};
export type user_profilesUpdateWithWhereUniqueWithoutUsersInput = {
    where: Prisma.user_profilesWhereUniqueInput;
    data: Prisma.XOR<Prisma.user_profilesUpdateWithoutUsersInput, Prisma.user_profilesUncheckedUpdateWithoutUsersInput>;
};
export type user_profilesUpdateManyWithWhereWithoutUsersInput = {
    where: Prisma.user_profilesScalarWhereInput;
    data: Prisma.XOR<Prisma.user_profilesUpdateManyMutationInput, Prisma.user_profilesUncheckedUpdateManyWithoutUsersInput>;
};
export type user_profilesScalarWhereInput = {
    AND?: Prisma.user_profilesScalarWhereInput | Prisma.user_profilesScalarWhereInput[];
    OR?: Prisma.user_profilesScalarWhereInput[];
    NOT?: Prisma.user_profilesScalarWhereInput | Prisma.user_profilesScalarWhereInput[];
    id?: Prisma.BigIntFilter<"user_profiles"> | bigint | number;
    user_id?: Prisma.BigIntFilter<"user_profiles"> | bigint | number;
    bio?: Prisma.StringNullableFilter<"user_profiles"> | string | null;
    address?: Prisma.StringNullableFilter<"user_profiles"> | string | null;
    city?: Prisma.StringNullableFilter<"user_profiles"> | string | null;
    country?: Prisma.StringFilter<"user_profiles"> | string;
    interests?: Prisma.JsonNullableFilter<"user_profiles">;
    created_at?: Prisma.DateTimeNullableFilter<"user_profiles"> | Date | string | null;
    updated_at?: Prisma.DateTimeNullableFilter<"user_profiles"> | Date | string | null;
};
export type user_profilesCreateManyUsersInput = {
    id?: bigint | number;
    bio?: string | null;
    address?: string | null;
    city?: string | null;
    country?: string;
    interests?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    created_at?: Date | string | null;
    updated_at?: Date | string | null;
};
export type user_profilesUpdateWithoutUsersInput = {
    id?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    bio?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    address?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    city?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    country?: Prisma.StringFieldUpdateOperationsInput | string;
    interests?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    created_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    updated_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
};
export type user_profilesUncheckedUpdateWithoutUsersInput = {
    id?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    bio?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    address?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    city?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    country?: Prisma.StringFieldUpdateOperationsInput | string;
    interests?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    created_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    updated_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
};
export type user_profilesUncheckedUpdateManyWithoutUsersInput = {
    id?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    bio?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    address?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    city?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    country?: Prisma.StringFieldUpdateOperationsInput | string;
    interests?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    created_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    updated_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
};
export type user_profilesSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    user_id?: boolean;
    bio?: boolean;
    address?: boolean;
    city?: boolean;
    country?: boolean;
    interests?: boolean;
    created_at?: boolean;
    updated_at?: boolean;
    users?: boolean | Prisma.usersDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["user_profiles"]>;
export type user_profilesSelectScalar = {
    id?: boolean;
    user_id?: boolean;
    bio?: boolean;
    address?: boolean;
    city?: boolean;
    country?: boolean;
    interests?: boolean;
    created_at?: boolean;
    updated_at?: boolean;
};
export type user_profilesOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "user_id" | "bio" | "address" | "city" | "country" | "interests" | "created_at" | "updated_at", ExtArgs["result"]["user_profiles"]>;
export type user_profilesInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    users?: boolean | Prisma.usersDefaultArgs<ExtArgs>;
};
export type $user_profilesPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "user_profiles";
    objects: {
        users: Prisma.$usersPayload<ExtArgs>;
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id: bigint;
        user_id: bigint;
        bio: string | null;
        address: string | null;
        city: string | null;
        country: string;
        interests: runtime.JsonValue | null;
        created_at: Date | null;
        updated_at: Date | null;
    }, ExtArgs["result"]["user_profiles"]>;
    composites: {};
};
export type user_profilesGetPayload<S extends boolean | null | undefined | user_profilesDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$user_profilesPayload, S>;
export type user_profilesCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<user_profilesFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: User_profilesCountAggregateInputType | true;
};
export interface user_profilesDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['user_profiles'];
        meta: {
            name: 'user_profiles';
        };
    };
    findUnique<T extends user_profilesFindUniqueArgs>(args: Prisma.SelectSubset<T, user_profilesFindUniqueArgs<ExtArgs>>): Prisma.Prisma__user_profilesClient<runtime.Types.Result.GetResult<Prisma.$user_profilesPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findUniqueOrThrow<T extends user_profilesFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, user_profilesFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__user_profilesClient<runtime.Types.Result.GetResult<Prisma.$user_profilesPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findFirst<T extends user_profilesFindFirstArgs>(args?: Prisma.SelectSubset<T, user_profilesFindFirstArgs<ExtArgs>>): Prisma.Prisma__user_profilesClient<runtime.Types.Result.GetResult<Prisma.$user_profilesPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findFirstOrThrow<T extends user_profilesFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, user_profilesFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__user_profilesClient<runtime.Types.Result.GetResult<Prisma.$user_profilesPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findMany<T extends user_profilesFindManyArgs>(args?: Prisma.SelectSubset<T, user_profilesFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$user_profilesPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    create<T extends user_profilesCreateArgs>(args: Prisma.SelectSubset<T, user_profilesCreateArgs<ExtArgs>>): Prisma.Prisma__user_profilesClient<runtime.Types.Result.GetResult<Prisma.$user_profilesPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    createMany<T extends user_profilesCreateManyArgs>(args?: Prisma.SelectSubset<T, user_profilesCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    delete<T extends user_profilesDeleteArgs>(args: Prisma.SelectSubset<T, user_profilesDeleteArgs<ExtArgs>>): Prisma.Prisma__user_profilesClient<runtime.Types.Result.GetResult<Prisma.$user_profilesPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    update<T extends user_profilesUpdateArgs>(args: Prisma.SelectSubset<T, user_profilesUpdateArgs<ExtArgs>>): Prisma.Prisma__user_profilesClient<runtime.Types.Result.GetResult<Prisma.$user_profilesPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    deleteMany<T extends user_profilesDeleteManyArgs>(args?: Prisma.SelectSubset<T, user_profilesDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateMany<T extends user_profilesUpdateManyArgs>(args: Prisma.SelectSubset<T, user_profilesUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    upsert<T extends user_profilesUpsertArgs>(args: Prisma.SelectSubset<T, user_profilesUpsertArgs<ExtArgs>>): Prisma.Prisma__user_profilesClient<runtime.Types.Result.GetResult<Prisma.$user_profilesPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    count<T extends user_profilesCountArgs>(args?: Prisma.Subset<T, user_profilesCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], User_profilesCountAggregateOutputType> : number>;
    aggregate<T extends User_profilesAggregateArgs>(args: Prisma.Subset<T, User_profilesAggregateArgs>): Prisma.PrismaPromise<GetUser_profilesAggregateType<T>>;
    groupBy<T extends user_profilesGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: user_profilesGroupByArgs['orderBy'];
    } : {
        orderBy?: user_profilesGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, user_profilesGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUser_profilesGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    readonly fields: user_profilesFieldRefs;
}
export interface Prisma__user_profilesClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    users<T extends Prisma.usersDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.usersDefaultArgs<ExtArgs>>): Prisma.Prisma__usersClient<runtime.Types.Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): runtime.Types.Utils.JsPromise<TResult1 | TResult2>;
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): runtime.Types.Utils.JsPromise<T | TResult>;
    finally(onfinally?: (() => void) | undefined | null): runtime.Types.Utils.JsPromise<T>;
}
export interface user_profilesFieldRefs {
    readonly id: Prisma.FieldRef<"user_profiles", 'BigInt'>;
    readonly user_id: Prisma.FieldRef<"user_profiles", 'BigInt'>;
    readonly bio: Prisma.FieldRef<"user_profiles", 'String'>;
    readonly address: Prisma.FieldRef<"user_profiles", 'String'>;
    readonly city: Prisma.FieldRef<"user_profiles", 'String'>;
    readonly country: Prisma.FieldRef<"user_profiles", 'String'>;
    readonly interests: Prisma.FieldRef<"user_profiles", 'Json'>;
    readonly created_at: Prisma.FieldRef<"user_profiles", 'DateTime'>;
    readonly updated_at: Prisma.FieldRef<"user_profiles", 'DateTime'>;
}
export type user_profilesFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.user_profilesSelect<ExtArgs> | null;
    omit?: Prisma.user_profilesOmit<ExtArgs> | null;
    include?: Prisma.user_profilesInclude<ExtArgs> | null;
    where: Prisma.user_profilesWhereUniqueInput;
};
export type user_profilesFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.user_profilesSelect<ExtArgs> | null;
    omit?: Prisma.user_profilesOmit<ExtArgs> | null;
    include?: Prisma.user_profilesInclude<ExtArgs> | null;
    where: Prisma.user_profilesWhereUniqueInput;
};
export type user_profilesFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.user_profilesSelect<ExtArgs> | null;
    omit?: Prisma.user_profilesOmit<ExtArgs> | null;
    include?: Prisma.user_profilesInclude<ExtArgs> | null;
    where?: Prisma.user_profilesWhereInput;
    orderBy?: Prisma.user_profilesOrderByWithRelationInput | Prisma.user_profilesOrderByWithRelationInput[];
    cursor?: Prisma.user_profilesWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.User_profilesScalarFieldEnum | Prisma.User_profilesScalarFieldEnum[];
};
export type user_profilesFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.user_profilesSelect<ExtArgs> | null;
    omit?: Prisma.user_profilesOmit<ExtArgs> | null;
    include?: Prisma.user_profilesInclude<ExtArgs> | null;
    where?: Prisma.user_profilesWhereInput;
    orderBy?: Prisma.user_profilesOrderByWithRelationInput | Prisma.user_profilesOrderByWithRelationInput[];
    cursor?: Prisma.user_profilesWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.User_profilesScalarFieldEnum | Prisma.User_profilesScalarFieldEnum[];
};
export type user_profilesFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.user_profilesSelect<ExtArgs> | null;
    omit?: Prisma.user_profilesOmit<ExtArgs> | null;
    include?: Prisma.user_profilesInclude<ExtArgs> | null;
    where?: Prisma.user_profilesWhereInput;
    orderBy?: Prisma.user_profilesOrderByWithRelationInput | Prisma.user_profilesOrderByWithRelationInput[];
    cursor?: Prisma.user_profilesWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.User_profilesScalarFieldEnum | Prisma.User_profilesScalarFieldEnum[];
};
export type user_profilesCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.user_profilesSelect<ExtArgs> | null;
    omit?: Prisma.user_profilesOmit<ExtArgs> | null;
    include?: Prisma.user_profilesInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.user_profilesCreateInput, Prisma.user_profilesUncheckedCreateInput>;
};
export type user_profilesCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.user_profilesCreateManyInput | Prisma.user_profilesCreateManyInput[];
    skipDuplicates?: boolean;
};
export type user_profilesUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.user_profilesSelect<ExtArgs> | null;
    omit?: Prisma.user_profilesOmit<ExtArgs> | null;
    include?: Prisma.user_profilesInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.user_profilesUpdateInput, Prisma.user_profilesUncheckedUpdateInput>;
    where: Prisma.user_profilesWhereUniqueInput;
};
export type user_profilesUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.XOR<Prisma.user_profilesUpdateManyMutationInput, Prisma.user_profilesUncheckedUpdateManyInput>;
    where?: Prisma.user_profilesWhereInput;
    limit?: number;
};
export type user_profilesUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.user_profilesSelect<ExtArgs> | null;
    omit?: Prisma.user_profilesOmit<ExtArgs> | null;
    include?: Prisma.user_profilesInclude<ExtArgs> | null;
    where: Prisma.user_profilesWhereUniqueInput;
    create: Prisma.XOR<Prisma.user_profilesCreateInput, Prisma.user_profilesUncheckedCreateInput>;
    update: Prisma.XOR<Prisma.user_profilesUpdateInput, Prisma.user_profilesUncheckedUpdateInput>;
};
export type user_profilesDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.user_profilesSelect<ExtArgs> | null;
    omit?: Prisma.user_profilesOmit<ExtArgs> | null;
    include?: Prisma.user_profilesInclude<ExtArgs> | null;
    where: Prisma.user_profilesWhereUniqueInput;
};
export type user_profilesDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.user_profilesWhereInput;
    limit?: number;
};
export type user_profilesDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.user_profilesSelect<ExtArgs> | null;
    omit?: Prisma.user_profilesOmit<ExtArgs> | null;
    include?: Prisma.user_profilesInclude<ExtArgs> | null;
};
export {};
