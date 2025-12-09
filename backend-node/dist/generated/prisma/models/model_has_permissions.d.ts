import type * as runtime from "@prisma/client/runtime/client";
import type * as Prisma from "../internal/prismaNamespace.js";
export type model_has_permissionsModel = runtime.Types.Result.DefaultSelection<Prisma.$model_has_permissionsPayload>;
export type AggregateModel_has_permissions = {
    _count: Model_has_permissionsCountAggregateOutputType | null;
    _avg: Model_has_permissionsAvgAggregateOutputType | null;
    _sum: Model_has_permissionsSumAggregateOutputType | null;
    _min: Model_has_permissionsMinAggregateOutputType | null;
    _max: Model_has_permissionsMaxAggregateOutputType | null;
};
export type Model_has_permissionsAvgAggregateOutputType = {
    permission_id: number | null;
    model_id: number | null;
};
export type Model_has_permissionsSumAggregateOutputType = {
    permission_id: bigint | null;
    model_id: bigint | null;
};
export type Model_has_permissionsMinAggregateOutputType = {
    permission_id: bigint | null;
    model_type: string | null;
    model_id: bigint | null;
};
export type Model_has_permissionsMaxAggregateOutputType = {
    permission_id: bigint | null;
    model_type: string | null;
    model_id: bigint | null;
};
export type Model_has_permissionsCountAggregateOutputType = {
    permission_id: number;
    model_type: number;
    model_id: number;
    _all: number;
};
export type Model_has_permissionsAvgAggregateInputType = {
    permission_id?: true;
    model_id?: true;
};
export type Model_has_permissionsSumAggregateInputType = {
    permission_id?: true;
    model_id?: true;
};
export type Model_has_permissionsMinAggregateInputType = {
    permission_id?: true;
    model_type?: true;
    model_id?: true;
};
export type Model_has_permissionsMaxAggregateInputType = {
    permission_id?: true;
    model_type?: true;
    model_id?: true;
};
export type Model_has_permissionsCountAggregateInputType = {
    permission_id?: true;
    model_type?: true;
    model_id?: true;
    _all?: true;
};
export type Model_has_permissionsAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.model_has_permissionsWhereInput;
    orderBy?: Prisma.model_has_permissionsOrderByWithRelationInput | Prisma.model_has_permissionsOrderByWithRelationInput[];
    cursor?: Prisma.model_has_permissionsWhereUniqueInput;
    take?: number;
    skip?: number;
    _count?: true | Model_has_permissionsCountAggregateInputType;
    _avg?: Model_has_permissionsAvgAggregateInputType;
    _sum?: Model_has_permissionsSumAggregateInputType;
    _min?: Model_has_permissionsMinAggregateInputType;
    _max?: Model_has_permissionsMaxAggregateInputType;
};
export type GetModel_has_permissionsAggregateType<T extends Model_has_permissionsAggregateArgs> = {
    [P in keyof T & keyof AggregateModel_has_permissions]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateModel_has_permissions[P]> : Prisma.GetScalarType<T[P], AggregateModel_has_permissions[P]>;
};
export type model_has_permissionsGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.model_has_permissionsWhereInput;
    orderBy?: Prisma.model_has_permissionsOrderByWithAggregationInput | Prisma.model_has_permissionsOrderByWithAggregationInput[];
    by: Prisma.Model_has_permissionsScalarFieldEnum[] | Prisma.Model_has_permissionsScalarFieldEnum;
    having?: Prisma.model_has_permissionsScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: Model_has_permissionsCountAggregateInputType | true;
    _avg?: Model_has_permissionsAvgAggregateInputType;
    _sum?: Model_has_permissionsSumAggregateInputType;
    _min?: Model_has_permissionsMinAggregateInputType;
    _max?: Model_has_permissionsMaxAggregateInputType;
};
export type Model_has_permissionsGroupByOutputType = {
    permission_id: bigint;
    model_type: string;
    model_id: bigint;
    _count: Model_has_permissionsCountAggregateOutputType | null;
    _avg: Model_has_permissionsAvgAggregateOutputType | null;
    _sum: Model_has_permissionsSumAggregateOutputType | null;
    _min: Model_has_permissionsMinAggregateOutputType | null;
    _max: Model_has_permissionsMaxAggregateOutputType | null;
};
type GetModel_has_permissionsGroupByPayload<T extends model_has_permissionsGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<Model_has_permissionsGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof Model_has_permissionsGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], Model_has_permissionsGroupByOutputType[P]> : Prisma.GetScalarType<T[P], Model_has_permissionsGroupByOutputType[P]>;
}>>;
export type model_has_permissionsWhereInput = {
    AND?: Prisma.model_has_permissionsWhereInput | Prisma.model_has_permissionsWhereInput[];
    OR?: Prisma.model_has_permissionsWhereInput[];
    NOT?: Prisma.model_has_permissionsWhereInput | Prisma.model_has_permissionsWhereInput[];
    permission_id?: Prisma.BigIntFilter<"model_has_permissions"> | bigint | number;
    model_type?: Prisma.StringFilter<"model_has_permissions"> | string;
    model_id?: Prisma.BigIntFilter<"model_has_permissions"> | bigint | number;
    permissions?: Prisma.XOR<Prisma.PermissionsScalarRelationFilter, Prisma.permissionsWhereInput>;
};
export type model_has_permissionsOrderByWithRelationInput = {
    permission_id?: Prisma.SortOrder;
    model_type?: Prisma.SortOrder;
    model_id?: Prisma.SortOrder;
    permissions?: Prisma.permissionsOrderByWithRelationInput;
    _relevance?: Prisma.model_has_permissionsOrderByRelevanceInput;
};
export type model_has_permissionsWhereUniqueInput = Prisma.AtLeast<{
    permission_id_model_id_model_type?: Prisma.model_has_permissionsPermission_idModel_idModel_typeCompoundUniqueInput;
    AND?: Prisma.model_has_permissionsWhereInput | Prisma.model_has_permissionsWhereInput[];
    OR?: Prisma.model_has_permissionsWhereInput[];
    NOT?: Prisma.model_has_permissionsWhereInput | Prisma.model_has_permissionsWhereInput[];
    permission_id?: Prisma.BigIntFilter<"model_has_permissions"> | bigint | number;
    model_type?: Prisma.StringFilter<"model_has_permissions"> | string;
    model_id?: Prisma.BigIntFilter<"model_has_permissions"> | bigint | number;
    permissions?: Prisma.XOR<Prisma.PermissionsScalarRelationFilter, Prisma.permissionsWhereInput>;
}, "permission_id_model_id_model_type">;
export type model_has_permissionsOrderByWithAggregationInput = {
    permission_id?: Prisma.SortOrder;
    model_type?: Prisma.SortOrder;
    model_id?: Prisma.SortOrder;
    _count?: Prisma.model_has_permissionsCountOrderByAggregateInput;
    _avg?: Prisma.model_has_permissionsAvgOrderByAggregateInput;
    _max?: Prisma.model_has_permissionsMaxOrderByAggregateInput;
    _min?: Prisma.model_has_permissionsMinOrderByAggregateInput;
    _sum?: Prisma.model_has_permissionsSumOrderByAggregateInput;
};
export type model_has_permissionsScalarWhereWithAggregatesInput = {
    AND?: Prisma.model_has_permissionsScalarWhereWithAggregatesInput | Prisma.model_has_permissionsScalarWhereWithAggregatesInput[];
    OR?: Prisma.model_has_permissionsScalarWhereWithAggregatesInput[];
    NOT?: Prisma.model_has_permissionsScalarWhereWithAggregatesInput | Prisma.model_has_permissionsScalarWhereWithAggregatesInput[];
    permission_id?: Prisma.BigIntWithAggregatesFilter<"model_has_permissions"> | bigint | number;
    model_type?: Prisma.StringWithAggregatesFilter<"model_has_permissions"> | string;
    model_id?: Prisma.BigIntWithAggregatesFilter<"model_has_permissions"> | bigint | number;
};
export type model_has_permissionsCreateInput = {
    model_type: string;
    model_id: bigint | number;
    permissions: Prisma.permissionsCreateNestedOneWithoutModel_has_permissionsInput;
};
export type model_has_permissionsUncheckedCreateInput = {
    permission_id: bigint | number;
    model_type: string;
    model_id: bigint | number;
};
export type model_has_permissionsUpdateInput = {
    model_type?: Prisma.StringFieldUpdateOperationsInput | string;
    model_id?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    permissions?: Prisma.permissionsUpdateOneRequiredWithoutModel_has_permissionsNestedInput;
};
export type model_has_permissionsUncheckedUpdateInput = {
    permission_id?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    model_type?: Prisma.StringFieldUpdateOperationsInput | string;
    model_id?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
};
export type model_has_permissionsCreateManyInput = {
    permission_id: bigint | number;
    model_type: string;
    model_id: bigint | number;
};
export type model_has_permissionsUpdateManyMutationInput = {
    model_type?: Prisma.StringFieldUpdateOperationsInput | string;
    model_id?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
};
export type model_has_permissionsUncheckedUpdateManyInput = {
    permission_id?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    model_type?: Prisma.StringFieldUpdateOperationsInput | string;
    model_id?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
};
export type model_has_permissionsOrderByRelevanceInput = {
    fields: Prisma.model_has_permissionsOrderByRelevanceFieldEnum | Prisma.model_has_permissionsOrderByRelevanceFieldEnum[];
    sort: Prisma.SortOrder;
    search: string;
};
export type model_has_permissionsPermission_idModel_idModel_typeCompoundUniqueInput = {
    permission_id: bigint | number;
    model_id: bigint | number;
    model_type: string;
};
export type model_has_permissionsCountOrderByAggregateInput = {
    permission_id?: Prisma.SortOrder;
    model_type?: Prisma.SortOrder;
    model_id?: Prisma.SortOrder;
};
export type model_has_permissionsAvgOrderByAggregateInput = {
    permission_id?: Prisma.SortOrder;
    model_id?: Prisma.SortOrder;
};
export type model_has_permissionsMaxOrderByAggregateInput = {
    permission_id?: Prisma.SortOrder;
    model_type?: Prisma.SortOrder;
    model_id?: Prisma.SortOrder;
};
export type model_has_permissionsMinOrderByAggregateInput = {
    permission_id?: Prisma.SortOrder;
    model_type?: Prisma.SortOrder;
    model_id?: Prisma.SortOrder;
};
export type model_has_permissionsSumOrderByAggregateInput = {
    permission_id?: Prisma.SortOrder;
    model_id?: Prisma.SortOrder;
};
export type Model_has_permissionsListRelationFilter = {
    every?: Prisma.model_has_permissionsWhereInput;
    some?: Prisma.model_has_permissionsWhereInput;
    none?: Prisma.model_has_permissionsWhereInput;
};
export type model_has_permissionsOrderByRelationAggregateInput = {
    _count?: Prisma.SortOrder;
};
export type model_has_permissionsCreateNestedManyWithoutPermissionsInput = {
    create?: Prisma.XOR<Prisma.model_has_permissionsCreateWithoutPermissionsInput, Prisma.model_has_permissionsUncheckedCreateWithoutPermissionsInput> | Prisma.model_has_permissionsCreateWithoutPermissionsInput[] | Prisma.model_has_permissionsUncheckedCreateWithoutPermissionsInput[];
    connectOrCreate?: Prisma.model_has_permissionsCreateOrConnectWithoutPermissionsInput | Prisma.model_has_permissionsCreateOrConnectWithoutPermissionsInput[];
    createMany?: Prisma.model_has_permissionsCreateManyPermissionsInputEnvelope;
    connect?: Prisma.model_has_permissionsWhereUniqueInput | Prisma.model_has_permissionsWhereUniqueInput[];
};
export type model_has_permissionsUncheckedCreateNestedManyWithoutPermissionsInput = {
    create?: Prisma.XOR<Prisma.model_has_permissionsCreateWithoutPermissionsInput, Prisma.model_has_permissionsUncheckedCreateWithoutPermissionsInput> | Prisma.model_has_permissionsCreateWithoutPermissionsInput[] | Prisma.model_has_permissionsUncheckedCreateWithoutPermissionsInput[];
    connectOrCreate?: Prisma.model_has_permissionsCreateOrConnectWithoutPermissionsInput | Prisma.model_has_permissionsCreateOrConnectWithoutPermissionsInput[];
    createMany?: Prisma.model_has_permissionsCreateManyPermissionsInputEnvelope;
    connect?: Prisma.model_has_permissionsWhereUniqueInput | Prisma.model_has_permissionsWhereUniqueInput[];
};
export type model_has_permissionsUpdateManyWithoutPermissionsNestedInput = {
    create?: Prisma.XOR<Prisma.model_has_permissionsCreateWithoutPermissionsInput, Prisma.model_has_permissionsUncheckedCreateWithoutPermissionsInput> | Prisma.model_has_permissionsCreateWithoutPermissionsInput[] | Prisma.model_has_permissionsUncheckedCreateWithoutPermissionsInput[];
    connectOrCreate?: Prisma.model_has_permissionsCreateOrConnectWithoutPermissionsInput | Prisma.model_has_permissionsCreateOrConnectWithoutPermissionsInput[];
    upsert?: Prisma.model_has_permissionsUpsertWithWhereUniqueWithoutPermissionsInput | Prisma.model_has_permissionsUpsertWithWhereUniqueWithoutPermissionsInput[];
    createMany?: Prisma.model_has_permissionsCreateManyPermissionsInputEnvelope;
    set?: Prisma.model_has_permissionsWhereUniqueInput | Prisma.model_has_permissionsWhereUniqueInput[];
    disconnect?: Prisma.model_has_permissionsWhereUniqueInput | Prisma.model_has_permissionsWhereUniqueInput[];
    delete?: Prisma.model_has_permissionsWhereUniqueInput | Prisma.model_has_permissionsWhereUniqueInput[];
    connect?: Prisma.model_has_permissionsWhereUniqueInput | Prisma.model_has_permissionsWhereUniqueInput[];
    update?: Prisma.model_has_permissionsUpdateWithWhereUniqueWithoutPermissionsInput | Prisma.model_has_permissionsUpdateWithWhereUniqueWithoutPermissionsInput[];
    updateMany?: Prisma.model_has_permissionsUpdateManyWithWhereWithoutPermissionsInput | Prisma.model_has_permissionsUpdateManyWithWhereWithoutPermissionsInput[];
    deleteMany?: Prisma.model_has_permissionsScalarWhereInput | Prisma.model_has_permissionsScalarWhereInput[];
};
export type model_has_permissionsUncheckedUpdateManyWithoutPermissionsNestedInput = {
    create?: Prisma.XOR<Prisma.model_has_permissionsCreateWithoutPermissionsInput, Prisma.model_has_permissionsUncheckedCreateWithoutPermissionsInput> | Prisma.model_has_permissionsCreateWithoutPermissionsInput[] | Prisma.model_has_permissionsUncheckedCreateWithoutPermissionsInput[];
    connectOrCreate?: Prisma.model_has_permissionsCreateOrConnectWithoutPermissionsInput | Prisma.model_has_permissionsCreateOrConnectWithoutPermissionsInput[];
    upsert?: Prisma.model_has_permissionsUpsertWithWhereUniqueWithoutPermissionsInput | Prisma.model_has_permissionsUpsertWithWhereUniqueWithoutPermissionsInput[];
    createMany?: Prisma.model_has_permissionsCreateManyPermissionsInputEnvelope;
    set?: Prisma.model_has_permissionsWhereUniqueInput | Prisma.model_has_permissionsWhereUniqueInput[];
    disconnect?: Prisma.model_has_permissionsWhereUniqueInput | Prisma.model_has_permissionsWhereUniqueInput[];
    delete?: Prisma.model_has_permissionsWhereUniqueInput | Prisma.model_has_permissionsWhereUniqueInput[];
    connect?: Prisma.model_has_permissionsWhereUniqueInput | Prisma.model_has_permissionsWhereUniqueInput[];
    update?: Prisma.model_has_permissionsUpdateWithWhereUniqueWithoutPermissionsInput | Prisma.model_has_permissionsUpdateWithWhereUniqueWithoutPermissionsInput[];
    updateMany?: Prisma.model_has_permissionsUpdateManyWithWhereWithoutPermissionsInput | Prisma.model_has_permissionsUpdateManyWithWhereWithoutPermissionsInput[];
    deleteMany?: Prisma.model_has_permissionsScalarWhereInput | Prisma.model_has_permissionsScalarWhereInput[];
};
export type model_has_permissionsCreateWithoutPermissionsInput = {
    model_type: string;
    model_id: bigint | number;
};
export type model_has_permissionsUncheckedCreateWithoutPermissionsInput = {
    model_type: string;
    model_id: bigint | number;
};
export type model_has_permissionsCreateOrConnectWithoutPermissionsInput = {
    where: Prisma.model_has_permissionsWhereUniqueInput;
    create: Prisma.XOR<Prisma.model_has_permissionsCreateWithoutPermissionsInput, Prisma.model_has_permissionsUncheckedCreateWithoutPermissionsInput>;
};
export type model_has_permissionsCreateManyPermissionsInputEnvelope = {
    data: Prisma.model_has_permissionsCreateManyPermissionsInput | Prisma.model_has_permissionsCreateManyPermissionsInput[];
    skipDuplicates?: boolean;
};
export type model_has_permissionsUpsertWithWhereUniqueWithoutPermissionsInput = {
    where: Prisma.model_has_permissionsWhereUniqueInput;
    update: Prisma.XOR<Prisma.model_has_permissionsUpdateWithoutPermissionsInput, Prisma.model_has_permissionsUncheckedUpdateWithoutPermissionsInput>;
    create: Prisma.XOR<Prisma.model_has_permissionsCreateWithoutPermissionsInput, Prisma.model_has_permissionsUncheckedCreateWithoutPermissionsInput>;
};
export type model_has_permissionsUpdateWithWhereUniqueWithoutPermissionsInput = {
    where: Prisma.model_has_permissionsWhereUniqueInput;
    data: Prisma.XOR<Prisma.model_has_permissionsUpdateWithoutPermissionsInput, Prisma.model_has_permissionsUncheckedUpdateWithoutPermissionsInput>;
};
export type model_has_permissionsUpdateManyWithWhereWithoutPermissionsInput = {
    where: Prisma.model_has_permissionsScalarWhereInput;
    data: Prisma.XOR<Prisma.model_has_permissionsUpdateManyMutationInput, Prisma.model_has_permissionsUncheckedUpdateManyWithoutPermissionsInput>;
};
export type model_has_permissionsScalarWhereInput = {
    AND?: Prisma.model_has_permissionsScalarWhereInput | Prisma.model_has_permissionsScalarWhereInput[];
    OR?: Prisma.model_has_permissionsScalarWhereInput[];
    NOT?: Prisma.model_has_permissionsScalarWhereInput | Prisma.model_has_permissionsScalarWhereInput[];
    permission_id?: Prisma.BigIntFilter<"model_has_permissions"> | bigint | number;
    model_type?: Prisma.StringFilter<"model_has_permissions"> | string;
    model_id?: Prisma.BigIntFilter<"model_has_permissions"> | bigint | number;
};
export type model_has_permissionsCreateManyPermissionsInput = {
    model_type: string;
    model_id: bigint | number;
};
export type model_has_permissionsUpdateWithoutPermissionsInput = {
    model_type?: Prisma.StringFieldUpdateOperationsInput | string;
    model_id?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
};
export type model_has_permissionsUncheckedUpdateWithoutPermissionsInput = {
    model_type?: Prisma.StringFieldUpdateOperationsInput | string;
    model_id?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
};
export type model_has_permissionsUncheckedUpdateManyWithoutPermissionsInput = {
    model_type?: Prisma.StringFieldUpdateOperationsInput | string;
    model_id?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
};
export type model_has_permissionsSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    permission_id?: boolean;
    model_type?: boolean;
    model_id?: boolean;
    permissions?: boolean | Prisma.permissionsDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["model_has_permissions"]>;
export type model_has_permissionsSelectScalar = {
    permission_id?: boolean;
    model_type?: boolean;
    model_id?: boolean;
};
export type model_has_permissionsOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"permission_id" | "model_type" | "model_id", ExtArgs["result"]["model_has_permissions"]>;
export type model_has_permissionsInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    permissions?: boolean | Prisma.permissionsDefaultArgs<ExtArgs>;
};
export type $model_has_permissionsPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "model_has_permissions";
    objects: {
        permissions: Prisma.$permissionsPayload<ExtArgs>;
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        permission_id: bigint;
        model_type: string;
        model_id: bigint;
    }, ExtArgs["result"]["model_has_permissions"]>;
    composites: {};
};
export type model_has_permissionsGetPayload<S extends boolean | null | undefined | model_has_permissionsDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$model_has_permissionsPayload, S>;
export type model_has_permissionsCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<model_has_permissionsFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: Model_has_permissionsCountAggregateInputType | true;
};
export interface model_has_permissionsDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['model_has_permissions'];
        meta: {
            name: 'model_has_permissions';
        };
    };
    findUnique<T extends model_has_permissionsFindUniqueArgs>(args: Prisma.SelectSubset<T, model_has_permissionsFindUniqueArgs<ExtArgs>>): Prisma.Prisma__model_has_permissionsClient<runtime.Types.Result.GetResult<Prisma.$model_has_permissionsPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findUniqueOrThrow<T extends model_has_permissionsFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, model_has_permissionsFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__model_has_permissionsClient<runtime.Types.Result.GetResult<Prisma.$model_has_permissionsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findFirst<T extends model_has_permissionsFindFirstArgs>(args?: Prisma.SelectSubset<T, model_has_permissionsFindFirstArgs<ExtArgs>>): Prisma.Prisma__model_has_permissionsClient<runtime.Types.Result.GetResult<Prisma.$model_has_permissionsPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findFirstOrThrow<T extends model_has_permissionsFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, model_has_permissionsFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__model_has_permissionsClient<runtime.Types.Result.GetResult<Prisma.$model_has_permissionsPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findMany<T extends model_has_permissionsFindManyArgs>(args?: Prisma.SelectSubset<T, model_has_permissionsFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$model_has_permissionsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    create<T extends model_has_permissionsCreateArgs>(args: Prisma.SelectSubset<T, model_has_permissionsCreateArgs<ExtArgs>>): Prisma.Prisma__model_has_permissionsClient<runtime.Types.Result.GetResult<Prisma.$model_has_permissionsPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    createMany<T extends model_has_permissionsCreateManyArgs>(args?: Prisma.SelectSubset<T, model_has_permissionsCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    delete<T extends model_has_permissionsDeleteArgs>(args: Prisma.SelectSubset<T, model_has_permissionsDeleteArgs<ExtArgs>>): Prisma.Prisma__model_has_permissionsClient<runtime.Types.Result.GetResult<Prisma.$model_has_permissionsPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    update<T extends model_has_permissionsUpdateArgs>(args: Prisma.SelectSubset<T, model_has_permissionsUpdateArgs<ExtArgs>>): Prisma.Prisma__model_has_permissionsClient<runtime.Types.Result.GetResult<Prisma.$model_has_permissionsPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    deleteMany<T extends model_has_permissionsDeleteManyArgs>(args?: Prisma.SelectSubset<T, model_has_permissionsDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateMany<T extends model_has_permissionsUpdateManyArgs>(args: Prisma.SelectSubset<T, model_has_permissionsUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    upsert<T extends model_has_permissionsUpsertArgs>(args: Prisma.SelectSubset<T, model_has_permissionsUpsertArgs<ExtArgs>>): Prisma.Prisma__model_has_permissionsClient<runtime.Types.Result.GetResult<Prisma.$model_has_permissionsPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    count<T extends model_has_permissionsCountArgs>(args?: Prisma.Subset<T, model_has_permissionsCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], Model_has_permissionsCountAggregateOutputType> : number>;
    aggregate<T extends Model_has_permissionsAggregateArgs>(args: Prisma.Subset<T, Model_has_permissionsAggregateArgs>): Prisma.PrismaPromise<GetModel_has_permissionsAggregateType<T>>;
    groupBy<T extends model_has_permissionsGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: model_has_permissionsGroupByArgs['orderBy'];
    } : {
        orderBy?: model_has_permissionsGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, model_has_permissionsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetModel_has_permissionsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    readonly fields: model_has_permissionsFieldRefs;
}
export interface Prisma__model_has_permissionsClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    permissions<T extends Prisma.permissionsDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.permissionsDefaultArgs<ExtArgs>>): Prisma.Prisma__permissionsClient<runtime.Types.Result.GetResult<Prisma.$permissionsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): runtime.Types.Utils.JsPromise<TResult1 | TResult2>;
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): runtime.Types.Utils.JsPromise<T | TResult>;
    finally(onfinally?: (() => void) | undefined | null): runtime.Types.Utils.JsPromise<T>;
}
export interface model_has_permissionsFieldRefs {
    readonly permission_id: Prisma.FieldRef<"model_has_permissions", 'BigInt'>;
    readonly model_type: Prisma.FieldRef<"model_has_permissions", 'String'>;
    readonly model_id: Prisma.FieldRef<"model_has_permissions", 'BigInt'>;
}
export type model_has_permissionsFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.model_has_permissionsSelect<ExtArgs> | null;
    omit?: Prisma.model_has_permissionsOmit<ExtArgs> | null;
    include?: Prisma.model_has_permissionsInclude<ExtArgs> | null;
    where: Prisma.model_has_permissionsWhereUniqueInput;
};
export type model_has_permissionsFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.model_has_permissionsSelect<ExtArgs> | null;
    omit?: Prisma.model_has_permissionsOmit<ExtArgs> | null;
    include?: Prisma.model_has_permissionsInclude<ExtArgs> | null;
    where: Prisma.model_has_permissionsWhereUniqueInput;
};
export type model_has_permissionsFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.model_has_permissionsSelect<ExtArgs> | null;
    omit?: Prisma.model_has_permissionsOmit<ExtArgs> | null;
    include?: Prisma.model_has_permissionsInclude<ExtArgs> | null;
    where?: Prisma.model_has_permissionsWhereInput;
    orderBy?: Prisma.model_has_permissionsOrderByWithRelationInput | Prisma.model_has_permissionsOrderByWithRelationInput[];
    cursor?: Prisma.model_has_permissionsWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.Model_has_permissionsScalarFieldEnum | Prisma.Model_has_permissionsScalarFieldEnum[];
};
export type model_has_permissionsFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.model_has_permissionsSelect<ExtArgs> | null;
    omit?: Prisma.model_has_permissionsOmit<ExtArgs> | null;
    include?: Prisma.model_has_permissionsInclude<ExtArgs> | null;
    where?: Prisma.model_has_permissionsWhereInput;
    orderBy?: Prisma.model_has_permissionsOrderByWithRelationInput | Prisma.model_has_permissionsOrderByWithRelationInput[];
    cursor?: Prisma.model_has_permissionsWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.Model_has_permissionsScalarFieldEnum | Prisma.Model_has_permissionsScalarFieldEnum[];
};
export type model_has_permissionsFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.model_has_permissionsSelect<ExtArgs> | null;
    omit?: Prisma.model_has_permissionsOmit<ExtArgs> | null;
    include?: Prisma.model_has_permissionsInclude<ExtArgs> | null;
    where?: Prisma.model_has_permissionsWhereInput;
    orderBy?: Prisma.model_has_permissionsOrderByWithRelationInput | Prisma.model_has_permissionsOrderByWithRelationInput[];
    cursor?: Prisma.model_has_permissionsWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.Model_has_permissionsScalarFieldEnum | Prisma.Model_has_permissionsScalarFieldEnum[];
};
export type model_has_permissionsCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.model_has_permissionsSelect<ExtArgs> | null;
    omit?: Prisma.model_has_permissionsOmit<ExtArgs> | null;
    include?: Prisma.model_has_permissionsInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.model_has_permissionsCreateInput, Prisma.model_has_permissionsUncheckedCreateInput>;
};
export type model_has_permissionsCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.model_has_permissionsCreateManyInput | Prisma.model_has_permissionsCreateManyInput[];
    skipDuplicates?: boolean;
};
export type model_has_permissionsUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.model_has_permissionsSelect<ExtArgs> | null;
    omit?: Prisma.model_has_permissionsOmit<ExtArgs> | null;
    include?: Prisma.model_has_permissionsInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.model_has_permissionsUpdateInput, Prisma.model_has_permissionsUncheckedUpdateInput>;
    where: Prisma.model_has_permissionsWhereUniqueInput;
};
export type model_has_permissionsUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.XOR<Prisma.model_has_permissionsUpdateManyMutationInput, Prisma.model_has_permissionsUncheckedUpdateManyInput>;
    where?: Prisma.model_has_permissionsWhereInput;
    limit?: number;
};
export type model_has_permissionsUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.model_has_permissionsSelect<ExtArgs> | null;
    omit?: Prisma.model_has_permissionsOmit<ExtArgs> | null;
    include?: Prisma.model_has_permissionsInclude<ExtArgs> | null;
    where: Prisma.model_has_permissionsWhereUniqueInput;
    create: Prisma.XOR<Prisma.model_has_permissionsCreateInput, Prisma.model_has_permissionsUncheckedCreateInput>;
    update: Prisma.XOR<Prisma.model_has_permissionsUpdateInput, Prisma.model_has_permissionsUncheckedUpdateInput>;
};
export type model_has_permissionsDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.model_has_permissionsSelect<ExtArgs> | null;
    omit?: Prisma.model_has_permissionsOmit<ExtArgs> | null;
    include?: Prisma.model_has_permissionsInclude<ExtArgs> | null;
    where: Prisma.model_has_permissionsWhereUniqueInput;
};
export type model_has_permissionsDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.model_has_permissionsWhereInput;
    limit?: number;
};
export type model_has_permissionsDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.model_has_permissionsSelect<ExtArgs> | null;
    omit?: Prisma.model_has_permissionsOmit<ExtArgs> | null;
    include?: Prisma.model_has_permissionsInclude<ExtArgs> | null;
};
export {};
