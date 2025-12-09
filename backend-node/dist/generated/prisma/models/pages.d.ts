import type * as runtime from "@prisma/client/runtime/client";
import type * as Prisma from "../internal/prismaNamespace.js";
export type pagesModel = runtime.Types.Result.DefaultSelection<Prisma.$pagesPayload>;
export type AggregatePages = {
    _count: PagesCountAggregateOutputType | null;
    _avg: PagesAvgAggregateOutputType | null;
    _sum: PagesSumAggregateOutputType | null;
    _min: PagesMinAggregateOutputType | null;
    _max: PagesMaxAggregateOutputType | null;
};
export type PagesAvgAggregateOutputType = {
    id: number | null;
};
export type PagesSumAggregateOutputType = {
    id: bigint | null;
};
export type PagesMinAggregateOutputType = {
    id: bigint | null;
    title: string | null;
    slug: string | null;
    content: string | null;
    custom_css: string | null;
    is_active: boolean | null;
    is_home: boolean | null;
    seo_title: string | null;
    seo_description: string | null;
    seo_keywords: string | null;
    created_at: Date | null;
    updated_at: Date | null;
};
export type PagesMaxAggregateOutputType = {
    id: bigint | null;
    title: string | null;
    slug: string | null;
    content: string | null;
    custom_css: string | null;
    is_active: boolean | null;
    is_home: boolean | null;
    seo_title: string | null;
    seo_description: string | null;
    seo_keywords: string | null;
    created_at: Date | null;
    updated_at: Date | null;
};
export type PagesCountAggregateOutputType = {
    id: number;
    title: number;
    slug: number;
    content: number;
    custom_css: number;
    is_active: number;
    is_home: number;
    seo_title: number;
    seo_description: number;
    seo_keywords: number;
    created_at: number;
    updated_at: number;
    _all: number;
};
export type PagesAvgAggregateInputType = {
    id?: true;
};
export type PagesSumAggregateInputType = {
    id?: true;
};
export type PagesMinAggregateInputType = {
    id?: true;
    title?: true;
    slug?: true;
    content?: true;
    custom_css?: true;
    is_active?: true;
    is_home?: true;
    seo_title?: true;
    seo_description?: true;
    seo_keywords?: true;
    created_at?: true;
    updated_at?: true;
};
export type PagesMaxAggregateInputType = {
    id?: true;
    title?: true;
    slug?: true;
    content?: true;
    custom_css?: true;
    is_active?: true;
    is_home?: true;
    seo_title?: true;
    seo_description?: true;
    seo_keywords?: true;
    created_at?: true;
    updated_at?: true;
};
export type PagesCountAggregateInputType = {
    id?: true;
    title?: true;
    slug?: true;
    content?: true;
    custom_css?: true;
    is_active?: true;
    is_home?: true;
    seo_title?: true;
    seo_description?: true;
    seo_keywords?: true;
    created_at?: true;
    updated_at?: true;
    _all?: true;
};
export type PagesAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.pagesWhereInput;
    orderBy?: Prisma.pagesOrderByWithRelationInput | Prisma.pagesOrderByWithRelationInput[];
    cursor?: Prisma.pagesWhereUniqueInput;
    take?: number;
    skip?: number;
    _count?: true | PagesCountAggregateInputType;
    _avg?: PagesAvgAggregateInputType;
    _sum?: PagesSumAggregateInputType;
    _min?: PagesMinAggregateInputType;
    _max?: PagesMaxAggregateInputType;
};
export type GetPagesAggregateType<T extends PagesAggregateArgs> = {
    [P in keyof T & keyof AggregatePages]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregatePages[P]> : Prisma.GetScalarType<T[P], AggregatePages[P]>;
};
export type pagesGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.pagesWhereInput;
    orderBy?: Prisma.pagesOrderByWithAggregationInput | Prisma.pagesOrderByWithAggregationInput[];
    by: Prisma.PagesScalarFieldEnum[] | Prisma.PagesScalarFieldEnum;
    having?: Prisma.pagesScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: PagesCountAggregateInputType | true;
    _avg?: PagesAvgAggregateInputType;
    _sum?: PagesSumAggregateInputType;
    _min?: PagesMinAggregateInputType;
    _max?: PagesMaxAggregateInputType;
};
export type PagesGroupByOutputType = {
    id: bigint;
    title: string;
    slug: string;
    content: string | null;
    custom_css: string | null;
    is_active: boolean;
    is_home: boolean;
    seo_title: string | null;
    seo_description: string | null;
    seo_keywords: string | null;
    created_at: Date | null;
    updated_at: Date | null;
    _count: PagesCountAggregateOutputType | null;
    _avg: PagesAvgAggregateOutputType | null;
    _sum: PagesSumAggregateOutputType | null;
    _min: PagesMinAggregateOutputType | null;
    _max: PagesMaxAggregateOutputType | null;
};
type GetPagesGroupByPayload<T extends pagesGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<PagesGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof PagesGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], PagesGroupByOutputType[P]> : Prisma.GetScalarType<T[P], PagesGroupByOutputType[P]>;
}>>;
export type pagesWhereInput = {
    AND?: Prisma.pagesWhereInput | Prisma.pagesWhereInput[];
    OR?: Prisma.pagesWhereInput[];
    NOT?: Prisma.pagesWhereInput | Prisma.pagesWhereInput[];
    id?: Prisma.BigIntFilter<"pages"> | bigint | number;
    title?: Prisma.StringFilter<"pages"> | string;
    slug?: Prisma.StringFilter<"pages"> | string;
    content?: Prisma.StringNullableFilter<"pages"> | string | null;
    custom_css?: Prisma.StringNullableFilter<"pages"> | string | null;
    is_active?: Prisma.BoolFilter<"pages"> | boolean;
    is_home?: Prisma.BoolFilter<"pages"> | boolean;
    seo_title?: Prisma.StringNullableFilter<"pages"> | string | null;
    seo_description?: Prisma.StringNullableFilter<"pages"> | string | null;
    seo_keywords?: Prisma.StringNullableFilter<"pages"> | string | null;
    created_at?: Prisma.DateTimeNullableFilter<"pages"> | Date | string | null;
    updated_at?: Prisma.DateTimeNullableFilter<"pages"> | Date | string | null;
};
export type pagesOrderByWithRelationInput = {
    id?: Prisma.SortOrder;
    title?: Prisma.SortOrder;
    slug?: Prisma.SortOrder;
    content?: Prisma.SortOrderInput | Prisma.SortOrder;
    custom_css?: Prisma.SortOrderInput | Prisma.SortOrder;
    is_active?: Prisma.SortOrder;
    is_home?: Prisma.SortOrder;
    seo_title?: Prisma.SortOrderInput | Prisma.SortOrder;
    seo_description?: Prisma.SortOrderInput | Prisma.SortOrder;
    seo_keywords?: Prisma.SortOrderInput | Prisma.SortOrder;
    created_at?: Prisma.SortOrderInput | Prisma.SortOrder;
    updated_at?: Prisma.SortOrderInput | Prisma.SortOrder;
    _relevance?: Prisma.pagesOrderByRelevanceInput;
};
export type pagesWhereUniqueInput = Prisma.AtLeast<{
    id?: bigint | number;
    slug?: string;
    AND?: Prisma.pagesWhereInput | Prisma.pagesWhereInput[];
    OR?: Prisma.pagesWhereInput[];
    NOT?: Prisma.pagesWhereInput | Prisma.pagesWhereInput[];
    title?: Prisma.StringFilter<"pages"> | string;
    content?: Prisma.StringNullableFilter<"pages"> | string | null;
    custom_css?: Prisma.StringNullableFilter<"pages"> | string | null;
    is_active?: Prisma.BoolFilter<"pages"> | boolean;
    is_home?: Prisma.BoolFilter<"pages"> | boolean;
    seo_title?: Prisma.StringNullableFilter<"pages"> | string | null;
    seo_description?: Prisma.StringNullableFilter<"pages"> | string | null;
    seo_keywords?: Prisma.StringNullableFilter<"pages"> | string | null;
    created_at?: Prisma.DateTimeNullableFilter<"pages"> | Date | string | null;
    updated_at?: Prisma.DateTimeNullableFilter<"pages"> | Date | string | null;
}, "id" | "slug">;
export type pagesOrderByWithAggregationInput = {
    id?: Prisma.SortOrder;
    title?: Prisma.SortOrder;
    slug?: Prisma.SortOrder;
    content?: Prisma.SortOrderInput | Prisma.SortOrder;
    custom_css?: Prisma.SortOrderInput | Prisma.SortOrder;
    is_active?: Prisma.SortOrder;
    is_home?: Prisma.SortOrder;
    seo_title?: Prisma.SortOrderInput | Prisma.SortOrder;
    seo_description?: Prisma.SortOrderInput | Prisma.SortOrder;
    seo_keywords?: Prisma.SortOrderInput | Prisma.SortOrder;
    created_at?: Prisma.SortOrderInput | Prisma.SortOrder;
    updated_at?: Prisma.SortOrderInput | Prisma.SortOrder;
    _count?: Prisma.pagesCountOrderByAggregateInput;
    _avg?: Prisma.pagesAvgOrderByAggregateInput;
    _max?: Prisma.pagesMaxOrderByAggregateInput;
    _min?: Prisma.pagesMinOrderByAggregateInput;
    _sum?: Prisma.pagesSumOrderByAggregateInput;
};
export type pagesScalarWhereWithAggregatesInput = {
    AND?: Prisma.pagesScalarWhereWithAggregatesInput | Prisma.pagesScalarWhereWithAggregatesInput[];
    OR?: Prisma.pagesScalarWhereWithAggregatesInput[];
    NOT?: Prisma.pagesScalarWhereWithAggregatesInput | Prisma.pagesScalarWhereWithAggregatesInput[];
    id?: Prisma.BigIntWithAggregatesFilter<"pages"> | bigint | number;
    title?: Prisma.StringWithAggregatesFilter<"pages"> | string;
    slug?: Prisma.StringWithAggregatesFilter<"pages"> | string;
    content?: Prisma.StringNullableWithAggregatesFilter<"pages"> | string | null;
    custom_css?: Prisma.StringNullableWithAggregatesFilter<"pages"> | string | null;
    is_active?: Prisma.BoolWithAggregatesFilter<"pages"> | boolean;
    is_home?: Prisma.BoolWithAggregatesFilter<"pages"> | boolean;
    seo_title?: Prisma.StringNullableWithAggregatesFilter<"pages"> | string | null;
    seo_description?: Prisma.StringNullableWithAggregatesFilter<"pages"> | string | null;
    seo_keywords?: Prisma.StringNullableWithAggregatesFilter<"pages"> | string | null;
    created_at?: Prisma.DateTimeNullableWithAggregatesFilter<"pages"> | Date | string | null;
    updated_at?: Prisma.DateTimeNullableWithAggregatesFilter<"pages"> | Date | string | null;
};
export type pagesCreateInput = {
    id?: bigint | number;
    title: string;
    slug: string;
    content?: string | null;
    custom_css?: string | null;
    is_active?: boolean;
    is_home?: boolean;
    seo_title?: string | null;
    seo_description?: string | null;
    seo_keywords?: string | null;
    created_at?: Date | string | null;
    updated_at?: Date | string | null;
};
export type pagesUncheckedCreateInput = {
    id?: bigint | number;
    title: string;
    slug: string;
    content?: string | null;
    custom_css?: string | null;
    is_active?: boolean;
    is_home?: boolean;
    seo_title?: string | null;
    seo_description?: string | null;
    seo_keywords?: string | null;
    created_at?: Date | string | null;
    updated_at?: Date | string | null;
};
export type pagesUpdateInput = {
    id?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    title?: Prisma.StringFieldUpdateOperationsInput | string;
    slug?: Prisma.StringFieldUpdateOperationsInput | string;
    content?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    custom_css?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    is_active?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    is_home?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    seo_title?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    seo_description?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    seo_keywords?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    created_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    updated_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
};
export type pagesUncheckedUpdateInput = {
    id?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    title?: Prisma.StringFieldUpdateOperationsInput | string;
    slug?: Prisma.StringFieldUpdateOperationsInput | string;
    content?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    custom_css?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    is_active?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    is_home?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    seo_title?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    seo_description?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    seo_keywords?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    created_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    updated_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
};
export type pagesCreateManyInput = {
    id?: bigint | number;
    title: string;
    slug: string;
    content?: string | null;
    custom_css?: string | null;
    is_active?: boolean;
    is_home?: boolean;
    seo_title?: string | null;
    seo_description?: string | null;
    seo_keywords?: string | null;
    created_at?: Date | string | null;
    updated_at?: Date | string | null;
};
export type pagesUpdateManyMutationInput = {
    id?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    title?: Prisma.StringFieldUpdateOperationsInput | string;
    slug?: Prisma.StringFieldUpdateOperationsInput | string;
    content?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    custom_css?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    is_active?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    is_home?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    seo_title?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    seo_description?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    seo_keywords?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    created_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    updated_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
};
export type pagesUncheckedUpdateManyInput = {
    id?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    title?: Prisma.StringFieldUpdateOperationsInput | string;
    slug?: Prisma.StringFieldUpdateOperationsInput | string;
    content?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    custom_css?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    is_active?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    is_home?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    seo_title?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    seo_description?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    seo_keywords?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    created_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    updated_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
};
export type pagesOrderByRelevanceInput = {
    fields: Prisma.pagesOrderByRelevanceFieldEnum | Prisma.pagesOrderByRelevanceFieldEnum[];
    sort: Prisma.SortOrder;
    search: string;
};
export type pagesCountOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    title?: Prisma.SortOrder;
    slug?: Prisma.SortOrder;
    content?: Prisma.SortOrder;
    custom_css?: Prisma.SortOrder;
    is_active?: Prisma.SortOrder;
    is_home?: Prisma.SortOrder;
    seo_title?: Prisma.SortOrder;
    seo_description?: Prisma.SortOrder;
    seo_keywords?: Prisma.SortOrder;
    created_at?: Prisma.SortOrder;
    updated_at?: Prisma.SortOrder;
};
export type pagesAvgOrderByAggregateInput = {
    id?: Prisma.SortOrder;
};
export type pagesMaxOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    title?: Prisma.SortOrder;
    slug?: Prisma.SortOrder;
    content?: Prisma.SortOrder;
    custom_css?: Prisma.SortOrder;
    is_active?: Prisma.SortOrder;
    is_home?: Prisma.SortOrder;
    seo_title?: Prisma.SortOrder;
    seo_description?: Prisma.SortOrder;
    seo_keywords?: Prisma.SortOrder;
    created_at?: Prisma.SortOrder;
    updated_at?: Prisma.SortOrder;
};
export type pagesMinOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    title?: Prisma.SortOrder;
    slug?: Prisma.SortOrder;
    content?: Prisma.SortOrder;
    custom_css?: Prisma.SortOrder;
    is_active?: Prisma.SortOrder;
    is_home?: Prisma.SortOrder;
    seo_title?: Prisma.SortOrder;
    seo_description?: Prisma.SortOrder;
    seo_keywords?: Prisma.SortOrder;
    created_at?: Prisma.SortOrder;
    updated_at?: Prisma.SortOrder;
};
export type pagesSumOrderByAggregateInput = {
    id?: Prisma.SortOrder;
};
export type pagesSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    title?: boolean;
    slug?: boolean;
    content?: boolean;
    custom_css?: boolean;
    is_active?: boolean;
    is_home?: boolean;
    seo_title?: boolean;
    seo_description?: boolean;
    seo_keywords?: boolean;
    created_at?: boolean;
    updated_at?: boolean;
}, ExtArgs["result"]["pages"]>;
export type pagesSelectScalar = {
    id?: boolean;
    title?: boolean;
    slug?: boolean;
    content?: boolean;
    custom_css?: boolean;
    is_active?: boolean;
    is_home?: boolean;
    seo_title?: boolean;
    seo_description?: boolean;
    seo_keywords?: boolean;
    created_at?: boolean;
    updated_at?: boolean;
};
export type pagesOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "title" | "slug" | "content" | "custom_css" | "is_active" | "is_home" | "seo_title" | "seo_description" | "seo_keywords" | "created_at" | "updated_at", ExtArgs["result"]["pages"]>;
export type $pagesPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "pages";
    objects: {};
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id: bigint;
        title: string;
        slug: string;
        content: string | null;
        custom_css: string | null;
        is_active: boolean;
        is_home: boolean;
        seo_title: string | null;
        seo_description: string | null;
        seo_keywords: string | null;
        created_at: Date | null;
        updated_at: Date | null;
    }, ExtArgs["result"]["pages"]>;
    composites: {};
};
export type pagesGetPayload<S extends boolean | null | undefined | pagesDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$pagesPayload, S>;
export type pagesCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<pagesFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: PagesCountAggregateInputType | true;
};
export interface pagesDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['pages'];
        meta: {
            name: 'pages';
        };
    };
    findUnique<T extends pagesFindUniqueArgs>(args: Prisma.SelectSubset<T, pagesFindUniqueArgs<ExtArgs>>): Prisma.Prisma__pagesClient<runtime.Types.Result.GetResult<Prisma.$pagesPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findUniqueOrThrow<T extends pagesFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, pagesFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__pagesClient<runtime.Types.Result.GetResult<Prisma.$pagesPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findFirst<T extends pagesFindFirstArgs>(args?: Prisma.SelectSubset<T, pagesFindFirstArgs<ExtArgs>>): Prisma.Prisma__pagesClient<runtime.Types.Result.GetResult<Prisma.$pagesPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findFirstOrThrow<T extends pagesFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, pagesFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__pagesClient<runtime.Types.Result.GetResult<Prisma.$pagesPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findMany<T extends pagesFindManyArgs>(args?: Prisma.SelectSubset<T, pagesFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$pagesPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    create<T extends pagesCreateArgs>(args: Prisma.SelectSubset<T, pagesCreateArgs<ExtArgs>>): Prisma.Prisma__pagesClient<runtime.Types.Result.GetResult<Prisma.$pagesPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    createMany<T extends pagesCreateManyArgs>(args?: Prisma.SelectSubset<T, pagesCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    delete<T extends pagesDeleteArgs>(args: Prisma.SelectSubset<T, pagesDeleteArgs<ExtArgs>>): Prisma.Prisma__pagesClient<runtime.Types.Result.GetResult<Prisma.$pagesPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    update<T extends pagesUpdateArgs>(args: Prisma.SelectSubset<T, pagesUpdateArgs<ExtArgs>>): Prisma.Prisma__pagesClient<runtime.Types.Result.GetResult<Prisma.$pagesPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    deleteMany<T extends pagesDeleteManyArgs>(args?: Prisma.SelectSubset<T, pagesDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateMany<T extends pagesUpdateManyArgs>(args: Prisma.SelectSubset<T, pagesUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    upsert<T extends pagesUpsertArgs>(args: Prisma.SelectSubset<T, pagesUpsertArgs<ExtArgs>>): Prisma.Prisma__pagesClient<runtime.Types.Result.GetResult<Prisma.$pagesPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    count<T extends pagesCountArgs>(args?: Prisma.Subset<T, pagesCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], PagesCountAggregateOutputType> : number>;
    aggregate<T extends PagesAggregateArgs>(args: Prisma.Subset<T, PagesAggregateArgs>): Prisma.PrismaPromise<GetPagesAggregateType<T>>;
    groupBy<T extends pagesGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: pagesGroupByArgs['orderBy'];
    } : {
        orderBy?: pagesGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, pagesGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPagesGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    readonly fields: pagesFieldRefs;
}
export interface Prisma__pagesClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): runtime.Types.Utils.JsPromise<TResult1 | TResult2>;
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): runtime.Types.Utils.JsPromise<T | TResult>;
    finally(onfinally?: (() => void) | undefined | null): runtime.Types.Utils.JsPromise<T>;
}
export interface pagesFieldRefs {
    readonly id: Prisma.FieldRef<"pages", 'BigInt'>;
    readonly title: Prisma.FieldRef<"pages", 'String'>;
    readonly slug: Prisma.FieldRef<"pages", 'String'>;
    readonly content: Prisma.FieldRef<"pages", 'String'>;
    readonly custom_css: Prisma.FieldRef<"pages", 'String'>;
    readonly is_active: Prisma.FieldRef<"pages", 'Boolean'>;
    readonly is_home: Prisma.FieldRef<"pages", 'Boolean'>;
    readonly seo_title: Prisma.FieldRef<"pages", 'String'>;
    readonly seo_description: Prisma.FieldRef<"pages", 'String'>;
    readonly seo_keywords: Prisma.FieldRef<"pages", 'String'>;
    readonly created_at: Prisma.FieldRef<"pages", 'DateTime'>;
    readonly updated_at: Prisma.FieldRef<"pages", 'DateTime'>;
}
export type pagesFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.pagesSelect<ExtArgs> | null;
    omit?: Prisma.pagesOmit<ExtArgs> | null;
    where: Prisma.pagesWhereUniqueInput;
};
export type pagesFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.pagesSelect<ExtArgs> | null;
    omit?: Prisma.pagesOmit<ExtArgs> | null;
    where: Prisma.pagesWhereUniqueInput;
};
export type pagesFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.pagesSelect<ExtArgs> | null;
    omit?: Prisma.pagesOmit<ExtArgs> | null;
    where?: Prisma.pagesWhereInput;
    orderBy?: Prisma.pagesOrderByWithRelationInput | Prisma.pagesOrderByWithRelationInput[];
    cursor?: Prisma.pagesWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.PagesScalarFieldEnum | Prisma.PagesScalarFieldEnum[];
};
export type pagesFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.pagesSelect<ExtArgs> | null;
    omit?: Prisma.pagesOmit<ExtArgs> | null;
    where?: Prisma.pagesWhereInput;
    orderBy?: Prisma.pagesOrderByWithRelationInput | Prisma.pagesOrderByWithRelationInput[];
    cursor?: Prisma.pagesWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.PagesScalarFieldEnum | Prisma.PagesScalarFieldEnum[];
};
export type pagesFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.pagesSelect<ExtArgs> | null;
    omit?: Prisma.pagesOmit<ExtArgs> | null;
    where?: Prisma.pagesWhereInput;
    orderBy?: Prisma.pagesOrderByWithRelationInput | Prisma.pagesOrderByWithRelationInput[];
    cursor?: Prisma.pagesWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.PagesScalarFieldEnum | Prisma.PagesScalarFieldEnum[];
};
export type pagesCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.pagesSelect<ExtArgs> | null;
    omit?: Prisma.pagesOmit<ExtArgs> | null;
    data: Prisma.XOR<Prisma.pagesCreateInput, Prisma.pagesUncheckedCreateInput>;
};
export type pagesCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.pagesCreateManyInput | Prisma.pagesCreateManyInput[];
    skipDuplicates?: boolean;
};
export type pagesUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.pagesSelect<ExtArgs> | null;
    omit?: Prisma.pagesOmit<ExtArgs> | null;
    data: Prisma.XOR<Prisma.pagesUpdateInput, Prisma.pagesUncheckedUpdateInput>;
    where: Prisma.pagesWhereUniqueInput;
};
export type pagesUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.XOR<Prisma.pagesUpdateManyMutationInput, Prisma.pagesUncheckedUpdateManyInput>;
    where?: Prisma.pagesWhereInput;
    limit?: number;
};
export type pagesUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.pagesSelect<ExtArgs> | null;
    omit?: Prisma.pagesOmit<ExtArgs> | null;
    where: Prisma.pagesWhereUniqueInput;
    create: Prisma.XOR<Prisma.pagesCreateInput, Prisma.pagesUncheckedCreateInput>;
    update: Prisma.XOR<Prisma.pagesUpdateInput, Prisma.pagesUncheckedUpdateInput>;
};
export type pagesDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.pagesSelect<ExtArgs> | null;
    omit?: Prisma.pagesOmit<ExtArgs> | null;
    where: Prisma.pagesWhereUniqueInput;
};
export type pagesDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.pagesWhereInput;
    limit?: number;
};
export type pagesDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.pagesSelect<ExtArgs> | null;
    omit?: Prisma.pagesOmit<ExtArgs> | null;
};
export {};
