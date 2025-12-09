import type * as runtime from "@prisma/client/runtime/client";
import type * as Prisma from "../internal/prismaNamespace.js";
export type quiz_attemptsModel = runtime.Types.Result.DefaultSelection<Prisma.$quiz_attemptsPayload>;
export type AggregateQuiz_attempts = {
    _count: Quiz_attemptsCountAggregateOutputType | null;
    _avg: Quiz_attemptsAvgAggregateOutputType | null;
    _sum: Quiz_attemptsSumAggregateOutputType | null;
    _min: Quiz_attemptsMinAggregateOutputType | null;
    _max: Quiz_attemptsMaxAggregateOutputType | null;
};
export type Quiz_attemptsAvgAggregateOutputType = {
    id: number | null;
    user_id: number | null;
    course_id: number | null;
    score: number | null;
    total_questions: number | null;
    percentage: runtime.Decimal | null;
};
export type Quiz_attemptsSumAggregateOutputType = {
    id: bigint | null;
    user_id: bigint | null;
    course_id: bigint | null;
    score: number | null;
    total_questions: number | null;
    percentage: runtime.Decimal | null;
};
export type Quiz_attemptsMinAggregateOutputType = {
    id: bigint | null;
    user_id: bigint | null;
    course_id: bigint | null;
    score: number | null;
    total_questions: number | null;
    percentage: runtime.Decimal | null;
    passed: boolean | null;
    attempted_at: Date | null;
    created_at: Date | null;
    updated_at: Date | null;
};
export type Quiz_attemptsMaxAggregateOutputType = {
    id: bigint | null;
    user_id: bigint | null;
    course_id: bigint | null;
    score: number | null;
    total_questions: number | null;
    percentage: runtime.Decimal | null;
    passed: boolean | null;
    attempted_at: Date | null;
    created_at: Date | null;
    updated_at: Date | null;
};
export type Quiz_attemptsCountAggregateOutputType = {
    id: number;
    user_id: number;
    course_id: number;
    score: number;
    total_questions: number;
    percentage: number;
    passed: number;
    answers: number;
    attempted_at: number;
    created_at: number;
    updated_at: number;
    _all: number;
};
export type Quiz_attemptsAvgAggregateInputType = {
    id?: true;
    user_id?: true;
    course_id?: true;
    score?: true;
    total_questions?: true;
    percentage?: true;
};
export type Quiz_attemptsSumAggregateInputType = {
    id?: true;
    user_id?: true;
    course_id?: true;
    score?: true;
    total_questions?: true;
    percentage?: true;
};
export type Quiz_attemptsMinAggregateInputType = {
    id?: true;
    user_id?: true;
    course_id?: true;
    score?: true;
    total_questions?: true;
    percentage?: true;
    passed?: true;
    attempted_at?: true;
    created_at?: true;
    updated_at?: true;
};
export type Quiz_attemptsMaxAggregateInputType = {
    id?: true;
    user_id?: true;
    course_id?: true;
    score?: true;
    total_questions?: true;
    percentage?: true;
    passed?: true;
    attempted_at?: true;
    created_at?: true;
    updated_at?: true;
};
export type Quiz_attemptsCountAggregateInputType = {
    id?: true;
    user_id?: true;
    course_id?: true;
    score?: true;
    total_questions?: true;
    percentage?: true;
    passed?: true;
    answers?: true;
    attempted_at?: true;
    created_at?: true;
    updated_at?: true;
    _all?: true;
};
export type Quiz_attemptsAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.quiz_attemptsWhereInput;
    orderBy?: Prisma.quiz_attemptsOrderByWithRelationInput | Prisma.quiz_attemptsOrderByWithRelationInput[];
    cursor?: Prisma.quiz_attemptsWhereUniqueInput;
    take?: number;
    skip?: number;
    _count?: true | Quiz_attemptsCountAggregateInputType;
    _avg?: Quiz_attemptsAvgAggregateInputType;
    _sum?: Quiz_attemptsSumAggregateInputType;
    _min?: Quiz_attemptsMinAggregateInputType;
    _max?: Quiz_attemptsMaxAggregateInputType;
};
export type GetQuiz_attemptsAggregateType<T extends Quiz_attemptsAggregateArgs> = {
    [P in keyof T & keyof AggregateQuiz_attempts]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateQuiz_attempts[P]> : Prisma.GetScalarType<T[P], AggregateQuiz_attempts[P]>;
};
export type quiz_attemptsGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.quiz_attemptsWhereInput;
    orderBy?: Prisma.quiz_attemptsOrderByWithAggregationInput | Prisma.quiz_attemptsOrderByWithAggregationInput[];
    by: Prisma.Quiz_attemptsScalarFieldEnum[] | Prisma.Quiz_attemptsScalarFieldEnum;
    having?: Prisma.quiz_attemptsScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: Quiz_attemptsCountAggregateInputType | true;
    _avg?: Quiz_attemptsAvgAggregateInputType;
    _sum?: Quiz_attemptsSumAggregateInputType;
    _min?: Quiz_attemptsMinAggregateInputType;
    _max?: Quiz_attemptsMaxAggregateInputType;
};
export type Quiz_attemptsGroupByOutputType = {
    id: bigint;
    user_id: bigint;
    course_id: bigint;
    score: number;
    total_questions: number;
    percentage: runtime.Decimal;
    passed: boolean;
    answers: runtime.JsonValue;
    attempted_at: Date;
    created_at: Date | null;
    updated_at: Date | null;
    _count: Quiz_attemptsCountAggregateOutputType | null;
    _avg: Quiz_attemptsAvgAggregateOutputType | null;
    _sum: Quiz_attemptsSumAggregateOutputType | null;
    _min: Quiz_attemptsMinAggregateOutputType | null;
    _max: Quiz_attemptsMaxAggregateOutputType | null;
};
type GetQuiz_attemptsGroupByPayload<T extends quiz_attemptsGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<Quiz_attemptsGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof Quiz_attemptsGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], Quiz_attemptsGroupByOutputType[P]> : Prisma.GetScalarType<T[P], Quiz_attemptsGroupByOutputType[P]>;
}>>;
export type quiz_attemptsWhereInput = {
    AND?: Prisma.quiz_attemptsWhereInput | Prisma.quiz_attemptsWhereInput[];
    OR?: Prisma.quiz_attemptsWhereInput[];
    NOT?: Prisma.quiz_attemptsWhereInput | Prisma.quiz_attemptsWhereInput[];
    id?: Prisma.BigIntFilter<"quiz_attempts"> | bigint | number;
    user_id?: Prisma.BigIntFilter<"quiz_attempts"> | bigint | number;
    course_id?: Prisma.BigIntFilter<"quiz_attempts"> | bigint | number;
    score?: Prisma.IntFilter<"quiz_attempts"> | number;
    total_questions?: Prisma.IntFilter<"quiz_attempts"> | number;
    percentage?: Prisma.DecimalFilter<"quiz_attempts"> | runtime.Decimal | runtime.DecimalJsLike | number | string;
    passed?: Prisma.BoolFilter<"quiz_attempts"> | boolean;
    answers?: Prisma.JsonFilter<"quiz_attempts">;
    attempted_at?: Prisma.DateTimeFilter<"quiz_attempts"> | Date | string;
    created_at?: Prisma.DateTimeNullableFilter<"quiz_attempts"> | Date | string | null;
    updated_at?: Prisma.DateTimeNullableFilter<"quiz_attempts"> | Date | string | null;
    courses?: Prisma.XOR<Prisma.CoursesScalarRelationFilter, Prisma.coursesWhereInput>;
    users?: Prisma.XOR<Prisma.UsersScalarRelationFilter, Prisma.usersWhereInput>;
};
export type quiz_attemptsOrderByWithRelationInput = {
    id?: Prisma.SortOrder;
    user_id?: Prisma.SortOrder;
    course_id?: Prisma.SortOrder;
    score?: Prisma.SortOrder;
    total_questions?: Prisma.SortOrder;
    percentage?: Prisma.SortOrder;
    passed?: Prisma.SortOrder;
    answers?: Prisma.SortOrder;
    attempted_at?: Prisma.SortOrder;
    created_at?: Prisma.SortOrderInput | Prisma.SortOrder;
    updated_at?: Prisma.SortOrderInput | Prisma.SortOrder;
    courses?: Prisma.coursesOrderByWithRelationInput;
    users?: Prisma.usersOrderByWithRelationInput;
};
export type quiz_attemptsWhereUniqueInput = Prisma.AtLeast<{
    id?: bigint | number;
    AND?: Prisma.quiz_attemptsWhereInput | Prisma.quiz_attemptsWhereInput[];
    OR?: Prisma.quiz_attemptsWhereInput[];
    NOT?: Prisma.quiz_attemptsWhereInput | Prisma.quiz_attemptsWhereInput[];
    user_id?: Prisma.BigIntFilter<"quiz_attempts"> | bigint | number;
    course_id?: Prisma.BigIntFilter<"quiz_attempts"> | bigint | number;
    score?: Prisma.IntFilter<"quiz_attempts"> | number;
    total_questions?: Prisma.IntFilter<"quiz_attempts"> | number;
    percentage?: Prisma.DecimalFilter<"quiz_attempts"> | runtime.Decimal | runtime.DecimalJsLike | number | string;
    passed?: Prisma.BoolFilter<"quiz_attempts"> | boolean;
    answers?: Prisma.JsonFilter<"quiz_attempts">;
    attempted_at?: Prisma.DateTimeFilter<"quiz_attempts"> | Date | string;
    created_at?: Prisma.DateTimeNullableFilter<"quiz_attempts"> | Date | string | null;
    updated_at?: Prisma.DateTimeNullableFilter<"quiz_attempts"> | Date | string | null;
    courses?: Prisma.XOR<Prisma.CoursesScalarRelationFilter, Prisma.coursesWhereInput>;
    users?: Prisma.XOR<Prisma.UsersScalarRelationFilter, Prisma.usersWhereInput>;
}, "id">;
export type quiz_attemptsOrderByWithAggregationInput = {
    id?: Prisma.SortOrder;
    user_id?: Prisma.SortOrder;
    course_id?: Prisma.SortOrder;
    score?: Prisma.SortOrder;
    total_questions?: Prisma.SortOrder;
    percentage?: Prisma.SortOrder;
    passed?: Prisma.SortOrder;
    answers?: Prisma.SortOrder;
    attempted_at?: Prisma.SortOrder;
    created_at?: Prisma.SortOrderInput | Prisma.SortOrder;
    updated_at?: Prisma.SortOrderInput | Prisma.SortOrder;
    _count?: Prisma.quiz_attemptsCountOrderByAggregateInput;
    _avg?: Prisma.quiz_attemptsAvgOrderByAggregateInput;
    _max?: Prisma.quiz_attemptsMaxOrderByAggregateInput;
    _min?: Prisma.quiz_attemptsMinOrderByAggregateInput;
    _sum?: Prisma.quiz_attemptsSumOrderByAggregateInput;
};
export type quiz_attemptsScalarWhereWithAggregatesInput = {
    AND?: Prisma.quiz_attemptsScalarWhereWithAggregatesInput | Prisma.quiz_attemptsScalarWhereWithAggregatesInput[];
    OR?: Prisma.quiz_attemptsScalarWhereWithAggregatesInput[];
    NOT?: Prisma.quiz_attemptsScalarWhereWithAggregatesInput | Prisma.quiz_attemptsScalarWhereWithAggregatesInput[];
    id?: Prisma.BigIntWithAggregatesFilter<"quiz_attempts"> | bigint | number;
    user_id?: Prisma.BigIntWithAggregatesFilter<"quiz_attempts"> | bigint | number;
    course_id?: Prisma.BigIntWithAggregatesFilter<"quiz_attempts"> | bigint | number;
    score?: Prisma.IntWithAggregatesFilter<"quiz_attempts"> | number;
    total_questions?: Prisma.IntWithAggregatesFilter<"quiz_attempts"> | number;
    percentage?: Prisma.DecimalWithAggregatesFilter<"quiz_attempts"> | runtime.Decimal | runtime.DecimalJsLike | number | string;
    passed?: Prisma.BoolWithAggregatesFilter<"quiz_attempts"> | boolean;
    answers?: Prisma.JsonWithAggregatesFilter<"quiz_attempts">;
    attempted_at?: Prisma.DateTimeWithAggregatesFilter<"quiz_attempts"> | Date | string;
    created_at?: Prisma.DateTimeNullableWithAggregatesFilter<"quiz_attempts"> | Date | string | null;
    updated_at?: Prisma.DateTimeNullableWithAggregatesFilter<"quiz_attempts"> | Date | string | null;
};
export type quiz_attemptsCreateInput = {
    id?: bigint | number;
    score: number;
    total_questions: number;
    percentage: runtime.Decimal | runtime.DecimalJsLike | number | string;
    passed?: boolean;
    answers: Prisma.JsonNullValueInput | runtime.InputJsonValue;
    attempted_at?: Date | string;
    created_at?: Date | string | null;
    updated_at?: Date | string | null;
    courses: Prisma.coursesCreateNestedOneWithoutQuiz_attemptsInput;
    users: Prisma.usersCreateNestedOneWithoutQuiz_attemptsInput;
};
export type quiz_attemptsUncheckedCreateInput = {
    id?: bigint | number;
    user_id: bigint | number;
    course_id: bigint | number;
    score: number;
    total_questions: number;
    percentage: runtime.Decimal | runtime.DecimalJsLike | number | string;
    passed?: boolean;
    answers: Prisma.JsonNullValueInput | runtime.InputJsonValue;
    attempted_at?: Date | string;
    created_at?: Date | string | null;
    updated_at?: Date | string | null;
};
export type quiz_attemptsUpdateInput = {
    id?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    score?: Prisma.IntFieldUpdateOperationsInput | number;
    total_questions?: Prisma.IntFieldUpdateOperationsInput | number;
    percentage?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    passed?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    answers?: Prisma.JsonNullValueInput | runtime.InputJsonValue;
    attempted_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    created_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    updated_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    courses?: Prisma.coursesUpdateOneRequiredWithoutQuiz_attemptsNestedInput;
    users?: Prisma.usersUpdateOneRequiredWithoutQuiz_attemptsNestedInput;
};
export type quiz_attemptsUncheckedUpdateInput = {
    id?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    user_id?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    course_id?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    score?: Prisma.IntFieldUpdateOperationsInput | number;
    total_questions?: Prisma.IntFieldUpdateOperationsInput | number;
    percentage?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    passed?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    answers?: Prisma.JsonNullValueInput | runtime.InputJsonValue;
    attempted_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    created_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    updated_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
};
export type quiz_attemptsCreateManyInput = {
    id?: bigint | number;
    user_id: bigint | number;
    course_id: bigint | number;
    score: number;
    total_questions: number;
    percentage: runtime.Decimal | runtime.DecimalJsLike | number | string;
    passed?: boolean;
    answers: Prisma.JsonNullValueInput | runtime.InputJsonValue;
    attempted_at?: Date | string;
    created_at?: Date | string | null;
    updated_at?: Date | string | null;
};
export type quiz_attemptsUpdateManyMutationInput = {
    id?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    score?: Prisma.IntFieldUpdateOperationsInput | number;
    total_questions?: Prisma.IntFieldUpdateOperationsInput | number;
    percentage?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    passed?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    answers?: Prisma.JsonNullValueInput | runtime.InputJsonValue;
    attempted_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    created_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    updated_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
};
export type quiz_attemptsUncheckedUpdateManyInput = {
    id?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    user_id?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    course_id?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    score?: Prisma.IntFieldUpdateOperationsInput | number;
    total_questions?: Prisma.IntFieldUpdateOperationsInput | number;
    percentage?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    passed?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    answers?: Prisma.JsonNullValueInput | runtime.InputJsonValue;
    attempted_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    created_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    updated_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
};
export type Quiz_attemptsListRelationFilter = {
    every?: Prisma.quiz_attemptsWhereInput;
    some?: Prisma.quiz_attemptsWhereInput;
    none?: Prisma.quiz_attemptsWhereInput;
};
export type quiz_attemptsOrderByRelationAggregateInput = {
    _count?: Prisma.SortOrder;
};
export type quiz_attemptsCountOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    user_id?: Prisma.SortOrder;
    course_id?: Prisma.SortOrder;
    score?: Prisma.SortOrder;
    total_questions?: Prisma.SortOrder;
    percentage?: Prisma.SortOrder;
    passed?: Prisma.SortOrder;
    answers?: Prisma.SortOrder;
    attempted_at?: Prisma.SortOrder;
    created_at?: Prisma.SortOrder;
    updated_at?: Prisma.SortOrder;
};
export type quiz_attemptsAvgOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    user_id?: Prisma.SortOrder;
    course_id?: Prisma.SortOrder;
    score?: Prisma.SortOrder;
    total_questions?: Prisma.SortOrder;
    percentage?: Prisma.SortOrder;
};
export type quiz_attemptsMaxOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    user_id?: Prisma.SortOrder;
    course_id?: Prisma.SortOrder;
    score?: Prisma.SortOrder;
    total_questions?: Prisma.SortOrder;
    percentage?: Prisma.SortOrder;
    passed?: Prisma.SortOrder;
    attempted_at?: Prisma.SortOrder;
    created_at?: Prisma.SortOrder;
    updated_at?: Prisma.SortOrder;
};
export type quiz_attemptsMinOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    user_id?: Prisma.SortOrder;
    course_id?: Prisma.SortOrder;
    score?: Prisma.SortOrder;
    total_questions?: Prisma.SortOrder;
    percentage?: Prisma.SortOrder;
    passed?: Prisma.SortOrder;
    attempted_at?: Prisma.SortOrder;
    created_at?: Prisma.SortOrder;
    updated_at?: Prisma.SortOrder;
};
export type quiz_attemptsSumOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    user_id?: Prisma.SortOrder;
    course_id?: Prisma.SortOrder;
    score?: Prisma.SortOrder;
    total_questions?: Prisma.SortOrder;
    percentage?: Prisma.SortOrder;
};
export type quiz_attemptsCreateNestedManyWithoutCoursesInput = {
    create?: Prisma.XOR<Prisma.quiz_attemptsCreateWithoutCoursesInput, Prisma.quiz_attemptsUncheckedCreateWithoutCoursesInput> | Prisma.quiz_attemptsCreateWithoutCoursesInput[] | Prisma.quiz_attemptsUncheckedCreateWithoutCoursesInput[];
    connectOrCreate?: Prisma.quiz_attemptsCreateOrConnectWithoutCoursesInput | Prisma.quiz_attemptsCreateOrConnectWithoutCoursesInput[];
    createMany?: Prisma.quiz_attemptsCreateManyCoursesInputEnvelope;
    connect?: Prisma.quiz_attemptsWhereUniqueInput | Prisma.quiz_attemptsWhereUniqueInput[];
};
export type quiz_attemptsUncheckedCreateNestedManyWithoutCoursesInput = {
    create?: Prisma.XOR<Prisma.quiz_attemptsCreateWithoutCoursesInput, Prisma.quiz_attemptsUncheckedCreateWithoutCoursesInput> | Prisma.quiz_attemptsCreateWithoutCoursesInput[] | Prisma.quiz_attemptsUncheckedCreateWithoutCoursesInput[];
    connectOrCreate?: Prisma.quiz_attemptsCreateOrConnectWithoutCoursesInput | Prisma.quiz_attemptsCreateOrConnectWithoutCoursesInput[];
    createMany?: Prisma.quiz_attemptsCreateManyCoursesInputEnvelope;
    connect?: Prisma.quiz_attemptsWhereUniqueInput | Prisma.quiz_attemptsWhereUniqueInput[];
};
export type quiz_attemptsUpdateManyWithoutCoursesNestedInput = {
    create?: Prisma.XOR<Prisma.quiz_attemptsCreateWithoutCoursesInput, Prisma.quiz_attemptsUncheckedCreateWithoutCoursesInput> | Prisma.quiz_attemptsCreateWithoutCoursesInput[] | Prisma.quiz_attemptsUncheckedCreateWithoutCoursesInput[];
    connectOrCreate?: Prisma.quiz_attemptsCreateOrConnectWithoutCoursesInput | Prisma.quiz_attemptsCreateOrConnectWithoutCoursesInput[];
    upsert?: Prisma.quiz_attemptsUpsertWithWhereUniqueWithoutCoursesInput | Prisma.quiz_attemptsUpsertWithWhereUniqueWithoutCoursesInput[];
    createMany?: Prisma.quiz_attemptsCreateManyCoursesInputEnvelope;
    set?: Prisma.quiz_attemptsWhereUniqueInput | Prisma.quiz_attemptsWhereUniqueInput[];
    disconnect?: Prisma.quiz_attemptsWhereUniqueInput | Prisma.quiz_attemptsWhereUniqueInput[];
    delete?: Prisma.quiz_attemptsWhereUniqueInput | Prisma.quiz_attemptsWhereUniqueInput[];
    connect?: Prisma.quiz_attemptsWhereUniqueInput | Prisma.quiz_attemptsWhereUniqueInput[];
    update?: Prisma.quiz_attemptsUpdateWithWhereUniqueWithoutCoursesInput | Prisma.quiz_attemptsUpdateWithWhereUniqueWithoutCoursesInput[];
    updateMany?: Prisma.quiz_attemptsUpdateManyWithWhereWithoutCoursesInput | Prisma.quiz_attemptsUpdateManyWithWhereWithoutCoursesInput[];
    deleteMany?: Prisma.quiz_attemptsScalarWhereInput | Prisma.quiz_attemptsScalarWhereInput[];
};
export type quiz_attemptsUncheckedUpdateManyWithoutCoursesNestedInput = {
    create?: Prisma.XOR<Prisma.quiz_attemptsCreateWithoutCoursesInput, Prisma.quiz_attemptsUncheckedCreateWithoutCoursesInput> | Prisma.quiz_attemptsCreateWithoutCoursesInput[] | Prisma.quiz_attemptsUncheckedCreateWithoutCoursesInput[];
    connectOrCreate?: Prisma.quiz_attemptsCreateOrConnectWithoutCoursesInput | Prisma.quiz_attemptsCreateOrConnectWithoutCoursesInput[];
    upsert?: Prisma.quiz_attemptsUpsertWithWhereUniqueWithoutCoursesInput | Prisma.quiz_attemptsUpsertWithWhereUniqueWithoutCoursesInput[];
    createMany?: Prisma.quiz_attemptsCreateManyCoursesInputEnvelope;
    set?: Prisma.quiz_attemptsWhereUniqueInput | Prisma.quiz_attemptsWhereUniqueInput[];
    disconnect?: Prisma.quiz_attemptsWhereUniqueInput | Prisma.quiz_attemptsWhereUniqueInput[];
    delete?: Prisma.quiz_attemptsWhereUniqueInput | Prisma.quiz_attemptsWhereUniqueInput[];
    connect?: Prisma.quiz_attemptsWhereUniqueInput | Prisma.quiz_attemptsWhereUniqueInput[];
    update?: Prisma.quiz_attemptsUpdateWithWhereUniqueWithoutCoursesInput | Prisma.quiz_attemptsUpdateWithWhereUniqueWithoutCoursesInput[];
    updateMany?: Prisma.quiz_attemptsUpdateManyWithWhereWithoutCoursesInput | Prisma.quiz_attemptsUpdateManyWithWhereWithoutCoursesInput[];
    deleteMany?: Prisma.quiz_attemptsScalarWhereInput | Prisma.quiz_attemptsScalarWhereInput[];
};
export type quiz_attemptsCreateNestedManyWithoutUsersInput = {
    create?: Prisma.XOR<Prisma.quiz_attemptsCreateWithoutUsersInput, Prisma.quiz_attemptsUncheckedCreateWithoutUsersInput> | Prisma.quiz_attemptsCreateWithoutUsersInput[] | Prisma.quiz_attemptsUncheckedCreateWithoutUsersInput[];
    connectOrCreate?: Prisma.quiz_attemptsCreateOrConnectWithoutUsersInput | Prisma.quiz_attemptsCreateOrConnectWithoutUsersInput[];
    createMany?: Prisma.quiz_attemptsCreateManyUsersInputEnvelope;
    connect?: Prisma.quiz_attemptsWhereUniqueInput | Prisma.quiz_attemptsWhereUniqueInput[];
};
export type quiz_attemptsUncheckedCreateNestedManyWithoutUsersInput = {
    create?: Prisma.XOR<Prisma.quiz_attemptsCreateWithoutUsersInput, Prisma.quiz_attemptsUncheckedCreateWithoutUsersInput> | Prisma.quiz_attemptsCreateWithoutUsersInput[] | Prisma.quiz_attemptsUncheckedCreateWithoutUsersInput[];
    connectOrCreate?: Prisma.quiz_attemptsCreateOrConnectWithoutUsersInput | Prisma.quiz_attemptsCreateOrConnectWithoutUsersInput[];
    createMany?: Prisma.quiz_attemptsCreateManyUsersInputEnvelope;
    connect?: Prisma.quiz_attemptsWhereUniqueInput | Prisma.quiz_attemptsWhereUniqueInput[];
};
export type quiz_attemptsUpdateManyWithoutUsersNestedInput = {
    create?: Prisma.XOR<Prisma.quiz_attemptsCreateWithoutUsersInput, Prisma.quiz_attemptsUncheckedCreateWithoutUsersInput> | Prisma.quiz_attemptsCreateWithoutUsersInput[] | Prisma.quiz_attemptsUncheckedCreateWithoutUsersInput[];
    connectOrCreate?: Prisma.quiz_attemptsCreateOrConnectWithoutUsersInput | Prisma.quiz_attemptsCreateOrConnectWithoutUsersInput[];
    upsert?: Prisma.quiz_attemptsUpsertWithWhereUniqueWithoutUsersInput | Prisma.quiz_attemptsUpsertWithWhereUniqueWithoutUsersInput[];
    createMany?: Prisma.quiz_attemptsCreateManyUsersInputEnvelope;
    set?: Prisma.quiz_attemptsWhereUniqueInput | Prisma.quiz_attemptsWhereUniqueInput[];
    disconnect?: Prisma.quiz_attemptsWhereUniqueInput | Prisma.quiz_attemptsWhereUniqueInput[];
    delete?: Prisma.quiz_attemptsWhereUniqueInput | Prisma.quiz_attemptsWhereUniqueInput[];
    connect?: Prisma.quiz_attemptsWhereUniqueInput | Prisma.quiz_attemptsWhereUniqueInput[];
    update?: Prisma.quiz_attemptsUpdateWithWhereUniqueWithoutUsersInput | Prisma.quiz_attemptsUpdateWithWhereUniqueWithoutUsersInput[];
    updateMany?: Prisma.quiz_attemptsUpdateManyWithWhereWithoutUsersInput | Prisma.quiz_attemptsUpdateManyWithWhereWithoutUsersInput[];
    deleteMany?: Prisma.quiz_attemptsScalarWhereInput | Prisma.quiz_attemptsScalarWhereInput[];
};
export type quiz_attemptsUncheckedUpdateManyWithoutUsersNestedInput = {
    create?: Prisma.XOR<Prisma.quiz_attemptsCreateWithoutUsersInput, Prisma.quiz_attemptsUncheckedCreateWithoutUsersInput> | Prisma.quiz_attemptsCreateWithoutUsersInput[] | Prisma.quiz_attemptsUncheckedCreateWithoutUsersInput[];
    connectOrCreate?: Prisma.quiz_attemptsCreateOrConnectWithoutUsersInput | Prisma.quiz_attemptsCreateOrConnectWithoutUsersInput[];
    upsert?: Prisma.quiz_attemptsUpsertWithWhereUniqueWithoutUsersInput | Prisma.quiz_attemptsUpsertWithWhereUniqueWithoutUsersInput[];
    createMany?: Prisma.quiz_attemptsCreateManyUsersInputEnvelope;
    set?: Prisma.quiz_attemptsWhereUniqueInput | Prisma.quiz_attemptsWhereUniqueInput[];
    disconnect?: Prisma.quiz_attemptsWhereUniqueInput | Prisma.quiz_attemptsWhereUniqueInput[];
    delete?: Prisma.quiz_attemptsWhereUniqueInput | Prisma.quiz_attemptsWhereUniqueInput[];
    connect?: Prisma.quiz_attemptsWhereUniqueInput | Prisma.quiz_attemptsWhereUniqueInput[];
    update?: Prisma.quiz_attemptsUpdateWithWhereUniqueWithoutUsersInput | Prisma.quiz_attemptsUpdateWithWhereUniqueWithoutUsersInput[];
    updateMany?: Prisma.quiz_attemptsUpdateManyWithWhereWithoutUsersInput | Prisma.quiz_attemptsUpdateManyWithWhereWithoutUsersInput[];
    deleteMany?: Prisma.quiz_attemptsScalarWhereInput | Prisma.quiz_attemptsScalarWhereInput[];
};
export type quiz_attemptsCreateWithoutCoursesInput = {
    id?: bigint | number;
    score: number;
    total_questions: number;
    percentage: runtime.Decimal | runtime.DecimalJsLike | number | string;
    passed?: boolean;
    answers: Prisma.JsonNullValueInput | runtime.InputJsonValue;
    attempted_at?: Date | string;
    created_at?: Date | string | null;
    updated_at?: Date | string | null;
    users: Prisma.usersCreateNestedOneWithoutQuiz_attemptsInput;
};
export type quiz_attemptsUncheckedCreateWithoutCoursesInput = {
    id?: bigint | number;
    user_id: bigint | number;
    score: number;
    total_questions: number;
    percentage: runtime.Decimal | runtime.DecimalJsLike | number | string;
    passed?: boolean;
    answers: Prisma.JsonNullValueInput | runtime.InputJsonValue;
    attempted_at?: Date | string;
    created_at?: Date | string | null;
    updated_at?: Date | string | null;
};
export type quiz_attemptsCreateOrConnectWithoutCoursesInput = {
    where: Prisma.quiz_attemptsWhereUniqueInput;
    create: Prisma.XOR<Prisma.quiz_attemptsCreateWithoutCoursesInput, Prisma.quiz_attemptsUncheckedCreateWithoutCoursesInput>;
};
export type quiz_attemptsCreateManyCoursesInputEnvelope = {
    data: Prisma.quiz_attemptsCreateManyCoursesInput | Prisma.quiz_attemptsCreateManyCoursesInput[];
    skipDuplicates?: boolean;
};
export type quiz_attemptsUpsertWithWhereUniqueWithoutCoursesInput = {
    where: Prisma.quiz_attemptsWhereUniqueInput;
    update: Prisma.XOR<Prisma.quiz_attemptsUpdateWithoutCoursesInput, Prisma.quiz_attemptsUncheckedUpdateWithoutCoursesInput>;
    create: Prisma.XOR<Prisma.quiz_attemptsCreateWithoutCoursesInput, Prisma.quiz_attemptsUncheckedCreateWithoutCoursesInput>;
};
export type quiz_attemptsUpdateWithWhereUniqueWithoutCoursesInput = {
    where: Prisma.quiz_attemptsWhereUniqueInput;
    data: Prisma.XOR<Prisma.quiz_attemptsUpdateWithoutCoursesInput, Prisma.quiz_attemptsUncheckedUpdateWithoutCoursesInput>;
};
export type quiz_attemptsUpdateManyWithWhereWithoutCoursesInput = {
    where: Prisma.quiz_attemptsScalarWhereInput;
    data: Prisma.XOR<Prisma.quiz_attemptsUpdateManyMutationInput, Prisma.quiz_attemptsUncheckedUpdateManyWithoutCoursesInput>;
};
export type quiz_attemptsScalarWhereInput = {
    AND?: Prisma.quiz_attemptsScalarWhereInput | Prisma.quiz_attemptsScalarWhereInput[];
    OR?: Prisma.quiz_attemptsScalarWhereInput[];
    NOT?: Prisma.quiz_attemptsScalarWhereInput | Prisma.quiz_attemptsScalarWhereInput[];
    id?: Prisma.BigIntFilter<"quiz_attempts"> | bigint | number;
    user_id?: Prisma.BigIntFilter<"quiz_attempts"> | bigint | number;
    course_id?: Prisma.BigIntFilter<"quiz_attempts"> | bigint | number;
    score?: Prisma.IntFilter<"quiz_attempts"> | number;
    total_questions?: Prisma.IntFilter<"quiz_attempts"> | number;
    percentage?: Prisma.DecimalFilter<"quiz_attempts"> | runtime.Decimal | runtime.DecimalJsLike | number | string;
    passed?: Prisma.BoolFilter<"quiz_attempts"> | boolean;
    answers?: Prisma.JsonFilter<"quiz_attempts">;
    attempted_at?: Prisma.DateTimeFilter<"quiz_attempts"> | Date | string;
    created_at?: Prisma.DateTimeNullableFilter<"quiz_attempts"> | Date | string | null;
    updated_at?: Prisma.DateTimeNullableFilter<"quiz_attempts"> | Date | string | null;
};
export type quiz_attemptsCreateWithoutUsersInput = {
    id?: bigint | number;
    score: number;
    total_questions: number;
    percentage: runtime.Decimal | runtime.DecimalJsLike | number | string;
    passed?: boolean;
    answers: Prisma.JsonNullValueInput | runtime.InputJsonValue;
    attempted_at?: Date | string;
    created_at?: Date | string | null;
    updated_at?: Date | string | null;
    courses: Prisma.coursesCreateNestedOneWithoutQuiz_attemptsInput;
};
export type quiz_attemptsUncheckedCreateWithoutUsersInput = {
    id?: bigint | number;
    course_id: bigint | number;
    score: number;
    total_questions: number;
    percentage: runtime.Decimal | runtime.DecimalJsLike | number | string;
    passed?: boolean;
    answers: Prisma.JsonNullValueInput | runtime.InputJsonValue;
    attempted_at?: Date | string;
    created_at?: Date | string | null;
    updated_at?: Date | string | null;
};
export type quiz_attemptsCreateOrConnectWithoutUsersInput = {
    where: Prisma.quiz_attemptsWhereUniqueInput;
    create: Prisma.XOR<Prisma.quiz_attemptsCreateWithoutUsersInput, Prisma.quiz_attemptsUncheckedCreateWithoutUsersInput>;
};
export type quiz_attemptsCreateManyUsersInputEnvelope = {
    data: Prisma.quiz_attemptsCreateManyUsersInput | Prisma.quiz_attemptsCreateManyUsersInput[];
    skipDuplicates?: boolean;
};
export type quiz_attemptsUpsertWithWhereUniqueWithoutUsersInput = {
    where: Prisma.quiz_attemptsWhereUniqueInput;
    update: Prisma.XOR<Prisma.quiz_attemptsUpdateWithoutUsersInput, Prisma.quiz_attemptsUncheckedUpdateWithoutUsersInput>;
    create: Prisma.XOR<Prisma.quiz_attemptsCreateWithoutUsersInput, Prisma.quiz_attemptsUncheckedCreateWithoutUsersInput>;
};
export type quiz_attemptsUpdateWithWhereUniqueWithoutUsersInput = {
    where: Prisma.quiz_attemptsWhereUniqueInput;
    data: Prisma.XOR<Prisma.quiz_attemptsUpdateWithoutUsersInput, Prisma.quiz_attemptsUncheckedUpdateWithoutUsersInput>;
};
export type quiz_attemptsUpdateManyWithWhereWithoutUsersInput = {
    where: Prisma.quiz_attemptsScalarWhereInput;
    data: Prisma.XOR<Prisma.quiz_attemptsUpdateManyMutationInput, Prisma.quiz_attemptsUncheckedUpdateManyWithoutUsersInput>;
};
export type quiz_attemptsCreateManyCoursesInput = {
    id?: bigint | number;
    user_id: bigint | number;
    score: number;
    total_questions: number;
    percentage: runtime.Decimal | runtime.DecimalJsLike | number | string;
    passed?: boolean;
    answers: Prisma.JsonNullValueInput | runtime.InputJsonValue;
    attempted_at?: Date | string;
    created_at?: Date | string | null;
    updated_at?: Date | string | null;
};
export type quiz_attemptsUpdateWithoutCoursesInput = {
    id?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    score?: Prisma.IntFieldUpdateOperationsInput | number;
    total_questions?: Prisma.IntFieldUpdateOperationsInput | number;
    percentage?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    passed?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    answers?: Prisma.JsonNullValueInput | runtime.InputJsonValue;
    attempted_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    created_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    updated_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    users?: Prisma.usersUpdateOneRequiredWithoutQuiz_attemptsNestedInput;
};
export type quiz_attemptsUncheckedUpdateWithoutCoursesInput = {
    id?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    user_id?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    score?: Prisma.IntFieldUpdateOperationsInput | number;
    total_questions?: Prisma.IntFieldUpdateOperationsInput | number;
    percentage?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    passed?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    answers?: Prisma.JsonNullValueInput | runtime.InputJsonValue;
    attempted_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    created_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    updated_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
};
export type quiz_attemptsUncheckedUpdateManyWithoutCoursesInput = {
    id?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    user_id?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    score?: Prisma.IntFieldUpdateOperationsInput | number;
    total_questions?: Prisma.IntFieldUpdateOperationsInput | number;
    percentage?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    passed?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    answers?: Prisma.JsonNullValueInput | runtime.InputJsonValue;
    attempted_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    created_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    updated_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
};
export type quiz_attemptsCreateManyUsersInput = {
    id?: bigint | number;
    course_id: bigint | number;
    score: number;
    total_questions: number;
    percentage: runtime.Decimal | runtime.DecimalJsLike | number | string;
    passed?: boolean;
    answers: Prisma.JsonNullValueInput | runtime.InputJsonValue;
    attempted_at?: Date | string;
    created_at?: Date | string | null;
    updated_at?: Date | string | null;
};
export type quiz_attemptsUpdateWithoutUsersInput = {
    id?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    score?: Prisma.IntFieldUpdateOperationsInput | number;
    total_questions?: Prisma.IntFieldUpdateOperationsInput | number;
    percentage?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    passed?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    answers?: Prisma.JsonNullValueInput | runtime.InputJsonValue;
    attempted_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    created_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    updated_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    courses?: Prisma.coursesUpdateOneRequiredWithoutQuiz_attemptsNestedInput;
};
export type quiz_attemptsUncheckedUpdateWithoutUsersInput = {
    id?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    course_id?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    score?: Prisma.IntFieldUpdateOperationsInput | number;
    total_questions?: Prisma.IntFieldUpdateOperationsInput | number;
    percentage?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    passed?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    answers?: Prisma.JsonNullValueInput | runtime.InputJsonValue;
    attempted_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    created_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    updated_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
};
export type quiz_attemptsUncheckedUpdateManyWithoutUsersInput = {
    id?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    course_id?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    score?: Prisma.IntFieldUpdateOperationsInput | number;
    total_questions?: Prisma.IntFieldUpdateOperationsInput | number;
    percentage?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    passed?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    answers?: Prisma.JsonNullValueInput | runtime.InputJsonValue;
    attempted_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    created_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    updated_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
};
export type quiz_attemptsSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    user_id?: boolean;
    course_id?: boolean;
    score?: boolean;
    total_questions?: boolean;
    percentage?: boolean;
    passed?: boolean;
    answers?: boolean;
    attempted_at?: boolean;
    created_at?: boolean;
    updated_at?: boolean;
    courses?: boolean | Prisma.coursesDefaultArgs<ExtArgs>;
    users?: boolean | Prisma.usersDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["quiz_attempts"]>;
export type quiz_attemptsSelectScalar = {
    id?: boolean;
    user_id?: boolean;
    course_id?: boolean;
    score?: boolean;
    total_questions?: boolean;
    percentage?: boolean;
    passed?: boolean;
    answers?: boolean;
    attempted_at?: boolean;
    created_at?: boolean;
    updated_at?: boolean;
};
export type quiz_attemptsOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "user_id" | "course_id" | "score" | "total_questions" | "percentage" | "passed" | "answers" | "attempted_at" | "created_at" | "updated_at", ExtArgs["result"]["quiz_attempts"]>;
export type quiz_attemptsInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    courses?: boolean | Prisma.coursesDefaultArgs<ExtArgs>;
    users?: boolean | Prisma.usersDefaultArgs<ExtArgs>;
};
export type $quiz_attemptsPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "quiz_attempts";
    objects: {
        courses: Prisma.$coursesPayload<ExtArgs>;
        users: Prisma.$usersPayload<ExtArgs>;
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id: bigint;
        user_id: bigint;
        course_id: bigint;
        score: number;
        total_questions: number;
        percentage: runtime.Decimal;
        passed: boolean;
        answers: runtime.JsonValue;
        attempted_at: Date;
        created_at: Date | null;
        updated_at: Date | null;
    }, ExtArgs["result"]["quiz_attempts"]>;
    composites: {};
};
export type quiz_attemptsGetPayload<S extends boolean | null | undefined | quiz_attemptsDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$quiz_attemptsPayload, S>;
export type quiz_attemptsCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<quiz_attemptsFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: Quiz_attemptsCountAggregateInputType | true;
};
export interface quiz_attemptsDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['quiz_attempts'];
        meta: {
            name: 'quiz_attempts';
        };
    };
    findUnique<T extends quiz_attemptsFindUniqueArgs>(args: Prisma.SelectSubset<T, quiz_attemptsFindUniqueArgs<ExtArgs>>): Prisma.Prisma__quiz_attemptsClient<runtime.Types.Result.GetResult<Prisma.$quiz_attemptsPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findUniqueOrThrow<T extends quiz_attemptsFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, quiz_attemptsFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__quiz_attemptsClient<runtime.Types.Result.GetResult<Prisma.$quiz_attemptsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findFirst<T extends quiz_attemptsFindFirstArgs>(args?: Prisma.SelectSubset<T, quiz_attemptsFindFirstArgs<ExtArgs>>): Prisma.Prisma__quiz_attemptsClient<runtime.Types.Result.GetResult<Prisma.$quiz_attemptsPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findFirstOrThrow<T extends quiz_attemptsFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, quiz_attemptsFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__quiz_attemptsClient<runtime.Types.Result.GetResult<Prisma.$quiz_attemptsPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findMany<T extends quiz_attemptsFindManyArgs>(args?: Prisma.SelectSubset<T, quiz_attemptsFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$quiz_attemptsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    create<T extends quiz_attemptsCreateArgs>(args: Prisma.SelectSubset<T, quiz_attemptsCreateArgs<ExtArgs>>): Prisma.Prisma__quiz_attemptsClient<runtime.Types.Result.GetResult<Prisma.$quiz_attemptsPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    createMany<T extends quiz_attemptsCreateManyArgs>(args?: Prisma.SelectSubset<T, quiz_attemptsCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    delete<T extends quiz_attemptsDeleteArgs>(args: Prisma.SelectSubset<T, quiz_attemptsDeleteArgs<ExtArgs>>): Prisma.Prisma__quiz_attemptsClient<runtime.Types.Result.GetResult<Prisma.$quiz_attemptsPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    update<T extends quiz_attemptsUpdateArgs>(args: Prisma.SelectSubset<T, quiz_attemptsUpdateArgs<ExtArgs>>): Prisma.Prisma__quiz_attemptsClient<runtime.Types.Result.GetResult<Prisma.$quiz_attemptsPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    deleteMany<T extends quiz_attemptsDeleteManyArgs>(args?: Prisma.SelectSubset<T, quiz_attemptsDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateMany<T extends quiz_attemptsUpdateManyArgs>(args: Prisma.SelectSubset<T, quiz_attemptsUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    upsert<T extends quiz_attemptsUpsertArgs>(args: Prisma.SelectSubset<T, quiz_attemptsUpsertArgs<ExtArgs>>): Prisma.Prisma__quiz_attemptsClient<runtime.Types.Result.GetResult<Prisma.$quiz_attemptsPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    count<T extends quiz_attemptsCountArgs>(args?: Prisma.Subset<T, quiz_attemptsCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], Quiz_attemptsCountAggregateOutputType> : number>;
    aggregate<T extends Quiz_attemptsAggregateArgs>(args: Prisma.Subset<T, Quiz_attemptsAggregateArgs>): Prisma.PrismaPromise<GetQuiz_attemptsAggregateType<T>>;
    groupBy<T extends quiz_attemptsGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: quiz_attemptsGroupByArgs['orderBy'];
    } : {
        orderBy?: quiz_attemptsGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, quiz_attemptsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetQuiz_attemptsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    readonly fields: quiz_attemptsFieldRefs;
}
export interface Prisma__quiz_attemptsClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    courses<T extends Prisma.coursesDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.coursesDefaultArgs<ExtArgs>>): Prisma.Prisma__coursesClient<runtime.Types.Result.GetResult<Prisma.$coursesPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    users<T extends Prisma.usersDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.usersDefaultArgs<ExtArgs>>): Prisma.Prisma__usersClient<runtime.Types.Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): runtime.Types.Utils.JsPromise<TResult1 | TResult2>;
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): runtime.Types.Utils.JsPromise<T | TResult>;
    finally(onfinally?: (() => void) | undefined | null): runtime.Types.Utils.JsPromise<T>;
}
export interface quiz_attemptsFieldRefs {
    readonly id: Prisma.FieldRef<"quiz_attempts", 'BigInt'>;
    readonly user_id: Prisma.FieldRef<"quiz_attempts", 'BigInt'>;
    readonly course_id: Prisma.FieldRef<"quiz_attempts", 'BigInt'>;
    readonly score: Prisma.FieldRef<"quiz_attempts", 'Int'>;
    readonly total_questions: Prisma.FieldRef<"quiz_attempts", 'Int'>;
    readonly percentage: Prisma.FieldRef<"quiz_attempts", 'Decimal'>;
    readonly passed: Prisma.FieldRef<"quiz_attempts", 'Boolean'>;
    readonly answers: Prisma.FieldRef<"quiz_attempts", 'Json'>;
    readonly attempted_at: Prisma.FieldRef<"quiz_attempts", 'DateTime'>;
    readonly created_at: Prisma.FieldRef<"quiz_attempts", 'DateTime'>;
    readonly updated_at: Prisma.FieldRef<"quiz_attempts", 'DateTime'>;
}
export type quiz_attemptsFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.quiz_attemptsSelect<ExtArgs> | null;
    omit?: Prisma.quiz_attemptsOmit<ExtArgs> | null;
    include?: Prisma.quiz_attemptsInclude<ExtArgs> | null;
    where: Prisma.quiz_attemptsWhereUniqueInput;
};
export type quiz_attemptsFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.quiz_attemptsSelect<ExtArgs> | null;
    omit?: Prisma.quiz_attemptsOmit<ExtArgs> | null;
    include?: Prisma.quiz_attemptsInclude<ExtArgs> | null;
    where: Prisma.quiz_attemptsWhereUniqueInput;
};
export type quiz_attemptsFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.quiz_attemptsSelect<ExtArgs> | null;
    omit?: Prisma.quiz_attemptsOmit<ExtArgs> | null;
    include?: Prisma.quiz_attemptsInclude<ExtArgs> | null;
    where?: Prisma.quiz_attemptsWhereInput;
    orderBy?: Prisma.quiz_attemptsOrderByWithRelationInput | Prisma.quiz_attemptsOrderByWithRelationInput[];
    cursor?: Prisma.quiz_attemptsWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.Quiz_attemptsScalarFieldEnum | Prisma.Quiz_attemptsScalarFieldEnum[];
};
export type quiz_attemptsFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.quiz_attemptsSelect<ExtArgs> | null;
    omit?: Prisma.quiz_attemptsOmit<ExtArgs> | null;
    include?: Prisma.quiz_attemptsInclude<ExtArgs> | null;
    where?: Prisma.quiz_attemptsWhereInput;
    orderBy?: Prisma.quiz_attemptsOrderByWithRelationInput | Prisma.quiz_attemptsOrderByWithRelationInput[];
    cursor?: Prisma.quiz_attemptsWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.Quiz_attemptsScalarFieldEnum | Prisma.Quiz_attemptsScalarFieldEnum[];
};
export type quiz_attemptsFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.quiz_attemptsSelect<ExtArgs> | null;
    omit?: Prisma.quiz_attemptsOmit<ExtArgs> | null;
    include?: Prisma.quiz_attemptsInclude<ExtArgs> | null;
    where?: Prisma.quiz_attemptsWhereInput;
    orderBy?: Prisma.quiz_attemptsOrderByWithRelationInput | Prisma.quiz_attemptsOrderByWithRelationInput[];
    cursor?: Prisma.quiz_attemptsWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.Quiz_attemptsScalarFieldEnum | Prisma.Quiz_attemptsScalarFieldEnum[];
};
export type quiz_attemptsCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.quiz_attemptsSelect<ExtArgs> | null;
    omit?: Prisma.quiz_attemptsOmit<ExtArgs> | null;
    include?: Prisma.quiz_attemptsInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.quiz_attemptsCreateInput, Prisma.quiz_attemptsUncheckedCreateInput>;
};
export type quiz_attemptsCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.quiz_attemptsCreateManyInput | Prisma.quiz_attemptsCreateManyInput[];
    skipDuplicates?: boolean;
};
export type quiz_attemptsUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.quiz_attemptsSelect<ExtArgs> | null;
    omit?: Prisma.quiz_attemptsOmit<ExtArgs> | null;
    include?: Prisma.quiz_attemptsInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.quiz_attemptsUpdateInput, Prisma.quiz_attemptsUncheckedUpdateInput>;
    where: Prisma.quiz_attemptsWhereUniqueInput;
};
export type quiz_attemptsUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.XOR<Prisma.quiz_attemptsUpdateManyMutationInput, Prisma.quiz_attemptsUncheckedUpdateManyInput>;
    where?: Prisma.quiz_attemptsWhereInput;
    limit?: number;
};
export type quiz_attemptsUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.quiz_attemptsSelect<ExtArgs> | null;
    omit?: Prisma.quiz_attemptsOmit<ExtArgs> | null;
    include?: Prisma.quiz_attemptsInclude<ExtArgs> | null;
    where: Prisma.quiz_attemptsWhereUniqueInput;
    create: Prisma.XOR<Prisma.quiz_attemptsCreateInput, Prisma.quiz_attemptsUncheckedCreateInput>;
    update: Prisma.XOR<Prisma.quiz_attemptsUpdateInput, Prisma.quiz_attemptsUncheckedUpdateInput>;
};
export type quiz_attemptsDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.quiz_attemptsSelect<ExtArgs> | null;
    omit?: Prisma.quiz_attemptsOmit<ExtArgs> | null;
    include?: Prisma.quiz_attemptsInclude<ExtArgs> | null;
    where: Prisma.quiz_attemptsWhereUniqueInput;
};
export type quiz_attemptsDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.quiz_attemptsWhereInput;
    limit?: number;
};
export type quiz_attemptsDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.quiz_attemptsSelect<ExtArgs> | null;
    omit?: Prisma.quiz_attemptsOmit<ExtArgs> | null;
    include?: Prisma.quiz_attemptsInclude<ExtArgs> | null;
};
export {};
