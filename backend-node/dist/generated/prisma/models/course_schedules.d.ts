import type * as runtime from "@prisma/client/runtime/client";
import type * as Prisma from "../internal/prismaNamespace.js";
export type course_schedulesModel = runtime.Types.Result.DefaultSelection<Prisma.$course_schedulesPayload>;
export type AggregateCourse_schedules = {
    _count: Course_schedulesCountAggregateOutputType | null;
    _avg: Course_schedulesAvgAggregateOutputType | null;
    _sum: Course_schedulesSumAggregateOutputType | null;
    _min: Course_schedulesMinAggregateOutputType | null;
    _max: Course_schedulesMaxAggregateOutputType | null;
};
export type Course_schedulesAvgAggregateOutputType = {
    id: number | null;
};
export type Course_schedulesSumAggregateOutputType = {
    id: bigint | null;
};
export type Course_schedulesMinAggregateOutputType = {
    id: bigint | null;
    created_at: Date | null;
    updated_at: Date | null;
};
export type Course_schedulesMaxAggregateOutputType = {
    id: bigint | null;
    created_at: Date | null;
    updated_at: Date | null;
};
export type Course_schedulesCountAggregateOutputType = {
    id: number;
    created_at: number;
    updated_at: number;
    _all: number;
};
export type Course_schedulesAvgAggregateInputType = {
    id?: true;
};
export type Course_schedulesSumAggregateInputType = {
    id?: true;
};
export type Course_schedulesMinAggregateInputType = {
    id?: true;
    created_at?: true;
    updated_at?: true;
};
export type Course_schedulesMaxAggregateInputType = {
    id?: true;
    created_at?: true;
    updated_at?: true;
};
export type Course_schedulesCountAggregateInputType = {
    id?: true;
    created_at?: true;
    updated_at?: true;
    _all?: true;
};
export type Course_schedulesAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.course_schedulesWhereInput;
    orderBy?: Prisma.course_schedulesOrderByWithRelationInput | Prisma.course_schedulesOrderByWithRelationInput[];
    cursor?: Prisma.course_schedulesWhereUniqueInput;
    take?: number;
    skip?: number;
    _count?: true | Course_schedulesCountAggregateInputType;
    _avg?: Course_schedulesAvgAggregateInputType;
    _sum?: Course_schedulesSumAggregateInputType;
    _min?: Course_schedulesMinAggregateInputType;
    _max?: Course_schedulesMaxAggregateInputType;
};
export type GetCourse_schedulesAggregateType<T extends Course_schedulesAggregateArgs> = {
    [P in keyof T & keyof AggregateCourse_schedules]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateCourse_schedules[P]> : Prisma.GetScalarType<T[P], AggregateCourse_schedules[P]>;
};
export type course_schedulesGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.course_schedulesWhereInput;
    orderBy?: Prisma.course_schedulesOrderByWithAggregationInput | Prisma.course_schedulesOrderByWithAggregationInput[];
    by: Prisma.Course_schedulesScalarFieldEnum[] | Prisma.Course_schedulesScalarFieldEnum;
    having?: Prisma.course_schedulesScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: Course_schedulesCountAggregateInputType | true;
    _avg?: Course_schedulesAvgAggregateInputType;
    _sum?: Course_schedulesSumAggregateInputType;
    _min?: Course_schedulesMinAggregateInputType;
    _max?: Course_schedulesMaxAggregateInputType;
};
export type Course_schedulesGroupByOutputType = {
    id: bigint;
    created_at: Date | null;
    updated_at: Date | null;
    _count: Course_schedulesCountAggregateOutputType | null;
    _avg: Course_schedulesAvgAggregateOutputType | null;
    _sum: Course_schedulesSumAggregateOutputType | null;
    _min: Course_schedulesMinAggregateOutputType | null;
    _max: Course_schedulesMaxAggregateOutputType | null;
};
type GetCourse_schedulesGroupByPayload<T extends course_schedulesGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<Course_schedulesGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof Course_schedulesGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], Course_schedulesGroupByOutputType[P]> : Prisma.GetScalarType<T[P], Course_schedulesGroupByOutputType[P]>;
}>>;
export type course_schedulesWhereInput = {
    AND?: Prisma.course_schedulesWhereInput | Prisma.course_schedulesWhereInput[];
    OR?: Prisma.course_schedulesWhereInput[];
    NOT?: Prisma.course_schedulesWhereInput | Prisma.course_schedulesWhereInput[];
    id?: Prisma.BigIntFilter<"course_schedules"> | bigint | number;
    created_at?: Prisma.DateTimeNullableFilter<"course_schedules"> | Date | string | null;
    updated_at?: Prisma.DateTimeNullableFilter<"course_schedules"> | Date | string | null;
};
export type course_schedulesOrderByWithRelationInput = {
    id?: Prisma.SortOrder;
    created_at?: Prisma.SortOrderInput | Prisma.SortOrder;
    updated_at?: Prisma.SortOrderInput | Prisma.SortOrder;
};
export type course_schedulesWhereUniqueInput = Prisma.AtLeast<{
    id?: bigint | number;
    AND?: Prisma.course_schedulesWhereInput | Prisma.course_schedulesWhereInput[];
    OR?: Prisma.course_schedulesWhereInput[];
    NOT?: Prisma.course_schedulesWhereInput | Prisma.course_schedulesWhereInput[];
    created_at?: Prisma.DateTimeNullableFilter<"course_schedules"> | Date | string | null;
    updated_at?: Prisma.DateTimeNullableFilter<"course_schedules"> | Date | string | null;
}, "id">;
export type course_schedulesOrderByWithAggregationInput = {
    id?: Prisma.SortOrder;
    created_at?: Prisma.SortOrderInput | Prisma.SortOrder;
    updated_at?: Prisma.SortOrderInput | Prisma.SortOrder;
    _count?: Prisma.course_schedulesCountOrderByAggregateInput;
    _avg?: Prisma.course_schedulesAvgOrderByAggregateInput;
    _max?: Prisma.course_schedulesMaxOrderByAggregateInput;
    _min?: Prisma.course_schedulesMinOrderByAggregateInput;
    _sum?: Prisma.course_schedulesSumOrderByAggregateInput;
};
export type course_schedulesScalarWhereWithAggregatesInput = {
    AND?: Prisma.course_schedulesScalarWhereWithAggregatesInput | Prisma.course_schedulesScalarWhereWithAggregatesInput[];
    OR?: Prisma.course_schedulesScalarWhereWithAggregatesInput[];
    NOT?: Prisma.course_schedulesScalarWhereWithAggregatesInput | Prisma.course_schedulesScalarWhereWithAggregatesInput[];
    id?: Prisma.BigIntWithAggregatesFilter<"course_schedules"> | bigint | number;
    created_at?: Prisma.DateTimeNullableWithAggregatesFilter<"course_schedules"> | Date | string | null;
    updated_at?: Prisma.DateTimeNullableWithAggregatesFilter<"course_schedules"> | Date | string | null;
};
export type course_schedulesCreateInput = {
    id?: bigint | number;
    created_at?: Date | string | null;
    updated_at?: Date | string | null;
};
export type course_schedulesUncheckedCreateInput = {
    id?: bigint | number;
    created_at?: Date | string | null;
    updated_at?: Date | string | null;
};
export type course_schedulesUpdateInput = {
    id?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    created_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    updated_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
};
export type course_schedulesUncheckedUpdateInput = {
    id?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    created_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    updated_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
};
export type course_schedulesCreateManyInput = {
    id?: bigint | number;
    created_at?: Date | string | null;
    updated_at?: Date | string | null;
};
export type course_schedulesUpdateManyMutationInput = {
    id?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    created_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    updated_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
};
export type course_schedulesUncheckedUpdateManyInput = {
    id?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    created_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    updated_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
};
export type course_schedulesCountOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    created_at?: Prisma.SortOrder;
    updated_at?: Prisma.SortOrder;
};
export type course_schedulesAvgOrderByAggregateInput = {
    id?: Prisma.SortOrder;
};
export type course_schedulesMaxOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    created_at?: Prisma.SortOrder;
    updated_at?: Prisma.SortOrder;
};
export type course_schedulesMinOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    created_at?: Prisma.SortOrder;
    updated_at?: Prisma.SortOrder;
};
export type course_schedulesSumOrderByAggregateInput = {
    id?: Prisma.SortOrder;
};
export type course_schedulesSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    created_at?: boolean;
    updated_at?: boolean;
}, ExtArgs["result"]["course_schedules"]>;
export type course_schedulesSelectScalar = {
    id?: boolean;
    created_at?: boolean;
    updated_at?: boolean;
};
export type course_schedulesOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "created_at" | "updated_at", ExtArgs["result"]["course_schedules"]>;
export type $course_schedulesPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "course_schedules";
    objects: {};
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id: bigint;
        created_at: Date | null;
        updated_at: Date | null;
    }, ExtArgs["result"]["course_schedules"]>;
    composites: {};
};
export type course_schedulesGetPayload<S extends boolean | null | undefined | course_schedulesDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$course_schedulesPayload, S>;
export type course_schedulesCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<course_schedulesFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: Course_schedulesCountAggregateInputType | true;
};
export interface course_schedulesDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['course_schedules'];
        meta: {
            name: 'course_schedules';
        };
    };
    findUnique<T extends course_schedulesFindUniqueArgs>(args: Prisma.SelectSubset<T, course_schedulesFindUniqueArgs<ExtArgs>>): Prisma.Prisma__course_schedulesClient<runtime.Types.Result.GetResult<Prisma.$course_schedulesPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findUniqueOrThrow<T extends course_schedulesFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, course_schedulesFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__course_schedulesClient<runtime.Types.Result.GetResult<Prisma.$course_schedulesPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findFirst<T extends course_schedulesFindFirstArgs>(args?: Prisma.SelectSubset<T, course_schedulesFindFirstArgs<ExtArgs>>): Prisma.Prisma__course_schedulesClient<runtime.Types.Result.GetResult<Prisma.$course_schedulesPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findFirstOrThrow<T extends course_schedulesFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, course_schedulesFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__course_schedulesClient<runtime.Types.Result.GetResult<Prisma.$course_schedulesPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findMany<T extends course_schedulesFindManyArgs>(args?: Prisma.SelectSubset<T, course_schedulesFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$course_schedulesPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    create<T extends course_schedulesCreateArgs>(args: Prisma.SelectSubset<T, course_schedulesCreateArgs<ExtArgs>>): Prisma.Prisma__course_schedulesClient<runtime.Types.Result.GetResult<Prisma.$course_schedulesPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    createMany<T extends course_schedulesCreateManyArgs>(args?: Prisma.SelectSubset<T, course_schedulesCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    delete<T extends course_schedulesDeleteArgs>(args: Prisma.SelectSubset<T, course_schedulesDeleteArgs<ExtArgs>>): Prisma.Prisma__course_schedulesClient<runtime.Types.Result.GetResult<Prisma.$course_schedulesPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    update<T extends course_schedulesUpdateArgs>(args: Prisma.SelectSubset<T, course_schedulesUpdateArgs<ExtArgs>>): Prisma.Prisma__course_schedulesClient<runtime.Types.Result.GetResult<Prisma.$course_schedulesPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    deleteMany<T extends course_schedulesDeleteManyArgs>(args?: Prisma.SelectSubset<T, course_schedulesDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateMany<T extends course_schedulesUpdateManyArgs>(args: Prisma.SelectSubset<T, course_schedulesUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    upsert<T extends course_schedulesUpsertArgs>(args: Prisma.SelectSubset<T, course_schedulesUpsertArgs<ExtArgs>>): Prisma.Prisma__course_schedulesClient<runtime.Types.Result.GetResult<Prisma.$course_schedulesPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    count<T extends course_schedulesCountArgs>(args?: Prisma.Subset<T, course_schedulesCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], Course_schedulesCountAggregateOutputType> : number>;
    aggregate<T extends Course_schedulesAggregateArgs>(args: Prisma.Subset<T, Course_schedulesAggregateArgs>): Prisma.PrismaPromise<GetCourse_schedulesAggregateType<T>>;
    groupBy<T extends course_schedulesGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: course_schedulesGroupByArgs['orderBy'];
    } : {
        orderBy?: course_schedulesGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, course_schedulesGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCourse_schedulesGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    readonly fields: course_schedulesFieldRefs;
}
export interface Prisma__course_schedulesClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): runtime.Types.Utils.JsPromise<TResult1 | TResult2>;
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): runtime.Types.Utils.JsPromise<T | TResult>;
    finally(onfinally?: (() => void) | undefined | null): runtime.Types.Utils.JsPromise<T>;
}
export interface course_schedulesFieldRefs {
    readonly id: Prisma.FieldRef<"course_schedules", 'BigInt'>;
    readonly created_at: Prisma.FieldRef<"course_schedules", 'DateTime'>;
    readonly updated_at: Prisma.FieldRef<"course_schedules", 'DateTime'>;
}
export type course_schedulesFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.course_schedulesSelect<ExtArgs> | null;
    omit?: Prisma.course_schedulesOmit<ExtArgs> | null;
    where: Prisma.course_schedulesWhereUniqueInput;
};
export type course_schedulesFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.course_schedulesSelect<ExtArgs> | null;
    omit?: Prisma.course_schedulesOmit<ExtArgs> | null;
    where: Prisma.course_schedulesWhereUniqueInput;
};
export type course_schedulesFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.course_schedulesSelect<ExtArgs> | null;
    omit?: Prisma.course_schedulesOmit<ExtArgs> | null;
    where?: Prisma.course_schedulesWhereInput;
    orderBy?: Prisma.course_schedulesOrderByWithRelationInput | Prisma.course_schedulesOrderByWithRelationInput[];
    cursor?: Prisma.course_schedulesWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.Course_schedulesScalarFieldEnum | Prisma.Course_schedulesScalarFieldEnum[];
};
export type course_schedulesFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.course_schedulesSelect<ExtArgs> | null;
    omit?: Prisma.course_schedulesOmit<ExtArgs> | null;
    where?: Prisma.course_schedulesWhereInput;
    orderBy?: Prisma.course_schedulesOrderByWithRelationInput | Prisma.course_schedulesOrderByWithRelationInput[];
    cursor?: Prisma.course_schedulesWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.Course_schedulesScalarFieldEnum | Prisma.Course_schedulesScalarFieldEnum[];
};
export type course_schedulesFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.course_schedulesSelect<ExtArgs> | null;
    omit?: Prisma.course_schedulesOmit<ExtArgs> | null;
    where?: Prisma.course_schedulesWhereInput;
    orderBy?: Prisma.course_schedulesOrderByWithRelationInput | Prisma.course_schedulesOrderByWithRelationInput[];
    cursor?: Prisma.course_schedulesWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.Course_schedulesScalarFieldEnum | Prisma.Course_schedulesScalarFieldEnum[];
};
export type course_schedulesCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.course_schedulesSelect<ExtArgs> | null;
    omit?: Prisma.course_schedulesOmit<ExtArgs> | null;
    data?: Prisma.XOR<Prisma.course_schedulesCreateInput, Prisma.course_schedulesUncheckedCreateInput>;
};
export type course_schedulesCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.course_schedulesCreateManyInput | Prisma.course_schedulesCreateManyInput[];
    skipDuplicates?: boolean;
};
export type course_schedulesUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.course_schedulesSelect<ExtArgs> | null;
    omit?: Prisma.course_schedulesOmit<ExtArgs> | null;
    data: Prisma.XOR<Prisma.course_schedulesUpdateInput, Prisma.course_schedulesUncheckedUpdateInput>;
    where: Prisma.course_schedulesWhereUniqueInput;
};
export type course_schedulesUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.XOR<Prisma.course_schedulesUpdateManyMutationInput, Prisma.course_schedulesUncheckedUpdateManyInput>;
    where?: Prisma.course_schedulesWhereInput;
    limit?: number;
};
export type course_schedulesUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.course_schedulesSelect<ExtArgs> | null;
    omit?: Prisma.course_schedulesOmit<ExtArgs> | null;
    where: Prisma.course_schedulesWhereUniqueInput;
    create: Prisma.XOR<Prisma.course_schedulesCreateInput, Prisma.course_schedulesUncheckedCreateInput>;
    update: Prisma.XOR<Prisma.course_schedulesUpdateInput, Prisma.course_schedulesUncheckedUpdateInput>;
};
export type course_schedulesDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.course_schedulesSelect<ExtArgs> | null;
    omit?: Prisma.course_schedulesOmit<ExtArgs> | null;
    where: Prisma.course_schedulesWhereUniqueInput;
};
export type course_schedulesDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.course_schedulesWhereInput;
    limit?: number;
};
export type course_schedulesDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.course_schedulesSelect<ExtArgs> | null;
    omit?: Prisma.course_schedulesOmit<ExtArgs> | null;
};
export {};
