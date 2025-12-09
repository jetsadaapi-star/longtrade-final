import type * as runtime from "@prisma/client/runtime/client";
import type * as Prisma from "../internal/prismaNamespace.js";
export type certificatesModel = runtime.Types.Result.DefaultSelection<Prisma.$certificatesPayload>;
export type AggregateCertificates = {
    _count: CertificatesCountAggregateOutputType | null;
    _avg: CertificatesAvgAggregateOutputType | null;
    _sum: CertificatesSumAggregateOutputType | null;
    _min: CertificatesMinAggregateOutputType | null;
    _max: CertificatesMaxAggregateOutputType | null;
};
export type CertificatesAvgAggregateOutputType = {
    id: number | null;
    user_id: number | null;
    course_id: number | null;
    enrollment_id: number | null;
};
export type CertificatesSumAggregateOutputType = {
    id: bigint | null;
    user_id: bigint | null;
    course_id: bigint | null;
    enrollment_id: bigint | null;
};
export type CertificatesMinAggregateOutputType = {
    id: bigint | null;
    user_id: bigint | null;
    course_id: bigint | null;
    enrollment_id: bigint | null;
    certificate_number: string | null;
    issued_date: Date | null;
    verification_code: string | null;
    pdf_path: string | null;
    created_at: Date | null;
    updated_at: Date | null;
};
export type CertificatesMaxAggregateOutputType = {
    id: bigint | null;
    user_id: bigint | null;
    course_id: bigint | null;
    enrollment_id: bigint | null;
    certificate_number: string | null;
    issued_date: Date | null;
    verification_code: string | null;
    pdf_path: string | null;
    created_at: Date | null;
    updated_at: Date | null;
};
export type CertificatesCountAggregateOutputType = {
    id: number;
    user_id: number;
    course_id: number;
    enrollment_id: number;
    certificate_number: number;
    issued_date: number;
    verification_code: number;
    pdf_path: number;
    created_at: number;
    updated_at: number;
    _all: number;
};
export type CertificatesAvgAggregateInputType = {
    id?: true;
    user_id?: true;
    course_id?: true;
    enrollment_id?: true;
};
export type CertificatesSumAggregateInputType = {
    id?: true;
    user_id?: true;
    course_id?: true;
    enrollment_id?: true;
};
export type CertificatesMinAggregateInputType = {
    id?: true;
    user_id?: true;
    course_id?: true;
    enrollment_id?: true;
    certificate_number?: true;
    issued_date?: true;
    verification_code?: true;
    pdf_path?: true;
    created_at?: true;
    updated_at?: true;
};
export type CertificatesMaxAggregateInputType = {
    id?: true;
    user_id?: true;
    course_id?: true;
    enrollment_id?: true;
    certificate_number?: true;
    issued_date?: true;
    verification_code?: true;
    pdf_path?: true;
    created_at?: true;
    updated_at?: true;
};
export type CertificatesCountAggregateInputType = {
    id?: true;
    user_id?: true;
    course_id?: true;
    enrollment_id?: true;
    certificate_number?: true;
    issued_date?: true;
    verification_code?: true;
    pdf_path?: true;
    created_at?: true;
    updated_at?: true;
    _all?: true;
};
export type CertificatesAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.certificatesWhereInput;
    orderBy?: Prisma.certificatesOrderByWithRelationInput | Prisma.certificatesOrderByWithRelationInput[];
    cursor?: Prisma.certificatesWhereUniqueInput;
    take?: number;
    skip?: number;
    _count?: true | CertificatesCountAggregateInputType;
    _avg?: CertificatesAvgAggregateInputType;
    _sum?: CertificatesSumAggregateInputType;
    _min?: CertificatesMinAggregateInputType;
    _max?: CertificatesMaxAggregateInputType;
};
export type GetCertificatesAggregateType<T extends CertificatesAggregateArgs> = {
    [P in keyof T & keyof AggregateCertificates]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateCertificates[P]> : Prisma.GetScalarType<T[P], AggregateCertificates[P]>;
};
export type certificatesGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.certificatesWhereInput;
    orderBy?: Prisma.certificatesOrderByWithAggregationInput | Prisma.certificatesOrderByWithAggregationInput[];
    by: Prisma.CertificatesScalarFieldEnum[] | Prisma.CertificatesScalarFieldEnum;
    having?: Prisma.certificatesScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: CertificatesCountAggregateInputType | true;
    _avg?: CertificatesAvgAggregateInputType;
    _sum?: CertificatesSumAggregateInputType;
    _min?: CertificatesMinAggregateInputType;
    _max?: CertificatesMaxAggregateInputType;
};
export type CertificatesGroupByOutputType = {
    id: bigint;
    user_id: bigint;
    course_id: bigint;
    enrollment_id: bigint;
    certificate_number: string;
    issued_date: Date;
    verification_code: string;
    pdf_path: string | null;
    created_at: Date | null;
    updated_at: Date | null;
    _count: CertificatesCountAggregateOutputType | null;
    _avg: CertificatesAvgAggregateOutputType | null;
    _sum: CertificatesSumAggregateOutputType | null;
    _min: CertificatesMinAggregateOutputType | null;
    _max: CertificatesMaxAggregateOutputType | null;
};
type GetCertificatesGroupByPayload<T extends certificatesGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<CertificatesGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof CertificatesGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], CertificatesGroupByOutputType[P]> : Prisma.GetScalarType<T[P], CertificatesGroupByOutputType[P]>;
}>>;
export type certificatesWhereInput = {
    AND?: Prisma.certificatesWhereInput | Prisma.certificatesWhereInput[];
    OR?: Prisma.certificatesWhereInput[];
    NOT?: Prisma.certificatesWhereInput | Prisma.certificatesWhereInput[];
    id?: Prisma.BigIntFilter<"certificates"> | bigint | number;
    user_id?: Prisma.BigIntFilter<"certificates"> | bigint | number;
    course_id?: Prisma.BigIntFilter<"certificates"> | bigint | number;
    enrollment_id?: Prisma.BigIntFilter<"certificates"> | bigint | number;
    certificate_number?: Prisma.StringFilter<"certificates"> | string;
    issued_date?: Prisma.DateTimeFilter<"certificates"> | Date | string;
    verification_code?: Prisma.StringFilter<"certificates"> | string;
    pdf_path?: Prisma.StringNullableFilter<"certificates"> | string | null;
    created_at?: Prisma.DateTimeNullableFilter<"certificates"> | Date | string | null;
    updated_at?: Prisma.DateTimeNullableFilter<"certificates"> | Date | string | null;
    courses?: Prisma.XOR<Prisma.CoursesScalarRelationFilter, Prisma.coursesWhereInput>;
    enrollments?: Prisma.XOR<Prisma.EnrollmentsScalarRelationFilter, Prisma.enrollmentsWhereInput>;
    users?: Prisma.XOR<Prisma.UsersScalarRelationFilter, Prisma.usersWhereInput>;
};
export type certificatesOrderByWithRelationInput = {
    id?: Prisma.SortOrder;
    user_id?: Prisma.SortOrder;
    course_id?: Prisma.SortOrder;
    enrollment_id?: Prisma.SortOrder;
    certificate_number?: Prisma.SortOrder;
    issued_date?: Prisma.SortOrder;
    verification_code?: Prisma.SortOrder;
    pdf_path?: Prisma.SortOrderInput | Prisma.SortOrder;
    created_at?: Prisma.SortOrderInput | Prisma.SortOrder;
    updated_at?: Prisma.SortOrderInput | Prisma.SortOrder;
    courses?: Prisma.coursesOrderByWithRelationInput;
    enrollments?: Prisma.enrollmentsOrderByWithRelationInput;
    users?: Prisma.usersOrderByWithRelationInput;
    _relevance?: Prisma.certificatesOrderByRelevanceInput;
};
export type certificatesWhereUniqueInput = Prisma.AtLeast<{
    id?: bigint | number;
    certificate_number?: string;
    verification_code?: string;
    AND?: Prisma.certificatesWhereInput | Prisma.certificatesWhereInput[];
    OR?: Prisma.certificatesWhereInput[];
    NOT?: Prisma.certificatesWhereInput | Prisma.certificatesWhereInput[];
    user_id?: Prisma.BigIntFilter<"certificates"> | bigint | number;
    course_id?: Prisma.BigIntFilter<"certificates"> | bigint | number;
    enrollment_id?: Prisma.BigIntFilter<"certificates"> | bigint | number;
    issued_date?: Prisma.DateTimeFilter<"certificates"> | Date | string;
    pdf_path?: Prisma.StringNullableFilter<"certificates"> | string | null;
    created_at?: Prisma.DateTimeNullableFilter<"certificates"> | Date | string | null;
    updated_at?: Prisma.DateTimeNullableFilter<"certificates"> | Date | string | null;
    courses?: Prisma.XOR<Prisma.CoursesScalarRelationFilter, Prisma.coursesWhereInput>;
    enrollments?: Prisma.XOR<Prisma.EnrollmentsScalarRelationFilter, Prisma.enrollmentsWhereInput>;
    users?: Prisma.XOR<Prisma.UsersScalarRelationFilter, Prisma.usersWhereInput>;
}, "id" | "certificate_number" | "verification_code">;
export type certificatesOrderByWithAggregationInput = {
    id?: Prisma.SortOrder;
    user_id?: Prisma.SortOrder;
    course_id?: Prisma.SortOrder;
    enrollment_id?: Prisma.SortOrder;
    certificate_number?: Prisma.SortOrder;
    issued_date?: Prisma.SortOrder;
    verification_code?: Prisma.SortOrder;
    pdf_path?: Prisma.SortOrderInput | Prisma.SortOrder;
    created_at?: Prisma.SortOrderInput | Prisma.SortOrder;
    updated_at?: Prisma.SortOrderInput | Prisma.SortOrder;
    _count?: Prisma.certificatesCountOrderByAggregateInput;
    _avg?: Prisma.certificatesAvgOrderByAggregateInput;
    _max?: Prisma.certificatesMaxOrderByAggregateInput;
    _min?: Prisma.certificatesMinOrderByAggregateInput;
    _sum?: Prisma.certificatesSumOrderByAggregateInput;
};
export type certificatesScalarWhereWithAggregatesInput = {
    AND?: Prisma.certificatesScalarWhereWithAggregatesInput | Prisma.certificatesScalarWhereWithAggregatesInput[];
    OR?: Prisma.certificatesScalarWhereWithAggregatesInput[];
    NOT?: Prisma.certificatesScalarWhereWithAggregatesInput | Prisma.certificatesScalarWhereWithAggregatesInput[];
    id?: Prisma.BigIntWithAggregatesFilter<"certificates"> | bigint | number;
    user_id?: Prisma.BigIntWithAggregatesFilter<"certificates"> | bigint | number;
    course_id?: Prisma.BigIntWithAggregatesFilter<"certificates"> | bigint | number;
    enrollment_id?: Prisma.BigIntWithAggregatesFilter<"certificates"> | bigint | number;
    certificate_number?: Prisma.StringWithAggregatesFilter<"certificates"> | string;
    issued_date?: Prisma.DateTimeWithAggregatesFilter<"certificates"> | Date | string;
    verification_code?: Prisma.StringWithAggregatesFilter<"certificates"> | string;
    pdf_path?: Prisma.StringNullableWithAggregatesFilter<"certificates"> | string | null;
    created_at?: Prisma.DateTimeNullableWithAggregatesFilter<"certificates"> | Date | string | null;
    updated_at?: Prisma.DateTimeNullableWithAggregatesFilter<"certificates"> | Date | string | null;
};
export type certificatesCreateInput = {
    id?: bigint | number;
    certificate_number: string;
    issued_date: Date | string;
    verification_code: string;
    pdf_path?: string | null;
    created_at?: Date | string | null;
    updated_at?: Date | string | null;
    courses: Prisma.coursesCreateNestedOneWithoutCertificatesInput;
    enrollments: Prisma.enrollmentsCreateNestedOneWithoutCertificatesInput;
    users: Prisma.usersCreateNestedOneWithoutCertificatesInput;
};
export type certificatesUncheckedCreateInput = {
    id?: bigint | number;
    user_id: bigint | number;
    course_id: bigint | number;
    enrollment_id: bigint | number;
    certificate_number: string;
    issued_date: Date | string;
    verification_code: string;
    pdf_path?: string | null;
    created_at?: Date | string | null;
    updated_at?: Date | string | null;
};
export type certificatesUpdateInput = {
    id?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    certificate_number?: Prisma.StringFieldUpdateOperationsInput | string;
    issued_date?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    verification_code?: Prisma.StringFieldUpdateOperationsInput | string;
    pdf_path?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    created_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    updated_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    courses?: Prisma.coursesUpdateOneRequiredWithoutCertificatesNestedInput;
    enrollments?: Prisma.enrollmentsUpdateOneRequiredWithoutCertificatesNestedInput;
    users?: Prisma.usersUpdateOneRequiredWithoutCertificatesNestedInput;
};
export type certificatesUncheckedUpdateInput = {
    id?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    user_id?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    course_id?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    enrollment_id?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    certificate_number?: Prisma.StringFieldUpdateOperationsInput | string;
    issued_date?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    verification_code?: Prisma.StringFieldUpdateOperationsInput | string;
    pdf_path?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    created_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    updated_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
};
export type certificatesCreateManyInput = {
    id?: bigint | number;
    user_id: bigint | number;
    course_id: bigint | number;
    enrollment_id: bigint | number;
    certificate_number: string;
    issued_date: Date | string;
    verification_code: string;
    pdf_path?: string | null;
    created_at?: Date | string | null;
    updated_at?: Date | string | null;
};
export type certificatesUpdateManyMutationInput = {
    id?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    certificate_number?: Prisma.StringFieldUpdateOperationsInput | string;
    issued_date?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    verification_code?: Prisma.StringFieldUpdateOperationsInput | string;
    pdf_path?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    created_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    updated_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
};
export type certificatesUncheckedUpdateManyInput = {
    id?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    user_id?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    course_id?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    enrollment_id?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    certificate_number?: Prisma.StringFieldUpdateOperationsInput | string;
    issued_date?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    verification_code?: Prisma.StringFieldUpdateOperationsInput | string;
    pdf_path?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    created_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    updated_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
};
export type certificatesOrderByRelevanceInput = {
    fields: Prisma.certificatesOrderByRelevanceFieldEnum | Prisma.certificatesOrderByRelevanceFieldEnum[];
    sort: Prisma.SortOrder;
    search: string;
};
export type certificatesCountOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    user_id?: Prisma.SortOrder;
    course_id?: Prisma.SortOrder;
    enrollment_id?: Prisma.SortOrder;
    certificate_number?: Prisma.SortOrder;
    issued_date?: Prisma.SortOrder;
    verification_code?: Prisma.SortOrder;
    pdf_path?: Prisma.SortOrder;
    created_at?: Prisma.SortOrder;
    updated_at?: Prisma.SortOrder;
};
export type certificatesAvgOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    user_id?: Prisma.SortOrder;
    course_id?: Prisma.SortOrder;
    enrollment_id?: Prisma.SortOrder;
};
export type certificatesMaxOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    user_id?: Prisma.SortOrder;
    course_id?: Prisma.SortOrder;
    enrollment_id?: Prisma.SortOrder;
    certificate_number?: Prisma.SortOrder;
    issued_date?: Prisma.SortOrder;
    verification_code?: Prisma.SortOrder;
    pdf_path?: Prisma.SortOrder;
    created_at?: Prisma.SortOrder;
    updated_at?: Prisma.SortOrder;
};
export type certificatesMinOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    user_id?: Prisma.SortOrder;
    course_id?: Prisma.SortOrder;
    enrollment_id?: Prisma.SortOrder;
    certificate_number?: Prisma.SortOrder;
    issued_date?: Prisma.SortOrder;
    verification_code?: Prisma.SortOrder;
    pdf_path?: Prisma.SortOrder;
    created_at?: Prisma.SortOrder;
    updated_at?: Prisma.SortOrder;
};
export type certificatesSumOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    user_id?: Prisma.SortOrder;
    course_id?: Prisma.SortOrder;
    enrollment_id?: Prisma.SortOrder;
};
export type CertificatesListRelationFilter = {
    every?: Prisma.certificatesWhereInput;
    some?: Prisma.certificatesWhereInput;
    none?: Prisma.certificatesWhereInput;
};
export type certificatesOrderByRelationAggregateInput = {
    _count?: Prisma.SortOrder;
};
export type certificatesCreateNestedManyWithoutCoursesInput = {
    create?: Prisma.XOR<Prisma.certificatesCreateWithoutCoursesInput, Prisma.certificatesUncheckedCreateWithoutCoursesInput> | Prisma.certificatesCreateWithoutCoursesInput[] | Prisma.certificatesUncheckedCreateWithoutCoursesInput[];
    connectOrCreate?: Prisma.certificatesCreateOrConnectWithoutCoursesInput | Prisma.certificatesCreateOrConnectWithoutCoursesInput[];
    createMany?: Prisma.certificatesCreateManyCoursesInputEnvelope;
    connect?: Prisma.certificatesWhereUniqueInput | Prisma.certificatesWhereUniqueInput[];
};
export type certificatesUncheckedCreateNestedManyWithoutCoursesInput = {
    create?: Prisma.XOR<Prisma.certificatesCreateWithoutCoursesInput, Prisma.certificatesUncheckedCreateWithoutCoursesInput> | Prisma.certificatesCreateWithoutCoursesInput[] | Prisma.certificatesUncheckedCreateWithoutCoursesInput[];
    connectOrCreate?: Prisma.certificatesCreateOrConnectWithoutCoursesInput | Prisma.certificatesCreateOrConnectWithoutCoursesInput[];
    createMany?: Prisma.certificatesCreateManyCoursesInputEnvelope;
    connect?: Prisma.certificatesWhereUniqueInput | Prisma.certificatesWhereUniqueInput[];
};
export type certificatesUpdateManyWithoutCoursesNestedInput = {
    create?: Prisma.XOR<Prisma.certificatesCreateWithoutCoursesInput, Prisma.certificatesUncheckedCreateWithoutCoursesInput> | Prisma.certificatesCreateWithoutCoursesInput[] | Prisma.certificatesUncheckedCreateWithoutCoursesInput[];
    connectOrCreate?: Prisma.certificatesCreateOrConnectWithoutCoursesInput | Prisma.certificatesCreateOrConnectWithoutCoursesInput[];
    upsert?: Prisma.certificatesUpsertWithWhereUniqueWithoutCoursesInput | Prisma.certificatesUpsertWithWhereUniqueWithoutCoursesInput[];
    createMany?: Prisma.certificatesCreateManyCoursesInputEnvelope;
    set?: Prisma.certificatesWhereUniqueInput | Prisma.certificatesWhereUniqueInput[];
    disconnect?: Prisma.certificatesWhereUniqueInput | Prisma.certificatesWhereUniqueInput[];
    delete?: Prisma.certificatesWhereUniqueInput | Prisma.certificatesWhereUniqueInput[];
    connect?: Prisma.certificatesWhereUniqueInput | Prisma.certificatesWhereUniqueInput[];
    update?: Prisma.certificatesUpdateWithWhereUniqueWithoutCoursesInput | Prisma.certificatesUpdateWithWhereUniqueWithoutCoursesInput[];
    updateMany?: Prisma.certificatesUpdateManyWithWhereWithoutCoursesInput | Prisma.certificatesUpdateManyWithWhereWithoutCoursesInput[];
    deleteMany?: Prisma.certificatesScalarWhereInput | Prisma.certificatesScalarWhereInput[];
};
export type certificatesUncheckedUpdateManyWithoutCoursesNestedInput = {
    create?: Prisma.XOR<Prisma.certificatesCreateWithoutCoursesInput, Prisma.certificatesUncheckedCreateWithoutCoursesInput> | Prisma.certificatesCreateWithoutCoursesInput[] | Prisma.certificatesUncheckedCreateWithoutCoursesInput[];
    connectOrCreate?: Prisma.certificatesCreateOrConnectWithoutCoursesInput | Prisma.certificatesCreateOrConnectWithoutCoursesInput[];
    upsert?: Prisma.certificatesUpsertWithWhereUniqueWithoutCoursesInput | Prisma.certificatesUpsertWithWhereUniqueWithoutCoursesInput[];
    createMany?: Prisma.certificatesCreateManyCoursesInputEnvelope;
    set?: Prisma.certificatesWhereUniqueInput | Prisma.certificatesWhereUniqueInput[];
    disconnect?: Prisma.certificatesWhereUniqueInput | Prisma.certificatesWhereUniqueInput[];
    delete?: Prisma.certificatesWhereUniqueInput | Prisma.certificatesWhereUniqueInput[];
    connect?: Prisma.certificatesWhereUniqueInput | Prisma.certificatesWhereUniqueInput[];
    update?: Prisma.certificatesUpdateWithWhereUniqueWithoutCoursesInput | Prisma.certificatesUpdateWithWhereUniqueWithoutCoursesInput[];
    updateMany?: Prisma.certificatesUpdateManyWithWhereWithoutCoursesInput | Prisma.certificatesUpdateManyWithWhereWithoutCoursesInput[];
    deleteMany?: Prisma.certificatesScalarWhereInput | Prisma.certificatesScalarWhereInput[];
};
export type certificatesCreateNestedManyWithoutEnrollmentsInput = {
    create?: Prisma.XOR<Prisma.certificatesCreateWithoutEnrollmentsInput, Prisma.certificatesUncheckedCreateWithoutEnrollmentsInput> | Prisma.certificatesCreateWithoutEnrollmentsInput[] | Prisma.certificatesUncheckedCreateWithoutEnrollmentsInput[];
    connectOrCreate?: Prisma.certificatesCreateOrConnectWithoutEnrollmentsInput | Prisma.certificatesCreateOrConnectWithoutEnrollmentsInput[];
    createMany?: Prisma.certificatesCreateManyEnrollmentsInputEnvelope;
    connect?: Prisma.certificatesWhereUniqueInput | Prisma.certificatesWhereUniqueInput[];
};
export type certificatesUncheckedCreateNestedManyWithoutEnrollmentsInput = {
    create?: Prisma.XOR<Prisma.certificatesCreateWithoutEnrollmentsInput, Prisma.certificatesUncheckedCreateWithoutEnrollmentsInput> | Prisma.certificatesCreateWithoutEnrollmentsInput[] | Prisma.certificatesUncheckedCreateWithoutEnrollmentsInput[];
    connectOrCreate?: Prisma.certificatesCreateOrConnectWithoutEnrollmentsInput | Prisma.certificatesCreateOrConnectWithoutEnrollmentsInput[];
    createMany?: Prisma.certificatesCreateManyEnrollmentsInputEnvelope;
    connect?: Prisma.certificatesWhereUniqueInput | Prisma.certificatesWhereUniqueInput[];
};
export type certificatesUpdateManyWithoutEnrollmentsNestedInput = {
    create?: Prisma.XOR<Prisma.certificatesCreateWithoutEnrollmentsInput, Prisma.certificatesUncheckedCreateWithoutEnrollmentsInput> | Prisma.certificatesCreateWithoutEnrollmentsInput[] | Prisma.certificatesUncheckedCreateWithoutEnrollmentsInput[];
    connectOrCreate?: Prisma.certificatesCreateOrConnectWithoutEnrollmentsInput | Prisma.certificatesCreateOrConnectWithoutEnrollmentsInput[];
    upsert?: Prisma.certificatesUpsertWithWhereUniqueWithoutEnrollmentsInput | Prisma.certificatesUpsertWithWhereUniqueWithoutEnrollmentsInput[];
    createMany?: Prisma.certificatesCreateManyEnrollmentsInputEnvelope;
    set?: Prisma.certificatesWhereUniqueInput | Prisma.certificatesWhereUniqueInput[];
    disconnect?: Prisma.certificatesWhereUniqueInput | Prisma.certificatesWhereUniqueInput[];
    delete?: Prisma.certificatesWhereUniqueInput | Prisma.certificatesWhereUniqueInput[];
    connect?: Prisma.certificatesWhereUniqueInput | Prisma.certificatesWhereUniqueInput[];
    update?: Prisma.certificatesUpdateWithWhereUniqueWithoutEnrollmentsInput | Prisma.certificatesUpdateWithWhereUniqueWithoutEnrollmentsInput[];
    updateMany?: Prisma.certificatesUpdateManyWithWhereWithoutEnrollmentsInput | Prisma.certificatesUpdateManyWithWhereWithoutEnrollmentsInput[];
    deleteMany?: Prisma.certificatesScalarWhereInput | Prisma.certificatesScalarWhereInput[];
};
export type certificatesUncheckedUpdateManyWithoutEnrollmentsNestedInput = {
    create?: Prisma.XOR<Prisma.certificatesCreateWithoutEnrollmentsInput, Prisma.certificatesUncheckedCreateWithoutEnrollmentsInput> | Prisma.certificatesCreateWithoutEnrollmentsInput[] | Prisma.certificatesUncheckedCreateWithoutEnrollmentsInput[];
    connectOrCreate?: Prisma.certificatesCreateOrConnectWithoutEnrollmentsInput | Prisma.certificatesCreateOrConnectWithoutEnrollmentsInput[];
    upsert?: Prisma.certificatesUpsertWithWhereUniqueWithoutEnrollmentsInput | Prisma.certificatesUpsertWithWhereUniqueWithoutEnrollmentsInput[];
    createMany?: Prisma.certificatesCreateManyEnrollmentsInputEnvelope;
    set?: Prisma.certificatesWhereUniqueInput | Prisma.certificatesWhereUniqueInput[];
    disconnect?: Prisma.certificatesWhereUniqueInput | Prisma.certificatesWhereUniqueInput[];
    delete?: Prisma.certificatesWhereUniqueInput | Prisma.certificatesWhereUniqueInput[];
    connect?: Prisma.certificatesWhereUniqueInput | Prisma.certificatesWhereUniqueInput[];
    update?: Prisma.certificatesUpdateWithWhereUniqueWithoutEnrollmentsInput | Prisma.certificatesUpdateWithWhereUniqueWithoutEnrollmentsInput[];
    updateMany?: Prisma.certificatesUpdateManyWithWhereWithoutEnrollmentsInput | Prisma.certificatesUpdateManyWithWhereWithoutEnrollmentsInput[];
    deleteMany?: Prisma.certificatesScalarWhereInput | Prisma.certificatesScalarWhereInput[];
};
export type certificatesCreateNestedManyWithoutUsersInput = {
    create?: Prisma.XOR<Prisma.certificatesCreateWithoutUsersInput, Prisma.certificatesUncheckedCreateWithoutUsersInput> | Prisma.certificatesCreateWithoutUsersInput[] | Prisma.certificatesUncheckedCreateWithoutUsersInput[];
    connectOrCreate?: Prisma.certificatesCreateOrConnectWithoutUsersInput | Prisma.certificatesCreateOrConnectWithoutUsersInput[];
    createMany?: Prisma.certificatesCreateManyUsersInputEnvelope;
    connect?: Prisma.certificatesWhereUniqueInput | Prisma.certificatesWhereUniqueInput[];
};
export type certificatesUncheckedCreateNestedManyWithoutUsersInput = {
    create?: Prisma.XOR<Prisma.certificatesCreateWithoutUsersInput, Prisma.certificatesUncheckedCreateWithoutUsersInput> | Prisma.certificatesCreateWithoutUsersInput[] | Prisma.certificatesUncheckedCreateWithoutUsersInput[];
    connectOrCreate?: Prisma.certificatesCreateOrConnectWithoutUsersInput | Prisma.certificatesCreateOrConnectWithoutUsersInput[];
    createMany?: Prisma.certificatesCreateManyUsersInputEnvelope;
    connect?: Prisma.certificatesWhereUniqueInput | Prisma.certificatesWhereUniqueInput[];
};
export type certificatesUpdateManyWithoutUsersNestedInput = {
    create?: Prisma.XOR<Prisma.certificatesCreateWithoutUsersInput, Prisma.certificatesUncheckedCreateWithoutUsersInput> | Prisma.certificatesCreateWithoutUsersInput[] | Prisma.certificatesUncheckedCreateWithoutUsersInput[];
    connectOrCreate?: Prisma.certificatesCreateOrConnectWithoutUsersInput | Prisma.certificatesCreateOrConnectWithoutUsersInput[];
    upsert?: Prisma.certificatesUpsertWithWhereUniqueWithoutUsersInput | Prisma.certificatesUpsertWithWhereUniqueWithoutUsersInput[];
    createMany?: Prisma.certificatesCreateManyUsersInputEnvelope;
    set?: Prisma.certificatesWhereUniqueInput | Prisma.certificatesWhereUniqueInput[];
    disconnect?: Prisma.certificatesWhereUniqueInput | Prisma.certificatesWhereUniqueInput[];
    delete?: Prisma.certificatesWhereUniqueInput | Prisma.certificatesWhereUniqueInput[];
    connect?: Prisma.certificatesWhereUniqueInput | Prisma.certificatesWhereUniqueInput[];
    update?: Prisma.certificatesUpdateWithWhereUniqueWithoutUsersInput | Prisma.certificatesUpdateWithWhereUniqueWithoutUsersInput[];
    updateMany?: Prisma.certificatesUpdateManyWithWhereWithoutUsersInput | Prisma.certificatesUpdateManyWithWhereWithoutUsersInput[];
    deleteMany?: Prisma.certificatesScalarWhereInput | Prisma.certificatesScalarWhereInput[];
};
export type certificatesUncheckedUpdateManyWithoutUsersNestedInput = {
    create?: Prisma.XOR<Prisma.certificatesCreateWithoutUsersInput, Prisma.certificatesUncheckedCreateWithoutUsersInput> | Prisma.certificatesCreateWithoutUsersInput[] | Prisma.certificatesUncheckedCreateWithoutUsersInput[];
    connectOrCreate?: Prisma.certificatesCreateOrConnectWithoutUsersInput | Prisma.certificatesCreateOrConnectWithoutUsersInput[];
    upsert?: Prisma.certificatesUpsertWithWhereUniqueWithoutUsersInput | Prisma.certificatesUpsertWithWhereUniqueWithoutUsersInput[];
    createMany?: Prisma.certificatesCreateManyUsersInputEnvelope;
    set?: Prisma.certificatesWhereUniqueInput | Prisma.certificatesWhereUniqueInput[];
    disconnect?: Prisma.certificatesWhereUniqueInput | Prisma.certificatesWhereUniqueInput[];
    delete?: Prisma.certificatesWhereUniqueInput | Prisma.certificatesWhereUniqueInput[];
    connect?: Prisma.certificatesWhereUniqueInput | Prisma.certificatesWhereUniqueInput[];
    update?: Prisma.certificatesUpdateWithWhereUniqueWithoutUsersInput | Prisma.certificatesUpdateWithWhereUniqueWithoutUsersInput[];
    updateMany?: Prisma.certificatesUpdateManyWithWhereWithoutUsersInput | Prisma.certificatesUpdateManyWithWhereWithoutUsersInput[];
    deleteMany?: Prisma.certificatesScalarWhereInput | Prisma.certificatesScalarWhereInput[];
};
export type certificatesCreateWithoutCoursesInput = {
    id?: bigint | number;
    certificate_number: string;
    issued_date: Date | string;
    verification_code: string;
    pdf_path?: string | null;
    created_at?: Date | string | null;
    updated_at?: Date | string | null;
    enrollments: Prisma.enrollmentsCreateNestedOneWithoutCertificatesInput;
    users: Prisma.usersCreateNestedOneWithoutCertificatesInput;
};
export type certificatesUncheckedCreateWithoutCoursesInput = {
    id?: bigint | number;
    user_id: bigint | number;
    enrollment_id: bigint | number;
    certificate_number: string;
    issued_date: Date | string;
    verification_code: string;
    pdf_path?: string | null;
    created_at?: Date | string | null;
    updated_at?: Date | string | null;
};
export type certificatesCreateOrConnectWithoutCoursesInput = {
    where: Prisma.certificatesWhereUniqueInput;
    create: Prisma.XOR<Prisma.certificatesCreateWithoutCoursesInput, Prisma.certificatesUncheckedCreateWithoutCoursesInput>;
};
export type certificatesCreateManyCoursesInputEnvelope = {
    data: Prisma.certificatesCreateManyCoursesInput | Prisma.certificatesCreateManyCoursesInput[];
    skipDuplicates?: boolean;
};
export type certificatesUpsertWithWhereUniqueWithoutCoursesInput = {
    where: Prisma.certificatesWhereUniqueInput;
    update: Prisma.XOR<Prisma.certificatesUpdateWithoutCoursesInput, Prisma.certificatesUncheckedUpdateWithoutCoursesInput>;
    create: Prisma.XOR<Prisma.certificatesCreateWithoutCoursesInput, Prisma.certificatesUncheckedCreateWithoutCoursesInput>;
};
export type certificatesUpdateWithWhereUniqueWithoutCoursesInput = {
    where: Prisma.certificatesWhereUniqueInput;
    data: Prisma.XOR<Prisma.certificatesUpdateWithoutCoursesInput, Prisma.certificatesUncheckedUpdateWithoutCoursesInput>;
};
export type certificatesUpdateManyWithWhereWithoutCoursesInput = {
    where: Prisma.certificatesScalarWhereInput;
    data: Prisma.XOR<Prisma.certificatesUpdateManyMutationInput, Prisma.certificatesUncheckedUpdateManyWithoutCoursesInput>;
};
export type certificatesScalarWhereInput = {
    AND?: Prisma.certificatesScalarWhereInput | Prisma.certificatesScalarWhereInput[];
    OR?: Prisma.certificatesScalarWhereInput[];
    NOT?: Prisma.certificatesScalarWhereInput | Prisma.certificatesScalarWhereInput[];
    id?: Prisma.BigIntFilter<"certificates"> | bigint | number;
    user_id?: Prisma.BigIntFilter<"certificates"> | bigint | number;
    course_id?: Prisma.BigIntFilter<"certificates"> | bigint | number;
    enrollment_id?: Prisma.BigIntFilter<"certificates"> | bigint | number;
    certificate_number?: Prisma.StringFilter<"certificates"> | string;
    issued_date?: Prisma.DateTimeFilter<"certificates"> | Date | string;
    verification_code?: Prisma.StringFilter<"certificates"> | string;
    pdf_path?: Prisma.StringNullableFilter<"certificates"> | string | null;
    created_at?: Prisma.DateTimeNullableFilter<"certificates"> | Date | string | null;
    updated_at?: Prisma.DateTimeNullableFilter<"certificates"> | Date | string | null;
};
export type certificatesCreateWithoutEnrollmentsInput = {
    id?: bigint | number;
    certificate_number: string;
    issued_date: Date | string;
    verification_code: string;
    pdf_path?: string | null;
    created_at?: Date | string | null;
    updated_at?: Date | string | null;
    courses: Prisma.coursesCreateNestedOneWithoutCertificatesInput;
    users: Prisma.usersCreateNestedOneWithoutCertificatesInput;
};
export type certificatesUncheckedCreateWithoutEnrollmentsInput = {
    id?: bigint | number;
    user_id: bigint | number;
    course_id: bigint | number;
    certificate_number: string;
    issued_date: Date | string;
    verification_code: string;
    pdf_path?: string | null;
    created_at?: Date | string | null;
    updated_at?: Date | string | null;
};
export type certificatesCreateOrConnectWithoutEnrollmentsInput = {
    where: Prisma.certificatesWhereUniqueInput;
    create: Prisma.XOR<Prisma.certificatesCreateWithoutEnrollmentsInput, Prisma.certificatesUncheckedCreateWithoutEnrollmentsInput>;
};
export type certificatesCreateManyEnrollmentsInputEnvelope = {
    data: Prisma.certificatesCreateManyEnrollmentsInput | Prisma.certificatesCreateManyEnrollmentsInput[];
    skipDuplicates?: boolean;
};
export type certificatesUpsertWithWhereUniqueWithoutEnrollmentsInput = {
    where: Prisma.certificatesWhereUniqueInput;
    update: Prisma.XOR<Prisma.certificatesUpdateWithoutEnrollmentsInput, Prisma.certificatesUncheckedUpdateWithoutEnrollmentsInput>;
    create: Prisma.XOR<Prisma.certificatesCreateWithoutEnrollmentsInput, Prisma.certificatesUncheckedCreateWithoutEnrollmentsInput>;
};
export type certificatesUpdateWithWhereUniqueWithoutEnrollmentsInput = {
    where: Prisma.certificatesWhereUniqueInput;
    data: Prisma.XOR<Prisma.certificatesUpdateWithoutEnrollmentsInput, Prisma.certificatesUncheckedUpdateWithoutEnrollmentsInput>;
};
export type certificatesUpdateManyWithWhereWithoutEnrollmentsInput = {
    where: Prisma.certificatesScalarWhereInput;
    data: Prisma.XOR<Prisma.certificatesUpdateManyMutationInput, Prisma.certificatesUncheckedUpdateManyWithoutEnrollmentsInput>;
};
export type certificatesCreateWithoutUsersInput = {
    id?: bigint | number;
    certificate_number: string;
    issued_date: Date | string;
    verification_code: string;
    pdf_path?: string | null;
    created_at?: Date | string | null;
    updated_at?: Date | string | null;
    courses: Prisma.coursesCreateNestedOneWithoutCertificatesInput;
    enrollments: Prisma.enrollmentsCreateNestedOneWithoutCertificatesInput;
};
export type certificatesUncheckedCreateWithoutUsersInput = {
    id?: bigint | number;
    course_id: bigint | number;
    enrollment_id: bigint | number;
    certificate_number: string;
    issued_date: Date | string;
    verification_code: string;
    pdf_path?: string | null;
    created_at?: Date | string | null;
    updated_at?: Date | string | null;
};
export type certificatesCreateOrConnectWithoutUsersInput = {
    where: Prisma.certificatesWhereUniqueInput;
    create: Prisma.XOR<Prisma.certificatesCreateWithoutUsersInput, Prisma.certificatesUncheckedCreateWithoutUsersInput>;
};
export type certificatesCreateManyUsersInputEnvelope = {
    data: Prisma.certificatesCreateManyUsersInput | Prisma.certificatesCreateManyUsersInput[];
    skipDuplicates?: boolean;
};
export type certificatesUpsertWithWhereUniqueWithoutUsersInput = {
    where: Prisma.certificatesWhereUniqueInput;
    update: Prisma.XOR<Prisma.certificatesUpdateWithoutUsersInput, Prisma.certificatesUncheckedUpdateWithoutUsersInput>;
    create: Prisma.XOR<Prisma.certificatesCreateWithoutUsersInput, Prisma.certificatesUncheckedCreateWithoutUsersInput>;
};
export type certificatesUpdateWithWhereUniqueWithoutUsersInput = {
    where: Prisma.certificatesWhereUniqueInput;
    data: Prisma.XOR<Prisma.certificatesUpdateWithoutUsersInput, Prisma.certificatesUncheckedUpdateWithoutUsersInput>;
};
export type certificatesUpdateManyWithWhereWithoutUsersInput = {
    where: Prisma.certificatesScalarWhereInput;
    data: Prisma.XOR<Prisma.certificatesUpdateManyMutationInput, Prisma.certificatesUncheckedUpdateManyWithoutUsersInput>;
};
export type certificatesCreateManyCoursesInput = {
    id?: bigint | number;
    user_id: bigint | number;
    enrollment_id: bigint | number;
    certificate_number: string;
    issued_date: Date | string;
    verification_code: string;
    pdf_path?: string | null;
    created_at?: Date | string | null;
    updated_at?: Date | string | null;
};
export type certificatesUpdateWithoutCoursesInput = {
    id?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    certificate_number?: Prisma.StringFieldUpdateOperationsInput | string;
    issued_date?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    verification_code?: Prisma.StringFieldUpdateOperationsInput | string;
    pdf_path?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    created_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    updated_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    enrollments?: Prisma.enrollmentsUpdateOneRequiredWithoutCertificatesNestedInput;
    users?: Prisma.usersUpdateOneRequiredWithoutCertificatesNestedInput;
};
export type certificatesUncheckedUpdateWithoutCoursesInput = {
    id?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    user_id?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    enrollment_id?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    certificate_number?: Prisma.StringFieldUpdateOperationsInput | string;
    issued_date?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    verification_code?: Prisma.StringFieldUpdateOperationsInput | string;
    pdf_path?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    created_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    updated_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
};
export type certificatesUncheckedUpdateManyWithoutCoursesInput = {
    id?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    user_id?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    enrollment_id?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    certificate_number?: Prisma.StringFieldUpdateOperationsInput | string;
    issued_date?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    verification_code?: Prisma.StringFieldUpdateOperationsInput | string;
    pdf_path?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    created_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    updated_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
};
export type certificatesCreateManyEnrollmentsInput = {
    id?: bigint | number;
    user_id: bigint | number;
    course_id: bigint | number;
    certificate_number: string;
    issued_date: Date | string;
    verification_code: string;
    pdf_path?: string | null;
    created_at?: Date | string | null;
    updated_at?: Date | string | null;
};
export type certificatesUpdateWithoutEnrollmentsInput = {
    id?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    certificate_number?: Prisma.StringFieldUpdateOperationsInput | string;
    issued_date?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    verification_code?: Prisma.StringFieldUpdateOperationsInput | string;
    pdf_path?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    created_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    updated_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    courses?: Prisma.coursesUpdateOneRequiredWithoutCertificatesNestedInput;
    users?: Prisma.usersUpdateOneRequiredWithoutCertificatesNestedInput;
};
export type certificatesUncheckedUpdateWithoutEnrollmentsInput = {
    id?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    user_id?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    course_id?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    certificate_number?: Prisma.StringFieldUpdateOperationsInput | string;
    issued_date?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    verification_code?: Prisma.StringFieldUpdateOperationsInput | string;
    pdf_path?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    created_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    updated_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
};
export type certificatesUncheckedUpdateManyWithoutEnrollmentsInput = {
    id?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    user_id?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    course_id?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    certificate_number?: Prisma.StringFieldUpdateOperationsInput | string;
    issued_date?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    verification_code?: Prisma.StringFieldUpdateOperationsInput | string;
    pdf_path?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    created_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    updated_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
};
export type certificatesCreateManyUsersInput = {
    id?: bigint | number;
    course_id: bigint | number;
    enrollment_id: bigint | number;
    certificate_number: string;
    issued_date: Date | string;
    verification_code: string;
    pdf_path?: string | null;
    created_at?: Date | string | null;
    updated_at?: Date | string | null;
};
export type certificatesUpdateWithoutUsersInput = {
    id?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    certificate_number?: Prisma.StringFieldUpdateOperationsInput | string;
    issued_date?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    verification_code?: Prisma.StringFieldUpdateOperationsInput | string;
    pdf_path?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    created_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    updated_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    courses?: Prisma.coursesUpdateOneRequiredWithoutCertificatesNestedInput;
    enrollments?: Prisma.enrollmentsUpdateOneRequiredWithoutCertificatesNestedInput;
};
export type certificatesUncheckedUpdateWithoutUsersInput = {
    id?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    course_id?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    enrollment_id?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    certificate_number?: Prisma.StringFieldUpdateOperationsInput | string;
    issued_date?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    verification_code?: Prisma.StringFieldUpdateOperationsInput | string;
    pdf_path?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    created_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    updated_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
};
export type certificatesUncheckedUpdateManyWithoutUsersInput = {
    id?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    course_id?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    enrollment_id?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    certificate_number?: Prisma.StringFieldUpdateOperationsInput | string;
    issued_date?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    verification_code?: Prisma.StringFieldUpdateOperationsInput | string;
    pdf_path?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    created_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    updated_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
};
export type certificatesSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    user_id?: boolean;
    course_id?: boolean;
    enrollment_id?: boolean;
    certificate_number?: boolean;
    issued_date?: boolean;
    verification_code?: boolean;
    pdf_path?: boolean;
    created_at?: boolean;
    updated_at?: boolean;
    courses?: boolean | Prisma.coursesDefaultArgs<ExtArgs>;
    enrollments?: boolean | Prisma.enrollmentsDefaultArgs<ExtArgs>;
    users?: boolean | Prisma.usersDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["certificates"]>;
export type certificatesSelectScalar = {
    id?: boolean;
    user_id?: boolean;
    course_id?: boolean;
    enrollment_id?: boolean;
    certificate_number?: boolean;
    issued_date?: boolean;
    verification_code?: boolean;
    pdf_path?: boolean;
    created_at?: boolean;
    updated_at?: boolean;
};
export type certificatesOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "user_id" | "course_id" | "enrollment_id" | "certificate_number" | "issued_date" | "verification_code" | "pdf_path" | "created_at" | "updated_at", ExtArgs["result"]["certificates"]>;
export type certificatesInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    courses?: boolean | Prisma.coursesDefaultArgs<ExtArgs>;
    enrollments?: boolean | Prisma.enrollmentsDefaultArgs<ExtArgs>;
    users?: boolean | Prisma.usersDefaultArgs<ExtArgs>;
};
export type $certificatesPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "certificates";
    objects: {
        courses: Prisma.$coursesPayload<ExtArgs>;
        enrollments: Prisma.$enrollmentsPayload<ExtArgs>;
        users: Prisma.$usersPayload<ExtArgs>;
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id: bigint;
        user_id: bigint;
        course_id: bigint;
        enrollment_id: bigint;
        certificate_number: string;
        issued_date: Date;
        verification_code: string;
        pdf_path: string | null;
        created_at: Date | null;
        updated_at: Date | null;
    }, ExtArgs["result"]["certificates"]>;
    composites: {};
};
export type certificatesGetPayload<S extends boolean | null | undefined | certificatesDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$certificatesPayload, S>;
export type certificatesCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<certificatesFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: CertificatesCountAggregateInputType | true;
};
export interface certificatesDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['certificates'];
        meta: {
            name: 'certificates';
        };
    };
    findUnique<T extends certificatesFindUniqueArgs>(args: Prisma.SelectSubset<T, certificatesFindUniqueArgs<ExtArgs>>): Prisma.Prisma__certificatesClient<runtime.Types.Result.GetResult<Prisma.$certificatesPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findUniqueOrThrow<T extends certificatesFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, certificatesFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__certificatesClient<runtime.Types.Result.GetResult<Prisma.$certificatesPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findFirst<T extends certificatesFindFirstArgs>(args?: Prisma.SelectSubset<T, certificatesFindFirstArgs<ExtArgs>>): Prisma.Prisma__certificatesClient<runtime.Types.Result.GetResult<Prisma.$certificatesPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findFirstOrThrow<T extends certificatesFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, certificatesFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__certificatesClient<runtime.Types.Result.GetResult<Prisma.$certificatesPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findMany<T extends certificatesFindManyArgs>(args?: Prisma.SelectSubset<T, certificatesFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$certificatesPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    create<T extends certificatesCreateArgs>(args: Prisma.SelectSubset<T, certificatesCreateArgs<ExtArgs>>): Prisma.Prisma__certificatesClient<runtime.Types.Result.GetResult<Prisma.$certificatesPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    createMany<T extends certificatesCreateManyArgs>(args?: Prisma.SelectSubset<T, certificatesCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    delete<T extends certificatesDeleteArgs>(args: Prisma.SelectSubset<T, certificatesDeleteArgs<ExtArgs>>): Prisma.Prisma__certificatesClient<runtime.Types.Result.GetResult<Prisma.$certificatesPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    update<T extends certificatesUpdateArgs>(args: Prisma.SelectSubset<T, certificatesUpdateArgs<ExtArgs>>): Prisma.Prisma__certificatesClient<runtime.Types.Result.GetResult<Prisma.$certificatesPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    deleteMany<T extends certificatesDeleteManyArgs>(args?: Prisma.SelectSubset<T, certificatesDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateMany<T extends certificatesUpdateManyArgs>(args: Prisma.SelectSubset<T, certificatesUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    upsert<T extends certificatesUpsertArgs>(args: Prisma.SelectSubset<T, certificatesUpsertArgs<ExtArgs>>): Prisma.Prisma__certificatesClient<runtime.Types.Result.GetResult<Prisma.$certificatesPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    count<T extends certificatesCountArgs>(args?: Prisma.Subset<T, certificatesCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], CertificatesCountAggregateOutputType> : number>;
    aggregate<T extends CertificatesAggregateArgs>(args: Prisma.Subset<T, CertificatesAggregateArgs>): Prisma.PrismaPromise<GetCertificatesAggregateType<T>>;
    groupBy<T extends certificatesGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: certificatesGroupByArgs['orderBy'];
    } : {
        orderBy?: certificatesGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, certificatesGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCertificatesGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    readonly fields: certificatesFieldRefs;
}
export interface Prisma__certificatesClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    courses<T extends Prisma.coursesDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.coursesDefaultArgs<ExtArgs>>): Prisma.Prisma__coursesClient<runtime.Types.Result.GetResult<Prisma.$coursesPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    enrollments<T extends Prisma.enrollmentsDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.enrollmentsDefaultArgs<ExtArgs>>): Prisma.Prisma__enrollmentsClient<runtime.Types.Result.GetResult<Prisma.$enrollmentsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    users<T extends Prisma.usersDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.usersDefaultArgs<ExtArgs>>): Prisma.Prisma__usersClient<runtime.Types.Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): runtime.Types.Utils.JsPromise<TResult1 | TResult2>;
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): runtime.Types.Utils.JsPromise<T | TResult>;
    finally(onfinally?: (() => void) | undefined | null): runtime.Types.Utils.JsPromise<T>;
}
export interface certificatesFieldRefs {
    readonly id: Prisma.FieldRef<"certificates", 'BigInt'>;
    readonly user_id: Prisma.FieldRef<"certificates", 'BigInt'>;
    readonly course_id: Prisma.FieldRef<"certificates", 'BigInt'>;
    readonly enrollment_id: Prisma.FieldRef<"certificates", 'BigInt'>;
    readonly certificate_number: Prisma.FieldRef<"certificates", 'String'>;
    readonly issued_date: Prisma.FieldRef<"certificates", 'DateTime'>;
    readonly verification_code: Prisma.FieldRef<"certificates", 'String'>;
    readonly pdf_path: Prisma.FieldRef<"certificates", 'String'>;
    readonly created_at: Prisma.FieldRef<"certificates", 'DateTime'>;
    readonly updated_at: Prisma.FieldRef<"certificates", 'DateTime'>;
}
export type certificatesFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.certificatesSelect<ExtArgs> | null;
    omit?: Prisma.certificatesOmit<ExtArgs> | null;
    include?: Prisma.certificatesInclude<ExtArgs> | null;
    where: Prisma.certificatesWhereUniqueInput;
};
export type certificatesFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.certificatesSelect<ExtArgs> | null;
    omit?: Prisma.certificatesOmit<ExtArgs> | null;
    include?: Prisma.certificatesInclude<ExtArgs> | null;
    where: Prisma.certificatesWhereUniqueInput;
};
export type certificatesFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
export type certificatesFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
export type certificatesFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
export type certificatesCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.certificatesSelect<ExtArgs> | null;
    omit?: Prisma.certificatesOmit<ExtArgs> | null;
    include?: Prisma.certificatesInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.certificatesCreateInput, Prisma.certificatesUncheckedCreateInput>;
};
export type certificatesCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.certificatesCreateManyInput | Prisma.certificatesCreateManyInput[];
    skipDuplicates?: boolean;
};
export type certificatesUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.certificatesSelect<ExtArgs> | null;
    omit?: Prisma.certificatesOmit<ExtArgs> | null;
    include?: Prisma.certificatesInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.certificatesUpdateInput, Prisma.certificatesUncheckedUpdateInput>;
    where: Prisma.certificatesWhereUniqueInput;
};
export type certificatesUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.XOR<Prisma.certificatesUpdateManyMutationInput, Prisma.certificatesUncheckedUpdateManyInput>;
    where?: Prisma.certificatesWhereInput;
    limit?: number;
};
export type certificatesUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.certificatesSelect<ExtArgs> | null;
    omit?: Prisma.certificatesOmit<ExtArgs> | null;
    include?: Prisma.certificatesInclude<ExtArgs> | null;
    where: Prisma.certificatesWhereUniqueInput;
    create: Prisma.XOR<Prisma.certificatesCreateInput, Prisma.certificatesUncheckedCreateInput>;
    update: Prisma.XOR<Prisma.certificatesUpdateInput, Prisma.certificatesUncheckedUpdateInput>;
};
export type certificatesDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.certificatesSelect<ExtArgs> | null;
    omit?: Prisma.certificatesOmit<ExtArgs> | null;
    include?: Prisma.certificatesInclude<ExtArgs> | null;
    where: Prisma.certificatesWhereUniqueInput;
};
export type certificatesDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.certificatesWhereInput;
    limit?: number;
};
export type certificatesDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.certificatesSelect<ExtArgs> | null;
    omit?: Prisma.certificatesOmit<ExtArgs> | null;
    include?: Prisma.certificatesInclude<ExtArgs> | null;
};
export {};
