import type * as runtime from "@prisma/client/runtime/client";
import type * as Prisma from "../internal/prismaNamespace.js";
export type system_settingsModel = runtime.Types.Result.DefaultSelection<Prisma.$system_settingsPayload>;
export type AggregateSystem_settings = {
    _count: System_settingsCountAggregateOutputType | null;
    _avg: System_settingsAvgAggregateOutputType | null;
    _sum: System_settingsSumAggregateOutputType | null;
    _min: System_settingsMinAggregateOutputType | null;
    _max: System_settingsMaxAggregateOutputType | null;
};
export type System_settingsAvgAggregateOutputType = {
    id: number | null;
};
export type System_settingsSumAggregateOutputType = {
    id: bigint | null;
};
export type System_settingsMinAggregateOutputType = {
    id: bigint | null;
    key: string | null;
    value: string | null;
    type: string | null;
    group: string | null;
    description: string | null;
    created_at: Date | null;
    updated_at: Date | null;
};
export type System_settingsMaxAggregateOutputType = {
    id: bigint | null;
    key: string | null;
    value: string | null;
    type: string | null;
    group: string | null;
    description: string | null;
    created_at: Date | null;
    updated_at: Date | null;
};
export type System_settingsCountAggregateOutputType = {
    id: number;
    key: number;
    value: number;
    type: number;
    group: number;
    description: number;
    created_at: number;
    updated_at: number;
    _all: number;
};
export type System_settingsAvgAggregateInputType = {
    id?: true;
};
export type System_settingsSumAggregateInputType = {
    id?: true;
};
export type System_settingsMinAggregateInputType = {
    id?: true;
    key?: true;
    value?: true;
    type?: true;
    group?: true;
    description?: true;
    created_at?: true;
    updated_at?: true;
};
export type System_settingsMaxAggregateInputType = {
    id?: true;
    key?: true;
    value?: true;
    type?: true;
    group?: true;
    description?: true;
    created_at?: true;
    updated_at?: true;
};
export type System_settingsCountAggregateInputType = {
    id?: true;
    key?: true;
    value?: true;
    type?: true;
    group?: true;
    description?: true;
    created_at?: true;
    updated_at?: true;
    _all?: true;
};
export type System_settingsAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.system_settingsWhereInput;
    orderBy?: Prisma.system_settingsOrderByWithRelationInput | Prisma.system_settingsOrderByWithRelationInput[];
    cursor?: Prisma.system_settingsWhereUniqueInput;
    take?: number;
    skip?: number;
    _count?: true | System_settingsCountAggregateInputType;
    _avg?: System_settingsAvgAggregateInputType;
    _sum?: System_settingsSumAggregateInputType;
    _min?: System_settingsMinAggregateInputType;
    _max?: System_settingsMaxAggregateInputType;
};
export type GetSystem_settingsAggregateType<T extends System_settingsAggregateArgs> = {
    [P in keyof T & keyof AggregateSystem_settings]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateSystem_settings[P]> : Prisma.GetScalarType<T[P], AggregateSystem_settings[P]>;
};
export type system_settingsGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.system_settingsWhereInput;
    orderBy?: Prisma.system_settingsOrderByWithAggregationInput | Prisma.system_settingsOrderByWithAggregationInput[];
    by: Prisma.System_settingsScalarFieldEnum[] | Prisma.System_settingsScalarFieldEnum;
    having?: Prisma.system_settingsScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: System_settingsCountAggregateInputType | true;
    _avg?: System_settingsAvgAggregateInputType;
    _sum?: System_settingsSumAggregateInputType;
    _min?: System_settingsMinAggregateInputType;
    _max?: System_settingsMaxAggregateInputType;
};
export type System_settingsGroupByOutputType = {
    id: bigint;
    key: string;
    value: string | null;
    type: string;
    group: string;
    description: string | null;
    created_at: Date | null;
    updated_at: Date | null;
    _count: System_settingsCountAggregateOutputType | null;
    _avg: System_settingsAvgAggregateOutputType | null;
    _sum: System_settingsSumAggregateOutputType | null;
    _min: System_settingsMinAggregateOutputType | null;
    _max: System_settingsMaxAggregateOutputType | null;
};
type GetSystem_settingsGroupByPayload<T extends system_settingsGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<System_settingsGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof System_settingsGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], System_settingsGroupByOutputType[P]> : Prisma.GetScalarType<T[P], System_settingsGroupByOutputType[P]>;
}>>;
export type system_settingsWhereInput = {
    AND?: Prisma.system_settingsWhereInput | Prisma.system_settingsWhereInput[];
    OR?: Prisma.system_settingsWhereInput[];
    NOT?: Prisma.system_settingsWhereInput | Prisma.system_settingsWhereInput[];
    id?: Prisma.BigIntFilter<"system_settings"> | bigint | number;
    key?: Prisma.StringFilter<"system_settings"> | string;
    value?: Prisma.StringNullableFilter<"system_settings"> | string | null;
    type?: Prisma.StringFilter<"system_settings"> | string;
    group?: Prisma.StringFilter<"system_settings"> | string;
    description?: Prisma.StringNullableFilter<"system_settings"> | string | null;
    created_at?: Prisma.DateTimeNullableFilter<"system_settings"> | Date | string | null;
    updated_at?: Prisma.DateTimeNullableFilter<"system_settings"> | Date | string | null;
};
export type system_settingsOrderByWithRelationInput = {
    id?: Prisma.SortOrder;
    key?: Prisma.SortOrder;
    value?: Prisma.SortOrderInput | Prisma.SortOrder;
    type?: Prisma.SortOrder;
    group?: Prisma.SortOrder;
    description?: Prisma.SortOrderInput | Prisma.SortOrder;
    created_at?: Prisma.SortOrderInput | Prisma.SortOrder;
    updated_at?: Prisma.SortOrderInput | Prisma.SortOrder;
    _relevance?: Prisma.system_settingsOrderByRelevanceInput;
};
export type system_settingsWhereUniqueInput = Prisma.AtLeast<{
    id?: bigint | number;
    key?: string;
    AND?: Prisma.system_settingsWhereInput | Prisma.system_settingsWhereInput[];
    OR?: Prisma.system_settingsWhereInput[];
    NOT?: Prisma.system_settingsWhereInput | Prisma.system_settingsWhereInput[];
    value?: Prisma.StringNullableFilter<"system_settings"> | string | null;
    type?: Prisma.StringFilter<"system_settings"> | string;
    group?: Prisma.StringFilter<"system_settings"> | string;
    description?: Prisma.StringNullableFilter<"system_settings"> | string | null;
    created_at?: Prisma.DateTimeNullableFilter<"system_settings"> | Date | string | null;
    updated_at?: Prisma.DateTimeNullableFilter<"system_settings"> | Date | string | null;
}, "id" | "key">;
export type system_settingsOrderByWithAggregationInput = {
    id?: Prisma.SortOrder;
    key?: Prisma.SortOrder;
    value?: Prisma.SortOrderInput | Prisma.SortOrder;
    type?: Prisma.SortOrder;
    group?: Prisma.SortOrder;
    description?: Prisma.SortOrderInput | Prisma.SortOrder;
    created_at?: Prisma.SortOrderInput | Prisma.SortOrder;
    updated_at?: Prisma.SortOrderInput | Prisma.SortOrder;
    _count?: Prisma.system_settingsCountOrderByAggregateInput;
    _avg?: Prisma.system_settingsAvgOrderByAggregateInput;
    _max?: Prisma.system_settingsMaxOrderByAggregateInput;
    _min?: Prisma.system_settingsMinOrderByAggregateInput;
    _sum?: Prisma.system_settingsSumOrderByAggregateInput;
};
export type system_settingsScalarWhereWithAggregatesInput = {
    AND?: Prisma.system_settingsScalarWhereWithAggregatesInput | Prisma.system_settingsScalarWhereWithAggregatesInput[];
    OR?: Prisma.system_settingsScalarWhereWithAggregatesInput[];
    NOT?: Prisma.system_settingsScalarWhereWithAggregatesInput | Prisma.system_settingsScalarWhereWithAggregatesInput[];
    id?: Prisma.BigIntWithAggregatesFilter<"system_settings"> | bigint | number;
    key?: Prisma.StringWithAggregatesFilter<"system_settings"> | string;
    value?: Prisma.StringNullableWithAggregatesFilter<"system_settings"> | string | null;
    type?: Prisma.StringWithAggregatesFilter<"system_settings"> | string;
    group?: Prisma.StringWithAggregatesFilter<"system_settings"> | string;
    description?: Prisma.StringNullableWithAggregatesFilter<"system_settings"> | string | null;
    created_at?: Prisma.DateTimeNullableWithAggregatesFilter<"system_settings"> | Date | string | null;
    updated_at?: Prisma.DateTimeNullableWithAggregatesFilter<"system_settings"> | Date | string | null;
};
export type system_settingsCreateInput = {
    id?: bigint | number;
    key: string;
    value?: string | null;
    type?: string;
    group?: string;
    description?: string | null;
    created_at?: Date | string | null;
    updated_at?: Date | string | null;
};
export type system_settingsUncheckedCreateInput = {
    id?: bigint | number;
    key: string;
    value?: string | null;
    type?: string;
    group?: string;
    description?: string | null;
    created_at?: Date | string | null;
    updated_at?: Date | string | null;
};
export type system_settingsUpdateInput = {
    id?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    key?: Prisma.StringFieldUpdateOperationsInput | string;
    value?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    type?: Prisma.StringFieldUpdateOperationsInput | string;
    group?: Prisma.StringFieldUpdateOperationsInput | string;
    description?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    created_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    updated_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
};
export type system_settingsUncheckedUpdateInput = {
    id?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    key?: Prisma.StringFieldUpdateOperationsInput | string;
    value?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    type?: Prisma.StringFieldUpdateOperationsInput | string;
    group?: Prisma.StringFieldUpdateOperationsInput | string;
    description?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    created_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    updated_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
};
export type system_settingsCreateManyInput = {
    id?: bigint | number;
    key: string;
    value?: string | null;
    type?: string;
    group?: string;
    description?: string | null;
    created_at?: Date | string | null;
    updated_at?: Date | string | null;
};
export type system_settingsUpdateManyMutationInput = {
    id?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    key?: Prisma.StringFieldUpdateOperationsInput | string;
    value?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    type?: Prisma.StringFieldUpdateOperationsInput | string;
    group?: Prisma.StringFieldUpdateOperationsInput | string;
    description?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    created_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    updated_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
};
export type system_settingsUncheckedUpdateManyInput = {
    id?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    key?: Prisma.StringFieldUpdateOperationsInput | string;
    value?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    type?: Prisma.StringFieldUpdateOperationsInput | string;
    group?: Prisma.StringFieldUpdateOperationsInput | string;
    description?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    created_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    updated_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
};
export type system_settingsOrderByRelevanceInput = {
    fields: Prisma.system_settingsOrderByRelevanceFieldEnum | Prisma.system_settingsOrderByRelevanceFieldEnum[];
    sort: Prisma.SortOrder;
    search: string;
};
export type system_settingsCountOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    key?: Prisma.SortOrder;
    value?: Prisma.SortOrder;
    type?: Prisma.SortOrder;
    group?: Prisma.SortOrder;
    description?: Prisma.SortOrder;
    created_at?: Prisma.SortOrder;
    updated_at?: Prisma.SortOrder;
};
export type system_settingsAvgOrderByAggregateInput = {
    id?: Prisma.SortOrder;
};
export type system_settingsMaxOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    key?: Prisma.SortOrder;
    value?: Prisma.SortOrder;
    type?: Prisma.SortOrder;
    group?: Prisma.SortOrder;
    description?: Prisma.SortOrder;
    created_at?: Prisma.SortOrder;
    updated_at?: Prisma.SortOrder;
};
export type system_settingsMinOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    key?: Prisma.SortOrder;
    value?: Prisma.SortOrder;
    type?: Prisma.SortOrder;
    group?: Prisma.SortOrder;
    description?: Prisma.SortOrder;
    created_at?: Prisma.SortOrder;
    updated_at?: Prisma.SortOrder;
};
export type system_settingsSumOrderByAggregateInput = {
    id?: Prisma.SortOrder;
};
export type system_settingsSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    key?: boolean;
    value?: boolean;
    type?: boolean;
    group?: boolean;
    description?: boolean;
    created_at?: boolean;
    updated_at?: boolean;
}, ExtArgs["result"]["system_settings"]>;
export type system_settingsSelectScalar = {
    id?: boolean;
    key?: boolean;
    value?: boolean;
    type?: boolean;
    group?: boolean;
    description?: boolean;
    created_at?: boolean;
    updated_at?: boolean;
};
export type system_settingsOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "key" | "value" | "type" | "group" | "description" | "created_at" | "updated_at", ExtArgs["result"]["system_settings"]>;
export type $system_settingsPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "system_settings";
    objects: {};
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id: bigint;
        key: string;
        value: string | null;
        type: string;
        group: string;
        description: string | null;
        created_at: Date | null;
        updated_at: Date | null;
    }, ExtArgs["result"]["system_settings"]>;
    composites: {};
};
export type system_settingsGetPayload<S extends boolean | null | undefined | system_settingsDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$system_settingsPayload, S>;
export type system_settingsCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<system_settingsFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: System_settingsCountAggregateInputType | true;
};
export interface system_settingsDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['system_settings'];
        meta: {
            name: 'system_settings';
        };
    };
    findUnique<T extends system_settingsFindUniqueArgs>(args: Prisma.SelectSubset<T, system_settingsFindUniqueArgs<ExtArgs>>): Prisma.Prisma__system_settingsClient<runtime.Types.Result.GetResult<Prisma.$system_settingsPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findUniqueOrThrow<T extends system_settingsFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, system_settingsFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__system_settingsClient<runtime.Types.Result.GetResult<Prisma.$system_settingsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findFirst<T extends system_settingsFindFirstArgs>(args?: Prisma.SelectSubset<T, system_settingsFindFirstArgs<ExtArgs>>): Prisma.Prisma__system_settingsClient<runtime.Types.Result.GetResult<Prisma.$system_settingsPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findFirstOrThrow<T extends system_settingsFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, system_settingsFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__system_settingsClient<runtime.Types.Result.GetResult<Prisma.$system_settingsPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findMany<T extends system_settingsFindManyArgs>(args?: Prisma.SelectSubset<T, system_settingsFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$system_settingsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    create<T extends system_settingsCreateArgs>(args: Prisma.SelectSubset<T, system_settingsCreateArgs<ExtArgs>>): Prisma.Prisma__system_settingsClient<runtime.Types.Result.GetResult<Prisma.$system_settingsPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    createMany<T extends system_settingsCreateManyArgs>(args?: Prisma.SelectSubset<T, system_settingsCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    delete<T extends system_settingsDeleteArgs>(args: Prisma.SelectSubset<T, system_settingsDeleteArgs<ExtArgs>>): Prisma.Prisma__system_settingsClient<runtime.Types.Result.GetResult<Prisma.$system_settingsPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    update<T extends system_settingsUpdateArgs>(args: Prisma.SelectSubset<T, system_settingsUpdateArgs<ExtArgs>>): Prisma.Prisma__system_settingsClient<runtime.Types.Result.GetResult<Prisma.$system_settingsPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    deleteMany<T extends system_settingsDeleteManyArgs>(args?: Prisma.SelectSubset<T, system_settingsDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateMany<T extends system_settingsUpdateManyArgs>(args: Prisma.SelectSubset<T, system_settingsUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    upsert<T extends system_settingsUpsertArgs>(args: Prisma.SelectSubset<T, system_settingsUpsertArgs<ExtArgs>>): Prisma.Prisma__system_settingsClient<runtime.Types.Result.GetResult<Prisma.$system_settingsPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    count<T extends system_settingsCountArgs>(args?: Prisma.Subset<T, system_settingsCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], System_settingsCountAggregateOutputType> : number>;
    aggregate<T extends System_settingsAggregateArgs>(args: Prisma.Subset<T, System_settingsAggregateArgs>): Prisma.PrismaPromise<GetSystem_settingsAggregateType<T>>;
    groupBy<T extends system_settingsGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: system_settingsGroupByArgs['orderBy'];
    } : {
        orderBy?: system_settingsGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, system_settingsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetSystem_settingsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    readonly fields: system_settingsFieldRefs;
}
export interface Prisma__system_settingsClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): runtime.Types.Utils.JsPromise<TResult1 | TResult2>;
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): runtime.Types.Utils.JsPromise<T | TResult>;
    finally(onfinally?: (() => void) | undefined | null): runtime.Types.Utils.JsPromise<T>;
}
export interface system_settingsFieldRefs {
    readonly id: Prisma.FieldRef<"system_settings", 'BigInt'>;
    readonly key: Prisma.FieldRef<"system_settings", 'String'>;
    readonly value: Prisma.FieldRef<"system_settings", 'String'>;
    readonly type: Prisma.FieldRef<"system_settings", 'String'>;
    readonly group: Prisma.FieldRef<"system_settings", 'String'>;
    readonly description: Prisma.FieldRef<"system_settings", 'String'>;
    readonly created_at: Prisma.FieldRef<"system_settings", 'DateTime'>;
    readonly updated_at: Prisma.FieldRef<"system_settings", 'DateTime'>;
}
export type system_settingsFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.system_settingsSelect<ExtArgs> | null;
    omit?: Prisma.system_settingsOmit<ExtArgs> | null;
    where: Prisma.system_settingsWhereUniqueInput;
};
export type system_settingsFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.system_settingsSelect<ExtArgs> | null;
    omit?: Prisma.system_settingsOmit<ExtArgs> | null;
    where: Prisma.system_settingsWhereUniqueInput;
};
export type system_settingsFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.system_settingsSelect<ExtArgs> | null;
    omit?: Prisma.system_settingsOmit<ExtArgs> | null;
    where?: Prisma.system_settingsWhereInput;
    orderBy?: Prisma.system_settingsOrderByWithRelationInput | Prisma.system_settingsOrderByWithRelationInput[];
    cursor?: Prisma.system_settingsWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.System_settingsScalarFieldEnum | Prisma.System_settingsScalarFieldEnum[];
};
export type system_settingsFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.system_settingsSelect<ExtArgs> | null;
    omit?: Prisma.system_settingsOmit<ExtArgs> | null;
    where?: Prisma.system_settingsWhereInput;
    orderBy?: Prisma.system_settingsOrderByWithRelationInput | Prisma.system_settingsOrderByWithRelationInput[];
    cursor?: Prisma.system_settingsWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.System_settingsScalarFieldEnum | Prisma.System_settingsScalarFieldEnum[];
};
export type system_settingsFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.system_settingsSelect<ExtArgs> | null;
    omit?: Prisma.system_settingsOmit<ExtArgs> | null;
    where?: Prisma.system_settingsWhereInput;
    orderBy?: Prisma.system_settingsOrderByWithRelationInput | Prisma.system_settingsOrderByWithRelationInput[];
    cursor?: Prisma.system_settingsWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.System_settingsScalarFieldEnum | Prisma.System_settingsScalarFieldEnum[];
};
export type system_settingsCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.system_settingsSelect<ExtArgs> | null;
    omit?: Prisma.system_settingsOmit<ExtArgs> | null;
    data: Prisma.XOR<Prisma.system_settingsCreateInput, Prisma.system_settingsUncheckedCreateInput>;
};
export type system_settingsCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.system_settingsCreateManyInput | Prisma.system_settingsCreateManyInput[];
    skipDuplicates?: boolean;
};
export type system_settingsUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.system_settingsSelect<ExtArgs> | null;
    omit?: Prisma.system_settingsOmit<ExtArgs> | null;
    data: Prisma.XOR<Prisma.system_settingsUpdateInput, Prisma.system_settingsUncheckedUpdateInput>;
    where: Prisma.system_settingsWhereUniqueInput;
};
export type system_settingsUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.XOR<Prisma.system_settingsUpdateManyMutationInput, Prisma.system_settingsUncheckedUpdateManyInput>;
    where?: Prisma.system_settingsWhereInput;
    limit?: number;
};
export type system_settingsUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.system_settingsSelect<ExtArgs> | null;
    omit?: Prisma.system_settingsOmit<ExtArgs> | null;
    where: Prisma.system_settingsWhereUniqueInput;
    create: Prisma.XOR<Prisma.system_settingsCreateInput, Prisma.system_settingsUncheckedCreateInput>;
    update: Prisma.XOR<Prisma.system_settingsUpdateInput, Prisma.system_settingsUncheckedUpdateInput>;
};
export type system_settingsDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.system_settingsSelect<ExtArgs> | null;
    omit?: Prisma.system_settingsOmit<ExtArgs> | null;
    where: Prisma.system_settingsWhereUniqueInput;
};
export type system_settingsDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.system_settingsWhereInput;
    limit?: number;
};
export type system_settingsDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.system_settingsSelect<ExtArgs> | null;
    omit?: Prisma.system_settingsOmit<ExtArgs> | null;
};
export {};
