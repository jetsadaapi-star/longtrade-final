import type * as runtime from "@prisma/client/runtime/client";
import type * as Prisma from "../internal/prismaNamespace.js";
export type model_has_rolesModel = runtime.Types.Result.DefaultSelection<Prisma.$model_has_rolesPayload>;
export type AggregateModel_has_roles = {
    _count: Model_has_rolesCountAggregateOutputType | null;
    _avg: Model_has_rolesAvgAggregateOutputType | null;
    _sum: Model_has_rolesSumAggregateOutputType | null;
    _min: Model_has_rolesMinAggregateOutputType | null;
    _max: Model_has_rolesMaxAggregateOutputType | null;
};
export type Model_has_rolesAvgAggregateOutputType = {
    role_id: number | null;
    model_id: number | null;
};
export type Model_has_rolesSumAggregateOutputType = {
    role_id: bigint | null;
    model_id: bigint | null;
};
export type Model_has_rolesMinAggregateOutputType = {
    role_id: bigint | null;
    model_type: string | null;
    model_id: bigint | null;
};
export type Model_has_rolesMaxAggregateOutputType = {
    role_id: bigint | null;
    model_type: string | null;
    model_id: bigint | null;
};
export type Model_has_rolesCountAggregateOutputType = {
    role_id: number;
    model_type: number;
    model_id: number;
    _all: number;
};
export type Model_has_rolesAvgAggregateInputType = {
    role_id?: true;
    model_id?: true;
};
export type Model_has_rolesSumAggregateInputType = {
    role_id?: true;
    model_id?: true;
};
export type Model_has_rolesMinAggregateInputType = {
    role_id?: true;
    model_type?: true;
    model_id?: true;
};
export type Model_has_rolesMaxAggregateInputType = {
    role_id?: true;
    model_type?: true;
    model_id?: true;
};
export type Model_has_rolesCountAggregateInputType = {
    role_id?: true;
    model_type?: true;
    model_id?: true;
    _all?: true;
};
export type Model_has_rolesAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.model_has_rolesWhereInput;
    orderBy?: Prisma.model_has_rolesOrderByWithRelationInput | Prisma.model_has_rolesOrderByWithRelationInput[];
    cursor?: Prisma.model_has_rolesWhereUniqueInput;
    take?: number;
    skip?: number;
    _count?: true | Model_has_rolesCountAggregateInputType;
    _avg?: Model_has_rolesAvgAggregateInputType;
    _sum?: Model_has_rolesSumAggregateInputType;
    _min?: Model_has_rolesMinAggregateInputType;
    _max?: Model_has_rolesMaxAggregateInputType;
};
export type GetModel_has_rolesAggregateType<T extends Model_has_rolesAggregateArgs> = {
    [P in keyof T & keyof AggregateModel_has_roles]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateModel_has_roles[P]> : Prisma.GetScalarType<T[P], AggregateModel_has_roles[P]>;
};
export type model_has_rolesGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.model_has_rolesWhereInput;
    orderBy?: Prisma.model_has_rolesOrderByWithAggregationInput | Prisma.model_has_rolesOrderByWithAggregationInput[];
    by: Prisma.Model_has_rolesScalarFieldEnum[] | Prisma.Model_has_rolesScalarFieldEnum;
    having?: Prisma.model_has_rolesScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: Model_has_rolesCountAggregateInputType | true;
    _avg?: Model_has_rolesAvgAggregateInputType;
    _sum?: Model_has_rolesSumAggregateInputType;
    _min?: Model_has_rolesMinAggregateInputType;
    _max?: Model_has_rolesMaxAggregateInputType;
};
export type Model_has_rolesGroupByOutputType = {
    role_id: bigint;
    model_type: string;
    model_id: bigint;
    _count: Model_has_rolesCountAggregateOutputType | null;
    _avg: Model_has_rolesAvgAggregateOutputType | null;
    _sum: Model_has_rolesSumAggregateOutputType | null;
    _min: Model_has_rolesMinAggregateOutputType | null;
    _max: Model_has_rolesMaxAggregateOutputType | null;
};
type GetModel_has_rolesGroupByPayload<T extends model_has_rolesGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<Model_has_rolesGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof Model_has_rolesGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], Model_has_rolesGroupByOutputType[P]> : Prisma.GetScalarType<T[P], Model_has_rolesGroupByOutputType[P]>;
}>>;
export type model_has_rolesWhereInput = {
    AND?: Prisma.model_has_rolesWhereInput | Prisma.model_has_rolesWhereInput[];
    OR?: Prisma.model_has_rolesWhereInput[];
    NOT?: Prisma.model_has_rolesWhereInput | Prisma.model_has_rolesWhereInput[];
    role_id?: Prisma.BigIntFilter<"model_has_roles"> | bigint | number;
    model_type?: Prisma.StringFilter<"model_has_roles"> | string;
    model_id?: Prisma.BigIntFilter<"model_has_roles"> | bigint | number;
    roles?: Prisma.XOR<Prisma.RolesScalarRelationFilter, Prisma.rolesWhereInput>;
};
export type model_has_rolesOrderByWithRelationInput = {
    role_id?: Prisma.SortOrder;
    model_type?: Prisma.SortOrder;
    model_id?: Prisma.SortOrder;
    roles?: Prisma.rolesOrderByWithRelationInput;
    _relevance?: Prisma.model_has_rolesOrderByRelevanceInput;
};
export type model_has_rolesWhereUniqueInput = Prisma.AtLeast<{
    role_id_model_id_model_type?: Prisma.model_has_rolesRole_idModel_idModel_typeCompoundUniqueInput;
    AND?: Prisma.model_has_rolesWhereInput | Prisma.model_has_rolesWhereInput[];
    OR?: Prisma.model_has_rolesWhereInput[];
    NOT?: Prisma.model_has_rolesWhereInput | Prisma.model_has_rolesWhereInput[];
    role_id?: Prisma.BigIntFilter<"model_has_roles"> | bigint | number;
    model_type?: Prisma.StringFilter<"model_has_roles"> | string;
    model_id?: Prisma.BigIntFilter<"model_has_roles"> | bigint | number;
    roles?: Prisma.XOR<Prisma.RolesScalarRelationFilter, Prisma.rolesWhereInput>;
}, "role_id_model_id_model_type">;
export type model_has_rolesOrderByWithAggregationInput = {
    role_id?: Prisma.SortOrder;
    model_type?: Prisma.SortOrder;
    model_id?: Prisma.SortOrder;
    _count?: Prisma.model_has_rolesCountOrderByAggregateInput;
    _avg?: Prisma.model_has_rolesAvgOrderByAggregateInput;
    _max?: Prisma.model_has_rolesMaxOrderByAggregateInput;
    _min?: Prisma.model_has_rolesMinOrderByAggregateInput;
    _sum?: Prisma.model_has_rolesSumOrderByAggregateInput;
};
export type model_has_rolesScalarWhereWithAggregatesInput = {
    AND?: Prisma.model_has_rolesScalarWhereWithAggregatesInput | Prisma.model_has_rolesScalarWhereWithAggregatesInput[];
    OR?: Prisma.model_has_rolesScalarWhereWithAggregatesInput[];
    NOT?: Prisma.model_has_rolesScalarWhereWithAggregatesInput | Prisma.model_has_rolesScalarWhereWithAggregatesInput[];
    role_id?: Prisma.BigIntWithAggregatesFilter<"model_has_roles"> | bigint | number;
    model_type?: Prisma.StringWithAggregatesFilter<"model_has_roles"> | string;
    model_id?: Prisma.BigIntWithAggregatesFilter<"model_has_roles"> | bigint | number;
};
export type model_has_rolesCreateInput = {
    model_type: string;
    model_id: bigint | number;
    roles: Prisma.rolesCreateNestedOneWithoutModel_has_rolesInput;
};
export type model_has_rolesUncheckedCreateInput = {
    role_id: bigint | number;
    model_type: string;
    model_id: bigint | number;
};
export type model_has_rolesUpdateInput = {
    model_type?: Prisma.StringFieldUpdateOperationsInput | string;
    model_id?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    roles?: Prisma.rolesUpdateOneRequiredWithoutModel_has_rolesNestedInput;
};
export type model_has_rolesUncheckedUpdateInput = {
    role_id?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    model_type?: Prisma.StringFieldUpdateOperationsInput | string;
    model_id?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
};
export type model_has_rolesCreateManyInput = {
    role_id: bigint | number;
    model_type: string;
    model_id: bigint | number;
};
export type model_has_rolesUpdateManyMutationInput = {
    model_type?: Prisma.StringFieldUpdateOperationsInput | string;
    model_id?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
};
export type model_has_rolesUncheckedUpdateManyInput = {
    role_id?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    model_type?: Prisma.StringFieldUpdateOperationsInput | string;
    model_id?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
};
export type model_has_rolesOrderByRelevanceInput = {
    fields: Prisma.model_has_rolesOrderByRelevanceFieldEnum | Prisma.model_has_rolesOrderByRelevanceFieldEnum[];
    sort: Prisma.SortOrder;
    search: string;
};
export type model_has_rolesRole_idModel_idModel_typeCompoundUniqueInput = {
    role_id: bigint | number;
    model_id: bigint | number;
    model_type: string;
};
export type model_has_rolesCountOrderByAggregateInput = {
    role_id?: Prisma.SortOrder;
    model_type?: Prisma.SortOrder;
    model_id?: Prisma.SortOrder;
};
export type model_has_rolesAvgOrderByAggregateInput = {
    role_id?: Prisma.SortOrder;
    model_id?: Prisma.SortOrder;
};
export type model_has_rolesMaxOrderByAggregateInput = {
    role_id?: Prisma.SortOrder;
    model_type?: Prisma.SortOrder;
    model_id?: Prisma.SortOrder;
};
export type model_has_rolesMinOrderByAggregateInput = {
    role_id?: Prisma.SortOrder;
    model_type?: Prisma.SortOrder;
    model_id?: Prisma.SortOrder;
};
export type model_has_rolesSumOrderByAggregateInput = {
    role_id?: Prisma.SortOrder;
    model_id?: Prisma.SortOrder;
};
export type Model_has_rolesListRelationFilter = {
    every?: Prisma.model_has_rolesWhereInput;
    some?: Prisma.model_has_rolesWhereInput;
    none?: Prisma.model_has_rolesWhereInput;
};
export type model_has_rolesOrderByRelationAggregateInput = {
    _count?: Prisma.SortOrder;
};
export type model_has_rolesCreateNestedManyWithoutRolesInput = {
    create?: Prisma.XOR<Prisma.model_has_rolesCreateWithoutRolesInput, Prisma.model_has_rolesUncheckedCreateWithoutRolesInput> | Prisma.model_has_rolesCreateWithoutRolesInput[] | Prisma.model_has_rolesUncheckedCreateWithoutRolesInput[];
    connectOrCreate?: Prisma.model_has_rolesCreateOrConnectWithoutRolesInput | Prisma.model_has_rolesCreateOrConnectWithoutRolesInput[];
    createMany?: Prisma.model_has_rolesCreateManyRolesInputEnvelope;
    connect?: Prisma.model_has_rolesWhereUniqueInput | Prisma.model_has_rolesWhereUniqueInput[];
};
export type model_has_rolesUncheckedCreateNestedManyWithoutRolesInput = {
    create?: Prisma.XOR<Prisma.model_has_rolesCreateWithoutRolesInput, Prisma.model_has_rolesUncheckedCreateWithoutRolesInput> | Prisma.model_has_rolesCreateWithoutRolesInput[] | Prisma.model_has_rolesUncheckedCreateWithoutRolesInput[];
    connectOrCreate?: Prisma.model_has_rolesCreateOrConnectWithoutRolesInput | Prisma.model_has_rolesCreateOrConnectWithoutRolesInput[];
    createMany?: Prisma.model_has_rolesCreateManyRolesInputEnvelope;
    connect?: Prisma.model_has_rolesWhereUniqueInput | Prisma.model_has_rolesWhereUniqueInput[];
};
export type model_has_rolesUpdateManyWithoutRolesNestedInput = {
    create?: Prisma.XOR<Prisma.model_has_rolesCreateWithoutRolesInput, Prisma.model_has_rolesUncheckedCreateWithoutRolesInput> | Prisma.model_has_rolesCreateWithoutRolesInput[] | Prisma.model_has_rolesUncheckedCreateWithoutRolesInput[];
    connectOrCreate?: Prisma.model_has_rolesCreateOrConnectWithoutRolesInput | Prisma.model_has_rolesCreateOrConnectWithoutRolesInput[];
    upsert?: Prisma.model_has_rolesUpsertWithWhereUniqueWithoutRolesInput | Prisma.model_has_rolesUpsertWithWhereUniqueWithoutRolesInput[];
    createMany?: Prisma.model_has_rolesCreateManyRolesInputEnvelope;
    set?: Prisma.model_has_rolesWhereUniqueInput | Prisma.model_has_rolesWhereUniqueInput[];
    disconnect?: Prisma.model_has_rolesWhereUniqueInput | Prisma.model_has_rolesWhereUniqueInput[];
    delete?: Prisma.model_has_rolesWhereUniqueInput | Prisma.model_has_rolesWhereUniqueInput[];
    connect?: Prisma.model_has_rolesWhereUniqueInput | Prisma.model_has_rolesWhereUniqueInput[];
    update?: Prisma.model_has_rolesUpdateWithWhereUniqueWithoutRolesInput | Prisma.model_has_rolesUpdateWithWhereUniqueWithoutRolesInput[];
    updateMany?: Prisma.model_has_rolesUpdateManyWithWhereWithoutRolesInput | Prisma.model_has_rolesUpdateManyWithWhereWithoutRolesInput[];
    deleteMany?: Prisma.model_has_rolesScalarWhereInput | Prisma.model_has_rolesScalarWhereInput[];
};
export type model_has_rolesUncheckedUpdateManyWithoutRolesNestedInput = {
    create?: Prisma.XOR<Prisma.model_has_rolesCreateWithoutRolesInput, Prisma.model_has_rolesUncheckedCreateWithoutRolesInput> | Prisma.model_has_rolesCreateWithoutRolesInput[] | Prisma.model_has_rolesUncheckedCreateWithoutRolesInput[];
    connectOrCreate?: Prisma.model_has_rolesCreateOrConnectWithoutRolesInput | Prisma.model_has_rolesCreateOrConnectWithoutRolesInput[];
    upsert?: Prisma.model_has_rolesUpsertWithWhereUniqueWithoutRolesInput | Prisma.model_has_rolesUpsertWithWhereUniqueWithoutRolesInput[];
    createMany?: Prisma.model_has_rolesCreateManyRolesInputEnvelope;
    set?: Prisma.model_has_rolesWhereUniqueInput | Prisma.model_has_rolesWhereUniqueInput[];
    disconnect?: Prisma.model_has_rolesWhereUniqueInput | Prisma.model_has_rolesWhereUniqueInput[];
    delete?: Prisma.model_has_rolesWhereUniqueInput | Prisma.model_has_rolesWhereUniqueInput[];
    connect?: Prisma.model_has_rolesWhereUniqueInput | Prisma.model_has_rolesWhereUniqueInput[];
    update?: Prisma.model_has_rolesUpdateWithWhereUniqueWithoutRolesInput | Prisma.model_has_rolesUpdateWithWhereUniqueWithoutRolesInput[];
    updateMany?: Prisma.model_has_rolesUpdateManyWithWhereWithoutRolesInput | Prisma.model_has_rolesUpdateManyWithWhereWithoutRolesInput[];
    deleteMany?: Prisma.model_has_rolesScalarWhereInput | Prisma.model_has_rolesScalarWhereInput[];
};
export type model_has_rolesCreateWithoutRolesInput = {
    model_type: string;
    model_id: bigint | number;
};
export type model_has_rolesUncheckedCreateWithoutRolesInput = {
    model_type: string;
    model_id: bigint | number;
};
export type model_has_rolesCreateOrConnectWithoutRolesInput = {
    where: Prisma.model_has_rolesWhereUniqueInput;
    create: Prisma.XOR<Prisma.model_has_rolesCreateWithoutRolesInput, Prisma.model_has_rolesUncheckedCreateWithoutRolesInput>;
};
export type model_has_rolesCreateManyRolesInputEnvelope = {
    data: Prisma.model_has_rolesCreateManyRolesInput | Prisma.model_has_rolesCreateManyRolesInput[];
    skipDuplicates?: boolean;
};
export type model_has_rolesUpsertWithWhereUniqueWithoutRolesInput = {
    where: Prisma.model_has_rolesWhereUniqueInput;
    update: Prisma.XOR<Prisma.model_has_rolesUpdateWithoutRolesInput, Prisma.model_has_rolesUncheckedUpdateWithoutRolesInput>;
    create: Prisma.XOR<Prisma.model_has_rolesCreateWithoutRolesInput, Prisma.model_has_rolesUncheckedCreateWithoutRolesInput>;
};
export type model_has_rolesUpdateWithWhereUniqueWithoutRolesInput = {
    where: Prisma.model_has_rolesWhereUniqueInput;
    data: Prisma.XOR<Prisma.model_has_rolesUpdateWithoutRolesInput, Prisma.model_has_rolesUncheckedUpdateWithoutRolesInput>;
};
export type model_has_rolesUpdateManyWithWhereWithoutRolesInput = {
    where: Prisma.model_has_rolesScalarWhereInput;
    data: Prisma.XOR<Prisma.model_has_rolesUpdateManyMutationInput, Prisma.model_has_rolesUncheckedUpdateManyWithoutRolesInput>;
};
export type model_has_rolesScalarWhereInput = {
    AND?: Prisma.model_has_rolesScalarWhereInput | Prisma.model_has_rolesScalarWhereInput[];
    OR?: Prisma.model_has_rolesScalarWhereInput[];
    NOT?: Prisma.model_has_rolesScalarWhereInput | Prisma.model_has_rolesScalarWhereInput[];
    role_id?: Prisma.BigIntFilter<"model_has_roles"> | bigint | number;
    model_type?: Prisma.StringFilter<"model_has_roles"> | string;
    model_id?: Prisma.BigIntFilter<"model_has_roles"> | bigint | number;
};
export type model_has_rolesCreateManyRolesInput = {
    model_type: string;
    model_id: bigint | number;
};
export type model_has_rolesUpdateWithoutRolesInput = {
    model_type?: Prisma.StringFieldUpdateOperationsInput | string;
    model_id?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
};
export type model_has_rolesUncheckedUpdateWithoutRolesInput = {
    model_type?: Prisma.StringFieldUpdateOperationsInput | string;
    model_id?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
};
export type model_has_rolesUncheckedUpdateManyWithoutRolesInput = {
    model_type?: Prisma.StringFieldUpdateOperationsInput | string;
    model_id?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
};
export type model_has_rolesSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    role_id?: boolean;
    model_type?: boolean;
    model_id?: boolean;
    roles?: boolean | Prisma.rolesDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["model_has_roles"]>;
export type model_has_rolesSelectScalar = {
    role_id?: boolean;
    model_type?: boolean;
    model_id?: boolean;
};
export type model_has_rolesOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"role_id" | "model_type" | "model_id", ExtArgs["result"]["model_has_roles"]>;
export type model_has_rolesInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    roles?: boolean | Prisma.rolesDefaultArgs<ExtArgs>;
};
export type $model_has_rolesPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "model_has_roles";
    objects: {
        roles: Prisma.$rolesPayload<ExtArgs>;
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        role_id: bigint;
        model_type: string;
        model_id: bigint;
    }, ExtArgs["result"]["model_has_roles"]>;
    composites: {};
};
export type model_has_rolesGetPayload<S extends boolean | null | undefined | model_has_rolesDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$model_has_rolesPayload, S>;
export type model_has_rolesCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<model_has_rolesFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: Model_has_rolesCountAggregateInputType | true;
};
export interface model_has_rolesDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['model_has_roles'];
        meta: {
            name: 'model_has_roles';
        };
    };
    findUnique<T extends model_has_rolesFindUniqueArgs>(args: Prisma.SelectSubset<T, model_has_rolesFindUniqueArgs<ExtArgs>>): Prisma.Prisma__model_has_rolesClient<runtime.Types.Result.GetResult<Prisma.$model_has_rolesPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findUniqueOrThrow<T extends model_has_rolesFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, model_has_rolesFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__model_has_rolesClient<runtime.Types.Result.GetResult<Prisma.$model_has_rolesPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findFirst<T extends model_has_rolesFindFirstArgs>(args?: Prisma.SelectSubset<T, model_has_rolesFindFirstArgs<ExtArgs>>): Prisma.Prisma__model_has_rolesClient<runtime.Types.Result.GetResult<Prisma.$model_has_rolesPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findFirstOrThrow<T extends model_has_rolesFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, model_has_rolesFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__model_has_rolesClient<runtime.Types.Result.GetResult<Prisma.$model_has_rolesPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findMany<T extends model_has_rolesFindManyArgs>(args?: Prisma.SelectSubset<T, model_has_rolesFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$model_has_rolesPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    create<T extends model_has_rolesCreateArgs>(args: Prisma.SelectSubset<T, model_has_rolesCreateArgs<ExtArgs>>): Prisma.Prisma__model_has_rolesClient<runtime.Types.Result.GetResult<Prisma.$model_has_rolesPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    createMany<T extends model_has_rolesCreateManyArgs>(args?: Prisma.SelectSubset<T, model_has_rolesCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    delete<T extends model_has_rolesDeleteArgs>(args: Prisma.SelectSubset<T, model_has_rolesDeleteArgs<ExtArgs>>): Prisma.Prisma__model_has_rolesClient<runtime.Types.Result.GetResult<Prisma.$model_has_rolesPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    update<T extends model_has_rolesUpdateArgs>(args: Prisma.SelectSubset<T, model_has_rolesUpdateArgs<ExtArgs>>): Prisma.Prisma__model_has_rolesClient<runtime.Types.Result.GetResult<Prisma.$model_has_rolesPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    deleteMany<T extends model_has_rolesDeleteManyArgs>(args?: Prisma.SelectSubset<T, model_has_rolesDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateMany<T extends model_has_rolesUpdateManyArgs>(args: Prisma.SelectSubset<T, model_has_rolesUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    upsert<T extends model_has_rolesUpsertArgs>(args: Prisma.SelectSubset<T, model_has_rolesUpsertArgs<ExtArgs>>): Prisma.Prisma__model_has_rolesClient<runtime.Types.Result.GetResult<Prisma.$model_has_rolesPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    count<T extends model_has_rolesCountArgs>(args?: Prisma.Subset<T, model_has_rolesCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], Model_has_rolesCountAggregateOutputType> : number>;
    aggregate<T extends Model_has_rolesAggregateArgs>(args: Prisma.Subset<T, Model_has_rolesAggregateArgs>): Prisma.PrismaPromise<GetModel_has_rolesAggregateType<T>>;
    groupBy<T extends model_has_rolesGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: model_has_rolesGroupByArgs['orderBy'];
    } : {
        orderBy?: model_has_rolesGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, model_has_rolesGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetModel_has_rolesGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    readonly fields: model_has_rolesFieldRefs;
}
export interface Prisma__model_has_rolesClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    roles<T extends Prisma.rolesDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.rolesDefaultArgs<ExtArgs>>): Prisma.Prisma__rolesClient<runtime.Types.Result.GetResult<Prisma.$rolesPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): runtime.Types.Utils.JsPromise<TResult1 | TResult2>;
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): runtime.Types.Utils.JsPromise<T | TResult>;
    finally(onfinally?: (() => void) | undefined | null): runtime.Types.Utils.JsPromise<T>;
}
export interface model_has_rolesFieldRefs {
    readonly role_id: Prisma.FieldRef<"model_has_roles", 'BigInt'>;
    readonly model_type: Prisma.FieldRef<"model_has_roles", 'String'>;
    readonly model_id: Prisma.FieldRef<"model_has_roles", 'BigInt'>;
}
export type model_has_rolesFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.model_has_rolesSelect<ExtArgs> | null;
    omit?: Prisma.model_has_rolesOmit<ExtArgs> | null;
    include?: Prisma.model_has_rolesInclude<ExtArgs> | null;
    where: Prisma.model_has_rolesWhereUniqueInput;
};
export type model_has_rolesFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.model_has_rolesSelect<ExtArgs> | null;
    omit?: Prisma.model_has_rolesOmit<ExtArgs> | null;
    include?: Prisma.model_has_rolesInclude<ExtArgs> | null;
    where: Prisma.model_has_rolesWhereUniqueInput;
};
export type model_has_rolesFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.model_has_rolesSelect<ExtArgs> | null;
    omit?: Prisma.model_has_rolesOmit<ExtArgs> | null;
    include?: Prisma.model_has_rolesInclude<ExtArgs> | null;
    where?: Prisma.model_has_rolesWhereInput;
    orderBy?: Prisma.model_has_rolesOrderByWithRelationInput | Prisma.model_has_rolesOrderByWithRelationInput[];
    cursor?: Prisma.model_has_rolesWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.Model_has_rolesScalarFieldEnum | Prisma.Model_has_rolesScalarFieldEnum[];
};
export type model_has_rolesFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.model_has_rolesSelect<ExtArgs> | null;
    omit?: Prisma.model_has_rolesOmit<ExtArgs> | null;
    include?: Prisma.model_has_rolesInclude<ExtArgs> | null;
    where?: Prisma.model_has_rolesWhereInput;
    orderBy?: Prisma.model_has_rolesOrderByWithRelationInput | Prisma.model_has_rolesOrderByWithRelationInput[];
    cursor?: Prisma.model_has_rolesWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.Model_has_rolesScalarFieldEnum | Prisma.Model_has_rolesScalarFieldEnum[];
};
export type model_has_rolesFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.model_has_rolesSelect<ExtArgs> | null;
    omit?: Prisma.model_has_rolesOmit<ExtArgs> | null;
    include?: Prisma.model_has_rolesInclude<ExtArgs> | null;
    where?: Prisma.model_has_rolesWhereInput;
    orderBy?: Prisma.model_has_rolesOrderByWithRelationInput | Prisma.model_has_rolesOrderByWithRelationInput[];
    cursor?: Prisma.model_has_rolesWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.Model_has_rolesScalarFieldEnum | Prisma.Model_has_rolesScalarFieldEnum[];
};
export type model_has_rolesCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.model_has_rolesSelect<ExtArgs> | null;
    omit?: Prisma.model_has_rolesOmit<ExtArgs> | null;
    include?: Prisma.model_has_rolesInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.model_has_rolesCreateInput, Prisma.model_has_rolesUncheckedCreateInput>;
};
export type model_has_rolesCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.model_has_rolesCreateManyInput | Prisma.model_has_rolesCreateManyInput[];
    skipDuplicates?: boolean;
};
export type model_has_rolesUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.model_has_rolesSelect<ExtArgs> | null;
    omit?: Prisma.model_has_rolesOmit<ExtArgs> | null;
    include?: Prisma.model_has_rolesInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.model_has_rolesUpdateInput, Prisma.model_has_rolesUncheckedUpdateInput>;
    where: Prisma.model_has_rolesWhereUniqueInput;
};
export type model_has_rolesUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.XOR<Prisma.model_has_rolesUpdateManyMutationInput, Prisma.model_has_rolesUncheckedUpdateManyInput>;
    where?: Prisma.model_has_rolesWhereInput;
    limit?: number;
};
export type model_has_rolesUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.model_has_rolesSelect<ExtArgs> | null;
    omit?: Prisma.model_has_rolesOmit<ExtArgs> | null;
    include?: Prisma.model_has_rolesInclude<ExtArgs> | null;
    where: Prisma.model_has_rolesWhereUniqueInput;
    create: Prisma.XOR<Prisma.model_has_rolesCreateInput, Prisma.model_has_rolesUncheckedCreateInput>;
    update: Prisma.XOR<Prisma.model_has_rolesUpdateInput, Prisma.model_has_rolesUncheckedUpdateInput>;
};
export type model_has_rolesDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.model_has_rolesSelect<ExtArgs> | null;
    omit?: Prisma.model_has_rolesOmit<ExtArgs> | null;
    include?: Prisma.model_has_rolesInclude<ExtArgs> | null;
    where: Prisma.model_has_rolesWhereUniqueInput;
};
export type model_has_rolesDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.model_has_rolesWhereInput;
    limit?: number;
};
export type model_has_rolesDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.model_has_rolesSelect<ExtArgs> | null;
    omit?: Prisma.model_has_rolesOmit<ExtArgs> | null;
    include?: Prisma.model_has_rolesInclude<ExtArgs> | null;
};
export {};
