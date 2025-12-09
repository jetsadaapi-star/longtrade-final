import type * as runtime from "@prisma/client/runtime/client";
import type * as Prisma from "../internal/prismaNamespace.js";
export type rolesModel = runtime.Types.Result.DefaultSelection<Prisma.$rolesPayload>;
export type AggregateRoles = {
    _count: RolesCountAggregateOutputType | null;
    _avg: RolesAvgAggregateOutputType | null;
    _sum: RolesSumAggregateOutputType | null;
    _min: RolesMinAggregateOutputType | null;
    _max: RolesMaxAggregateOutputType | null;
};
export type RolesAvgAggregateOutputType = {
    id: number | null;
};
export type RolesSumAggregateOutputType = {
    id: bigint | null;
};
export type RolesMinAggregateOutputType = {
    id: bigint | null;
    name: string | null;
    guard_name: string | null;
    created_at: Date | null;
    updated_at: Date | null;
};
export type RolesMaxAggregateOutputType = {
    id: bigint | null;
    name: string | null;
    guard_name: string | null;
    created_at: Date | null;
    updated_at: Date | null;
};
export type RolesCountAggregateOutputType = {
    id: number;
    name: number;
    guard_name: number;
    created_at: number;
    updated_at: number;
    _all: number;
};
export type RolesAvgAggregateInputType = {
    id?: true;
};
export type RolesSumAggregateInputType = {
    id?: true;
};
export type RolesMinAggregateInputType = {
    id?: true;
    name?: true;
    guard_name?: true;
    created_at?: true;
    updated_at?: true;
};
export type RolesMaxAggregateInputType = {
    id?: true;
    name?: true;
    guard_name?: true;
    created_at?: true;
    updated_at?: true;
};
export type RolesCountAggregateInputType = {
    id?: true;
    name?: true;
    guard_name?: true;
    created_at?: true;
    updated_at?: true;
    _all?: true;
};
export type RolesAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.rolesWhereInput;
    orderBy?: Prisma.rolesOrderByWithRelationInput | Prisma.rolesOrderByWithRelationInput[];
    cursor?: Prisma.rolesWhereUniqueInput;
    take?: number;
    skip?: number;
    _count?: true | RolesCountAggregateInputType;
    _avg?: RolesAvgAggregateInputType;
    _sum?: RolesSumAggregateInputType;
    _min?: RolesMinAggregateInputType;
    _max?: RolesMaxAggregateInputType;
};
export type GetRolesAggregateType<T extends RolesAggregateArgs> = {
    [P in keyof T & keyof AggregateRoles]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateRoles[P]> : Prisma.GetScalarType<T[P], AggregateRoles[P]>;
};
export type rolesGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.rolesWhereInput;
    orderBy?: Prisma.rolesOrderByWithAggregationInput | Prisma.rolesOrderByWithAggregationInput[];
    by: Prisma.RolesScalarFieldEnum[] | Prisma.RolesScalarFieldEnum;
    having?: Prisma.rolesScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: RolesCountAggregateInputType | true;
    _avg?: RolesAvgAggregateInputType;
    _sum?: RolesSumAggregateInputType;
    _min?: RolesMinAggregateInputType;
    _max?: RolesMaxAggregateInputType;
};
export type RolesGroupByOutputType = {
    id: bigint;
    name: string;
    guard_name: string;
    created_at: Date | null;
    updated_at: Date | null;
    _count: RolesCountAggregateOutputType | null;
    _avg: RolesAvgAggregateOutputType | null;
    _sum: RolesSumAggregateOutputType | null;
    _min: RolesMinAggregateOutputType | null;
    _max: RolesMaxAggregateOutputType | null;
};
type GetRolesGroupByPayload<T extends rolesGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<RolesGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof RolesGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], RolesGroupByOutputType[P]> : Prisma.GetScalarType<T[P], RolesGroupByOutputType[P]>;
}>>;
export type rolesWhereInput = {
    AND?: Prisma.rolesWhereInput | Prisma.rolesWhereInput[];
    OR?: Prisma.rolesWhereInput[];
    NOT?: Prisma.rolesWhereInput | Prisma.rolesWhereInput[];
    id?: Prisma.BigIntFilter<"roles"> | bigint | number;
    name?: Prisma.StringFilter<"roles"> | string;
    guard_name?: Prisma.StringFilter<"roles"> | string;
    created_at?: Prisma.DateTimeNullableFilter<"roles"> | Date | string | null;
    updated_at?: Prisma.DateTimeNullableFilter<"roles"> | Date | string | null;
    model_has_roles?: Prisma.Model_has_rolesListRelationFilter;
    role_has_permissions?: Prisma.Role_has_permissionsListRelationFilter;
};
export type rolesOrderByWithRelationInput = {
    id?: Prisma.SortOrder;
    name?: Prisma.SortOrder;
    guard_name?: Prisma.SortOrder;
    created_at?: Prisma.SortOrderInput | Prisma.SortOrder;
    updated_at?: Prisma.SortOrderInput | Prisma.SortOrder;
    model_has_roles?: Prisma.model_has_rolesOrderByRelationAggregateInput;
    role_has_permissions?: Prisma.role_has_permissionsOrderByRelationAggregateInput;
    _relevance?: Prisma.rolesOrderByRelevanceInput;
};
export type rolesWhereUniqueInput = Prisma.AtLeast<{
    id?: bigint | number;
    name_guard_name?: Prisma.rolesNameGuard_nameCompoundUniqueInput;
    AND?: Prisma.rolesWhereInput | Prisma.rolesWhereInput[];
    OR?: Prisma.rolesWhereInput[];
    NOT?: Prisma.rolesWhereInput | Prisma.rolesWhereInput[];
    name?: Prisma.StringFilter<"roles"> | string;
    guard_name?: Prisma.StringFilter<"roles"> | string;
    created_at?: Prisma.DateTimeNullableFilter<"roles"> | Date | string | null;
    updated_at?: Prisma.DateTimeNullableFilter<"roles"> | Date | string | null;
    model_has_roles?: Prisma.Model_has_rolesListRelationFilter;
    role_has_permissions?: Prisma.Role_has_permissionsListRelationFilter;
}, "id" | "name_guard_name">;
export type rolesOrderByWithAggregationInput = {
    id?: Prisma.SortOrder;
    name?: Prisma.SortOrder;
    guard_name?: Prisma.SortOrder;
    created_at?: Prisma.SortOrderInput | Prisma.SortOrder;
    updated_at?: Prisma.SortOrderInput | Prisma.SortOrder;
    _count?: Prisma.rolesCountOrderByAggregateInput;
    _avg?: Prisma.rolesAvgOrderByAggregateInput;
    _max?: Prisma.rolesMaxOrderByAggregateInput;
    _min?: Prisma.rolesMinOrderByAggregateInput;
    _sum?: Prisma.rolesSumOrderByAggregateInput;
};
export type rolesScalarWhereWithAggregatesInput = {
    AND?: Prisma.rolesScalarWhereWithAggregatesInput | Prisma.rolesScalarWhereWithAggregatesInput[];
    OR?: Prisma.rolesScalarWhereWithAggregatesInput[];
    NOT?: Prisma.rolesScalarWhereWithAggregatesInput | Prisma.rolesScalarWhereWithAggregatesInput[];
    id?: Prisma.BigIntWithAggregatesFilter<"roles"> | bigint | number;
    name?: Prisma.StringWithAggregatesFilter<"roles"> | string;
    guard_name?: Prisma.StringWithAggregatesFilter<"roles"> | string;
    created_at?: Prisma.DateTimeNullableWithAggregatesFilter<"roles"> | Date | string | null;
    updated_at?: Prisma.DateTimeNullableWithAggregatesFilter<"roles"> | Date | string | null;
};
export type rolesCreateInput = {
    id?: bigint | number;
    name: string;
    guard_name: string;
    created_at?: Date | string | null;
    updated_at?: Date | string | null;
    model_has_roles?: Prisma.model_has_rolesCreateNestedManyWithoutRolesInput;
    role_has_permissions?: Prisma.role_has_permissionsCreateNestedManyWithoutRolesInput;
};
export type rolesUncheckedCreateInput = {
    id?: bigint | number;
    name: string;
    guard_name: string;
    created_at?: Date | string | null;
    updated_at?: Date | string | null;
    model_has_roles?: Prisma.model_has_rolesUncheckedCreateNestedManyWithoutRolesInput;
    role_has_permissions?: Prisma.role_has_permissionsUncheckedCreateNestedManyWithoutRolesInput;
};
export type rolesUpdateInput = {
    id?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    guard_name?: Prisma.StringFieldUpdateOperationsInput | string;
    created_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    updated_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    model_has_roles?: Prisma.model_has_rolesUpdateManyWithoutRolesNestedInput;
    role_has_permissions?: Prisma.role_has_permissionsUpdateManyWithoutRolesNestedInput;
};
export type rolesUncheckedUpdateInput = {
    id?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    guard_name?: Prisma.StringFieldUpdateOperationsInput | string;
    created_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    updated_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    model_has_roles?: Prisma.model_has_rolesUncheckedUpdateManyWithoutRolesNestedInput;
    role_has_permissions?: Prisma.role_has_permissionsUncheckedUpdateManyWithoutRolesNestedInput;
};
export type rolesCreateManyInput = {
    id?: bigint | number;
    name: string;
    guard_name: string;
    created_at?: Date | string | null;
    updated_at?: Date | string | null;
};
export type rolesUpdateManyMutationInput = {
    id?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    guard_name?: Prisma.StringFieldUpdateOperationsInput | string;
    created_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    updated_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
};
export type rolesUncheckedUpdateManyInput = {
    id?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    guard_name?: Prisma.StringFieldUpdateOperationsInput | string;
    created_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    updated_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
};
export type RolesScalarRelationFilter = {
    is?: Prisma.rolesWhereInput;
    isNot?: Prisma.rolesWhereInput;
};
export type rolesOrderByRelevanceInput = {
    fields: Prisma.rolesOrderByRelevanceFieldEnum | Prisma.rolesOrderByRelevanceFieldEnum[];
    sort: Prisma.SortOrder;
    search: string;
};
export type rolesNameGuard_nameCompoundUniqueInput = {
    name: string;
    guard_name: string;
};
export type rolesCountOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    name?: Prisma.SortOrder;
    guard_name?: Prisma.SortOrder;
    created_at?: Prisma.SortOrder;
    updated_at?: Prisma.SortOrder;
};
export type rolesAvgOrderByAggregateInput = {
    id?: Prisma.SortOrder;
};
export type rolesMaxOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    name?: Prisma.SortOrder;
    guard_name?: Prisma.SortOrder;
    created_at?: Prisma.SortOrder;
    updated_at?: Prisma.SortOrder;
};
export type rolesMinOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    name?: Prisma.SortOrder;
    guard_name?: Prisma.SortOrder;
    created_at?: Prisma.SortOrder;
    updated_at?: Prisma.SortOrder;
};
export type rolesSumOrderByAggregateInput = {
    id?: Prisma.SortOrder;
};
export type rolesCreateNestedOneWithoutModel_has_rolesInput = {
    create?: Prisma.XOR<Prisma.rolesCreateWithoutModel_has_rolesInput, Prisma.rolesUncheckedCreateWithoutModel_has_rolesInput>;
    connectOrCreate?: Prisma.rolesCreateOrConnectWithoutModel_has_rolesInput;
    connect?: Prisma.rolesWhereUniqueInput;
};
export type rolesUpdateOneRequiredWithoutModel_has_rolesNestedInput = {
    create?: Prisma.XOR<Prisma.rolesCreateWithoutModel_has_rolesInput, Prisma.rolesUncheckedCreateWithoutModel_has_rolesInput>;
    connectOrCreate?: Prisma.rolesCreateOrConnectWithoutModel_has_rolesInput;
    upsert?: Prisma.rolesUpsertWithoutModel_has_rolesInput;
    connect?: Prisma.rolesWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.rolesUpdateToOneWithWhereWithoutModel_has_rolesInput, Prisma.rolesUpdateWithoutModel_has_rolesInput>, Prisma.rolesUncheckedUpdateWithoutModel_has_rolesInput>;
};
export type rolesCreateNestedOneWithoutRole_has_permissionsInput = {
    create?: Prisma.XOR<Prisma.rolesCreateWithoutRole_has_permissionsInput, Prisma.rolesUncheckedCreateWithoutRole_has_permissionsInput>;
    connectOrCreate?: Prisma.rolesCreateOrConnectWithoutRole_has_permissionsInput;
    connect?: Prisma.rolesWhereUniqueInput;
};
export type rolesUpdateOneRequiredWithoutRole_has_permissionsNestedInput = {
    create?: Prisma.XOR<Prisma.rolesCreateWithoutRole_has_permissionsInput, Prisma.rolesUncheckedCreateWithoutRole_has_permissionsInput>;
    connectOrCreate?: Prisma.rolesCreateOrConnectWithoutRole_has_permissionsInput;
    upsert?: Prisma.rolesUpsertWithoutRole_has_permissionsInput;
    connect?: Prisma.rolesWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.rolesUpdateToOneWithWhereWithoutRole_has_permissionsInput, Prisma.rolesUpdateWithoutRole_has_permissionsInput>, Prisma.rolesUncheckedUpdateWithoutRole_has_permissionsInput>;
};
export type rolesCreateWithoutModel_has_rolesInput = {
    id?: bigint | number;
    name: string;
    guard_name: string;
    created_at?: Date | string | null;
    updated_at?: Date | string | null;
    role_has_permissions?: Prisma.role_has_permissionsCreateNestedManyWithoutRolesInput;
};
export type rolesUncheckedCreateWithoutModel_has_rolesInput = {
    id?: bigint | number;
    name: string;
    guard_name: string;
    created_at?: Date | string | null;
    updated_at?: Date | string | null;
    role_has_permissions?: Prisma.role_has_permissionsUncheckedCreateNestedManyWithoutRolesInput;
};
export type rolesCreateOrConnectWithoutModel_has_rolesInput = {
    where: Prisma.rolesWhereUniqueInput;
    create: Prisma.XOR<Prisma.rolesCreateWithoutModel_has_rolesInput, Prisma.rolesUncheckedCreateWithoutModel_has_rolesInput>;
};
export type rolesUpsertWithoutModel_has_rolesInput = {
    update: Prisma.XOR<Prisma.rolesUpdateWithoutModel_has_rolesInput, Prisma.rolesUncheckedUpdateWithoutModel_has_rolesInput>;
    create: Prisma.XOR<Prisma.rolesCreateWithoutModel_has_rolesInput, Prisma.rolesUncheckedCreateWithoutModel_has_rolesInput>;
    where?: Prisma.rolesWhereInput;
};
export type rolesUpdateToOneWithWhereWithoutModel_has_rolesInput = {
    where?: Prisma.rolesWhereInput;
    data: Prisma.XOR<Prisma.rolesUpdateWithoutModel_has_rolesInput, Prisma.rolesUncheckedUpdateWithoutModel_has_rolesInput>;
};
export type rolesUpdateWithoutModel_has_rolesInput = {
    id?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    guard_name?: Prisma.StringFieldUpdateOperationsInput | string;
    created_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    updated_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    role_has_permissions?: Prisma.role_has_permissionsUpdateManyWithoutRolesNestedInput;
};
export type rolesUncheckedUpdateWithoutModel_has_rolesInput = {
    id?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    guard_name?: Prisma.StringFieldUpdateOperationsInput | string;
    created_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    updated_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    role_has_permissions?: Prisma.role_has_permissionsUncheckedUpdateManyWithoutRolesNestedInput;
};
export type rolesCreateWithoutRole_has_permissionsInput = {
    id?: bigint | number;
    name: string;
    guard_name: string;
    created_at?: Date | string | null;
    updated_at?: Date | string | null;
    model_has_roles?: Prisma.model_has_rolesCreateNestedManyWithoutRolesInput;
};
export type rolesUncheckedCreateWithoutRole_has_permissionsInput = {
    id?: bigint | number;
    name: string;
    guard_name: string;
    created_at?: Date | string | null;
    updated_at?: Date | string | null;
    model_has_roles?: Prisma.model_has_rolesUncheckedCreateNestedManyWithoutRolesInput;
};
export type rolesCreateOrConnectWithoutRole_has_permissionsInput = {
    where: Prisma.rolesWhereUniqueInput;
    create: Prisma.XOR<Prisma.rolesCreateWithoutRole_has_permissionsInput, Prisma.rolesUncheckedCreateWithoutRole_has_permissionsInput>;
};
export type rolesUpsertWithoutRole_has_permissionsInput = {
    update: Prisma.XOR<Prisma.rolesUpdateWithoutRole_has_permissionsInput, Prisma.rolesUncheckedUpdateWithoutRole_has_permissionsInput>;
    create: Prisma.XOR<Prisma.rolesCreateWithoutRole_has_permissionsInput, Prisma.rolesUncheckedCreateWithoutRole_has_permissionsInput>;
    where?: Prisma.rolesWhereInput;
};
export type rolesUpdateToOneWithWhereWithoutRole_has_permissionsInput = {
    where?: Prisma.rolesWhereInput;
    data: Prisma.XOR<Prisma.rolesUpdateWithoutRole_has_permissionsInput, Prisma.rolesUncheckedUpdateWithoutRole_has_permissionsInput>;
};
export type rolesUpdateWithoutRole_has_permissionsInput = {
    id?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    guard_name?: Prisma.StringFieldUpdateOperationsInput | string;
    created_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    updated_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    model_has_roles?: Prisma.model_has_rolesUpdateManyWithoutRolesNestedInput;
};
export type rolesUncheckedUpdateWithoutRole_has_permissionsInput = {
    id?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    guard_name?: Prisma.StringFieldUpdateOperationsInput | string;
    created_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    updated_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    model_has_roles?: Prisma.model_has_rolesUncheckedUpdateManyWithoutRolesNestedInput;
};
export type RolesCountOutputType = {
    model_has_roles: number;
    role_has_permissions: number;
};
export type RolesCountOutputTypeSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    model_has_roles?: boolean | RolesCountOutputTypeCountModel_has_rolesArgs;
    role_has_permissions?: boolean | RolesCountOutputTypeCountRole_has_permissionsArgs;
};
export type RolesCountOutputTypeDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.RolesCountOutputTypeSelect<ExtArgs> | null;
};
export type RolesCountOutputTypeCountModel_has_rolesArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.model_has_rolesWhereInput;
};
export type RolesCountOutputTypeCountRole_has_permissionsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.role_has_permissionsWhereInput;
};
export type rolesSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    name?: boolean;
    guard_name?: boolean;
    created_at?: boolean;
    updated_at?: boolean;
    model_has_roles?: boolean | Prisma.roles$model_has_rolesArgs<ExtArgs>;
    role_has_permissions?: boolean | Prisma.roles$role_has_permissionsArgs<ExtArgs>;
    _count?: boolean | Prisma.RolesCountOutputTypeDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["roles"]>;
export type rolesSelectScalar = {
    id?: boolean;
    name?: boolean;
    guard_name?: boolean;
    created_at?: boolean;
    updated_at?: boolean;
};
export type rolesOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "name" | "guard_name" | "created_at" | "updated_at", ExtArgs["result"]["roles"]>;
export type rolesInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    model_has_roles?: boolean | Prisma.roles$model_has_rolesArgs<ExtArgs>;
    role_has_permissions?: boolean | Prisma.roles$role_has_permissionsArgs<ExtArgs>;
    _count?: boolean | Prisma.RolesCountOutputTypeDefaultArgs<ExtArgs>;
};
export type $rolesPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "roles";
    objects: {
        model_has_roles: Prisma.$model_has_rolesPayload<ExtArgs>[];
        role_has_permissions: Prisma.$role_has_permissionsPayload<ExtArgs>[];
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id: bigint;
        name: string;
        guard_name: string;
        created_at: Date | null;
        updated_at: Date | null;
    }, ExtArgs["result"]["roles"]>;
    composites: {};
};
export type rolesGetPayload<S extends boolean | null | undefined | rolesDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$rolesPayload, S>;
export type rolesCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<rolesFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: RolesCountAggregateInputType | true;
};
export interface rolesDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['roles'];
        meta: {
            name: 'roles';
        };
    };
    findUnique<T extends rolesFindUniqueArgs>(args: Prisma.SelectSubset<T, rolesFindUniqueArgs<ExtArgs>>): Prisma.Prisma__rolesClient<runtime.Types.Result.GetResult<Prisma.$rolesPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findUniqueOrThrow<T extends rolesFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, rolesFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__rolesClient<runtime.Types.Result.GetResult<Prisma.$rolesPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findFirst<T extends rolesFindFirstArgs>(args?: Prisma.SelectSubset<T, rolesFindFirstArgs<ExtArgs>>): Prisma.Prisma__rolesClient<runtime.Types.Result.GetResult<Prisma.$rolesPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findFirstOrThrow<T extends rolesFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, rolesFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__rolesClient<runtime.Types.Result.GetResult<Prisma.$rolesPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findMany<T extends rolesFindManyArgs>(args?: Prisma.SelectSubset<T, rolesFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$rolesPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    create<T extends rolesCreateArgs>(args: Prisma.SelectSubset<T, rolesCreateArgs<ExtArgs>>): Prisma.Prisma__rolesClient<runtime.Types.Result.GetResult<Prisma.$rolesPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    createMany<T extends rolesCreateManyArgs>(args?: Prisma.SelectSubset<T, rolesCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    delete<T extends rolesDeleteArgs>(args: Prisma.SelectSubset<T, rolesDeleteArgs<ExtArgs>>): Prisma.Prisma__rolesClient<runtime.Types.Result.GetResult<Prisma.$rolesPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    update<T extends rolesUpdateArgs>(args: Prisma.SelectSubset<T, rolesUpdateArgs<ExtArgs>>): Prisma.Prisma__rolesClient<runtime.Types.Result.GetResult<Prisma.$rolesPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    deleteMany<T extends rolesDeleteManyArgs>(args?: Prisma.SelectSubset<T, rolesDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateMany<T extends rolesUpdateManyArgs>(args: Prisma.SelectSubset<T, rolesUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    upsert<T extends rolesUpsertArgs>(args: Prisma.SelectSubset<T, rolesUpsertArgs<ExtArgs>>): Prisma.Prisma__rolesClient<runtime.Types.Result.GetResult<Prisma.$rolesPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    count<T extends rolesCountArgs>(args?: Prisma.Subset<T, rolesCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], RolesCountAggregateOutputType> : number>;
    aggregate<T extends RolesAggregateArgs>(args: Prisma.Subset<T, RolesAggregateArgs>): Prisma.PrismaPromise<GetRolesAggregateType<T>>;
    groupBy<T extends rolesGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: rolesGroupByArgs['orderBy'];
    } : {
        orderBy?: rolesGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, rolesGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetRolesGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    readonly fields: rolesFieldRefs;
}
export interface Prisma__rolesClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    model_has_roles<T extends Prisma.roles$model_has_rolesArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.roles$model_has_rolesArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$model_has_rolesPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    role_has_permissions<T extends Prisma.roles$role_has_permissionsArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.roles$role_has_permissionsArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$role_has_permissionsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): runtime.Types.Utils.JsPromise<TResult1 | TResult2>;
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): runtime.Types.Utils.JsPromise<T | TResult>;
    finally(onfinally?: (() => void) | undefined | null): runtime.Types.Utils.JsPromise<T>;
}
export interface rolesFieldRefs {
    readonly id: Prisma.FieldRef<"roles", 'BigInt'>;
    readonly name: Prisma.FieldRef<"roles", 'String'>;
    readonly guard_name: Prisma.FieldRef<"roles", 'String'>;
    readonly created_at: Prisma.FieldRef<"roles", 'DateTime'>;
    readonly updated_at: Prisma.FieldRef<"roles", 'DateTime'>;
}
export type rolesFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.rolesSelect<ExtArgs> | null;
    omit?: Prisma.rolesOmit<ExtArgs> | null;
    include?: Prisma.rolesInclude<ExtArgs> | null;
    where: Prisma.rolesWhereUniqueInput;
};
export type rolesFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.rolesSelect<ExtArgs> | null;
    omit?: Prisma.rolesOmit<ExtArgs> | null;
    include?: Prisma.rolesInclude<ExtArgs> | null;
    where: Prisma.rolesWhereUniqueInput;
};
export type rolesFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.rolesSelect<ExtArgs> | null;
    omit?: Prisma.rolesOmit<ExtArgs> | null;
    include?: Prisma.rolesInclude<ExtArgs> | null;
    where?: Prisma.rolesWhereInput;
    orderBy?: Prisma.rolesOrderByWithRelationInput | Prisma.rolesOrderByWithRelationInput[];
    cursor?: Prisma.rolesWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.RolesScalarFieldEnum | Prisma.RolesScalarFieldEnum[];
};
export type rolesFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.rolesSelect<ExtArgs> | null;
    omit?: Prisma.rolesOmit<ExtArgs> | null;
    include?: Prisma.rolesInclude<ExtArgs> | null;
    where?: Prisma.rolesWhereInput;
    orderBy?: Prisma.rolesOrderByWithRelationInput | Prisma.rolesOrderByWithRelationInput[];
    cursor?: Prisma.rolesWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.RolesScalarFieldEnum | Prisma.RolesScalarFieldEnum[];
};
export type rolesFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.rolesSelect<ExtArgs> | null;
    omit?: Prisma.rolesOmit<ExtArgs> | null;
    include?: Prisma.rolesInclude<ExtArgs> | null;
    where?: Prisma.rolesWhereInput;
    orderBy?: Prisma.rolesOrderByWithRelationInput | Prisma.rolesOrderByWithRelationInput[];
    cursor?: Prisma.rolesWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.RolesScalarFieldEnum | Prisma.RolesScalarFieldEnum[];
};
export type rolesCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.rolesSelect<ExtArgs> | null;
    omit?: Prisma.rolesOmit<ExtArgs> | null;
    include?: Prisma.rolesInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.rolesCreateInput, Prisma.rolesUncheckedCreateInput>;
};
export type rolesCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.rolesCreateManyInput | Prisma.rolesCreateManyInput[];
    skipDuplicates?: boolean;
};
export type rolesUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.rolesSelect<ExtArgs> | null;
    omit?: Prisma.rolesOmit<ExtArgs> | null;
    include?: Prisma.rolesInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.rolesUpdateInput, Prisma.rolesUncheckedUpdateInput>;
    where: Prisma.rolesWhereUniqueInput;
};
export type rolesUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.XOR<Prisma.rolesUpdateManyMutationInput, Prisma.rolesUncheckedUpdateManyInput>;
    where?: Prisma.rolesWhereInput;
    limit?: number;
};
export type rolesUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.rolesSelect<ExtArgs> | null;
    omit?: Prisma.rolesOmit<ExtArgs> | null;
    include?: Prisma.rolesInclude<ExtArgs> | null;
    where: Prisma.rolesWhereUniqueInput;
    create: Prisma.XOR<Prisma.rolesCreateInput, Prisma.rolesUncheckedCreateInput>;
    update: Prisma.XOR<Prisma.rolesUpdateInput, Prisma.rolesUncheckedUpdateInput>;
};
export type rolesDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.rolesSelect<ExtArgs> | null;
    omit?: Prisma.rolesOmit<ExtArgs> | null;
    include?: Prisma.rolesInclude<ExtArgs> | null;
    where: Prisma.rolesWhereUniqueInput;
};
export type rolesDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.rolesWhereInput;
    limit?: number;
};
export type roles$model_has_rolesArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
export type roles$role_has_permissionsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.role_has_permissionsSelect<ExtArgs> | null;
    omit?: Prisma.role_has_permissionsOmit<ExtArgs> | null;
    include?: Prisma.role_has_permissionsInclude<ExtArgs> | null;
    where?: Prisma.role_has_permissionsWhereInput;
    orderBy?: Prisma.role_has_permissionsOrderByWithRelationInput | Prisma.role_has_permissionsOrderByWithRelationInput[];
    cursor?: Prisma.role_has_permissionsWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.Role_has_permissionsScalarFieldEnum | Prisma.Role_has_permissionsScalarFieldEnum[];
};
export type rolesDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.rolesSelect<ExtArgs> | null;
    omit?: Prisma.rolesOmit<ExtArgs> | null;
    include?: Prisma.rolesInclude<ExtArgs> | null;
};
export {};
