import type * as runtime from "@prisma/client/runtime/client";
import type * as $Enums from "../enums.js";
import type * as Prisma from "../internal/prismaNamespace.js";
export type enrollmentsModel = runtime.Types.Result.DefaultSelection<Prisma.$enrollmentsPayload>;
export type AggregateEnrollments = {
    _count: EnrollmentsCountAggregateOutputType | null;
    _avg: EnrollmentsAvgAggregateOutputType | null;
    _sum: EnrollmentsSumAggregateOutputType | null;
    _min: EnrollmentsMinAggregateOutputType | null;
    _max: EnrollmentsMaxAggregateOutputType | null;
};
export type EnrollmentsAvgAggregateOutputType = {
    id: number | null;
    user_id: number | null;
    course_id: number | null;
    coupon_id: number | null;
    progress_percentage: runtime.Decimal | null;
    original_price: runtime.Decimal | null;
    final_price: runtime.Decimal | null;
};
export type EnrollmentsSumAggregateOutputType = {
    id: bigint | null;
    user_id: bigint | null;
    course_id: bigint | null;
    coupon_id: bigint | null;
    progress_percentage: runtime.Decimal | null;
    original_price: runtime.Decimal | null;
    final_price: runtime.Decimal | null;
};
export type EnrollmentsMinAggregateOutputType = {
    id: bigint | null;
    user_id: bigint | null;
    course_id: bigint | null;
    coupon_id: bigint | null;
    enrollment_date: Date | null;
    completion_date: Date | null;
    status: $Enums.enrollments_status | null;
    payment_status: $Enums.enrollments_payment_status | null;
    progress_percentage: runtime.Decimal | null;
    original_price: runtime.Decimal | null;
    final_price: runtime.Decimal | null;
    created_at: Date | null;
    updated_at: Date | null;
};
export type EnrollmentsMaxAggregateOutputType = {
    id: bigint | null;
    user_id: bigint | null;
    course_id: bigint | null;
    coupon_id: bigint | null;
    enrollment_date: Date | null;
    completion_date: Date | null;
    status: $Enums.enrollments_status | null;
    payment_status: $Enums.enrollments_payment_status | null;
    progress_percentage: runtime.Decimal | null;
    original_price: runtime.Decimal | null;
    final_price: runtime.Decimal | null;
    created_at: Date | null;
    updated_at: Date | null;
};
export type EnrollmentsCountAggregateOutputType = {
    id: number;
    user_id: number;
    course_id: number;
    coupon_id: number;
    enrollment_date: number;
    completion_date: number;
    status: number;
    payment_status: number;
    progress_percentage: number;
    original_price: number;
    final_price: number;
    created_at: number;
    updated_at: number;
    _all: number;
};
export type EnrollmentsAvgAggregateInputType = {
    id?: true;
    user_id?: true;
    course_id?: true;
    coupon_id?: true;
    progress_percentage?: true;
    original_price?: true;
    final_price?: true;
};
export type EnrollmentsSumAggregateInputType = {
    id?: true;
    user_id?: true;
    course_id?: true;
    coupon_id?: true;
    progress_percentage?: true;
    original_price?: true;
    final_price?: true;
};
export type EnrollmentsMinAggregateInputType = {
    id?: true;
    user_id?: true;
    course_id?: true;
    coupon_id?: true;
    enrollment_date?: true;
    completion_date?: true;
    status?: true;
    payment_status?: true;
    progress_percentage?: true;
    original_price?: true;
    final_price?: true;
    created_at?: true;
    updated_at?: true;
};
export type EnrollmentsMaxAggregateInputType = {
    id?: true;
    user_id?: true;
    course_id?: true;
    coupon_id?: true;
    enrollment_date?: true;
    completion_date?: true;
    status?: true;
    payment_status?: true;
    progress_percentage?: true;
    original_price?: true;
    final_price?: true;
    created_at?: true;
    updated_at?: true;
};
export type EnrollmentsCountAggregateInputType = {
    id?: true;
    user_id?: true;
    course_id?: true;
    coupon_id?: true;
    enrollment_date?: true;
    completion_date?: true;
    status?: true;
    payment_status?: true;
    progress_percentage?: true;
    original_price?: true;
    final_price?: true;
    created_at?: true;
    updated_at?: true;
    _all?: true;
};
export type EnrollmentsAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.enrollmentsWhereInput;
    orderBy?: Prisma.enrollmentsOrderByWithRelationInput | Prisma.enrollmentsOrderByWithRelationInput[];
    cursor?: Prisma.enrollmentsWhereUniqueInput;
    take?: number;
    skip?: number;
    _count?: true | EnrollmentsCountAggregateInputType;
    _avg?: EnrollmentsAvgAggregateInputType;
    _sum?: EnrollmentsSumAggregateInputType;
    _min?: EnrollmentsMinAggregateInputType;
    _max?: EnrollmentsMaxAggregateInputType;
};
export type GetEnrollmentsAggregateType<T extends EnrollmentsAggregateArgs> = {
    [P in keyof T & keyof AggregateEnrollments]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateEnrollments[P]> : Prisma.GetScalarType<T[P], AggregateEnrollments[P]>;
};
export type enrollmentsGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.enrollmentsWhereInput;
    orderBy?: Prisma.enrollmentsOrderByWithAggregationInput | Prisma.enrollmentsOrderByWithAggregationInput[];
    by: Prisma.EnrollmentsScalarFieldEnum[] | Prisma.EnrollmentsScalarFieldEnum;
    having?: Prisma.enrollmentsScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: EnrollmentsCountAggregateInputType | true;
    _avg?: EnrollmentsAvgAggregateInputType;
    _sum?: EnrollmentsSumAggregateInputType;
    _min?: EnrollmentsMinAggregateInputType;
    _max?: EnrollmentsMaxAggregateInputType;
};
export type EnrollmentsGroupByOutputType = {
    id: bigint;
    user_id: bigint;
    course_id: bigint;
    coupon_id: bigint | null;
    enrollment_date: Date;
    completion_date: Date | null;
    status: $Enums.enrollments_status;
    payment_status: $Enums.enrollments_payment_status;
    progress_percentage: runtime.Decimal;
    original_price: runtime.Decimal;
    final_price: runtime.Decimal;
    created_at: Date | null;
    updated_at: Date | null;
    _count: EnrollmentsCountAggregateOutputType | null;
    _avg: EnrollmentsAvgAggregateOutputType | null;
    _sum: EnrollmentsSumAggregateOutputType | null;
    _min: EnrollmentsMinAggregateOutputType | null;
    _max: EnrollmentsMaxAggregateOutputType | null;
};
type GetEnrollmentsGroupByPayload<T extends enrollmentsGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<EnrollmentsGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof EnrollmentsGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], EnrollmentsGroupByOutputType[P]> : Prisma.GetScalarType<T[P], EnrollmentsGroupByOutputType[P]>;
}>>;
export type enrollmentsWhereInput = {
    AND?: Prisma.enrollmentsWhereInput | Prisma.enrollmentsWhereInput[];
    OR?: Prisma.enrollmentsWhereInput[];
    NOT?: Prisma.enrollmentsWhereInput | Prisma.enrollmentsWhereInput[];
    id?: Prisma.BigIntFilter<"enrollments"> | bigint | number;
    user_id?: Prisma.BigIntFilter<"enrollments"> | bigint | number;
    course_id?: Prisma.BigIntFilter<"enrollments"> | bigint | number;
    coupon_id?: Prisma.BigIntNullableFilter<"enrollments"> | bigint | number | null;
    enrollment_date?: Prisma.DateTimeFilter<"enrollments"> | Date | string;
    completion_date?: Prisma.DateTimeNullableFilter<"enrollments"> | Date | string | null;
    status?: Prisma.Enumenrollments_statusFilter<"enrollments"> | $Enums.enrollments_status;
    payment_status?: Prisma.Enumenrollments_payment_statusFilter<"enrollments"> | $Enums.enrollments_payment_status;
    progress_percentage?: Prisma.DecimalFilter<"enrollments"> | runtime.Decimal | runtime.DecimalJsLike | number | string;
    original_price?: Prisma.DecimalFilter<"enrollments"> | runtime.Decimal | runtime.DecimalJsLike | number | string;
    final_price?: Prisma.DecimalFilter<"enrollments"> | runtime.Decimal | runtime.DecimalJsLike | number | string;
    created_at?: Prisma.DateTimeNullableFilter<"enrollments"> | Date | string | null;
    updated_at?: Prisma.DateTimeNullableFilter<"enrollments"> | Date | string | null;
    certificates?: Prisma.CertificatesListRelationFilter;
    coupons?: Prisma.XOR<Prisma.CouponsNullableScalarRelationFilter, Prisma.couponsWhereInput> | null;
    courses?: Prisma.XOR<Prisma.CoursesScalarRelationFilter, Prisma.coursesWhereInput>;
    users?: Prisma.XOR<Prisma.UsersScalarRelationFilter, Prisma.usersWhereInput>;
};
export type enrollmentsOrderByWithRelationInput = {
    id?: Prisma.SortOrder;
    user_id?: Prisma.SortOrder;
    course_id?: Prisma.SortOrder;
    coupon_id?: Prisma.SortOrderInput | Prisma.SortOrder;
    enrollment_date?: Prisma.SortOrder;
    completion_date?: Prisma.SortOrderInput | Prisma.SortOrder;
    status?: Prisma.SortOrder;
    payment_status?: Prisma.SortOrder;
    progress_percentage?: Prisma.SortOrder;
    original_price?: Prisma.SortOrder;
    final_price?: Prisma.SortOrder;
    created_at?: Prisma.SortOrderInput | Prisma.SortOrder;
    updated_at?: Prisma.SortOrderInput | Prisma.SortOrder;
    certificates?: Prisma.certificatesOrderByRelationAggregateInput;
    coupons?: Prisma.couponsOrderByWithRelationInput;
    courses?: Prisma.coursesOrderByWithRelationInput;
    users?: Prisma.usersOrderByWithRelationInput;
};
export type enrollmentsWhereUniqueInput = Prisma.AtLeast<{
    id?: bigint | number;
    user_id_course_id?: Prisma.enrollmentsUser_idCourse_idCompoundUniqueInput;
    AND?: Prisma.enrollmentsWhereInput | Prisma.enrollmentsWhereInput[];
    OR?: Prisma.enrollmentsWhereInput[];
    NOT?: Prisma.enrollmentsWhereInput | Prisma.enrollmentsWhereInput[];
    user_id?: Prisma.BigIntFilter<"enrollments"> | bigint | number;
    course_id?: Prisma.BigIntFilter<"enrollments"> | bigint | number;
    coupon_id?: Prisma.BigIntNullableFilter<"enrollments"> | bigint | number | null;
    enrollment_date?: Prisma.DateTimeFilter<"enrollments"> | Date | string;
    completion_date?: Prisma.DateTimeNullableFilter<"enrollments"> | Date | string | null;
    status?: Prisma.Enumenrollments_statusFilter<"enrollments"> | $Enums.enrollments_status;
    payment_status?: Prisma.Enumenrollments_payment_statusFilter<"enrollments"> | $Enums.enrollments_payment_status;
    progress_percentage?: Prisma.DecimalFilter<"enrollments"> | runtime.Decimal | runtime.DecimalJsLike | number | string;
    original_price?: Prisma.DecimalFilter<"enrollments"> | runtime.Decimal | runtime.DecimalJsLike | number | string;
    final_price?: Prisma.DecimalFilter<"enrollments"> | runtime.Decimal | runtime.DecimalJsLike | number | string;
    created_at?: Prisma.DateTimeNullableFilter<"enrollments"> | Date | string | null;
    updated_at?: Prisma.DateTimeNullableFilter<"enrollments"> | Date | string | null;
    certificates?: Prisma.CertificatesListRelationFilter;
    coupons?: Prisma.XOR<Prisma.CouponsNullableScalarRelationFilter, Prisma.couponsWhereInput> | null;
    courses?: Prisma.XOR<Prisma.CoursesScalarRelationFilter, Prisma.coursesWhereInput>;
    users?: Prisma.XOR<Prisma.UsersScalarRelationFilter, Prisma.usersWhereInput>;
}, "id" | "user_id_course_id">;
export type enrollmentsOrderByWithAggregationInput = {
    id?: Prisma.SortOrder;
    user_id?: Prisma.SortOrder;
    course_id?: Prisma.SortOrder;
    coupon_id?: Prisma.SortOrderInput | Prisma.SortOrder;
    enrollment_date?: Prisma.SortOrder;
    completion_date?: Prisma.SortOrderInput | Prisma.SortOrder;
    status?: Prisma.SortOrder;
    payment_status?: Prisma.SortOrder;
    progress_percentage?: Prisma.SortOrder;
    original_price?: Prisma.SortOrder;
    final_price?: Prisma.SortOrder;
    created_at?: Prisma.SortOrderInput | Prisma.SortOrder;
    updated_at?: Prisma.SortOrderInput | Prisma.SortOrder;
    _count?: Prisma.enrollmentsCountOrderByAggregateInput;
    _avg?: Prisma.enrollmentsAvgOrderByAggregateInput;
    _max?: Prisma.enrollmentsMaxOrderByAggregateInput;
    _min?: Prisma.enrollmentsMinOrderByAggregateInput;
    _sum?: Prisma.enrollmentsSumOrderByAggregateInput;
};
export type enrollmentsScalarWhereWithAggregatesInput = {
    AND?: Prisma.enrollmentsScalarWhereWithAggregatesInput | Prisma.enrollmentsScalarWhereWithAggregatesInput[];
    OR?: Prisma.enrollmentsScalarWhereWithAggregatesInput[];
    NOT?: Prisma.enrollmentsScalarWhereWithAggregatesInput | Prisma.enrollmentsScalarWhereWithAggregatesInput[];
    id?: Prisma.BigIntWithAggregatesFilter<"enrollments"> | bigint | number;
    user_id?: Prisma.BigIntWithAggregatesFilter<"enrollments"> | bigint | number;
    course_id?: Prisma.BigIntWithAggregatesFilter<"enrollments"> | bigint | number;
    coupon_id?: Prisma.BigIntNullableWithAggregatesFilter<"enrollments"> | bigint | number | null;
    enrollment_date?: Prisma.DateTimeWithAggregatesFilter<"enrollments"> | Date | string;
    completion_date?: Prisma.DateTimeNullableWithAggregatesFilter<"enrollments"> | Date | string | null;
    status?: Prisma.Enumenrollments_statusWithAggregatesFilter<"enrollments"> | $Enums.enrollments_status;
    payment_status?: Prisma.Enumenrollments_payment_statusWithAggregatesFilter<"enrollments"> | $Enums.enrollments_payment_status;
    progress_percentage?: Prisma.DecimalWithAggregatesFilter<"enrollments"> | runtime.Decimal | runtime.DecimalJsLike | number | string;
    original_price?: Prisma.DecimalWithAggregatesFilter<"enrollments"> | runtime.Decimal | runtime.DecimalJsLike | number | string;
    final_price?: Prisma.DecimalWithAggregatesFilter<"enrollments"> | runtime.Decimal | runtime.DecimalJsLike | number | string;
    created_at?: Prisma.DateTimeNullableWithAggregatesFilter<"enrollments"> | Date | string | null;
    updated_at?: Prisma.DateTimeNullableWithAggregatesFilter<"enrollments"> | Date | string | null;
};
export type enrollmentsCreateInput = {
    id?: bigint | number;
    enrollment_date?: Date | string;
    completion_date?: Date | string | null;
    status?: $Enums.enrollments_status;
    payment_status?: $Enums.enrollments_payment_status;
    progress_percentage?: runtime.Decimal | runtime.DecimalJsLike | number | string;
    original_price: runtime.Decimal | runtime.DecimalJsLike | number | string;
    final_price: runtime.Decimal | runtime.DecimalJsLike | number | string;
    created_at?: Date | string | null;
    updated_at?: Date | string | null;
    certificates?: Prisma.certificatesCreateNestedManyWithoutEnrollmentsInput;
    coupons?: Prisma.couponsCreateNestedOneWithoutEnrollmentsInput;
    courses: Prisma.coursesCreateNestedOneWithoutEnrollmentsInput;
    users: Prisma.usersCreateNestedOneWithoutEnrollmentsInput;
};
export type enrollmentsUncheckedCreateInput = {
    id?: bigint | number;
    user_id: bigint | number;
    course_id: bigint | number;
    coupon_id?: bigint | number | null;
    enrollment_date?: Date | string;
    completion_date?: Date | string | null;
    status?: $Enums.enrollments_status;
    payment_status?: $Enums.enrollments_payment_status;
    progress_percentage?: runtime.Decimal | runtime.DecimalJsLike | number | string;
    original_price: runtime.Decimal | runtime.DecimalJsLike | number | string;
    final_price: runtime.Decimal | runtime.DecimalJsLike | number | string;
    created_at?: Date | string | null;
    updated_at?: Date | string | null;
    certificates?: Prisma.certificatesUncheckedCreateNestedManyWithoutEnrollmentsInput;
};
export type enrollmentsUpdateInput = {
    id?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    enrollment_date?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    completion_date?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    status?: Prisma.Enumenrollments_statusFieldUpdateOperationsInput | $Enums.enrollments_status;
    payment_status?: Prisma.Enumenrollments_payment_statusFieldUpdateOperationsInput | $Enums.enrollments_payment_status;
    progress_percentage?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    original_price?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    final_price?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    created_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    updated_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    certificates?: Prisma.certificatesUpdateManyWithoutEnrollmentsNestedInput;
    coupons?: Prisma.couponsUpdateOneWithoutEnrollmentsNestedInput;
    courses?: Prisma.coursesUpdateOneRequiredWithoutEnrollmentsNestedInput;
    users?: Prisma.usersUpdateOneRequiredWithoutEnrollmentsNestedInput;
};
export type enrollmentsUncheckedUpdateInput = {
    id?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    user_id?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    course_id?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    coupon_id?: Prisma.NullableBigIntFieldUpdateOperationsInput | bigint | number | null;
    enrollment_date?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    completion_date?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    status?: Prisma.Enumenrollments_statusFieldUpdateOperationsInput | $Enums.enrollments_status;
    payment_status?: Prisma.Enumenrollments_payment_statusFieldUpdateOperationsInput | $Enums.enrollments_payment_status;
    progress_percentage?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    original_price?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    final_price?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    created_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    updated_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    certificates?: Prisma.certificatesUncheckedUpdateManyWithoutEnrollmentsNestedInput;
};
export type enrollmentsCreateManyInput = {
    id?: bigint | number;
    user_id: bigint | number;
    course_id: bigint | number;
    coupon_id?: bigint | number | null;
    enrollment_date?: Date | string;
    completion_date?: Date | string | null;
    status?: $Enums.enrollments_status;
    payment_status?: $Enums.enrollments_payment_status;
    progress_percentage?: runtime.Decimal | runtime.DecimalJsLike | number | string;
    original_price: runtime.Decimal | runtime.DecimalJsLike | number | string;
    final_price: runtime.Decimal | runtime.DecimalJsLike | number | string;
    created_at?: Date | string | null;
    updated_at?: Date | string | null;
};
export type enrollmentsUpdateManyMutationInput = {
    id?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    enrollment_date?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    completion_date?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    status?: Prisma.Enumenrollments_statusFieldUpdateOperationsInput | $Enums.enrollments_status;
    payment_status?: Prisma.Enumenrollments_payment_statusFieldUpdateOperationsInput | $Enums.enrollments_payment_status;
    progress_percentage?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    original_price?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    final_price?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    created_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    updated_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
};
export type enrollmentsUncheckedUpdateManyInput = {
    id?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    user_id?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    course_id?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    coupon_id?: Prisma.NullableBigIntFieldUpdateOperationsInput | bigint | number | null;
    enrollment_date?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    completion_date?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    status?: Prisma.Enumenrollments_statusFieldUpdateOperationsInput | $Enums.enrollments_status;
    payment_status?: Prisma.Enumenrollments_payment_statusFieldUpdateOperationsInput | $Enums.enrollments_payment_status;
    progress_percentage?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    original_price?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    final_price?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    created_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    updated_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
};
export type EnrollmentsScalarRelationFilter = {
    is?: Prisma.enrollmentsWhereInput;
    isNot?: Prisma.enrollmentsWhereInput;
};
export type EnrollmentsListRelationFilter = {
    every?: Prisma.enrollmentsWhereInput;
    some?: Prisma.enrollmentsWhereInput;
    none?: Prisma.enrollmentsWhereInput;
};
export type enrollmentsOrderByRelationAggregateInput = {
    _count?: Prisma.SortOrder;
};
export type enrollmentsUser_idCourse_idCompoundUniqueInput = {
    user_id: bigint | number;
    course_id: bigint | number;
};
export type enrollmentsCountOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    user_id?: Prisma.SortOrder;
    course_id?: Prisma.SortOrder;
    coupon_id?: Prisma.SortOrder;
    enrollment_date?: Prisma.SortOrder;
    completion_date?: Prisma.SortOrder;
    status?: Prisma.SortOrder;
    payment_status?: Prisma.SortOrder;
    progress_percentage?: Prisma.SortOrder;
    original_price?: Prisma.SortOrder;
    final_price?: Prisma.SortOrder;
    created_at?: Prisma.SortOrder;
    updated_at?: Prisma.SortOrder;
};
export type enrollmentsAvgOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    user_id?: Prisma.SortOrder;
    course_id?: Prisma.SortOrder;
    coupon_id?: Prisma.SortOrder;
    progress_percentage?: Prisma.SortOrder;
    original_price?: Prisma.SortOrder;
    final_price?: Prisma.SortOrder;
};
export type enrollmentsMaxOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    user_id?: Prisma.SortOrder;
    course_id?: Prisma.SortOrder;
    coupon_id?: Prisma.SortOrder;
    enrollment_date?: Prisma.SortOrder;
    completion_date?: Prisma.SortOrder;
    status?: Prisma.SortOrder;
    payment_status?: Prisma.SortOrder;
    progress_percentage?: Prisma.SortOrder;
    original_price?: Prisma.SortOrder;
    final_price?: Prisma.SortOrder;
    created_at?: Prisma.SortOrder;
    updated_at?: Prisma.SortOrder;
};
export type enrollmentsMinOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    user_id?: Prisma.SortOrder;
    course_id?: Prisma.SortOrder;
    coupon_id?: Prisma.SortOrder;
    enrollment_date?: Prisma.SortOrder;
    completion_date?: Prisma.SortOrder;
    status?: Prisma.SortOrder;
    payment_status?: Prisma.SortOrder;
    progress_percentage?: Prisma.SortOrder;
    original_price?: Prisma.SortOrder;
    final_price?: Prisma.SortOrder;
    created_at?: Prisma.SortOrder;
    updated_at?: Prisma.SortOrder;
};
export type enrollmentsSumOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    user_id?: Prisma.SortOrder;
    course_id?: Prisma.SortOrder;
    coupon_id?: Prisma.SortOrder;
    progress_percentage?: Prisma.SortOrder;
    original_price?: Prisma.SortOrder;
    final_price?: Prisma.SortOrder;
};
export type enrollmentsCreateNestedOneWithoutCertificatesInput = {
    create?: Prisma.XOR<Prisma.enrollmentsCreateWithoutCertificatesInput, Prisma.enrollmentsUncheckedCreateWithoutCertificatesInput>;
    connectOrCreate?: Prisma.enrollmentsCreateOrConnectWithoutCertificatesInput;
    connect?: Prisma.enrollmentsWhereUniqueInput;
};
export type enrollmentsUpdateOneRequiredWithoutCertificatesNestedInput = {
    create?: Prisma.XOR<Prisma.enrollmentsCreateWithoutCertificatesInput, Prisma.enrollmentsUncheckedCreateWithoutCertificatesInput>;
    connectOrCreate?: Prisma.enrollmentsCreateOrConnectWithoutCertificatesInput;
    upsert?: Prisma.enrollmentsUpsertWithoutCertificatesInput;
    connect?: Prisma.enrollmentsWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.enrollmentsUpdateToOneWithWhereWithoutCertificatesInput, Prisma.enrollmentsUpdateWithoutCertificatesInput>, Prisma.enrollmentsUncheckedUpdateWithoutCertificatesInput>;
};
export type enrollmentsCreateNestedManyWithoutCouponsInput = {
    create?: Prisma.XOR<Prisma.enrollmentsCreateWithoutCouponsInput, Prisma.enrollmentsUncheckedCreateWithoutCouponsInput> | Prisma.enrollmentsCreateWithoutCouponsInput[] | Prisma.enrollmentsUncheckedCreateWithoutCouponsInput[];
    connectOrCreate?: Prisma.enrollmentsCreateOrConnectWithoutCouponsInput | Prisma.enrollmentsCreateOrConnectWithoutCouponsInput[];
    createMany?: Prisma.enrollmentsCreateManyCouponsInputEnvelope;
    connect?: Prisma.enrollmentsWhereUniqueInput | Prisma.enrollmentsWhereUniqueInput[];
};
export type enrollmentsUncheckedCreateNestedManyWithoutCouponsInput = {
    create?: Prisma.XOR<Prisma.enrollmentsCreateWithoutCouponsInput, Prisma.enrollmentsUncheckedCreateWithoutCouponsInput> | Prisma.enrollmentsCreateWithoutCouponsInput[] | Prisma.enrollmentsUncheckedCreateWithoutCouponsInput[];
    connectOrCreate?: Prisma.enrollmentsCreateOrConnectWithoutCouponsInput | Prisma.enrollmentsCreateOrConnectWithoutCouponsInput[];
    createMany?: Prisma.enrollmentsCreateManyCouponsInputEnvelope;
    connect?: Prisma.enrollmentsWhereUniqueInput | Prisma.enrollmentsWhereUniqueInput[];
};
export type enrollmentsUpdateManyWithoutCouponsNestedInput = {
    create?: Prisma.XOR<Prisma.enrollmentsCreateWithoutCouponsInput, Prisma.enrollmentsUncheckedCreateWithoutCouponsInput> | Prisma.enrollmentsCreateWithoutCouponsInput[] | Prisma.enrollmentsUncheckedCreateWithoutCouponsInput[];
    connectOrCreate?: Prisma.enrollmentsCreateOrConnectWithoutCouponsInput | Prisma.enrollmentsCreateOrConnectWithoutCouponsInput[];
    upsert?: Prisma.enrollmentsUpsertWithWhereUniqueWithoutCouponsInput | Prisma.enrollmentsUpsertWithWhereUniqueWithoutCouponsInput[];
    createMany?: Prisma.enrollmentsCreateManyCouponsInputEnvelope;
    set?: Prisma.enrollmentsWhereUniqueInput | Prisma.enrollmentsWhereUniqueInput[];
    disconnect?: Prisma.enrollmentsWhereUniqueInput | Prisma.enrollmentsWhereUniqueInput[];
    delete?: Prisma.enrollmentsWhereUniqueInput | Prisma.enrollmentsWhereUniqueInput[];
    connect?: Prisma.enrollmentsWhereUniqueInput | Prisma.enrollmentsWhereUniqueInput[];
    update?: Prisma.enrollmentsUpdateWithWhereUniqueWithoutCouponsInput | Prisma.enrollmentsUpdateWithWhereUniqueWithoutCouponsInput[];
    updateMany?: Prisma.enrollmentsUpdateManyWithWhereWithoutCouponsInput | Prisma.enrollmentsUpdateManyWithWhereWithoutCouponsInput[];
    deleteMany?: Prisma.enrollmentsScalarWhereInput | Prisma.enrollmentsScalarWhereInput[];
};
export type enrollmentsUncheckedUpdateManyWithoutCouponsNestedInput = {
    create?: Prisma.XOR<Prisma.enrollmentsCreateWithoutCouponsInput, Prisma.enrollmentsUncheckedCreateWithoutCouponsInput> | Prisma.enrollmentsCreateWithoutCouponsInput[] | Prisma.enrollmentsUncheckedCreateWithoutCouponsInput[];
    connectOrCreate?: Prisma.enrollmentsCreateOrConnectWithoutCouponsInput | Prisma.enrollmentsCreateOrConnectWithoutCouponsInput[];
    upsert?: Prisma.enrollmentsUpsertWithWhereUniqueWithoutCouponsInput | Prisma.enrollmentsUpsertWithWhereUniqueWithoutCouponsInput[];
    createMany?: Prisma.enrollmentsCreateManyCouponsInputEnvelope;
    set?: Prisma.enrollmentsWhereUniqueInput | Prisma.enrollmentsWhereUniqueInput[];
    disconnect?: Prisma.enrollmentsWhereUniqueInput | Prisma.enrollmentsWhereUniqueInput[];
    delete?: Prisma.enrollmentsWhereUniqueInput | Prisma.enrollmentsWhereUniqueInput[];
    connect?: Prisma.enrollmentsWhereUniqueInput | Prisma.enrollmentsWhereUniqueInput[];
    update?: Prisma.enrollmentsUpdateWithWhereUniqueWithoutCouponsInput | Prisma.enrollmentsUpdateWithWhereUniqueWithoutCouponsInput[];
    updateMany?: Prisma.enrollmentsUpdateManyWithWhereWithoutCouponsInput | Prisma.enrollmentsUpdateManyWithWhereWithoutCouponsInput[];
    deleteMany?: Prisma.enrollmentsScalarWhereInput | Prisma.enrollmentsScalarWhereInput[];
};
export type enrollmentsCreateNestedManyWithoutCoursesInput = {
    create?: Prisma.XOR<Prisma.enrollmentsCreateWithoutCoursesInput, Prisma.enrollmentsUncheckedCreateWithoutCoursesInput> | Prisma.enrollmentsCreateWithoutCoursesInput[] | Prisma.enrollmentsUncheckedCreateWithoutCoursesInput[];
    connectOrCreate?: Prisma.enrollmentsCreateOrConnectWithoutCoursesInput | Prisma.enrollmentsCreateOrConnectWithoutCoursesInput[];
    createMany?: Prisma.enrollmentsCreateManyCoursesInputEnvelope;
    connect?: Prisma.enrollmentsWhereUniqueInput | Prisma.enrollmentsWhereUniqueInput[];
};
export type enrollmentsUncheckedCreateNestedManyWithoutCoursesInput = {
    create?: Prisma.XOR<Prisma.enrollmentsCreateWithoutCoursesInput, Prisma.enrollmentsUncheckedCreateWithoutCoursesInput> | Prisma.enrollmentsCreateWithoutCoursesInput[] | Prisma.enrollmentsUncheckedCreateWithoutCoursesInput[];
    connectOrCreate?: Prisma.enrollmentsCreateOrConnectWithoutCoursesInput | Prisma.enrollmentsCreateOrConnectWithoutCoursesInput[];
    createMany?: Prisma.enrollmentsCreateManyCoursesInputEnvelope;
    connect?: Prisma.enrollmentsWhereUniqueInput | Prisma.enrollmentsWhereUniqueInput[];
};
export type enrollmentsUpdateManyWithoutCoursesNestedInput = {
    create?: Prisma.XOR<Prisma.enrollmentsCreateWithoutCoursesInput, Prisma.enrollmentsUncheckedCreateWithoutCoursesInput> | Prisma.enrollmentsCreateWithoutCoursesInput[] | Prisma.enrollmentsUncheckedCreateWithoutCoursesInput[];
    connectOrCreate?: Prisma.enrollmentsCreateOrConnectWithoutCoursesInput | Prisma.enrollmentsCreateOrConnectWithoutCoursesInput[];
    upsert?: Prisma.enrollmentsUpsertWithWhereUniqueWithoutCoursesInput | Prisma.enrollmentsUpsertWithWhereUniqueWithoutCoursesInput[];
    createMany?: Prisma.enrollmentsCreateManyCoursesInputEnvelope;
    set?: Prisma.enrollmentsWhereUniqueInput | Prisma.enrollmentsWhereUniqueInput[];
    disconnect?: Prisma.enrollmentsWhereUniqueInput | Prisma.enrollmentsWhereUniqueInput[];
    delete?: Prisma.enrollmentsWhereUniqueInput | Prisma.enrollmentsWhereUniqueInput[];
    connect?: Prisma.enrollmentsWhereUniqueInput | Prisma.enrollmentsWhereUniqueInput[];
    update?: Prisma.enrollmentsUpdateWithWhereUniqueWithoutCoursesInput | Prisma.enrollmentsUpdateWithWhereUniqueWithoutCoursesInput[];
    updateMany?: Prisma.enrollmentsUpdateManyWithWhereWithoutCoursesInput | Prisma.enrollmentsUpdateManyWithWhereWithoutCoursesInput[];
    deleteMany?: Prisma.enrollmentsScalarWhereInput | Prisma.enrollmentsScalarWhereInput[];
};
export type enrollmentsUncheckedUpdateManyWithoutCoursesNestedInput = {
    create?: Prisma.XOR<Prisma.enrollmentsCreateWithoutCoursesInput, Prisma.enrollmentsUncheckedCreateWithoutCoursesInput> | Prisma.enrollmentsCreateWithoutCoursesInput[] | Prisma.enrollmentsUncheckedCreateWithoutCoursesInput[];
    connectOrCreate?: Prisma.enrollmentsCreateOrConnectWithoutCoursesInput | Prisma.enrollmentsCreateOrConnectWithoutCoursesInput[];
    upsert?: Prisma.enrollmentsUpsertWithWhereUniqueWithoutCoursesInput | Prisma.enrollmentsUpsertWithWhereUniqueWithoutCoursesInput[];
    createMany?: Prisma.enrollmentsCreateManyCoursesInputEnvelope;
    set?: Prisma.enrollmentsWhereUniqueInput | Prisma.enrollmentsWhereUniqueInput[];
    disconnect?: Prisma.enrollmentsWhereUniqueInput | Prisma.enrollmentsWhereUniqueInput[];
    delete?: Prisma.enrollmentsWhereUniqueInput | Prisma.enrollmentsWhereUniqueInput[];
    connect?: Prisma.enrollmentsWhereUniqueInput | Prisma.enrollmentsWhereUniqueInput[];
    update?: Prisma.enrollmentsUpdateWithWhereUniqueWithoutCoursesInput | Prisma.enrollmentsUpdateWithWhereUniqueWithoutCoursesInput[];
    updateMany?: Prisma.enrollmentsUpdateManyWithWhereWithoutCoursesInput | Prisma.enrollmentsUpdateManyWithWhereWithoutCoursesInput[];
    deleteMany?: Prisma.enrollmentsScalarWhereInput | Prisma.enrollmentsScalarWhereInput[];
};
export type Enumenrollments_statusFieldUpdateOperationsInput = {
    set?: $Enums.enrollments_status;
};
export type Enumenrollments_payment_statusFieldUpdateOperationsInput = {
    set?: $Enums.enrollments_payment_status;
};
export type enrollmentsCreateNestedManyWithoutUsersInput = {
    create?: Prisma.XOR<Prisma.enrollmentsCreateWithoutUsersInput, Prisma.enrollmentsUncheckedCreateWithoutUsersInput> | Prisma.enrollmentsCreateWithoutUsersInput[] | Prisma.enrollmentsUncheckedCreateWithoutUsersInput[];
    connectOrCreate?: Prisma.enrollmentsCreateOrConnectWithoutUsersInput | Prisma.enrollmentsCreateOrConnectWithoutUsersInput[];
    createMany?: Prisma.enrollmentsCreateManyUsersInputEnvelope;
    connect?: Prisma.enrollmentsWhereUniqueInput | Prisma.enrollmentsWhereUniqueInput[];
};
export type enrollmentsUncheckedCreateNestedManyWithoutUsersInput = {
    create?: Prisma.XOR<Prisma.enrollmentsCreateWithoutUsersInput, Prisma.enrollmentsUncheckedCreateWithoutUsersInput> | Prisma.enrollmentsCreateWithoutUsersInput[] | Prisma.enrollmentsUncheckedCreateWithoutUsersInput[];
    connectOrCreate?: Prisma.enrollmentsCreateOrConnectWithoutUsersInput | Prisma.enrollmentsCreateOrConnectWithoutUsersInput[];
    createMany?: Prisma.enrollmentsCreateManyUsersInputEnvelope;
    connect?: Prisma.enrollmentsWhereUniqueInput | Prisma.enrollmentsWhereUniqueInput[];
};
export type enrollmentsUpdateManyWithoutUsersNestedInput = {
    create?: Prisma.XOR<Prisma.enrollmentsCreateWithoutUsersInput, Prisma.enrollmentsUncheckedCreateWithoutUsersInput> | Prisma.enrollmentsCreateWithoutUsersInput[] | Prisma.enrollmentsUncheckedCreateWithoutUsersInput[];
    connectOrCreate?: Prisma.enrollmentsCreateOrConnectWithoutUsersInput | Prisma.enrollmentsCreateOrConnectWithoutUsersInput[];
    upsert?: Prisma.enrollmentsUpsertWithWhereUniqueWithoutUsersInput | Prisma.enrollmentsUpsertWithWhereUniqueWithoutUsersInput[];
    createMany?: Prisma.enrollmentsCreateManyUsersInputEnvelope;
    set?: Prisma.enrollmentsWhereUniqueInput | Prisma.enrollmentsWhereUniqueInput[];
    disconnect?: Prisma.enrollmentsWhereUniqueInput | Prisma.enrollmentsWhereUniqueInput[];
    delete?: Prisma.enrollmentsWhereUniqueInput | Prisma.enrollmentsWhereUniqueInput[];
    connect?: Prisma.enrollmentsWhereUniqueInput | Prisma.enrollmentsWhereUniqueInput[];
    update?: Prisma.enrollmentsUpdateWithWhereUniqueWithoutUsersInput | Prisma.enrollmentsUpdateWithWhereUniqueWithoutUsersInput[];
    updateMany?: Prisma.enrollmentsUpdateManyWithWhereWithoutUsersInput | Prisma.enrollmentsUpdateManyWithWhereWithoutUsersInput[];
    deleteMany?: Prisma.enrollmentsScalarWhereInput | Prisma.enrollmentsScalarWhereInput[];
};
export type enrollmentsUncheckedUpdateManyWithoutUsersNestedInput = {
    create?: Prisma.XOR<Prisma.enrollmentsCreateWithoutUsersInput, Prisma.enrollmentsUncheckedCreateWithoutUsersInput> | Prisma.enrollmentsCreateWithoutUsersInput[] | Prisma.enrollmentsUncheckedCreateWithoutUsersInput[];
    connectOrCreate?: Prisma.enrollmentsCreateOrConnectWithoutUsersInput | Prisma.enrollmentsCreateOrConnectWithoutUsersInput[];
    upsert?: Prisma.enrollmentsUpsertWithWhereUniqueWithoutUsersInput | Prisma.enrollmentsUpsertWithWhereUniqueWithoutUsersInput[];
    createMany?: Prisma.enrollmentsCreateManyUsersInputEnvelope;
    set?: Prisma.enrollmentsWhereUniqueInput | Prisma.enrollmentsWhereUniqueInput[];
    disconnect?: Prisma.enrollmentsWhereUniqueInput | Prisma.enrollmentsWhereUniqueInput[];
    delete?: Prisma.enrollmentsWhereUniqueInput | Prisma.enrollmentsWhereUniqueInput[];
    connect?: Prisma.enrollmentsWhereUniqueInput | Prisma.enrollmentsWhereUniqueInput[];
    update?: Prisma.enrollmentsUpdateWithWhereUniqueWithoutUsersInput | Prisma.enrollmentsUpdateWithWhereUniqueWithoutUsersInput[];
    updateMany?: Prisma.enrollmentsUpdateManyWithWhereWithoutUsersInput | Prisma.enrollmentsUpdateManyWithWhereWithoutUsersInput[];
    deleteMany?: Prisma.enrollmentsScalarWhereInput | Prisma.enrollmentsScalarWhereInput[];
};
export type enrollmentsCreateWithoutCertificatesInput = {
    id?: bigint | number;
    enrollment_date?: Date | string;
    completion_date?: Date | string | null;
    status?: $Enums.enrollments_status;
    payment_status?: $Enums.enrollments_payment_status;
    progress_percentage?: runtime.Decimal | runtime.DecimalJsLike | number | string;
    original_price: runtime.Decimal | runtime.DecimalJsLike | number | string;
    final_price: runtime.Decimal | runtime.DecimalJsLike | number | string;
    created_at?: Date | string | null;
    updated_at?: Date | string | null;
    coupons?: Prisma.couponsCreateNestedOneWithoutEnrollmentsInput;
    courses: Prisma.coursesCreateNestedOneWithoutEnrollmentsInput;
    users: Prisma.usersCreateNestedOneWithoutEnrollmentsInput;
};
export type enrollmentsUncheckedCreateWithoutCertificatesInput = {
    id?: bigint | number;
    user_id: bigint | number;
    course_id: bigint | number;
    coupon_id?: bigint | number | null;
    enrollment_date?: Date | string;
    completion_date?: Date | string | null;
    status?: $Enums.enrollments_status;
    payment_status?: $Enums.enrollments_payment_status;
    progress_percentage?: runtime.Decimal | runtime.DecimalJsLike | number | string;
    original_price: runtime.Decimal | runtime.DecimalJsLike | number | string;
    final_price: runtime.Decimal | runtime.DecimalJsLike | number | string;
    created_at?: Date | string | null;
    updated_at?: Date | string | null;
};
export type enrollmentsCreateOrConnectWithoutCertificatesInput = {
    where: Prisma.enrollmentsWhereUniqueInput;
    create: Prisma.XOR<Prisma.enrollmentsCreateWithoutCertificatesInput, Prisma.enrollmentsUncheckedCreateWithoutCertificatesInput>;
};
export type enrollmentsUpsertWithoutCertificatesInput = {
    update: Prisma.XOR<Prisma.enrollmentsUpdateWithoutCertificatesInput, Prisma.enrollmentsUncheckedUpdateWithoutCertificatesInput>;
    create: Prisma.XOR<Prisma.enrollmentsCreateWithoutCertificatesInput, Prisma.enrollmentsUncheckedCreateWithoutCertificatesInput>;
    where?: Prisma.enrollmentsWhereInput;
};
export type enrollmentsUpdateToOneWithWhereWithoutCertificatesInput = {
    where?: Prisma.enrollmentsWhereInput;
    data: Prisma.XOR<Prisma.enrollmentsUpdateWithoutCertificatesInput, Prisma.enrollmentsUncheckedUpdateWithoutCertificatesInput>;
};
export type enrollmentsUpdateWithoutCertificatesInput = {
    id?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    enrollment_date?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    completion_date?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    status?: Prisma.Enumenrollments_statusFieldUpdateOperationsInput | $Enums.enrollments_status;
    payment_status?: Prisma.Enumenrollments_payment_statusFieldUpdateOperationsInput | $Enums.enrollments_payment_status;
    progress_percentage?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    original_price?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    final_price?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    created_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    updated_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    coupons?: Prisma.couponsUpdateOneWithoutEnrollmentsNestedInput;
    courses?: Prisma.coursesUpdateOneRequiredWithoutEnrollmentsNestedInput;
    users?: Prisma.usersUpdateOneRequiredWithoutEnrollmentsNestedInput;
};
export type enrollmentsUncheckedUpdateWithoutCertificatesInput = {
    id?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    user_id?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    course_id?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    coupon_id?: Prisma.NullableBigIntFieldUpdateOperationsInput | bigint | number | null;
    enrollment_date?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    completion_date?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    status?: Prisma.Enumenrollments_statusFieldUpdateOperationsInput | $Enums.enrollments_status;
    payment_status?: Prisma.Enumenrollments_payment_statusFieldUpdateOperationsInput | $Enums.enrollments_payment_status;
    progress_percentage?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    original_price?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    final_price?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    created_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    updated_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
};
export type enrollmentsCreateWithoutCouponsInput = {
    id?: bigint | number;
    enrollment_date?: Date | string;
    completion_date?: Date | string | null;
    status?: $Enums.enrollments_status;
    payment_status?: $Enums.enrollments_payment_status;
    progress_percentage?: runtime.Decimal | runtime.DecimalJsLike | number | string;
    original_price: runtime.Decimal | runtime.DecimalJsLike | number | string;
    final_price: runtime.Decimal | runtime.DecimalJsLike | number | string;
    created_at?: Date | string | null;
    updated_at?: Date | string | null;
    certificates?: Prisma.certificatesCreateNestedManyWithoutEnrollmentsInput;
    courses: Prisma.coursesCreateNestedOneWithoutEnrollmentsInput;
    users: Prisma.usersCreateNestedOneWithoutEnrollmentsInput;
};
export type enrollmentsUncheckedCreateWithoutCouponsInput = {
    id?: bigint | number;
    user_id: bigint | number;
    course_id: bigint | number;
    enrollment_date?: Date | string;
    completion_date?: Date | string | null;
    status?: $Enums.enrollments_status;
    payment_status?: $Enums.enrollments_payment_status;
    progress_percentage?: runtime.Decimal | runtime.DecimalJsLike | number | string;
    original_price: runtime.Decimal | runtime.DecimalJsLike | number | string;
    final_price: runtime.Decimal | runtime.DecimalJsLike | number | string;
    created_at?: Date | string | null;
    updated_at?: Date | string | null;
    certificates?: Prisma.certificatesUncheckedCreateNestedManyWithoutEnrollmentsInput;
};
export type enrollmentsCreateOrConnectWithoutCouponsInput = {
    where: Prisma.enrollmentsWhereUniqueInput;
    create: Prisma.XOR<Prisma.enrollmentsCreateWithoutCouponsInput, Prisma.enrollmentsUncheckedCreateWithoutCouponsInput>;
};
export type enrollmentsCreateManyCouponsInputEnvelope = {
    data: Prisma.enrollmentsCreateManyCouponsInput | Prisma.enrollmentsCreateManyCouponsInput[];
    skipDuplicates?: boolean;
};
export type enrollmentsUpsertWithWhereUniqueWithoutCouponsInput = {
    where: Prisma.enrollmentsWhereUniqueInput;
    update: Prisma.XOR<Prisma.enrollmentsUpdateWithoutCouponsInput, Prisma.enrollmentsUncheckedUpdateWithoutCouponsInput>;
    create: Prisma.XOR<Prisma.enrollmentsCreateWithoutCouponsInput, Prisma.enrollmentsUncheckedCreateWithoutCouponsInput>;
};
export type enrollmentsUpdateWithWhereUniqueWithoutCouponsInput = {
    where: Prisma.enrollmentsWhereUniqueInput;
    data: Prisma.XOR<Prisma.enrollmentsUpdateWithoutCouponsInput, Prisma.enrollmentsUncheckedUpdateWithoutCouponsInput>;
};
export type enrollmentsUpdateManyWithWhereWithoutCouponsInput = {
    where: Prisma.enrollmentsScalarWhereInput;
    data: Prisma.XOR<Prisma.enrollmentsUpdateManyMutationInput, Prisma.enrollmentsUncheckedUpdateManyWithoutCouponsInput>;
};
export type enrollmentsScalarWhereInput = {
    AND?: Prisma.enrollmentsScalarWhereInput | Prisma.enrollmentsScalarWhereInput[];
    OR?: Prisma.enrollmentsScalarWhereInput[];
    NOT?: Prisma.enrollmentsScalarWhereInput | Prisma.enrollmentsScalarWhereInput[];
    id?: Prisma.BigIntFilter<"enrollments"> | bigint | number;
    user_id?: Prisma.BigIntFilter<"enrollments"> | bigint | number;
    course_id?: Prisma.BigIntFilter<"enrollments"> | bigint | number;
    coupon_id?: Prisma.BigIntNullableFilter<"enrollments"> | bigint | number | null;
    enrollment_date?: Prisma.DateTimeFilter<"enrollments"> | Date | string;
    completion_date?: Prisma.DateTimeNullableFilter<"enrollments"> | Date | string | null;
    status?: Prisma.Enumenrollments_statusFilter<"enrollments"> | $Enums.enrollments_status;
    payment_status?: Prisma.Enumenrollments_payment_statusFilter<"enrollments"> | $Enums.enrollments_payment_status;
    progress_percentage?: Prisma.DecimalFilter<"enrollments"> | runtime.Decimal | runtime.DecimalJsLike | number | string;
    original_price?: Prisma.DecimalFilter<"enrollments"> | runtime.Decimal | runtime.DecimalJsLike | number | string;
    final_price?: Prisma.DecimalFilter<"enrollments"> | runtime.Decimal | runtime.DecimalJsLike | number | string;
    created_at?: Prisma.DateTimeNullableFilter<"enrollments"> | Date | string | null;
    updated_at?: Prisma.DateTimeNullableFilter<"enrollments"> | Date | string | null;
};
export type enrollmentsCreateWithoutCoursesInput = {
    id?: bigint | number;
    enrollment_date?: Date | string;
    completion_date?: Date | string | null;
    status?: $Enums.enrollments_status;
    payment_status?: $Enums.enrollments_payment_status;
    progress_percentage?: runtime.Decimal | runtime.DecimalJsLike | number | string;
    original_price: runtime.Decimal | runtime.DecimalJsLike | number | string;
    final_price: runtime.Decimal | runtime.DecimalJsLike | number | string;
    created_at?: Date | string | null;
    updated_at?: Date | string | null;
    certificates?: Prisma.certificatesCreateNestedManyWithoutEnrollmentsInput;
    coupons?: Prisma.couponsCreateNestedOneWithoutEnrollmentsInput;
    users: Prisma.usersCreateNestedOneWithoutEnrollmentsInput;
};
export type enrollmentsUncheckedCreateWithoutCoursesInput = {
    id?: bigint | number;
    user_id: bigint | number;
    coupon_id?: bigint | number | null;
    enrollment_date?: Date | string;
    completion_date?: Date | string | null;
    status?: $Enums.enrollments_status;
    payment_status?: $Enums.enrollments_payment_status;
    progress_percentage?: runtime.Decimal | runtime.DecimalJsLike | number | string;
    original_price: runtime.Decimal | runtime.DecimalJsLike | number | string;
    final_price: runtime.Decimal | runtime.DecimalJsLike | number | string;
    created_at?: Date | string | null;
    updated_at?: Date | string | null;
    certificates?: Prisma.certificatesUncheckedCreateNestedManyWithoutEnrollmentsInput;
};
export type enrollmentsCreateOrConnectWithoutCoursesInput = {
    where: Prisma.enrollmentsWhereUniqueInput;
    create: Prisma.XOR<Prisma.enrollmentsCreateWithoutCoursesInput, Prisma.enrollmentsUncheckedCreateWithoutCoursesInput>;
};
export type enrollmentsCreateManyCoursesInputEnvelope = {
    data: Prisma.enrollmentsCreateManyCoursesInput | Prisma.enrollmentsCreateManyCoursesInput[];
    skipDuplicates?: boolean;
};
export type enrollmentsUpsertWithWhereUniqueWithoutCoursesInput = {
    where: Prisma.enrollmentsWhereUniqueInput;
    update: Prisma.XOR<Prisma.enrollmentsUpdateWithoutCoursesInput, Prisma.enrollmentsUncheckedUpdateWithoutCoursesInput>;
    create: Prisma.XOR<Prisma.enrollmentsCreateWithoutCoursesInput, Prisma.enrollmentsUncheckedCreateWithoutCoursesInput>;
};
export type enrollmentsUpdateWithWhereUniqueWithoutCoursesInput = {
    where: Prisma.enrollmentsWhereUniqueInput;
    data: Prisma.XOR<Prisma.enrollmentsUpdateWithoutCoursesInput, Prisma.enrollmentsUncheckedUpdateWithoutCoursesInput>;
};
export type enrollmentsUpdateManyWithWhereWithoutCoursesInput = {
    where: Prisma.enrollmentsScalarWhereInput;
    data: Prisma.XOR<Prisma.enrollmentsUpdateManyMutationInput, Prisma.enrollmentsUncheckedUpdateManyWithoutCoursesInput>;
};
export type enrollmentsCreateWithoutUsersInput = {
    id?: bigint | number;
    enrollment_date?: Date | string;
    completion_date?: Date | string | null;
    status?: $Enums.enrollments_status;
    payment_status?: $Enums.enrollments_payment_status;
    progress_percentage?: runtime.Decimal | runtime.DecimalJsLike | number | string;
    original_price: runtime.Decimal | runtime.DecimalJsLike | number | string;
    final_price: runtime.Decimal | runtime.DecimalJsLike | number | string;
    created_at?: Date | string | null;
    updated_at?: Date | string | null;
    certificates?: Prisma.certificatesCreateNestedManyWithoutEnrollmentsInput;
    coupons?: Prisma.couponsCreateNestedOneWithoutEnrollmentsInput;
    courses: Prisma.coursesCreateNestedOneWithoutEnrollmentsInput;
};
export type enrollmentsUncheckedCreateWithoutUsersInput = {
    id?: bigint | number;
    course_id: bigint | number;
    coupon_id?: bigint | number | null;
    enrollment_date?: Date | string;
    completion_date?: Date | string | null;
    status?: $Enums.enrollments_status;
    payment_status?: $Enums.enrollments_payment_status;
    progress_percentage?: runtime.Decimal | runtime.DecimalJsLike | number | string;
    original_price: runtime.Decimal | runtime.DecimalJsLike | number | string;
    final_price: runtime.Decimal | runtime.DecimalJsLike | number | string;
    created_at?: Date | string | null;
    updated_at?: Date | string | null;
    certificates?: Prisma.certificatesUncheckedCreateNestedManyWithoutEnrollmentsInput;
};
export type enrollmentsCreateOrConnectWithoutUsersInput = {
    where: Prisma.enrollmentsWhereUniqueInput;
    create: Prisma.XOR<Prisma.enrollmentsCreateWithoutUsersInput, Prisma.enrollmentsUncheckedCreateWithoutUsersInput>;
};
export type enrollmentsCreateManyUsersInputEnvelope = {
    data: Prisma.enrollmentsCreateManyUsersInput | Prisma.enrollmentsCreateManyUsersInput[];
    skipDuplicates?: boolean;
};
export type enrollmentsUpsertWithWhereUniqueWithoutUsersInput = {
    where: Prisma.enrollmentsWhereUniqueInput;
    update: Prisma.XOR<Prisma.enrollmentsUpdateWithoutUsersInput, Prisma.enrollmentsUncheckedUpdateWithoutUsersInput>;
    create: Prisma.XOR<Prisma.enrollmentsCreateWithoutUsersInput, Prisma.enrollmentsUncheckedCreateWithoutUsersInput>;
};
export type enrollmentsUpdateWithWhereUniqueWithoutUsersInput = {
    where: Prisma.enrollmentsWhereUniqueInput;
    data: Prisma.XOR<Prisma.enrollmentsUpdateWithoutUsersInput, Prisma.enrollmentsUncheckedUpdateWithoutUsersInput>;
};
export type enrollmentsUpdateManyWithWhereWithoutUsersInput = {
    where: Prisma.enrollmentsScalarWhereInput;
    data: Prisma.XOR<Prisma.enrollmentsUpdateManyMutationInput, Prisma.enrollmentsUncheckedUpdateManyWithoutUsersInput>;
};
export type enrollmentsCreateManyCouponsInput = {
    id?: bigint | number;
    user_id: bigint | number;
    course_id: bigint | number;
    enrollment_date?: Date | string;
    completion_date?: Date | string | null;
    status?: $Enums.enrollments_status;
    payment_status?: $Enums.enrollments_payment_status;
    progress_percentage?: runtime.Decimal | runtime.DecimalJsLike | number | string;
    original_price: runtime.Decimal | runtime.DecimalJsLike | number | string;
    final_price: runtime.Decimal | runtime.DecimalJsLike | number | string;
    created_at?: Date | string | null;
    updated_at?: Date | string | null;
};
export type enrollmentsUpdateWithoutCouponsInput = {
    id?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    enrollment_date?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    completion_date?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    status?: Prisma.Enumenrollments_statusFieldUpdateOperationsInput | $Enums.enrollments_status;
    payment_status?: Prisma.Enumenrollments_payment_statusFieldUpdateOperationsInput | $Enums.enrollments_payment_status;
    progress_percentage?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    original_price?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    final_price?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    created_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    updated_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    certificates?: Prisma.certificatesUpdateManyWithoutEnrollmentsNestedInput;
    courses?: Prisma.coursesUpdateOneRequiredWithoutEnrollmentsNestedInput;
    users?: Prisma.usersUpdateOneRequiredWithoutEnrollmentsNestedInput;
};
export type enrollmentsUncheckedUpdateWithoutCouponsInput = {
    id?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    user_id?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    course_id?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    enrollment_date?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    completion_date?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    status?: Prisma.Enumenrollments_statusFieldUpdateOperationsInput | $Enums.enrollments_status;
    payment_status?: Prisma.Enumenrollments_payment_statusFieldUpdateOperationsInput | $Enums.enrollments_payment_status;
    progress_percentage?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    original_price?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    final_price?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    created_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    updated_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    certificates?: Prisma.certificatesUncheckedUpdateManyWithoutEnrollmentsNestedInput;
};
export type enrollmentsUncheckedUpdateManyWithoutCouponsInput = {
    id?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    user_id?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    course_id?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    enrollment_date?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    completion_date?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    status?: Prisma.Enumenrollments_statusFieldUpdateOperationsInput | $Enums.enrollments_status;
    payment_status?: Prisma.Enumenrollments_payment_statusFieldUpdateOperationsInput | $Enums.enrollments_payment_status;
    progress_percentage?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    original_price?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    final_price?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    created_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    updated_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
};
export type enrollmentsCreateManyCoursesInput = {
    id?: bigint | number;
    user_id: bigint | number;
    coupon_id?: bigint | number | null;
    enrollment_date?: Date | string;
    completion_date?: Date | string | null;
    status?: $Enums.enrollments_status;
    payment_status?: $Enums.enrollments_payment_status;
    progress_percentage?: runtime.Decimal | runtime.DecimalJsLike | number | string;
    original_price: runtime.Decimal | runtime.DecimalJsLike | number | string;
    final_price: runtime.Decimal | runtime.DecimalJsLike | number | string;
    created_at?: Date | string | null;
    updated_at?: Date | string | null;
};
export type enrollmentsUpdateWithoutCoursesInput = {
    id?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    enrollment_date?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    completion_date?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    status?: Prisma.Enumenrollments_statusFieldUpdateOperationsInput | $Enums.enrollments_status;
    payment_status?: Prisma.Enumenrollments_payment_statusFieldUpdateOperationsInput | $Enums.enrollments_payment_status;
    progress_percentage?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    original_price?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    final_price?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    created_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    updated_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    certificates?: Prisma.certificatesUpdateManyWithoutEnrollmentsNestedInput;
    coupons?: Prisma.couponsUpdateOneWithoutEnrollmentsNestedInput;
    users?: Prisma.usersUpdateOneRequiredWithoutEnrollmentsNestedInput;
};
export type enrollmentsUncheckedUpdateWithoutCoursesInput = {
    id?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    user_id?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    coupon_id?: Prisma.NullableBigIntFieldUpdateOperationsInput | bigint | number | null;
    enrollment_date?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    completion_date?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    status?: Prisma.Enumenrollments_statusFieldUpdateOperationsInput | $Enums.enrollments_status;
    payment_status?: Prisma.Enumenrollments_payment_statusFieldUpdateOperationsInput | $Enums.enrollments_payment_status;
    progress_percentage?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    original_price?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    final_price?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    created_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    updated_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    certificates?: Prisma.certificatesUncheckedUpdateManyWithoutEnrollmentsNestedInput;
};
export type enrollmentsUncheckedUpdateManyWithoutCoursesInput = {
    id?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    user_id?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    coupon_id?: Prisma.NullableBigIntFieldUpdateOperationsInput | bigint | number | null;
    enrollment_date?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    completion_date?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    status?: Prisma.Enumenrollments_statusFieldUpdateOperationsInput | $Enums.enrollments_status;
    payment_status?: Prisma.Enumenrollments_payment_statusFieldUpdateOperationsInput | $Enums.enrollments_payment_status;
    progress_percentage?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    original_price?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    final_price?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    created_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    updated_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
};
export type enrollmentsCreateManyUsersInput = {
    id?: bigint | number;
    course_id: bigint | number;
    coupon_id?: bigint | number | null;
    enrollment_date?: Date | string;
    completion_date?: Date | string | null;
    status?: $Enums.enrollments_status;
    payment_status?: $Enums.enrollments_payment_status;
    progress_percentage?: runtime.Decimal | runtime.DecimalJsLike | number | string;
    original_price: runtime.Decimal | runtime.DecimalJsLike | number | string;
    final_price: runtime.Decimal | runtime.DecimalJsLike | number | string;
    created_at?: Date | string | null;
    updated_at?: Date | string | null;
};
export type enrollmentsUpdateWithoutUsersInput = {
    id?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    enrollment_date?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    completion_date?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    status?: Prisma.Enumenrollments_statusFieldUpdateOperationsInput | $Enums.enrollments_status;
    payment_status?: Prisma.Enumenrollments_payment_statusFieldUpdateOperationsInput | $Enums.enrollments_payment_status;
    progress_percentage?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    original_price?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    final_price?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    created_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    updated_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    certificates?: Prisma.certificatesUpdateManyWithoutEnrollmentsNestedInput;
    coupons?: Prisma.couponsUpdateOneWithoutEnrollmentsNestedInput;
    courses?: Prisma.coursesUpdateOneRequiredWithoutEnrollmentsNestedInput;
};
export type enrollmentsUncheckedUpdateWithoutUsersInput = {
    id?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    course_id?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    coupon_id?: Prisma.NullableBigIntFieldUpdateOperationsInput | bigint | number | null;
    enrollment_date?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    completion_date?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    status?: Prisma.Enumenrollments_statusFieldUpdateOperationsInput | $Enums.enrollments_status;
    payment_status?: Prisma.Enumenrollments_payment_statusFieldUpdateOperationsInput | $Enums.enrollments_payment_status;
    progress_percentage?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    original_price?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    final_price?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    created_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    updated_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    certificates?: Prisma.certificatesUncheckedUpdateManyWithoutEnrollmentsNestedInput;
};
export type enrollmentsUncheckedUpdateManyWithoutUsersInput = {
    id?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    course_id?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    coupon_id?: Prisma.NullableBigIntFieldUpdateOperationsInput | bigint | number | null;
    enrollment_date?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    completion_date?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    status?: Prisma.Enumenrollments_statusFieldUpdateOperationsInput | $Enums.enrollments_status;
    payment_status?: Prisma.Enumenrollments_payment_statusFieldUpdateOperationsInput | $Enums.enrollments_payment_status;
    progress_percentage?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    original_price?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    final_price?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    created_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    updated_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
};
export type EnrollmentsCountOutputType = {
    certificates: number;
};
export type EnrollmentsCountOutputTypeSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    certificates?: boolean | EnrollmentsCountOutputTypeCountCertificatesArgs;
};
export type EnrollmentsCountOutputTypeDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.EnrollmentsCountOutputTypeSelect<ExtArgs> | null;
};
export type EnrollmentsCountOutputTypeCountCertificatesArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.certificatesWhereInput;
};
export type enrollmentsSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    user_id?: boolean;
    course_id?: boolean;
    coupon_id?: boolean;
    enrollment_date?: boolean;
    completion_date?: boolean;
    status?: boolean;
    payment_status?: boolean;
    progress_percentage?: boolean;
    original_price?: boolean;
    final_price?: boolean;
    created_at?: boolean;
    updated_at?: boolean;
    certificates?: boolean | Prisma.enrollments$certificatesArgs<ExtArgs>;
    coupons?: boolean | Prisma.enrollments$couponsArgs<ExtArgs>;
    courses?: boolean | Prisma.coursesDefaultArgs<ExtArgs>;
    users?: boolean | Prisma.usersDefaultArgs<ExtArgs>;
    _count?: boolean | Prisma.EnrollmentsCountOutputTypeDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["enrollments"]>;
export type enrollmentsSelectScalar = {
    id?: boolean;
    user_id?: boolean;
    course_id?: boolean;
    coupon_id?: boolean;
    enrollment_date?: boolean;
    completion_date?: boolean;
    status?: boolean;
    payment_status?: boolean;
    progress_percentage?: boolean;
    original_price?: boolean;
    final_price?: boolean;
    created_at?: boolean;
    updated_at?: boolean;
};
export type enrollmentsOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "user_id" | "course_id" | "coupon_id" | "enrollment_date" | "completion_date" | "status" | "payment_status" | "progress_percentage" | "original_price" | "final_price" | "created_at" | "updated_at", ExtArgs["result"]["enrollments"]>;
export type enrollmentsInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    certificates?: boolean | Prisma.enrollments$certificatesArgs<ExtArgs>;
    coupons?: boolean | Prisma.enrollments$couponsArgs<ExtArgs>;
    courses?: boolean | Prisma.coursesDefaultArgs<ExtArgs>;
    users?: boolean | Prisma.usersDefaultArgs<ExtArgs>;
    _count?: boolean | Prisma.EnrollmentsCountOutputTypeDefaultArgs<ExtArgs>;
};
export type $enrollmentsPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "enrollments";
    objects: {
        certificates: Prisma.$certificatesPayload<ExtArgs>[];
        coupons: Prisma.$couponsPayload<ExtArgs> | null;
        courses: Prisma.$coursesPayload<ExtArgs>;
        users: Prisma.$usersPayload<ExtArgs>;
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id: bigint;
        user_id: bigint;
        course_id: bigint;
        coupon_id: bigint | null;
        enrollment_date: Date;
        completion_date: Date | null;
        status: $Enums.enrollments_status;
        payment_status: $Enums.enrollments_payment_status;
        progress_percentage: runtime.Decimal;
        original_price: runtime.Decimal;
        final_price: runtime.Decimal;
        created_at: Date | null;
        updated_at: Date | null;
    }, ExtArgs["result"]["enrollments"]>;
    composites: {};
};
export type enrollmentsGetPayload<S extends boolean | null | undefined | enrollmentsDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$enrollmentsPayload, S>;
export type enrollmentsCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<enrollmentsFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: EnrollmentsCountAggregateInputType | true;
};
export interface enrollmentsDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['enrollments'];
        meta: {
            name: 'enrollments';
        };
    };
    findUnique<T extends enrollmentsFindUniqueArgs>(args: Prisma.SelectSubset<T, enrollmentsFindUniqueArgs<ExtArgs>>): Prisma.Prisma__enrollmentsClient<runtime.Types.Result.GetResult<Prisma.$enrollmentsPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findUniqueOrThrow<T extends enrollmentsFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, enrollmentsFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__enrollmentsClient<runtime.Types.Result.GetResult<Prisma.$enrollmentsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findFirst<T extends enrollmentsFindFirstArgs>(args?: Prisma.SelectSubset<T, enrollmentsFindFirstArgs<ExtArgs>>): Prisma.Prisma__enrollmentsClient<runtime.Types.Result.GetResult<Prisma.$enrollmentsPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findFirstOrThrow<T extends enrollmentsFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, enrollmentsFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__enrollmentsClient<runtime.Types.Result.GetResult<Prisma.$enrollmentsPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findMany<T extends enrollmentsFindManyArgs>(args?: Prisma.SelectSubset<T, enrollmentsFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$enrollmentsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    create<T extends enrollmentsCreateArgs>(args: Prisma.SelectSubset<T, enrollmentsCreateArgs<ExtArgs>>): Prisma.Prisma__enrollmentsClient<runtime.Types.Result.GetResult<Prisma.$enrollmentsPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    createMany<T extends enrollmentsCreateManyArgs>(args?: Prisma.SelectSubset<T, enrollmentsCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    delete<T extends enrollmentsDeleteArgs>(args: Prisma.SelectSubset<T, enrollmentsDeleteArgs<ExtArgs>>): Prisma.Prisma__enrollmentsClient<runtime.Types.Result.GetResult<Prisma.$enrollmentsPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    update<T extends enrollmentsUpdateArgs>(args: Prisma.SelectSubset<T, enrollmentsUpdateArgs<ExtArgs>>): Prisma.Prisma__enrollmentsClient<runtime.Types.Result.GetResult<Prisma.$enrollmentsPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    deleteMany<T extends enrollmentsDeleteManyArgs>(args?: Prisma.SelectSubset<T, enrollmentsDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateMany<T extends enrollmentsUpdateManyArgs>(args: Prisma.SelectSubset<T, enrollmentsUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    upsert<T extends enrollmentsUpsertArgs>(args: Prisma.SelectSubset<T, enrollmentsUpsertArgs<ExtArgs>>): Prisma.Prisma__enrollmentsClient<runtime.Types.Result.GetResult<Prisma.$enrollmentsPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    count<T extends enrollmentsCountArgs>(args?: Prisma.Subset<T, enrollmentsCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], EnrollmentsCountAggregateOutputType> : number>;
    aggregate<T extends EnrollmentsAggregateArgs>(args: Prisma.Subset<T, EnrollmentsAggregateArgs>): Prisma.PrismaPromise<GetEnrollmentsAggregateType<T>>;
    groupBy<T extends enrollmentsGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: enrollmentsGroupByArgs['orderBy'];
    } : {
        orderBy?: enrollmentsGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, enrollmentsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetEnrollmentsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    readonly fields: enrollmentsFieldRefs;
}
export interface Prisma__enrollmentsClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    certificates<T extends Prisma.enrollments$certificatesArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.enrollments$certificatesArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$certificatesPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    coupons<T extends Prisma.enrollments$couponsArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.enrollments$couponsArgs<ExtArgs>>): Prisma.Prisma__couponsClient<runtime.Types.Result.GetResult<Prisma.$couponsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    courses<T extends Prisma.coursesDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.coursesDefaultArgs<ExtArgs>>): Prisma.Prisma__coursesClient<runtime.Types.Result.GetResult<Prisma.$coursesPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    users<T extends Prisma.usersDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.usersDefaultArgs<ExtArgs>>): Prisma.Prisma__usersClient<runtime.Types.Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): runtime.Types.Utils.JsPromise<TResult1 | TResult2>;
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): runtime.Types.Utils.JsPromise<T | TResult>;
    finally(onfinally?: (() => void) | undefined | null): runtime.Types.Utils.JsPromise<T>;
}
export interface enrollmentsFieldRefs {
    readonly id: Prisma.FieldRef<"enrollments", 'BigInt'>;
    readonly user_id: Prisma.FieldRef<"enrollments", 'BigInt'>;
    readonly course_id: Prisma.FieldRef<"enrollments", 'BigInt'>;
    readonly coupon_id: Prisma.FieldRef<"enrollments", 'BigInt'>;
    readonly enrollment_date: Prisma.FieldRef<"enrollments", 'DateTime'>;
    readonly completion_date: Prisma.FieldRef<"enrollments", 'DateTime'>;
    readonly status: Prisma.FieldRef<"enrollments", 'enrollments_status'>;
    readonly payment_status: Prisma.FieldRef<"enrollments", 'enrollments_payment_status'>;
    readonly progress_percentage: Prisma.FieldRef<"enrollments", 'Decimal'>;
    readonly original_price: Prisma.FieldRef<"enrollments", 'Decimal'>;
    readonly final_price: Prisma.FieldRef<"enrollments", 'Decimal'>;
    readonly created_at: Prisma.FieldRef<"enrollments", 'DateTime'>;
    readonly updated_at: Prisma.FieldRef<"enrollments", 'DateTime'>;
}
export type enrollmentsFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.enrollmentsSelect<ExtArgs> | null;
    omit?: Prisma.enrollmentsOmit<ExtArgs> | null;
    include?: Prisma.enrollmentsInclude<ExtArgs> | null;
    where: Prisma.enrollmentsWhereUniqueInput;
};
export type enrollmentsFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.enrollmentsSelect<ExtArgs> | null;
    omit?: Prisma.enrollmentsOmit<ExtArgs> | null;
    include?: Prisma.enrollmentsInclude<ExtArgs> | null;
    where: Prisma.enrollmentsWhereUniqueInput;
};
export type enrollmentsFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
export type enrollmentsFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
export type enrollmentsFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
export type enrollmentsCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.enrollmentsSelect<ExtArgs> | null;
    omit?: Prisma.enrollmentsOmit<ExtArgs> | null;
    include?: Prisma.enrollmentsInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.enrollmentsCreateInput, Prisma.enrollmentsUncheckedCreateInput>;
};
export type enrollmentsCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.enrollmentsCreateManyInput | Prisma.enrollmentsCreateManyInput[];
    skipDuplicates?: boolean;
};
export type enrollmentsUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.enrollmentsSelect<ExtArgs> | null;
    omit?: Prisma.enrollmentsOmit<ExtArgs> | null;
    include?: Prisma.enrollmentsInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.enrollmentsUpdateInput, Prisma.enrollmentsUncheckedUpdateInput>;
    where: Prisma.enrollmentsWhereUniqueInput;
};
export type enrollmentsUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.XOR<Prisma.enrollmentsUpdateManyMutationInput, Prisma.enrollmentsUncheckedUpdateManyInput>;
    where?: Prisma.enrollmentsWhereInput;
    limit?: number;
};
export type enrollmentsUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.enrollmentsSelect<ExtArgs> | null;
    omit?: Prisma.enrollmentsOmit<ExtArgs> | null;
    include?: Prisma.enrollmentsInclude<ExtArgs> | null;
    where: Prisma.enrollmentsWhereUniqueInput;
    create: Prisma.XOR<Prisma.enrollmentsCreateInput, Prisma.enrollmentsUncheckedCreateInput>;
    update: Prisma.XOR<Prisma.enrollmentsUpdateInput, Prisma.enrollmentsUncheckedUpdateInput>;
};
export type enrollmentsDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.enrollmentsSelect<ExtArgs> | null;
    omit?: Prisma.enrollmentsOmit<ExtArgs> | null;
    include?: Prisma.enrollmentsInclude<ExtArgs> | null;
    where: Prisma.enrollmentsWhereUniqueInput;
};
export type enrollmentsDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.enrollmentsWhereInput;
    limit?: number;
};
export type enrollments$certificatesArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.certificatesSelect<ExtArgs> | null;
    omit?: Prisma.certificatesOmit<ExtArgs> | null;
    include?: Prisma.certificatesInclude<ExtArgs> | null;
    where?: Prisma.certificatesWhereInput;
    orderBy?: Prisma.certificatesOrderByWithRelationInput | Prisma.certificatesOrderByWithRelationInput[];
    cursor?: Prisma.certificatesWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.CertificatesScalarFieldEnum | Prisma.CertificatesScalarFieldEnum[];
};
export type enrollments$couponsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.couponsSelect<ExtArgs> | null;
    omit?: Prisma.couponsOmit<ExtArgs> | null;
    include?: Prisma.couponsInclude<ExtArgs> | null;
    where?: Prisma.couponsWhereInput;
};
export type enrollmentsDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.enrollmentsSelect<ExtArgs> | null;
    omit?: Prisma.enrollmentsOmit<ExtArgs> | null;
    include?: Prisma.enrollmentsInclude<ExtArgs> | null;
};
export {};
