import type * as runtime from "@prisma/client/runtime/client";
import type * as Prisma from "../internal/prismaNamespace.js";
export type categoriesModel = runtime.Types.Result.DefaultSelection<Prisma.$categoriesPayload>;
export type AggregateCategories = {
    _count: CategoriesCountAggregateOutputType | null;
    _avg: CategoriesAvgAggregateOutputType | null;
    _sum: CategoriesSumAggregateOutputType | null;
    _min: CategoriesMinAggregateOutputType | null;
    _max: CategoriesMaxAggregateOutputType | null;
};
export type CategoriesAvgAggregateOutputType = {
    id: number | null;
    order: number | null;
};
export type CategoriesSumAggregateOutputType = {
    id: bigint | null;
    order: number | null;
};
export type CategoriesMinAggregateOutputType = {
    id: bigint | null;
    name: string | null;
    slug: string | null;
    description: string | null;
    type: string | null;
    icon: string | null;
    color: string | null;
    order: number | null;
    is_active: boolean | null;
    created_at: Date | null;
    updated_at: Date | null;
};
export type CategoriesMaxAggregateOutputType = {
    id: bigint | null;
    name: string | null;
    slug: string | null;
    description: string | null;
    type: string | null;
    icon: string | null;
    color: string | null;
    order: number | null;
    is_active: boolean | null;
    created_at: Date | null;
    updated_at: Date | null;
};
export type CategoriesCountAggregateOutputType = {
    id: number;
    name: number;
    slug: number;
    description: number;
    type: number;
    icon: number;
    color: number;
    order: number;
    is_active: number;
    created_at: number;
    updated_at: number;
    _all: number;
};
export type CategoriesAvgAggregateInputType = {
    id?: true;
    order?: true;
};
export type CategoriesSumAggregateInputType = {
    id?: true;
    order?: true;
};
export type CategoriesMinAggregateInputType = {
    id?: true;
    name?: true;
    slug?: true;
    description?: true;
    type?: true;
    icon?: true;
    color?: true;
    order?: true;
    is_active?: true;
    created_at?: true;
    updated_at?: true;
};
export type CategoriesMaxAggregateInputType = {
    id?: true;
    name?: true;
    slug?: true;
    description?: true;
    type?: true;
    icon?: true;
    color?: true;
    order?: true;
    is_active?: true;
    created_at?: true;
    updated_at?: true;
};
export type CategoriesCountAggregateInputType = {
    id?: true;
    name?: true;
    slug?: true;
    description?: true;
    type?: true;
    icon?: true;
    color?: true;
    order?: true;
    is_active?: true;
    created_at?: true;
    updated_at?: true;
    _all?: true;
};
export type CategoriesAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.categoriesWhereInput;
    orderBy?: Prisma.categoriesOrderByWithRelationInput | Prisma.categoriesOrderByWithRelationInput[];
    cursor?: Prisma.categoriesWhereUniqueInput;
    take?: number;
    skip?: number;
    _count?: true | CategoriesCountAggregateInputType;
    _avg?: CategoriesAvgAggregateInputType;
    _sum?: CategoriesSumAggregateInputType;
    _min?: CategoriesMinAggregateInputType;
    _max?: CategoriesMaxAggregateInputType;
};
export type GetCategoriesAggregateType<T extends CategoriesAggregateArgs> = {
    [P in keyof T & keyof AggregateCategories]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateCategories[P]> : Prisma.GetScalarType<T[P], AggregateCategories[P]>;
};
export type categoriesGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.categoriesWhereInput;
    orderBy?: Prisma.categoriesOrderByWithAggregationInput | Prisma.categoriesOrderByWithAggregationInput[];
    by: Prisma.CategoriesScalarFieldEnum[] | Prisma.CategoriesScalarFieldEnum;
    having?: Prisma.categoriesScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: CategoriesCountAggregateInputType | true;
    _avg?: CategoriesAvgAggregateInputType;
    _sum?: CategoriesSumAggregateInputType;
    _min?: CategoriesMinAggregateInputType;
    _max?: CategoriesMaxAggregateInputType;
};
export type CategoriesGroupByOutputType = {
    id: bigint;
    name: string;
    slug: string;
    description: string | null;
    type: string;
    icon: string | null;
    color: string | null;
    order: number;
    is_active: boolean;
    created_at: Date | null;
    updated_at: Date | null;
    _count: CategoriesCountAggregateOutputType | null;
    _avg: CategoriesAvgAggregateOutputType | null;
    _sum: CategoriesSumAggregateOutputType | null;
    _min: CategoriesMinAggregateOutputType | null;
    _max: CategoriesMaxAggregateOutputType | null;
};
type GetCategoriesGroupByPayload<T extends categoriesGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<CategoriesGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof CategoriesGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], CategoriesGroupByOutputType[P]> : Prisma.GetScalarType<T[P], CategoriesGroupByOutputType[P]>;
}>>;
export type categoriesWhereInput = {
    AND?: Prisma.categoriesWhereInput | Prisma.categoriesWhereInput[];
    OR?: Prisma.categoriesWhereInput[];
    NOT?: Prisma.categoriesWhereInput | Prisma.categoriesWhereInput[];
    id?: Prisma.BigIntFilter<"categories"> | bigint | number;
    name?: Prisma.StringFilter<"categories"> | string;
    slug?: Prisma.StringFilter<"categories"> | string;
    description?: Prisma.StringNullableFilter<"categories"> | string | null;
    type?: Prisma.StringFilter<"categories"> | string;
    icon?: Prisma.StringNullableFilter<"categories"> | string | null;
    color?: Prisma.StringNullableFilter<"categories"> | string | null;
    order?: Prisma.IntFilter<"categories"> | number;
    is_active?: Prisma.BoolFilter<"categories"> | boolean;
    created_at?: Prisma.DateTimeNullableFilter<"categories"> | Date | string | null;
    updated_at?: Prisma.DateTimeNullableFilter<"categories"> | Date | string | null;
    articles?: Prisma.ArticlesListRelationFilter;
    courses?: Prisma.CoursesListRelationFilter;
    ebooks?: Prisma.EbooksListRelationFilter;
    expert_advisors?: Prisma.Expert_advisorsListRelationFilter;
    indicators?: Prisma.IndicatorsListRelationFilter;
};
export type categoriesOrderByWithRelationInput = {
    id?: Prisma.SortOrder;
    name?: Prisma.SortOrder;
    slug?: Prisma.SortOrder;
    description?: Prisma.SortOrderInput | Prisma.SortOrder;
    type?: Prisma.SortOrder;
    icon?: Prisma.SortOrderInput | Prisma.SortOrder;
    color?: Prisma.SortOrderInput | Prisma.SortOrder;
    order?: Prisma.SortOrder;
    is_active?: Prisma.SortOrder;
    created_at?: Prisma.SortOrderInput | Prisma.SortOrder;
    updated_at?: Prisma.SortOrderInput | Prisma.SortOrder;
    articles?: Prisma.articlesOrderByRelationAggregateInput;
    courses?: Prisma.coursesOrderByRelationAggregateInput;
    ebooks?: Prisma.ebooksOrderByRelationAggregateInput;
    expert_advisors?: Prisma.expert_advisorsOrderByRelationAggregateInput;
    indicators?: Prisma.indicatorsOrderByRelationAggregateInput;
    _relevance?: Prisma.categoriesOrderByRelevanceInput;
};
export type categoriesWhereUniqueInput = Prisma.AtLeast<{
    id?: bigint | number;
    slug?: string;
    AND?: Prisma.categoriesWhereInput | Prisma.categoriesWhereInput[];
    OR?: Prisma.categoriesWhereInput[];
    NOT?: Prisma.categoriesWhereInput | Prisma.categoriesWhereInput[];
    name?: Prisma.StringFilter<"categories"> | string;
    description?: Prisma.StringNullableFilter<"categories"> | string | null;
    type?: Prisma.StringFilter<"categories"> | string;
    icon?: Prisma.StringNullableFilter<"categories"> | string | null;
    color?: Prisma.StringNullableFilter<"categories"> | string | null;
    order?: Prisma.IntFilter<"categories"> | number;
    is_active?: Prisma.BoolFilter<"categories"> | boolean;
    created_at?: Prisma.DateTimeNullableFilter<"categories"> | Date | string | null;
    updated_at?: Prisma.DateTimeNullableFilter<"categories"> | Date | string | null;
    articles?: Prisma.ArticlesListRelationFilter;
    courses?: Prisma.CoursesListRelationFilter;
    ebooks?: Prisma.EbooksListRelationFilter;
    expert_advisors?: Prisma.Expert_advisorsListRelationFilter;
    indicators?: Prisma.IndicatorsListRelationFilter;
}, "id" | "slug">;
export type categoriesOrderByWithAggregationInput = {
    id?: Prisma.SortOrder;
    name?: Prisma.SortOrder;
    slug?: Prisma.SortOrder;
    description?: Prisma.SortOrderInput | Prisma.SortOrder;
    type?: Prisma.SortOrder;
    icon?: Prisma.SortOrderInput | Prisma.SortOrder;
    color?: Prisma.SortOrderInput | Prisma.SortOrder;
    order?: Prisma.SortOrder;
    is_active?: Prisma.SortOrder;
    created_at?: Prisma.SortOrderInput | Prisma.SortOrder;
    updated_at?: Prisma.SortOrderInput | Prisma.SortOrder;
    _count?: Prisma.categoriesCountOrderByAggregateInput;
    _avg?: Prisma.categoriesAvgOrderByAggregateInput;
    _max?: Prisma.categoriesMaxOrderByAggregateInput;
    _min?: Prisma.categoriesMinOrderByAggregateInput;
    _sum?: Prisma.categoriesSumOrderByAggregateInput;
};
export type categoriesScalarWhereWithAggregatesInput = {
    AND?: Prisma.categoriesScalarWhereWithAggregatesInput | Prisma.categoriesScalarWhereWithAggregatesInput[];
    OR?: Prisma.categoriesScalarWhereWithAggregatesInput[];
    NOT?: Prisma.categoriesScalarWhereWithAggregatesInput | Prisma.categoriesScalarWhereWithAggregatesInput[];
    id?: Prisma.BigIntWithAggregatesFilter<"categories"> | bigint | number;
    name?: Prisma.StringWithAggregatesFilter<"categories"> | string;
    slug?: Prisma.StringWithAggregatesFilter<"categories"> | string;
    description?: Prisma.StringNullableWithAggregatesFilter<"categories"> | string | null;
    type?: Prisma.StringWithAggregatesFilter<"categories"> | string;
    icon?: Prisma.StringNullableWithAggregatesFilter<"categories"> | string | null;
    color?: Prisma.StringNullableWithAggregatesFilter<"categories"> | string | null;
    order?: Prisma.IntWithAggregatesFilter<"categories"> | number;
    is_active?: Prisma.BoolWithAggregatesFilter<"categories"> | boolean;
    created_at?: Prisma.DateTimeNullableWithAggregatesFilter<"categories"> | Date | string | null;
    updated_at?: Prisma.DateTimeNullableWithAggregatesFilter<"categories"> | Date | string | null;
};
export type categoriesCreateInput = {
    id?: bigint | number;
    name: string;
    slug: string;
    description?: string | null;
    type?: string;
    icon?: string | null;
    color?: string | null;
    order?: number;
    is_active?: boolean;
    created_at?: Date | string | null;
    updated_at?: Date | string | null;
    articles?: Prisma.articlesCreateNestedManyWithoutCategoriesInput;
    courses?: Prisma.coursesCreateNestedManyWithoutCategoriesInput;
    ebooks?: Prisma.ebooksCreateNestedManyWithoutCategoriesInput;
    expert_advisors?: Prisma.expert_advisorsCreateNestedManyWithoutCategoriesInput;
    indicators?: Prisma.indicatorsCreateNestedManyWithoutCategoriesInput;
};
export type categoriesUncheckedCreateInput = {
    id?: bigint | number;
    name: string;
    slug: string;
    description?: string | null;
    type?: string;
    icon?: string | null;
    color?: string | null;
    order?: number;
    is_active?: boolean;
    created_at?: Date | string | null;
    updated_at?: Date | string | null;
    articles?: Prisma.articlesUncheckedCreateNestedManyWithoutCategoriesInput;
    courses?: Prisma.coursesUncheckedCreateNestedManyWithoutCategoriesInput;
    ebooks?: Prisma.ebooksUncheckedCreateNestedManyWithoutCategoriesInput;
    expert_advisors?: Prisma.expert_advisorsUncheckedCreateNestedManyWithoutCategoriesInput;
    indicators?: Prisma.indicatorsUncheckedCreateNestedManyWithoutCategoriesInput;
};
export type categoriesUpdateInput = {
    id?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    slug?: Prisma.StringFieldUpdateOperationsInput | string;
    description?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    type?: Prisma.StringFieldUpdateOperationsInput | string;
    icon?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    color?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    order?: Prisma.IntFieldUpdateOperationsInput | number;
    is_active?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    created_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    updated_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    articles?: Prisma.articlesUpdateManyWithoutCategoriesNestedInput;
    courses?: Prisma.coursesUpdateManyWithoutCategoriesNestedInput;
    ebooks?: Prisma.ebooksUpdateManyWithoutCategoriesNestedInput;
    expert_advisors?: Prisma.expert_advisorsUpdateManyWithoutCategoriesNestedInput;
    indicators?: Prisma.indicatorsUpdateManyWithoutCategoriesNestedInput;
};
export type categoriesUncheckedUpdateInput = {
    id?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    slug?: Prisma.StringFieldUpdateOperationsInput | string;
    description?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    type?: Prisma.StringFieldUpdateOperationsInput | string;
    icon?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    color?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    order?: Prisma.IntFieldUpdateOperationsInput | number;
    is_active?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    created_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    updated_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    articles?: Prisma.articlesUncheckedUpdateManyWithoutCategoriesNestedInput;
    courses?: Prisma.coursesUncheckedUpdateManyWithoutCategoriesNestedInput;
    ebooks?: Prisma.ebooksUncheckedUpdateManyWithoutCategoriesNestedInput;
    expert_advisors?: Prisma.expert_advisorsUncheckedUpdateManyWithoutCategoriesNestedInput;
    indicators?: Prisma.indicatorsUncheckedUpdateManyWithoutCategoriesNestedInput;
};
export type categoriesCreateManyInput = {
    id?: bigint | number;
    name: string;
    slug: string;
    description?: string | null;
    type?: string;
    icon?: string | null;
    color?: string | null;
    order?: number;
    is_active?: boolean;
    created_at?: Date | string | null;
    updated_at?: Date | string | null;
};
export type categoriesUpdateManyMutationInput = {
    id?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    slug?: Prisma.StringFieldUpdateOperationsInput | string;
    description?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    type?: Prisma.StringFieldUpdateOperationsInput | string;
    icon?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    color?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    order?: Prisma.IntFieldUpdateOperationsInput | number;
    is_active?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    created_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    updated_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
};
export type categoriesUncheckedUpdateManyInput = {
    id?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    slug?: Prisma.StringFieldUpdateOperationsInput | string;
    description?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    type?: Prisma.StringFieldUpdateOperationsInput | string;
    icon?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    color?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    order?: Prisma.IntFieldUpdateOperationsInput | number;
    is_active?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    created_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    updated_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
};
export type CategoriesNullableScalarRelationFilter = {
    is?: Prisma.categoriesWhereInput | null;
    isNot?: Prisma.categoriesWhereInput | null;
};
export type categoriesOrderByRelevanceInput = {
    fields: Prisma.categoriesOrderByRelevanceFieldEnum | Prisma.categoriesOrderByRelevanceFieldEnum[];
    sort: Prisma.SortOrder;
    search: string;
};
export type categoriesCountOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    name?: Prisma.SortOrder;
    slug?: Prisma.SortOrder;
    description?: Prisma.SortOrder;
    type?: Prisma.SortOrder;
    icon?: Prisma.SortOrder;
    color?: Prisma.SortOrder;
    order?: Prisma.SortOrder;
    is_active?: Prisma.SortOrder;
    created_at?: Prisma.SortOrder;
    updated_at?: Prisma.SortOrder;
};
export type categoriesAvgOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    order?: Prisma.SortOrder;
};
export type categoriesMaxOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    name?: Prisma.SortOrder;
    slug?: Prisma.SortOrder;
    description?: Prisma.SortOrder;
    type?: Prisma.SortOrder;
    icon?: Prisma.SortOrder;
    color?: Prisma.SortOrder;
    order?: Prisma.SortOrder;
    is_active?: Prisma.SortOrder;
    created_at?: Prisma.SortOrder;
    updated_at?: Prisma.SortOrder;
};
export type categoriesMinOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    name?: Prisma.SortOrder;
    slug?: Prisma.SortOrder;
    description?: Prisma.SortOrder;
    type?: Prisma.SortOrder;
    icon?: Prisma.SortOrder;
    color?: Prisma.SortOrder;
    order?: Prisma.SortOrder;
    is_active?: Prisma.SortOrder;
    created_at?: Prisma.SortOrder;
    updated_at?: Prisma.SortOrder;
};
export type categoriesSumOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    order?: Prisma.SortOrder;
};
export type categoriesCreateNestedOneWithoutArticlesInput = {
    create?: Prisma.XOR<Prisma.categoriesCreateWithoutArticlesInput, Prisma.categoriesUncheckedCreateWithoutArticlesInput>;
    connectOrCreate?: Prisma.categoriesCreateOrConnectWithoutArticlesInput;
    connect?: Prisma.categoriesWhereUniqueInput;
};
export type categoriesUpdateOneWithoutArticlesNestedInput = {
    create?: Prisma.XOR<Prisma.categoriesCreateWithoutArticlesInput, Prisma.categoriesUncheckedCreateWithoutArticlesInput>;
    connectOrCreate?: Prisma.categoriesCreateOrConnectWithoutArticlesInput;
    upsert?: Prisma.categoriesUpsertWithoutArticlesInput;
    disconnect?: Prisma.categoriesWhereInput | boolean;
    delete?: Prisma.categoriesWhereInput | boolean;
    connect?: Prisma.categoriesWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.categoriesUpdateToOneWithWhereWithoutArticlesInput, Prisma.categoriesUpdateWithoutArticlesInput>, Prisma.categoriesUncheckedUpdateWithoutArticlesInput>;
};
export type categoriesCreateNestedOneWithoutCoursesInput = {
    create?: Prisma.XOR<Prisma.categoriesCreateWithoutCoursesInput, Prisma.categoriesUncheckedCreateWithoutCoursesInput>;
    connectOrCreate?: Prisma.categoriesCreateOrConnectWithoutCoursesInput;
    connect?: Prisma.categoriesWhereUniqueInput;
};
export type categoriesUpdateOneWithoutCoursesNestedInput = {
    create?: Prisma.XOR<Prisma.categoriesCreateWithoutCoursesInput, Prisma.categoriesUncheckedCreateWithoutCoursesInput>;
    connectOrCreate?: Prisma.categoriesCreateOrConnectWithoutCoursesInput;
    upsert?: Prisma.categoriesUpsertWithoutCoursesInput;
    disconnect?: Prisma.categoriesWhereInput | boolean;
    delete?: Prisma.categoriesWhereInput | boolean;
    connect?: Prisma.categoriesWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.categoriesUpdateToOneWithWhereWithoutCoursesInput, Prisma.categoriesUpdateWithoutCoursesInput>, Prisma.categoriesUncheckedUpdateWithoutCoursesInput>;
};
export type categoriesCreateNestedOneWithoutEbooksInput = {
    create?: Prisma.XOR<Prisma.categoriesCreateWithoutEbooksInput, Prisma.categoriesUncheckedCreateWithoutEbooksInput>;
    connectOrCreate?: Prisma.categoriesCreateOrConnectWithoutEbooksInput;
    connect?: Prisma.categoriesWhereUniqueInput;
};
export type categoriesUpdateOneWithoutEbooksNestedInput = {
    create?: Prisma.XOR<Prisma.categoriesCreateWithoutEbooksInput, Prisma.categoriesUncheckedCreateWithoutEbooksInput>;
    connectOrCreate?: Prisma.categoriesCreateOrConnectWithoutEbooksInput;
    upsert?: Prisma.categoriesUpsertWithoutEbooksInput;
    disconnect?: Prisma.categoriesWhereInput | boolean;
    delete?: Prisma.categoriesWhereInput | boolean;
    connect?: Prisma.categoriesWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.categoriesUpdateToOneWithWhereWithoutEbooksInput, Prisma.categoriesUpdateWithoutEbooksInput>, Prisma.categoriesUncheckedUpdateWithoutEbooksInput>;
};
export type categoriesCreateNestedOneWithoutExpert_advisorsInput = {
    create?: Prisma.XOR<Prisma.categoriesCreateWithoutExpert_advisorsInput, Prisma.categoriesUncheckedCreateWithoutExpert_advisorsInput>;
    connectOrCreate?: Prisma.categoriesCreateOrConnectWithoutExpert_advisorsInput;
    connect?: Prisma.categoriesWhereUniqueInput;
};
export type categoriesUpdateOneWithoutExpert_advisorsNestedInput = {
    create?: Prisma.XOR<Prisma.categoriesCreateWithoutExpert_advisorsInput, Prisma.categoriesUncheckedCreateWithoutExpert_advisorsInput>;
    connectOrCreate?: Prisma.categoriesCreateOrConnectWithoutExpert_advisorsInput;
    upsert?: Prisma.categoriesUpsertWithoutExpert_advisorsInput;
    disconnect?: Prisma.categoriesWhereInput | boolean;
    delete?: Prisma.categoriesWhereInput | boolean;
    connect?: Prisma.categoriesWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.categoriesUpdateToOneWithWhereWithoutExpert_advisorsInput, Prisma.categoriesUpdateWithoutExpert_advisorsInput>, Prisma.categoriesUncheckedUpdateWithoutExpert_advisorsInput>;
};
export type categoriesCreateNestedOneWithoutIndicatorsInput = {
    create?: Prisma.XOR<Prisma.categoriesCreateWithoutIndicatorsInput, Prisma.categoriesUncheckedCreateWithoutIndicatorsInput>;
    connectOrCreate?: Prisma.categoriesCreateOrConnectWithoutIndicatorsInput;
    connect?: Prisma.categoriesWhereUniqueInput;
};
export type categoriesUpdateOneWithoutIndicatorsNestedInput = {
    create?: Prisma.XOR<Prisma.categoriesCreateWithoutIndicatorsInput, Prisma.categoriesUncheckedCreateWithoutIndicatorsInput>;
    connectOrCreate?: Prisma.categoriesCreateOrConnectWithoutIndicatorsInput;
    upsert?: Prisma.categoriesUpsertWithoutIndicatorsInput;
    disconnect?: Prisma.categoriesWhereInput | boolean;
    delete?: Prisma.categoriesWhereInput | boolean;
    connect?: Prisma.categoriesWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.categoriesUpdateToOneWithWhereWithoutIndicatorsInput, Prisma.categoriesUpdateWithoutIndicatorsInput>, Prisma.categoriesUncheckedUpdateWithoutIndicatorsInput>;
};
export type categoriesCreateWithoutArticlesInput = {
    id?: bigint | number;
    name: string;
    slug: string;
    description?: string | null;
    type?: string;
    icon?: string | null;
    color?: string | null;
    order?: number;
    is_active?: boolean;
    created_at?: Date | string | null;
    updated_at?: Date | string | null;
    courses?: Prisma.coursesCreateNestedManyWithoutCategoriesInput;
    ebooks?: Prisma.ebooksCreateNestedManyWithoutCategoriesInput;
    expert_advisors?: Prisma.expert_advisorsCreateNestedManyWithoutCategoriesInput;
    indicators?: Prisma.indicatorsCreateNestedManyWithoutCategoriesInput;
};
export type categoriesUncheckedCreateWithoutArticlesInput = {
    id?: bigint | number;
    name: string;
    slug: string;
    description?: string | null;
    type?: string;
    icon?: string | null;
    color?: string | null;
    order?: number;
    is_active?: boolean;
    created_at?: Date | string | null;
    updated_at?: Date | string | null;
    courses?: Prisma.coursesUncheckedCreateNestedManyWithoutCategoriesInput;
    ebooks?: Prisma.ebooksUncheckedCreateNestedManyWithoutCategoriesInput;
    expert_advisors?: Prisma.expert_advisorsUncheckedCreateNestedManyWithoutCategoriesInput;
    indicators?: Prisma.indicatorsUncheckedCreateNestedManyWithoutCategoriesInput;
};
export type categoriesCreateOrConnectWithoutArticlesInput = {
    where: Prisma.categoriesWhereUniqueInput;
    create: Prisma.XOR<Prisma.categoriesCreateWithoutArticlesInput, Prisma.categoriesUncheckedCreateWithoutArticlesInput>;
};
export type categoriesUpsertWithoutArticlesInput = {
    update: Prisma.XOR<Prisma.categoriesUpdateWithoutArticlesInput, Prisma.categoriesUncheckedUpdateWithoutArticlesInput>;
    create: Prisma.XOR<Prisma.categoriesCreateWithoutArticlesInput, Prisma.categoriesUncheckedCreateWithoutArticlesInput>;
    where?: Prisma.categoriesWhereInput;
};
export type categoriesUpdateToOneWithWhereWithoutArticlesInput = {
    where?: Prisma.categoriesWhereInput;
    data: Prisma.XOR<Prisma.categoriesUpdateWithoutArticlesInput, Prisma.categoriesUncheckedUpdateWithoutArticlesInput>;
};
export type categoriesUpdateWithoutArticlesInput = {
    id?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    slug?: Prisma.StringFieldUpdateOperationsInput | string;
    description?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    type?: Prisma.StringFieldUpdateOperationsInput | string;
    icon?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    color?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    order?: Prisma.IntFieldUpdateOperationsInput | number;
    is_active?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    created_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    updated_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    courses?: Prisma.coursesUpdateManyWithoutCategoriesNestedInput;
    ebooks?: Prisma.ebooksUpdateManyWithoutCategoriesNestedInput;
    expert_advisors?: Prisma.expert_advisorsUpdateManyWithoutCategoriesNestedInput;
    indicators?: Prisma.indicatorsUpdateManyWithoutCategoriesNestedInput;
};
export type categoriesUncheckedUpdateWithoutArticlesInput = {
    id?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    slug?: Prisma.StringFieldUpdateOperationsInput | string;
    description?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    type?: Prisma.StringFieldUpdateOperationsInput | string;
    icon?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    color?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    order?: Prisma.IntFieldUpdateOperationsInput | number;
    is_active?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    created_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    updated_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    courses?: Prisma.coursesUncheckedUpdateManyWithoutCategoriesNestedInput;
    ebooks?: Prisma.ebooksUncheckedUpdateManyWithoutCategoriesNestedInput;
    expert_advisors?: Prisma.expert_advisorsUncheckedUpdateManyWithoutCategoriesNestedInput;
    indicators?: Prisma.indicatorsUncheckedUpdateManyWithoutCategoriesNestedInput;
};
export type categoriesCreateWithoutCoursesInput = {
    id?: bigint | number;
    name: string;
    slug: string;
    description?: string | null;
    type?: string;
    icon?: string | null;
    color?: string | null;
    order?: number;
    is_active?: boolean;
    created_at?: Date | string | null;
    updated_at?: Date | string | null;
    articles?: Prisma.articlesCreateNestedManyWithoutCategoriesInput;
    ebooks?: Prisma.ebooksCreateNestedManyWithoutCategoriesInput;
    expert_advisors?: Prisma.expert_advisorsCreateNestedManyWithoutCategoriesInput;
    indicators?: Prisma.indicatorsCreateNestedManyWithoutCategoriesInput;
};
export type categoriesUncheckedCreateWithoutCoursesInput = {
    id?: bigint | number;
    name: string;
    slug: string;
    description?: string | null;
    type?: string;
    icon?: string | null;
    color?: string | null;
    order?: number;
    is_active?: boolean;
    created_at?: Date | string | null;
    updated_at?: Date | string | null;
    articles?: Prisma.articlesUncheckedCreateNestedManyWithoutCategoriesInput;
    ebooks?: Prisma.ebooksUncheckedCreateNestedManyWithoutCategoriesInput;
    expert_advisors?: Prisma.expert_advisorsUncheckedCreateNestedManyWithoutCategoriesInput;
    indicators?: Prisma.indicatorsUncheckedCreateNestedManyWithoutCategoriesInput;
};
export type categoriesCreateOrConnectWithoutCoursesInput = {
    where: Prisma.categoriesWhereUniqueInput;
    create: Prisma.XOR<Prisma.categoriesCreateWithoutCoursesInput, Prisma.categoriesUncheckedCreateWithoutCoursesInput>;
};
export type categoriesUpsertWithoutCoursesInput = {
    update: Prisma.XOR<Prisma.categoriesUpdateWithoutCoursesInput, Prisma.categoriesUncheckedUpdateWithoutCoursesInput>;
    create: Prisma.XOR<Prisma.categoriesCreateWithoutCoursesInput, Prisma.categoriesUncheckedCreateWithoutCoursesInput>;
    where?: Prisma.categoriesWhereInput;
};
export type categoriesUpdateToOneWithWhereWithoutCoursesInput = {
    where?: Prisma.categoriesWhereInput;
    data: Prisma.XOR<Prisma.categoriesUpdateWithoutCoursesInput, Prisma.categoriesUncheckedUpdateWithoutCoursesInput>;
};
export type categoriesUpdateWithoutCoursesInput = {
    id?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    slug?: Prisma.StringFieldUpdateOperationsInput | string;
    description?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    type?: Prisma.StringFieldUpdateOperationsInput | string;
    icon?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    color?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    order?: Prisma.IntFieldUpdateOperationsInput | number;
    is_active?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    created_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    updated_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    articles?: Prisma.articlesUpdateManyWithoutCategoriesNestedInput;
    ebooks?: Prisma.ebooksUpdateManyWithoutCategoriesNestedInput;
    expert_advisors?: Prisma.expert_advisorsUpdateManyWithoutCategoriesNestedInput;
    indicators?: Prisma.indicatorsUpdateManyWithoutCategoriesNestedInput;
};
export type categoriesUncheckedUpdateWithoutCoursesInput = {
    id?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    slug?: Prisma.StringFieldUpdateOperationsInput | string;
    description?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    type?: Prisma.StringFieldUpdateOperationsInput | string;
    icon?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    color?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    order?: Prisma.IntFieldUpdateOperationsInput | number;
    is_active?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    created_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    updated_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    articles?: Prisma.articlesUncheckedUpdateManyWithoutCategoriesNestedInput;
    ebooks?: Prisma.ebooksUncheckedUpdateManyWithoutCategoriesNestedInput;
    expert_advisors?: Prisma.expert_advisorsUncheckedUpdateManyWithoutCategoriesNestedInput;
    indicators?: Prisma.indicatorsUncheckedUpdateManyWithoutCategoriesNestedInput;
};
export type categoriesCreateWithoutEbooksInput = {
    id?: bigint | number;
    name: string;
    slug: string;
    description?: string | null;
    type?: string;
    icon?: string | null;
    color?: string | null;
    order?: number;
    is_active?: boolean;
    created_at?: Date | string | null;
    updated_at?: Date | string | null;
    articles?: Prisma.articlesCreateNestedManyWithoutCategoriesInput;
    courses?: Prisma.coursesCreateNestedManyWithoutCategoriesInput;
    expert_advisors?: Prisma.expert_advisorsCreateNestedManyWithoutCategoriesInput;
    indicators?: Prisma.indicatorsCreateNestedManyWithoutCategoriesInput;
};
export type categoriesUncheckedCreateWithoutEbooksInput = {
    id?: bigint | number;
    name: string;
    slug: string;
    description?: string | null;
    type?: string;
    icon?: string | null;
    color?: string | null;
    order?: number;
    is_active?: boolean;
    created_at?: Date | string | null;
    updated_at?: Date | string | null;
    articles?: Prisma.articlesUncheckedCreateNestedManyWithoutCategoriesInput;
    courses?: Prisma.coursesUncheckedCreateNestedManyWithoutCategoriesInput;
    expert_advisors?: Prisma.expert_advisorsUncheckedCreateNestedManyWithoutCategoriesInput;
    indicators?: Prisma.indicatorsUncheckedCreateNestedManyWithoutCategoriesInput;
};
export type categoriesCreateOrConnectWithoutEbooksInput = {
    where: Prisma.categoriesWhereUniqueInput;
    create: Prisma.XOR<Prisma.categoriesCreateWithoutEbooksInput, Prisma.categoriesUncheckedCreateWithoutEbooksInput>;
};
export type categoriesUpsertWithoutEbooksInput = {
    update: Prisma.XOR<Prisma.categoriesUpdateWithoutEbooksInput, Prisma.categoriesUncheckedUpdateWithoutEbooksInput>;
    create: Prisma.XOR<Prisma.categoriesCreateWithoutEbooksInput, Prisma.categoriesUncheckedCreateWithoutEbooksInput>;
    where?: Prisma.categoriesWhereInput;
};
export type categoriesUpdateToOneWithWhereWithoutEbooksInput = {
    where?: Prisma.categoriesWhereInput;
    data: Prisma.XOR<Prisma.categoriesUpdateWithoutEbooksInput, Prisma.categoriesUncheckedUpdateWithoutEbooksInput>;
};
export type categoriesUpdateWithoutEbooksInput = {
    id?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    slug?: Prisma.StringFieldUpdateOperationsInput | string;
    description?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    type?: Prisma.StringFieldUpdateOperationsInput | string;
    icon?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    color?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    order?: Prisma.IntFieldUpdateOperationsInput | number;
    is_active?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    created_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    updated_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    articles?: Prisma.articlesUpdateManyWithoutCategoriesNestedInput;
    courses?: Prisma.coursesUpdateManyWithoutCategoriesNestedInput;
    expert_advisors?: Prisma.expert_advisorsUpdateManyWithoutCategoriesNestedInput;
    indicators?: Prisma.indicatorsUpdateManyWithoutCategoriesNestedInput;
};
export type categoriesUncheckedUpdateWithoutEbooksInput = {
    id?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    slug?: Prisma.StringFieldUpdateOperationsInput | string;
    description?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    type?: Prisma.StringFieldUpdateOperationsInput | string;
    icon?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    color?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    order?: Prisma.IntFieldUpdateOperationsInput | number;
    is_active?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    created_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    updated_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    articles?: Prisma.articlesUncheckedUpdateManyWithoutCategoriesNestedInput;
    courses?: Prisma.coursesUncheckedUpdateManyWithoutCategoriesNestedInput;
    expert_advisors?: Prisma.expert_advisorsUncheckedUpdateManyWithoutCategoriesNestedInput;
    indicators?: Prisma.indicatorsUncheckedUpdateManyWithoutCategoriesNestedInput;
};
export type categoriesCreateWithoutExpert_advisorsInput = {
    id?: bigint | number;
    name: string;
    slug: string;
    description?: string | null;
    type?: string;
    icon?: string | null;
    color?: string | null;
    order?: number;
    is_active?: boolean;
    created_at?: Date | string | null;
    updated_at?: Date | string | null;
    articles?: Prisma.articlesCreateNestedManyWithoutCategoriesInput;
    courses?: Prisma.coursesCreateNestedManyWithoutCategoriesInput;
    ebooks?: Prisma.ebooksCreateNestedManyWithoutCategoriesInput;
    indicators?: Prisma.indicatorsCreateNestedManyWithoutCategoriesInput;
};
export type categoriesUncheckedCreateWithoutExpert_advisorsInput = {
    id?: bigint | number;
    name: string;
    slug: string;
    description?: string | null;
    type?: string;
    icon?: string | null;
    color?: string | null;
    order?: number;
    is_active?: boolean;
    created_at?: Date | string | null;
    updated_at?: Date | string | null;
    articles?: Prisma.articlesUncheckedCreateNestedManyWithoutCategoriesInput;
    courses?: Prisma.coursesUncheckedCreateNestedManyWithoutCategoriesInput;
    ebooks?: Prisma.ebooksUncheckedCreateNestedManyWithoutCategoriesInput;
    indicators?: Prisma.indicatorsUncheckedCreateNestedManyWithoutCategoriesInput;
};
export type categoriesCreateOrConnectWithoutExpert_advisorsInput = {
    where: Prisma.categoriesWhereUniqueInput;
    create: Prisma.XOR<Prisma.categoriesCreateWithoutExpert_advisorsInput, Prisma.categoriesUncheckedCreateWithoutExpert_advisorsInput>;
};
export type categoriesUpsertWithoutExpert_advisorsInput = {
    update: Prisma.XOR<Prisma.categoriesUpdateWithoutExpert_advisorsInput, Prisma.categoriesUncheckedUpdateWithoutExpert_advisorsInput>;
    create: Prisma.XOR<Prisma.categoriesCreateWithoutExpert_advisorsInput, Prisma.categoriesUncheckedCreateWithoutExpert_advisorsInput>;
    where?: Prisma.categoriesWhereInput;
};
export type categoriesUpdateToOneWithWhereWithoutExpert_advisorsInput = {
    where?: Prisma.categoriesWhereInput;
    data: Prisma.XOR<Prisma.categoriesUpdateWithoutExpert_advisorsInput, Prisma.categoriesUncheckedUpdateWithoutExpert_advisorsInput>;
};
export type categoriesUpdateWithoutExpert_advisorsInput = {
    id?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    slug?: Prisma.StringFieldUpdateOperationsInput | string;
    description?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    type?: Prisma.StringFieldUpdateOperationsInput | string;
    icon?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    color?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    order?: Prisma.IntFieldUpdateOperationsInput | number;
    is_active?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    created_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    updated_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    articles?: Prisma.articlesUpdateManyWithoutCategoriesNestedInput;
    courses?: Prisma.coursesUpdateManyWithoutCategoriesNestedInput;
    ebooks?: Prisma.ebooksUpdateManyWithoutCategoriesNestedInput;
    indicators?: Prisma.indicatorsUpdateManyWithoutCategoriesNestedInput;
};
export type categoriesUncheckedUpdateWithoutExpert_advisorsInput = {
    id?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    slug?: Prisma.StringFieldUpdateOperationsInput | string;
    description?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    type?: Prisma.StringFieldUpdateOperationsInput | string;
    icon?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    color?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    order?: Prisma.IntFieldUpdateOperationsInput | number;
    is_active?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    created_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    updated_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    articles?: Prisma.articlesUncheckedUpdateManyWithoutCategoriesNestedInput;
    courses?: Prisma.coursesUncheckedUpdateManyWithoutCategoriesNestedInput;
    ebooks?: Prisma.ebooksUncheckedUpdateManyWithoutCategoriesNestedInput;
    indicators?: Prisma.indicatorsUncheckedUpdateManyWithoutCategoriesNestedInput;
};
export type categoriesCreateWithoutIndicatorsInput = {
    id?: bigint | number;
    name: string;
    slug: string;
    description?: string | null;
    type?: string;
    icon?: string | null;
    color?: string | null;
    order?: number;
    is_active?: boolean;
    created_at?: Date | string | null;
    updated_at?: Date | string | null;
    articles?: Prisma.articlesCreateNestedManyWithoutCategoriesInput;
    courses?: Prisma.coursesCreateNestedManyWithoutCategoriesInput;
    ebooks?: Prisma.ebooksCreateNestedManyWithoutCategoriesInput;
    expert_advisors?: Prisma.expert_advisorsCreateNestedManyWithoutCategoriesInput;
};
export type categoriesUncheckedCreateWithoutIndicatorsInput = {
    id?: bigint | number;
    name: string;
    slug: string;
    description?: string | null;
    type?: string;
    icon?: string | null;
    color?: string | null;
    order?: number;
    is_active?: boolean;
    created_at?: Date | string | null;
    updated_at?: Date | string | null;
    articles?: Prisma.articlesUncheckedCreateNestedManyWithoutCategoriesInput;
    courses?: Prisma.coursesUncheckedCreateNestedManyWithoutCategoriesInput;
    ebooks?: Prisma.ebooksUncheckedCreateNestedManyWithoutCategoriesInput;
    expert_advisors?: Prisma.expert_advisorsUncheckedCreateNestedManyWithoutCategoriesInput;
};
export type categoriesCreateOrConnectWithoutIndicatorsInput = {
    where: Prisma.categoriesWhereUniqueInput;
    create: Prisma.XOR<Prisma.categoriesCreateWithoutIndicatorsInput, Prisma.categoriesUncheckedCreateWithoutIndicatorsInput>;
};
export type categoriesUpsertWithoutIndicatorsInput = {
    update: Prisma.XOR<Prisma.categoriesUpdateWithoutIndicatorsInput, Prisma.categoriesUncheckedUpdateWithoutIndicatorsInput>;
    create: Prisma.XOR<Prisma.categoriesCreateWithoutIndicatorsInput, Prisma.categoriesUncheckedCreateWithoutIndicatorsInput>;
    where?: Prisma.categoriesWhereInput;
};
export type categoriesUpdateToOneWithWhereWithoutIndicatorsInput = {
    where?: Prisma.categoriesWhereInput;
    data: Prisma.XOR<Prisma.categoriesUpdateWithoutIndicatorsInput, Prisma.categoriesUncheckedUpdateWithoutIndicatorsInput>;
};
export type categoriesUpdateWithoutIndicatorsInput = {
    id?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    slug?: Prisma.StringFieldUpdateOperationsInput | string;
    description?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    type?: Prisma.StringFieldUpdateOperationsInput | string;
    icon?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    color?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    order?: Prisma.IntFieldUpdateOperationsInput | number;
    is_active?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    created_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    updated_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    articles?: Prisma.articlesUpdateManyWithoutCategoriesNestedInput;
    courses?: Prisma.coursesUpdateManyWithoutCategoriesNestedInput;
    ebooks?: Prisma.ebooksUpdateManyWithoutCategoriesNestedInput;
    expert_advisors?: Prisma.expert_advisorsUpdateManyWithoutCategoriesNestedInput;
};
export type categoriesUncheckedUpdateWithoutIndicatorsInput = {
    id?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    slug?: Prisma.StringFieldUpdateOperationsInput | string;
    description?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    type?: Prisma.StringFieldUpdateOperationsInput | string;
    icon?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    color?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    order?: Prisma.IntFieldUpdateOperationsInput | number;
    is_active?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    created_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    updated_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    articles?: Prisma.articlesUncheckedUpdateManyWithoutCategoriesNestedInput;
    courses?: Prisma.coursesUncheckedUpdateManyWithoutCategoriesNestedInput;
    ebooks?: Prisma.ebooksUncheckedUpdateManyWithoutCategoriesNestedInput;
    expert_advisors?: Prisma.expert_advisorsUncheckedUpdateManyWithoutCategoriesNestedInput;
};
export type CategoriesCountOutputType = {
    articles: number;
    courses: number;
    ebooks: number;
    expert_advisors: number;
    indicators: number;
};
export type CategoriesCountOutputTypeSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    articles?: boolean | CategoriesCountOutputTypeCountArticlesArgs;
    courses?: boolean | CategoriesCountOutputTypeCountCoursesArgs;
    ebooks?: boolean | CategoriesCountOutputTypeCountEbooksArgs;
    expert_advisors?: boolean | CategoriesCountOutputTypeCountExpert_advisorsArgs;
    indicators?: boolean | CategoriesCountOutputTypeCountIndicatorsArgs;
};
export type CategoriesCountOutputTypeDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.CategoriesCountOutputTypeSelect<ExtArgs> | null;
};
export type CategoriesCountOutputTypeCountArticlesArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.articlesWhereInput;
};
export type CategoriesCountOutputTypeCountCoursesArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.coursesWhereInput;
};
export type CategoriesCountOutputTypeCountEbooksArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.ebooksWhereInput;
};
export type CategoriesCountOutputTypeCountExpert_advisorsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.expert_advisorsWhereInput;
};
export type CategoriesCountOutputTypeCountIndicatorsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.indicatorsWhereInput;
};
export type categoriesSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    name?: boolean;
    slug?: boolean;
    description?: boolean;
    type?: boolean;
    icon?: boolean;
    color?: boolean;
    order?: boolean;
    is_active?: boolean;
    created_at?: boolean;
    updated_at?: boolean;
    articles?: boolean | Prisma.categories$articlesArgs<ExtArgs>;
    courses?: boolean | Prisma.categories$coursesArgs<ExtArgs>;
    ebooks?: boolean | Prisma.categories$ebooksArgs<ExtArgs>;
    expert_advisors?: boolean | Prisma.categories$expert_advisorsArgs<ExtArgs>;
    indicators?: boolean | Prisma.categories$indicatorsArgs<ExtArgs>;
    _count?: boolean | Prisma.CategoriesCountOutputTypeDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["categories"]>;
export type categoriesSelectScalar = {
    id?: boolean;
    name?: boolean;
    slug?: boolean;
    description?: boolean;
    type?: boolean;
    icon?: boolean;
    color?: boolean;
    order?: boolean;
    is_active?: boolean;
    created_at?: boolean;
    updated_at?: boolean;
};
export type categoriesOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "name" | "slug" | "description" | "type" | "icon" | "color" | "order" | "is_active" | "created_at" | "updated_at", ExtArgs["result"]["categories"]>;
export type categoriesInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    articles?: boolean | Prisma.categories$articlesArgs<ExtArgs>;
    courses?: boolean | Prisma.categories$coursesArgs<ExtArgs>;
    ebooks?: boolean | Prisma.categories$ebooksArgs<ExtArgs>;
    expert_advisors?: boolean | Prisma.categories$expert_advisorsArgs<ExtArgs>;
    indicators?: boolean | Prisma.categories$indicatorsArgs<ExtArgs>;
    _count?: boolean | Prisma.CategoriesCountOutputTypeDefaultArgs<ExtArgs>;
};
export type $categoriesPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "categories";
    objects: {
        articles: Prisma.$articlesPayload<ExtArgs>[];
        courses: Prisma.$coursesPayload<ExtArgs>[];
        ebooks: Prisma.$ebooksPayload<ExtArgs>[];
        expert_advisors: Prisma.$expert_advisorsPayload<ExtArgs>[];
        indicators: Prisma.$indicatorsPayload<ExtArgs>[];
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id: bigint;
        name: string;
        slug: string;
        description: string | null;
        type: string;
        icon: string | null;
        color: string | null;
        order: number;
        is_active: boolean;
        created_at: Date | null;
        updated_at: Date | null;
    }, ExtArgs["result"]["categories"]>;
    composites: {};
};
export type categoriesGetPayload<S extends boolean | null | undefined | categoriesDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$categoriesPayload, S>;
export type categoriesCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<categoriesFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: CategoriesCountAggregateInputType | true;
};
export interface categoriesDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['categories'];
        meta: {
            name: 'categories';
        };
    };
    findUnique<T extends categoriesFindUniqueArgs>(args: Prisma.SelectSubset<T, categoriesFindUniqueArgs<ExtArgs>>): Prisma.Prisma__categoriesClient<runtime.Types.Result.GetResult<Prisma.$categoriesPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findUniqueOrThrow<T extends categoriesFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, categoriesFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__categoriesClient<runtime.Types.Result.GetResult<Prisma.$categoriesPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findFirst<T extends categoriesFindFirstArgs>(args?: Prisma.SelectSubset<T, categoriesFindFirstArgs<ExtArgs>>): Prisma.Prisma__categoriesClient<runtime.Types.Result.GetResult<Prisma.$categoriesPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findFirstOrThrow<T extends categoriesFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, categoriesFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__categoriesClient<runtime.Types.Result.GetResult<Prisma.$categoriesPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findMany<T extends categoriesFindManyArgs>(args?: Prisma.SelectSubset<T, categoriesFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$categoriesPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    create<T extends categoriesCreateArgs>(args: Prisma.SelectSubset<T, categoriesCreateArgs<ExtArgs>>): Prisma.Prisma__categoriesClient<runtime.Types.Result.GetResult<Prisma.$categoriesPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    createMany<T extends categoriesCreateManyArgs>(args?: Prisma.SelectSubset<T, categoriesCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    delete<T extends categoriesDeleteArgs>(args: Prisma.SelectSubset<T, categoriesDeleteArgs<ExtArgs>>): Prisma.Prisma__categoriesClient<runtime.Types.Result.GetResult<Prisma.$categoriesPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    update<T extends categoriesUpdateArgs>(args: Prisma.SelectSubset<T, categoriesUpdateArgs<ExtArgs>>): Prisma.Prisma__categoriesClient<runtime.Types.Result.GetResult<Prisma.$categoriesPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    deleteMany<T extends categoriesDeleteManyArgs>(args?: Prisma.SelectSubset<T, categoriesDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateMany<T extends categoriesUpdateManyArgs>(args: Prisma.SelectSubset<T, categoriesUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    upsert<T extends categoriesUpsertArgs>(args: Prisma.SelectSubset<T, categoriesUpsertArgs<ExtArgs>>): Prisma.Prisma__categoriesClient<runtime.Types.Result.GetResult<Prisma.$categoriesPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    count<T extends categoriesCountArgs>(args?: Prisma.Subset<T, categoriesCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], CategoriesCountAggregateOutputType> : number>;
    aggregate<T extends CategoriesAggregateArgs>(args: Prisma.Subset<T, CategoriesAggregateArgs>): Prisma.PrismaPromise<GetCategoriesAggregateType<T>>;
    groupBy<T extends categoriesGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: categoriesGroupByArgs['orderBy'];
    } : {
        orderBy?: categoriesGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, categoriesGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCategoriesGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    readonly fields: categoriesFieldRefs;
}
export interface Prisma__categoriesClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    articles<T extends Prisma.categories$articlesArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.categories$articlesArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$articlesPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    courses<T extends Prisma.categories$coursesArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.categories$coursesArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$coursesPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    ebooks<T extends Prisma.categories$ebooksArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.categories$ebooksArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$ebooksPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    expert_advisors<T extends Prisma.categories$expert_advisorsArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.categories$expert_advisorsArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$expert_advisorsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    indicators<T extends Prisma.categories$indicatorsArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.categories$indicatorsArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$indicatorsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): runtime.Types.Utils.JsPromise<TResult1 | TResult2>;
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): runtime.Types.Utils.JsPromise<T | TResult>;
    finally(onfinally?: (() => void) | undefined | null): runtime.Types.Utils.JsPromise<T>;
}
export interface categoriesFieldRefs {
    readonly id: Prisma.FieldRef<"categories", 'BigInt'>;
    readonly name: Prisma.FieldRef<"categories", 'String'>;
    readonly slug: Prisma.FieldRef<"categories", 'String'>;
    readonly description: Prisma.FieldRef<"categories", 'String'>;
    readonly type: Prisma.FieldRef<"categories", 'String'>;
    readonly icon: Prisma.FieldRef<"categories", 'String'>;
    readonly color: Prisma.FieldRef<"categories", 'String'>;
    readonly order: Prisma.FieldRef<"categories", 'Int'>;
    readonly is_active: Prisma.FieldRef<"categories", 'Boolean'>;
    readonly created_at: Prisma.FieldRef<"categories", 'DateTime'>;
    readonly updated_at: Prisma.FieldRef<"categories", 'DateTime'>;
}
export type categoriesFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.categoriesSelect<ExtArgs> | null;
    omit?: Prisma.categoriesOmit<ExtArgs> | null;
    include?: Prisma.categoriesInclude<ExtArgs> | null;
    where: Prisma.categoriesWhereUniqueInput;
};
export type categoriesFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.categoriesSelect<ExtArgs> | null;
    omit?: Prisma.categoriesOmit<ExtArgs> | null;
    include?: Prisma.categoriesInclude<ExtArgs> | null;
    where: Prisma.categoriesWhereUniqueInput;
};
export type categoriesFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.categoriesSelect<ExtArgs> | null;
    omit?: Prisma.categoriesOmit<ExtArgs> | null;
    include?: Prisma.categoriesInclude<ExtArgs> | null;
    where?: Prisma.categoriesWhereInput;
    orderBy?: Prisma.categoriesOrderByWithRelationInput | Prisma.categoriesOrderByWithRelationInput[];
    cursor?: Prisma.categoriesWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.CategoriesScalarFieldEnum | Prisma.CategoriesScalarFieldEnum[];
};
export type categoriesFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.categoriesSelect<ExtArgs> | null;
    omit?: Prisma.categoriesOmit<ExtArgs> | null;
    include?: Prisma.categoriesInclude<ExtArgs> | null;
    where?: Prisma.categoriesWhereInput;
    orderBy?: Prisma.categoriesOrderByWithRelationInput | Prisma.categoriesOrderByWithRelationInput[];
    cursor?: Prisma.categoriesWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.CategoriesScalarFieldEnum | Prisma.CategoriesScalarFieldEnum[];
};
export type categoriesFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.categoriesSelect<ExtArgs> | null;
    omit?: Prisma.categoriesOmit<ExtArgs> | null;
    include?: Prisma.categoriesInclude<ExtArgs> | null;
    where?: Prisma.categoriesWhereInput;
    orderBy?: Prisma.categoriesOrderByWithRelationInput | Prisma.categoriesOrderByWithRelationInput[];
    cursor?: Prisma.categoriesWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.CategoriesScalarFieldEnum | Prisma.CategoriesScalarFieldEnum[];
};
export type categoriesCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.categoriesSelect<ExtArgs> | null;
    omit?: Prisma.categoriesOmit<ExtArgs> | null;
    include?: Prisma.categoriesInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.categoriesCreateInput, Prisma.categoriesUncheckedCreateInput>;
};
export type categoriesCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.categoriesCreateManyInput | Prisma.categoriesCreateManyInput[];
    skipDuplicates?: boolean;
};
export type categoriesUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.categoriesSelect<ExtArgs> | null;
    omit?: Prisma.categoriesOmit<ExtArgs> | null;
    include?: Prisma.categoriesInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.categoriesUpdateInput, Prisma.categoriesUncheckedUpdateInput>;
    where: Prisma.categoriesWhereUniqueInput;
};
export type categoriesUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.XOR<Prisma.categoriesUpdateManyMutationInput, Prisma.categoriesUncheckedUpdateManyInput>;
    where?: Prisma.categoriesWhereInput;
    limit?: number;
};
export type categoriesUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.categoriesSelect<ExtArgs> | null;
    omit?: Prisma.categoriesOmit<ExtArgs> | null;
    include?: Prisma.categoriesInclude<ExtArgs> | null;
    where: Prisma.categoriesWhereUniqueInput;
    create: Prisma.XOR<Prisma.categoriesCreateInput, Prisma.categoriesUncheckedCreateInput>;
    update: Prisma.XOR<Prisma.categoriesUpdateInput, Prisma.categoriesUncheckedUpdateInput>;
};
export type categoriesDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.categoriesSelect<ExtArgs> | null;
    omit?: Prisma.categoriesOmit<ExtArgs> | null;
    include?: Prisma.categoriesInclude<ExtArgs> | null;
    where: Prisma.categoriesWhereUniqueInput;
};
export type categoriesDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.categoriesWhereInput;
    limit?: number;
};
export type categories$articlesArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.articlesSelect<ExtArgs> | null;
    omit?: Prisma.articlesOmit<ExtArgs> | null;
    include?: Prisma.articlesInclude<ExtArgs> | null;
    where?: Prisma.articlesWhereInput;
    orderBy?: Prisma.articlesOrderByWithRelationInput | Prisma.articlesOrderByWithRelationInput[];
    cursor?: Prisma.articlesWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.ArticlesScalarFieldEnum | Prisma.ArticlesScalarFieldEnum[];
};
export type categories$coursesArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.coursesSelect<ExtArgs> | null;
    omit?: Prisma.coursesOmit<ExtArgs> | null;
    include?: Prisma.coursesInclude<ExtArgs> | null;
    where?: Prisma.coursesWhereInput;
    orderBy?: Prisma.coursesOrderByWithRelationInput | Prisma.coursesOrderByWithRelationInput[];
    cursor?: Prisma.coursesWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.CoursesScalarFieldEnum | Prisma.CoursesScalarFieldEnum[];
};
export type categories$ebooksArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ebooksSelect<ExtArgs> | null;
    omit?: Prisma.ebooksOmit<ExtArgs> | null;
    include?: Prisma.ebooksInclude<ExtArgs> | null;
    where?: Prisma.ebooksWhereInput;
    orderBy?: Prisma.ebooksOrderByWithRelationInput | Prisma.ebooksOrderByWithRelationInput[];
    cursor?: Prisma.ebooksWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.EbooksScalarFieldEnum | Prisma.EbooksScalarFieldEnum[];
};
export type categories$expert_advisorsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.expert_advisorsSelect<ExtArgs> | null;
    omit?: Prisma.expert_advisorsOmit<ExtArgs> | null;
    include?: Prisma.expert_advisorsInclude<ExtArgs> | null;
    where?: Prisma.expert_advisorsWhereInput;
    orderBy?: Prisma.expert_advisorsOrderByWithRelationInput | Prisma.expert_advisorsOrderByWithRelationInput[];
    cursor?: Prisma.expert_advisorsWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.Expert_advisorsScalarFieldEnum | Prisma.Expert_advisorsScalarFieldEnum[];
};
export type categories$indicatorsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.indicatorsSelect<ExtArgs> | null;
    omit?: Prisma.indicatorsOmit<ExtArgs> | null;
    include?: Prisma.indicatorsInclude<ExtArgs> | null;
    where?: Prisma.indicatorsWhereInput;
    orderBy?: Prisma.indicatorsOrderByWithRelationInput | Prisma.indicatorsOrderByWithRelationInput[];
    cursor?: Prisma.indicatorsWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.IndicatorsScalarFieldEnum | Prisma.IndicatorsScalarFieldEnum[];
};
export type categoriesDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.categoriesSelect<ExtArgs> | null;
    omit?: Prisma.categoriesOmit<ExtArgs> | null;
    include?: Prisma.categoriesInclude<ExtArgs> | null;
};
export {};
