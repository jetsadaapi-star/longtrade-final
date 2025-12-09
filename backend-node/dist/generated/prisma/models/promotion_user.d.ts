import type * as runtime from "@prisma/client/runtime/client";
import type * as Prisma from "../internal/prismaNamespace.js";
export type promotion_userModel = runtime.Types.Result.DefaultSelection<Prisma.$promotion_userPayload>;
export type AggregatePromotion_user = {
    _count: Promotion_userCountAggregateOutputType | null;
    _avg: Promotion_userAvgAggregateOutputType | null;
    _sum: Promotion_userSumAggregateOutputType | null;
    _min: Promotion_userMinAggregateOutputType | null;
    _max: Promotion_userMaxAggregateOutputType | null;
};
export type Promotion_userAvgAggregateOutputType = {
    id: number | null;
    user_id: number | null;
    promotion_id: number | null;
    usage_count: number | null;
    discount_amount: runtime.Decimal | null;
    order_amount: runtime.Decimal | null;
};
export type Promotion_userSumAggregateOutputType = {
    id: bigint | null;
    user_id: bigint | null;
    promotion_id: bigint | null;
    usage_count: number | null;
    discount_amount: runtime.Decimal | null;
    order_amount: runtime.Decimal | null;
};
export type Promotion_userMinAggregateOutputType = {
    id: bigint | null;
    user_id: bigint | null;
    promotion_id: bigint | null;
    usage_count: number | null;
    discount_amount: runtime.Decimal | null;
    order_amount: runtime.Decimal | null;
    used_at: Date | null;
    created_at: Date | null;
    updated_at: Date | null;
};
export type Promotion_userMaxAggregateOutputType = {
    id: bigint | null;
    user_id: bigint | null;
    promotion_id: bigint | null;
    usage_count: number | null;
    discount_amount: runtime.Decimal | null;
    order_amount: runtime.Decimal | null;
    used_at: Date | null;
    created_at: Date | null;
    updated_at: Date | null;
};
export type Promotion_userCountAggregateOutputType = {
    id: number;
    user_id: number;
    promotion_id: number;
    usage_count: number;
    discount_amount: number;
    order_amount: number;
    used_at: number;
    created_at: number;
    updated_at: number;
    _all: number;
};
export type Promotion_userAvgAggregateInputType = {
    id?: true;
    user_id?: true;
    promotion_id?: true;
    usage_count?: true;
    discount_amount?: true;
    order_amount?: true;
};
export type Promotion_userSumAggregateInputType = {
    id?: true;
    user_id?: true;
    promotion_id?: true;
    usage_count?: true;
    discount_amount?: true;
    order_amount?: true;
};
export type Promotion_userMinAggregateInputType = {
    id?: true;
    user_id?: true;
    promotion_id?: true;
    usage_count?: true;
    discount_amount?: true;
    order_amount?: true;
    used_at?: true;
    created_at?: true;
    updated_at?: true;
};
export type Promotion_userMaxAggregateInputType = {
    id?: true;
    user_id?: true;
    promotion_id?: true;
    usage_count?: true;
    discount_amount?: true;
    order_amount?: true;
    used_at?: true;
    created_at?: true;
    updated_at?: true;
};
export type Promotion_userCountAggregateInputType = {
    id?: true;
    user_id?: true;
    promotion_id?: true;
    usage_count?: true;
    discount_amount?: true;
    order_amount?: true;
    used_at?: true;
    created_at?: true;
    updated_at?: true;
    _all?: true;
};
export type Promotion_userAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.promotion_userWhereInput;
    orderBy?: Prisma.promotion_userOrderByWithRelationInput | Prisma.promotion_userOrderByWithRelationInput[];
    cursor?: Prisma.promotion_userWhereUniqueInput;
    take?: number;
    skip?: number;
    _count?: true | Promotion_userCountAggregateInputType;
    _avg?: Promotion_userAvgAggregateInputType;
    _sum?: Promotion_userSumAggregateInputType;
    _min?: Promotion_userMinAggregateInputType;
    _max?: Promotion_userMaxAggregateInputType;
};
export type GetPromotion_userAggregateType<T extends Promotion_userAggregateArgs> = {
    [P in keyof T & keyof AggregatePromotion_user]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregatePromotion_user[P]> : Prisma.GetScalarType<T[P], AggregatePromotion_user[P]>;
};
export type promotion_userGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.promotion_userWhereInput;
    orderBy?: Prisma.promotion_userOrderByWithAggregationInput | Prisma.promotion_userOrderByWithAggregationInput[];
    by: Prisma.Promotion_userScalarFieldEnum[] | Prisma.Promotion_userScalarFieldEnum;
    having?: Prisma.promotion_userScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: Promotion_userCountAggregateInputType | true;
    _avg?: Promotion_userAvgAggregateInputType;
    _sum?: Promotion_userSumAggregateInputType;
    _min?: Promotion_userMinAggregateInputType;
    _max?: Promotion_userMaxAggregateInputType;
};
export type Promotion_userGroupByOutputType = {
    id: bigint;
    user_id: bigint;
    promotion_id: bigint;
    usage_count: number;
    discount_amount: runtime.Decimal | null;
    order_amount: runtime.Decimal | null;
    used_at: Date;
    created_at: Date | null;
    updated_at: Date | null;
    _count: Promotion_userCountAggregateOutputType | null;
    _avg: Promotion_userAvgAggregateOutputType | null;
    _sum: Promotion_userSumAggregateOutputType | null;
    _min: Promotion_userMinAggregateOutputType | null;
    _max: Promotion_userMaxAggregateOutputType | null;
};
type GetPromotion_userGroupByPayload<T extends promotion_userGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<Promotion_userGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof Promotion_userGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], Promotion_userGroupByOutputType[P]> : Prisma.GetScalarType<T[P], Promotion_userGroupByOutputType[P]>;
}>>;
export type promotion_userWhereInput = {
    AND?: Prisma.promotion_userWhereInput | Prisma.promotion_userWhereInput[];
    OR?: Prisma.promotion_userWhereInput[];
    NOT?: Prisma.promotion_userWhereInput | Prisma.promotion_userWhereInput[];
    id?: Prisma.BigIntFilter<"promotion_user"> | bigint | number;
    user_id?: Prisma.BigIntFilter<"promotion_user"> | bigint | number;
    promotion_id?: Prisma.BigIntFilter<"promotion_user"> | bigint | number;
    usage_count?: Prisma.IntFilter<"promotion_user"> | number;
    discount_amount?: Prisma.DecimalNullableFilter<"promotion_user"> | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    order_amount?: Prisma.DecimalNullableFilter<"promotion_user"> | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    used_at?: Prisma.DateTimeFilter<"promotion_user"> | Date | string;
    created_at?: Prisma.DateTimeNullableFilter<"promotion_user"> | Date | string | null;
    updated_at?: Prisma.DateTimeNullableFilter<"promotion_user"> | Date | string | null;
    promotions?: Prisma.XOR<Prisma.PromotionsScalarRelationFilter, Prisma.promotionsWhereInput>;
    users?: Prisma.XOR<Prisma.UsersScalarRelationFilter, Prisma.usersWhereInput>;
};
export type promotion_userOrderByWithRelationInput = {
    id?: Prisma.SortOrder;
    user_id?: Prisma.SortOrder;
    promotion_id?: Prisma.SortOrder;
    usage_count?: Prisma.SortOrder;
    discount_amount?: Prisma.SortOrderInput | Prisma.SortOrder;
    order_amount?: Prisma.SortOrderInput | Prisma.SortOrder;
    used_at?: Prisma.SortOrder;
    created_at?: Prisma.SortOrderInput | Prisma.SortOrder;
    updated_at?: Prisma.SortOrderInput | Prisma.SortOrder;
    promotions?: Prisma.promotionsOrderByWithRelationInput;
    users?: Prisma.usersOrderByWithRelationInput;
};
export type promotion_userWhereUniqueInput = Prisma.AtLeast<{
    id?: bigint | number;
    AND?: Prisma.promotion_userWhereInput | Prisma.promotion_userWhereInput[];
    OR?: Prisma.promotion_userWhereInput[];
    NOT?: Prisma.promotion_userWhereInput | Prisma.promotion_userWhereInput[];
    user_id?: Prisma.BigIntFilter<"promotion_user"> | bigint | number;
    promotion_id?: Prisma.BigIntFilter<"promotion_user"> | bigint | number;
    usage_count?: Prisma.IntFilter<"promotion_user"> | number;
    discount_amount?: Prisma.DecimalNullableFilter<"promotion_user"> | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    order_amount?: Prisma.DecimalNullableFilter<"promotion_user"> | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    used_at?: Prisma.DateTimeFilter<"promotion_user"> | Date | string;
    created_at?: Prisma.DateTimeNullableFilter<"promotion_user"> | Date | string | null;
    updated_at?: Prisma.DateTimeNullableFilter<"promotion_user"> | Date | string | null;
    promotions?: Prisma.XOR<Prisma.PromotionsScalarRelationFilter, Prisma.promotionsWhereInput>;
    users?: Prisma.XOR<Prisma.UsersScalarRelationFilter, Prisma.usersWhereInput>;
}, "id">;
export type promotion_userOrderByWithAggregationInput = {
    id?: Prisma.SortOrder;
    user_id?: Prisma.SortOrder;
    promotion_id?: Prisma.SortOrder;
    usage_count?: Prisma.SortOrder;
    discount_amount?: Prisma.SortOrderInput | Prisma.SortOrder;
    order_amount?: Prisma.SortOrderInput | Prisma.SortOrder;
    used_at?: Prisma.SortOrder;
    created_at?: Prisma.SortOrderInput | Prisma.SortOrder;
    updated_at?: Prisma.SortOrderInput | Prisma.SortOrder;
    _count?: Prisma.promotion_userCountOrderByAggregateInput;
    _avg?: Prisma.promotion_userAvgOrderByAggregateInput;
    _max?: Prisma.promotion_userMaxOrderByAggregateInput;
    _min?: Prisma.promotion_userMinOrderByAggregateInput;
    _sum?: Prisma.promotion_userSumOrderByAggregateInput;
};
export type promotion_userScalarWhereWithAggregatesInput = {
    AND?: Prisma.promotion_userScalarWhereWithAggregatesInput | Prisma.promotion_userScalarWhereWithAggregatesInput[];
    OR?: Prisma.promotion_userScalarWhereWithAggregatesInput[];
    NOT?: Prisma.promotion_userScalarWhereWithAggregatesInput | Prisma.promotion_userScalarWhereWithAggregatesInput[];
    id?: Prisma.BigIntWithAggregatesFilter<"promotion_user"> | bigint | number;
    user_id?: Prisma.BigIntWithAggregatesFilter<"promotion_user"> | bigint | number;
    promotion_id?: Prisma.BigIntWithAggregatesFilter<"promotion_user"> | bigint | number;
    usage_count?: Prisma.IntWithAggregatesFilter<"promotion_user"> | number;
    discount_amount?: Prisma.DecimalNullableWithAggregatesFilter<"promotion_user"> | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    order_amount?: Prisma.DecimalNullableWithAggregatesFilter<"promotion_user"> | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    used_at?: Prisma.DateTimeWithAggregatesFilter<"promotion_user"> | Date | string;
    created_at?: Prisma.DateTimeNullableWithAggregatesFilter<"promotion_user"> | Date | string | null;
    updated_at?: Prisma.DateTimeNullableWithAggregatesFilter<"promotion_user"> | Date | string | null;
};
export type promotion_userCreateInput = {
    id?: bigint | number;
    usage_count?: number;
    discount_amount?: runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    order_amount?: runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    used_at: Date | string;
    created_at?: Date | string | null;
    updated_at?: Date | string | null;
    promotions: Prisma.promotionsCreateNestedOneWithoutPromotion_userInput;
    users: Prisma.usersCreateNestedOneWithoutPromotion_userInput;
};
export type promotion_userUncheckedCreateInput = {
    id?: bigint | number;
    user_id: bigint | number;
    promotion_id: bigint | number;
    usage_count?: number;
    discount_amount?: runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    order_amount?: runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    used_at: Date | string;
    created_at?: Date | string | null;
    updated_at?: Date | string | null;
};
export type promotion_userUpdateInput = {
    id?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    usage_count?: Prisma.IntFieldUpdateOperationsInput | number;
    discount_amount?: Prisma.NullableDecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    order_amount?: Prisma.NullableDecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    used_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    created_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    updated_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    promotions?: Prisma.promotionsUpdateOneRequiredWithoutPromotion_userNestedInput;
    users?: Prisma.usersUpdateOneRequiredWithoutPromotion_userNestedInput;
};
export type promotion_userUncheckedUpdateInput = {
    id?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    user_id?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    promotion_id?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    usage_count?: Prisma.IntFieldUpdateOperationsInput | number;
    discount_amount?: Prisma.NullableDecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    order_amount?: Prisma.NullableDecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    used_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    created_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    updated_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
};
export type promotion_userCreateManyInput = {
    id?: bigint | number;
    user_id: bigint | number;
    promotion_id: bigint | number;
    usage_count?: number;
    discount_amount?: runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    order_amount?: runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    used_at: Date | string;
    created_at?: Date | string | null;
    updated_at?: Date | string | null;
};
export type promotion_userUpdateManyMutationInput = {
    id?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    usage_count?: Prisma.IntFieldUpdateOperationsInput | number;
    discount_amount?: Prisma.NullableDecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    order_amount?: Prisma.NullableDecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    used_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    created_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    updated_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
};
export type promotion_userUncheckedUpdateManyInput = {
    id?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    user_id?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    promotion_id?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    usage_count?: Prisma.IntFieldUpdateOperationsInput | number;
    discount_amount?: Prisma.NullableDecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    order_amount?: Prisma.NullableDecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    used_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    created_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    updated_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
};
export type promotion_userCountOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    user_id?: Prisma.SortOrder;
    promotion_id?: Prisma.SortOrder;
    usage_count?: Prisma.SortOrder;
    discount_amount?: Prisma.SortOrder;
    order_amount?: Prisma.SortOrder;
    used_at?: Prisma.SortOrder;
    created_at?: Prisma.SortOrder;
    updated_at?: Prisma.SortOrder;
};
export type promotion_userAvgOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    user_id?: Prisma.SortOrder;
    promotion_id?: Prisma.SortOrder;
    usage_count?: Prisma.SortOrder;
    discount_amount?: Prisma.SortOrder;
    order_amount?: Prisma.SortOrder;
};
export type promotion_userMaxOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    user_id?: Prisma.SortOrder;
    promotion_id?: Prisma.SortOrder;
    usage_count?: Prisma.SortOrder;
    discount_amount?: Prisma.SortOrder;
    order_amount?: Prisma.SortOrder;
    used_at?: Prisma.SortOrder;
    created_at?: Prisma.SortOrder;
    updated_at?: Prisma.SortOrder;
};
export type promotion_userMinOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    user_id?: Prisma.SortOrder;
    promotion_id?: Prisma.SortOrder;
    usage_count?: Prisma.SortOrder;
    discount_amount?: Prisma.SortOrder;
    order_amount?: Prisma.SortOrder;
    used_at?: Prisma.SortOrder;
    created_at?: Prisma.SortOrder;
    updated_at?: Prisma.SortOrder;
};
export type promotion_userSumOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    user_id?: Prisma.SortOrder;
    promotion_id?: Prisma.SortOrder;
    usage_count?: Prisma.SortOrder;
    discount_amount?: Prisma.SortOrder;
    order_amount?: Prisma.SortOrder;
};
export type Promotion_userListRelationFilter = {
    every?: Prisma.promotion_userWhereInput;
    some?: Prisma.promotion_userWhereInput;
    none?: Prisma.promotion_userWhereInput;
};
export type promotion_userOrderByRelationAggregateInput = {
    _count?: Prisma.SortOrder;
};
export type promotion_userCreateNestedManyWithoutPromotionsInput = {
    create?: Prisma.XOR<Prisma.promotion_userCreateWithoutPromotionsInput, Prisma.promotion_userUncheckedCreateWithoutPromotionsInput> | Prisma.promotion_userCreateWithoutPromotionsInput[] | Prisma.promotion_userUncheckedCreateWithoutPromotionsInput[];
    connectOrCreate?: Prisma.promotion_userCreateOrConnectWithoutPromotionsInput | Prisma.promotion_userCreateOrConnectWithoutPromotionsInput[];
    createMany?: Prisma.promotion_userCreateManyPromotionsInputEnvelope;
    connect?: Prisma.promotion_userWhereUniqueInput | Prisma.promotion_userWhereUniqueInput[];
};
export type promotion_userUncheckedCreateNestedManyWithoutPromotionsInput = {
    create?: Prisma.XOR<Prisma.promotion_userCreateWithoutPromotionsInput, Prisma.promotion_userUncheckedCreateWithoutPromotionsInput> | Prisma.promotion_userCreateWithoutPromotionsInput[] | Prisma.promotion_userUncheckedCreateWithoutPromotionsInput[];
    connectOrCreate?: Prisma.promotion_userCreateOrConnectWithoutPromotionsInput | Prisma.promotion_userCreateOrConnectWithoutPromotionsInput[];
    createMany?: Prisma.promotion_userCreateManyPromotionsInputEnvelope;
    connect?: Prisma.promotion_userWhereUniqueInput | Prisma.promotion_userWhereUniqueInput[];
};
export type promotion_userUpdateManyWithoutPromotionsNestedInput = {
    create?: Prisma.XOR<Prisma.promotion_userCreateWithoutPromotionsInput, Prisma.promotion_userUncheckedCreateWithoutPromotionsInput> | Prisma.promotion_userCreateWithoutPromotionsInput[] | Prisma.promotion_userUncheckedCreateWithoutPromotionsInput[];
    connectOrCreate?: Prisma.promotion_userCreateOrConnectWithoutPromotionsInput | Prisma.promotion_userCreateOrConnectWithoutPromotionsInput[];
    upsert?: Prisma.promotion_userUpsertWithWhereUniqueWithoutPromotionsInput | Prisma.promotion_userUpsertWithWhereUniqueWithoutPromotionsInput[];
    createMany?: Prisma.promotion_userCreateManyPromotionsInputEnvelope;
    set?: Prisma.promotion_userWhereUniqueInput | Prisma.promotion_userWhereUniqueInput[];
    disconnect?: Prisma.promotion_userWhereUniqueInput | Prisma.promotion_userWhereUniqueInput[];
    delete?: Prisma.promotion_userWhereUniqueInput | Prisma.promotion_userWhereUniqueInput[];
    connect?: Prisma.promotion_userWhereUniqueInput | Prisma.promotion_userWhereUniqueInput[];
    update?: Prisma.promotion_userUpdateWithWhereUniqueWithoutPromotionsInput | Prisma.promotion_userUpdateWithWhereUniqueWithoutPromotionsInput[];
    updateMany?: Prisma.promotion_userUpdateManyWithWhereWithoutPromotionsInput | Prisma.promotion_userUpdateManyWithWhereWithoutPromotionsInput[];
    deleteMany?: Prisma.promotion_userScalarWhereInput | Prisma.promotion_userScalarWhereInput[];
};
export type promotion_userUncheckedUpdateManyWithoutPromotionsNestedInput = {
    create?: Prisma.XOR<Prisma.promotion_userCreateWithoutPromotionsInput, Prisma.promotion_userUncheckedCreateWithoutPromotionsInput> | Prisma.promotion_userCreateWithoutPromotionsInput[] | Prisma.promotion_userUncheckedCreateWithoutPromotionsInput[];
    connectOrCreate?: Prisma.promotion_userCreateOrConnectWithoutPromotionsInput | Prisma.promotion_userCreateOrConnectWithoutPromotionsInput[];
    upsert?: Prisma.promotion_userUpsertWithWhereUniqueWithoutPromotionsInput | Prisma.promotion_userUpsertWithWhereUniqueWithoutPromotionsInput[];
    createMany?: Prisma.promotion_userCreateManyPromotionsInputEnvelope;
    set?: Prisma.promotion_userWhereUniqueInput | Prisma.promotion_userWhereUniqueInput[];
    disconnect?: Prisma.promotion_userWhereUniqueInput | Prisma.promotion_userWhereUniqueInput[];
    delete?: Prisma.promotion_userWhereUniqueInput | Prisma.promotion_userWhereUniqueInput[];
    connect?: Prisma.promotion_userWhereUniqueInput | Prisma.promotion_userWhereUniqueInput[];
    update?: Prisma.promotion_userUpdateWithWhereUniqueWithoutPromotionsInput | Prisma.promotion_userUpdateWithWhereUniqueWithoutPromotionsInput[];
    updateMany?: Prisma.promotion_userUpdateManyWithWhereWithoutPromotionsInput | Prisma.promotion_userUpdateManyWithWhereWithoutPromotionsInput[];
    deleteMany?: Prisma.promotion_userScalarWhereInput | Prisma.promotion_userScalarWhereInput[];
};
export type promotion_userCreateNestedManyWithoutUsersInput = {
    create?: Prisma.XOR<Prisma.promotion_userCreateWithoutUsersInput, Prisma.promotion_userUncheckedCreateWithoutUsersInput> | Prisma.promotion_userCreateWithoutUsersInput[] | Prisma.promotion_userUncheckedCreateWithoutUsersInput[];
    connectOrCreate?: Prisma.promotion_userCreateOrConnectWithoutUsersInput | Prisma.promotion_userCreateOrConnectWithoutUsersInput[];
    createMany?: Prisma.promotion_userCreateManyUsersInputEnvelope;
    connect?: Prisma.promotion_userWhereUniqueInput | Prisma.promotion_userWhereUniqueInput[];
};
export type promotion_userUncheckedCreateNestedManyWithoutUsersInput = {
    create?: Prisma.XOR<Prisma.promotion_userCreateWithoutUsersInput, Prisma.promotion_userUncheckedCreateWithoutUsersInput> | Prisma.promotion_userCreateWithoutUsersInput[] | Prisma.promotion_userUncheckedCreateWithoutUsersInput[];
    connectOrCreate?: Prisma.promotion_userCreateOrConnectWithoutUsersInput | Prisma.promotion_userCreateOrConnectWithoutUsersInput[];
    createMany?: Prisma.promotion_userCreateManyUsersInputEnvelope;
    connect?: Prisma.promotion_userWhereUniqueInput | Prisma.promotion_userWhereUniqueInput[];
};
export type promotion_userUpdateManyWithoutUsersNestedInput = {
    create?: Prisma.XOR<Prisma.promotion_userCreateWithoutUsersInput, Prisma.promotion_userUncheckedCreateWithoutUsersInput> | Prisma.promotion_userCreateWithoutUsersInput[] | Prisma.promotion_userUncheckedCreateWithoutUsersInput[];
    connectOrCreate?: Prisma.promotion_userCreateOrConnectWithoutUsersInput | Prisma.promotion_userCreateOrConnectWithoutUsersInput[];
    upsert?: Prisma.promotion_userUpsertWithWhereUniqueWithoutUsersInput | Prisma.promotion_userUpsertWithWhereUniqueWithoutUsersInput[];
    createMany?: Prisma.promotion_userCreateManyUsersInputEnvelope;
    set?: Prisma.promotion_userWhereUniqueInput | Prisma.promotion_userWhereUniqueInput[];
    disconnect?: Prisma.promotion_userWhereUniqueInput | Prisma.promotion_userWhereUniqueInput[];
    delete?: Prisma.promotion_userWhereUniqueInput | Prisma.promotion_userWhereUniqueInput[];
    connect?: Prisma.promotion_userWhereUniqueInput | Prisma.promotion_userWhereUniqueInput[];
    update?: Prisma.promotion_userUpdateWithWhereUniqueWithoutUsersInput | Prisma.promotion_userUpdateWithWhereUniqueWithoutUsersInput[];
    updateMany?: Prisma.promotion_userUpdateManyWithWhereWithoutUsersInput | Prisma.promotion_userUpdateManyWithWhereWithoutUsersInput[];
    deleteMany?: Prisma.promotion_userScalarWhereInput | Prisma.promotion_userScalarWhereInput[];
};
export type promotion_userUncheckedUpdateManyWithoutUsersNestedInput = {
    create?: Prisma.XOR<Prisma.promotion_userCreateWithoutUsersInput, Prisma.promotion_userUncheckedCreateWithoutUsersInput> | Prisma.promotion_userCreateWithoutUsersInput[] | Prisma.promotion_userUncheckedCreateWithoutUsersInput[];
    connectOrCreate?: Prisma.promotion_userCreateOrConnectWithoutUsersInput | Prisma.promotion_userCreateOrConnectWithoutUsersInput[];
    upsert?: Prisma.promotion_userUpsertWithWhereUniqueWithoutUsersInput | Prisma.promotion_userUpsertWithWhereUniqueWithoutUsersInput[];
    createMany?: Prisma.promotion_userCreateManyUsersInputEnvelope;
    set?: Prisma.promotion_userWhereUniqueInput | Prisma.promotion_userWhereUniqueInput[];
    disconnect?: Prisma.promotion_userWhereUniqueInput | Prisma.promotion_userWhereUniqueInput[];
    delete?: Prisma.promotion_userWhereUniqueInput | Prisma.promotion_userWhereUniqueInput[];
    connect?: Prisma.promotion_userWhereUniqueInput | Prisma.promotion_userWhereUniqueInput[];
    update?: Prisma.promotion_userUpdateWithWhereUniqueWithoutUsersInput | Prisma.promotion_userUpdateWithWhereUniqueWithoutUsersInput[];
    updateMany?: Prisma.promotion_userUpdateManyWithWhereWithoutUsersInput | Prisma.promotion_userUpdateManyWithWhereWithoutUsersInput[];
    deleteMany?: Prisma.promotion_userScalarWhereInput | Prisma.promotion_userScalarWhereInput[];
};
export type promotion_userCreateWithoutPromotionsInput = {
    id?: bigint | number;
    usage_count?: number;
    discount_amount?: runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    order_amount?: runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    used_at: Date | string;
    created_at?: Date | string | null;
    updated_at?: Date | string | null;
    users: Prisma.usersCreateNestedOneWithoutPromotion_userInput;
};
export type promotion_userUncheckedCreateWithoutPromotionsInput = {
    id?: bigint | number;
    user_id: bigint | number;
    usage_count?: number;
    discount_amount?: runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    order_amount?: runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    used_at: Date | string;
    created_at?: Date | string | null;
    updated_at?: Date | string | null;
};
export type promotion_userCreateOrConnectWithoutPromotionsInput = {
    where: Prisma.promotion_userWhereUniqueInput;
    create: Prisma.XOR<Prisma.promotion_userCreateWithoutPromotionsInput, Prisma.promotion_userUncheckedCreateWithoutPromotionsInput>;
};
export type promotion_userCreateManyPromotionsInputEnvelope = {
    data: Prisma.promotion_userCreateManyPromotionsInput | Prisma.promotion_userCreateManyPromotionsInput[];
    skipDuplicates?: boolean;
};
export type promotion_userUpsertWithWhereUniqueWithoutPromotionsInput = {
    where: Prisma.promotion_userWhereUniqueInput;
    update: Prisma.XOR<Prisma.promotion_userUpdateWithoutPromotionsInput, Prisma.promotion_userUncheckedUpdateWithoutPromotionsInput>;
    create: Prisma.XOR<Prisma.promotion_userCreateWithoutPromotionsInput, Prisma.promotion_userUncheckedCreateWithoutPromotionsInput>;
};
export type promotion_userUpdateWithWhereUniqueWithoutPromotionsInput = {
    where: Prisma.promotion_userWhereUniqueInput;
    data: Prisma.XOR<Prisma.promotion_userUpdateWithoutPromotionsInput, Prisma.promotion_userUncheckedUpdateWithoutPromotionsInput>;
};
export type promotion_userUpdateManyWithWhereWithoutPromotionsInput = {
    where: Prisma.promotion_userScalarWhereInput;
    data: Prisma.XOR<Prisma.promotion_userUpdateManyMutationInput, Prisma.promotion_userUncheckedUpdateManyWithoutPromotionsInput>;
};
export type promotion_userScalarWhereInput = {
    AND?: Prisma.promotion_userScalarWhereInput | Prisma.promotion_userScalarWhereInput[];
    OR?: Prisma.promotion_userScalarWhereInput[];
    NOT?: Prisma.promotion_userScalarWhereInput | Prisma.promotion_userScalarWhereInput[];
    id?: Prisma.BigIntFilter<"promotion_user"> | bigint | number;
    user_id?: Prisma.BigIntFilter<"promotion_user"> | bigint | number;
    promotion_id?: Prisma.BigIntFilter<"promotion_user"> | bigint | number;
    usage_count?: Prisma.IntFilter<"promotion_user"> | number;
    discount_amount?: Prisma.DecimalNullableFilter<"promotion_user"> | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    order_amount?: Prisma.DecimalNullableFilter<"promotion_user"> | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    used_at?: Prisma.DateTimeFilter<"promotion_user"> | Date | string;
    created_at?: Prisma.DateTimeNullableFilter<"promotion_user"> | Date | string | null;
    updated_at?: Prisma.DateTimeNullableFilter<"promotion_user"> | Date | string | null;
};
export type promotion_userCreateWithoutUsersInput = {
    id?: bigint | number;
    usage_count?: number;
    discount_amount?: runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    order_amount?: runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    used_at: Date | string;
    created_at?: Date | string | null;
    updated_at?: Date | string | null;
    promotions: Prisma.promotionsCreateNestedOneWithoutPromotion_userInput;
};
export type promotion_userUncheckedCreateWithoutUsersInput = {
    id?: bigint | number;
    promotion_id: bigint | number;
    usage_count?: number;
    discount_amount?: runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    order_amount?: runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    used_at: Date | string;
    created_at?: Date | string | null;
    updated_at?: Date | string | null;
};
export type promotion_userCreateOrConnectWithoutUsersInput = {
    where: Prisma.promotion_userWhereUniqueInput;
    create: Prisma.XOR<Prisma.promotion_userCreateWithoutUsersInput, Prisma.promotion_userUncheckedCreateWithoutUsersInput>;
};
export type promotion_userCreateManyUsersInputEnvelope = {
    data: Prisma.promotion_userCreateManyUsersInput | Prisma.promotion_userCreateManyUsersInput[];
    skipDuplicates?: boolean;
};
export type promotion_userUpsertWithWhereUniqueWithoutUsersInput = {
    where: Prisma.promotion_userWhereUniqueInput;
    update: Prisma.XOR<Prisma.promotion_userUpdateWithoutUsersInput, Prisma.promotion_userUncheckedUpdateWithoutUsersInput>;
    create: Prisma.XOR<Prisma.promotion_userCreateWithoutUsersInput, Prisma.promotion_userUncheckedCreateWithoutUsersInput>;
};
export type promotion_userUpdateWithWhereUniqueWithoutUsersInput = {
    where: Prisma.promotion_userWhereUniqueInput;
    data: Prisma.XOR<Prisma.promotion_userUpdateWithoutUsersInput, Prisma.promotion_userUncheckedUpdateWithoutUsersInput>;
};
export type promotion_userUpdateManyWithWhereWithoutUsersInput = {
    where: Prisma.promotion_userScalarWhereInput;
    data: Prisma.XOR<Prisma.promotion_userUpdateManyMutationInput, Prisma.promotion_userUncheckedUpdateManyWithoutUsersInput>;
};
export type promotion_userCreateManyPromotionsInput = {
    id?: bigint | number;
    user_id: bigint | number;
    usage_count?: number;
    discount_amount?: runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    order_amount?: runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    used_at: Date | string;
    created_at?: Date | string | null;
    updated_at?: Date | string | null;
};
export type promotion_userUpdateWithoutPromotionsInput = {
    id?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    usage_count?: Prisma.IntFieldUpdateOperationsInput | number;
    discount_amount?: Prisma.NullableDecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    order_amount?: Prisma.NullableDecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    used_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    created_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    updated_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    users?: Prisma.usersUpdateOneRequiredWithoutPromotion_userNestedInput;
};
export type promotion_userUncheckedUpdateWithoutPromotionsInput = {
    id?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    user_id?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    usage_count?: Prisma.IntFieldUpdateOperationsInput | number;
    discount_amount?: Prisma.NullableDecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    order_amount?: Prisma.NullableDecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    used_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    created_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    updated_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
};
export type promotion_userUncheckedUpdateManyWithoutPromotionsInput = {
    id?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    user_id?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    usage_count?: Prisma.IntFieldUpdateOperationsInput | number;
    discount_amount?: Prisma.NullableDecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    order_amount?: Prisma.NullableDecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    used_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    created_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    updated_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
};
export type promotion_userCreateManyUsersInput = {
    id?: bigint | number;
    promotion_id: bigint | number;
    usage_count?: number;
    discount_amount?: runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    order_amount?: runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    used_at: Date | string;
    created_at?: Date | string | null;
    updated_at?: Date | string | null;
};
export type promotion_userUpdateWithoutUsersInput = {
    id?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    usage_count?: Prisma.IntFieldUpdateOperationsInput | number;
    discount_amount?: Prisma.NullableDecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    order_amount?: Prisma.NullableDecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    used_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    created_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    updated_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    promotions?: Prisma.promotionsUpdateOneRequiredWithoutPromotion_userNestedInput;
};
export type promotion_userUncheckedUpdateWithoutUsersInput = {
    id?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    promotion_id?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    usage_count?: Prisma.IntFieldUpdateOperationsInput | number;
    discount_amount?: Prisma.NullableDecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    order_amount?: Prisma.NullableDecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    used_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    created_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    updated_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
};
export type promotion_userUncheckedUpdateManyWithoutUsersInput = {
    id?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    promotion_id?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    usage_count?: Prisma.IntFieldUpdateOperationsInput | number;
    discount_amount?: Prisma.NullableDecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    order_amount?: Prisma.NullableDecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    used_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    created_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    updated_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
};
export type promotion_userSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    user_id?: boolean;
    promotion_id?: boolean;
    usage_count?: boolean;
    discount_amount?: boolean;
    order_amount?: boolean;
    used_at?: boolean;
    created_at?: boolean;
    updated_at?: boolean;
    promotions?: boolean | Prisma.promotionsDefaultArgs<ExtArgs>;
    users?: boolean | Prisma.usersDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["promotion_user"]>;
export type promotion_userSelectScalar = {
    id?: boolean;
    user_id?: boolean;
    promotion_id?: boolean;
    usage_count?: boolean;
    discount_amount?: boolean;
    order_amount?: boolean;
    used_at?: boolean;
    created_at?: boolean;
    updated_at?: boolean;
};
export type promotion_userOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "user_id" | "promotion_id" | "usage_count" | "discount_amount" | "order_amount" | "used_at" | "created_at" | "updated_at", ExtArgs["result"]["promotion_user"]>;
export type promotion_userInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    promotions?: boolean | Prisma.promotionsDefaultArgs<ExtArgs>;
    users?: boolean | Prisma.usersDefaultArgs<ExtArgs>;
};
export type $promotion_userPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "promotion_user";
    objects: {
        promotions: Prisma.$promotionsPayload<ExtArgs>;
        users: Prisma.$usersPayload<ExtArgs>;
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id: bigint;
        user_id: bigint;
        promotion_id: bigint;
        usage_count: number;
        discount_amount: runtime.Decimal | null;
        order_amount: runtime.Decimal | null;
        used_at: Date;
        created_at: Date | null;
        updated_at: Date | null;
    }, ExtArgs["result"]["promotion_user"]>;
    composites: {};
};
export type promotion_userGetPayload<S extends boolean | null | undefined | promotion_userDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$promotion_userPayload, S>;
export type promotion_userCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<promotion_userFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: Promotion_userCountAggregateInputType | true;
};
export interface promotion_userDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['promotion_user'];
        meta: {
            name: 'promotion_user';
        };
    };
    findUnique<T extends promotion_userFindUniqueArgs>(args: Prisma.SelectSubset<T, promotion_userFindUniqueArgs<ExtArgs>>): Prisma.Prisma__promotion_userClient<runtime.Types.Result.GetResult<Prisma.$promotion_userPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findUniqueOrThrow<T extends promotion_userFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, promotion_userFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__promotion_userClient<runtime.Types.Result.GetResult<Prisma.$promotion_userPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findFirst<T extends promotion_userFindFirstArgs>(args?: Prisma.SelectSubset<T, promotion_userFindFirstArgs<ExtArgs>>): Prisma.Prisma__promotion_userClient<runtime.Types.Result.GetResult<Prisma.$promotion_userPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findFirstOrThrow<T extends promotion_userFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, promotion_userFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__promotion_userClient<runtime.Types.Result.GetResult<Prisma.$promotion_userPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findMany<T extends promotion_userFindManyArgs>(args?: Prisma.SelectSubset<T, promotion_userFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$promotion_userPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    create<T extends promotion_userCreateArgs>(args: Prisma.SelectSubset<T, promotion_userCreateArgs<ExtArgs>>): Prisma.Prisma__promotion_userClient<runtime.Types.Result.GetResult<Prisma.$promotion_userPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    createMany<T extends promotion_userCreateManyArgs>(args?: Prisma.SelectSubset<T, promotion_userCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    delete<T extends promotion_userDeleteArgs>(args: Prisma.SelectSubset<T, promotion_userDeleteArgs<ExtArgs>>): Prisma.Prisma__promotion_userClient<runtime.Types.Result.GetResult<Prisma.$promotion_userPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    update<T extends promotion_userUpdateArgs>(args: Prisma.SelectSubset<T, promotion_userUpdateArgs<ExtArgs>>): Prisma.Prisma__promotion_userClient<runtime.Types.Result.GetResult<Prisma.$promotion_userPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    deleteMany<T extends promotion_userDeleteManyArgs>(args?: Prisma.SelectSubset<T, promotion_userDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateMany<T extends promotion_userUpdateManyArgs>(args: Prisma.SelectSubset<T, promotion_userUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    upsert<T extends promotion_userUpsertArgs>(args: Prisma.SelectSubset<T, promotion_userUpsertArgs<ExtArgs>>): Prisma.Prisma__promotion_userClient<runtime.Types.Result.GetResult<Prisma.$promotion_userPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    count<T extends promotion_userCountArgs>(args?: Prisma.Subset<T, promotion_userCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], Promotion_userCountAggregateOutputType> : number>;
    aggregate<T extends Promotion_userAggregateArgs>(args: Prisma.Subset<T, Promotion_userAggregateArgs>): Prisma.PrismaPromise<GetPromotion_userAggregateType<T>>;
    groupBy<T extends promotion_userGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: promotion_userGroupByArgs['orderBy'];
    } : {
        orderBy?: promotion_userGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, promotion_userGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPromotion_userGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    readonly fields: promotion_userFieldRefs;
}
export interface Prisma__promotion_userClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    promotions<T extends Prisma.promotionsDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.promotionsDefaultArgs<ExtArgs>>): Prisma.Prisma__promotionsClient<runtime.Types.Result.GetResult<Prisma.$promotionsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    users<T extends Prisma.usersDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.usersDefaultArgs<ExtArgs>>): Prisma.Prisma__usersClient<runtime.Types.Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): runtime.Types.Utils.JsPromise<TResult1 | TResult2>;
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): runtime.Types.Utils.JsPromise<T | TResult>;
    finally(onfinally?: (() => void) | undefined | null): runtime.Types.Utils.JsPromise<T>;
}
export interface promotion_userFieldRefs {
    readonly id: Prisma.FieldRef<"promotion_user", 'BigInt'>;
    readonly user_id: Prisma.FieldRef<"promotion_user", 'BigInt'>;
    readonly promotion_id: Prisma.FieldRef<"promotion_user", 'BigInt'>;
    readonly usage_count: Prisma.FieldRef<"promotion_user", 'Int'>;
    readonly discount_amount: Prisma.FieldRef<"promotion_user", 'Decimal'>;
    readonly order_amount: Prisma.FieldRef<"promotion_user", 'Decimal'>;
    readonly used_at: Prisma.FieldRef<"promotion_user", 'DateTime'>;
    readonly created_at: Prisma.FieldRef<"promotion_user", 'DateTime'>;
    readonly updated_at: Prisma.FieldRef<"promotion_user", 'DateTime'>;
}
export type promotion_userFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.promotion_userSelect<ExtArgs> | null;
    omit?: Prisma.promotion_userOmit<ExtArgs> | null;
    include?: Prisma.promotion_userInclude<ExtArgs> | null;
    where: Prisma.promotion_userWhereUniqueInput;
};
export type promotion_userFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.promotion_userSelect<ExtArgs> | null;
    omit?: Prisma.promotion_userOmit<ExtArgs> | null;
    include?: Prisma.promotion_userInclude<ExtArgs> | null;
    where: Prisma.promotion_userWhereUniqueInput;
};
export type promotion_userFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.promotion_userSelect<ExtArgs> | null;
    omit?: Prisma.promotion_userOmit<ExtArgs> | null;
    include?: Prisma.promotion_userInclude<ExtArgs> | null;
    where?: Prisma.promotion_userWhereInput;
    orderBy?: Prisma.promotion_userOrderByWithRelationInput | Prisma.promotion_userOrderByWithRelationInput[];
    cursor?: Prisma.promotion_userWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.Promotion_userScalarFieldEnum | Prisma.Promotion_userScalarFieldEnum[];
};
export type promotion_userFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.promotion_userSelect<ExtArgs> | null;
    omit?: Prisma.promotion_userOmit<ExtArgs> | null;
    include?: Prisma.promotion_userInclude<ExtArgs> | null;
    where?: Prisma.promotion_userWhereInput;
    orderBy?: Prisma.promotion_userOrderByWithRelationInput | Prisma.promotion_userOrderByWithRelationInput[];
    cursor?: Prisma.promotion_userWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.Promotion_userScalarFieldEnum | Prisma.Promotion_userScalarFieldEnum[];
};
export type promotion_userFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.promotion_userSelect<ExtArgs> | null;
    omit?: Prisma.promotion_userOmit<ExtArgs> | null;
    include?: Prisma.promotion_userInclude<ExtArgs> | null;
    where?: Prisma.promotion_userWhereInput;
    orderBy?: Prisma.promotion_userOrderByWithRelationInput | Prisma.promotion_userOrderByWithRelationInput[];
    cursor?: Prisma.promotion_userWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.Promotion_userScalarFieldEnum | Prisma.Promotion_userScalarFieldEnum[];
};
export type promotion_userCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.promotion_userSelect<ExtArgs> | null;
    omit?: Prisma.promotion_userOmit<ExtArgs> | null;
    include?: Prisma.promotion_userInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.promotion_userCreateInput, Prisma.promotion_userUncheckedCreateInput>;
};
export type promotion_userCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.promotion_userCreateManyInput | Prisma.promotion_userCreateManyInput[];
    skipDuplicates?: boolean;
};
export type promotion_userUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.promotion_userSelect<ExtArgs> | null;
    omit?: Prisma.promotion_userOmit<ExtArgs> | null;
    include?: Prisma.promotion_userInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.promotion_userUpdateInput, Prisma.promotion_userUncheckedUpdateInput>;
    where: Prisma.promotion_userWhereUniqueInput;
};
export type promotion_userUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.XOR<Prisma.promotion_userUpdateManyMutationInput, Prisma.promotion_userUncheckedUpdateManyInput>;
    where?: Prisma.promotion_userWhereInput;
    limit?: number;
};
export type promotion_userUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.promotion_userSelect<ExtArgs> | null;
    omit?: Prisma.promotion_userOmit<ExtArgs> | null;
    include?: Prisma.promotion_userInclude<ExtArgs> | null;
    where: Prisma.promotion_userWhereUniqueInput;
    create: Prisma.XOR<Prisma.promotion_userCreateInput, Prisma.promotion_userUncheckedCreateInput>;
    update: Prisma.XOR<Prisma.promotion_userUpdateInput, Prisma.promotion_userUncheckedUpdateInput>;
};
export type promotion_userDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.promotion_userSelect<ExtArgs> | null;
    omit?: Prisma.promotion_userOmit<ExtArgs> | null;
    include?: Prisma.promotion_userInclude<ExtArgs> | null;
    where: Prisma.promotion_userWhereUniqueInput;
};
export type promotion_userDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.promotion_userWhereInput;
    limit?: number;
};
export type promotion_userDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.promotion_userSelect<ExtArgs> | null;
    omit?: Prisma.promotion_userOmit<ExtArgs> | null;
    include?: Prisma.promotion_userInclude<ExtArgs> | null;
};
export {};
