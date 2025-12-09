import type * as runtime from "@prisma/client/runtime/client";
import type * as $Enums from "../enums.js";
import type * as Prisma from "../internal/prismaNamespace.js";
export type verification_codesModel = runtime.Types.Result.DefaultSelection<Prisma.$verification_codesPayload>;
export type AggregateVerification_codes = {
    _count: Verification_codesCountAggregateOutputType | null;
    _avg: Verification_codesAvgAggregateOutputType | null;
    _sum: Verification_codesSumAggregateOutputType | null;
    _min: Verification_codesMinAggregateOutputType | null;
    _max: Verification_codesMaxAggregateOutputType | null;
};
export type Verification_codesAvgAggregateOutputType = {
    id: number | null;
    user_id: number | null;
};
export type Verification_codesSumAggregateOutputType = {
    id: bigint | null;
    user_id: bigint | null;
};
export type Verification_codesMinAggregateOutputType = {
    id: bigint | null;
    user_id: bigint | null;
    type: $Enums.verification_codes_type | null;
    code: string | null;
    contact: string | null;
    expires_at: Date | null;
    verified: boolean | null;
    verified_at: Date | null;
    created_at: Date | null;
    updated_at: Date | null;
};
export type Verification_codesMaxAggregateOutputType = {
    id: bigint | null;
    user_id: bigint | null;
    type: $Enums.verification_codes_type | null;
    code: string | null;
    contact: string | null;
    expires_at: Date | null;
    verified: boolean | null;
    verified_at: Date | null;
    created_at: Date | null;
    updated_at: Date | null;
};
export type Verification_codesCountAggregateOutputType = {
    id: number;
    user_id: number;
    type: number;
    code: number;
    contact: number;
    expires_at: number;
    verified: number;
    verified_at: number;
    created_at: number;
    updated_at: number;
    _all: number;
};
export type Verification_codesAvgAggregateInputType = {
    id?: true;
    user_id?: true;
};
export type Verification_codesSumAggregateInputType = {
    id?: true;
    user_id?: true;
};
export type Verification_codesMinAggregateInputType = {
    id?: true;
    user_id?: true;
    type?: true;
    code?: true;
    contact?: true;
    expires_at?: true;
    verified?: true;
    verified_at?: true;
    created_at?: true;
    updated_at?: true;
};
export type Verification_codesMaxAggregateInputType = {
    id?: true;
    user_id?: true;
    type?: true;
    code?: true;
    contact?: true;
    expires_at?: true;
    verified?: true;
    verified_at?: true;
    created_at?: true;
    updated_at?: true;
};
export type Verification_codesCountAggregateInputType = {
    id?: true;
    user_id?: true;
    type?: true;
    code?: true;
    contact?: true;
    expires_at?: true;
    verified?: true;
    verified_at?: true;
    created_at?: true;
    updated_at?: true;
    _all?: true;
};
export type Verification_codesAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.verification_codesWhereInput;
    orderBy?: Prisma.verification_codesOrderByWithRelationInput | Prisma.verification_codesOrderByWithRelationInput[];
    cursor?: Prisma.verification_codesWhereUniqueInput;
    take?: number;
    skip?: number;
    _count?: true | Verification_codesCountAggregateInputType;
    _avg?: Verification_codesAvgAggregateInputType;
    _sum?: Verification_codesSumAggregateInputType;
    _min?: Verification_codesMinAggregateInputType;
    _max?: Verification_codesMaxAggregateInputType;
};
export type GetVerification_codesAggregateType<T extends Verification_codesAggregateArgs> = {
    [P in keyof T & keyof AggregateVerification_codes]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateVerification_codes[P]> : Prisma.GetScalarType<T[P], AggregateVerification_codes[P]>;
};
export type verification_codesGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.verification_codesWhereInput;
    orderBy?: Prisma.verification_codesOrderByWithAggregationInput | Prisma.verification_codesOrderByWithAggregationInput[];
    by: Prisma.Verification_codesScalarFieldEnum[] | Prisma.Verification_codesScalarFieldEnum;
    having?: Prisma.verification_codesScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: Verification_codesCountAggregateInputType | true;
    _avg?: Verification_codesAvgAggregateInputType;
    _sum?: Verification_codesSumAggregateInputType;
    _min?: Verification_codesMinAggregateInputType;
    _max?: Verification_codesMaxAggregateInputType;
};
export type Verification_codesGroupByOutputType = {
    id: bigint;
    user_id: bigint;
    type: $Enums.verification_codes_type;
    code: string;
    contact: string;
    expires_at: Date;
    verified: boolean;
    verified_at: Date | null;
    created_at: Date | null;
    updated_at: Date | null;
    _count: Verification_codesCountAggregateOutputType | null;
    _avg: Verification_codesAvgAggregateOutputType | null;
    _sum: Verification_codesSumAggregateOutputType | null;
    _min: Verification_codesMinAggregateOutputType | null;
    _max: Verification_codesMaxAggregateOutputType | null;
};
type GetVerification_codesGroupByPayload<T extends verification_codesGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<Verification_codesGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof Verification_codesGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], Verification_codesGroupByOutputType[P]> : Prisma.GetScalarType<T[P], Verification_codesGroupByOutputType[P]>;
}>>;
export type verification_codesWhereInput = {
    AND?: Prisma.verification_codesWhereInput | Prisma.verification_codesWhereInput[];
    OR?: Prisma.verification_codesWhereInput[];
    NOT?: Prisma.verification_codesWhereInput | Prisma.verification_codesWhereInput[];
    id?: Prisma.BigIntFilter<"verification_codes"> | bigint | number;
    user_id?: Prisma.BigIntFilter<"verification_codes"> | bigint | number;
    type?: Prisma.Enumverification_codes_typeFilter<"verification_codes"> | $Enums.verification_codes_type;
    code?: Prisma.StringFilter<"verification_codes"> | string;
    contact?: Prisma.StringFilter<"verification_codes"> | string;
    expires_at?: Prisma.DateTimeFilter<"verification_codes"> | Date | string;
    verified?: Prisma.BoolFilter<"verification_codes"> | boolean;
    verified_at?: Prisma.DateTimeNullableFilter<"verification_codes"> | Date | string | null;
    created_at?: Prisma.DateTimeNullableFilter<"verification_codes"> | Date | string | null;
    updated_at?: Prisma.DateTimeNullableFilter<"verification_codes"> | Date | string | null;
    users?: Prisma.XOR<Prisma.UsersScalarRelationFilter, Prisma.usersWhereInput>;
};
export type verification_codesOrderByWithRelationInput = {
    id?: Prisma.SortOrder;
    user_id?: Prisma.SortOrder;
    type?: Prisma.SortOrder;
    code?: Prisma.SortOrder;
    contact?: Prisma.SortOrder;
    expires_at?: Prisma.SortOrder;
    verified?: Prisma.SortOrder;
    verified_at?: Prisma.SortOrderInput | Prisma.SortOrder;
    created_at?: Prisma.SortOrderInput | Prisma.SortOrder;
    updated_at?: Prisma.SortOrderInput | Prisma.SortOrder;
    users?: Prisma.usersOrderByWithRelationInput;
    _relevance?: Prisma.verification_codesOrderByRelevanceInput;
};
export type verification_codesWhereUniqueInput = Prisma.AtLeast<{
    id?: bigint | number;
    AND?: Prisma.verification_codesWhereInput | Prisma.verification_codesWhereInput[];
    OR?: Prisma.verification_codesWhereInput[];
    NOT?: Prisma.verification_codesWhereInput | Prisma.verification_codesWhereInput[];
    user_id?: Prisma.BigIntFilter<"verification_codes"> | bigint | number;
    type?: Prisma.Enumverification_codes_typeFilter<"verification_codes"> | $Enums.verification_codes_type;
    code?: Prisma.StringFilter<"verification_codes"> | string;
    contact?: Prisma.StringFilter<"verification_codes"> | string;
    expires_at?: Prisma.DateTimeFilter<"verification_codes"> | Date | string;
    verified?: Prisma.BoolFilter<"verification_codes"> | boolean;
    verified_at?: Prisma.DateTimeNullableFilter<"verification_codes"> | Date | string | null;
    created_at?: Prisma.DateTimeNullableFilter<"verification_codes"> | Date | string | null;
    updated_at?: Prisma.DateTimeNullableFilter<"verification_codes"> | Date | string | null;
    users?: Prisma.XOR<Prisma.UsersScalarRelationFilter, Prisma.usersWhereInput>;
}, "id">;
export type verification_codesOrderByWithAggregationInput = {
    id?: Prisma.SortOrder;
    user_id?: Prisma.SortOrder;
    type?: Prisma.SortOrder;
    code?: Prisma.SortOrder;
    contact?: Prisma.SortOrder;
    expires_at?: Prisma.SortOrder;
    verified?: Prisma.SortOrder;
    verified_at?: Prisma.SortOrderInput | Prisma.SortOrder;
    created_at?: Prisma.SortOrderInput | Prisma.SortOrder;
    updated_at?: Prisma.SortOrderInput | Prisma.SortOrder;
    _count?: Prisma.verification_codesCountOrderByAggregateInput;
    _avg?: Prisma.verification_codesAvgOrderByAggregateInput;
    _max?: Prisma.verification_codesMaxOrderByAggregateInput;
    _min?: Prisma.verification_codesMinOrderByAggregateInput;
    _sum?: Prisma.verification_codesSumOrderByAggregateInput;
};
export type verification_codesScalarWhereWithAggregatesInput = {
    AND?: Prisma.verification_codesScalarWhereWithAggregatesInput | Prisma.verification_codesScalarWhereWithAggregatesInput[];
    OR?: Prisma.verification_codesScalarWhereWithAggregatesInput[];
    NOT?: Prisma.verification_codesScalarWhereWithAggregatesInput | Prisma.verification_codesScalarWhereWithAggregatesInput[];
    id?: Prisma.BigIntWithAggregatesFilter<"verification_codes"> | bigint | number;
    user_id?: Prisma.BigIntWithAggregatesFilter<"verification_codes"> | bigint | number;
    type?: Prisma.Enumverification_codes_typeWithAggregatesFilter<"verification_codes"> | $Enums.verification_codes_type;
    code?: Prisma.StringWithAggregatesFilter<"verification_codes"> | string;
    contact?: Prisma.StringWithAggregatesFilter<"verification_codes"> | string;
    expires_at?: Prisma.DateTimeWithAggregatesFilter<"verification_codes"> | Date | string;
    verified?: Prisma.BoolWithAggregatesFilter<"verification_codes"> | boolean;
    verified_at?: Prisma.DateTimeNullableWithAggregatesFilter<"verification_codes"> | Date | string | null;
    created_at?: Prisma.DateTimeNullableWithAggregatesFilter<"verification_codes"> | Date | string | null;
    updated_at?: Prisma.DateTimeNullableWithAggregatesFilter<"verification_codes"> | Date | string | null;
};
export type verification_codesCreateInput = {
    id?: bigint | number;
    type: $Enums.verification_codes_type;
    code: string;
    contact: string;
    expires_at: Date | string;
    verified?: boolean;
    verified_at?: Date | string | null;
    created_at?: Date | string | null;
    updated_at?: Date | string | null;
    users: Prisma.usersCreateNestedOneWithoutVerification_codesInput;
};
export type verification_codesUncheckedCreateInput = {
    id?: bigint | number;
    user_id: bigint | number;
    type: $Enums.verification_codes_type;
    code: string;
    contact: string;
    expires_at: Date | string;
    verified?: boolean;
    verified_at?: Date | string | null;
    created_at?: Date | string | null;
    updated_at?: Date | string | null;
};
export type verification_codesUpdateInput = {
    id?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    type?: Prisma.Enumverification_codes_typeFieldUpdateOperationsInput | $Enums.verification_codes_type;
    code?: Prisma.StringFieldUpdateOperationsInput | string;
    contact?: Prisma.StringFieldUpdateOperationsInput | string;
    expires_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    verified?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    verified_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    created_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    updated_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    users?: Prisma.usersUpdateOneRequiredWithoutVerification_codesNestedInput;
};
export type verification_codesUncheckedUpdateInput = {
    id?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    user_id?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    type?: Prisma.Enumverification_codes_typeFieldUpdateOperationsInput | $Enums.verification_codes_type;
    code?: Prisma.StringFieldUpdateOperationsInput | string;
    contact?: Prisma.StringFieldUpdateOperationsInput | string;
    expires_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    verified?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    verified_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    created_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    updated_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
};
export type verification_codesCreateManyInput = {
    id?: bigint | number;
    user_id: bigint | number;
    type: $Enums.verification_codes_type;
    code: string;
    contact: string;
    expires_at: Date | string;
    verified?: boolean;
    verified_at?: Date | string | null;
    created_at?: Date | string | null;
    updated_at?: Date | string | null;
};
export type verification_codesUpdateManyMutationInput = {
    id?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    type?: Prisma.Enumverification_codes_typeFieldUpdateOperationsInput | $Enums.verification_codes_type;
    code?: Prisma.StringFieldUpdateOperationsInput | string;
    contact?: Prisma.StringFieldUpdateOperationsInput | string;
    expires_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    verified?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    verified_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    created_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    updated_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
};
export type verification_codesUncheckedUpdateManyInput = {
    id?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    user_id?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    type?: Prisma.Enumverification_codes_typeFieldUpdateOperationsInput | $Enums.verification_codes_type;
    code?: Prisma.StringFieldUpdateOperationsInput | string;
    contact?: Prisma.StringFieldUpdateOperationsInput | string;
    expires_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    verified?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    verified_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    created_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    updated_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
};
export type Verification_codesListRelationFilter = {
    every?: Prisma.verification_codesWhereInput;
    some?: Prisma.verification_codesWhereInput;
    none?: Prisma.verification_codesWhereInput;
};
export type verification_codesOrderByRelationAggregateInput = {
    _count?: Prisma.SortOrder;
};
export type verification_codesOrderByRelevanceInput = {
    fields: Prisma.verification_codesOrderByRelevanceFieldEnum | Prisma.verification_codesOrderByRelevanceFieldEnum[];
    sort: Prisma.SortOrder;
    search: string;
};
export type verification_codesCountOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    user_id?: Prisma.SortOrder;
    type?: Prisma.SortOrder;
    code?: Prisma.SortOrder;
    contact?: Prisma.SortOrder;
    expires_at?: Prisma.SortOrder;
    verified?: Prisma.SortOrder;
    verified_at?: Prisma.SortOrder;
    created_at?: Prisma.SortOrder;
    updated_at?: Prisma.SortOrder;
};
export type verification_codesAvgOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    user_id?: Prisma.SortOrder;
};
export type verification_codesMaxOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    user_id?: Prisma.SortOrder;
    type?: Prisma.SortOrder;
    code?: Prisma.SortOrder;
    contact?: Prisma.SortOrder;
    expires_at?: Prisma.SortOrder;
    verified?: Prisma.SortOrder;
    verified_at?: Prisma.SortOrder;
    created_at?: Prisma.SortOrder;
    updated_at?: Prisma.SortOrder;
};
export type verification_codesMinOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    user_id?: Prisma.SortOrder;
    type?: Prisma.SortOrder;
    code?: Prisma.SortOrder;
    contact?: Prisma.SortOrder;
    expires_at?: Prisma.SortOrder;
    verified?: Prisma.SortOrder;
    verified_at?: Prisma.SortOrder;
    created_at?: Prisma.SortOrder;
    updated_at?: Prisma.SortOrder;
};
export type verification_codesSumOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    user_id?: Prisma.SortOrder;
};
export type verification_codesCreateNestedManyWithoutUsersInput = {
    create?: Prisma.XOR<Prisma.verification_codesCreateWithoutUsersInput, Prisma.verification_codesUncheckedCreateWithoutUsersInput> | Prisma.verification_codesCreateWithoutUsersInput[] | Prisma.verification_codesUncheckedCreateWithoutUsersInput[];
    connectOrCreate?: Prisma.verification_codesCreateOrConnectWithoutUsersInput | Prisma.verification_codesCreateOrConnectWithoutUsersInput[];
    createMany?: Prisma.verification_codesCreateManyUsersInputEnvelope;
    connect?: Prisma.verification_codesWhereUniqueInput | Prisma.verification_codesWhereUniqueInput[];
};
export type verification_codesUncheckedCreateNestedManyWithoutUsersInput = {
    create?: Prisma.XOR<Prisma.verification_codesCreateWithoutUsersInput, Prisma.verification_codesUncheckedCreateWithoutUsersInput> | Prisma.verification_codesCreateWithoutUsersInput[] | Prisma.verification_codesUncheckedCreateWithoutUsersInput[];
    connectOrCreate?: Prisma.verification_codesCreateOrConnectWithoutUsersInput | Prisma.verification_codesCreateOrConnectWithoutUsersInput[];
    createMany?: Prisma.verification_codesCreateManyUsersInputEnvelope;
    connect?: Prisma.verification_codesWhereUniqueInput | Prisma.verification_codesWhereUniqueInput[];
};
export type verification_codesUpdateManyWithoutUsersNestedInput = {
    create?: Prisma.XOR<Prisma.verification_codesCreateWithoutUsersInput, Prisma.verification_codesUncheckedCreateWithoutUsersInput> | Prisma.verification_codesCreateWithoutUsersInput[] | Prisma.verification_codesUncheckedCreateWithoutUsersInput[];
    connectOrCreate?: Prisma.verification_codesCreateOrConnectWithoutUsersInput | Prisma.verification_codesCreateOrConnectWithoutUsersInput[];
    upsert?: Prisma.verification_codesUpsertWithWhereUniqueWithoutUsersInput | Prisma.verification_codesUpsertWithWhereUniqueWithoutUsersInput[];
    createMany?: Prisma.verification_codesCreateManyUsersInputEnvelope;
    set?: Prisma.verification_codesWhereUniqueInput | Prisma.verification_codesWhereUniqueInput[];
    disconnect?: Prisma.verification_codesWhereUniqueInput | Prisma.verification_codesWhereUniqueInput[];
    delete?: Prisma.verification_codesWhereUniqueInput | Prisma.verification_codesWhereUniqueInput[];
    connect?: Prisma.verification_codesWhereUniqueInput | Prisma.verification_codesWhereUniqueInput[];
    update?: Prisma.verification_codesUpdateWithWhereUniqueWithoutUsersInput | Prisma.verification_codesUpdateWithWhereUniqueWithoutUsersInput[];
    updateMany?: Prisma.verification_codesUpdateManyWithWhereWithoutUsersInput | Prisma.verification_codesUpdateManyWithWhereWithoutUsersInput[];
    deleteMany?: Prisma.verification_codesScalarWhereInput | Prisma.verification_codesScalarWhereInput[];
};
export type verification_codesUncheckedUpdateManyWithoutUsersNestedInput = {
    create?: Prisma.XOR<Prisma.verification_codesCreateWithoutUsersInput, Prisma.verification_codesUncheckedCreateWithoutUsersInput> | Prisma.verification_codesCreateWithoutUsersInput[] | Prisma.verification_codesUncheckedCreateWithoutUsersInput[];
    connectOrCreate?: Prisma.verification_codesCreateOrConnectWithoutUsersInput | Prisma.verification_codesCreateOrConnectWithoutUsersInput[];
    upsert?: Prisma.verification_codesUpsertWithWhereUniqueWithoutUsersInput | Prisma.verification_codesUpsertWithWhereUniqueWithoutUsersInput[];
    createMany?: Prisma.verification_codesCreateManyUsersInputEnvelope;
    set?: Prisma.verification_codesWhereUniqueInput | Prisma.verification_codesWhereUniqueInput[];
    disconnect?: Prisma.verification_codesWhereUniqueInput | Prisma.verification_codesWhereUniqueInput[];
    delete?: Prisma.verification_codesWhereUniqueInput | Prisma.verification_codesWhereUniqueInput[];
    connect?: Prisma.verification_codesWhereUniqueInput | Prisma.verification_codesWhereUniqueInput[];
    update?: Prisma.verification_codesUpdateWithWhereUniqueWithoutUsersInput | Prisma.verification_codesUpdateWithWhereUniqueWithoutUsersInput[];
    updateMany?: Prisma.verification_codesUpdateManyWithWhereWithoutUsersInput | Prisma.verification_codesUpdateManyWithWhereWithoutUsersInput[];
    deleteMany?: Prisma.verification_codesScalarWhereInput | Prisma.verification_codesScalarWhereInput[];
};
export type Enumverification_codes_typeFieldUpdateOperationsInput = {
    set?: $Enums.verification_codes_type;
};
export type verification_codesCreateWithoutUsersInput = {
    id?: bigint | number;
    type: $Enums.verification_codes_type;
    code: string;
    contact: string;
    expires_at: Date | string;
    verified?: boolean;
    verified_at?: Date | string | null;
    created_at?: Date | string | null;
    updated_at?: Date | string | null;
};
export type verification_codesUncheckedCreateWithoutUsersInput = {
    id?: bigint | number;
    type: $Enums.verification_codes_type;
    code: string;
    contact: string;
    expires_at: Date | string;
    verified?: boolean;
    verified_at?: Date | string | null;
    created_at?: Date | string | null;
    updated_at?: Date | string | null;
};
export type verification_codesCreateOrConnectWithoutUsersInput = {
    where: Prisma.verification_codesWhereUniqueInput;
    create: Prisma.XOR<Prisma.verification_codesCreateWithoutUsersInput, Prisma.verification_codesUncheckedCreateWithoutUsersInput>;
};
export type verification_codesCreateManyUsersInputEnvelope = {
    data: Prisma.verification_codesCreateManyUsersInput | Prisma.verification_codesCreateManyUsersInput[];
    skipDuplicates?: boolean;
};
export type verification_codesUpsertWithWhereUniqueWithoutUsersInput = {
    where: Prisma.verification_codesWhereUniqueInput;
    update: Prisma.XOR<Prisma.verification_codesUpdateWithoutUsersInput, Prisma.verification_codesUncheckedUpdateWithoutUsersInput>;
    create: Prisma.XOR<Prisma.verification_codesCreateWithoutUsersInput, Prisma.verification_codesUncheckedCreateWithoutUsersInput>;
};
export type verification_codesUpdateWithWhereUniqueWithoutUsersInput = {
    where: Prisma.verification_codesWhereUniqueInput;
    data: Prisma.XOR<Prisma.verification_codesUpdateWithoutUsersInput, Prisma.verification_codesUncheckedUpdateWithoutUsersInput>;
};
export type verification_codesUpdateManyWithWhereWithoutUsersInput = {
    where: Prisma.verification_codesScalarWhereInput;
    data: Prisma.XOR<Prisma.verification_codesUpdateManyMutationInput, Prisma.verification_codesUncheckedUpdateManyWithoutUsersInput>;
};
export type verification_codesScalarWhereInput = {
    AND?: Prisma.verification_codesScalarWhereInput | Prisma.verification_codesScalarWhereInput[];
    OR?: Prisma.verification_codesScalarWhereInput[];
    NOT?: Prisma.verification_codesScalarWhereInput | Prisma.verification_codesScalarWhereInput[];
    id?: Prisma.BigIntFilter<"verification_codes"> | bigint | number;
    user_id?: Prisma.BigIntFilter<"verification_codes"> | bigint | number;
    type?: Prisma.Enumverification_codes_typeFilter<"verification_codes"> | $Enums.verification_codes_type;
    code?: Prisma.StringFilter<"verification_codes"> | string;
    contact?: Prisma.StringFilter<"verification_codes"> | string;
    expires_at?: Prisma.DateTimeFilter<"verification_codes"> | Date | string;
    verified?: Prisma.BoolFilter<"verification_codes"> | boolean;
    verified_at?: Prisma.DateTimeNullableFilter<"verification_codes"> | Date | string | null;
    created_at?: Prisma.DateTimeNullableFilter<"verification_codes"> | Date | string | null;
    updated_at?: Prisma.DateTimeNullableFilter<"verification_codes"> | Date | string | null;
};
export type verification_codesCreateManyUsersInput = {
    id?: bigint | number;
    type: $Enums.verification_codes_type;
    code: string;
    contact: string;
    expires_at: Date | string;
    verified?: boolean;
    verified_at?: Date | string | null;
    created_at?: Date | string | null;
    updated_at?: Date | string | null;
};
export type verification_codesUpdateWithoutUsersInput = {
    id?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    type?: Prisma.Enumverification_codes_typeFieldUpdateOperationsInput | $Enums.verification_codes_type;
    code?: Prisma.StringFieldUpdateOperationsInput | string;
    contact?: Prisma.StringFieldUpdateOperationsInput | string;
    expires_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    verified?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    verified_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    created_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    updated_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
};
export type verification_codesUncheckedUpdateWithoutUsersInput = {
    id?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    type?: Prisma.Enumverification_codes_typeFieldUpdateOperationsInput | $Enums.verification_codes_type;
    code?: Prisma.StringFieldUpdateOperationsInput | string;
    contact?: Prisma.StringFieldUpdateOperationsInput | string;
    expires_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    verified?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    verified_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    created_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    updated_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
};
export type verification_codesUncheckedUpdateManyWithoutUsersInput = {
    id?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    type?: Prisma.Enumverification_codes_typeFieldUpdateOperationsInput | $Enums.verification_codes_type;
    code?: Prisma.StringFieldUpdateOperationsInput | string;
    contact?: Prisma.StringFieldUpdateOperationsInput | string;
    expires_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    verified?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    verified_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    created_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    updated_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
};
export type verification_codesSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    user_id?: boolean;
    type?: boolean;
    code?: boolean;
    contact?: boolean;
    expires_at?: boolean;
    verified?: boolean;
    verified_at?: boolean;
    created_at?: boolean;
    updated_at?: boolean;
    users?: boolean | Prisma.usersDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["verification_codes"]>;
export type verification_codesSelectScalar = {
    id?: boolean;
    user_id?: boolean;
    type?: boolean;
    code?: boolean;
    contact?: boolean;
    expires_at?: boolean;
    verified?: boolean;
    verified_at?: boolean;
    created_at?: boolean;
    updated_at?: boolean;
};
export type verification_codesOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "user_id" | "type" | "code" | "contact" | "expires_at" | "verified" | "verified_at" | "created_at" | "updated_at", ExtArgs["result"]["verification_codes"]>;
export type verification_codesInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    users?: boolean | Prisma.usersDefaultArgs<ExtArgs>;
};
export type $verification_codesPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "verification_codes";
    objects: {
        users: Prisma.$usersPayload<ExtArgs>;
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id: bigint;
        user_id: bigint;
        type: $Enums.verification_codes_type;
        code: string;
        contact: string;
        expires_at: Date;
        verified: boolean;
        verified_at: Date | null;
        created_at: Date | null;
        updated_at: Date | null;
    }, ExtArgs["result"]["verification_codes"]>;
    composites: {};
};
export type verification_codesGetPayload<S extends boolean | null | undefined | verification_codesDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$verification_codesPayload, S>;
export type verification_codesCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<verification_codesFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: Verification_codesCountAggregateInputType | true;
};
export interface verification_codesDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['verification_codes'];
        meta: {
            name: 'verification_codes';
        };
    };
    findUnique<T extends verification_codesFindUniqueArgs>(args: Prisma.SelectSubset<T, verification_codesFindUniqueArgs<ExtArgs>>): Prisma.Prisma__verification_codesClient<runtime.Types.Result.GetResult<Prisma.$verification_codesPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findUniqueOrThrow<T extends verification_codesFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, verification_codesFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__verification_codesClient<runtime.Types.Result.GetResult<Prisma.$verification_codesPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findFirst<T extends verification_codesFindFirstArgs>(args?: Prisma.SelectSubset<T, verification_codesFindFirstArgs<ExtArgs>>): Prisma.Prisma__verification_codesClient<runtime.Types.Result.GetResult<Prisma.$verification_codesPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findFirstOrThrow<T extends verification_codesFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, verification_codesFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__verification_codesClient<runtime.Types.Result.GetResult<Prisma.$verification_codesPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findMany<T extends verification_codesFindManyArgs>(args?: Prisma.SelectSubset<T, verification_codesFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$verification_codesPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    create<T extends verification_codesCreateArgs>(args: Prisma.SelectSubset<T, verification_codesCreateArgs<ExtArgs>>): Prisma.Prisma__verification_codesClient<runtime.Types.Result.GetResult<Prisma.$verification_codesPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    createMany<T extends verification_codesCreateManyArgs>(args?: Prisma.SelectSubset<T, verification_codesCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    delete<T extends verification_codesDeleteArgs>(args: Prisma.SelectSubset<T, verification_codesDeleteArgs<ExtArgs>>): Prisma.Prisma__verification_codesClient<runtime.Types.Result.GetResult<Prisma.$verification_codesPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    update<T extends verification_codesUpdateArgs>(args: Prisma.SelectSubset<T, verification_codesUpdateArgs<ExtArgs>>): Prisma.Prisma__verification_codesClient<runtime.Types.Result.GetResult<Prisma.$verification_codesPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    deleteMany<T extends verification_codesDeleteManyArgs>(args?: Prisma.SelectSubset<T, verification_codesDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateMany<T extends verification_codesUpdateManyArgs>(args: Prisma.SelectSubset<T, verification_codesUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    upsert<T extends verification_codesUpsertArgs>(args: Prisma.SelectSubset<T, verification_codesUpsertArgs<ExtArgs>>): Prisma.Prisma__verification_codesClient<runtime.Types.Result.GetResult<Prisma.$verification_codesPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    count<T extends verification_codesCountArgs>(args?: Prisma.Subset<T, verification_codesCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], Verification_codesCountAggregateOutputType> : number>;
    aggregate<T extends Verification_codesAggregateArgs>(args: Prisma.Subset<T, Verification_codesAggregateArgs>): Prisma.PrismaPromise<GetVerification_codesAggregateType<T>>;
    groupBy<T extends verification_codesGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: verification_codesGroupByArgs['orderBy'];
    } : {
        orderBy?: verification_codesGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, verification_codesGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetVerification_codesGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    readonly fields: verification_codesFieldRefs;
}
export interface Prisma__verification_codesClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    users<T extends Prisma.usersDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.usersDefaultArgs<ExtArgs>>): Prisma.Prisma__usersClient<runtime.Types.Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): runtime.Types.Utils.JsPromise<TResult1 | TResult2>;
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): runtime.Types.Utils.JsPromise<T | TResult>;
    finally(onfinally?: (() => void) | undefined | null): runtime.Types.Utils.JsPromise<T>;
}
export interface verification_codesFieldRefs {
    readonly id: Prisma.FieldRef<"verification_codes", 'BigInt'>;
    readonly user_id: Prisma.FieldRef<"verification_codes", 'BigInt'>;
    readonly type: Prisma.FieldRef<"verification_codes", 'verification_codes_type'>;
    readonly code: Prisma.FieldRef<"verification_codes", 'String'>;
    readonly contact: Prisma.FieldRef<"verification_codes", 'String'>;
    readonly expires_at: Prisma.FieldRef<"verification_codes", 'DateTime'>;
    readonly verified: Prisma.FieldRef<"verification_codes", 'Boolean'>;
    readonly verified_at: Prisma.FieldRef<"verification_codes", 'DateTime'>;
    readonly created_at: Prisma.FieldRef<"verification_codes", 'DateTime'>;
    readonly updated_at: Prisma.FieldRef<"verification_codes", 'DateTime'>;
}
export type verification_codesFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.verification_codesSelect<ExtArgs> | null;
    omit?: Prisma.verification_codesOmit<ExtArgs> | null;
    include?: Prisma.verification_codesInclude<ExtArgs> | null;
    where: Prisma.verification_codesWhereUniqueInput;
};
export type verification_codesFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.verification_codesSelect<ExtArgs> | null;
    omit?: Prisma.verification_codesOmit<ExtArgs> | null;
    include?: Prisma.verification_codesInclude<ExtArgs> | null;
    where: Prisma.verification_codesWhereUniqueInput;
};
export type verification_codesFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.verification_codesSelect<ExtArgs> | null;
    omit?: Prisma.verification_codesOmit<ExtArgs> | null;
    include?: Prisma.verification_codesInclude<ExtArgs> | null;
    where?: Prisma.verification_codesWhereInput;
    orderBy?: Prisma.verification_codesOrderByWithRelationInput | Prisma.verification_codesOrderByWithRelationInput[];
    cursor?: Prisma.verification_codesWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.Verification_codesScalarFieldEnum | Prisma.Verification_codesScalarFieldEnum[];
};
export type verification_codesFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.verification_codesSelect<ExtArgs> | null;
    omit?: Prisma.verification_codesOmit<ExtArgs> | null;
    include?: Prisma.verification_codesInclude<ExtArgs> | null;
    where?: Prisma.verification_codesWhereInput;
    orderBy?: Prisma.verification_codesOrderByWithRelationInput | Prisma.verification_codesOrderByWithRelationInput[];
    cursor?: Prisma.verification_codesWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.Verification_codesScalarFieldEnum | Prisma.Verification_codesScalarFieldEnum[];
};
export type verification_codesFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.verification_codesSelect<ExtArgs> | null;
    omit?: Prisma.verification_codesOmit<ExtArgs> | null;
    include?: Prisma.verification_codesInclude<ExtArgs> | null;
    where?: Prisma.verification_codesWhereInput;
    orderBy?: Prisma.verification_codesOrderByWithRelationInput | Prisma.verification_codesOrderByWithRelationInput[];
    cursor?: Prisma.verification_codesWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.Verification_codesScalarFieldEnum | Prisma.Verification_codesScalarFieldEnum[];
};
export type verification_codesCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.verification_codesSelect<ExtArgs> | null;
    omit?: Prisma.verification_codesOmit<ExtArgs> | null;
    include?: Prisma.verification_codesInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.verification_codesCreateInput, Prisma.verification_codesUncheckedCreateInput>;
};
export type verification_codesCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.verification_codesCreateManyInput | Prisma.verification_codesCreateManyInput[];
    skipDuplicates?: boolean;
};
export type verification_codesUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.verification_codesSelect<ExtArgs> | null;
    omit?: Prisma.verification_codesOmit<ExtArgs> | null;
    include?: Prisma.verification_codesInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.verification_codesUpdateInput, Prisma.verification_codesUncheckedUpdateInput>;
    where: Prisma.verification_codesWhereUniqueInput;
};
export type verification_codesUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.XOR<Prisma.verification_codesUpdateManyMutationInput, Prisma.verification_codesUncheckedUpdateManyInput>;
    where?: Prisma.verification_codesWhereInput;
    limit?: number;
};
export type verification_codesUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.verification_codesSelect<ExtArgs> | null;
    omit?: Prisma.verification_codesOmit<ExtArgs> | null;
    include?: Prisma.verification_codesInclude<ExtArgs> | null;
    where: Prisma.verification_codesWhereUniqueInput;
    create: Prisma.XOR<Prisma.verification_codesCreateInput, Prisma.verification_codesUncheckedCreateInput>;
    update: Prisma.XOR<Prisma.verification_codesUpdateInput, Prisma.verification_codesUncheckedUpdateInput>;
};
export type verification_codesDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.verification_codesSelect<ExtArgs> | null;
    omit?: Prisma.verification_codesOmit<ExtArgs> | null;
    include?: Prisma.verification_codesInclude<ExtArgs> | null;
    where: Prisma.verification_codesWhereUniqueInput;
};
export type verification_codesDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.verification_codesWhereInput;
    limit?: number;
};
export type verification_codesDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.verification_codesSelect<ExtArgs> | null;
    omit?: Prisma.verification_codesOmit<ExtArgs> | null;
    include?: Prisma.verification_codesInclude<ExtArgs> | null;
};
export {};
