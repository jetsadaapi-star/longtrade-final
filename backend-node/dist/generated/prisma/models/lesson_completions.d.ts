import type * as runtime from "@prisma/client/runtime/client";
import type * as Prisma from "../internal/prismaNamespace.js";
export type lesson_completionsModel = runtime.Types.Result.DefaultSelection<Prisma.$lesson_completionsPayload>;
export type AggregateLesson_completions = {
    _count: Lesson_completionsCountAggregateOutputType | null;
    _avg: Lesson_completionsAvgAggregateOutputType | null;
    _sum: Lesson_completionsSumAggregateOutputType | null;
    _min: Lesson_completionsMinAggregateOutputType | null;
    _max: Lesson_completionsMaxAggregateOutputType | null;
};
export type Lesson_completionsAvgAggregateOutputType = {
    id: number | null;
    user_id: number | null;
    course_id: number | null;
    video_progress: number | null;
};
export type Lesson_completionsSumAggregateOutputType = {
    id: bigint | null;
    user_id: bigint | null;
    course_id: bigint | null;
    video_progress: number | null;
};
export type Lesson_completionsMinAggregateOutputType = {
    id: bigint | null;
    user_id: bigint | null;
    course_id: bigint | null;
    section_id: string | null;
    lesson_id: string | null;
    completed_at: Date | null;
    video_progress: number | null;
    created_at: Date | null;
    updated_at: Date | null;
};
export type Lesson_completionsMaxAggregateOutputType = {
    id: bigint | null;
    user_id: bigint | null;
    course_id: bigint | null;
    section_id: string | null;
    lesson_id: string | null;
    completed_at: Date | null;
    video_progress: number | null;
    created_at: Date | null;
    updated_at: Date | null;
};
export type Lesson_completionsCountAggregateOutputType = {
    id: number;
    user_id: number;
    course_id: number;
    section_id: number;
    lesson_id: number;
    completed_at: number;
    video_progress: number;
    created_at: number;
    updated_at: number;
    _all: number;
};
export type Lesson_completionsAvgAggregateInputType = {
    id?: true;
    user_id?: true;
    course_id?: true;
    video_progress?: true;
};
export type Lesson_completionsSumAggregateInputType = {
    id?: true;
    user_id?: true;
    course_id?: true;
    video_progress?: true;
};
export type Lesson_completionsMinAggregateInputType = {
    id?: true;
    user_id?: true;
    course_id?: true;
    section_id?: true;
    lesson_id?: true;
    completed_at?: true;
    video_progress?: true;
    created_at?: true;
    updated_at?: true;
};
export type Lesson_completionsMaxAggregateInputType = {
    id?: true;
    user_id?: true;
    course_id?: true;
    section_id?: true;
    lesson_id?: true;
    completed_at?: true;
    video_progress?: true;
    created_at?: true;
    updated_at?: true;
};
export type Lesson_completionsCountAggregateInputType = {
    id?: true;
    user_id?: true;
    course_id?: true;
    section_id?: true;
    lesson_id?: true;
    completed_at?: true;
    video_progress?: true;
    created_at?: true;
    updated_at?: true;
    _all?: true;
};
export type Lesson_completionsAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.lesson_completionsWhereInput;
    orderBy?: Prisma.lesson_completionsOrderByWithRelationInput | Prisma.lesson_completionsOrderByWithRelationInput[];
    cursor?: Prisma.lesson_completionsWhereUniqueInput;
    take?: number;
    skip?: number;
    _count?: true | Lesson_completionsCountAggregateInputType;
    _avg?: Lesson_completionsAvgAggregateInputType;
    _sum?: Lesson_completionsSumAggregateInputType;
    _min?: Lesson_completionsMinAggregateInputType;
    _max?: Lesson_completionsMaxAggregateInputType;
};
export type GetLesson_completionsAggregateType<T extends Lesson_completionsAggregateArgs> = {
    [P in keyof T & keyof AggregateLesson_completions]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateLesson_completions[P]> : Prisma.GetScalarType<T[P], AggregateLesson_completions[P]>;
};
export type lesson_completionsGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.lesson_completionsWhereInput;
    orderBy?: Prisma.lesson_completionsOrderByWithAggregationInput | Prisma.lesson_completionsOrderByWithAggregationInput[];
    by: Prisma.Lesson_completionsScalarFieldEnum[] | Prisma.Lesson_completionsScalarFieldEnum;
    having?: Prisma.lesson_completionsScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: Lesson_completionsCountAggregateInputType | true;
    _avg?: Lesson_completionsAvgAggregateInputType;
    _sum?: Lesson_completionsSumAggregateInputType;
    _min?: Lesson_completionsMinAggregateInputType;
    _max?: Lesson_completionsMaxAggregateInputType;
};
export type Lesson_completionsGroupByOutputType = {
    id: bigint;
    user_id: bigint;
    course_id: bigint;
    section_id: string;
    lesson_id: string;
    completed_at: Date;
    video_progress: number;
    created_at: Date | null;
    updated_at: Date | null;
    _count: Lesson_completionsCountAggregateOutputType | null;
    _avg: Lesson_completionsAvgAggregateOutputType | null;
    _sum: Lesson_completionsSumAggregateOutputType | null;
    _min: Lesson_completionsMinAggregateOutputType | null;
    _max: Lesson_completionsMaxAggregateOutputType | null;
};
type GetLesson_completionsGroupByPayload<T extends lesson_completionsGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<Lesson_completionsGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof Lesson_completionsGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], Lesson_completionsGroupByOutputType[P]> : Prisma.GetScalarType<T[P], Lesson_completionsGroupByOutputType[P]>;
}>>;
export type lesson_completionsWhereInput = {
    AND?: Prisma.lesson_completionsWhereInput | Prisma.lesson_completionsWhereInput[];
    OR?: Prisma.lesson_completionsWhereInput[];
    NOT?: Prisma.lesson_completionsWhereInput | Prisma.lesson_completionsWhereInput[];
    id?: Prisma.BigIntFilter<"lesson_completions"> | bigint | number;
    user_id?: Prisma.BigIntFilter<"lesson_completions"> | bigint | number;
    course_id?: Prisma.BigIntFilter<"lesson_completions"> | bigint | number;
    section_id?: Prisma.StringFilter<"lesson_completions"> | string;
    lesson_id?: Prisma.StringFilter<"lesson_completions"> | string;
    completed_at?: Prisma.DateTimeFilter<"lesson_completions"> | Date | string;
    video_progress?: Prisma.IntFilter<"lesson_completions"> | number;
    created_at?: Prisma.DateTimeNullableFilter<"lesson_completions"> | Date | string | null;
    updated_at?: Prisma.DateTimeNullableFilter<"lesson_completions"> | Date | string | null;
    courses?: Prisma.XOR<Prisma.CoursesScalarRelationFilter, Prisma.coursesWhereInput>;
    users?: Prisma.XOR<Prisma.UsersScalarRelationFilter, Prisma.usersWhereInput>;
};
export type lesson_completionsOrderByWithRelationInput = {
    id?: Prisma.SortOrder;
    user_id?: Prisma.SortOrder;
    course_id?: Prisma.SortOrder;
    section_id?: Prisma.SortOrder;
    lesson_id?: Prisma.SortOrder;
    completed_at?: Prisma.SortOrder;
    video_progress?: Prisma.SortOrder;
    created_at?: Prisma.SortOrderInput | Prisma.SortOrder;
    updated_at?: Prisma.SortOrderInput | Prisma.SortOrder;
    courses?: Prisma.coursesOrderByWithRelationInput;
    users?: Prisma.usersOrderByWithRelationInput;
    _relevance?: Prisma.lesson_completionsOrderByRelevanceInput;
};
export type lesson_completionsWhereUniqueInput = Prisma.AtLeast<{
    id?: bigint | number;
    user_id_course_id_lesson_id?: Prisma.lesson_completionsUser_idCourse_idLesson_idCompoundUniqueInput;
    AND?: Prisma.lesson_completionsWhereInput | Prisma.lesson_completionsWhereInput[];
    OR?: Prisma.lesson_completionsWhereInput[];
    NOT?: Prisma.lesson_completionsWhereInput | Prisma.lesson_completionsWhereInput[];
    user_id?: Prisma.BigIntFilter<"lesson_completions"> | bigint | number;
    course_id?: Prisma.BigIntFilter<"lesson_completions"> | bigint | number;
    section_id?: Prisma.StringFilter<"lesson_completions"> | string;
    lesson_id?: Prisma.StringFilter<"lesson_completions"> | string;
    completed_at?: Prisma.DateTimeFilter<"lesson_completions"> | Date | string;
    video_progress?: Prisma.IntFilter<"lesson_completions"> | number;
    created_at?: Prisma.DateTimeNullableFilter<"lesson_completions"> | Date | string | null;
    updated_at?: Prisma.DateTimeNullableFilter<"lesson_completions"> | Date | string | null;
    courses?: Prisma.XOR<Prisma.CoursesScalarRelationFilter, Prisma.coursesWhereInput>;
    users?: Prisma.XOR<Prisma.UsersScalarRelationFilter, Prisma.usersWhereInput>;
}, "id" | "user_id_course_id_lesson_id">;
export type lesson_completionsOrderByWithAggregationInput = {
    id?: Prisma.SortOrder;
    user_id?: Prisma.SortOrder;
    course_id?: Prisma.SortOrder;
    section_id?: Prisma.SortOrder;
    lesson_id?: Prisma.SortOrder;
    completed_at?: Prisma.SortOrder;
    video_progress?: Prisma.SortOrder;
    created_at?: Prisma.SortOrderInput | Prisma.SortOrder;
    updated_at?: Prisma.SortOrderInput | Prisma.SortOrder;
    _count?: Prisma.lesson_completionsCountOrderByAggregateInput;
    _avg?: Prisma.lesson_completionsAvgOrderByAggregateInput;
    _max?: Prisma.lesson_completionsMaxOrderByAggregateInput;
    _min?: Prisma.lesson_completionsMinOrderByAggregateInput;
    _sum?: Prisma.lesson_completionsSumOrderByAggregateInput;
};
export type lesson_completionsScalarWhereWithAggregatesInput = {
    AND?: Prisma.lesson_completionsScalarWhereWithAggregatesInput | Prisma.lesson_completionsScalarWhereWithAggregatesInput[];
    OR?: Prisma.lesson_completionsScalarWhereWithAggregatesInput[];
    NOT?: Prisma.lesson_completionsScalarWhereWithAggregatesInput | Prisma.lesson_completionsScalarWhereWithAggregatesInput[];
    id?: Prisma.BigIntWithAggregatesFilter<"lesson_completions"> | bigint | number;
    user_id?: Prisma.BigIntWithAggregatesFilter<"lesson_completions"> | bigint | number;
    course_id?: Prisma.BigIntWithAggregatesFilter<"lesson_completions"> | bigint | number;
    section_id?: Prisma.StringWithAggregatesFilter<"lesson_completions"> | string;
    lesson_id?: Prisma.StringWithAggregatesFilter<"lesson_completions"> | string;
    completed_at?: Prisma.DateTimeWithAggregatesFilter<"lesson_completions"> | Date | string;
    video_progress?: Prisma.IntWithAggregatesFilter<"lesson_completions"> | number;
    created_at?: Prisma.DateTimeNullableWithAggregatesFilter<"lesson_completions"> | Date | string | null;
    updated_at?: Prisma.DateTimeNullableWithAggregatesFilter<"lesson_completions"> | Date | string | null;
};
export type lesson_completionsCreateInput = {
    id?: bigint | number;
    section_id: string;
    lesson_id: string;
    completed_at?: Date | string;
    video_progress?: number;
    created_at?: Date | string | null;
    updated_at?: Date | string | null;
    courses: Prisma.coursesCreateNestedOneWithoutLesson_completionsInput;
    users: Prisma.usersCreateNestedOneWithoutLesson_completionsInput;
};
export type lesson_completionsUncheckedCreateInput = {
    id?: bigint | number;
    user_id: bigint | number;
    course_id: bigint | number;
    section_id: string;
    lesson_id: string;
    completed_at?: Date | string;
    video_progress?: number;
    created_at?: Date | string | null;
    updated_at?: Date | string | null;
};
export type lesson_completionsUpdateInput = {
    id?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    section_id?: Prisma.StringFieldUpdateOperationsInput | string;
    lesson_id?: Prisma.StringFieldUpdateOperationsInput | string;
    completed_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    video_progress?: Prisma.IntFieldUpdateOperationsInput | number;
    created_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    updated_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    courses?: Prisma.coursesUpdateOneRequiredWithoutLesson_completionsNestedInput;
    users?: Prisma.usersUpdateOneRequiredWithoutLesson_completionsNestedInput;
};
export type lesson_completionsUncheckedUpdateInput = {
    id?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    user_id?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    course_id?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    section_id?: Prisma.StringFieldUpdateOperationsInput | string;
    lesson_id?: Prisma.StringFieldUpdateOperationsInput | string;
    completed_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    video_progress?: Prisma.IntFieldUpdateOperationsInput | number;
    created_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    updated_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
};
export type lesson_completionsCreateManyInput = {
    id?: bigint | number;
    user_id: bigint | number;
    course_id: bigint | number;
    section_id: string;
    lesson_id: string;
    completed_at?: Date | string;
    video_progress?: number;
    created_at?: Date | string | null;
    updated_at?: Date | string | null;
};
export type lesson_completionsUpdateManyMutationInput = {
    id?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    section_id?: Prisma.StringFieldUpdateOperationsInput | string;
    lesson_id?: Prisma.StringFieldUpdateOperationsInput | string;
    completed_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    video_progress?: Prisma.IntFieldUpdateOperationsInput | number;
    created_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    updated_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
};
export type lesson_completionsUncheckedUpdateManyInput = {
    id?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    user_id?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    course_id?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    section_id?: Prisma.StringFieldUpdateOperationsInput | string;
    lesson_id?: Prisma.StringFieldUpdateOperationsInput | string;
    completed_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    video_progress?: Prisma.IntFieldUpdateOperationsInput | number;
    created_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    updated_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
};
export type Lesson_completionsListRelationFilter = {
    every?: Prisma.lesson_completionsWhereInput;
    some?: Prisma.lesson_completionsWhereInput;
    none?: Prisma.lesson_completionsWhereInput;
};
export type lesson_completionsOrderByRelationAggregateInput = {
    _count?: Prisma.SortOrder;
};
export type lesson_completionsOrderByRelevanceInput = {
    fields: Prisma.lesson_completionsOrderByRelevanceFieldEnum | Prisma.lesson_completionsOrderByRelevanceFieldEnum[];
    sort: Prisma.SortOrder;
    search: string;
};
export type lesson_completionsUser_idCourse_idLesson_idCompoundUniqueInput = {
    user_id: bigint | number;
    course_id: bigint | number;
    lesson_id: string;
};
export type lesson_completionsCountOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    user_id?: Prisma.SortOrder;
    course_id?: Prisma.SortOrder;
    section_id?: Prisma.SortOrder;
    lesson_id?: Prisma.SortOrder;
    completed_at?: Prisma.SortOrder;
    video_progress?: Prisma.SortOrder;
    created_at?: Prisma.SortOrder;
    updated_at?: Prisma.SortOrder;
};
export type lesson_completionsAvgOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    user_id?: Prisma.SortOrder;
    course_id?: Prisma.SortOrder;
    video_progress?: Prisma.SortOrder;
};
export type lesson_completionsMaxOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    user_id?: Prisma.SortOrder;
    course_id?: Prisma.SortOrder;
    section_id?: Prisma.SortOrder;
    lesson_id?: Prisma.SortOrder;
    completed_at?: Prisma.SortOrder;
    video_progress?: Prisma.SortOrder;
    created_at?: Prisma.SortOrder;
    updated_at?: Prisma.SortOrder;
};
export type lesson_completionsMinOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    user_id?: Prisma.SortOrder;
    course_id?: Prisma.SortOrder;
    section_id?: Prisma.SortOrder;
    lesson_id?: Prisma.SortOrder;
    completed_at?: Prisma.SortOrder;
    video_progress?: Prisma.SortOrder;
    created_at?: Prisma.SortOrder;
    updated_at?: Prisma.SortOrder;
};
export type lesson_completionsSumOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    user_id?: Prisma.SortOrder;
    course_id?: Prisma.SortOrder;
    video_progress?: Prisma.SortOrder;
};
export type lesson_completionsCreateNestedManyWithoutCoursesInput = {
    create?: Prisma.XOR<Prisma.lesson_completionsCreateWithoutCoursesInput, Prisma.lesson_completionsUncheckedCreateWithoutCoursesInput> | Prisma.lesson_completionsCreateWithoutCoursesInput[] | Prisma.lesson_completionsUncheckedCreateWithoutCoursesInput[];
    connectOrCreate?: Prisma.lesson_completionsCreateOrConnectWithoutCoursesInput | Prisma.lesson_completionsCreateOrConnectWithoutCoursesInput[];
    createMany?: Prisma.lesson_completionsCreateManyCoursesInputEnvelope;
    connect?: Prisma.lesson_completionsWhereUniqueInput | Prisma.lesson_completionsWhereUniqueInput[];
};
export type lesson_completionsUncheckedCreateNestedManyWithoutCoursesInput = {
    create?: Prisma.XOR<Prisma.lesson_completionsCreateWithoutCoursesInput, Prisma.lesson_completionsUncheckedCreateWithoutCoursesInput> | Prisma.lesson_completionsCreateWithoutCoursesInput[] | Prisma.lesson_completionsUncheckedCreateWithoutCoursesInput[];
    connectOrCreate?: Prisma.lesson_completionsCreateOrConnectWithoutCoursesInput | Prisma.lesson_completionsCreateOrConnectWithoutCoursesInput[];
    createMany?: Prisma.lesson_completionsCreateManyCoursesInputEnvelope;
    connect?: Prisma.lesson_completionsWhereUniqueInput | Prisma.lesson_completionsWhereUniqueInput[];
};
export type lesson_completionsUpdateManyWithoutCoursesNestedInput = {
    create?: Prisma.XOR<Prisma.lesson_completionsCreateWithoutCoursesInput, Prisma.lesson_completionsUncheckedCreateWithoutCoursesInput> | Prisma.lesson_completionsCreateWithoutCoursesInput[] | Prisma.lesson_completionsUncheckedCreateWithoutCoursesInput[];
    connectOrCreate?: Prisma.lesson_completionsCreateOrConnectWithoutCoursesInput | Prisma.lesson_completionsCreateOrConnectWithoutCoursesInput[];
    upsert?: Prisma.lesson_completionsUpsertWithWhereUniqueWithoutCoursesInput | Prisma.lesson_completionsUpsertWithWhereUniqueWithoutCoursesInput[];
    createMany?: Prisma.lesson_completionsCreateManyCoursesInputEnvelope;
    set?: Prisma.lesson_completionsWhereUniqueInput | Prisma.lesson_completionsWhereUniqueInput[];
    disconnect?: Prisma.lesson_completionsWhereUniqueInput | Prisma.lesson_completionsWhereUniqueInput[];
    delete?: Prisma.lesson_completionsWhereUniqueInput | Prisma.lesson_completionsWhereUniqueInput[];
    connect?: Prisma.lesson_completionsWhereUniqueInput | Prisma.lesson_completionsWhereUniqueInput[];
    update?: Prisma.lesson_completionsUpdateWithWhereUniqueWithoutCoursesInput | Prisma.lesson_completionsUpdateWithWhereUniqueWithoutCoursesInput[];
    updateMany?: Prisma.lesson_completionsUpdateManyWithWhereWithoutCoursesInput | Prisma.lesson_completionsUpdateManyWithWhereWithoutCoursesInput[];
    deleteMany?: Prisma.lesson_completionsScalarWhereInput | Prisma.lesson_completionsScalarWhereInput[];
};
export type lesson_completionsUncheckedUpdateManyWithoutCoursesNestedInput = {
    create?: Prisma.XOR<Prisma.lesson_completionsCreateWithoutCoursesInput, Prisma.lesson_completionsUncheckedCreateWithoutCoursesInput> | Prisma.lesson_completionsCreateWithoutCoursesInput[] | Prisma.lesson_completionsUncheckedCreateWithoutCoursesInput[];
    connectOrCreate?: Prisma.lesson_completionsCreateOrConnectWithoutCoursesInput | Prisma.lesson_completionsCreateOrConnectWithoutCoursesInput[];
    upsert?: Prisma.lesson_completionsUpsertWithWhereUniqueWithoutCoursesInput | Prisma.lesson_completionsUpsertWithWhereUniqueWithoutCoursesInput[];
    createMany?: Prisma.lesson_completionsCreateManyCoursesInputEnvelope;
    set?: Prisma.lesson_completionsWhereUniqueInput | Prisma.lesson_completionsWhereUniqueInput[];
    disconnect?: Prisma.lesson_completionsWhereUniqueInput | Prisma.lesson_completionsWhereUniqueInput[];
    delete?: Prisma.lesson_completionsWhereUniqueInput | Prisma.lesson_completionsWhereUniqueInput[];
    connect?: Prisma.lesson_completionsWhereUniqueInput | Prisma.lesson_completionsWhereUniqueInput[];
    update?: Prisma.lesson_completionsUpdateWithWhereUniqueWithoutCoursesInput | Prisma.lesson_completionsUpdateWithWhereUniqueWithoutCoursesInput[];
    updateMany?: Prisma.lesson_completionsUpdateManyWithWhereWithoutCoursesInput | Prisma.lesson_completionsUpdateManyWithWhereWithoutCoursesInput[];
    deleteMany?: Prisma.lesson_completionsScalarWhereInput | Prisma.lesson_completionsScalarWhereInput[];
};
export type lesson_completionsCreateNestedManyWithoutUsersInput = {
    create?: Prisma.XOR<Prisma.lesson_completionsCreateWithoutUsersInput, Prisma.lesson_completionsUncheckedCreateWithoutUsersInput> | Prisma.lesson_completionsCreateWithoutUsersInput[] | Prisma.lesson_completionsUncheckedCreateWithoutUsersInput[];
    connectOrCreate?: Prisma.lesson_completionsCreateOrConnectWithoutUsersInput | Prisma.lesson_completionsCreateOrConnectWithoutUsersInput[];
    createMany?: Prisma.lesson_completionsCreateManyUsersInputEnvelope;
    connect?: Prisma.lesson_completionsWhereUniqueInput | Prisma.lesson_completionsWhereUniqueInput[];
};
export type lesson_completionsUncheckedCreateNestedManyWithoutUsersInput = {
    create?: Prisma.XOR<Prisma.lesson_completionsCreateWithoutUsersInput, Prisma.lesson_completionsUncheckedCreateWithoutUsersInput> | Prisma.lesson_completionsCreateWithoutUsersInput[] | Prisma.lesson_completionsUncheckedCreateWithoutUsersInput[];
    connectOrCreate?: Prisma.lesson_completionsCreateOrConnectWithoutUsersInput | Prisma.lesson_completionsCreateOrConnectWithoutUsersInput[];
    createMany?: Prisma.lesson_completionsCreateManyUsersInputEnvelope;
    connect?: Prisma.lesson_completionsWhereUniqueInput | Prisma.lesson_completionsWhereUniqueInput[];
};
export type lesson_completionsUpdateManyWithoutUsersNestedInput = {
    create?: Prisma.XOR<Prisma.lesson_completionsCreateWithoutUsersInput, Prisma.lesson_completionsUncheckedCreateWithoutUsersInput> | Prisma.lesson_completionsCreateWithoutUsersInput[] | Prisma.lesson_completionsUncheckedCreateWithoutUsersInput[];
    connectOrCreate?: Prisma.lesson_completionsCreateOrConnectWithoutUsersInput | Prisma.lesson_completionsCreateOrConnectWithoutUsersInput[];
    upsert?: Prisma.lesson_completionsUpsertWithWhereUniqueWithoutUsersInput | Prisma.lesson_completionsUpsertWithWhereUniqueWithoutUsersInput[];
    createMany?: Prisma.lesson_completionsCreateManyUsersInputEnvelope;
    set?: Prisma.lesson_completionsWhereUniqueInput | Prisma.lesson_completionsWhereUniqueInput[];
    disconnect?: Prisma.lesson_completionsWhereUniqueInput | Prisma.lesson_completionsWhereUniqueInput[];
    delete?: Prisma.lesson_completionsWhereUniqueInput | Prisma.lesson_completionsWhereUniqueInput[];
    connect?: Prisma.lesson_completionsWhereUniqueInput | Prisma.lesson_completionsWhereUniqueInput[];
    update?: Prisma.lesson_completionsUpdateWithWhereUniqueWithoutUsersInput | Prisma.lesson_completionsUpdateWithWhereUniqueWithoutUsersInput[];
    updateMany?: Prisma.lesson_completionsUpdateManyWithWhereWithoutUsersInput | Prisma.lesson_completionsUpdateManyWithWhereWithoutUsersInput[];
    deleteMany?: Prisma.lesson_completionsScalarWhereInput | Prisma.lesson_completionsScalarWhereInput[];
};
export type lesson_completionsUncheckedUpdateManyWithoutUsersNestedInput = {
    create?: Prisma.XOR<Prisma.lesson_completionsCreateWithoutUsersInput, Prisma.lesson_completionsUncheckedCreateWithoutUsersInput> | Prisma.lesson_completionsCreateWithoutUsersInput[] | Prisma.lesson_completionsUncheckedCreateWithoutUsersInput[];
    connectOrCreate?: Prisma.lesson_completionsCreateOrConnectWithoutUsersInput | Prisma.lesson_completionsCreateOrConnectWithoutUsersInput[];
    upsert?: Prisma.lesson_completionsUpsertWithWhereUniqueWithoutUsersInput | Prisma.lesson_completionsUpsertWithWhereUniqueWithoutUsersInput[];
    createMany?: Prisma.lesson_completionsCreateManyUsersInputEnvelope;
    set?: Prisma.lesson_completionsWhereUniqueInput | Prisma.lesson_completionsWhereUniqueInput[];
    disconnect?: Prisma.lesson_completionsWhereUniqueInput | Prisma.lesson_completionsWhereUniqueInput[];
    delete?: Prisma.lesson_completionsWhereUniqueInput | Prisma.lesson_completionsWhereUniqueInput[];
    connect?: Prisma.lesson_completionsWhereUniqueInput | Prisma.lesson_completionsWhereUniqueInput[];
    update?: Prisma.lesson_completionsUpdateWithWhereUniqueWithoutUsersInput | Prisma.lesson_completionsUpdateWithWhereUniqueWithoutUsersInput[];
    updateMany?: Prisma.lesson_completionsUpdateManyWithWhereWithoutUsersInput | Prisma.lesson_completionsUpdateManyWithWhereWithoutUsersInput[];
    deleteMany?: Prisma.lesson_completionsScalarWhereInput | Prisma.lesson_completionsScalarWhereInput[];
};
export type lesson_completionsCreateWithoutCoursesInput = {
    id?: bigint | number;
    section_id: string;
    lesson_id: string;
    completed_at?: Date | string;
    video_progress?: number;
    created_at?: Date | string | null;
    updated_at?: Date | string | null;
    users: Prisma.usersCreateNestedOneWithoutLesson_completionsInput;
};
export type lesson_completionsUncheckedCreateWithoutCoursesInput = {
    id?: bigint | number;
    user_id: bigint | number;
    section_id: string;
    lesson_id: string;
    completed_at?: Date | string;
    video_progress?: number;
    created_at?: Date | string | null;
    updated_at?: Date | string | null;
};
export type lesson_completionsCreateOrConnectWithoutCoursesInput = {
    where: Prisma.lesson_completionsWhereUniqueInput;
    create: Prisma.XOR<Prisma.lesson_completionsCreateWithoutCoursesInput, Prisma.lesson_completionsUncheckedCreateWithoutCoursesInput>;
};
export type lesson_completionsCreateManyCoursesInputEnvelope = {
    data: Prisma.lesson_completionsCreateManyCoursesInput | Prisma.lesson_completionsCreateManyCoursesInput[];
    skipDuplicates?: boolean;
};
export type lesson_completionsUpsertWithWhereUniqueWithoutCoursesInput = {
    where: Prisma.lesson_completionsWhereUniqueInput;
    update: Prisma.XOR<Prisma.lesson_completionsUpdateWithoutCoursesInput, Prisma.lesson_completionsUncheckedUpdateWithoutCoursesInput>;
    create: Prisma.XOR<Prisma.lesson_completionsCreateWithoutCoursesInput, Prisma.lesson_completionsUncheckedCreateWithoutCoursesInput>;
};
export type lesson_completionsUpdateWithWhereUniqueWithoutCoursesInput = {
    where: Prisma.lesson_completionsWhereUniqueInput;
    data: Prisma.XOR<Prisma.lesson_completionsUpdateWithoutCoursesInput, Prisma.lesson_completionsUncheckedUpdateWithoutCoursesInput>;
};
export type lesson_completionsUpdateManyWithWhereWithoutCoursesInput = {
    where: Prisma.lesson_completionsScalarWhereInput;
    data: Prisma.XOR<Prisma.lesson_completionsUpdateManyMutationInput, Prisma.lesson_completionsUncheckedUpdateManyWithoutCoursesInput>;
};
export type lesson_completionsScalarWhereInput = {
    AND?: Prisma.lesson_completionsScalarWhereInput | Prisma.lesson_completionsScalarWhereInput[];
    OR?: Prisma.lesson_completionsScalarWhereInput[];
    NOT?: Prisma.lesson_completionsScalarWhereInput | Prisma.lesson_completionsScalarWhereInput[];
    id?: Prisma.BigIntFilter<"lesson_completions"> | bigint | number;
    user_id?: Prisma.BigIntFilter<"lesson_completions"> | bigint | number;
    course_id?: Prisma.BigIntFilter<"lesson_completions"> | bigint | number;
    section_id?: Prisma.StringFilter<"lesson_completions"> | string;
    lesson_id?: Prisma.StringFilter<"lesson_completions"> | string;
    completed_at?: Prisma.DateTimeFilter<"lesson_completions"> | Date | string;
    video_progress?: Prisma.IntFilter<"lesson_completions"> | number;
    created_at?: Prisma.DateTimeNullableFilter<"lesson_completions"> | Date | string | null;
    updated_at?: Prisma.DateTimeNullableFilter<"lesson_completions"> | Date | string | null;
};
export type lesson_completionsCreateWithoutUsersInput = {
    id?: bigint | number;
    section_id: string;
    lesson_id: string;
    completed_at?: Date | string;
    video_progress?: number;
    created_at?: Date | string | null;
    updated_at?: Date | string | null;
    courses: Prisma.coursesCreateNestedOneWithoutLesson_completionsInput;
};
export type lesson_completionsUncheckedCreateWithoutUsersInput = {
    id?: bigint | number;
    course_id: bigint | number;
    section_id: string;
    lesson_id: string;
    completed_at?: Date | string;
    video_progress?: number;
    created_at?: Date | string | null;
    updated_at?: Date | string | null;
};
export type lesson_completionsCreateOrConnectWithoutUsersInput = {
    where: Prisma.lesson_completionsWhereUniqueInput;
    create: Prisma.XOR<Prisma.lesson_completionsCreateWithoutUsersInput, Prisma.lesson_completionsUncheckedCreateWithoutUsersInput>;
};
export type lesson_completionsCreateManyUsersInputEnvelope = {
    data: Prisma.lesson_completionsCreateManyUsersInput | Prisma.lesson_completionsCreateManyUsersInput[];
    skipDuplicates?: boolean;
};
export type lesson_completionsUpsertWithWhereUniqueWithoutUsersInput = {
    where: Prisma.lesson_completionsWhereUniqueInput;
    update: Prisma.XOR<Prisma.lesson_completionsUpdateWithoutUsersInput, Prisma.lesson_completionsUncheckedUpdateWithoutUsersInput>;
    create: Prisma.XOR<Prisma.lesson_completionsCreateWithoutUsersInput, Prisma.lesson_completionsUncheckedCreateWithoutUsersInput>;
};
export type lesson_completionsUpdateWithWhereUniqueWithoutUsersInput = {
    where: Prisma.lesson_completionsWhereUniqueInput;
    data: Prisma.XOR<Prisma.lesson_completionsUpdateWithoutUsersInput, Prisma.lesson_completionsUncheckedUpdateWithoutUsersInput>;
};
export type lesson_completionsUpdateManyWithWhereWithoutUsersInput = {
    where: Prisma.lesson_completionsScalarWhereInput;
    data: Prisma.XOR<Prisma.lesson_completionsUpdateManyMutationInput, Prisma.lesson_completionsUncheckedUpdateManyWithoutUsersInput>;
};
export type lesson_completionsCreateManyCoursesInput = {
    id?: bigint | number;
    user_id: bigint | number;
    section_id: string;
    lesson_id: string;
    completed_at?: Date | string;
    video_progress?: number;
    created_at?: Date | string | null;
    updated_at?: Date | string | null;
};
export type lesson_completionsUpdateWithoutCoursesInput = {
    id?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    section_id?: Prisma.StringFieldUpdateOperationsInput | string;
    lesson_id?: Prisma.StringFieldUpdateOperationsInput | string;
    completed_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    video_progress?: Prisma.IntFieldUpdateOperationsInput | number;
    created_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    updated_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    users?: Prisma.usersUpdateOneRequiredWithoutLesson_completionsNestedInput;
};
export type lesson_completionsUncheckedUpdateWithoutCoursesInput = {
    id?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    user_id?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    section_id?: Prisma.StringFieldUpdateOperationsInput | string;
    lesson_id?: Prisma.StringFieldUpdateOperationsInput | string;
    completed_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    video_progress?: Prisma.IntFieldUpdateOperationsInput | number;
    created_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    updated_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
};
export type lesson_completionsUncheckedUpdateManyWithoutCoursesInput = {
    id?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    user_id?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    section_id?: Prisma.StringFieldUpdateOperationsInput | string;
    lesson_id?: Prisma.StringFieldUpdateOperationsInput | string;
    completed_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    video_progress?: Prisma.IntFieldUpdateOperationsInput | number;
    created_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    updated_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
};
export type lesson_completionsCreateManyUsersInput = {
    id?: bigint | number;
    course_id: bigint | number;
    section_id: string;
    lesson_id: string;
    completed_at?: Date | string;
    video_progress?: number;
    created_at?: Date | string | null;
    updated_at?: Date | string | null;
};
export type lesson_completionsUpdateWithoutUsersInput = {
    id?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    section_id?: Prisma.StringFieldUpdateOperationsInput | string;
    lesson_id?: Prisma.StringFieldUpdateOperationsInput | string;
    completed_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    video_progress?: Prisma.IntFieldUpdateOperationsInput | number;
    created_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    updated_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    courses?: Prisma.coursesUpdateOneRequiredWithoutLesson_completionsNestedInput;
};
export type lesson_completionsUncheckedUpdateWithoutUsersInput = {
    id?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    course_id?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    section_id?: Prisma.StringFieldUpdateOperationsInput | string;
    lesson_id?: Prisma.StringFieldUpdateOperationsInput | string;
    completed_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    video_progress?: Prisma.IntFieldUpdateOperationsInput | number;
    created_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    updated_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
};
export type lesson_completionsUncheckedUpdateManyWithoutUsersInput = {
    id?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    course_id?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    section_id?: Prisma.StringFieldUpdateOperationsInput | string;
    lesson_id?: Prisma.StringFieldUpdateOperationsInput | string;
    completed_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    video_progress?: Prisma.IntFieldUpdateOperationsInput | number;
    created_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    updated_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
};
export type lesson_completionsSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    user_id?: boolean;
    course_id?: boolean;
    section_id?: boolean;
    lesson_id?: boolean;
    completed_at?: boolean;
    video_progress?: boolean;
    created_at?: boolean;
    updated_at?: boolean;
    courses?: boolean | Prisma.coursesDefaultArgs<ExtArgs>;
    users?: boolean | Prisma.usersDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["lesson_completions"]>;
export type lesson_completionsSelectScalar = {
    id?: boolean;
    user_id?: boolean;
    course_id?: boolean;
    section_id?: boolean;
    lesson_id?: boolean;
    completed_at?: boolean;
    video_progress?: boolean;
    created_at?: boolean;
    updated_at?: boolean;
};
export type lesson_completionsOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "user_id" | "course_id" | "section_id" | "lesson_id" | "completed_at" | "video_progress" | "created_at" | "updated_at", ExtArgs["result"]["lesson_completions"]>;
export type lesson_completionsInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    courses?: boolean | Prisma.coursesDefaultArgs<ExtArgs>;
    users?: boolean | Prisma.usersDefaultArgs<ExtArgs>;
};
export type $lesson_completionsPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "lesson_completions";
    objects: {
        courses: Prisma.$coursesPayload<ExtArgs>;
        users: Prisma.$usersPayload<ExtArgs>;
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id: bigint;
        user_id: bigint;
        course_id: bigint;
        section_id: string;
        lesson_id: string;
        completed_at: Date;
        video_progress: number;
        created_at: Date | null;
        updated_at: Date | null;
    }, ExtArgs["result"]["lesson_completions"]>;
    composites: {};
};
export type lesson_completionsGetPayload<S extends boolean | null | undefined | lesson_completionsDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$lesson_completionsPayload, S>;
export type lesson_completionsCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<lesson_completionsFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: Lesson_completionsCountAggregateInputType | true;
};
export interface lesson_completionsDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['lesson_completions'];
        meta: {
            name: 'lesson_completions';
        };
    };
    findUnique<T extends lesson_completionsFindUniqueArgs>(args: Prisma.SelectSubset<T, lesson_completionsFindUniqueArgs<ExtArgs>>): Prisma.Prisma__lesson_completionsClient<runtime.Types.Result.GetResult<Prisma.$lesson_completionsPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findUniqueOrThrow<T extends lesson_completionsFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, lesson_completionsFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__lesson_completionsClient<runtime.Types.Result.GetResult<Prisma.$lesson_completionsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findFirst<T extends lesson_completionsFindFirstArgs>(args?: Prisma.SelectSubset<T, lesson_completionsFindFirstArgs<ExtArgs>>): Prisma.Prisma__lesson_completionsClient<runtime.Types.Result.GetResult<Prisma.$lesson_completionsPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findFirstOrThrow<T extends lesson_completionsFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, lesson_completionsFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__lesson_completionsClient<runtime.Types.Result.GetResult<Prisma.$lesson_completionsPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findMany<T extends lesson_completionsFindManyArgs>(args?: Prisma.SelectSubset<T, lesson_completionsFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$lesson_completionsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    create<T extends lesson_completionsCreateArgs>(args: Prisma.SelectSubset<T, lesson_completionsCreateArgs<ExtArgs>>): Prisma.Prisma__lesson_completionsClient<runtime.Types.Result.GetResult<Prisma.$lesson_completionsPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    createMany<T extends lesson_completionsCreateManyArgs>(args?: Prisma.SelectSubset<T, lesson_completionsCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    delete<T extends lesson_completionsDeleteArgs>(args: Prisma.SelectSubset<T, lesson_completionsDeleteArgs<ExtArgs>>): Prisma.Prisma__lesson_completionsClient<runtime.Types.Result.GetResult<Prisma.$lesson_completionsPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    update<T extends lesson_completionsUpdateArgs>(args: Prisma.SelectSubset<T, lesson_completionsUpdateArgs<ExtArgs>>): Prisma.Prisma__lesson_completionsClient<runtime.Types.Result.GetResult<Prisma.$lesson_completionsPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    deleteMany<T extends lesson_completionsDeleteManyArgs>(args?: Prisma.SelectSubset<T, lesson_completionsDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateMany<T extends lesson_completionsUpdateManyArgs>(args: Prisma.SelectSubset<T, lesson_completionsUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    upsert<T extends lesson_completionsUpsertArgs>(args: Prisma.SelectSubset<T, lesson_completionsUpsertArgs<ExtArgs>>): Prisma.Prisma__lesson_completionsClient<runtime.Types.Result.GetResult<Prisma.$lesson_completionsPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    count<T extends lesson_completionsCountArgs>(args?: Prisma.Subset<T, lesson_completionsCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], Lesson_completionsCountAggregateOutputType> : number>;
    aggregate<T extends Lesson_completionsAggregateArgs>(args: Prisma.Subset<T, Lesson_completionsAggregateArgs>): Prisma.PrismaPromise<GetLesson_completionsAggregateType<T>>;
    groupBy<T extends lesson_completionsGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: lesson_completionsGroupByArgs['orderBy'];
    } : {
        orderBy?: lesson_completionsGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, lesson_completionsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetLesson_completionsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    readonly fields: lesson_completionsFieldRefs;
}
export interface Prisma__lesson_completionsClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    courses<T extends Prisma.coursesDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.coursesDefaultArgs<ExtArgs>>): Prisma.Prisma__coursesClient<runtime.Types.Result.GetResult<Prisma.$coursesPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    users<T extends Prisma.usersDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.usersDefaultArgs<ExtArgs>>): Prisma.Prisma__usersClient<runtime.Types.Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): runtime.Types.Utils.JsPromise<TResult1 | TResult2>;
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): runtime.Types.Utils.JsPromise<T | TResult>;
    finally(onfinally?: (() => void) | undefined | null): runtime.Types.Utils.JsPromise<T>;
}
export interface lesson_completionsFieldRefs {
    readonly id: Prisma.FieldRef<"lesson_completions", 'BigInt'>;
    readonly user_id: Prisma.FieldRef<"lesson_completions", 'BigInt'>;
    readonly course_id: Prisma.FieldRef<"lesson_completions", 'BigInt'>;
    readonly section_id: Prisma.FieldRef<"lesson_completions", 'String'>;
    readonly lesson_id: Prisma.FieldRef<"lesson_completions", 'String'>;
    readonly completed_at: Prisma.FieldRef<"lesson_completions", 'DateTime'>;
    readonly video_progress: Prisma.FieldRef<"lesson_completions", 'Int'>;
    readonly created_at: Prisma.FieldRef<"lesson_completions", 'DateTime'>;
    readonly updated_at: Prisma.FieldRef<"lesson_completions", 'DateTime'>;
}
export type lesson_completionsFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.lesson_completionsSelect<ExtArgs> | null;
    omit?: Prisma.lesson_completionsOmit<ExtArgs> | null;
    include?: Prisma.lesson_completionsInclude<ExtArgs> | null;
    where: Prisma.lesson_completionsWhereUniqueInput;
};
export type lesson_completionsFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.lesson_completionsSelect<ExtArgs> | null;
    omit?: Prisma.lesson_completionsOmit<ExtArgs> | null;
    include?: Prisma.lesson_completionsInclude<ExtArgs> | null;
    where: Prisma.lesson_completionsWhereUniqueInput;
};
export type lesson_completionsFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.lesson_completionsSelect<ExtArgs> | null;
    omit?: Prisma.lesson_completionsOmit<ExtArgs> | null;
    include?: Prisma.lesson_completionsInclude<ExtArgs> | null;
    where?: Prisma.lesson_completionsWhereInput;
    orderBy?: Prisma.lesson_completionsOrderByWithRelationInput | Prisma.lesson_completionsOrderByWithRelationInput[];
    cursor?: Prisma.lesson_completionsWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.Lesson_completionsScalarFieldEnum | Prisma.Lesson_completionsScalarFieldEnum[];
};
export type lesson_completionsFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.lesson_completionsSelect<ExtArgs> | null;
    omit?: Prisma.lesson_completionsOmit<ExtArgs> | null;
    include?: Prisma.lesson_completionsInclude<ExtArgs> | null;
    where?: Prisma.lesson_completionsWhereInput;
    orderBy?: Prisma.lesson_completionsOrderByWithRelationInput | Prisma.lesson_completionsOrderByWithRelationInput[];
    cursor?: Prisma.lesson_completionsWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.Lesson_completionsScalarFieldEnum | Prisma.Lesson_completionsScalarFieldEnum[];
};
export type lesson_completionsFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.lesson_completionsSelect<ExtArgs> | null;
    omit?: Prisma.lesson_completionsOmit<ExtArgs> | null;
    include?: Prisma.lesson_completionsInclude<ExtArgs> | null;
    where?: Prisma.lesson_completionsWhereInput;
    orderBy?: Prisma.lesson_completionsOrderByWithRelationInput | Prisma.lesson_completionsOrderByWithRelationInput[];
    cursor?: Prisma.lesson_completionsWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.Lesson_completionsScalarFieldEnum | Prisma.Lesson_completionsScalarFieldEnum[];
};
export type lesson_completionsCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.lesson_completionsSelect<ExtArgs> | null;
    omit?: Prisma.lesson_completionsOmit<ExtArgs> | null;
    include?: Prisma.lesson_completionsInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.lesson_completionsCreateInput, Prisma.lesson_completionsUncheckedCreateInput>;
};
export type lesson_completionsCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.lesson_completionsCreateManyInput | Prisma.lesson_completionsCreateManyInput[];
    skipDuplicates?: boolean;
};
export type lesson_completionsUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.lesson_completionsSelect<ExtArgs> | null;
    omit?: Prisma.lesson_completionsOmit<ExtArgs> | null;
    include?: Prisma.lesson_completionsInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.lesson_completionsUpdateInput, Prisma.lesson_completionsUncheckedUpdateInput>;
    where: Prisma.lesson_completionsWhereUniqueInput;
};
export type lesson_completionsUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.XOR<Prisma.lesson_completionsUpdateManyMutationInput, Prisma.lesson_completionsUncheckedUpdateManyInput>;
    where?: Prisma.lesson_completionsWhereInput;
    limit?: number;
};
export type lesson_completionsUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.lesson_completionsSelect<ExtArgs> | null;
    omit?: Prisma.lesson_completionsOmit<ExtArgs> | null;
    include?: Prisma.lesson_completionsInclude<ExtArgs> | null;
    where: Prisma.lesson_completionsWhereUniqueInput;
    create: Prisma.XOR<Prisma.lesson_completionsCreateInput, Prisma.lesson_completionsUncheckedCreateInput>;
    update: Prisma.XOR<Prisma.lesson_completionsUpdateInput, Prisma.lesson_completionsUncheckedUpdateInput>;
};
export type lesson_completionsDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.lesson_completionsSelect<ExtArgs> | null;
    omit?: Prisma.lesson_completionsOmit<ExtArgs> | null;
    include?: Prisma.lesson_completionsInclude<ExtArgs> | null;
    where: Prisma.lesson_completionsWhereUniqueInput;
};
export type lesson_completionsDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.lesson_completionsWhereInput;
    limit?: number;
};
export type lesson_completionsDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.lesson_completionsSelect<ExtArgs> | null;
    omit?: Prisma.lesson_completionsOmit<ExtArgs> | null;
    include?: Prisma.lesson_completionsInclude<ExtArgs> | null;
};
export {};
