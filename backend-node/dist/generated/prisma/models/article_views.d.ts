import type * as runtime from "@prisma/client/runtime/client";
import type * as Prisma from "../internal/prismaNamespace.js";
export type article_viewsModel = runtime.Types.Result.DefaultSelection<Prisma.$article_viewsPayload>;
export type AggregateArticle_views = {
    _count: Article_viewsCountAggregateOutputType | null;
    _avg: Article_viewsAvgAggregateOutputType | null;
    _sum: Article_viewsSumAggregateOutputType | null;
    _min: Article_viewsMinAggregateOutputType | null;
    _max: Article_viewsMaxAggregateOutputType | null;
};
export type Article_viewsAvgAggregateOutputType = {
    id: number | null;
    article_id: number | null;
    user_id: number | null;
};
export type Article_viewsSumAggregateOutputType = {
    id: bigint | null;
    article_id: bigint | null;
    user_id: bigint | null;
};
export type Article_viewsMinAggregateOutputType = {
    id: bigint | null;
    article_id: bigint | null;
    user_id: bigint | null;
    ip_address: string | null;
    user_agent: string | null;
    viewed_at: Date | null;
};
export type Article_viewsMaxAggregateOutputType = {
    id: bigint | null;
    article_id: bigint | null;
    user_id: bigint | null;
    ip_address: string | null;
    user_agent: string | null;
    viewed_at: Date | null;
};
export type Article_viewsCountAggregateOutputType = {
    id: number;
    article_id: number;
    user_id: number;
    ip_address: number;
    user_agent: number;
    viewed_at: number;
    _all: number;
};
export type Article_viewsAvgAggregateInputType = {
    id?: true;
    article_id?: true;
    user_id?: true;
};
export type Article_viewsSumAggregateInputType = {
    id?: true;
    article_id?: true;
    user_id?: true;
};
export type Article_viewsMinAggregateInputType = {
    id?: true;
    article_id?: true;
    user_id?: true;
    ip_address?: true;
    user_agent?: true;
    viewed_at?: true;
};
export type Article_viewsMaxAggregateInputType = {
    id?: true;
    article_id?: true;
    user_id?: true;
    ip_address?: true;
    user_agent?: true;
    viewed_at?: true;
};
export type Article_viewsCountAggregateInputType = {
    id?: true;
    article_id?: true;
    user_id?: true;
    ip_address?: true;
    user_agent?: true;
    viewed_at?: true;
    _all?: true;
};
export type Article_viewsAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.article_viewsWhereInput;
    orderBy?: Prisma.article_viewsOrderByWithRelationInput | Prisma.article_viewsOrderByWithRelationInput[];
    cursor?: Prisma.article_viewsWhereUniqueInput;
    take?: number;
    skip?: number;
    _count?: true | Article_viewsCountAggregateInputType;
    _avg?: Article_viewsAvgAggregateInputType;
    _sum?: Article_viewsSumAggregateInputType;
    _min?: Article_viewsMinAggregateInputType;
    _max?: Article_viewsMaxAggregateInputType;
};
export type GetArticle_viewsAggregateType<T extends Article_viewsAggregateArgs> = {
    [P in keyof T & keyof AggregateArticle_views]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateArticle_views[P]> : Prisma.GetScalarType<T[P], AggregateArticle_views[P]>;
};
export type article_viewsGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.article_viewsWhereInput;
    orderBy?: Prisma.article_viewsOrderByWithAggregationInput | Prisma.article_viewsOrderByWithAggregationInput[];
    by: Prisma.Article_viewsScalarFieldEnum[] | Prisma.Article_viewsScalarFieldEnum;
    having?: Prisma.article_viewsScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: Article_viewsCountAggregateInputType | true;
    _avg?: Article_viewsAvgAggregateInputType;
    _sum?: Article_viewsSumAggregateInputType;
    _min?: Article_viewsMinAggregateInputType;
    _max?: Article_viewsMaxAggregateInputType;
};
export type Article_viewsGroupByOutputType = {
    id: bigint;
    article_id: bigint;
    user_id: bigint | null;
    ip_address: string | null;
    user_agent: string | null;
    viewed_at: Date;
    _count: Article_viewsCountAggregateOutputType | null;
    _avg: Article_viewsAvgAggregateOutputType | null;
    _sum: Article_viewsSumAggregateOutputType | null;
    _min: Article_viewsMinAggregateOutputType | null;
    _max: Article_viewsMaxAggregateOutputType | null;
};
type GetArticle_viewsGroupByPayload<T extends article_viewsGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<Article_viewsGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof Article_viewsGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], Article_viewsGroupByOutputType[P]> : Prisma.GetScalarType<T[P], Article_viewsGroupByOutputType[P]>;
}>>;
export type article_viewsWhereInput = {
    AND?: Prisma.article_viewsWhereInput | Prisma.article_viewsWhereInput[];
    OR?: Prisma.article_viewsWhereInput[];
    NOT?: Prisma.article_viewsWhereInput | Prisma.article_viewsWhereInput[];
    id?: Prisma.BigIntFilter<"article_views"> | bigint | number;
    article_id?: Prisma.BigIntFilter<"article_views"> | bigint | number;
    user_id?: Prisma.BigIntNullableFilter<"article_views"> | bigint | number | null;
    ip_address?: Prisma.StringNullableFilter<"article_views"> | string | null;
    user_agent?: Prisma.StringNullableFilter<"article_views"> | string | null;
    viewed_at?: Prisma.DateTimeFilter<"article_views"> | Date | string;
    articles?: Prisma.XOR<Prisma.ArticlesScalarRelationFilter, Prisma.articlesWhereInput>;
    users?: Prisma.XOR<Prisma.UsersNullableScalarRelationFilter, Prisma.usersWhereInput> | null;
};
export type article_viewsOrderByWithRelationInput = {
    id?: Prisma.SortOrder;
    article_id?: Prisma.SortOrder;
    user_id?: Prisma.SortOrderInput | Prisma.SortOrder;
    ip_address?: Prisma.SortOrderInput | Prisma.SortOrder;
    user_agent?: Prisma.SortOrderInput | Prisma.SortOrder;
    viewed_at?: Prisma.SortOrder;
    articles?: Prisma.articlesOrderByWithRelationInput;
    users?: Prisma.usersOrderByWithRelationInput;
    _relevance?: Prisma.article_viewsOrderByRelevanceInput;
};
export type article_viewsWhereUniqueInput = Prisma.AtLeast<{
    id?: bigint | number;
    AND?: Prisma.article_viewsWhereInput | Prisma.article_viewsWhereInput[];
    OR?: Prisma.article_viewsWhereInput[];
    NOT?: Prisma.article_viewsWhereInput | Prisma.article_viewsWhereInput[];
    article_id?: Prisma.BigIntFilter<"article_views"> | bigint | number;
    user_id?: Prisma.BigIntNullableFilter<"article_views"> | bigint | number | null;
    ip_address?: Prisma.StringNullableFilter<"article_views"> | string | null;
    user_agent?: Prisma.StringNullableFilter<"article_views"> | string | null;
    viewed_at?: Prisma.DateTimeFilter<"article_views"> | Date | string;
    articles?: Prisma.XOR<Prisma.ArticlesScalarRelationFilter, Prisma.articlesWhereInput>;
    users?: Prisma.XOR<Prisma.UsersNullableScalarRelationFilter, Prisma.usersWhereInput> | null;
}, "id">;
export type article_viewsOrderByWithAggregationInput = {
    id?: Prisma.SortOrder;
    article_id?: Prisma.SortOrder;
    user_id?: Prisma.SortOrderInput | Prisma.SortOrder;
    ip_address?: Prisma.SortOrderInput | Prisma.SortOrder;
    user_agent?: Prisma.SortOrderInput | Prisma.SortOrder;
    viewed_at?: Prisma.SortOrder;
    _count?: Prisma.article_viewsCountOrderByAggregateInput;
    _avg?: Prisma.article_viewsAvgOrderByAggregateInput;
    _max?: Prisma.article_viewsMaxOrderByAggregateInput;
    _min?: Prisma.article_viewsMinOrderByAggregateInput;
    _sum?: Prisma.article_viewsSumOrderByAggregateInput;
};
export type article_viewsScalarWhereWithAggregatesInput = {
    AND?: Prisma.article_viewsScalarWhereWithAggregatesInput | Prisma.article_viewsScalarWhereWithAggregatesInput[];
    OR?: Prisma.article_viewsScalarWhereWithAggregatesInput[];
    NOT?: Prisma.article_viewsScalarWhereWithAggregatesInput | Prisma.article_viewsScalarWhereWithAggregatesInput[];
    id?: Prisma.BigIntWithAggregatesFilter<"article_views"> | bigint | number;
    article_id?: Prisma.BigIntWithAggregatesFilter<"article_views"> | bigint | number;
    user_id?: Prisma.BigIntNullableWithAggregatesFilter<"article_views"> | bigint | number | null;
    ip_address?: Prisma.StringNullableWithAggregatesFilter<"article_views"> | string | null;
    user_agent?: Prisma.StringNullableWithAggregatesFilter<"article_views"> | string | null;
    viewed_at?: Prisma.DateTimeWithAggregatesFilter<"article_views"> | Date | string;
};
export type article_viewsCreateInput = {
    id?: bigint | number;
    ip_address?: string | null;
    user_agent?: string | null;
    viewed_at: Date | string;
    articles: Prisma.articlesCreateNestedOneWithoutArticle_viewsInput;
    users?: Prisma.usersCreateNestedOneWithoutArticle_viewsInput;
};
export type article_viewsUncheckedCreateInput = {
    id?: bigint | number;
    article_id: bigint | number;
    user_id?: bigint | number | null;
    ip_address?: string | null;
    user_agent?: string | null;
    viewed_at: Date | string;
};
export type article_viewsUpdateInput = {
    id?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    ip_address?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    user_agent?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    viewed_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    articles?: Prisma.articlesUpdateOneRequiredWithoutArticle_viewsNestedInput;
    users?: Prisma.usersUpdateOneWithoutArticle_viewsNestedInput;
};
export type article_viewsUncheckedUpdateInput = {
    id?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    article_id?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    user_id?: Prisma.NullableBigIntFieldUpdateOperationsInput | bigint | number | null;
    ip_address?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    user_agent?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    viewed_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type article_viewsCreateManyInput = {
    id?: bigint | number;
    article_id: bigint | number;
    user_id?: bigint | number | null;
    ip_address?: string | null;
    user_agent?: string | null;
    viewed_at: Date | string;
};
export type article_viewsUpdateManyMutationInput = {
    id?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    ip_address?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    user_agent?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    viewed_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type article_viewsUncheckedUpdateManyInput = {
    id?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    article_id?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    user_id?: Prisma.NullableBigIntFieldUpdateOperationsInput | bigint | number | null;
    ip_address?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    user_agent?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    viewed_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type article_viewsOrderByRelevanceInput = {
    fields: Prisma.article_viewsOrderByRelevanceFieldEnum | Prisma.article_viewsOrderByRelevanceFieldEnum[];
    sort: Prisma.SortOrder;
    search: string;
};
export type article_viewsCountOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    article_id?: Prisma.SortOrder;
    user_id?: Prisma.SortOrder;
    ip_address?: Prisma.SortOrder;
    user_agent?: Prisma.SortOrder;
    viewed_at?: Prisma.SortOrder;
};
export type article_viewsAvgOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    article_id?: Prisma.SortOrder;
    user_id?: Prisma.SortOrder;
};
export type article_viewsMaxOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    article_id?: Prisma.SortOrder;
    user_id?: Prisma.SortOrder;
    ip_address?: Prisma.SortOrder;
    user_agent?: Prisma.SortOrder;
    viewed_at?: Prisma.SortOrder;
};
export type article_viewsMinOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    article_id?: Prisma.SortOrder;
    user_id?: Prisma.SortOrder;
    ip_address?: Prisma.SortOrder;
    user_agent?: Prisma.SortOrder;
    viewed_at?: Prisma.SortOrder;
};
export type article_viewsSumOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    article_id?: Prisma.SortOrder;
    user_id?: Prisma.SortOrder;
};
export type Article_viewsListRelationFilter = {
    every?: Prisma.article_viewsWhereInput;
    some?: Prisma.article_viewsWhereInput;
    none?: Prisma.article_viewsWhereInput;
};
export type article_viewsOrderByRelationAggregateInput = {
    _count?: Prisma.SortOrder;
};
export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string;
};
export type article_viewsCreateNestedManyWithoutArticlesInput = {
    create?: Prisma.XOR<Prisma.article_viewsCreateWithoutArticlesInput, Prisma.article_viewsUncheckedCreateWithoutArticlesInput> | Prisma.article_viewsCreateWithoutArticlesInput[] | Prisma.article_viewsUncheckedCreateWithoutArticlesInput[];
    connectOrCreate?: Prisma.article_viewsCreateOrConnectWithoutArticlesInput | Prisma.article_viewsCreateOrConnectWithoutArticlesInput[];
    createMany?: Prisma.article_viewsCreateManyArticlesInputEnvelope;
    connect?: Prisma.article_viewsWhereUniqueInput | Prisma.article_viewsWhereUniqueInput[];
};
export type article_viewsUncheckedCreateNestedManyWithoutArticlesInput = {
    create?: Prisma.XOR<Prisma.article_viewsCreateWithoutArticlesInput, Prisma.article_viewsUncheckedCreateWithoutArticlesInput> | Prisma.article_viewsCreateWithoutArticlesInput[] | Prisma.article_viewsUncheckedCreateWithoutArticlesInput[];
    connectOrCreate?: Prisma.article_viewsCreateOrConnectWithoutArticlesInput | Prisma.article_viewsCreateOrConnectWithoutArticlesInput[];
    createMany?: Prisma.article_viewsCreateManyArticlesInputEnvelope;
    connect?: Prisma.article_viewsWhereUniqueInput | Prisma.article_viewsWhereUniqueInput[];
};
export type article_viewsUpdateManyWithoutArticlesNestedInput = {
    create?: Prisma.XOR<Prisma.article_viewsCreateWithoutArticlesInput, Prisma.article_viewsUncheckedCreateWithoutArticlesInput> | Prisma.article_viewsCreateWithoutArticlesInput[] | Prisma.article_viewsUncheckedCreateWithoutArticlesInput[];
    connectOrCreate?: Prisma.article_viewsCreateOrConnectWithoutArticlesInput | Prisma.article_viewsCreateOrConnectWithoutArticlesInput[];
    upsert?: Prisma.article_viewsUpsertWithWhereUniqueWithoutArticlesInput | Prisma.article_viewsUpsertWithWhereUniqueWithoutArticlesInput[];
    createMany?: Prisma.article_viewsCreateManyArticlesInputEnvelope;
    set?: Prisma.article_viewsWhereUniqueInput | Prisma.article_viewsWhereUniqueInput[];
    disconnect?: Prisma.article_viewsWhereUniqueInput | Prisma.article_viewsWhereUniqueInput[];
    delete?: Prisma.article_viewsWhereUniqueInput | Prisma.article_viewsWhereUniqueInput[];
    connect?: Prisma.article_viewsWhereUniqueInput | Prisma.article_viewsWhereUniqueInput[];
    update?: Prisma.article_viewsUpdateWithWhereUniqueWithoutArticlesInput | Prisma.article_viewsUpdateWithWhereUniqueWithoutArticlesInput[];
    updateMany?: Prisma.article_viewsUpdateManyWithWhereWithoutArticlesInput | Prisma.article_viewsUpdateManyWithWhereWithoutArticlesInput[];
    deleteMany?: Prisma.article_viewsScalarWhereInput | Prisma.article_viewsScalarWhereInput[];
};
export type article_viewsUncheckedUpdateManyWithoutArticlesNestedInput = {
    create?: Prisma.XOR<Prisma.article_viewsCreateWithoutArticlesInput, Prisma.article_viewsUncheckedCreateWithoutArticlesInput> | Prisma.article_viewsCreateWithoutArticlesInput[] | Prisma.article_viewsUncheckedCreateWithoutArticlesInput[];
    connectOrCreate?: Prisma.article_viewsCreateOrConnectWithoutArticlesInput | Prisma.article_viewsCreateOrConnectWithoutArticlesInput[];
    upsert?: Prisma.article_viewsUpsertWithWhereUniqueWithoutArticlesInput | Prisma.article_viewsUpsertWithWhereUniqueWithoutArticlesInput[];
    createMany?: Prisma.article_viewsCreateManyArticlesInputEnvelope;
    set?: Prisma.article_viewsWhereUniqueInput | Prisma.article_viewsWhereUniqueInput[];
    disconnect?: Prisma.article_viewsWhereUniqueInput | Prisma.article_viewsWhereUniqueInput[];
    delete?: Prisma.article_viewsWhereUniqueInput | Prisma.article_viewsWhereUniqueInput[];
    connect?: Prisma.article_viewsWhereUniqueInput | Prisma.article_viewsWhereUniqueInput[];
    update?: Prisma.article_viewsUpdateWithWhereUniqueWithoutArticlesInput | Prisma.article_viewsUpdateWithWhereUniqueWithoutArticlesInput[];
    updateMany?: Prisma.article_viewsUpdateManyWithWhereWithoutArticlesInput | Prisma.article_viewsUpdateManyWithWhereWithoutArticlesInput[];
    deleteMany?: Prisma.article_viewsScalarWhereInput | Prisma.article_viewsScalarWhereInput[];
};
export type article_viewsCreateNestedManyWithoutUsersInput = {
    create?: Prisma.XOR<Prisma.article_viewsCreateWithoutUsersInput, Prisma.article_viewsUncheckedCreateWithoutUsersInput> | Prisma.article_viewsCreateWithoutUsersInput[] | Prisma.article_viewsUncheckedCreateWithoutUsersInput[];
    connectOrCreate?: Prisma.article_viewsCreateOrConnectWithoutUsersInput | Prisma.article_viewsCreateOrConnectWithoutUsersInput[];
    createMany?: Prisma.article_viewsCreateManyUsersInputEnvelope;
    connect?: Prisma.article_viewsWhereUniqueInput | Prisma.article_viewsWhereUniqueInput[];
};
export type article_viewsUncheckedCreateNestedManyWithoutUsersInput = {
    create?: Prisma.XOR<Prisma.article_viewsCreateWithoutUsersInput, Prisma.article_viewsUncheckedCreateWithoutUsersInput> | Prisma.article_viewsCreateWithoutUsersInput[] | Prisma.article_viewsUncheckedCreateWithoutUsersInput[];
    connectOrCreate?: Prisma.article_viewsCreateOrConnectWithoutUsersInput | Prisma.article_viewsCreateOrConnectWithoutUsersInput[];
    createMany?: Prisma.article_viewsCreateManyUsersInputEnvelope;
    connect?: Prisma.article_viewsWhereUniqueInput | Prisma.article_viewsWhereUniqueInput[];
};
export type article_viewsUpdateManyWithoutUsersNestedInput = {
    create?: Prisma.XOR<Prisma.article_viewsCreateWithoutUsersInput, Prisma.article_viewsUncheckedCreateWithoutUsersInput> | Prisma.article_viewsCreateWithoutUsersInput[] | Prisma.article_viewsUncheckedCreateWithoutUsersInput[];
    connectOrCreate?: Prisma.article_viewsCreateOrConnectWithoutUsersInput | Prisma.article_viewsCreateOrConnectWithoutUsersInput[];
    upsert?: Prisma.article_viewsUpsertWithWhereUniqueWithoutUsersInput | Prisma.article_viewsUpsertWithWhereUniqueWithoutUsersInput[];
    createMany?: Prisma.article_viewsCreateManyUsersInputEnvelope;
    set?: Prisma.article_viewsWhereUniqueInput | Prisma.article_viewsWhereUniqueInput[];
    disconnect?: Prisma.article_viewsWhereUniqueInput | Prisma.article_viewsWhereUniqueInput[];
    delete?: Prisma.article_viewsWhereUniqueInput | Prisma.article_viewsWhereUniqueInput[];
    connect?: Prisma.article_viewsWhereUniqueInput | Prisma.article_viewsWhereUniqueInput[];
    update?: Prisma.article_viewsUpdateWithWhereUniqueWithoutUsersInput | Prisma.article_viewsUpdateWithWhereUniqueWithoutUsersInput[];
    updateMany?: Prisma.article_viewsUpdateManyWithWhereWithoutUsersInput | Prisma.article_viewsUpdateManyWithWhereWithoutUsersInput[];
    deleteMany?: Prisma.article_viewsScalarWhereInput | Prisma.article_viewsScalarWhereInput[];
};
export type article_viewsUncheckedUpdateManyWithoutUsersNestedInput = {
    create?: Prisma.XOR<Prisma.article_viewsCreateWithoutUsersInput, Prisma.article_viewsUncheckedCreateWithoutUsersInput> | Prisma.article_viewsCreateWithoutUsersInput[] | Prisma.article_viewsUncheckedCreateWithoutUsersInput[];
    connectOrCreate?: Prisma.article_viewsCreateOrConnectWithoutUsersInput | Prisma.article_viewsCreateOrConnectWithoutUsersInput[];
    upsert?: Prisma.article_viewsUpsertWithWhereUniqueWithoutUsersInput | Prisma.article_viewsUpsertWithWhereUniqueWithoutUsersInput[];
    createMany?: Prisma.article_viewsCreateManyUsersInputEnvelope;
    set?: Prisma.article_viewsWhereUniqueInput | Prisma.article_viewsWhereUniqueInput[];
    disconnect?: Prisma.article_viewsWhereUniqueInput | Prisma.article_viewsWhereUniqueInput[];
    delete?: Prisma.article_viewsWhereUniqueInput | Prisma.article_viewsWhereUniqueInput[];
    connect?: Prisma.article_viewsWhereUniqueInput | Prisma.article_viewsWhereUniqueInput[];
    update?: Prisma.article_viewsUpdateWithWhereUniqueWithoutUsersInput | Prisma.article_viewsUpdateWithWhereUniqueWithoutUsersInput[];
    updateMany?: Prisma.article_viewsUpdateManyWithWhereWithoutUsersInput | Prisma.article_viewsUpdateManyWithWhereWithoutUsersInput[];
    deleteMany?: Prisma.article_viewsScalarWhereInput | Prisma.article_viewsScalarWhereInput[];
};
export type article_viewsCreateWithoutArticlesInput = {
    id?: bigint | number;
    ip_address?: string | null;
    user_agent?: string | null;
    viewed_at: Date | string;
    users?: Prisma.usersCreateNestedOneWithoutArticle_viewsInput;
};
export type article_viewsUncheckedCreateWithoutArticlesInput = {
    id?: bigint | number;
    user_id?: bigint | number | null;
    ip_address?: string | null;
    user_agent?: string | null;
    viewed_at: Date | string;
};
export type article_viewsCreateOrConnectWithoutArticlesInput = {
    where: Prisma.article_viewsWhereUniqueInput;
    create: Prisma.XOR<Prisma.article_viewsCreateWithoutArticlesInput, Prisma.article_viewsUncheckedCreateWithoutArticlesInput>;
};
export type article_viewsCreateManyArticlesInputEnvelope = {
    data: Prisma.article_viewsCreateManyArticlesInput | Prisma.article_viewsCreateManyArticlesInput[];
    skipDuplicates?: boolean;
};
export type article_viewsUpsertWithWhereUniqueWithoutArticlesInput = {
    where: Prisma.article_viewsWhereUniqueInput;
    update: Prisma.XOR<Prisma.article_viewsUpdateWithoutArticlesInput, Prisma.article_viewsUncheckedUpdateWithoutArticlesInput>;
    create: Prisma.XOR<Prisma.article_viewsCreateWithoutArticlesInput, Prisma.article_viewsUncheckedCreateWithoutArticlesInput>;
};
export type article_viewsUpdateWithWhereUniqueWithoutArticlesInput = {
    where: Prisma.article_viewsWhereUniqueInput;
    data: Prisma.XOR<Prisma.article_viewsUpdateWithoutArticlesInput, Prisma.article_viewsUncheckedUpdateWithoutArticlesInput>;
};
export type article_viewsUpdateManyWithWhereWithoutArticlesInput = {
    where: Prisma.article_viewsScalarWhereInput;
    data: Prisma.XOR<Prisma.article_viewsUpdateManyMutationInput, Prisma.article_viewsUncheckedUpdateManyWithoutArticlesInput>;
};
export type article_viewsScalarWhereInput = {
    AND?: Prisma.article_viewsScalarWhereInput | Prisma.article_viewsScalarWhereInput[];
    OR?: Prisma.article_viewsScalarWhereInput[];
    NOT?: Prisma.article_viewsScalarWhereInput | Prisma.article_viewsScalarWhereInput[];
    id?: Prisma.BigIntFilter<"article_views"> | bigint | number;
    article_id?: Prisma.BigIntFilter<"article_views"> | bigint | number;
    user_id?: Prisma.BigIntNullableFilter<"article_views"> | bigint | number | null;
    ip_address?: Prisma.StringNullableFilter<"article_views"> | string | null;
    user_agent?: Prisma.StringNullableFilter<"article_views"> | string | null;
    viewed_at?: Prisma.DateTimeFilter<"article_views"> | Date | string;
};
export type article_viewsCreateWithoutUsersInput = {
    id?: bigint | number;
    ip_address?: string | null;
    user_agent?: string | null;
    viewed_at: Date | string;
    articles: Prisma.articlesCreateNestedOneWithoutArticle_viewsInput;
};
export type article_viewsUncheckedCreateWithoutUsersInput = {
    id?: bigint | number;
    article_id: bigint | number;
    ip_address?: string | null;
    user_agent?: string | null;
    viewed_at: Date | string;
};
export type article_viewsCreateOrConnectWithoutUsersInput = {
    where: Prisma.article_viewsWhereUniqueInput;
    create: Prisma.XOR<Prisma.article_viewsCreateWithoutUsersInput, Prisma.article_viewsUncheckedCreateWithoutUsersInput>;
};
export type article_viewsCreateManyUsersInputEnvelope = {
    data: Prisma.article_viewsCreateManyUsersInput | Prisma.article_viewsCreateManyUsersInput[];
    skipDuplicates?: boolean;
};
export type article_viewsUpsertWithWhereUniqueWithoutUsersInput = {
    where: Prisma.article_viewsWhereUniqueInput;
    update: Prisma.XOR<Prisma.article_viewsUpdateWithoutUsersInput, Prisma.article_viewsUncheckedUpdateWithoutUsersInput>;
    create: Prisma.XOR<Prisma.article_viewsCreateWithoutUsersInput, Prisma.article_viewsUncheckedCreateWithoutUsersInput>;
};
export type article_viewsUpdateWithWhereUniqueWithoutUsersInput = {
    where: Prisma.article_viewsWhereUniqueInput;
    data: Prisma.XOR<Prisma.article_viewsUpdateWithoutUsersInput, Prisma.article_viewsUncheckedUpdateWithoutUsersInput>;
};
export type article_viewsUpdateManyWithWhereWithoutUsersInput = {
    where: Prisma.article_viewsScalarWhereInput;
    data: Prisma.XOR<Prisma.article_viewsUpdateManyMutationInput, Prisma.article_viewsUncheckedUpdateManyWithoutUsersInput>;
};
export type article_viewsCreateManyArticlesInput = {
    id?: bigint | number;
    user_id?: bigint | number | null;
    ip_address?: string | null;
    user_agent?: string | null;
    viewed_at: Date | string;
};
export type article_viewsUpdateWithoutArticlesInput = {
    id?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    ip_address?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    user_agent?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    viewed_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    users?: Prisma.usersUpdateOneWithoutArticle_viewsNestedInput;
};
export type article_viewsUncheckedUpdateWithoutArticlesInput = {
    id?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    user_id?: Prisma.NullableBigIntFieldUpdateOperationsInput | bigint | number | null;
    ip_address?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    user_agent?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    viewed_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type article_viewsUncheckedUpdateManyWithoutArticlesInput = {
    id?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    user_id?: Prisma.NullableBigIntFieldUpdateOperationsInput | bigint | number | null;
    ip_address?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    user_agent?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    viewed_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type article_viewsCreateManyUsersInput = {
    id?: bigint | number;
    article_id: bigint | number;
    ip_address?: string | null;
    user_agent?: string | null;
    viewed_at: Date | string;
};
export type article_viewsUpdateWithoutUsersInput = {
    id?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    ip_address?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    user_agent?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    viewed_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    articles?: Prisma.articlesUpdateOneRequiredWithoutArticle_viewsNestedInput;
};
export type article_viewsUncheckedUpdateWithoutUsersInput = {
    id?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    article_id?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    ip_address?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    user_agent?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    viewed_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type article_viewsUncheckedUpdateManyWithoutUsersInput = {
    id?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    article_id?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    ip_address?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    user_agent?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    viewed_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type article_viewsSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    article_id?: boolean;
    user_id?: boolean;
    ip_address?: boolean;
    user_agent?: boolean;
    viewed_at?: boolean;
    articles?: boolean | Prisma.articlesDefaultArgs<ExtArgs>;
    users?: boolean | Prisma.article_views$usersArgs<ExtArgs>;
}, ExtArgs["result"]["article_views"]>;
export type article_viewsSelectScalar = {
    id?: boolean;
    article_id?: boolean;
    user_id?: boolean;
    ip_address?: boolean;
    user_agent?: boolean;
    viewed_at?: boolean;
};
export type article_viewsOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "article_id" | "user_id" | "ip_address" | "user_agent" | "viewed_at", ExtArgs["result"]["article_views"]>;
export type article_viewsInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    articles?: boolean | Prisma.articlesDefaultArgs<ExtArgs>;
    users?: boolean | Prisma.article_views$usersArgs<ExtArgs>;
};
export type $article_viewsPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "article_views";
    objects: {
        articles: Prisma.$articlesPayload<ExtArgs>;
        users: Prisma.$usersPayload<ExtArgs> | null;
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id: bigint;
        article_id: bigint;
        user_id: bigint | null;
        ip_address: string | null;
        user_agent: string | null;
        viewed_at: Date;
    }, ExtArgs["result"]["article_views"]>;
    composites: {};
};
export type article_viewsGetPayload<S extends boolean | null | undefined | article_viewsDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$article_viewsPayload, S>;
export type article_viewsCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<article_viewsFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: Article_viewsCountAggregateInputType | true;
};
export interface article_viewsDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['article_views'];
        meta: {
            name: 'article_views';
        };
    };
    findUnique<T extends article_viewsFindUniqueArgs>(args: Prisma.SelectSubset<T, article_viewsFindUniqueArgs<ExtArgs>>): Prisma.Prisma__article_viewsClient<runtime.Types.Result.GetResult<Prisma.$article_viewsPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findUniqueOrThrow<T extends article_viewsFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, article_viewsFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__article_viewsClient<runtime.Types.Result.GetResult<Prisma.$article_viewsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findFirst<T extends article_viewsFindFirstArgs>(args?: Prisma.SelectSubset<T, article_viewsFindFirstArgs<ExtArgs>>): Prisma.Prisma__article_viewsClient<runtime.Types.Result.GetResult<Prisma.$article_viewsPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findFirstOrThrow<T extends article_viewsFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, article_viewsFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__article_viewsClient<runtime.Types.Result.GetResult<Prisma.$article_viewsPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findMany<T extends article_viewsFindManyArgs>(args?: Prisma.SelectSubset<T, article_viewsFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$article_viewsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    create<T extends article_viewsCreateArgs>(args: Prisma.SelectSubset<T, article_viewsCreateArgs<ExtArgs>>): Prisma.Prisma__article_viewsClient<runtime.Types.Result.GetResult<Prisma.$article_viewsPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    createMany<T extends article_viewsCreateManyArgs>(args?: Prisma.SelectSubset<T, article_viewsCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    delete<T extends article_viewsDeleteArgs>(args: Prisma.SelectSubset<T, article_viewsDeleteArgs<ExtArgs>>): Prisma.Prisma__article_viewsClient<runtime.Types.Result.GetResult<Prisma.$article_viewsPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    update<T extends article_viewsUpdateArgs>(args: Prisma.SelectSubset<T, article_viewsUpdateArgs<ExtArgs>>): Prisma.Prisma__article_viewsClient<runtime.Types.Result.GetResult<Prisma.$article_viewsPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    deleteMany<T extends article_viewsDeleteManyArgs>(args?: Prisma.SelectSubset<T, article_viewsDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateMany<T extends article_viewsUpdateManyArgs>(args: Prisma.SelectSubset<T, article_viewsUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    upsert<T extends article_viewsUpsertArgs>(args: Prisma.SelectSubset<T, article_viewsUpsertArgs<ExtArgs>>): Prisma.Prisma__article_viewsClient<runtime.Types.Result.GetResult<Prisma.$article_viewsPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    count<T extends article_viewsCountArgs>(args?: Prisma.Subset<T, article_viewsCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], Article_viewsCountAggregateOutputType> : number>;
    aggregate<T extends Article_viewsAggregateArgs>(args: Prisma.Subset<T, Article_viewsAggregateArgs>): Prisma.PrismaPromise<GetArticle_viewsAggregateType<T>>;
    groupBy<T extends article_viewsGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: article_viewsGroupByArgs['orderBy'];
    } : {
        orderBy?: article_viewsGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, article_viewsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetArticle_viewsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    readonly fields: article_viewsFieldRefs;
}
export interface Prisma__article_viewsClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    articles<T extends Prisma.articlesDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.articlesDefaultArgs<ExtArgs>>): Prisma.Prisma__articlesClient<runtime.Types.Result.GetResult<Prisma.$articlesPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    users<T extends Prisma.article_views$usersArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.article_views$usersArgs<ExtArgs>>): Prisma.Prisma__usersClient<runtime.Types.Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): runtime.Types.Utils.JsPromise<TResult1 | TResult2>;
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): runtime.Types.Utils.JsPromise<T | TResult>;
    finally(onfinally?: (() => void) | undefined | null): runtime.Types.Utils.JsPromise<T>;
}
export interface article_viewsFieldRefs {
    readonly id: Prisma.FieldRef<"article_views", 'BigInt'>;
    readonly article_id: Prisma.FieldRef<"article_views", 'BigInt'>;
    readonly user_id: Prisma.FieldRef<"article_views", 'BigInt'>;
    readonly ip_address: Prisma.FieldRef<"article_views", 'String'>;
    readonly user_agent: Prisma.FieldRef<"article_views", 'String'>;
    readonly viewed_at: Prisma.FieldRef<"article_views", 'DateTime'>;
}
export type article_viewsFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.article_viewsSelect<ExtArgs> | null;
    omit?: Prisma.article_viewsOmit<ExtArgs> | null;
    include?: Prisma.article_viewsInclude<ExtArgs> | null;
    where: Prisma.article_viewsWhereUniqueInput;
};
export type article_viewsFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.article_viewsSelect<ExtArgs> | null;
    omit?: Prisma.article_viewsOmit<ExtArgs> | null;
    include?: Prisma.article_viewsInclude<ExtArgs> | null;
    where: Prisma.article_viewsWhereUniqueInput;
};
export type article_viewsFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.article_viewsSelect<ExtArgs> | null;
    omit?: Prisma.article_viewsOmit<ExtArgs> | null;
    include?: Prisma.article_viewsInclude<ExtArgs> | null;
    where?: Prisma.article_viewsWhereInput;
    orderBy?: Prisma.article_viewsOrderByWithRelationInput | Prisma.article_viewsOrderByWithRelationInput[];
    cursor?: Prisma.article_viewsWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.Article_viewsScalarFieldEnum | Prisma.Article_viewsScalarFieldEnum[];
};
export type article_viewsFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.article_viewsSelect<ExtArgs> | null;
    omit?: Prisma.article_viewsOmit<ExtArgs> | null;
    include?: Prisma.article_viewsInclude<ExtArgs> | null;
    where?: Prisma.article_viewsWhereInput;
    orderBy?: Prisma.article_viewsOrderByWithRelationInput | Prisma.article_viewsOrderByWithRelationInput[];
    cursor?: Prisma.article_viewsWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.Article_viewsScalarFieldEnum | Prisma.Article_viewsScalarFieldEnum[];
};
export type article_viewsFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.article_viewsSelect<ExtArgs> | null;
    omit?: Prisma.article_viewsOmit<ExtArgs> | null;
    include?: Prisma.article_viewsInclude<ExtArgs> | null;
    where?: Prisma.article_viewsWhereInput;
    orderBy?: Prisma.article_viewsOrderByWithRelationInput | Prisma.article_viewsOrderByWithRelationInput[];
    cursor?: Prisma.article_viewsWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.Article_viewsScalarFieldEnum | Prisma.Article_viewsScalarFieldEnum[];
};
export type article_viewsCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.article_viewsSelect<ExtArgs> | null;
    omit?: Prisma.article_viewsOmit<ExtArgs> | null;
    include?: Prisma.article_viewsInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.article_viewsCreateInput, Prisma.article_viewsUncheckedCreateInput>;
};
export type article_viewsCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.article_viewsCreateManyInput | Prisma.article_viewsCreateManyInput[];
    skipDuplicates?: boolean;
};
export type article_viewsUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.article_viewsSelect<ExtArgs> | null;
    omit?: Prisma.article_viewsOmit<ExtArgs> | null;
    include?: Prisma.article_viewsInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.article_viewsUpdateInput, Prisma.article_viewsUncheckedUpdateInput>;
    where: Prisma.article_viewsWhereUniqueInput;
};
export type article_viewsUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.XOR<Prisma.article_viewsUpdateManyMutationInput, Prisma.article_viewsUncheckedUpdateManyInput>;
    where?: Prisma.article_viewsWhereInput;
    limit?: number;
};
export type article_viewsUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.article_viewsSelect<ExtArgs> | null;
    omit?: Prisma.article_viewsOmit<ExtArgs> | null;
    include?: Prisma.article_viewsInclude<ExtArgs> | null;
    where: Prisma.article_viewsWhereUniqueInput;
    create: Prisma.XOR<Prisma.article_viewsCreateInput, Prisma.article_viewsUncheckedCreateInput>;
    update: Prisma.XOR<Prisma.article_viewsUpdateInput, Prisma.article_viewsUncheckedUpdateInput>;
};
export type article_viewsDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.article_viewsSelect<ExtArgs> | null;
    omit?: Prisma.article_viewsOmit<ExtArgs> | null;
    include?: Prisma.article_viewsInclude<ExtArgs> | null;
    where: Prisma.article_viewsWhereUniqueInput;
};
export type article_viewsDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.article_viewsWhereInput;
    limit?: number;
};
export type article_views$usersArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.usersSelect<ExtArgs> | null;
    omit?: Prisma.usersOmit<ExtArgs> | null;
    include?: Prisma.usersInclude<ExtArgs> | null;
    where?: Prisma.usersWhereInput;
};
export type article_viewsDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.article_viewsSelect<ExtArgs> | null;
    omit?: Prisma.article_viewsOmit<ExtArgs> | null;
    include?: Prisma.article_viewsInclude<ExtArgs> | null;
};
export {};
