import type * as runtime from "@prisma/client/runtime/client";
import type * as $Enums from "../enums.js";
import type * as Prisma from "../internal/prismaNamespace.js";
export type couponsModel = runtime.Types.Result.DefaultSelection<Prisma.$couponsPayload>;
export type AggregateCoupons = {
    _count: CouponsCountAggregateOutputType | null;
    _avg: CouponsAvgAggregateOutputType | null;
    _sum: CouponsSumAggregateOutputType | null;
    _min: CouponsMinAggregateOutputType | null;
    _max: CouponsMaxAggregateOutputType | null;
};
export type CouponsAvgAggregateOutputType = {
    id: number | null;
    value: runtime.Decimal | null;
    min_purchase: runtime.Decimal | null;
    max_discount: runtime.Decimal | null;
    usage_limit: number | null;
    used_count: number | null;
};
export type CouponsSumAggregateOutputType = {
    id: bigint | null;
    value: runtime.Decimal | null;
    min_purchase: runtime.Decimal | null;
    max_discount: runtime.Decimal | null;
    usage_limit: number | null;
    used_count: number | null;
};
export type CouponsMinAggregateOutputType = {
    id: bigint | null;
    code: string | null;
    description: string | null;
    type: $Enums.coupons_type | null;
    value: runtime.Decimal | null;
    min_purchase: runtime.Decimal | null;
    max_discount: runtime.Decimal | null;
    usage_limit: number | null;
    used_count: number | null;
    valid_from: Date | null;
    valid_until: Date | null;
    is_active: boolean | null;
    created_at: Date | null;
    updated_at: Date | null;
    deleted_at: Date | null;
};
export type CouponsMaxAggregateOutputType = {
    id: bigint | null;
    code: string | null;
    description: string | null;
    type: $Enums.coupons_type | null;
    value: runtime.Decimal | null;
    min_purchase: runtime.Decimal | null;
    max_discount: runtime.Decimal | null;
    usage_limit: number | null;
    used_count: number | null;
    valid_from: Date | null;
    valid_until: Date | null;
    is_active: boolean | null;
    created_at: Date | null;
    updated_at: Date | null;
    deleted_at: Date | null;
};
export type CouponsCountAggregateOutputType = {
    id: number;
    code: number;
    description: number;
    type: number;
    value: number;
    min_purchase: number;
    max_discount: number;
    usage_limit: number;
    used_count: number;
    valid_from: number;
    valid_until: number;
    is_active: number;
    created_at: number;
    updated_at: number;
    deleted_at: number;
    _all: number;
};
export type CouponsAvgAggregateInputType = {
    id?: true;
    value?: true;
    min_purchase?: true;
    max_discount?: true;
    usage_limit?: true;
    used_count?: true;
};
export type CouponsSumAggregateInputType = {
    id?: true;
    value?: true;
    min_purchase?: true;
    max_discount?: true;
    usage_limit?: true;
    used_count?: true;
};
export type CouponsMinAggregateInputType = {
    id?: true;
    code?: true;
    description?: true;
    type?: true;
    value?: true;
    min_purchase?: true;
    max_discount?: true;
    usage_limit?: true;
    used_count?: true;
    valid_from?: true;
    valid_until?: true;
    is_active?: true;
    created_at?: true;
    updated_at?: true;
    deleted_at?: true;
};
export type CouponsMaxAggregateInputType = {
    id?: true;
    code?: true;
    description?: true;
    type?: true;
    value?: true;
    min_purchase?: true;
    max_discount?: true;
    usage_limit?: true;
    used_count?: true;
    valid_from?: true;
    valid_until?: true;
    is_active?: true;
    created_at?: true;
    updated_at?: true;
    deleted_at?: true;
};
export type CouponsCountAggregateInputType = {
    id?: true;
    code?: true;
    description?: true;
    type?: true;
    value?: true;
    min_purchase?: true;
    max_discount?: true;
    usage_limit?: true;
    used_count?: true;
    valid_from?: true;
    valid_until?: true;
    is_active?: true;
    created_at?: true;
    updated_at?: true;
    deleted_at?: true;
    _all?: true;
};
export type CouponsAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.couponsWhereInput;
    orderBy?: Prisma.couponsOrderByWithRelationInput | Prisma.couponsOrderByWithRelationInput[];
    cursor?: Prisma.couponsWhereUniqueInput;
    take?: number;
    skip?: number;
    _count?: true | CouponsCountAggregateInputType;
    _avg?: CouponsAvgAggregateInputType;
    _sum?: CouponsSumAggregateInputType;
    _min?: CouponsMinAggregateInputType;
    _max?: CouponsMaxAggregateInputType;
};
export type GetCouponsAggregateType<T extends CouponsAggregateArgs> = {
    [P in keyof T & keyof AggregateCoupons]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateCoupons[P]> : Prisma.GetScalarType<T[P], AggregateCoupons[P]>;
};
export type couponsGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.couponsWhereInput;
    orderBy?: Prisma.couponsOrderByWithAggregationInput | Prisma.couponsOrderByWithAggregationInput[];
    by: Prisma.CouponsScalarFieldEnum[] | Prisma.CouponsScalarFieldEnum;
    having?: Prisma.couponsScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: CouponsCountAggregateInputType | true;
    _avg?: CouponsAvgAggregateInputType;
    _sum?: CouponsSumAggregateInputType;
    _min?: CouponsMinAggregateInputType;
    _max?: CouponsMaxAggregateInputType;
};
export type CouponsGroupByOutputType = {
    id: bigint;
    code: string;
    description: string | null;
    type: $Enums.coupons_type;
    value: runtime.Decimal;
    min_purchase: runtime.Decimal;
    max_discount: runtime.Decimal | null;
    usage_limit: number | null;
    used_count: number;
    valid_from: Date | null;
    valid_until: Date | null;
    is_active: boolean;
    created_at: Date | null;
    updated_at: Date | null;
    deleted_at: Date | null;
    _count: CouponsCountAggregateOutputType | null;
    _avg: CouponsAvgAggregateOutputType | null;
    _sum: CouponsSumAggregateOutputType | null;
    _min: CouponsMinAggregateOutputType | null;
    _max: CouponsMaxAggregateOutputType | null;
};
type GetCouponsGroupByPayload<T extends couponsGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<CouponsGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof CouponsGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], CouponsGroupByOutputType[P]> : Prisma.GetScalarType<T[P], CouponsGroupByOutputType[P]>;
}>>;
export type couponsWhereInput = {
    AND?: Prisma.couponsWhereInput | Prisma.couponsWhereInput[];
    OR?: Prisma.couponsWhereInput[];
    NOT?: Prisma.couponsWhereInput | Prisma.couponsWhereInput[];
    id?: Prisma.BigIntFilter<"coupons"> | bigint | number;
    code?: Prisma.StringFilter<"coupons"> | string;
    description?: Prisma.StringNullableFilter<"coupons"> | string | null;
    type?: Prisma.Enumcoupons_typeFilter<"coupons"> | $Enums.coupons_type;
    value?: Prisma.DecimalFilter<"coupons"> | runtime.Decimal | runtime.DecimalJsLike | number | string;
    min_purchase?: Prisma.DecimalFilter<"coupons"> | runtime.Decimal | runtime.DecimalJsLike | number | string;
    max_discount?: Prisma.DecimalNullableFilter<"coupons"> | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    usage_limit?: Prisma.IntNullableFilter<"coupons"> | number | null;
    used_count?: Prisma.IntFilter<"coupons"> | number;
    valid_from?: Prisma.DateTimeNullableFilter<"coupons"> | Date | string | null;
    valid_until?: Prisma.DateTimeNullableFilter<"coupons"> | Date | string | null;
    is_active?: Prisma.BoolFilter<"coupons"> | boolean;
    created_at?: Prisma.DateTimeNullableFilter<"coupons"> | Date | string | null;
    updated_at?: Prisma.DateTimeNullableFilter<"coupons"> | Date | string | null;
    deleted_at?: Prisma.DateTimeNullableFilter<"coupons"> | Date | string | null;
    enrollments?: Prisma.EnrollmentsListRelationFilter;
};
export type couponsOrderByWithRelationInput = {
    id?: Prisma.SortOrder;
    code?: Prisma.SortOrder;
    description?: Prisma.SortOrderInput | Prisma.SortOrder;
    type?: Prisma.SortOrder;
    value?: Prisma.SortOrder;
    min_purchase?: Prisma.SortOrder;
    max_discount?: Prisma.SortOrderInput | Prisma.SortOrder;
    usage_limit?: Prisma.SortOrderInput | Prisma.SortOrder;
    used_count?: Prisma.SortOrder;
    valid_from?: Prisma.SortOrderInput | Prisma.SortOrder;
    valid_until?: Prisma.SortOrderInput | Prisma.SortOrder;
    is_active?: Prisma.SortOrder;
    created_at?: Prisma.SortOrderInput | Prisma.SortOrder;
    updated_at?: Prisma.SortOrderInput | Prisma.SortOrder;
    deleted_at?: Prisma.SortOrderInput | Prisma.SortOrder;
    enrollments?: Prisma.enrollmentsOrderByRelationAggregateInput;
    _relevance?: Prisma.couponsOrderByRelevanceInput;
};
export type couponsWhereUniqueInput = Prisma.AtLeast<{
    id?: bigint | number;
    code?: string;
    AND?: Prisma.couponsWhereInput | Prisma.couponsWhereInput[];
    OR?: Prisma.couponsWhereInput[];
    NOT?: Prisma.couponsWhereInput | Prisma.couponsWhereInput[];
    description?: Prisma.StringNullableFilter<"coupons"> | string | null;
    type?: Prisma.Enumcoupons_typeFilter<"coupons"> | $Enums.coupons_type;
    value?: Prisma.DecimalFilter<"coupons"> | runtime.Decimal | runtime.DecimalJsLike | number | string;
    min_purchase?: Prisma.DecimalFilter<"coupons"> | runtime.Decimal | runtime.DecimalJsLike | number | string;
    max_discount?: Prisma.DecimalNullableFilter<"coupons"> | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    usage_limit?: Prisma.IntNullableFilter<"coupons"> | number | null;
    used_count?: Prisma.IntFilter<"coupons"> | number;
    valid_from?: Prisma.DateTimeNullableFilter<"coupons"> | Date | string | null;
    valid_until?: Prisma.DateTimeNullableFilter<"coupons"> | Date | string | null;
    is_active?: Prisma.BoolFilter<"coupons"> | boolean;
    created_at?: Prisma.DateTimeNullableFilter<"coupons"> | Date | string | null;
    updated_at?: Prisma.DateTimeNullableFilter<"coupons"> | Date | string | null;
    deleted_at?: Prisma.DateTimeNullableFilter<"coupons"> | Date | string | null;
    enrollments?: Prisma.EnrollmentsListRelationFilter;
}, "id" | "code">;
export type couponsOrderByWithAggregationInput = {
    id?: Prisma.SortOrder;
    code?: Prisma.SortOrder;
    description?: Prisma.SortOrderInput | Prisma.SortOrder;
    type?: Prisma.SortOrder;
    value?: Prisma.SortOrder;
    min_purchase?: Prisma.SortOrder;
    max_discount?: Prisma.SortOrderInput | Prisma.SortOrder;
    usage_limit?: Prisma.SortOrderInput | Prisma.SortOrder;
    used_count?: Prisma.SortOrder;
    valid_from?: Prisma.SortOrderInput | Prisma.SortOrder;
    valid_until?: Prisma.SortOrderInput | Prisma.SortOrder;
    is_active?: Prisma.SortOrder;
    created_at?: Prisma.SortOrderInput | Prisma.SortOrder;
    updated_at?: Prisma.SortOrderInput | Prisma.SortOrder;
    deleted_at?: Prisma.SortOrderInput | Prisma.SortOrder;
    _count?: Prisma.couponsCountOrderByAggregateInput;
    _avg?: Prisma.couponsAvgOrderByAggregateInput;
    _max?: Prisma.couponsMaxOrderByAggregateInput;
    _min?: Prisma.couponsMinOrderByAggregateInput;
    _sum?: Prisma.couponsSumOrderByAggregateInput;
};
export type couponsScalarWhereWithAggregatesInput = {
    AND?: Prisma.couponsScalarWhereWithAggregatesInput | Prisma.couponsScalarWhereWithAggregatesInput[];
    OR?: Prisma.couponsScalarWhereWithAggregatesInput[];
    NOT?: Prisma.couponsScalarWhereWithAggregatesInput | Prisma.couponsScalarWhereWithAggregatesInput[];
    id?: Prisma.BigIntWithAggregatesFilter<"coupons"> | bigint | number;
    code?: Prisma.StringWithAggregatesFilter<"coupons"> | string;
    description?: Prisma.StringNullableWithAggregatesFilter<"coupons"> | string | null;
    type?: Prisma.Enumcoupons_typeWithAggregatesFilter<"coupons"> | $Enums.coupons_type;
    value?: Prisma.DecimalWithAggregatesFilter<"coupons"> | runtime.Decimal | runtime.DecimalJsLike | number | string;
    min_purchase?: Prisma.DecimalWithAggregatesFilter<"coupons"> | runtime.Decimal | runtime.DecimalJsLike | number | string;
    max_discount?: Prisma.DecimalNullableWithAggregatesFilter<"coupons"> | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    usage_limit?: Prisma.IntNullableWithAggregatesFilter<"coupons"> | number | null;
    used_count?: Prisma.IntWithAggregatesFilter<"coupons"> | number;
    valid_from?: Prisma.DateTimeNullableWithAggregatesFilter<"coupons"> | Date | string | null;
    valid_until?: Prisma.DateTimeNullableWithAggregatesFilter<"coupons"> | Date | string | null;
    is_active?: Prisma.BoolWithAggregatesFilter<"coupons"> | boolean;
    created_at?: Prisma.DateTimeNullableWithAggregatesFilter<"coupons"> | Date | string | null;
    updated_at?: Prisma.DateTimeNullableWithAggregatesFilter<"coupons"> | Date | string | null;
    deleted_at?: Prisma.DateTimeNullableWithAggregatesFilter<"coupons"> | Date | string | null;
};
export type couponsCreateInput = {
    id?: bigint | number;
    code: string;
    description?: string | null;
    type?: $Enums.coupons_type;
    value: runtime.Decimal | runtime.DecimalJsLike | number | string;
    min_purchase?: runtime.Decimal | runtime.DecimalJsLike | number | string;
    max_discount?: runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    usage_limit?: number | null;
    used_count?: number;
    valid_from?: Date | string | null;
    valid_until?: Date | string | null;
    is_active?: boolean;
    created_at?: Date | string | null;
    updated_at?: Date | string | null;
    deleted_at?: Date | string | null;
    enrollments?: Prisma.enrollmentsCreateNestedManyWithoutCouponsInput;
};
export type couponsUncheckedCreateInput = {
    id?: bigint | number;
    code: string;
    description?: string | null;
    type?: $Enums.coupons_type;
    value: runtime.Decimal | runtime.DecimalJsLike | number | string;
    min_purchase?: runtime.Decimal | runtime.DecimalJsLike | number | string;
    max_discount?: runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    usage_limit?: number | null;
    used_count?: number;
    valid_from?: Date | string | null;
    valid_until?: Date | string | null;
    is_active?: boolean;
    created_at?: Date | string | null;
    updated_at?: Date | string | null;
    deleted_at?: Date | string | null;
    enrollments?: Prisma.enrollmentsUncheckedCreateNestedManyWithoutCouponsInput;
};
export type couponsUpdateInput = {
    id?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    code?: Prisma.StringFieldUpdateOperationsInput | string;
    description?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    type?: Prisma.Enumcoupons_typeFieldUpdateOperationsInput | $Enums.coupons_type;
    value?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    min_purchase?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    max_discount?: Prisma.NullableDecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    usage_limit?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    used_count?: Prisma.IntFieldUpdateOperationsInput | number;
    valid_from?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    valid_until?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    is_active?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    created_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    updated_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    deleted_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    enrollments?: Prisma.enrollmentsUpdateManyWithoutCouponsNestedInput;
};
export type couponsUncheckedUpdateInput = {
    id?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    code?: Prisma.StringFieldUpdateOperationsInput | string;
    description?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    type?: Prisma.Enumcoupons_typeFieldUpdateOperationsInput | $Enums.coupons_type;
    value?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    min_purchase?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    max_discount?: Prisma.NullableDecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    usage_limit?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    used_count?: Prisma.IntFieldUpdateOperationsInput | number;
    valid_from?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    valid_until?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    is_active?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    created_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    updated_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    deleted_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    enrollments?: Prisma.enrollmentsUncheckedUpdateManyWithoutCouponsNestedInput;
};
export type couponsCreateManyInput = {
    id?: bigint | number;
    code: string;
    description?: string | null;
    type?: $Enums.coupons_type;
    value: runtime.Decimal | runtime.DecimalJsLike | number | string;
    min_purchase?: runtime.Decimal | runtime.DecimalJsLike | number | string;
    max_discount?: runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    usage_limit?: number | null;
    used_count?: number;
    valid_from?: Date | string | null;
    valid_until?: Date | string | null;
    is_active?: boolean;
    created_at?: Date | string | null;
    updated_at?: Date | string | null;
    deleted_at?: Date | string | null;
};
export type couponsUpdateManyMutationInput = {
    id?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    code?: Prisma.StringFieldUpdateOperationsInput | string;
    description?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    type?: Prisma.Enumcoupons_typeFieldUpdateOperationsInput | $Enums.coupons_type;
    value?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    min_purchase?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    max_discount?: Prisma.NullableDecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    usage_limit?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    used_count?: Prisma.IntFieldUpdateOperationsInput | number;
    valid_from?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    valid_until?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    is_active?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    created_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    updated_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    deleted_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
};
export type couponsUncheckedUpdateManyInput = {
    id?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    code?: Prisma.StringFieldUpdateOperationsInput | string;
    description?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    type?: Prisma.Enumcoupons_typeFieldUpdateOperationsInput | $Enums.coupons_type;
    value?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    min_purchase?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    max_discount?: Prisma.NullableDecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    usage_limit?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    used_count?: Prisma.IntFieldUpdateOperationsInput | number;
    valid_from?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    valid_until?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    is_active?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    created_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    updated_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    deleted_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
};
export type couponsOrderByRelevanceInput = {
    fields: Prisma.couponsOrderByRelevanceFieldEnum | Prisma.couponsOrderByRelevanceFieldEnum[];
    sort: Prisma.SortOrder;
    search: string;
};
export type couponsCountOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    code?: Prisma.SortOrder;
    description?: Prisma.SortOrder;
    type?: Prisma.SortOrder;
    value?: Prisma.SortOrder;
    min_purchase?: Prisma.SortOrder;
    max_discount?: Prisma.SortOrder;
    usage_limit?: Prisma.SortOrder;
    used_count?: Prisma.SortOrder;
    valid_from?: Prisma.SortOrder;
    valid_until?: Prisma.SortOrder;
    is_active?: Prisma.SortOrder;
    created_at?: Prisma.SortOrder;
    updated_at?: Prisma.SortOrder;
    deleted_at?: Prisma.SortOrder;
};
export type couponsAvgOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    value?: Prisma.SortOrder;
    min_purchase?: Prisma.SortOrder;
    max_discount?: Prisma.SortOrder;
    usage_limit?: Prisma.SortOrder;
    used_count?: Prisma.SortOrder;
};
export type couponsMaxOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    code?: Prisma.SortOrder;
    description?: Prisma.SortOrder;
    type?: Prisma.SortOrder;
    value?: Prisma.SortOrder;
    min_purchase?: Prisma.SortOrder;
    max_discount?: Prisma.SortOrder;
    usage_limit?: Prisma.SortOrder;
    used_count?: Prisma.SortOrder;
    valid_from?: Prisma.SortOrder;
    valid_until?: Prisma.SortOrder;
    is_active?: Prisma.SortOrder;
    created_at?: Prisma.SortOrder;
    updated_at?: Prisma.SortOrder;
    deleted_at?: Prisma.SortOrder;
};
export type couponsMinOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    code?: Prisma.SortOrder;
    description?: Prisma.SortOrder;
    type?: Prisma.SortOrder;
    value?: Prisma.SortOrder;
    min_purchase?: Prisma.SortOrder;
    max_discount?: Prisma.SortOrder;
    usage_limit?: Prisma.SortOrder;
    used_count?: Prisma.SortOrder;
    valid_from?: Prisma.SortOrder;
    valid_until?: Prisma.SortOrder;
    is_active?: Prisma.SortOrder;
    created_at?: Prisma.SortOrder;
    updated_at?: Prisma.SortOrder;
    deleted_at?: Prisma.SortOrder;
};
export type couponsSumOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    value?: Prisma.SortOrder;
    min_purchase?: Prisma.SortOrder;
    max_discount?: Prisma.SortOrder;
    usage_limit?: Prisma.SortOrder;
    used_count?: Prisma.SortOrder;
};
export type CouponsNullableScalarRelationFilter = {
    is?: Prisma.couponsWhereInput | null;
    isNot?: Prisma.couponsWhereInput | null;
};
export type Enumcoupons_typeFieldUpdateOperationsInput = {
    set?: $Enums.coupons_type;
};
export type DecimalFieldUpdateOperationsInput = {
    set?: runtime.Decimal | runtime.DecimalJsLike | number | string;
    increment?: runtime.Decimal | runtime.DecimalJsLike | number | string;
    decrement?: runtime.Decimal | runtime.DecimalJsLike | number | string;
    multiply?: runtime.Decimal | runtime.DecimalJsLike | number | string;
    divide?: runtime.Decimal | runtime.DecimalJsLike | number | string;
};
export type NullableDecimalFieldUpdateOperationsInput = {
    set?: runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    increment?: runtime.Decimal | runtime.DecimalJsLike | number | string;
    decrement?: runtime.Decimal | runtime.DecimalJsLike | number | string;
    multiply?: runtime.Decimal | runtime.DecimalJsLike | number | string;
    divide?: runtime.Decimal | runtime.DecimalJsLike | number | string;
};
export type couponsCreateNestedOneWithoutEnrollmentsInput = {
    create?: Prisma.XOR<Prisma.couponsCreateWithoutEnrollmentsInput, Prisma.couponsUncheckedCreateWithoutEnrollmentsInput>;
    connectOrCreate?: Prisma.couponsCreateOrConnectWithoutEnrollmentsInput;
    connect?: Prisma.couponsWhereUniqueInput;
};
export type couponsUpdateOneWithoutEnrollmentsNestedInput = {
    create?: Prisma.XOR<Prisma.couponsCreateWithoutEnrollmentsInput, Prisma.couponsUncheckedCreateWithoutEnrollmentsInput>;
    connectOrCreate?: Prisma.couponsCreateOrConnectWithoutEnrollmentsInput;
    upsert?: Prisma.couponsUpsertWithoutEnrollmentsInput;
    disconnect?: Prisma.couponsWhereInput | boolean;
    delete?: Prisma.couponsWhereInput | boolean;
    connect?: Prisma.couponsWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.couponsUpdateToOneWithWhereWithoutEnrollmentsInput, Prisma.couponsUpdateWithoutEnrollmentsInput>, Prisma.couponsUncheckedUpdateWithoutEnrollmentsInput>;
};
export type couponsCreateWithoutEnrollmentsInput = {
    id?: bigint | number;
    code: string;
    description?: string | null;
    type?: $Enums.coupons_type;
    value: runtime.Decimal | runtime.DecimalJsLike | number | string;
    min_purchase?: runtime.Decimal | runtime.DecimalJsLike | number | string;
    max_discount?: runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    usage_limit?: number | null;
    used_count?: number;
    valid_from?: Date | string | null;
    valid_until?: Date | string | null;
    is_active?: boolean;
    created_at?: Date | string | null;
    updated_at?: Date | string | null;
    deleted_at?: Date | string | null;
};
export type couponsUncheckedCreateWithoutEnrollmentsInput = {
    id?: bigint | number;
    code: string;
    description?: string | null;
    type?: $Enums.coupons_type;
    value: runtime.Decimal | runtime.DecimalJsLike | number | string;
    min_purchase?: runtime.Decimal | runtime.DecimalJsLike | number | string;
    max_discount?: runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    usage_limit?: number | null;
    used_count?: number;
    valid_from?: Date | string | null;
    valid_until?: Date | string | null;
    is_active?: boolean;
    created_at?: Date | string | null;
    updated_at?: Date | string | null;
    deleted_at?: Date | string | null;
};
export type couponsCreateOrConnectWithoutEnrollmentsInput = {
    where: Prisma.couponsWhereUniqueInput;
    create: Prisma.XOR<Prisma.couponsCreateWithoutEnrollmentsInput, Prisma.couponsUncheckedCreateWithoutEnrollmentsInput>;
};
export type couponsUpsertWithoutEnrollmentsInput = {
    update: Prisma.XOR<Prisma.couponsUpdateWithoutEnrollmentsInput, Prisma.couponsUncheckedUpdateWithoutEnrollmentsInput>;
    create: Prisma.XOR<Prisma.couponsCreateWithoutEnrollmentsInput, Prisma.couponsUncheckedCreateWithoutEnrollmentsInput>;
    where?: Prisma.couponsWhereInput;
};
export type couponsUpdateToOneWithWhereWithoutEnrollmentsInput = {
    where?: Prisma.couponsWhereInput;
    data: Prisma.XOR<Prisma.couponsUpdateWithoutEnrollmentsInput, Prisma.couponsUncheckedUpdateWithoutEnrollmentsInput>;
};
export type couponsUpdateWithoutEnrollmentsInput = {
    id?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    code?: Prisma.StringFieldUpdateOperationsInput | string;
    description?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    type?: Prisma.Enumcoupons_typeFieldUpdateOperationsInput | $Enums.coupons_type;
    value?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    min_purchase?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    max_discount?: Prisma.NullableDecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    usage_limit?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    used_count?: Prisma.IntFieldUpdateOperationsInput | number;
    valid_from?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    valid_until?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    is_active?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    created_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    updated_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    deleted_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
};
export type couponsUncheckedUpdateWithoutEnrollmentsInput = {
    id?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    code?: Prisma.StringFieldUpdateOperationsInput | string;
    description?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    type?: Prisma.Enumcoupons_typeFieldUpdateOperationsInput | $Enums.coupons_type;
    value?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    min_purchase?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    max_discount?: Prisma.NullableDecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    usage_limit?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    used_count?: Prisma.IntFieldUpdateOperationsInput | number;
    valid_from?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    valid_until?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    is_active?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    created_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    updated_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    deleted_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
};
export type CouponsCountOutputType = {
    enrollments: number;
};
export type CouponsCountOutputTypeSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    enrollments?: boolean | CouponsCountOutputTypeCountEnrollmentsArgs;
};
export type CouponsCountOutputTypeDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.CouponsCountOutputTypeSelect<ExtArgs> | null;
};
export type CouponsCountOutputTypeCountEnrollmentsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.enrollmentsWhereInput;
};
export type couponsSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    code?: boolean;
    description?: boolean;
    type?: boolean;
    value?: boolean;
    min_purchase?: boolean;
    max_discount?: boolean;
    usage_limit?: boolean;
    used_count?: boolean;
    valid_from?: boolean;
    valid_until?: boolean;
    is_active?: boolean;
    created_at?: boolean;
    updated_at?: boolean;
    deleted_at?: boolean;
    enrollments?: boolean | Prisma.coupons$enrollmentsArgs<ExtArgs>;
    _count?: boolean | Prisma.CouponsCountOutputTypeDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["coupons"]>;
export type couponsSelectScalar = {
    id?: boolean;
    code?: boolean;
    description?: boolean;
    type?: boolean;
    value?: boolean;
    min_purchase?: boolean;
    max_discount?: boolean;
    usage_limit?: boolean;
    used_count?: boolean;
    valid_from?: boolean;
    valid_until?: boolean;
    is_active?: boolean;
    created_at?: boolean;
    updated_at?: boolean;
    deleted_at?: boolean;
};
export type couponsOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "code" | "description" | "type" | "value" | "min_purchase" | "max_discount" | "usage_limit" | "used_count" | "valid_from" | "valid_until" | "is_active" | "created_at" | "updated_at" | "deleted_at", ExtArgs["result"]["coupons"]>;
export type couponsInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    enrollments?: boolean | Prisma.coupons$enrollmentsArgs<ExtArgs>;
    _count?: boolean | Prisma.CouponsCountOutputTypeDefaultArgs<ExtArgs>;
};
export type $couponsPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "coupons";
    objects: {
        enrollments: Prisma.$enrollmentsPayload<ExtArgs>[];
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id: bigint;
        code: string;
        description: string | null;
        type: $Enums.coupons_type;
        value: runtime.Decimal;
        min_purchase: runtime.Decimal;
        max_discount: runtime.Decimal | null;
        usage_limit: number | null;
        used_count: number;
        valid_from: Date | null;
        valid_until: Date | null;
        is_active: boolean;
        created_at: Date | null;
        updated_at: Date | null;
        deleted_at: Date | null;
    }, ExtArgs["result"]["coupons"]>;
    composites: {};
};
export type couponsGetPayload<S extends boolean | null | undefined | couponsDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$couponsPayload, S>;
export type couponsCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<couponsFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: CouponsCountAggregateInputType | true;
};
export interface couponsDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['coupons'];
        meta: {
            name: 'coupons';
        };
    };
    findUnique<T extends couponsFindUniqueArgs>(args: Prisma.SelectSubset<T, couponsFindUniqueArgs<ExtArgs>>): Prisma.Prisma__couponsClient<runtime.Types.Result.GetResult<Prisma.$couponsPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findUniqueOrThrow<T extends couponsFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, couponsFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__couponsClient<runtime.Types.Result.GetResult<Prisma.$couponsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findFirst<T extends couponsFindFirstArgs>(args?: Prisma.SelectSubset<T, couponsFindFirstArgs<ExtArgs>>): Prisma.Prisma__couponsClient<runtime.Types.Result.GetResult<Prisma.$couponsPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findFirstOrThrow<T extends couponsFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, couponsFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__couponsClient<runtime.Types.Result.GetResult<Prisma.$couponsPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findMany<T extends couponsFindManyArgs>(args?: Prisma.SelectSubset<T, couponsFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$couponsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    create<T extends couponsCreateArgs>(args: Prisma.SelectSubset<T, couponsCreateArgs<ExtArgs>>): Prisma.Prisma__couponsClient<runtime.Types.Result.GetResult<Prisma.$couponsPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    createMany<T extends couponsCreateManyArgs>(args?: Prisma.SelectSubset<T, couponsCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    delete<T extends couponsDeleteArgs>(args: Prisma.SelectSubset<T, couponsDeleteArgs<ExtArgs>>): Prisma.Prisma__couponsClient<runtime.Types.Result.GetResult<Prisma.$couponsPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    update<T extends couponsUpdateArgs>(args: Prisma.SelectSubset<T, couponsUpdateArgs<ExtArgs>>): Prisma.Prisma__couponsClient<runtime.Types.Result.GetResult<Prisma.$couponsPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    deleteMany<T extends couponsDeleteManyArgs>(args?: Prisma.SelectSubset<T, couponsDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateMany<T extends couponsUpdateManyArgs>(args: Prisma.SelectSubset<T, couponsUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    upsert<T extends couponsUpsertArgs>(args: Prisma.SelectSubset<T, couponsUpsertArgs<ExtArgs>>): Prisma.Prisma__couponsClient<runtime.Types.Result.GetResult<Prisma.$couponsPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    count<T extends couponsCountArgs>(args?: Prisma.Subset<T, couponsCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], CouponsCountAggregateOutputType> : number>;
    aggregate<T extends CouponsAggregateArgs>(args: Prisma.Subset<T, CouponsAggregateArgs>): Prisma.PrismaPromise<GetCouponsAggregateType<T>>;
    groupBy<T extends couponsGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: couponsGroupByArgs['orderBy'];
    } : {
        orderBy?: couponsGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, couponsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCouponsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    readonly fields: couponsFieldRefs;
}
export interface Prisma__couponsClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    enrollments<T extends Prisma.coupons$enrollmentsArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.coupons$enrollmentsArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$enrollmentsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): runtime.Types.Utils.JsPromise<TResult1 | TResult2>;
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): runtime.Types.Utils.JsPromise<T | TResult>;
    finally(onfinally?: (() => void) | undefined | null): runtime.Types.Utils.JsPromise<T>;
}
export interface couponsFieldRefs {
    readonly id: Prisma.FieldRef<"coupons", 'BigInt'>;
    readonly code: Prisma.FieldRef<"coupons", 'String'>;
    readonly description: Prisma.FieldRef<"coupons", 'String'>;
    readonly type: Prisma.FieldRef<"coupons", 'coupons_type'>;
    readonly value: Prisma.FieldRef<"coupons", 'Decimal'>;
    readonly min_purchase: Prisma.FieldRef<"coupons", 'Decimal'>;
    readonly max_discount: Prisma.FieldRef<"coupons", 'Decimal'>;
    readonly usage_limit: Prisma.FieldRef<"coupons", 'Int'>;
    readonly used_count: Prisma.FieldRef<"coupons", 'Int'>;
    readonly valid_from: Prisma.FieldRef<"coupons", 'DateTime'>;
    readonly valid_until: Prisma.FieldRef<"coupons", 'DateTime'>;
    readonly is_active: Prisma.FieldRef<"coupons", 'Boolean'>;
    readonly created_at: Prisma.FieldRef<"coupons", 'DateTime'>;
    readonly updated_at: Prisma.FieldRef<"coupons", 'DateTime'>;
    readonly deleted_at: Prisma.FieldRef<"coupons", 'DateTime'>;
}
export type couponsFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.couponsSelect<ExtArgs> | null;
    omit?: Prisma.couponsOmit<ExtArgs> | null;
    include?: Prisma.couponsInclude<ExtArgs> | null;
    where: Prisma.couponsWhereUniqueInput;
};
export type couponsFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.couponsSelect<ExtArgs> | null;
    omit?: Prisma.couponsOmit<ExtArgs> | null;
    include?: Prisma.couponsInclude<ExtArgs> | null;
    where: Prisma.couponsWhereUniqueInput;
};
export type couponsFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.couponsSelect<ExtArgs> | null;
    omit?: Prisma.couponsOmit<ExtArgs> | null;
    include?: Prisma.couponsInclude<ExtArgs> | null;
    where?: Prisma.couponsWhereInput;
    orderBy?: Prisma.couponsOrderByWithRelationInput | Prisma.couponsOrderByWithRelationInput[];
    cursor?: Prisma.couponsWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.CouponsScalarFieldEnum | Prisma.CouponsScalarFieldEnum[];
};
export type couponsFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.couponsSelect<ExtArgs> | null;
    omit?: Prisma.couponsOmit<ExtArgs> | null;
    include?: Prisma.couponsInclude<ExtArgs> | null;
    where?: Prisma.couponsWhereInput;
    orderBy?: Prisma.couponsOrderByWithRelationInput | Prisma.couponsOrderByWithRelationInput[];
    cursor?: Prisma.couponsWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.CouponsScalarFieldEnum | Prisma.CouponsScalarFieldEnum[];
};
export type couponsFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.couponsSelect<ExtArgs> | null;
    omit?: Prisma.couponsOmit<ExtArgs> | null;
    include?: Prisma.couponsInclude<ExtArgs> | null;
    where?: Prisma.couponsWhereInput;
    orderBy?: Prisma.couponsOrderByWithRelationInput | Prisma.couponsOrderByWithRelationInput[];
    cursor?: Prisma.couponsWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.CouponsScalarFieldEnum | Prisma.CouponsScalarFieldEnum[];
};
export type couponsCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.couponsSelect<ExtArgs> | null;
    omit?: Prisma.couponsOmit<ExtArgs> | null;
    include?: Prisma.couponsInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.couponsCreateInput, Prisma.couponsUncheckedCreateInput>;
};
export type couponsCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.couponsCreateManyInput | Prisma.couponsCreateManyInput[];
    skipDuplicates?: boolean;
};
export type couponsUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.couponsSelect<ExtArgs> | null;
    omit?: Prisma.couponsOmit<ExtArgs> | null;
    include?: Prisma.couponsInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.couponsUpdateInput, Prisma.couponsUncheckedUpdateInput>;
    where: Prisma.couponsWhereUniqueInput;
};
export type couponsUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.XOR<Prisma.couponsUpdateManyMutationInput, Prisma.couponsUncheckedUpdateManyInput>;
    where?: Prisma.couponsWhereInput;
    limit?: number;
};
export type couponsUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.couponsSelect<ExtArgs> | null;
    omit?: Prisma.couponsOmit<ExtArgs> | null;
    include?: Prisma.couponsInclude<ExtArgs> | null;
    where: Prisma.couponsWhereUniqueInput;
    create: Prisma.XOR<Prisma.couponsCreateInput, Prisma.couponsUncheckedCreateInput>;
    update: Prisma.XOR<Prisma.couponsUpdateInput, Prisma.couponsUncheckedUpdateInput>;
};
export type couponsDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.couponsSelect<ExtArgs> | null;
    omit?: Prisma.couponsOmit<ExtArgs> | null;
    include?: Prisma.couponsInclude<ExtArgs> | null;
    where: Prisma.couponsWhereUniqueInput;
};
export type couponsDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.couponsWhereInput;
    limit?: number;
};
export type coupons$enrollmentsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.enrollmentsSelect<ExtArgs> | null;
    omit?: Prisma.enrollmentsOmit<ExtArgs> | null;
    include?: Prisma.enrollmentsInclude<ExtArgs> | null;
    where?: Prisma.enrollmentsWhereInput;
    orderBy?: Prisma.enrollmentsOrderByWithRelationInput | Prisma.enrollmentsOrderByWithRelationInput[];
    cursor?: Prisma.enrollmentsWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.EnrollmentsScalarFieldEnum | Prisma.EnrollmentsScalarFieldEnum[];
};
export type couponsDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.couponsSelect<ExtArgs> | null;
    omit?: Prisma.couponsOmit<ExtArgs> | null;
    include?: Prisma.couponsInclude<ExtArgs> | null;
};
export {};
