import type * as runtime from "@prisma/client/runtime/client";
import type * as Prisma from "../internal/prismaNamespace.js";
export type reviewsModel = runtime.Types.Result.DefaultSelection<Prisma.$reviewsPayload>;
export type AggregateReviews = {
    _count: ReviewsCountAggregateOutputType | null;
    _avg: ReviewsAvgAggregateOutputType | null;
    _sum: ReviewsSumAggregateOutputType | null;
    _min: ReviewsMinAggregateOutputType | null;
    _max: ReviewsMaxAggregateOutputType | null;
};
export type ReviewsAvgAggregateOutputType = {
    id: number | null;
    reviewable_id: number | null;
    rating: number | null;
    approved_by: number | null;
};
export type ReviewsSumAggregateOutputType = {
    id: bigint | null;
    reviewable_id: bigint | null;
    rating: number | null;
    approved_by: bigint | null;
};
export type ReviewsMinAggregateOutputType = {
    id: bigint | null;
    reviewable_type: string | null;
    reviewable_id: bigint | null;
    user_name: string | null;
    user_email: string | null;
    rating: number | null;
    title: string | null;
    comment: string | null;
    is_approved: boolean | null;
    is_verified_purchase: boolean | null;
    ip_address: string | null;
    approved_at: Date | null;
    approved_by: bigint | null;
    created_at: Date | null;
    updated_at: Date | null;
    deleted_at: Date | null;
};
export type ReviewsMaxAggregateOutputType = {
    id: bigint | null;
    reviewable_type: string | null;
    reviewable_id: bigint | null;
    user_name: string | null;
    user_email: string | null;
    rating: number | null;
    title: string | null;
    comment: string | null;
    is_approved: boolean | null;
    is_verified_purchase: boolean | null;
    ip_address: string | null;
    approved_at: Date | null;
    approved_by: bigint | null;
    created_at: Date | null;
    updated_at: Date | null;
    deleted_at: Date | null;
};
export type ReviewsCountAggregateOutputType = {
    id: number;
    reviewable_type: number;
    reviewable_id: number;
    user_name: number;
    user_email: number;
    rating: number;
    title: number;
    comment: number;
    is_approved: number;
    is_verified_purchase: number;
    ip_address: number;
    approved_at: number;
    approved_by: number;
    created_at: number;
    updated_at: number;
    deleted_at: number;
    _all: number;
};
export type ReviewsAvgAggregateInputType = {
    id?: true;
    reviewable_id?: true;
    rating?: true;
    approved_by?: true;
};
export type ReviewsSumAggregateInputType = {
    id?: true;
    reviewable_id?: true;
    rating?: true;
    approved_by?: true;
};
export type ReviewsMinAggregateInputType = {
    id?: true;
    reviewable_type?: true;
    reviewable_id?: true;
    user_name?: true;
    user_email?: true;
    rating?: true;
    title?: true;
    comment?: true;
    is_approved?: true;
    is_verified_purchase?: true;
    ip_address?: true;
    approved_at?: true;
    approved_by?: true;
    created_at?: true;
    updated_at?: true;
    deleted_at?: true;
};
export type ReviewsMaxAggregateInputType = {
    id?: true;
    reviewable_type?: true;
    reviewable_id?: true;
    user_name?: true;
    user_email?: true;
    rating?: true;
    title?: true;
    comment?: true;
    is_approved?: true;
    is_verified_purchase?: true;
    ip_address?: true;
    approved_at?: true;
    approved_by?: true;
    created_at?: true;
    updated_at?: true;
    deleted_at?: true;
};
export type ReviewsCountAggregateInputType = {
    id?: true;
    reviewable_type?: true;
    reviewable_id?: true;
    user_name?: true;
    user_email?: true;
    rating?: true;
    title?: true;
    comment?: true;
    is_approved?: true;
    is_verified_purchase?: true;
    ip_address?: true;
    approved_at?: true;
    approved_by?: true;
    created_at?: true;
    updated_at?: true;
    deleted_at?: true;
    _all?: true;
};
export type ReviewsAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.reviewsWhereInput;
    orderBy?: Prisma.reviewsOrderByWithRelationInput | Prisma.reviewsOrderByWithRelationInput[];
    cursor?: Prisma.reviewsWhereUniqueInput;
    take?: number;
    skip?: number;
    _count?: true | ReviewsCountAggregateInputType;
    _avg?: ReviewsAvgAggregateInputType;
    _sum?: ReviewsSumAggregateInputType;
    _min?: ReviewsMinAggregateInputType;
    _max?: ReviewsMaxAggregateInputType;
};
export type GetReviewsAggregateType<T extends ReviewsAggregateArgs> = {
    [P in keyof T & keyof AggregateReviews]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateReviews[P]> : Prisma.GetScalarType<T[P], AggregateReviews[P]>;
};
export type reviewsGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.reviewsWhereInput;
    orderBy?: Prisma.reviewsOrderByWithAggregationInput | Prisma.reviewsOrderByWithAggregationInput[];
    by: Prisma.ReviewsScalarFieldEnum[] | Prisma.ReviewsScalarFieldEnum;
    having?: Prisma.reviewsScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: ReviewsCountAggregateInputType | true;
    _avg?: ReviewsAvgAggregateInputType;
    _sum?: ReviewsSumAggregateInputType;
    _min?: ReviewsMinAggregateInputType;
    _max?: ReviewsMaxAggregateInputType;
};
export type ReviewsGroupByOutputType = {
    id: bigint;
    reviewable_type: string;
    reviewable_id: bigint;
    user_name: string;
    user_email: string;
    rating: number;
    title: string | null;
    comment: string | null;
    is_approved: boolean;
    is_verified_purchase: boolean;
    ip_address: string | null;
    approved_at: Date | null;
    approved_by: bigint | null;
    created_at: Date | null;
    updated_at: Date | null;
    deleted_at: Date | null;
    _count: ReviewsCountAggregateOutputType | null;
    _avg: ReviewsAvgAggregateOutputType | null;
    _sum: ReviewsSumAggregateOutputType | null;
    _min: ReviewsMinAggregateOutputType | null;
    _max: ReviewsMaxAggregateOutputType | null;
};
type GetReviewsGroupByPayload<T extends reviewsGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<ReviewsGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof ReviewsGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], ReviewsGroupByOutputType[P]> : Prisma.GetScalarType<T[P], ReviewsGroupByOutputType[P]>;
}>>;
export type reviewsWhereInput = {
    AND?: Prisma.reviewsWhereInput | Prisma.reviewsWhereInput[];
    OR?: Prisma.reviewsWhereInput[];
    NOT?: Prisma.reviewsWhereInput | Prisma.reviewsWhereInput[];
    id?: Prisma.BigIntFilter<"reviews"> | bigint | number;
    reviewable_type?: Prisma.StringFilter<"reviews"> | string;
    reviewable_id?: Prisma.BigIntFilter<"reviews"> | bigint | number;
    user_name?: Prisma.StringFilter<"reviews"> | string;
    user_email?: Prisma.StringFilter<"reviews"> | string;
    rating?: Prisma.IntFilter<"reviews"> | number;
    title?: Prisma.StringNullableFilter<"reviews"> | string | null;
    comment?: Prisma.StringNullableFilter<"reviews"> | string | null;
    is_approved?: Prisma.BoolFilter<"reviews"> | boolean;
    is_verified_purchase?: Prisma.BoolFilter<"reviews"> | boolean;
    ip_address?: Prisma.StringNullableFilter<"reviews"> | string | null;
    approved_at?: Prisma.DateTimeNullableFilter<"reviews"> | Date | string | null;
    approved_by?: Prisma.BigIntNullableFilter<"reviews"> | bigint | number | null;
    created_at?: Prisma.DateTimeNullableFilter<"reviews"> | Date | string | null;
    updated_at?: Prisma.DateTimeNullableFilter<"reviews"> | Date | string | null;
    deleted_at?: Prisma.DateTimeNullableFilter<"reviews"> | Date | string | null;
    users?: Prisma.XOR<Prisma.UsersNullableScalarRelationFilter, Prisma.usersWhereInput> | null;
};
export type reviewsOrderByWithRelationInput = {
    id?: Prisma.SortOrder;
    reviewable_type?: Prisma.SortOrder;
    reviewable_id?: Prisma.SortOrder;
    user_name?: Prisma.SortOrder;
    user_email?: Prisma.SortOrder;
    rating?: Prisma.SortOrder;
    title?: Prisma.SortOrderInput | Prisma.SortOrder;
    comment?: Prisma.SortOrderInput | Prisma.SortOrder;
    is_approved?: Prisma.SortOrder;
    is_verified_purchase?: Prisma.SortOrder;
    ip_address?: Prisma.SortOrderInput | Prisma.SortOrder;
    approved_at?: Prisma.SortOrderInput | Prisma.SortOrder;
    approved_by?: Prisma.SortOrderInput | Prisma.SortOrder;
    created_at?: Prisma.SortOrderInput | Prisma.SortOrder;
    updated_at?: Prisma.SortOrderInput | Prisma.SortOrder;
    deleted_at?: Prisma.SortOrderInput | Prisma.SortOrder;
    users?: Prisma.usersOrderByWithRelationInput;
    _relevance?: Prisma.reviewsOrderByRelevanceInput;
};
export type reviewsWhereUniqueInput = Prisma.AtLeast<{
    id?: bigint | number;
    AND?: Prisma.reviewsWhereInput | Prisma.reviewsWhereInput[];
    OR?: Prisma.reviewsWhereInput[];
    NOT?: Prisma.reviewsWhereInput | Prisma.reviewsWhereInput[];
    reviewable_type?: Prisma.StringFilter<"reviews"> | string;
    reviewable_id?: Prisma.BigIntFilter<"reviews"> | bigint | number;
    user_name?: Prisma.StringFilter<"reviews"> | string;
    user_email?: Prisma.StringFilter<"reviews"> | string;
    rating?: Prisma.IntFilter<"reviews"> | number;
    title?: Prisma.StringNullableFilter<"reviews"> | string | null;
    comment?: Prisma.StringNullableFilter<"reviews"> | string | null;
    is_approved?: Prisma.BoolFilter<"reviews"> | boolean;
    is_verified_purchase?: Prisma.BoolFilter<"reviews"> | boolean;
    ip_address?: Prisma.StringNullableFilter<"reviews"> | string | null;
    approved_at?: Prisma.DateTimeNullableFilter<"reviews"> | Date | string | null;
    approved_by?: Prisma.BigIntNullableFilter<"reviews"> | bigint | number | null;
    created_at?: Prisma.DateTimeNullableFilter<"reviews"> | Date | string | null;
    updated_at?: Prisma.DateTimeNullableFilter<"reviews"> | Date | string | null;
    deleted_at?: Prisma.DateTimeNullableFilter<"reviews"> | Date | string | null;
    users?: Prisma.XOR<Prisma.UsersNullableScalarRelationFilter, Prisma.usersWhereInput> | null;
}, "id">;
export type reviewsOrderByWithAggregationInput = {
    id?: Prisma.SortOrder;
    reviewable_type?: Prisma.SortOrder;
    reviewable_id?: Prisma.SortOrder;
    user_name?: Prisma.SortOrder;
    user_email?: Prisma.SortOrder;
    rating?: Prisma.SortOrder;
    title?: Prisma.SortOrderInput | Prisma.SortOrder;
    comment?: Prisma.SortOrderInput | Prisma.SortOrder;
    is_approved?: Prisma.SortOrder;
    is_verified_purchase?: Prisma.SortOrder;
    ip_address?: Prisma.SortOrderInput | Prisma.SortOrder;
    approved_at?: Prisma.SortOrderInput | Prisma.SortOrder;
    approved_by?: Prisma.SortOrderInput | Prisma.SortOrder;
    created_at?: Prisma.SortOrderInput | Prisma.SortOrder;
    updated_at?: Prisma.SortOrderInput | Prisma.SortOrder;
    deleted_at?: Prisma.SortOrderInput | Prisma.SortOrder;
    _count?: Prisma.reviewsCountOrderByAggregateInput;
    _avg?: Prisma.reviewsAvgOrderByAggregateInput;
    _max?: Prisma.reviewsMaxOrderByAggregateInput;
    _min?: Prisma.reviewsMinOrderByAggregateInput;
    _sum?: Prisma.reviewsSumOrderByAggregateInput;
};
export type reviewsScalarWhereWithAggregatesInput = {
    AND?: Prisma.reviewsScalarWhereWithAggregatesInput | Prisma.reviewsScalarWhereWithAggregatesInput[];
    OR?: Prisma.reviewsScalarWhereWithAggregatesInput[];
    NOT?: Prisma.reviewsScalarWhereWithAggregatesInput | Prisma.reviewsScalarWhereWithAggregatesInput[];
    id?: Prisma.BigIntWithAggregatesFilter<"reviews"> | bigint | number;
    reviewable_type?: Prisma.StringWithAggregatesFilter<"reviews"> | string;
    reviewable_id?: Prisma.BigIntWithAggregatesFilter<"reviews"> | bigint | number;
    user_name?: Prisma.StringWithAggregatesFilter<"reviews"> | string;
    user_email?: Prisma.StringWithAggregatesFilter<"reviews"> | string;
    rating?: Prisma.IntWithAggregatesFilter<"reviews"> | number;
    title?: Prisma.StringNullableWithAggregatesFilter<"reviews"> | string | null;
    comment?: Prisma.StringNullableWithAggregatesFilter<"reviews"> | string | null;
    is_approved?: Prisma.BoolWithAggregatesFilter<"reviews"> | boolean;
    is_verified_purchase?: Prisma.BoolWithAggregatesFilter<"reviews"> | boolean;
    ip_address?: Prisma.StringNullableWithAggregatesFilter<"reviews"> | string | null;
    approved_at?: Prisma.DateTimeNullableWithAggregatesFilter<"reviews"> | Date | string | null;
    approved_by?: Prisma.BigIntNullableWithAggregatesFilter<"reviews"> | bigint | number | null;
    created_at?: Prisma.DateTimeNullableWithAggregatesFilter<"reviews"> | Date | string | null;
    updated_at?: Prisma.DateTimeNullableWithAggregatesFilter<"reviews"> | Date | string | null;
    deleted_at?: Prisma.DateTimeNullableWithAggregatesFilter<"reviews"> | Date | string | null;
};
export type reviewsCreateInput = {
    id?: bigint | number;
    reviewable_type: string;
    reviewable_id: bigint | number;
    user_name: string;
    user_email: string;
    rating: number;
    title?: string | null;
    comment?: string | null;
    is_approved?: boolean;
    is_verified_purchase?: boolean;
    ip_address?: string | null;
    approved_at?: Date | string | null;
    created_at?: Date | string | null;
    updated_at?: Date | string | null;
    deleted_at?: Date | string | null;
    users?: Prisma.usersCreateNestedOneWithoutReviewsInput;
};
export type reviewsUncheckedCreateInput = {
    id?: bigint | number;
    reviewable_type: string;
    reviewable_id: bigint | number;
    user_name: string;
    user_email: string;
    rating: number;
    title?: string | null;
    comment?: string | null;
    is_approved?: boolean;
    is_verified_purchase?: boolean;
    ip_address?: string | null;
    approved_at?: Date | string | null;
    approved_by?: bigint | number | null;
    created_at?: Date | string | null;
    updated_at?: Date | string | null;
    deleted_at?: Date | string | null;
};
export type reviewsUpdateInput = {
    id?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    reviewable_type?: Prisma.StringFieldUpdateOperationsInput | string;
    reviewable_id?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    user_name?: Prisma.StringFieldUpdateOperationsInput | string;
    user_email?: Prisma.StringFieldUpdateOperationsInput | string;
    rating?: Prisma.IntFieldUpdateOperationsInput | number;
    title?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    comment?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    is_approved?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    is_verified_purchase?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    ip_address?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    approved_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    created_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    updated_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    deleted_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    users?: Prisma.usersUpdateOneWithoutReviewsNestedInput;
};
export type reviewsUncheckedUpdateInput = {
    id?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    reviewable_type?: Prisma.StringFieldUpdateOperationsInput | string;
    reviewable_id?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    user_name?: Prisma.StringFieldUpdateOperationsInput | string;
    user_email?: Prisma.StringFieldUpdateOperationsInput | string;
    rating?: Prisma.IntFieldUpdateOperationsInput | number;
    title?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    comment?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    is_approved?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    is_verified_purchase?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    ip_address?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    approved_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    approved_by?: Prisma.NullableBigIntFieldUpdateOperationsInput | bigint | number | null;
    created_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    updated_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    deleted_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
};
export type reviewsCreateManyInput = {
    id?: bigint | number;
    reviewable_type: string;
    reviewable_id: bigint | number;
    user_name: string;
    user_email: string;
    rating: number;
    title?: string | null;
    comment?: string | null;
    is_approved?: boolean;
    is_verified_purchase?: boolean;
    ip_address?: string | null;
    approved_at?: Date | string | null;
    approved_by?: bigint | number | null;
    created_at?: Date | string | null;
    updated_at?: Date | string | null;
    deleted_at?: Date | string | null;
};
export type reviewsUpdateManyMutationInput = {
    id?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    reviewable_type?: Prisma.StringFieldUpdateOperationsInput | string;
    reviewable_id?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    user_name?: Prisma.StringFieldUpdateOperationsInput | string;
    user_email?: Prisma.StringFieldUpdateOperationsInput | string;
    rating?: Prisma.IntFieldUpdateOperationsInput | number;
    title?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    comment?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    is_approved?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    is_verified_purchase?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    ip_address?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    approved_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    created_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    updated_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    deleted_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
};
export type reviewsUncheckedUpdateManyInput = {
    id?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    reviewable_type?: Prisma.StringFieldUpdateOperationsInput | string;
    reviewable_id?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    user_name?: Prisma.StringFieldUpdateOperationsInput | string;
    user_email?: Prisma.StringFieldUpdateOperationsInput | string;
    rating?: Prisma.IntFieldUpdateOperationsInput | number;
    title?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    comment?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    is_approved?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    is_verified_purchase?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    ip_address?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    approved_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    approved_by?: Prisma.NullableBigIntFieldUpdateOperationsInput | bigint | number | null;
    created_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    updated_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    deleted_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
};
export type reviewsOrderByRelevanceInput = {
    fields: Prisma.reviewsOrderByRelevanceFieldEnum | Prisma.reviewsOrderByRelevanceFieldEnum[];
    sort: Prisma.SortOrder;
    search: string;
};
export type reviewsCountOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    reviewable_type?: Prisma.SortOrder;
    reviewable_id?: Prisma.SortOrder;
    user_name?: Prisma.SortOrder;
    user_email?: Prisma.SortOrder;
    rating?: Prisma.SortOrder;
    title?: Prisma.SortOrder;
    comment?: Prisma.SortOrder;
    is_approved?: Prisma.SortOrder;
    is_verified_purchase?: Prisma.SortOrder;
    ip_address?: Prisma.SortOrder;
    approved_at?: Prisma.SortOrder;
    approved_by?: Prisma.SortOrder;
    created_at?: Prisma.SortOrder;
    updated_at?: Prisma.SortOrder;
    deleted_at?: Prisma.SortOrder;
};
export type reviewsAvgOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    reviewable_id?: Prisma.SortOrder;
    rating?: Prisma.SortOrder;
    approved_by?: Prisma.SortOrder;
};
export type reviewsMaxOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    reviewable_type?: Prisma.SortOrder;
    reviewable_id?: Prisma.SortOrder;
    user_name?: Prisma.SortOrder;
    user_email?: Prisma.SortOrder;
    rating?: Prisma.SortOrder;
    title?: Prisma.SortOrder;
    comment?: Prisma.SortOrder;
    is_approved?: Prisma.SortOrder;
    is_verified_purchase?: Prisma.SortOrder;
    ip_address?: Prisma.SortOrder;
    approved_at?: Prisma.SortOrder;
    approved_by?: Prisma.SortOrder;
    created_at?: Prisma.SortOrder;
    updated_at?: Prisma.SortOrder;
    deleted_at?: Prisma.SortOrder;
};
export type reviewsMinOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    reviewable_type?: Prisma.SortOrder;
    reviewable_id?: Prisma.SortOrder;
    user_name?: Prisma.SortOrder;
    user_email?: Prisma.SortOrder;
    rating?: Prisma.SortOrder;
    title?: Prisma.SortOrder;
    comment?: Prisma.SortOrder;
    is_approved?: Prisma.SortOrder;
    is_verified_purchase?: Prisma.SortOrder;
    ip_address?: Prisma.SortOrder;
    approved_at?: Prisma.SortOrder;
    approved_by?: Prisma.SortOrder;
    created_at?: Prisma.SortOrder;
    updated_at?: Prisma.SortOrder;
    deleted_at?: Prisma.SortOrder;
};
export type reviewsSumOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    reviewable_id?: Prisma.SortOrder;
    rating?: Prisma.SortOrder;
    approved_by?: Prisma.SortOrder;
};
export type ReviewsListRelationFilter = {
    every?: Prisma.reviewsWhereInput;
    some?: Prisma.reviewsWhereInput;
    none?: Prisma.reviewsWhereInput;
};
export type reviewsOrderByRelationAggregateInput = {
    _count?: Prisma.SortOrder;
};
export type reviewsCreateNestedManyWithoutUsersInput = {
    create?: Prisma.XOR<Prisma.reviewsCreateWithoutUsersInput, Prisma.reviewsUncheckedCreateWithoutUsersInput> | Prisma.reviewsCreateWithoutUsersInput[] | Prisma.reviewsUncheckedCreateWithoutUsersInput[];
    connectOrCreate?: Prisma.reviewsCreateOrConnectWithoutUsersInput | Prisma.reviewsCreateOrConnectWithoutUsersInput[];
    createMany?: Prisma.reviewsCreateManyUsersInputEnvelope;
    connect?: Prisma.reviewsWhereUniqueInput | Prisma.reviewsWhereUniqueInput[];
};
export type reviewsUncheckedCreateNestedManyWithoutUsersInput = {
    create?: Prisma.XOR<Prisma.reviewsCreateWithoutUsersInput, Prisma.reviewsUncheckedCreateWithoutUsersInput> | Prisma.reviewsCreateWithoutUsersInput[] | Prisma.reviewsUncheckedCreateWithoutUsersInput[];
    connectOrCreate?: Prisma.reviewsCreateOrConnectWithoutUsersInput | Prisma.reviewsCreateOrConnectWithoutUsersInput[];
    createMany?: Prisma.reviewsCreateManyUsersInputEnvelope;
    connect?: Prisma.reviewsWhereUniqueInput | Prisma.reviewsWhereUniqueInput[];
};
export type reviewsUpdateManyWithoutUsersNestedInput = {
    create?: Prisma.XOR<Prisma.reviewsCreateWithoutUsersInput, Prisma.reviewsUncheckedCreateWithoutUsersInput> | Prisma.reviewsCreateWithoutUsersInput[] | Prisma.reviewsUncheckedCreateWithoutUsersInput[];
    connectOrCreate?: Prisma.reviewsCreateOrConnectWithoutUsersInput | Prisma.reviewsCreateOrConnectWithoutUsersInput[];
    upsert?: Prisma.reviewsUpsertWithWhereUniqueWithoutUsersInput | Prisma.reviewsUpsertWithWhereUniqueWithoutUsersInput[];
    createMany?: Prisma.reviewsCreateManyUsersInputEnvelope;
    set?: Prisma.reviewsWhereUniqueInput | Prisma.reviewsWhereUniqueInput[];
    disconnect?: Prisma.reviewsWhereUniqueInput | Prisma.reviewsWhereUniqueInput[];
    delete?: Prisma.reviewsWhereUniqueInput | Prisma.reviewsWhereUniqueInput[];
    connect?: Prisma.reviewsWhereUniqueInput | Prisma.reviewsWhereUniqueInput[];
    update?: Prisma.reviewsUpdateWithWhereUniqueWithoutUsersInput | Prisma.reviewsUpdateWithWhereUniqueWithoutUsersInput[];
    updateMany?: Prisma.reviewsUpdateManyWithWhereWithoutUsersInput | Prisma.reviewsUpdateManyWithWhereWithoutUsersInput[];
    deleteMany?: Prisma.reviewsScalarWhereInput | Prisma.reviewsScalarWhereInput[];
};
export type reviewsUncheckedUpdateManyWithoutUsersNestedInput = {
    create?: Prisma.XOR<Prisma.reviewsCreateWithoutUsersInput, Prisma.reviewsUncheckedCreateWithoutUsersInput> | Prisma.reviewsCreateWithoutUsersInput[] | Prisma.reviewsUncheckedCreateWithoutUsersInput[];
    connectOrCreate?: Prisma.reviewsCreateOrConnectWithoutUsersInput | Prisma.reviewsCreateOrConnectWithoutUsersInput[];
    upsert?: Prisma.reviewsUpsertWithWhereUniqueWithoutUsersInput | Prisma.reviewsUpsertWithWhereUniqueWithoutUsersInput[];
    createMany?: Prisma.reviewsCreateManyUsersInputEnvelope;
    set?: Prisma.reviewsWhereUniqueInput | Prisma.reviewsWhereUniqueInput[];
    disconnect?: Prisma.reviewsWhereUniqueInput | Prisma.reviewsWhereUniqueInput[];
    delete?: Prisma.reviewsWhereUniqueInput | Prisma.reviewsWhereUniqueInput[];
    connect?: Prisma.reviewsWhereUniqueInput | Prisma.reviewsWhereUniqueInput[];
    update?: Prisma.reviewsUpdateWithWhereUniqueWithoutUsersInput | Prisma.reviewsUpdateWithWhereUniqueWithoutUsersInput[];
    updateMany?: Prisma.reviewsUpdateManyWithWhereWithoutUsersInput | Prisma.reviewsUpdateManyWithWhereWithoutUsersInput[];
    deleteMany?: Prisma.reviewsScalarWhereInput | Prisma.reviewsScalarWhereInput[];
};
export type reviewsCreateWithoutUsersInput = {
    id?: bigint | number;
    reviewable_type: string;
    reviewable_id: bigint | number;
    user_name: string;
    user_email: string;
    rating: number;
    title?: string | null;
    comment?: string | null;
    is_approved?: boolean;
    is_verified_purchase?: boolean;
    ip_address?: string | null;
    approved_at?: Date | string | null;
    created_at?: Date | string | null;
    updated_at?: Date | string | null;
    deleted_at?: Date | string | null;
};
export type reviewsUncheckedCreateWithoutUsersInput = {
    id?: bigint | number;
    reviewable_type: string;
    reviewable_id: bigint | number;
    user_name: string;
    user_email: string;
    rating: number;
    title?: string | null;
    comment?: string | null;
    is_approved?: boolean;
    is_verified_purchase?: boolean;
    ip_address?: string | null;
    approved_at?: Date | string | null;
    created_at?: Date | string | null;
    updated_at?: Date | string | null;
    deleted_at?: Date | string | null;
};
export type reviewsCreateOrConnectWithoutUsersInput = {
    where: Prisma.reviewsWhereUniqueInput;
    create: Prisma.XOR<Prisma.reviewsCreateWithoutUsersInput, Prisma.reviewsUncheckedCreateWithoutUsersInput>;
};
export type reviewsCreateManyUsersInputEnvelope = {
    data: Prisma.reviewsCreateManyUsersInput | Prisma.reviewsCreateManyUsersInput[];
    skipDuplicates?: boolean;
};
export type reviewsUpsertWithWhereUniqueWithoutUsersInput = {
    where: Prisma.reviewsWhereUniqueInput;
    update: Prisma.XOR<Prisma.reviewsUpdateWithoutUsersInput, Prisma.reviewsUncheckedUpdateWithoutUsersInput>;
    create: Prisma.XOR<Prisma.reviewsCreateWithoutUsersInput, Prisma.reviewsUncheckedCreateWithoutUsersInput>;
};
export type reviewsUpdateWithWhereUniqueWithoutUsersInput = {
    where: Prisma.reviewsWhereUniqueInput;
    data: Prisma.XOR<Prisma.reviewsUpdateWithoutUsersInput, Prisma.reviewsUncheckedUpdateWithoutUsersInput>;
};
export type reviewsUpdateManyWithWhereWithoutUsersInput = {
    where: Prisma.reviewsScalarWhereInput;
    data: Prisma.XOR<Prisma.reviewsUpdateManyMutationInput, Prisma.reviewsUncheckedUpdateManyWithoutUsersInput>;
};
export type reviewsScalarWhereInput = {
    AND?: Prisma.reviewsScalarWhereInput | Prisma.reviewsScalarWhereInput[];
    OR?: Prisma.reviewsScalarWhereInput[];
    NOT?: Prisma.reviewsScalarWhereInput | Prisma.reviewsScalarWhereInput[];
    id?: Prisma.BigIntFilter<"reviews"> | bigint | number;
    reviewable_type?: Prisma.StringFilter<"reviews"> | string;
    reviewable_id?: Prisma.BigIntFilter<"reviews"> | bigint | number;
    user_name?: Prisma.StringFilter<"reviews"> | string;
    user_email?: Prisma.StringFilter<"reviews"> | string;
    rating?: Prisma.IntFilter<"reviews"> | number;
    title?: Prisma.StringNullableFilter<"reviews"> | string | null;
    comment?: Prisma.StringNullableFilter<"reviews"> | string | null;
    is_approved?: Prisma.BoolFilter<"reviews"> | boolean;
    is_verified_purchase?: Prisma.BoolFilter<"reviews"> | boolean;
    ip_address?: Prisma.StringNullableFilter<"reviews"> | string | null;
    approved_at?: Prisma.DateTimeNullableFilter<"reviews"> | Date | string | null;
    approved_by?: Prisma.BigIntNullableFilter<"reviews"> | bigint | number | null;
    created_at?: Prisma.DateTimeNullableFilter<"reviews"> | Date | string | null;
    updated_at?: Prisma.DateTimeNullableFilter<"reviews"> | Date | string | null;
    deleted_at?: Prisma.DateTimeNullableFilter<"reviews"> | Date | string | null;
};
export type reviewsCreateManyUsersInput = {
    id?: bigint | number;
    reviewable_type: string;
    reviewable_id: bigint | number;
    user_name: string;
    user_email: string;
    rating: number;
    title?: string | null;
    comment?: string | null;
    is_approved?: boolean;
    is_verified_purchase?: boolean;
    ip_address?: string | null;
    approved_at?: Date | string | null;
    created_at?: Date | string | null;
    updated_at?: Date | string | null;
    deleted_at?: Date | string | null;
};
export type reviewsUpdateWithoutUsersInput = {
    id?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    reviewable_type?: Prisma.StringFieldUpdateOperationsInput | string;
    reviewable_id?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    user_name?: Prisma.StringFieldUpdateOperationsInput | string;
    user_email?: Prisma.StringFieldUpdateOperationsInput | string;
    rating?: Prisma.IntFieldUpdateOperationsInput | number;
    title?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    comment?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    is_approved?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    is_verified_purchase?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    ip_address?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    approved_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    created_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    updated_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    deleted_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
};
export type reviewsUncheckedUpdateWithoutUsersInput = {
    id?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    reviewable_type?: Prisma.StringFieldUpdateOperationsInput | string;
    reviewable_id?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    user_name?: Prisma.StringFieldUpdateOperationsInput | string;
    user_email?: Prisma.StringFieldUpdateOperationsInput | string;
    rating?: Prisma.IntFieldUpdateOperationsInput | number;
    title?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    comment?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    is_approved?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    is_verified_purchase?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    ip_address?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    approved_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    created_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    updated_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    deleted_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
};
export type reviewsUncheckedUpdateManyWithoutUsersInput = {
    id?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    reviewable_type?: Prisma.StringFieldUpdateOperationsInput | string;
    reviewable_id?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    user_name?: Prisma.StringFieldUpdateOperationsInput | string;
    user_email?: Prisma.StringFieldUpdateOperationsInput | string;
    rating?: Prisma.IntFieldUpdateOperationsInput | number;
    title?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    comment?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    is_approved?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    is_verified_purchase?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    ip_address?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    approved_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    created_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    updated_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    deleted_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
};
export type reviewsSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    reviewable_type?: boolean;
    reviewable_id?: boolean;
    user_name?: boolean;
    user_email?: boolean;
    rating?: boolean;
    title?: boolean;
    comment?: boolean;
    is_approved?: boolean;
    is_verified_purchase?: boolean;
    ip_address?: boolean;
    approved_at?: boolean;
    approved_by?: boolean;
    created_at?: boolean;
    updated_at?: boolean;
    deleted_at?: boolean;
    users?: boolean | Prisma.reviews$usersArgs<ExtArgs>;
}, ExtArgs["result"]["reviews"]>;
export type reviewsSelectScalar = {
    id?: boolean;
    reviewable_type?: boolean;
    reviewable_id?: boolean;
    user_name?: boolean;
    user_email?: boolean;
    rating?: boolean;
    title?: boolean;
    comment?: boolean;
    is_approved?: boolean;
    is_verified_purchase?: boolean;
    ip_address?: boolean;
    approved_at?: boolean;
    approved_by?: boolean;
    created_at?: boolean;
    updated_at?: boolean;
    deleted_at?: boolean;
};
export type reviewsOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "reviewable_type" | "reviewable_id" | "user_name" | "user_email" | "rating" | "title" | "comment" | "is_approved" | "is_verified_purchase" | "ip_address" | "approved_at" | "approved_by" | "created_at" | "updated_at" | "deleted_at", ExtArgs["result"]["reviews"]>;
export type reviewsInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    users?: boolean | Prisma.reviews$usersArgs<ExtArgs>;
};
export type $reviewsPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "reviews";
    objects: {
        users: Prisma.$usersPayload<ExtArgs> | null;
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id: bigint;
        reviewable_type: string;
        reviewable_id: bigint;
        user_name: string;
        user_email: string;
        rating: number;
        title: string | null;
        comment: string | null;
        is_approved: boolean;
        is_verified_purchase: boolean;
        ip_address: string | null;
        approved_at: Date | null;
        approved_by: bigint | null;
        created_at: Date | null;
        updated_at: Date | null;
        deleted_at: Date | null;
    }, ExtArgs["result"]["reviews"]>;
    composites: {};
};
export type reviewsGetPayload<S extends boolean | null | undefined | reviewsDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$reviewsPayload, S>;
export type reviewsCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<reviewsFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: ReviewsCountAggregateInputType | true;
};
export interface reviewsDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['reviews'];
        meta: {
            name: 'reviews';
        };
    };
    findUnique<T extends reviewsFindUniqueArgs>(args: Prisma.SelectSubset<T, reviewsFindUniqueArgs<ExtArgs>>): Prisma.Prisma__reviewsClient<runtime.Types.Result.GetResult<Prisma.$reviewsPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findUniqueOrThrow<T extends reviewsFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, reviewsFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__reviewsClient<runtime.Types.Result.GetResult<Prisma.$reviewsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findFirst<T extends reviewsFindFirstArgs>(args?: Prisma.SelectSubset<T, reviewsFindFirstArgs<ExtArgs>>): Prisma.Prisma__reviewsClient<runtime.Types.Result.GetResult<Prisma.$reviewsPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findFirstOrThrow<T extends reviewsFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, reviewsFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__reviewsClient<runtime.Types.Result.GetResult<Prisma.$reviewsPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findMany<T extends reviewsFindManyArgs>(args?: Prisma.SelectSubset<T, reviewsFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$reviewsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    create<T extends reviewsCreateArgs>(args: Prisma.SelectSubset<T, reviewsCreateArgs<ExtArgs>>): Prisma.Prisma__reviewsClient<runtime.Types.Result.GetResult<Prisma.$reviewsPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    createMany<T extends reviewsCreateManyArgs>(args?: Prisma.SelectSubset<T, reviewsCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    delete<T extends reviewsDeleteArgs>(args: Prisma.SelectSubset<T, reviewsDeleteArgs<ExtArgs>>): Prisma.Prisma__reviewsClient<runtime.Types.Result.GetResult<Prisma.$reviewsPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    update<T extends reviewsUpdateArgs>(args: Prisma.SelectSubset<T, reviewsUpdateArgs<ExtArgs>>): Prisma.Prisma__reviewsClient<runtime.Types.Result.GetResult<Prisma.$reviewsPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    deleteMany<T extends reviewsDeleteManyArgs>(args?: Prisma.SelectSubset<T, reviewsDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateMany<T extends reviewsUpdateManyArgs>(args: Prisma.SelectSubset<T, reviewsUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    upsert<T extends reviewsUpsertArgs>(args: Prisma.SelectSubset<T, reviewsUpsertArgs<ExtArgs>>): Prisma.Prisma__reviewsClient<runtime.Types.Result.GetResult<Prisma.$reviewsPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    count<T extends reviewsCountArgs>(args?: Prisma.Subset<T, reviewsCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], ReviewsCountAggregateOutputType> : number>;
    aggregate<T extends ReviewsAggregateArgs>(args: Prisma.Subset<T, ReviewsAggregateArgs>): Prisma.PrismaPromise<GetReviewsAggregateType<T>>;
    groupBy<T extends reviewsGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: reviewsGroupByArgs['orderBy'];
    } : {
        orderBy?: reviewsGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, reviewsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetReviewsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    readonly fields: reviewsFieldRefs;
}
export interface Prisma__reviewsClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    users<T extends Prisma.reviews$usersArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.reviews$usersArgs<ExtArgs>>): Prisma.Prisma__usersClient<runtime.Types.Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): runtime.Types.Utils.JsPromise<TResult1 | TResult2>;
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): runtime.Types.Utils.JsPromise<T | TResult>;
    finally(onfinally?: (() => void) | undefined | null): runtime.Types.Utils.JsPromise<T>;
}
export interface reviewsFieldRefs {
    readonly id: Prisma.FieldRef<"reviews", 'BigInt'>;
    readonly reviewable_type: Prisma.FieldRef<"reviews", 'String'>;
    readonly reviewable_id: Prisma.FieldRef<"reviews", 'BigInt'>;
    readonly user_name: Prisma.FieldRef<"reviews", 'String'>;
    readonly user_email: Prisma.FieldRef<"reviews", 'String'>;
    readonly rating: Prisma.FieldRef<"reviews", 'Int'>;
    readonly title: Prisma.FieldRef<"reviews", 'String'>;
    readonly comment: Prisma.FieldRef<"reviews", 'String'>;
    readonly is_approved: Prisma.FieldRef<"reviews", 'Boolean'>;
    readonly is_verified_purchase: Prisma.FieldRef<"reviews", 'Boolean'>;
    readonly ip_address: Prisma.FieldRef<"reviews", 'String'>;
    readonly approved_at: Prisma.FieldRef<"reviews", 'DateTime'>;
    readonly approved_by: Prisma.FieldRef<"reviews", 'BigInt'>;
    readonly created_at: Prisma.FieldRef<"reviews", 'DateTime'>;
    readonly updated_at: Prisma.FieldRef<"reviews", 'DateTime'>;
    readonly deleted_at: Prisma.FieldRef<"reviews", 'DateTime'>;
}
export type reviewsFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.reviewsSelect<ExtArgs> | null;
    omit?: Prisma.reviewsOmit<ExtArgs> | null;
    include?: Prisma.reviewsInclude<ExtArgs> | null;
    where: Prisma.reviewsWhereUniqueInput;
};
export type reviewsFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.reviewsSelect<ExtArgs> | null;
    omit?: Prisma.reviewsOmit<ExtArgs> | null;
    include?: Prisma.reviewsInclude<ExtArgs> | null;
    where: Prisma.reviewsWhereUniqueInput;
};
export type reviewsFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.reviewsSelect<ExtArgs> | null;
    omit?: Prisma.reviewsOmit<ExtArgs> | null;
    include?: Prisma.reviewsInclude<ExtArgs> | null;
    where?: Prisma.reviewsWhereInput;
    orderBy?: Prisma.reviewsOrderByWithRelationInput | Prisma.reviewsOrderByWithRelationInput[];
    cursor?: Prisma.reviewsWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.ReviewsScalarFieldEnum | Prisma.ReviewsScalarFieldEnum[];
};
export type reviewsFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.reviewsSelect<ExtArgs> | null;
    omit?: Prisma.reviewsOmit<ExtArgs> | null;
    include?: Prisma.reviewsInclude<ExtArgs> | null;
    where?: Prisma.reviewsWhereInput;
    orderBy?: Prisma.reviewsOrderByWithRelationInput | Prisma.reviewsOrderByWithRelationInput[];
    cursor?: Prisma.reviewsWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.ReviewsScalarFieldEnum | Prisma.ReviewsScalarFieldEnum[];
};
export type reviewsFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.reviewsSelect<ExtArgs> | null;
    omit?: Prisma.reviewsOmit<ExtArgs> | null;
    include?: Prisma.reviewsInclude<ExtArgs> | null;
    where?: Prisma.reviewsWhereInput;
    orderBy?: Prisma.reviewsOrderByWithRelationInput | Prisma.reviewsOrderByWithRelationInput[];
    cursor?: Prisma.reviewsWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.ReviewsScalarFieldEnum | Prisma.ReviewsScalarFieldEnum[];
};
export type reviewsCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.reviewsSelect<ExtArgs> | null;
    omit?: Prisma.reviewsOmit<ExtArgs> | null;
    include?: Prisma.reviewsInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.reviewsCreateInput, Prisma.reviewsUncheckedCreateInput>;
};
export type reviewsCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.reviewsCreateManyInput | Prisma.reviewsCreateManyInput[];
    skipDuplicates?: boolean;
};
export type reviewsUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.reviewsSelect<ExtArgs> | null;
    omit?: Prisma.reviewsOmit<ExtArgs> | null;
    include?: Prisma.reviewsInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.reviewsUpdateInput, Prisma.reviewsUncheckedUpdateInput>;
    where: Prisma.reviewsWhereUniqueInput;
};
export type reviewsUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.XOR<Prisma.reviewsUpdateManyMutationInput, Prisma.reviewsUncheckedUpdateManyInput>;
    where?: Prisma.reviewsWhereInput;
    limit?: number;
};
export type reviewsUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.reviewsSelect<ExtArgs> | null;
    omit?: Prisma.reviewsOmit<ExtArgs> | null;
    include?: Prisma.reviewsInclude<ExtArgs> | null;
    where: Prisma.reviewsWhereUniqueInput;
    create: Prisma.XOR<Prisma.reviewsCreateInput, Prisma.reviewsUncheckedCreateInput>;
    update: Prisma.XOR<Prisma.reviewsUpdateInput, Prisma.reviewsUncheckedUpdateInput>;
};
export type reviewsDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.reviewsSelect<ExtArgs> | null;
    omit?: Prisma.reviewsOmit<ExtArgs> | null;
    include?: Prisma.reviewsInclude<ExtArgs> | null;
    where: Prisma.reviewsWhereUniqueInput;
};
export type reviewsDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.reviewsWhereInput;
    limit?: number;
};
export type reviews$usersArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.usersSelect<ExtArgs> | null;
    omit?: Prisma.usersOmit<ExtArgs> | null;
    include?: Prisma.usersInclude<ExtArgs> | null;
    where?: Prisma.usersWhereInput;
};
export type reviewsDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.reviewsSelect<ExtArgs> | null;
    omit?: Prisma.reviewsOmit<ExtArgs> | null;
    include?: Prisma.reviewsInclude<ExtArgs> | null;
};
export {};
