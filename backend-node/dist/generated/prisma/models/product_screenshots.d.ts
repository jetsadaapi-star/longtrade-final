import type * as runtime from "@prisma/client/runtime/client";
import type * as Prisma from "../internal/prismaNamespace.js";
export type product_screenshotsModel = runtime.Types.Result.DefaultSelection<Prisma.$product_screenshotsPayload>;
export type AggregateProduct_screenshots = {
    _count: Product_screenshotsCountAggregateOutputType | null;
    _avg: Product_screenshotsAvgAggregateOutputType | null;
    _sum: Product_screenshotsSumAggregateOutputType | null;
    _min: Product_screenshotsMinAggregateOutputType | null;
    _max: Product_screenshotsMaxAggregateOutputType | null;
};
export type Product_screenshotsAvgAggregateOutputType = {
    id: number | null;
    product_id: number | null;
    media_id: number | null;
    order: number | null;
};
export type Product_screenshotsSumAggregateOutputType = {
    id: bigint | null;
    product_id: bigint | null;
    media_id: bigint | null;
    order: number | null;
};
export type Product_screenshotsMinAggregateOutputType = {
    id: bigint | null;
    product_id: bigint | null;
    media_id: bigint | null;
    order: number | null;
    created_at: Date | null;
    updated_at: Date | null;
};
export type Product_screenshotsMaxAggregateOutputType = {
    id: bigint | null;
    product_id: bigint | null;
    media_id: bigint | null;
    order: number | null;
    created_at: Date | null;
    updated_at: Date | null;
};
export type Product_screenshotsCountAggregateOutputType = {
    id: number;
    product_id: number;
    media_id: number;
    order: number;
    created_at: number;
    updated_at: number;
    _all: number;
};
export type Product_screenshotsAvgAggregateInputType = {
    id?: true;
    product_id?: true;
    media_id?: true;
    order?: true;
};
export type Product_screenshotsSumAggregateInputType = {
    id?: true;
    product_id?: true;
    media_id?: true;
    order?: true;
};
export type Product_screenshotsMinAggregateInputType = {
    id?: true;
    product_id?: true;
    media_id?: true;
    order?: true;
    created_at?: true;
    updated_at?: true;
};
export type Product_screenshotsMaxAggregateInputType = {
    id?: true;
    product_id?: true;
    media_id?: true;
    order?: true;
    created_at?: true;
    updated_at?: true;
};
export type Product_screenshotsCountAggregateInputType = {
    id?: true;
    product_id?: true;
    media_id?: true;
    order?: true;
    created_at?: true;
    updated_at?: true;
    _all?: true;
};
export type Product_screenshotsAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.product_screenshotsWhereInput;
    orderBy?: Prisma.product_screenshotsOrderByWithRelationInput | Prisma.product_screenshotsOrderByWithRelationInput[];
    cursor?: Prisma.product_screenshotsWhereUniqueInput;
    take?: number;
    skip?: number;
    _count?: true | Product_screenshotsCountAggregateInputType;
    _avg?: Product_screenshotsAvgAggregateInputType;
    _sum?: Product_screenshotsSumAggregateInputType;
    _min?: Product_screenshotsMinAggregateInputType;
    _max?: Product_screenshotsMaxAggregateInputType;
};
export type GetProduct_screenshotsAggregateType<T extends Product_screenshotsAggregateArgs> = {
    [P in keyof T & keyof AggregateProduct_screenshots]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateProduct_screenshots[P]> : Prisma.GetScalarType<T[P], AggregateProduct_screenshots[P]>;
};
export type product_screenshotsGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.product_screenshotsWhereInput;
    orderBy?: Prisma.product_screenshotsOrderByWithAggregationInput | Prisma.product_screenshotsOrderByWithAggregationInput[];
    by: Prisma.Product_screenshotsScalarFieldEnum[] | Prisma.Product_screenshotsScalarFieldEnum;
    having?: Prisma.product_screenshotsScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: Product_screenshotsCountAggregateInputType | true;
    _avg?: Product_screenshotsAvgAggregateInputType;
    _sum?: Product_screenshotsSumAggregateInputType;
    _min?: Product_screenshotsMinAggregateInputType;
    _max?: Product_screenshotsMaxAggregateInputType;
};
export type Product_screenshotsGroupByOutputType = {
    id: bigint;
    product_id: bigint;
    media_id: bigint;
    order: number;
    created_at: Date | null;
    updated_at: Date | null;
    _count: Product_screenshotsCountAggregateOutputType | null;
    _avg: Product_screenshotsAvgAggregateOutputType | null;
    _sum: Product_screenshotsSumAggregateOutputType | null;
    _min: Product_screenshotsMinAggregateOutputType | null;
    _max: Product_screenshotsMaxAggregateOutputType | null;
};
type GetProduct_screenshotsGroupByPayload<T extends product_screenshotsGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<Product_screenshotsGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof Product_screenshotsGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], Product_screenshotsGroupByOutputType[P]> : Prisma.GetScalarType<T[P], Product_screenshotsGroupByOutputType[P]>;
}>>;
export type product_screenshotsWhereInput = {
    AND?: Prisma.product_screenshotsWhereInput | Prisma.product_screenshotsWhereInput[];
    OR?: Prisma.product_screenshotsWhereInput[];
    NOT?: Prisma.product_screenshotsWhereInput | Prisma.product_screenshotsWhereInput[];
    id?: Prisma.BigIntFilter<"product_screenshots"> | bigint | number;
    product_id?: Prisma.BigIntFilter<"product_screenshots"> | bigint | number;
    media_id?: Prisma.BigIntFilter<"product_screenshots"> | bigint | number;
    order?: Prisma.IntFilter<"product_screenshots"> | number;
    created_at?: Prisma.DateTimeNullableFilter<"product_screenshots"> | Date | string | null;
    updated_at?: Prisma.DateTimeNullableFilter<"product_screenshots"> | Date | string | null;
    media?: Prisma.XOR<Prisma.MediaScalarRelationFilter, Prisma.mediaWhereInput>;
    products?: Prisma.XOR<Prisma.ProductsScalarRelationFilter, Prisma.productsWhereInput>;
};
export type product_screenshotsOrderByWithRelationInput = {
    id?: Prisma.SortOrder;
    product_id?: Prisma.SortOrder;
    media_id?: Prisma.SortOrder;
    order?: Prisma.SortOrder;
    created_at?: Prisma.SortOrderInput | Prisma.SortOrder;
    updated_at?: Prisma.SortOrderInput | Prisma.SortOrder;
    media?: Prisma.mediaOrderByWithRelationInput;
    products?: Prisma.productsOrderByWithRelationInput;
};
export type product_screenshotsWhereUniqueInput = Prisma.AtLeast<{
    id?: bigint | number;
    AND?: Prisma.product_screenshotsWhereInput | Prisma.product_screenshotsWhereInput[];
    OR?: Prisma.product_screenshotsWhereInput[];
    NOT?: Prisma.product_screenshotsWhereInput | Prisma.product_screenshotsWhereInput[];
    product_id?: Prisma.BigIntFilter<"product_screenshots"> | bigint | number;
    media_id?: Prisma.BigIntFilter<"product_screenshots"> | bigint | number;
    order?: Prisma.IntFilter<"product_screenshots"> | number;
    created_at?: Prisma.DateTimeNullableFilter<"product_screenshots"> | Date | string | null;
    updated_at?: Prisma.DateTimeNullableFilter<"product_screenshots"> | Date | string | null;
    media?: Prisma.XOR<Prisma.MediaScalarRelationFilter, Prisma.mediaWhereInput>;
    products?: Prisma.XOR<Prisma.ProductsScalarRelationFilter, Prisma.productsWhereInput>;
}, "id">;
export type product_screenshotsOrderByWithAggregationInput = {
    id?: Prisma.SortOrder;
    product_id?: Prisma.SortOrder;
    media_id?: Prisma.SortOrder;
    order?: Prisma.SortOrder;
    created_at?: Prisma.SortOrderInput | Prisma.SortOrder;
    updated_at?: Prisma.SortOrderInput | Prisma.SortOrder;
    _count?: Prisma.product_screenshotsCountOrderByAggregateInput;
    _avg?: Prisma.product_screenshotsAvgOrderByAggregateInput;
    _max?: Prisma.product_screenshotsMaxOrderByAggregateInput;
    _min?: Prisma.product_screenshotsMinOrderByAggregateInput;
    _sum?: Prisma.product_screenshotsSumOrderByAggregateInput;
};
export type product_screenshotsScalarWhereWithAggregatesInput = {
    AND?: Prisma.product_screenshotsScalarWhereWithAggregatesInput | Prisma.product_screenshotsScalarWhereWithAggregatesInput[];
    OR?: Prisma.product_screenshotsScalarWhereWithAggregatesInput[];
    NOT?: Prisma.product_screenshotsScalarWhereWithAggregatesInput | Prisma.product_screenshotsScalarWhereWithAggregatesInput[];
    id?: Prisma.BigIntWithAggregatesFilter<"product_screenshots"> | bigint | number;
    product_id?: Prisma.BigIntWithAggregatesFilter<"product_screenshots"> | bigint | number;
    media_id?: Prisma.BigIntWithAggregatesFilter<"product_screenshots"> | bigint | number;
    order?: Prisma.IntWithAggregatesFilter<"product_screenshots"> | number;
    created_at?: Prisma.DateTimeNullableWithAggregatesFilter<"product_screenshots"> | Date | string | null;
    updated_at?: Prisma.DateTimeNullableWithAggregatesFilter<"product_screenshots"> | Date | string | null;
};
export type product_screenshotsCreateInput = {
    id?: bigint | number;
    order?: number;
    created_at?: Date | string | null;
    updated_at?: Date | string | null;
    media: Prisma.mediaCreateNestedOneWithoutProduct_screenshotsInput;
    products: Prisma.productsCreateNestedOneWithoutProduct_screenshotsInput;
};
export type product_screenshotsUncheckedCreateInput = {
    id?: bigint | number;
    product_id: bigint | number;
    media_id: bigint | number;
    order?: number;
    created_at?: Date | string | null;
    updated_at?: Date | string | null;
};
export type product_screenshotsUpdateInput = {
    id?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    order?: Prisma.IntFieldUpdateOperationsInput | number;
    created_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    updated_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    media?: Prisma.mediaUpdateOneRequiredWithoutProduct_screenshotsNestedInput;
    products?: Prisma.productsUpdateOneRequiredWithoutProduct_screenshotsNestedInput;
};
export type product_screenshotsUncheckedUpdateInput = {
    id?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    product_id?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    media_id?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    order?: Prisma.IntFieldUpdateOperationsInput | number;
    created_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    updated_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
};
export type product_screenshotsCreateManyInput = {
    id?: bigint | number;
    product_id: bigint | number;
    media_id: bigint | number;
    order?: number;
    created_at?: Date | string | null;
    updated_at?: Date | string | null;
};
export type product_screenshotsUpdateManyMutationInput = {
    id?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    order?: Prisma.IntFieldUpdateOperationsInput | number;
    created_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    updated_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
};
export type product_screenshotsUncheckedUpdateManyInput = {
    id?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    product_id?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    media_id?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    order?: Prisma.IntFieldUpdateOperationsInput | number;
    created_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    updated_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
};
export type Product_screenshotsListRelationFilter = {
    every?: Prisma.product_screenshotsWhereInput;
    some?: Prisma.product_screenshotsWhereInput;
    none?: Prisma.product_screenshotsWhereInput;
};
export type product_screenshotsOrderByRelationAggregateInput = {
    _count?: Prisma.SortOrder;
};
export type product_screenshotsCountOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    product_id?: Prisma.SortOrder;
    media_id?: Prisma.SortOrder;
    order?: Prisma.SortOrder;
    created_at?: Prisma.SortOrder;
    updated_at?: Prisma.SortOrder;
};
export type product_screenshotsAvgOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    product_id?: Prisma.SortOrder;
    media_id?: Prisma.SortOrder;
    order?: Prisma.SortOrder;
};
export type product_screenshotsMaxOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    product_id?: Prisma.SortOrder;
    media_id?: Prisma.SortOrder;
    order?: Prisma.SortOrder;
    created_at?: Prisma.SortOrder;
    updated_at?: Prisma.SortOrder;
};
export type product_screenshotsMinOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    product_id?: Prisma.SortOrder;
    media_id?: Prisma.SortOrder;
    order?: Prisma.SortOrder;
    created_at?: Prisma.SortOrder;
    updated_at?: Prisma.SortOrder;
};
export type product_screenshotsSumOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    product_id?: Prisma.SortOrder;
    media_id?: Prisma.SortOrder;
    order?: Prisma.SortOrder;
};
export type product_screenshotsCreateNestedManyWithoutMediaInput = {
    create?: Prisma.XOR<Prisma.product_screenshotsCreateWithoutMediaInput, Prisma.product_screenshotsUncheckedCreateWithoutMediaInput> | Prisma.product_screenshotsCreateWithoutMediaInput[] | Prisma.product_screenshotsUncheckedCreateWithoutMediaInput[];
    connectOrCreate?: Prisma.product_screenshotsCreateOrConnectWithoutMediaInput | Prisma.product_screenshotsCreateOrConnectWithoutMediaInput[];
    createMany?: Prisma.product_screenshotsCreateManyMediaInputEnvelope;
    connect?: Prisma.product_screenshotsWhereUniqueInput | Prisma.product_screenshotsWhereUniqueInput[];
};
export type product_screenshotsUncheckedCreateNestedManyWithoutMediaInput = {
    create?: Prisma.XOR<Prisma.product_screenshotsCreateWithoutMediaInput, Prisma.product_screenshotsUncheckedCreateWithoutMediaInput> | Prisma.product_screenshotsCreateWithoutMediaInput[] | Prisma.product_screenshotsUncheckedCreateWithoutMediaInput[];
    connectOrCreate?: Prisma.product_screenshotsCreateOrConnectWithoutMediaInput | Prisma.product_screenshotsCreateOrConnectWithoutMediaInput[];
    createMany?: Prisma.product_screenshotsCreateManyMediaInputEnvelope;
    connect?: Prisma.product_screenshotsWhereUniqueInput | Prisma.product_screenshotsWhereUniqueInput[];
};
export type product_screenshotsUpdateManyWithoutMediaNestedInput = {
    create?: Prisma.XOR<Prisma.product_screenshotsCreateWithoutMediaInput, Prisma.product_screenshotsUncheckedCreateWithoutMediaInput> | Prisma.product_screenshotsCreateWithoutMediaInput[] | Prisma.product_screenshotsUncheckedCreateWithoutMediaInput[];
    connectOrCreate?: Prisma.product_screenshotsCreateOrConnectWithoutMediaInput | Prisma.product_screenshotsCreateOrConnectWithoutMediaInput[];
    upsert?: Prisma.product_screenshotsUpsertWithWhereUniqueWithoutMediaInput | Prisma.product_screenshotsUpsertWithWhereUniqueWithoutMediaInput[];
    createMany?: Prisma.product_screenshotsCreateManyMediaInputEnvelope;
    set?: Prisma.product_screenshotsWhereUniqueInput | Prisma.product_screenshotsWhereUniqueInput[];
    disconnect?: Prisma.product_screenshotsWhereUniqueInput | Prisma.product_screenshotsWhereUniqueInput[];
    delete?: Prisma.product_screenshotsWhereUniqueInput | Prisma.product_screenshotsWhereUniqueInput[];
    connect?: Prisma.product_screenshotsWhereUniqueInput | Prisma.product_screenshotsWhereUniqueInput[];
    update?: Prisma.product_screenshotsUpdateWithWhereUniqueWithoutMediaInput | Prisma.product_screenshotsUpdateWithWhereUniqueWithoutMediaInput[];
    updateMany?: Prisma.product_screenshotsUpdateManyWithWhereWithoutMediaInput | Prisma.product_screenshotsUpdateManyWithWhereWithoutMediaInput[];
    deleteMany?: Prisma.product_screenshotsScalarWhereInput | Prisma.product_screenshotsScalarWhereInput[];
};
export type product_screenshotsUncheckedUpdateManyWithoutMediaNestedInput = {
    create?: Prisma.XOR<Prisma.product_screenshotsCreateWithoutMediaInput, Prisma.product_screenshotsUncheckedCreateWithoutMediaInput> | Prisma.product_screenshotsCreateWithoutMediaInput[] | Prisma.product_screenshotsUncheckedCreateWithoutMediaInput[];
    connectOrCreate?: Prisma.product_screenshotsCreateOrConnectWithoutMediaInput | Prisma.product_screenshotsCreateOrConnectWithoutMediaInput[];
    upsert?: Prisma.product_screenshotsUpsertWithWhereUniqueWithoutMediaInput | Prisma.product_screenshotsUpsertWithWhereUniqueWithoutMediaInput[];
    createMany?: Prisma.product_screenshotsCreateManyMediaInputEnvelope;
    set?: Prisma.product_screenshotsWhereUniqueInput | Prisma.product_screenshotsWhereUniqueInput[];
    disconnect?: Prisma.product_screenshotsWhereUniqueInput | Prisma.product_screenshotsWhereUniqueInput[];
    delete?: Prisma.product_screenshotsWhereUniqueInput | Prisma.product_screenshotsWhereUniqueInput[];
    connect?: Prisma.product_screenshotsWhereUniqueInput | Prisma.product_screenshotsWhereUniqueInput[];
    update?: Prisma.product_screenshotsUpdateWithWhereUniqueWithoutMediaInput | Prisma.product_screenshotsUpdateWithWhereUniqueWithoutMediaInput[];
    updateMany?: Prisma.product_screenshotsUpdateManyWithWhereWithoutMediaInput | Prisma.product_screenshotsUpdateManyWithWhereWithoutMediaInput[];
    deleteMany?: Prisma.product_screenshotsScalarWhereInput | Prisma.product_screenshotsScalarWhereInput[];
};
export type product_screenshotsCreateNestedManyWithoutProductsInput = {
    create?: Prisma.XOR<Prisma.product_screenshotsCreateWithoutProductsInput, Prisma.product_screenshotsUncheckedCreateWithoutProductsInput> | Prisma.product_screenshotsCreateWithoutProductsInput[] | Prisma.product_screenshotsUncheckedCreateWithoutProductsInput[];
    connectOrCreate?: Prisma.product_screenshotsCreateOrConnectWithoutProductsInput | Prisma.product_screenshotsCreateOrConnectWithoutProductsInput[];
    createMany?: Prisma.product_screenshotsCreateManyProductsInputEnvelope;
    connect?: Prisma.product_screenshotsWhereUniqueInput | Prisma.product_screenshotsWhereUniqueInput[];
};
export type product_screenshotsUncheckedCreateNestedManyWithoutProductsInput = {
    create?: Prisma.XOR<Prisma.product_screenshotsCreateWithoutProductsInput, Prisma.product_screenshotsUncheckedCreateWithoutProductsInput> | Prisma.product_screenshotsCreateWithoutProductsInput[] | Prisma.product_screenshotsUncheckedCreateWithoutProductsInput[];
    connectOrCreate?: Prisma.product_screenshotsCreateOrConnectWithoutProductsInput | Prisma.product_screenshotsCreateOrConnectWithoutProductsInput[];
    createMany?: Prisma.product_screenshotsCreateManyProductsInputEnvelope;
    connect?: Prisma.product_screenshotsWhereUniqueInput | Prisma.product_screenshotsWhereUniqueInput[];
};
export type product_screenshotsUpdateManyWithoutProductsNestedInput = {
    create?: Prisma.XOR<Prisma.product_screenshotsCreateWithoutProductsInput, Prisma.product_screenshotsUncheckedCreateWithoutProductsInput> | Prisma.product_screenshotsCreateWithoutProductsInput[] | Prisma.product_screenshotsUncheckedCreateWithoutProductsInput[];
    connectOrCreate?: Prisma.product_screenshotsCreateOrConnectWithoutProductsInput | Prisma.product_screenshotsCreateOrConnectWithoutProductsInput[];
    upsert?: Prisma.product_screenshotsUpsertWithWhereUniqueWithoutProductsInput | Prisma.product_screenshotsUpsertWithWhereUniqueWithoutProductsInput[];
    createMany?: Prisma.product_screenshotsCreateManyProductsInputEnvelope;
    set?: Prisma.product_screenshotsWhereUniqueInput | Prisma.product_screenshotsWhereUniqueInput[];
    disconnect?: Prisma.product_screenshotsWhereUniqueInput | Prisma.product_screenshotsWhereUniqueInput[];
    delete?: Prisma.product_screenshotsWhereUniqueInput | Prisma.product_screenshotsWhereUniqueInput[];
    connect?: Prisma.product_screenshotsWhereUniqueInput | Prisma.product_screenshotsWhereUniqueInput[];
    update?: Prisma.product_screenshotsUpdateWithWhereUniqueWithoutProductsInput | Prisma.product_screenshotsUpdateWithWhereUniqueWithoutProductsInput[];
    updateMany?: Prisma.product_screenshotsUpdateManyWithWhereWithoutProductsInput | Prisma.product_screenshotsUpdateManyWithWhereWithoutProductsInput[];
    deleteMany?: Prisma.product_screenshotsScalarWhereInput | Prisma.product_screenshotsScalarWhereInput[];
};
export type product_screenshotsUncheckedUpdateManyWithoutProductsNestedInput = {
    create?: Prisma.XOR<Prisma.product_screenshotsCreateWithoutProductsInput, Prisma.product_screenshotsUncheckedCreateWithoutProductsInput> | Prisma.product_screenshotsCreateWithoutProductsInput[] | Prisma.product_screenshotsUncheckedCreateWithoutProductsInput[];
    connectOrCreate?: Prisma.product_screenshotsCreateOrConnectWithoutProductsInput | Prisma.product_screenshotsCreateOrConnectWithoutProductsInput[];
    upsert?: Prisma.product_screenshotsUpsertWithWhereUniqueWithoutProductsInput | Prisma.product_screenshotsUpsertWithWhereUniqueWithoutProductsInput[];
    createMany?: Prisma.product_screenshotsCreateManyProductsInputEnvelope;
    set?: Prisma.product_screenshotsWhereUniqueInput | Prisma.product_screenshotsWhereUniqueInput[];
    disconnect?: Prisma.product_screenshotsWhereUniqueInput | Prisma.product_screenshotsWhereUniqueInput[];
    delete?: Prisma.product_screenshotsWhereUniqueInput | Prisma.product_screenshotsWhereUniqueInput[];
    connect?: Prisma.product_screenshotsWhereUniqueInput | Prisma.product_screenshotsWhereUniqueInput[];
    update?: Prisma.product_screenshotsUpdateWithWhereUniqueWithoutProductsInput | Prisma.product_screenshotsUpdateWithWhereUniqueWithoutProductsInput[];
    updateMany?: Prisma.product_screenshotsUpdateManyWithWhereWithoutProductsInput | Prisma.product_screenshotsUpdateManyWithWhereWithoutProductsInput[];
    deleteMany?: Prisma.product_screenshotsScalarWhereInput | Prisma.product_screenshotsScalarWhereInput[];
};
export type product_screenshotsCreateWithoutMediaInput = {
    id?: bigint | number;
    order?: number;
    created_at?: Date | string | null;
    updated_at?: Date | string | null;
    products: Prisma.productsCreateNestedOneWithoutProduct_screenshotsInput;
};
export type product_screenshotsUncheckedCreateWithoutMediaInput = {
    id?: bigint | number;
    product_id: bigint | number;
    order?: number;
    created_at?: Date | string | null;
    updated_at?: Date | string | null;
};
export type product_screenshotsCreateOrConnectWithoutMediaInput = {
    where: Prisma.product_screenshotsWhereUniqueInput;
    create: Prisma.XOR<Prisma.product_screenshotsCreateWithoutMediaInput, Prisma.product_screenshotsUncheckedCreateWithoutMediaInput>;
};
export type product_screenshotsCreateManyMediaInputEnvelope = {
    data: Prisma.product_screenshotsCreateManyMediaInput | Prisma.product_screenshotsCreateManyMediaInput[];
    skipDuplicates?: boolean;
};
export type product_screenshotsUpsertWithWhereUniqueWithoutMediaInput = {
    where: Prisma.product_screenshotsWhereUniqueInput;
    update: Prisma.XOR<Prisma.product_screenshotsUpdateWithoutMediaInput, Prisma.product_screenshotsUncheckedUpdateWithoutMediaInput>;
    create: Prisma.XOR<Prisma.product_screenshotsCreateWithoutMediaInput, Prisma.product_screenshotsUncheckedCreateWithoutMediaInput>;
};
export type product_screenshotsUpdateWithWhereUniqueWithoutMediaInput = {
    where: Prisma.product_screenshotsWhereUniqueInput;
    data: Prisma.XOR<Prisma.product_screenshotsUpdateWithoutMediaInput, Prisma.product_screenshotsUncheckedUpdateWithoutMediaInput>;
};
export type product_screenshotsUpdateManyWithWhereWithoutMediaInput = {
    where: Prisma.product_screenshotsScalarWhereInput;
    data: Prisma.XOR<Prisma.product_screenshotsUpdateManyMutationInput, Prisma.product_screenshotsUncheckedUpdateManyWithoutMediaInput>;
};
export type product_screenshotsScalarWhereInput = {
    AND?: Prisma.product_screenshotsScalarWhereInput | Prisma.product_screenshotsScalarWhereInput[];
    OR?: Prisma.product_screenshotsScalarWhereInput[];
    NOT?: Prisma.product_screenshotsScalarWhereInput | Prisma.product_screenshotsScalarWhereInput[];
    id?: Prisma.BigIntFilter<"product_screenshots"> | bigint | number;
    product_id?: Prisma.BigIntFilter<"product_screenshots"> | bigint | number;
    media_id?: Prisma.BigIntFilter<"product_screenshots"> | bigint | number;
    order?: Prisma.IntFilter<"product_screenshots"> | number;
    created_at?: Prisma.DateTimeNullableFilter<"product_screenshots"> | Date | string | null;
    updated_at?: Prisma.DateTimeNullableFilter<"product_screenshots"> | Date | string | null;
};
export type product_screenshotsCreateWithoutProductsInput = {
    id?: bigint | number;
    order?: number;
    created_at?: Date | string | null;
    updated_at?: Date | string | null;
    media: Prisma.mediaCreateNestedOneWithoutProduct_screenshotsInput;
};
export type product_screenshotsUncheckedCreateWithoutProductsInput = {
    id?: bigint | number;
    media_id: bigint | number;
    order?: number;
    created_at?: Date | string | null;
    updated_at?: Date | string | null;
};
export type product_screenshotsCreateOrConnectWithoutProductsInput = {
    where: Prisma.product_screenshotsWhereUniqueInput;
    create: Prisma.XOR<Prisma.product_screenshotsCreateWithoutProductsInput, Prisma.product_screenshotsUncheckedCreateWithoutProductsInput>;
};
export type product_screenshotsCreateManyProductsInputEnvelope = {
    data: Prisma.product_screenshotsCreateManyProductsInput | Prisma.product_screenshotsCreateManyProductsInput[];
    skipDuplicates?: boolean;
};
export type product_screenshotsUpsertWithWhereUniqueWithoutProductsInput = {
    where: Prisma.product_screenshotsWhereUniqueInput;
    update: Prisma.XOR<Prisma.product_screenshotsUpdateWithoutProductsInput, Prisma.product_screenshotsUncheckedUpdateWithoutProductsInput>;
    create: Prisma.XOR<Prisma.product_screenshotsCreateWithoutProductsInput, Prisma.product_screenshotsUncheckedCreateWithoutProductsInput>;
};
export type product_screenshotsUpdateWithWhereUniqueWithoutProductsInput = {
    where: Prisma.product_screenshotsWhereUniqueInput;
    data: Prisma.XOR<Prisma.product_screenshotsUpdateWithoutProductsInput, Prisma.product_screenshotsUncheckedUpdateWithoutProductsInput>;
};
export type product_screenshotsUpdateManyWithWhereWithoutProductsInput = {
    where: Prisma.product_screenshotsScalarWhereInput;
    data: Prisma.XOR<Prisma.product_screenshotsUpdateManyMutationInput, Prisma.product_screenshotsUncheckedUpdateManyWithoutProductsInput>;
};
export type product_screenshotsCreateManyMediaInput = {
    id?: bigint | number;
    product_id: bigint | number;
    order?: number;
    created_at?: Date | string | null;
    updated_at?: Date | string | null;
};
export type product_screenshotsUpdateWithoutMediaInput = {
    id?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    order?: Prisma.IntFieldUpdateOperationsInput | number;
    created_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    updated_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    products?: Prisma.productsUpdateOneRequiredWithoutProduct_screenshotsNestedInput;
};
export type product_screenshotsUncheckedUpdateWithoutMediaInput = {
    id?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    product_id?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    order?: Prisma.IntFieldUpdateOperationsInput | number;
    created_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    updated_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
};
export type product_screenshotsUncheckedUpdateManyWithoutMediaInput = {
    id?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    product_id?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    order?: Prisma.IntFieldUpdateOperationsInput | number;
    created_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    updated_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
};
export type product_screenshotsCreateManyProductsInput = {
    id?: bigint | number;
    media_id: bigint | number;
    order?: number;
    created_at?: Date | string | null;
    updated_at?: Date | string | null;
};
export type product_screenshotsUpdateWithoutProductsInput = {
    id?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    order?: Prisma.IntFieldUpdateOperationsInput | number;
    created_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    updated_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    media?: Prisma.mediaUpdateOneRequiredWithoutProduct_screenshotsNestedInput;
};
export type product_screenshotsUncheckedUpdateWithoutProductsInput = {
    id?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    media_id?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    order?: Prisma.IntFieldUpdateOperationsInput | number;
    created_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    updated_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
};
export type product_screenshotsUncheckedUpdateManyWithoutProductsInput = {
    id?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    media_id?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    order?: Prisma.IntFieldUpdateOperationsInput | number;
    created_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    updated_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
};
export type product_screenshotsSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    product_id?: boolean;
    media_id?: boolean;
    order?: boolean;
    created_at?: boolean;
    updated_at?: boolean;
    media?: boolean | Prisma.mediaDefaultArgs<ExtArgs>;
    products?: boolean | Prisma.productsDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["product_screenshots"]>;
export type product_screenshotsSelectScalar = {
    id?: boolean;
    product_id?: boolean;
    media_id?: boolean;
    order?: boolean;
    created_at?: boolean;
    updated_at?: boolean;
};
export type product_screenshotsOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "product_id" | "media_id" | "order" | "created_at" | "updated_at", ExtArgs["result"]["product_screenshots"]>;
export type product_screenshotsInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    media?: boolean | Prisma.mediaDefaultArgs<ExtArgs>;
    products?: boolean | Prisma.productsDefaultArgs<ExtArgs>;
};
export type $product_screenshotsPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "product_screenshots";
    objects: {
        media: Prisma.$mediaPayload<ExtArgs>;
        products: Prisma.$productsPayload<ExtArgs>;
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id: bigint;
        product_id: bigint;
        media_id: bigint;
        order: number;
        created_at: Date | null;
        updated_at: Date | null;
    }, ExtArgs["result"]["product_screenshots"]>;
    composites: {};
};
export type product_screenshotsGetPayload<S extends boolean | null | undefined | product_screenshotsDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$product_screenshotsPayload, S>;
export type product_screenshotsCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<product_screenshotsFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: Product_screenshotsCountAggregateInputType | true;
};
export interface product_screenshotsDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['product_screenshots'];
        meta: {
            name: 'product_screenshots';
        };
    };
    findUnique<T extends product_screenshotsFindUniqueArgs>(args: Prisma.SelectSubset<T, product_screenshotsFindUniqueArgs<ExtArgs>>): Prisma.Prisma__product_screenshotsClient<runtime.Types.Result.GetResult<Prisma.$product_screenshotsPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findUniqueOrThrow<T extends product_screenshotsFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, product_screenshotsFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__product_screenshotsClient<runtime.Types.Result.GetResult<Prisma.$product_screenshotsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findFirst<T extends product_screenshotsFindFirstArgs>(args?: Prisma.SelectSubset<T, product_screenshotsFindFirstArgs<ExtArgs>>): Prisma.Prisma__product_screenshotsClient<runtime.Types.Result.GetResult<Prisma.$product_screenshotsPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findFirstOrThrow<T extends product_screenshotsFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, product_screenshotsFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__product_screenshotsClient<runtime.Types.Result.GetResult<Prisma.$product_screenshotsPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findMany<T extends product_screenshotsFindManyArgs>(args?: Prisma.SelectSubset<T, product_screenshotsFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$product_screenshotsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    create<T extends product_screenshotsCreateArgs>(args: Prisma.SelectSubset<T, product_screenshotsCreateArgs<ExtArgs>>): Prisma.Prisma__product_screenshotsClient<runtime.Types.Result.GetResult<Prisma.$product_screenshotsPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    createMany<T extends product_screenshotsCreateManyArgs>(args?: Prisma.SelectSubset<T, product_screenshotsCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    delete<T extends product_screenshotsDeleteArgs>(args: Prisma.SelectSubset<T, product_screenshotsDeleteArgs<ExtArgs>>): Prisma.Prisma__product_screenshotsClient<runtime.Types.Result.GetResult<Prisma.$product_screenshotsPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    update<T extends product_screenshotsUpdateArgs>(args: Prisma.SelectSubset<T, product_screenshotsUpdateArgs<ExtArgs>>): Prisma.Prisma__product_screenshotsClient<runtime.Types.Result.GetResult<Prisma.$product_screenshotsPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    deleteMany<T extends product_screenshotsDeleteManyArgs>(args?: Prisma.SelectSubset<T, product_screenshotsDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateMany<T extends product_screenshotsUpdateManyArgs>(args: Prisma.SelectSubset<T, product_screenshotsUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    upsert<T extends product_screenshotsUpsertArgs>(args: Prisma.SelectSubset<T, product_screenshotsUpsertArgs<ExtArgs>>): Prisma.Prisma__product_screenshotsClient<runtime.Types.Result.GetResult<Prisma.$product_screenshotsPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    count<T extends product_screenshotsCountArgs>(args?: Prisma.Subset<T, product_screenshotsCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], Product_screenshotsCountAggregateOutputType> : number>;
    aggregate<T extends Product_screenshotsAggregateArgs>(args: Prisma.Subset<T, Product_screenshotsAggregateArgs>): Prisma.PrismaPromise<GetProduct_screenshotsAggregateType<T>>;
    groupBy<T extends product_screenshotsGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: product_screenshotsGroupByArgs['orderBy'];
    } : {
        orderBy?: product_screenshotsGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, product_screenshotsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetProduct_screenshotsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    readonly fields: product_screenshotsFieldRefs;
}
export interface Prisma__product_screenshotsClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    media<T extends Prisma.mediaDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.mediaDefaultArgs<ExtArgs>>): Prisma.Prisma__mediaClient<runtime.Types.Result.GetResult<Prisma.$mediaPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    products<T extends Prisma.productsDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.productsDefaultArgs<ExtArgs>>): Prisma.Prisma__productsClient<runtime.Types.Result.GetResult<Prisma.$productsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): runtime.Types.Utils.JsPromise<TResult1 | TResult2>;
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): runtime.Types.Utils.JsPromise<T | TResult>;
    finally(onfinally?: (() => void) | undefined | null): runtime.Types.Utils.JsPromise<T>;
}
export interface product_screenshotsFieldRefs {
    readonly id: Prisma.FieldRef<"product_screenshots", 'BigInt'>;
    readonly product_id: Prisma.FieldRef<"product_screenshots", 'BigInt'>;
    readonly media_id: Prisma.FieldRef<"product_screenshots", 'BigInt'>;
    readonly order: Prisma.FieldRef<"product_screenshots", 'Int'>;
    readonly created_at: Prisma.FieldRef<"product_screenshots", 'DateTime'>;
    readonly updated_at: Prisma.FieldRef<"product_screenshots", 'DateTime'>;
}
export type product_screenshotsFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.product_screenshotsSelect<ExtArgs> | null;
    omit?: Prisma.product_screenshotsOmit<ExtArgs> | null;
    include?: Prisma.product_screenshotsInclude<ExtArgs> | null;
    where: Prisma.product_screenshotsWhereUniqueInput;
};
export type product_screenshotsFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.product_screenshotsSelect<ExtArgs> | null;
    omit?: Prisma.product_screenshotsOmit<ExtArgs> | null;
    include?: Prisma.product_screenshotsInclude<ExtArgs> | null;
    where: Prisma.product_screenshotsWhereUniqueInput;
};
export type product_screenshotsFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.product_screenshotsSelect<ExtArgs> | null;
    omit?: Prisma.product_screenshotsOmit<ExtArgs> | null;
    include?: Prisma.product_screenshotsInclude<ExtArgs> | null;
    where?: Prisma.product_screenshotsWhereInput;
    orderBy?: Prisma.product_screenshotsOrderByWithRelationInput | Prisma.product_screenshotsOrderByWithRelationInput[];
    cursor?: Prisma.product_screenshotsWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.Product_screenshotsScalarFieldEnum | Prisma.Product_screenshotsScalarFieldEnum[];
};
export type product_screenshotsFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.product_screenshotsSelect<ExtArgs> | null;
    omit?: Prisma.product_screenshotsOmit<ExtArgs> | null;
    include?: Prisma.product_screenshotsInclude<ExtArgs> | null;
    where?: Prisma.product_screenshotsWhereInput;
    orderBy?: Prisma.product_screenshotsOrderByWithRelationInput | Prisma.product_screenshotsOrderByWithRelationInput[];
    cursor?: Prisma.product_screenshotsWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.Product_screenshotsScalarFieldEnum | Prisma.Product_screenshotsScalarFieldEnum[];
};
export type product_screenshotsFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.product_screenshotsSelect<ExtArgs> | null;
    omit?: Prisma.product_screenshotsOmit<ExtArgs> | null;
    include?: Prisma.product_screenshotsInclude<ExtArgs> | null;
    where?: Prisma.product_screenshotsWhereInput;
    orderBy?: Prisma.product_screenshotsOrderByWithRelationInput | Prisma.product_screenshotsOrderByWithRelationInput[];
    cursor?: Prisma.product_screenshotsWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.Product_screenshotsScalarFieldEnum | Prisma.Product_screenshotsScalarFieldEnum[];
};
export type product_screenshotsCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.product_screenshotsSelect<ExtArgs> | null;
    omit?: Prisma.product_screenshotsOmit<ExtArgs> | null;
    include?: Prisma.product_screenshotsInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.product_screenshotsCreateInput, Prisma.product_screenshotsUncheckedCreateInput>;
};
export type product_screenshotsCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.product_screenshotsCreateManyInput | Prisma.product_screenshotsCreateManyInput[];
    skipDuplicates?: boolean;
};
export type product_screenshotsUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.product_screenshotsSelect<ExtArgs> | null;
    omit?: Prisma.product_screenshotsOmit<ExtArgs> | null;
    include?: Prisma.product_screenshotsInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.product_screenshotsUpdateInput, Prisma.product_screenshotsUncheckedUpdateInput>;
    where: Prisma.product_screenshotsWhereUniqueInput;
};
export type product_screenshotsUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.XOR<Prisma.product_screenshotsUpdateManyMutationInput, Prisma.product_screenshotsUncheckedUpdateManyInput>;
    where?: Prisma.product_screenshotsWhereInput;
    limit?: number;
};
export type product_screenshotsUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.product_screenshotsSelect<ExtArgs> | null;
    omit?: Prisma.product_screenshotsOmit<ExtArgs> | null;
    include?: Prisma.product_screenshotsInclude<ExtArgs> | null;
    where: Prisma.product_screenshotsWhereUniqueInput;
    create: Prisma.XOR<Prisma.product_screenshotsCreateInput, Prisma.product_screenshotsUncheckedCreateInput>;
    update: Prisma.XOR<Prisma.product_screenshotsUpdateInput, Prisma.product_screenshotsUncheckedUpdateInput>;
};
export type product_screenshotsDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.product_screenshotsSelect<ExtArgs> | null;
    omit?: Prisma.product_screenshotsOmit<ExtArgs> | null;
    include?: Prisma.product_screenshotsInclude<ExtArgs> | null;
    where: Prisma.product_screenshotsWhereUniqueInput;
};
export type product_screenshotsDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.product_screenshotsWhereInput;
    limit?: number;
};
export type product_screenshotsDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.product_screenshotsSelect<ExtArgs> | null;
    omit?: Prisma.product_screenshotsOmit<ExtArgs> | null;
    include?: Prisma.product_screenshotsInclude<ExtArgs> | null;
};
export {};
