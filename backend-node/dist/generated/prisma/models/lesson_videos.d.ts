import type * as runtime from "@prisma/client/runtime/client";
import type * as $Enums from "../enums.js";
import type * as Prisma from "../internal/prismaNamespace.js";
export type lesson_videosModel = runtime.Types.Result.DefaultSelection<Prisma.$lesson_videosPayload>;
export type AggregateLesson_videos = {
    _count: Lesson_videosCountAggregateOutputType | null;
    _avg: Lesson_videosAvgAggregateOutputType | null;
    _sum: Lesson_videosSumAggregateOutputType | null;
    _min: Lesson_videosMinAggregateOutputType | null;
    _max: Lesson_videosMaxAggregateOutputType | null;
};
export type Lesson_videosAvgAggregateOutputType = {
    id: number | null;
    course_id: number | null;
    file_size: number | null;
    duration: number | null;
};
export type Lesson_videosSumAggregateOutputType = {
    id: bigint | null;
    course_id: bigint | null;
    file_size: bigint | null;
    duration: number | null;
};
export type Lesson_videosMinAggregateOutputType = {
    id: bigint | null;
    course_id: bigint | null;
    lesson_id: string | null;
    video_type: $Enums.lesson_videos_video_type | null;
    youtube_id: string | null;
    file_path: string | null;
    file_size: bigint | null;
    duration: number | null;
    mime_type: string | null;
    thumbnail_path: string | null;
    status: $Enums.lesson_videos_status | null;
    created_at: Date | null;
    updated_at: Date | null;
};
export type Lesson_videosMaxAggregateOutputType = {
    id: bigint | null;
    course_id: bigint | null;
    lesson_id: string | null;
    video_type: $Enums.lesson_videos_video_type | null;
    youtube_id: string | null;
    file_path: string | null;
    file_size: bigint | null;
    duration: number | null;
    mime_type: string | null;
    thumbnail_path: string | null;
    status: $Enums.lesson_videos_status | null;
    created_at: Date | null;
    updated_at: Date | null;
};
export type Lesson_videosCountAggregateOutputType = {
    id: number;
    course_id: number;
    lesson_id: number;
    video_type: number;
    youtube_id: number;
    file_path: number;
    file_size: number;
    duration: number;
    mime_type: number;
    thumbnail_path: number;
    status: number;
    created_at: number;
    updated_at: number;
    _all: number;
};
export type Lesson_videosAvgAggregateInputType = {
    id?: true;
    course_id?: true;
    file_size?: true;
    duration?: true;
};
export type Lesson_videosSumAggregateInputType = {
    id?: true;
    course_id?: true;
    file_size?: true;
    duration?: true;
};
export type Lesson_videosMinAggregateInputType = {
    id?: true;
    course_id?: true;
    lesson_id?: true;
    video_type?: true;
    youtube_id?: true;
    file_path?: true;
    file_size?: true;
    duration?: true;
    mime_type?: true;
    thumbnail_path?: true;
    status?: true;
    created_at?: true;
    updated_at?: true;
};
export type Lesson_videosMaxAggregateInputType = {
    id?: true;
    course_id?: true;
    lesson_id?: true;
    video_type?: true;
    youtube_id?: true;
    file_path?: true;
    file_size?: true;
    duration?: true;
    mime_type?: true;
    thumbnail_path?: true;
    status?: true;
    created_at?: true;
    updated_at?: true;
};
export type Lesson_videosCountAggregateInputType = {
    id?: true;
    course_id?: true;
    lesson_id?: true;
    video_type?: true;
    youtube_id?: true;
    file_path?: true;
    file_size?: true;
    duration?: true;
    mime_type?: true;
    thumbnail_path?: true;
    status?: true;
    created_at?: true;
    updated_at?: true;
    _all?: true;
};
export type Lesson_videosAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.lesson_videosWhereInput;
    orderBy?: Prisma.lesson_videosOrderByWithRelationInput | Prisma.lesson_videosOrderByWithRelationInput[];
    cursor?: Prisma.lesson_videosWhereUniqueInput;
    take?: number;
    skip?: number;
    _count?: true | Lesson_videosCountAggregateInputType;
    _avg?: Lesson_videosAvgAggregateInputType;
    _sum?: Lesson_videosSumAggregateInputType;
    _min?: Lesson_videosMinAggregateInputType;
    _max?: Lesson_videosMaxAggregateInputType;
};
export type GetLesson_videosAggregateType<T extends Lesson_videosAggregateArgs> = {
    [P in keyof T & keyof AggregateLesson_videos]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateLesson_videos[P]> : Prisma.GetScalarType<T[P], AggregateLesson_videos[P]>;
};
export type lesson_videosGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.lesson_videosWhereInput;
    orderBy?: Prisma.lesson_videosOrderByWithAggregationInput | Prisma.lesson_videosOrderByWithAggregationInput[];
    by: Prisma.Lesson_videosScalarFieldEnum[] | Prisma.Lesson_videosScalarFieldEnum;
    having?: Prisma.lesson_videosScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: Lesson_videosCountAggregateInputType | true;
    _avg?: Lesson_videosAvgAggregateInputType;
    _sum?: Lesson_videosSumAggregateInputType;
    _min?: Lesson_videosMinAggregateInputType;
    _max?: Lesson_videosMaxAggregateInputType;
};
export type Lesson_videosGroupByOutputType = {
    id: bigint;
    course_id: bigint;
    lesson_id: string;
    video_type: $Enums.lesson_videos_video_type;
    youtube_id: string | null;
    file_path: string | null;
    file_size: bigint | null;
    duration: number | null;
    mime_type: string | null;
    thumbnail_path: string | null;
    status: $Enums.lesson_videos_status;
    created_at: Date | null;
    updated_at: Date | null;
    _count: Lesson_videosCountAggregateOutputType | null;
    _avg: Lesson_videosAvgAggregateOutputType | null;
    _sum: Lesson_videosSumAggregateOutputType | null;
    _min: Lesson_videosMinAggregateOutputType | null;
    _max: Lesson_videosMaxAggregateOutputType | null;
};
type GetLesson_videosGroupByPayload<T extends lesson_videosGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<Lesson_videosGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof Lesson_videosGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], Lesson_videosGroupByOutputType[P]> : Prisma.GetScalarType<T[P], Lesson_videosGroupByOutputType[P]>;
}>>;
export type lesson_videosWhereInput = {
    AND?: Prisma.lesson_videosWhereInput | Prisma.lesson_videosWhereInput[];
    OR?: Prisma.lesson_videosWhereInput[];
    NOT?: Prisma.lesson_videosWhereInput | Prisma.lesson_videosWhereInput[];
    id?: Prisma.BigIntFilter<"lesson_videos"> | bigint | number;
    course_id?: Prisma.BigIntFilter<"lesson_videos"> | bigint | number;
    lesson_id?: Prisma.StringFilter<"lesson_videos"> | string;
    video_type?: Prisma.Enumlesson_videos_video_typeFilter<"lesson_videos"> | $Enums.lesson_videos_video_type;
    youtube_id?: Prisma.StringNullableFilter<"lesson_videos"> | string | null;
    file_path?: Prisma.StringNullableFilter<"lesson_videos"> | string | null;
    file_size?: Prisma.BigIntNullableFilter<"lesson_videos"> | bigint | number | null;
    duration?: Prisma.IntNullableFilter<"lesson_videos"> | number | null;
    mime_type?: Prisma.StringNullableFilter<"lesson_videos"> | string | null;
    thumbnail_path?: Prisma.StringNullableFilter<"lesson_videos"> | string | null;
    status?: Prisma.Enumlesson_videos_statusFilter<"lesson_videos"> | $Enums.lesson_videos_status;
    created_at?: Prisma.DateTimeNullableFilter<"lesson_videos"> | Date | string | null;
    updated_at?: Prisma.DateTimeNullableFilter<"lesson_videos"> | Date | string | null;
    courses?: Prisma.XOR<Prisma.CoursesScalarRelationFilter, Prisma.coursesWhereInput>;
};
export type lesson_videosOrderByWithRelationInput = {
    id?: Prisma.SortOrder;
    course_id?: Prisma.SortOrder;
    lesson_id?: Prisma.SortOrder;
    video_type?: Prisma.SortOrder;
    youtube_id?: Prisma.SortOrderInput | Prisma.SortOrder;
    file_path?: Prisma.SortOrderInput | Prisma.SortOrder;
    file_size?: Prisma.SortOrderInput | Prisma.SortOrder;
    duration?: Prisma.SortOrderInput | Prisma.SortOrder;
    mime_type?: Prisma.SortOrderInput | Prisma.SortOrder;
    thumbnail_path?: Prisma.SortOrderInput | Prisma.SortOrder;
    status?: Prisma.SortOrder;
    created_at?: Prisma.SortOrderInput | Prisma.SortOrder;
    updated_at?: Prisma.SortOrderInput | Prisma.SortOrder;
    courses?: Prisma.coursesOrderByWithRelationInput;
    _relevance?: Prisma.lesson_videosOrderByRelevanceInput;
};
export type lesson_videosWhereUniqueInput = Prisma.AtLeast<{
    id?: bigint | number;
    AND?: Prisma.lesson_videosWhereInput | Prisma.lesson_videosWhereInput[];
    OR?: Prisma.lesson_videosWhereInput[];
    NOT?: Prisma.lesson_videosWhereInput | Prisma.lesson_videosWhereInput[];
    course_id?: Prisma.BigIntFilter<"lesson_videos"> | bigint | number;
    lesson_id?: Prisma.StringFilter<"lesson_videos"> | string;
    video_type?: Prisma.Enumlesson_videos_video_typeFilter<"lesson_videos"> | $Enums.lesson_videos_video_type;
    youtube_id?: Prisma.StringNullableFilter<"lesson_videos"> | string | null;
    file_path?: Prisma.StringNullableFilter<"lesson_videos"> | string | null;
    file_size?: Prisma.BigIntNullableFilter<"lesson_videos"> | bigint | number | null;
    duration?: Prisma.IntNullableFilter<"lesson_videos"> | number | null;
    mime_type?: Prisma.StringNullableFilter<"lesson_videos"> | string | null;
    thumbnail_path?: Prisma.StringNullableFilter<"lesson_videos"> | string | null;
    status?: Prisma.Enumlesson_videos_statusFilter<"lesson_videos"> | $Enums.lesson_videos_status;
    created_at?: Prisma.DateTimeNullableFilter<"lesson_videos"> | Date | string | null;
    updated_at?: Prisma.DateTimeNullableFilter<"lesson_videos"> | Date | string | null;
    courses?: Prisma.XOR<Prisma.CoursesScalarRelationFilter, Prisma.coursesWhereInput>;
}, "id">;
export type lesson_videosOrderByWithAggregationInput = {
    id?: Prisma.SortOrder;
    course_id?: Prisma.SortOrder;
    lesson_id?: Prisma.SortOrder;
    video_type?: Prisma.SortOrder;
    youtube_id?: Prisma.SortOrderInput | Prisma.SortOrder;
    file_path?: Prisma.SortOrderInput | Prisma.SortOrder;
    file_size?: Prisma.SortOrderInput | Prisma.SortOrder;
    duration?: Prisma.SortOrderInput | Prisma.SortOrder;
    mime_type?: Prisma.SortOrderInput | Prisma.SortOrder;
    thumbnail_path?: Prisma.SortOrderInput | Prisma.SortOrder;
    status?: Prisma.SortOrder;
    created_at?: Prisma.SortOrderInput | Prisma.SortOrder;
    updated_at?: Prisma.SortOrderInput | Prisma.SortOrder;
    _count?: Prisma.lesson_videosCountOrderByAggregateInput;
    _avg?: Prisma.lesson_videosAvgOrderByAggregateInput;
    _max?: Prisma.lesson_videosMaxOrderByAggregateInput;
    _min?: Prisma.lesson_videosMinOrderByAggregateInput;
    _sum?: Prisma.lesson_videosSumOrderByAggregateInput;
};
export type lesson_videosScalarWhereWithAggregatesInput = {
    AND?: Prisma.lesson_videosScalarWhereWithAggregatesInput | Prisma.lesson_videosScalarWhereWithAggregatesInput[];
    OR?: Prisma.lesson_videosScalarWhereWithAggregatesInput[];
    NOT?: Prisma.lesson_videosScalarWhereWithAggregatesInput | Prisma.lesson_videosScalarWhereWithAggregatesInput[];
    id?: Prisma.BigIntWithAggregatesFilter<"lesson_videos"> | bigint | number;
    course_id?: Prisma.BigIntWithAggregatesFilter<"lesson_videos"> | bigint | number;
    lesson_id?: Prisma.StringWithAggregatesFilter<"lesson_videos"> | string;
    video_type?: Prisma.Enumlesson_videos_video_typeWithAggregatesFilter<"lesson_videos"> | $Enums.lesson_videos_video_type;
    youtube_id?: Prisma.StringNullableWithAggregatesFilter<"lesson_videos"> | string | null;
    file_path?: Prisma.StringNullableWithAggregatesFilter<"lesson_videos"> | string | null;
    file_size?: Prisma.BigIntNullableWithAggregatesFilter<"lesson_videos"> | bigint | number | null;
    duration?: Prisma.IntNullableWithAggregatesFilter<"lesson_videos"> | number | null;
    mime_type?: Prisma.StringNullableWithAggregatesFilter<"lesson_videos"> | string | null;
    thumbnail_path?: Prisma.StringNullableWithAggregatesFilter<"lesson_videos"> | string | null;
    status?: Prisma.Enumlesson_videos_statusWithAggregatesFilter<"lesson_videos"> | $Enums.lesson_videos_status;
    created_at?: Prisma.DateTimeNullableWithAggregatesFilter<"lesson_videos"> | Date | string | null;
    updated_at?: Prisma.DateTimeNullableWithAggregatesFilter<"lesson_videos"> | Date | string | null;
};
export type lesson_videosCreateInput = {
    id?: bigint | number;
    lesson_id: string;
    video_type?: $Enums.lesson_videos_video_type;
    youtube_id?: string | null;
    file_path?: string | null;
    file_size?: bigint | number | null;
    duration?: number | null;
    mime_type?: string | null;
    thumbnail_path?: string | null;
    status?: $Enums.lesson_videos_status;
    created_at?: Date | string | null;
    updated_at?: Date | string | null;
    courses: Prisma.coursesCreateNestedOneWithoutLesson_videosInput;
};
export type lesson_videosUncheckedCreateInput = {
    id?: bigint | number;
    course_id: bigint | number;
    lesson_id: string;
    video_type?: $Enums.lesson_videos_video_type;
    youtube_id?: string | null;
    file_path?: string | null;
    file_size?: bigint | number | null;
    duration?: number | null;
    mime_type?: string | null;
    thumbnail_path?: string | null;
    status?: $Enums.lesson_videos_status;
    created_at?: Date | string | null;
    updated_at?: Date | string | null;
};
export type lesson_videosUpdateInput = {
    id?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    lesson_id?: Prisma.StringFieldUpdateOperationsInput | string;
    video_type?: Prisma.Enumlesson_videos_video_typeFieldUpdateOperationsInput | $Enums.lesson_videos_video_type;
    youtube_id?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    file_path?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    file_size?: Prisma.NullableBigIntFieldUpdateOperationsInput | bigint | number | null;
    duration?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    mime_type?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    thumbnail_path?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    status?: Prisma.Enumlesson_videos_statusFieldUpdateOperationsInput | $Enums.lesson_videos_status;
    created_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    updated_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    courses?: Prisma.coursesUpdateOneRequiredWithoutLesson_videosNestedInput;
};
export type lesson_videosUncheckedUpdateInput = {
    id?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    course_id?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    lesson_id?: Prisma.StringFieldUpdateOperationsInput | string;
    video_type?: Prisma.Enumlesson_videos_video_typeFieldUpdateOperationsInput | $Enums.lesson_videos_video_type;
    youtube_id?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    file_path?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    file_size?: Prisma.NullableBigIntFieldUpdateOperationsInput | bigint | number | null;
    duration?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    mime_type?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    thumbnail_path?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    status?: Prisma.Enumlesson_videos_statusFieldUpdateOperationsInput | $Enums.lesson_videos_status;
    created_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    updated_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
};
export type lesson_videosCreateManyInput = {
    id?: bigint | number;
    course_id: bigint | number;
    lesson_id: string;
    video_type?: $Enums.lesson_videos_video_type;
    youtube_id?: string | null;
    file_path?: string | null;
    file_size?: bigint | number | null;
    duration?: number | null;
    mime_type?: string | null;
    thumbnail_path?: string | null;
    status?: $Enums.lesson_videos_status;
    created_at?: Date | string | null;
    updated_at?: Date | string | null;
};
export type lesson_videosUpdateManyMutationInput = {
    id?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    lesson_id?: Prisma.StringFieldUpdateOperationsInput | string;
    video_type?: Prisma.Enumlesson_videos_video_typeFieldUpdateOperationsInput | $Enums.lesson_videos_video_type;
    youtube_id?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    file_path?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    file_size?: Prisma.NullableBigIntFieldUpdateOperationsInput | bigint | number | null;
    duration?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    mime_type?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    thumbnail_path?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    status?: Prisma.Enumlesson_videos_statusFieldUpdateOperationsInput | $Enums.lesson_videos_status;
    created_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    updated_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
};
export type lesson_videosUncheckedUpdateManyInput = {
    id?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    course_id?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    lesson_id?: Prisma.StringFieldUpdateOperationsInput | string;
    video_type?: Prisma.Enumlesson_videos_video_typeFieldUpdateOperationsInput | $Enums.lesson_videos_video_type;
    youtube_id?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    file_path?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    file_size?: Prisma.NullableBigIntFieldUpdateOperationsInput | bigint | number | null;
    duration?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    mime_type?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    thumbnail_path?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    status?: Prisma.Enumlesson_videos_statusFieldUpdateOperationsInput | $Enums.lesson_videos_status;
    created_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    updated_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
};
export type Lesson_videosListRelationFilter = {
    every?: Prisma.lesson_videosWhereInput;
    some?: Prisma.lesson_videosWhereInput;
    none?: Prisma.lesson_videosWhereInput;
};
export type lesson_videosOrderByRelationAggregateInput = {
    _count?: Prisma.SortOrder;
};
export type lesson_videosOrderByRelevanceInput = {
    fields: Prisma.lesson_videosOrderByRelevanceFieldEnum | Prisma.lesson_videosOrderByRelevanceFieldEnum[];
    sort: Prisma.SortOrder;
    search: string;
};
export type lesson_videosCountOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    course_id?: Prisma.SortOrder;
    lesson_id?: Prisma.SortOrder;
    video_type?: Prisma.SortOrder;
    youtube_id?: Prisma.SortOrder;
    file_path?: Prisma.SortOrder;
    file_size?: Prisma.SortOrder;
    duration?: Prisma.SortOrder;
    mime_type?: Prisma.SortOrder;
    thumbnail_path?: Prisma.SortOrder;
    status?: Prisma.SortOrder;
    created_at?: Prisma.SortOrder;
    updated_at?: Prisma.SortOrder;
};
export type lesson_videosAvgOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    course_id?: Prisma.SortOrder;
    file_size?: Prisma.SortOrder;
    duration?: Prisma.SortOrder;
};
export type lesson_videosMaxOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    course_id?: Prisma.SortOrder;
    lesson_id?: Prisma.SortOrder;
    video_type?: Prisma.SortOrder;
    youtube_id?: Prisma.SortOrder;
    file_path?: Prisma.SortOrder;
    file_size?: Prisma.SortOrder;
    duration?: Prisma.SortOrder;
    mime_type?: Prisma.SortOrder;
    thumbnail_path?: Prisma.SortOrder;
    status?: Prisma.SortOrder;
    created_at?: Prisma.SortOrder;
    updated_at?: Prisma.SortOrder;
};
export type lesson_videosMinOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    course_id?: Prisma.SortOrder;
    lesson_id?: Prisma.SortOrder;
    video_type?: Prisma.SortOrder;
    youtube_id?: Prisma.SortOrder;
    file_path?: Prisma.SortOrder;
    file_size?: Prisma.SortOrder;
    duration?: Prisma.SortOrder;
    mime_type?: Prisma.SortOrder;
    thumbnail_path?: Prisma.SortOrder;
    status?: Prisma.SortOrder;
    created_at?: Prisma.SortOrder;
    updated_at?: Prisma.SortOrder;
};
export type lesson_videosSumOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    course_id?: Prisma.SortOrder;
    file_size?: Prisma.SortOrder;
    duration?: Prisma.SortOrder;
};
export type lesson_videosCreateNestedManyWithoutCoursesInput = {
    create?: Prisma.XOR<Prisma.lesson_videosCreateWithoutCoursesInput, Prisma.lesson_videosUncheckedCreateWithoutCoursesInput> | Prisma.lesson_videosCreateWithoutCoursesInput[] | Prisma.lesson_videosUncheckedCreateWithoutCoursesInput[];
    connectOrCreate?: Prisma.lesson_videosCreateOrConnectWithoutCoursesInput | Prisma.lesson_videosCreateOrConnectWithoutCoursesInput[];
    createMany?: Prisma.lesson_videosCreateManyCoursesInputEnvelope;
    connect?: Prisma.lesson_videosWhereUniqueInput | Prisma.lesson_videosWhereUniqueInput[];
};
export type lesson_videosUncheckedCreateNestedManyWithoutCoursesInput = {
    create?: Prisma.XOR<Prisma.lesson_videosCreateWithoutCoursesInput, Prisma.lesson_videosUncheckedCreateWithoutCoursesInput> | Prisma.lesson_videosCreateWithoutCoursesInput[] | Prisma.lesson_videosUncheckedCreateWithoutCoursesInput[];
    connectOrCreate?: Prisma.lesson_videosCreateOrConnectWithoutCoursesInput | Prisma.lesson_videosCreateOrConnectWithoutCoursesInput[];
    createMany?: Prisma.lesson_videosCreateManyCoursesInputEnvelope;
    connect?: Prisma.lesson_videosWhereUniqueInput | Prisma.lesson_videosWhereUniqueInput[];
};
export type lesson_videosUpdateManyWithoutCoursesNestedInput = {
    create?: Prisma.XOR<Prisma.lesson_videosCreateWithoutCoursesInput, Prisma.lesson_videosUncheckedCreateWithoutCoursesInput> | Prisma.lesson_videosCreateWithoutCoursesInput[] | Prisma.lesson_videosUncheckedCreateWithoutCoursesInput[];
    connectOrCreate?: Prisma.lesson_videosCreateOrConnectWithoutCoursesInput | Prisma.lesson_videosCreateOrConnectWithoutCoursesInput[];
    upsert?: Prisma.lesson_videosUpsertWithWhereUniqueWithoutCoursesInput | Prisma.lesson_videosUpsertWithWhereUniqueWithoutCoursesInput[];
    createMany?: Prisma.lesson_videosCreateManyCoursesInputEnvelope;
    set?: Prisma.lesson_videosWhereUniqueInput | Prisma.lesson_videosWhereUniqueInput[];
    disconnect?: Prisma.lesson_videosWhereUniqueInput | Prisma.lesson_videosWhereUniqueInput[];
    delete?: Prisma.lesson_videosWhereUniqueInput | Prisma.lesson_videosWhereUniqueInput[];
    connect?: Prisma.lesson_videosWhereUniqueInput | Prisma.lesson_videosWhereUniqueInput[];
    update?: Prisma.lesson_videosUpdateWithWhereUniqueWithoutCoursesInput | Prisma.lesson_videosUpdateWithWhereUniqueWithoutCoursesInput[];
    updateMany?: Prisma.lesson_videosUpdateManyWithWhereWithoutCoursesInput | Prisma.lesson_videosUpdateManyWithWhereWithoutCoursesInput[];
    deleteMany?: Prisma.lesson_videosScalarWhereInput | Prisma.lesson_videosScalarWhereInput[];
};
export type lesson_videosUncheckedUpdateManyWithoutCoursesNestedInput = {
    create?: Prisma.XOR<Prisma.lesson_videosCreateWithoutCoursesInput, Prisma.lesson_videosUncheckedCreateWithoutCoursesInput> | Prisma.lesson_videosCreateWithoutCoursesInput[] | Prisma.lesson_videosUncheckedCreateWithoutCoursesInput[];
    connectOrCreate?: Prisma.lesson_videosCreateOrConnectWithoutCoursesInput | Prisma.lesson_videosCreateOrConnectWithoutCoursesInput[];
    upsert?: Prisma.lesson_videosUpsertWithWhereUniqueWithoutCoursesInput | Prisma.lesson_videosUpsertWithWhereUniqueWithoutCoursesInput[];
    createMany?: Prisma.lesson_videosCreateManyCoursesInputEnvelope;
    set?: Prisma.lesson_videosWhereUniqueInput | Prisma.lesson_videosWhereUniqueInput[];
    disconnect?: Prisma.lesson_videosWhereUniqueInput | Prisma.lesson_videosWhereUniqueInput[];
    delete?: Prisma.lesson_videosWhereUniqueInput | Prisma.lesson_videosWhereUniqueInput[];
    connect?: Prisma.lesson_videosWhereUniqueInput | Prisma.lesson_videosWhereUniqueInput[];
    update?: Prisma.lesson_videosUpdateWithWhereUniqueWithoutCoursesInput | Prisma.lesson_videosUpdateWithWhereUniqueWithoutCoursesInput[];
    updateMany?: Prisma.lesson_videosUpdateManyWithWhereWithoutCoursesInput | Prisma.lesson_videosUpdateManyWithWhereWithoutCoursesInput[];
    deleteMany?: Prisma.lesson_videosScalarWhereInput | Prisma.lesson_videosScalarWhereInput[];
};
export type Enumlesson_videos_video_typeFieldUpdateOperationsInput = {
    set?: $Enums.lesson_videos_video_type;
};
export type Enumlesson_videos_statusFieldUpdateOperationsInput = {
    set?: $Enums.lesson_videos_status;
};
export type lesson_videosCreateWithoutCoursesInput = {
    id?: bigint | number;
    lesson_id: string;
    video_type?: $Enums.lesson_videos_video_type;
    youtube_id?: string | null;
    file_path?: string | null;
    file_size?: bigint | number | null;
    duration?: number | null;
    mime_type?: string | null;
    thumbnail_path?: string | null;
    status?: $Enums.lesson_videos_status;
    created_at?: Date | string | null;
    updated_at?: Date | string | null;
};
export type lesson_videosUncheckedCreateWithoutCoursesInput = {
    id?: bigint | number;
    lesson_id: string;
    video_type?: $Enums.lesson_videos_video_type;
    youtube_id?: string | null;
    file_path?: string | null;
    file_size?: bigint | number | null;
    duration?: number | null;
    mime_type?: string | null;
    thumbnail_path?: string | null;
    status?: $Enums.lesson_videos_status;
    created_at?: Date | string | null;
    updated_at?: Date | string | null;
};
export type lesson_videosCreateOrConnectWithoutCoursesInput = {
    where: Prisma.lesson_videosWhereUniqueInput;
    create: Prisma.XOR<Prisma.lesson_videosCreateWithoutCoursesInput, Prisma.lesson_videosUncheckedCreateWithoutCoursesInput>;
};
export type lesson_videosCreateManyCoursesInputEnvelope = {
    data: Prisma.lesson_videosCreateManyCoursesInput | Prisma.lesson_videosCreateManyCoursesInput[];
    skipDuplicates?: boolean;
};
export type lesson_videosUpsertWithWhereUniqueWithoutCoursesInput = {
    where: Prisma.lesson_videosWhereUniqueInput;
    update: Prisma.XOR<Prisma.lesson_videosUpdateWithoutCoursesInput, Prisma.lesson_videosUncheckedUpdateWithoutCoursesInput>;
    create: Prisma.XOR<Prisma.lesson_videosCreateWithoutCoursesInput, Prisma.lesson_videosUncheckedCreateWithoutCoursesInput>;
};
export type lesson_videosUpdateWithWhereUniqueWithoutCoursesInput = {
    where: Prisma.lesson_videosWhereUniqueInput;
    data: Prisma.XOR<Prisma.lesson_videosUpdateWithoutCoursesInput, Prisma.lesson_videosUncheckedUpdateWithoutCoursesInput>;
};
export type lesson_videosUpdateManyWithWhereWithoutCoursesInput = {
    where: Prisma.lesson_videosScalarWhereInput;
    data: Prisma.XOR<Prisma.lesson_videosUpdateManyMutationInput, Prisma.lesson_videosUncheckedUpdateManyWithoutCoursesInput>;
};
export type lesson_videosScalarWhereInput = {
    AND?: Prisma.lesson_videosScalarWhereInput | Prisma.lesson_videosScalarWhereInput[];
    OR?: Prisma.lesson_videosScalarWhereInput[];
    NOT?: Prisma.lesson_videosScalarWhereInput | Prisma.lesson_videosScalarWhereInput[];
    id?: Prisma.BigIntFilter<"lesson_videos"> | bigint | number;
    course_id?: Prisma.BigIntFilter<"lesson_videos"> | bigint | number;
    lesson_id?: Prisma.StringFilter<"lesson_videos"> | string;
    video_type?: Prisma.Enumlesson_videos_video_typeFilter<"lesson_videos"> | $Enums.lesson_videos_video_type;
    youtube_id?: Prisma.StringNullableFilter<"lesson_videos"> | string | null;
    file_path?: Prisma.StringNullableFilter<"lesson_videos"> | string | null;
    file_size?: Prisma.BigIntNullableFilter<"lesson_videos"> | bigint | number | null;
    duration?: Prisma.IntNullableFilter<"lesson_videos"> | number | null;
    mime_type?: Prisma.StringNullableFilter<"lesson_videos"> | string | null;
    thumbnail_path?: Prisma.StringNullableFilter<"lesson_videos"> | string | null;
    status?: Prisma.Enumlesson_videos_statusFilter<"lesson_videos"> | $Enums.lesson_videos_status;
    created_at?: Prisma.DateTimeNullableFilter<"lesson_videos"> | Date | string | null;
    updated_at?: Prisma.DateTimeNullableFilter<"lesson_videos"> | Date | string | null;
};
export type lesson_videosCreateManyCoursesInput = {
    id?: bigint | number;
    lesson_id: string;
    video_type?: $Enums.lesson_videos_video_type;
    youtube_id?: string | null;
    file_path?: string | null;
    file_size?: bigint | number | null;
    duration?: number | null;
    mime_type?: string | null;
    thumbnail_path?: string | null;
    status?: $Enums.lesson_videos_status;
    created_at?: Date | string | null;
    updated_at?: Date | string | null;
};
export type lesson_videosUpdateWithoutCoursesInput = {
    id?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    lesson_id?: Prisma.StringFieldUpdateOperationsInput | string;
    video_type?: Prisma.Enumlesson_videos_video_typeFieldUpdateOperationsInput | $Enums.lesson_videos_video_type;
    youtube_id?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    file_path?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    file_size?: Prisma.NullableBigIntFieldUpdateOperationsInput | bigint | number | null;
    duration?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    mime_type?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    thumbnail_path?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    status?: Prisma.Enumlesson_videos_statusFieldUpdateOperationsInput | $Enums.lesson_videos_status;
    created_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    updated_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
};
export type lesson_videosUncheckedUpdateWithoutCoursesInput = {
    id?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    lesson_id?: Prisma.StringFieldUpdateOperationsInput | string;
    video_type?: Prisma.Enumlesson_videos_video_typeFieldUpdateOperationsInput | $Enums.lesson_videos_video_type;
    youtube_id?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    file_path?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    file_size?: Prisma.NullableBigIntFieldUpdateOperationsInput | bigint | number | null;
    duration?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    mime_type?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    thumbnail_path?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    status?: Prisma.Enumlesson_videos_statusFieldUpdateOperationsInput | $Enums.lesson_videos_status;
    created_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    updated_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
};
export type lesson_videosUncheckedUpdateManyWithoutCoursesInput = {
    id?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    lesson_id?: Prisma.StringFieldUpdateOperationsInput | string;
    video_type?: Prisma.Enumlesson_videos_video_typeFieldUpdateOperationsInput | $Enums.lesson_videos_video_type;
    youtube_id?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    file_path?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    file_size?: Prisma.NullableBigIntFieldUpdateOperationsInput | bigint | number | null;
    duration?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    mime_type?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    thumbnail_path?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    status?: Prisma.Enumlesson_videos_statusFieldUpdateOperationsInput | $Enums.lesson_videos_status;
    created_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    updated_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
};
export type lesson_videosSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    course_id?: boolean;
    lesson_id?: boolean;
    video_type?: boolean;
    youtube_id?: boolean;
    file_path?: boolean;
    file_size?: boolean;
    duration?: boolean;
    mime_type?: boolean;
    thumbnail_path?: boolean;
    status?: boolean;
    created_at?: boolean;
    updated_at?: boolean;
    courses?: boolean | Prisma.coursesDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["lesson_videos"]>;
export type lesson_videosSelectScalar = {
    id?: boolean;
    course_id?: boolean;
    lesson_id?: boolean;
    video_type?: boolean;
    youtube_id?: boolean;
    file_path?: boolean;
    file_size?: boolean;
    duration?: boolean;
    mime_type?: boolean;
    thumbnail_path?: boolean;
    status?: boolean;
    created_at?: boolean;
    updated_at?: boolean;
};
export type lesson_videosOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "course_id" | "lesson_id" | "video_type" | "youtube_id" | "file_path" | "file_size" | "duration" | "mime_type" | "thumbnail_path" | "status" | "created_at" | "updated_at", ExtArgs["result"]["lesson_videos"]>;
export type lesson_videosInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    courses?: boolean | Prisma.coursesDefaultArgs<ExtArgs>;
};
export type $lesson_videosPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "lesson_videos";
    objects: {
        courses: Prisma.$coursesPayload<ExtArgs>;
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id: bigint;
        course_id: bigint;
        lesson_id: string;
        video_type: $Enums.lesson_videos_video_type;
        youtube_id: string | null;
        file_path: string | null;
        file_size: bigint | null;
        duration: number | null;
        mime_type: string | null;
        thumbnail_path: string | null;
        status: $Enums.lesson_videos_status;
        created_at: Date | null;
        updated_at: Date | null;
    }, ExtArgs["result"]["lesson_videos"]>;
    composites: {};
};
export type lesson_videosGetPayload<S extends boolean | null | undefined | lesson_videosDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$lesson_videosPayload, S>;
export type lesson_videosCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<lesson_videosFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: Lesson_videosCountAggregateInputType | true;
};
export interface lesson_videosDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['lesson_videos'];
        meta: {
            name: 'lesson_videos';
        };
    };
    findUnique<T extends lesson_videosFindUniqueArgs>(args: Prisma.SelectSubset<T, lesson_videosFindUniqueArgs<ExtArgs>>): Prisma.Prisma__lesson_videosClient<runtime.Types.Result.GetResult<Prisma.$lesson_videosPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findUniqueOrThrow<T extends lesson_videosFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, lesson_videosFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__lesson_videosClient<runtime.Types.Result.GetResult<Prisma.$lesson_videosPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findFirst<T extends lesson_videosFindFirstArgs>(args?: Prisma.SelectSubset<T, lesson_videosFindFirstArgs<ExtArgs>>): Prisma.Prisma__lesson_videosClient<runtime.Types.Result.GetResult<Prisma.$lesson_videosPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findFirstOrThrow<T extends lesson_videosFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, lesson_videosFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__lesson_videosClient<runtime.Types.Result.GetResult<Prisma.$lesson_videosPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findMany<T extends lesson_videosFindManyArgs>(args?: Prisma.SelectSubset<T, lesson_videosFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$lesson_videosPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    create<T extends lesson_videosCreateArgs>(args: Prisma.SelectSubset<T, lesson_videosCreateArgs<ExtArgs>>): Prisma.Prisma__lesson_videosClient<runtime.Types.Result.GetResult<Prisma.$lesson_videosPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    createMany<T extends lesson_videosCreateManyArgs>(args?: Prisma.SelectSubset<T, lesson_videosCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    delete<T extends lesson_videosDeleteArgs>(args: Prisma.SelectSubset<T, lesson_videosDeleteArgs<ExtArgs>>): Prisma.Prisma__lesson_videosClient<runtime.Types.Result.GetResult<Prisma.$lesson_videosPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    update<T extends lesson_videosUpdateArgs>(args: Prisma.SelectSubset<T, lesson_videosUpdateArgs<ExtArgs>>): Prisma.Prisma__lesson_videosClient<runtime.Types.Result.GetResult<Prisma.$lesson_videosPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    deleteMany<T extends lesson_videosDeleteManyArgs>(args?: Prisma.SelectSubset<T, lesson_videosDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateMany<T extends lesson_videosUpdateManyArgs>(args: Prisma.SelectSubset<T, lesson_videosUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    upsert<T extends lesson_videosUpsertArgs>(args: Prisma.SelectSubset<T, lesson_videosUpsertArgs<ExtArgs>>): Prisma.Prisma__lesson_videosClient<runtime.Types.Result.GetResult<Prisma.$lesson_videosPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    count<T extends lesson_videosCountArgs>(args?: Prisma.Subset<T, lesson_videosCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], Lesson_videosCountAggregateOutputType> : number>;
    aggregate<T extends Lesson_videosAggregateArgs>(args: Prisma.Subset<T, Lesson_videosAggregateArgs>): Prisma.PrismaPromise<GetLesson_videosAggregateType<T>>;
    groupBy<T extends lesson_videosGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: lesson_videosGroupByArgs['orderBy'];
    } : {
        orderBy?: lesson_videosGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, lesson_videosGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetLesson_videosGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    readonly fields: lesson_videosFieldRefs;
}
export interface Prisma__lesson_videosClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    courses<T extends Prisma.coursesDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.coursesDefaultArgs<ExtArgs>>): Prisma.Prisma__coursesClient<runtime.Types.Result.GetResult<Prisma.$coursesPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): runtime.Types.Utils.JsPromise<TResult1 | TResult2>;
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): runtime.Types.Utils.JsPromise<T | TResult>;
    finally(onfinally?: (() => void) | undefined | null): runtime.Types.Utils.JsPromise<T>;
}
export interface lesson_videosFieldRefs {
    readonly id: Prisma.FieldRef<"lesson_videos", 'BigInt'>;
    readonly course_id: Prisma.FieldRef<"lesson_videos", 'BigInt'>;
    readonly lesson_id: Prisma.FieldRef<"lesson_videos", 'String'>;
    readonly video_type: Prisma.FieldRef<"lesson_videos", 'lesson_videos_video_type'>;
    readonly youtube_id: Prisma.FieldRef<"lesson_videos", 'String'>;
    readonly file_path: Prisma.FieldRef<"lesson_videos", 'String'>;
    readonly file_size: Prisma.FieldRef<"lesson_videos", 'BigInt'>;
    readonly duration: Prisma.FieldRef<"lesson_videos", 'Int'>;
    readonly mime_type: Prisma.FieldRef<"lesson_videos", 'String'>;
    readonly thumbnail_path: Prisma.FieldRef<"lesson_videos", 'String'>;
    readonly status: Prisma.FieldRef<"lesson_videos", 'lesson_videos_status'>;
    readonly created_at: Prisma.FieldRef<"lesson_videos", 'DateTime'>;
    readonly updated_at: Prisma.FieldRef<"lesson_videos", 'DateTime'>;
}
export type lesson_videosFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.lesson_videosSelect<ExtArgs> | null;
    omit?: Prisma.lesson_videosOmit<ExtArgs> | null;
    include?: Prisma.lesson_videosInclude<ExtArgs> | null;
    where: Prisma.lesson_videosWhereUniqueInput;
};
export type lesson_videosFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.lesson_videosSelect<ExtArgs> | null;
    omit?: Prisma.lesson_videosOmit<ExtArgs> | null;
    include?: Prisma.lesson_videosInclude<ExtArgs> | null;
    where: Prisma.lesson_videosWhereUniqueInput;
};
export type lesson_videosFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.lesson_videosSelect<ExtArgs> | null;
    omit?: Prisma.lesson_videosOmit<ExtArgs> | null;
    include?: Prisma.lesson_videosInclude<ExtArgs> | null;
    where?: Prisma.lesson_videosWhereInput;
    orderBy?: Prisma.lesson_videosOrderByWithRelationInput | Prisma.lesson_videosOrderByWithRelationInput[];
    cursor?: Prisma.lesson_videosWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.Lesson_videosScalarFieldEnum | Prisma.Lesson_videosScalarFieldEnum[];
};
export type lesson_videosFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.lesson_videosSelect<ExtArgs> | null;
    omit?: Prisma.lesson_videosOmit<ExtArgs> | null;
    include?: Prisma.lesson_videosInclude<ExtArgs> | null;
    where?: Prisma.lesson_videosWhereInput;
    orderBy?: Prisma.lesson_videosOrderByWithRelationInput | Prisma.lesson_videosOrderByWithRelationInput[];
    cursor?: Prisma.lesson_videosWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.Lesson_videosScalarFieldEnum | Prisma.Lesson_videosScalarFieldEnum[];
};
export type lesson_videosFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.lesson_videosSelect<ExtArgs> | null;
    omit?: Prisma.lesson_videosOmit<ExtArgs> | null;
    include?: Prisma.lesson_videosInclude<ExtArgs> | null;
    where?: Prisma.lesson_videosWhereInput;
    orderBy?: Prisma.lesson_videosOrderByWithRelationInput | Prisma.lesson_videosOrderByWithRelationInput[];
    cursor?: Prisma.lesson_videosWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.Lesson_videosScalarFieldEnum | Prisma.Lesson_videosScalarFieldEnum[];
};
export type lesson_videosCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.lesson_videosSelect<ExtArgs> | null;
    omit?: Prisma.lesson_videosOmit<ExtArgs> | null;
    include?: Prisma.lesson_videosInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.lesson_videosCreateInput, Prisma.lesson_videosUncheckedCreateInput>;
};
export type lesson_videosCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.lesson_videosCreateManyInput | Prisma.lesson_videosCreateManyInput[];
    skipDuplicates?: boolean;
};
export type lesson_videosUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.lesson_videosSelect<ExtArgs> | null;
    omit?: Prisma.lesson_videosOmit<ExtArgs> | null;
    include?: Prisma.lesson_videosInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.lesson_videosUpdateInput, Prisma.lesson_videosUncheckedUpdateInput>;
    where: Prisma.lesson_videosWhereUniqueInput;
};
export type lesson_videosUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.XOR<Prisma.lesson_videosUpdateManyMutationInput, Prisma.lesson_videosUncheckedUpdateManyInput>;
    where?: Prisma.lesson_videosWhereInput;
    limit?: number;
};
export type lesson_videosUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.lesson_videosSelect<ExtArgs> | null;
    omit?: Prisma.lesson_videosOmit<ExtArgs> | null;
    include?: Prisma.lesson_videosInclude<ExtArgs> | null;
    where: Prisma.lesson_videosWhereUniqueInput;
    create: Prisma.XOR<Prisma.lesson_videosCreateInput, Prisma.lesson_videosUncheckedCreateInput>;
    update: Prisma.XOR<Prisma.lesson_videosUpdateInput, Prisma.lesson_videosUncheckedUpdateInput>;
};
export type lesson_videosDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.lesson_videosSelect<ExtArgs> | null;
    omit?: Prisma.lesson_videosOmit<ExtArgs> | null;
    include?: Prisma.lesson_videosInclude<ExtArgs> | null;
    where: Prisma.lesson_videosWhereUniqueInput;
};
export type lesson_videosDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.lesson_videosWhereInput;
    limit?: number;
};
export type lesson_videosDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.lesson_videosSelect<ExtArgs> | null;
    omit?: Prisma.lesson_videosOmit<ExtArgs> | null;
    include?: Prisma.lesson_videosInclude<ExtArgs> | null;
};
export {};
