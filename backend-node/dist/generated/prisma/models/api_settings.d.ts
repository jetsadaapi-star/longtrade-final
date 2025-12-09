import type * as runtime from "@prisma/client/runtime/client";
import type * as Prisma from "../internal/prismaNamespace.js";
export type api_settingsModel = runtime.Types.Result.DefaultSelection<Prisma.$api_settingsPayload>;
export type AggregateApi_settings = {
    _count: Api_settingsCountAggregateOutputType | null;
    _avg: Api_settingsAvgAggregateOutputType | null;
    _sum: Api_settingsSumAggregateOutputType | null;
    _min: Api_settingsMinAggregateOutputType | null;
    _max: Api_settingsMaxAggregateOutputType | null;
};
export type Api_settingsAvgAggregateOutputType = {
    id: number | null;
};
export type Api_settingsSumAggregateOutputType = {
    id: bigint | null;
};
export type Api_settingsMinAggregateOutputType = {
    id: bigint | null;
    category: string | null;
    key: string | null;
    name: string | null;
    value: string | null;
    description: string | null;
    is_encrypted: boolean | null;
    is_active: boolean | null;
    created_at: Date | null;
    updated_at: Date | null;
};
export type Api_settingsMaxAggregateOutputType = {
    id: bigint | null;
    category: string | null;
    key: string | null;
    name: string | null;
    value: string | null;
    description: string | null;
    is_encrypted: boolean | null;
    is_active: boolean | null;
    created_at: Date | null;
    updated_at: Date | null;
};
export type Api_settingsCountAggregateOutputType = {
    id: number;
    category: number;
    key: number;
    name: number;
    value: number;
    description: number;
    is_encrypted: number;
    is_active: number;
    created_at: number;
    updated_at: number;
    _all: number;
};
export type Api_settingsAvgAggregateInputType = {
    id?: true;
};
export type Api_settingsSumAggregateInputType = {
    id?: true;
};
export type Api_settingsMinAggregateInputType = {
    id?: true;
    category?: true;
    key?: true;
    name?: true;
    value?: true;
    description?: true;
    is_encrypted?: true;
    is_active?: true;
    created_at?: true;
    updated_at?: true;
};
export type Api_settingsMaxAggregateInputType = {
    id?: true;
    category?: true;
    key?: true;
    name?: true;
    value?: true;
    description?: true;
    is_encrypted?: true;
    is_active?: true;
    created_at?: true;
    updated_at?: true;
};
export type Api_settingsCountAggregateInputType = {
    id?: true;
    category?: true;
    key?: true;
    name?: true;
    value?: true;
    description?: true;
    is_encrypted?: true;
    is_active?: true;
    created_at?: true;
    updated_at?: true;
    _all?: true;
};
export type Api_settingsAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.api_settingsWhereInput;
    orderBy?: Prisma.api_settingsOrderByWithRelationInput | Prisma.api_settingsOrderByWithRelationInput[];
    cursor?: Prisma.api_settingsWhereUniqueInput;
    take?: number;
    skip?: number;
    _count?: true | Api_settingsCountAggregateInputType;
    _avg?: Api_settingsAvgAggregateInputType;
    _sum?: Api_settingsSumAggregateInputType;
    _min?: Api_settingsMinAggregateInputType;
    _max?: Api_settingsMaxAggregateInputType;
};
export type GetApi_settingsAggregateType<T extends Api_settingsAggregateArgs> = {
    [P in keyof T & keyof AggregateApi_settings]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateApi_settings[P]> : Prisma.GetScalarType<T[P], AggregateApi_settings[P]>;
};
export type api_settingsGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.api_settingsWhereInput;
    orderBy?: Prisma.api_settingsOrderByWithAggregationInput | Prisma.api_settingsOrderByWithAggregationInput[];
    by: Prisma.Api_settingsScalarFieldEnum[] | Prisma.Api_settingsScalarFieldEnum;
    having?: Prisma.api_settingsScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: Api_settingsCountAggregateInputType | true;
    _avg?: Api_settingsAvgAggregateInputType;
    _sum?: Api_settingsSumAggregateInputType;
    _min?: Api_settingsMinAggregateInputType;
    _max?: Api_settingsMaxAggregateInputType;
};
export type Api_settingsGroupByOutputType = {
    id: bigint;
    category: string;
    key: string;
    name: string;
    value: string | null;
    description: string | null;
    is_encrypted: boolean;
    is_active: boolean;
    created_at: Date | null;
    updated_at: Date | null;
    _count: Api_settingsCountAggregateOutputType | null;
    _avg: Api_settingsAvgAggregateOutputType | null;
    _sum: Api_settingsSumAggregateOutputType | null;
    _min: Api_settingsMinAggregateOutputType | null;
    _max: Api_settingsMaxAggregateOutputType | null;
};
type GetApi_settingsGroupByPayload<T extends api_settingsGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<Api_settingsGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof Api_settingsGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], Api_settingsGroupByOutputType[P]> : Prisma.GetScalarType<T[P], Api_settingsGroupByOutputType[P]>;
}>>;
export type api_settingsWhereInput = {
    AND?: Prisma.api_settingsWhereInput | Prisma.api_settingsWhereInput[];
    OR?: Prisma.api_settingsWhereInput[];
    NOT?: Prisma.api_settingsWhereInput | Prisma.api_settingsWhereInput[];
    id?: Prisma.BigIntFilter<"api_settings"> | bigint | number;
    category?: Prisma.StringFilter<"api_settings"> | string;
    key?: Prisma.StringFilter<"api_settings"> | string;
    name?: Prisma.StringFilter<"api_settings"> | string;
    value?: Prisma.StringNullableFilter<"api_settings"> | string | null;
    description?: Prisma.StringNullableFilter<"api_settings"> | string | null;
    is_encrypted?: Prisma.BoolFilter<"api_settings"> | boolean;
    is_active?: Prisma.BoolFilter<"api_settings"> | boolean;
    created_at?: Prisma.DateTimeNullableFilter<"api_settings"> | Date | string | null;
    updated_at?: Prisma.DateTimeNullableFilter<"api_settings"> | Date | string | null;
};
export type api_settingsOrderByWithRelationInput = {
    id?: Prisma.SortOrder;
    category?: Prisma.SortOrder;
    key?: Prisma.SortOrder;
    name?: Prisma.SortOrder;
    value?: Prisma.SortOrderInput | Prisma.SortOrder;
    description?: Prisma.SortOrderInput | Prisma.SortOrder;
    is_encrypted?: Prisma.SortOrder;
    is_active?: Prisma.SortOrder;
    created_at?: Prisma.SortOrderInput | Prisma.SortOrder;
    updated_at?: Prisma.SortOrderInput | Prisma.SortOrder;
    _relevance?: Prisma.api_settingsOrderByRelevanceInput;
};
export type api_settingsWhereUniqueInput = Prisma.AtLeast<{
    id?: bigint | number;
    key?: string;
    AND?: Prisma.api_settingsWhereInput | Prisma.api_settingsWhereInput[];
    OR?: Prisma.api_settingsWhereInput[];
    NOT?: Prisma.api_settingsWhereInput | Prisma.api_settingsWhereInput[];
    category?: Prisma.StringFilter<"api_settings"> | string;
    name?: Prisma.StringFilter<"api_settings"> | string;
    value?: Prisma.StringNullableFilter<"api_settings"> | string | null;
    description?: Prisma.StringNullableFilter<"api_settings"> | string | null;
    is_encrypted?: Prisma.BoolFilter<"api_settings"> | boolean;
    is_active?: Prisma.BoolFilter<"api_settings"> | boolean;
    created_at?: Prisma.DateTimeNullableFilter<"api_settings"> | Date | string | null;
    updated_at?: Prisma.DateTimeNullableFilter<"api_settings"> | Date | string | null;
}, "id" | "key">;
export type api_settingsOrderByWithAggregationInput = {
    id?: Prisma.SortOrder;
    category?: Prisma.SortOrder;
    key?: Prisma.SortOrder;
    name?: Prisma.SortOrder;
    value?: Prisma.SortOrderInput | Prisma.SortOrder;
    description?: Prisma.SortOrderInput | Prisma.SortOrder;
    is_encrypted?: Prisma.SortOrder;
    is_active?: Prisma.SortOrder;
    created_at?: Prisma.SortOrderInput | Prisma.SortOrder;
    updated_at?: Prisma.SortOrderInput | Prisma.SortOrder;
    _count?: Prisma.api_settingsCountOrderByAggregateInput;
    _avg?: Prisma.api_settingsAvgOrderByAggregateInput;
    _max?: Prisma.api_settingsMaxOrderByAggregateInput;
    _min?: Prisma.api_settingsMinOrderByAggregateInput;
    _sum?: Prisma.api_settingsSumOrderByAggregateInput;
};
export type api_settingsScalarWhereWithAggregatesInput = {
    AND?: Prisma.api_settingsScalarWhereWithAggregatesInput | Prisma.api_settingsScalarWhereWithAggregatesInput[];
    OR?: Prisma.api_settingsScalarWhereWithAggregatesInput[];
    NOT?: Prisma.api_settingsScalarWhereWithAggregatesInput | Prisma.api_settingsScalarWhereWithAggregatesInput[];
    id?: Prisma.BigIntWithAggregatesFilter<"api_settings"> | bigint | number;
    category?: Prisma.StringWithAggregatesFilter<"api_settings"> | string;
    key?: Prisma.StringWithAggregatesFilter<"api_settings"> | string;
    name?: Prisma.StringWithAggregatesFilter<"api_settings"> | string;
    value?: Prisma.StringNullableWithAggregatesFilter<"api_settings"> | string | null;
    description?: Prisma.StringNullableWithAggregatesFilter<"api_settings"> | string | null;
    is_encrypted?: Prisma.BoolWithAggregatesFilter<"api_settings"> | boolean;
    is_active?: Prisma.BoolWithAggregatesFilter<"api_settings"> | boolean;
    created_at?: Prisma.DateTimeNullableWithAggregatesFilter<"api_settings"> | Date | string | null;
    updated_at?: Prisma.DateTimeNullableWithAggregatesFilter<"api_settings"> | Date | string | null;
};
export type api_settingsCreateInput = {
    id?: bigint | number;
    category: string;
    key: string;
    name: string;
    value?: string | null;
    description?: string | null;
    is_encrypted?: boolean;
    is_active?: boolean;
    created_at?: Date | string | null;
    updated_at?: Date | string | null;
};
export type api_settingsUncheckedCreateInput = {
    id?: bigint | number;
    category: string;
    key: string;
    name: string;
    value?: string | null;
    description?: string | null;
    is_encrypted?: boolean;
    is_active?: boolean;
    created_at?: Date | string | null;
    updated_at?: Date | string | null;
};
export type api_settingsUpdateInput = {
    id?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    category?: Prisma.StringFieldUpdateOperationsInput | string;
    key?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    value?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    description?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    is_encrypted?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    is_active?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    created_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    updated_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
};
export type api_settingsUncheckedUpdateInput = {
    id?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    category?: Prisma.StringFieldUpdateOperationsInput | string;
    key?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    value?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    description?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    is_encrypted?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    is_active?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    created_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    updated_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
};
export type api_settingsCreateManyInput = {
    id?: bigint | number;
    category: string;
    key: string;
    name: string;
    value?: string | null;
    description?: string | null;
    is_encrypted?: boolean;
    is_active?: boolean;
    created_at?: Date | string | null;
    updated_at?: Date | string | null;
};
export type api_settingsUpdateManyMutationInput = {
    id?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    category?: Prisma.StringFieldUpdateOperationsInput | string;
    key?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    value?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    description?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    is_encrypted?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    is_active?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    created_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    updated_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
};
export type api_settingsUncheckedUpdateManyInput = {
    id?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    category?: Prisma.StringFieldUpdateOperationsInput | string;
    key?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    value?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    description?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    is_encrypted?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    is_active?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    created_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    updated_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
};
export type api_settingsOrderByRelevanceInput = {
    fields: Prisma.api_settingsOrderByRelevanceFieldEnum | Prisma.api_settingsOrderByRelevanceFieldEnum[];
    sort: Prisma.SortOrder;
    search: string;
};
export type api_settingsCountOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    category?: Prisma.SortOrder;
    key?: Prisma.SortOrder;
    name?: Prisma.SortOrder;
    value?: Prisma.SortOrder;
    description?: Prisma.SortOrder;
    is_encrypted?: Prisma.SortOrder;
    is_active?: Prisma.SortOrder;
    created_at?: Prisma.SortOrder;
    updated_at?: Prisma.SortOrder;
};
export type api_settingsAvgOrderByAggregateInput = {
    id?: Prisma.SortOrder;
};
export type api_settingsMaxOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    category?: Prisma.SortOrder;
    key?: Prisma.SortOrder;
    name?: Prisma.SortOrder;
    value?: Prisma.SortOrder;
    description?: Prisma.SortOrder;
    is_encrypted?: Prisma.SortOrder;
    is_active?: Prisma.SortOrder;
    created_at?: Prisma.SortOrder;
    updated_at?: Prisma.SortOrder;
};
export type api_settingsMinOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    category?: Prisma.SortOrder;
    key?: Prisma.SortOrder;
    name?: Prisma.SortOrder;
    value?: Prisma.SortOrder;
    description?: Prisma.SortOrder;
    is_encrypted?: Prisma.SortOrder;
    is_active?: Prisma.SortOrder;
    created_at?: Prisma.SortOrder;
    updated_at?: Prisma.SortOrder;
};
export type api_settingsSumOrderByAggregateInput = {
    id?: Prisma.SortOrder;
};
export type BoolFieldUpdateOperationsInput = {
    set?: boolean;
};
export type api_settingsSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    category?: boolean;
    key?: boolean;
    name?: boolean;
    value?: boolean;
    description?: boolean;
    is_encrypted?: boolean;
    is_active?: boolean;
    created_at?: boolean;
    updated_at?: boolean;
}, ExtArgs["result"]["api_settings"]>;
export type api_settingsSelectScalar = {
    id?: boolean;
    category?: boolean;
    key?: boolean;
    name?: boolean;
    value?: boolean;
    description?: boolean;
    is_encrypted?: boolean;
    is_active?: boolean;
    created_at?: boolean;
    updated_at?: boolean;
};
export type api_settingsOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "category" | "key" | "name" | "value" | "description" | "is_encrypted" | "is_active" | "created_at" | "updated_at", ExtArgs["result"]["api_settings"]>;
export type $api_settingsPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "api_settings";
    objects: {};
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id: bigint;
        category: string;
        key: string;
        name: string;
        value: string | null;
        description: string | null;
        is_encrypted: boolean;
        is_active: boolean;
        created_at: Date | null;
        updated_at: Date | null;
    }, ExtArgs["result"]["api_settings"]>;
    composites: {};
};
export type api_settingsGetPayload<S extends boolean | null | undefined | api_settingsDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$api_settingsPayload, S>;
export type api_settingsCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<api_settingsFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: Api_settingsCountAggregateInputType | true;
};
export interface api_settingsDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['api_settings'];
        meta: {
            name: 'api_settings';
        };
    };
    findUnique<T extends api_settingsFindUniqueArgs>(args: Prisma.SelectSubset<T, api_settingsFindUniqueArgs<ExtArgs>>): Prisma.Prisma__api_settingsClient<runtime.Types.Result.GetResult<Prisma.$api_settingsPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findUniqueOrThrow<T extends api_settingsFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, api_settingsFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__api_settingsClient<runtime.Types.Result.GetResult<Prisma.$api_settingsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findFirst<T extends api_settingsFindFirstArgs>(args?: Prisma.SelectSubset<T, api_settingsFindFirstArgs<ExtArgs>>): Prisma.Prisma__api_settingsClient<runtime.Types.Result.GetResult<Prisma.$api_settingsPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findFirstOrThrow<T extends api_settingsFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, api_settingsFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__api_settingsClient<runtime.Types.Result.GetResult<Prisma.$api_settingsPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findMany<T extends api_settingsFindManyArgs>(args?: Prisma.SelectSubset<T, api_settingsFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$api_settingsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    create<T extends api_settingsCreateArgs>(args: Prisma.SelectSubset<T, api_settingsCreateArgs<ExtArgs>>): Prisma.Prisma__api_settingsClient<runtime.Types.Result.GetResult<Prisma.$api_settingsPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    createMany<T extends api_settingsCreateManyArgs>(args?: Prisma.SelectSubset<T, api_settingsCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    delete<T extends api_settingsDeleteArgs>(args: Prisma.SelectSubset<T, api_settingsDeleteArgs<ExtArgs>>): Prisma.Prisma__api_settingsClient<runtime.Types.Result.GetResult<Prisma.$api_settingsPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    update<T extends api_settingsUpdateArgs>(args: Prisma.SelectSubset<T, api_settingsUpdateArgs<ExtArgs>>): Prisma.Prisma__api_settingsClient<runtime.Types.Result.GetResult<Prisma.$api_settingsPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    deleteMany<T extends api_settingsDeleteManyArgs>(args?: Prisma.SelectSubset<T, api_settingsDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateMany<T extends api_settingsUpdateManyArgs>(args: Prisma.SelectSubset<T, api_settingsUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    upsert<T extends api_settingsUpsertArgs>(args: Prisma.SelectSubset<T, api_settingsUpsertArgs<ExtArgs>>): Prisma.Prisma__api_settingsClient<runtime.Types.Result.GetResult<Prisma.$api_settingsPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    count<T extends api_settingsCountArgs>(args?: Prisma.Subset<T, api_settingsCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], Api_settingsCountAggregateOutputType> : number>;
    aggregate<T extends Api_settingsAggregateArgs>(args: Prisma.Subset<T, Api_settingsAggregateArgs>): Prisma.PrismaPromise<GetApi_settingsAggregateType<T>>;
    groupBy<T extends api_settingsGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: api_settingsGroupByArgs['orderBy'];
    } : {
        orderBy?: api_settingsGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, api_settingsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetApi_settingsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    readonly fields: api_settingsFieldRefs;
}
export interface Prisma__api_settingsClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): runtime.Types.Utils.JsPromise<TResult1 | TResult2>;
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): runtime.Types.Utils.JsPromise<T | TResult>;
    finally(onfinally?: (() => void) | undefined | null): runtime.Types.Utils.JsPromise<T>;
}
export interface api_settingsFieldRefs {
    readonly id: Prisma.FieldRef<"api_settings", 'BigInt'>;
    readonly category: Prisma.FieldRef<"api_settings", 'String'>;
    readonly key: Prisma.FieldRef<"api_settings", 'String'>;
    readonly name: Prisma.FieldRef<"api_settings", 'String'>;
    readonly value: Prisma.FieldRef<"api_settings", 'String'>;
    readonly description: Prisma.FieldRef<"api_settings", 'String'>;
    readonly is_encrypted: Prisma.FieldRef<"api_settings", 'Boolean'>;
    readonly is_active: Prisma.FieldRef<"api_settings", 'Boolean'>;
    readonly created_at: Prisma.FieldRef<"api_settings", 'DateTime'>;
    readonly updated_at: Prisma.FieldRef<"api_settings", 'DateTime'>;
}
export type api_settingsFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.api_settingsSelect<ExtArgs> | null;
    omit?: Prisma.api_settingsOmit<ExtArgs> | null;
    where: Prisma.api_settingsWhereUniqueInput;
};
export type api_settingsFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.api_settingsSelect<ExtArgs> | null;
    omit?: Prisma.api_settingsOmit<ExtArgs> | null;
    where: Prisma.api_settingsWhereUniqueInput;
};
export type api_settingsFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.api_settingsSelect<ExtArgs> | null;
    omit?: Prisma.api_settingsOmit<ExtArgs> | null;
    where?: Prisma.api_settingsWhereInput;
    orderBy?: Prisma.api_settingsOrderByWithRelationInput | Prisma.api_settingsOrderByWithRelationInput[];
    cursor?: Prisma.api_settingsWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.Api_settingsScalarFieldEnum | Prisma.Api_settingsScalarFieldEnum[];
};
export type api_settingsFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.api_settingsSelect<ExtArgs> | null;
    omit?: Prisma.api_settingsOmit<ExtArgs> | null;
    where?: Prisma.api_settingsWhereInput;
    orderBy?: Prisma.api_settingsOrderByWithRelationInput | Prisma.api_settingsOrderByWithRelationInput[];
    cursor?: Prisma.api_settingsWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.Api_settingsScalarFieldEnum | Prisma.Api_settingsScalarFieldEnum[];
};
export type api_settingsFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.api_settingsSelect<ExtArgs> | null;
    omit?: Prisma.api_settingsOmit<ExtArgs> | null;
    where?: Prisma.api_settingsWhereInput;
    orderBy?: Prisma.api_settingsOrderByWithRelationInput | Prisma.api_settingsOrderByWithRelationInput[];
    cursor?: Prisma.api_settingsWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.Api_settingsScalarFieldEnum | Prisma.Api_settingsScalarFieldEnum[];
};
export type api_settingsCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.api_settingsSelect<ExtArgs> | null;
    omit?: Prisma.api_settingsOmit<ExtArgs> | null;
    data: Prisma.XOR<Prisma.api_settingsCreateInput, Prisma.api_settingsUncheckedCreateInput>;
};
export type api_settingsCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.api_settingsCreateManyInput | Prisma.api_settingsCreateManyInput[];
    skipDuplicates?: boolean;
};
export type api_settingsUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.api_settingsSelect<ExtArgs> | null;
    omit?: Prisma.api_settingsOmit<ExtArgs> | null;
    data: Prisma.XOR<Prisma.api_settingsUpdateInput, Prisma.api_settingsUncheckedUpdateInput>;
    where: Prisma.api_settingsWhereUniqueInput;
};
export type api_settingsUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.XOR<Prisma.api_settingsUpdateManyMutationInput, Prisma.api_settingsUncheckedUpdateManyInput>;
    where?: Prisma.api_settingsWhereInput;
    limit?: number;
};
export type api_settingsUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.api_settingsSelect<ExtArgs> | null;
    omit?: Prisma.api_settingsOmit<ExtArgs> | null;
    where: Prisma.api_settingsWhereUniqueInput;
    create: Prisma.XOR<Prisma.api_settingsCreateInput, Prisma.api_settingsUncheckedCreateInput>;
    update: Prisma.XOR<Prisma.api_settingsUpdateInput, Prisma.api_settingsUncheckedUpdateInput>;
};
export type api_settingsDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.api_settingsSelect<ExtArgs> | null;
    omit?: Prisma.api_settingsOmit<ExtArgs> | null;
    where: Prisma.api_settingsWhereUniqueInput;
};
export type api_settingsDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.api_settingsWhereInput;
    limit?: number;
};
export type api_settingsDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.api_settingsSelect<ExtArgs> | null;
    omit?: Prisma.api_settingsOmit<ExtArgs> | null;
};
export {};
