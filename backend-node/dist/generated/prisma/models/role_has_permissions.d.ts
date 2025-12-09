import type * as runtime from "@prisma/client/runtime/client";
import type * as Prisma from "../internal/prismaNamespace.js";
export type role_has_permissionsModel = runtime.Types.Result.DefaultSelection<Prisma.$role_has_permissionsPayload>;
export type AggregateRole_has_permissions = {
    _count: Role_has_permissionsCountAggregateOutputType | null;
    _avg: Role_has_permissionsAvgAggregateOutputType | null;
    _sum: Role_has_permissionsSumAggregateOutputType | null;
    _min: Role_has_permissionsMinAggregateOutputType | null;
    _max: Role_has_permissionsMaxAggregateOutputType | null;
};
export type Role_has_permissionsAvgAggregateOutputType = {
    permission_id: number | null;
    role_id: number | null;
};
export type Role_has_permissionsSumAggregateOutputType = {
    permission_id: bigint | null;
    role_id: bigint | null;
};
export type Role_has_permissionsMinAggregateOutputType = {
    permission_id: bigint | null;
    role_id: bigint | null;
};
export type Role_has_permissionsMaxAggregateOutputType = {
    permission_id: bigint | null;
    role_id: bigint | null;
};
export type Role_has_permissionsCountAggregateOutputType = {
    permission_id: number;
    role_id: number;
    _all: number;
};
export type Role_has_permissionsAvgAggregateInputType = {
    permission_id?: true;
    role_id?: true;
};
export type Role_has_permissionsSumAggregateInputType = {
    permission_id?: true;
    role_id?: true;
};
export type Role_has_permissionsMinAggregateInputType = {
    permission_id?: true;
    role_id?: true;
};
export type Role_has_permissionsMaxAggregateInputType = {
    permission_id?: true;
    role_id?: true;
};
export type Role_has_permissionsCountAggregateInputType = {
    permission_id?: true;
    role_id?: true;
    _all?: true;
};
export type Role_has_permissionsAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.role_has_permissionsWhereInput;
    orderBy?: Prisma.role_has_permissionsOrderByWithRelationInput | Prisma.role_has_permissionsOrderByWithRelationInput[];
    cursor?: Prisma.role_has_permissionsWhereUniqueInput;
    take?: number;
    skip?: number;
    _count?: true | Role_has_permissionsCountAggregateInputType;
    _avg?: Role_has_permissionsAvgAggregateInputType;
    _sum?: Role_has_permissionsSumAggregateInputType;
    _min?: Role_has_permissionsMinAggregateInputType;
    _max?: Role_has_permissionsMaxAggregateInputType;
};
export type GetRole_has_permissionsAggregateType<T extends Role_has_permissionsAggregateArgs> = {
    [P in keyof T & keyof AggregateRole_has_permissions]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateRole_has_permissions[P]> : Prisma.GetScalarType<T[P], AggregateRole_has_permissions[P]>;
};
export type role_has_permissionsGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.role_has_permissionsWhereInput;
    orderBy?: Prisma.role_has_permissionsOrderByWithAggregationInput | Prisma.role_has_permissionsOrderByWithAggregationInput[];
    by: Prisma.Role_has_permissionsScalarFieldEnum[] | Prisma.Role_has_permissionsScalarFieldEnum;
    having?: Prisma.role_has_permissionsScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: Role_has_permissionsCountAggregateInputType | true;
    _avg?: Role_has_permissionsAvgAggregateInputType;
    _sum?: Role_has_permissionsSumAggregateInputType;
    _min?: Role_has_permissionsMinAggregateInputType;
    _max?: Role_has_permissionsMaxAggregateInputType;
};
export type Role_has_permissionsGroupByOutputType = {
    permission_id: bigint;
    role_id: bigint;
    _count: Role_has_permissionsCountAggregateOutputType | null;
    _avg: Role_has_permissionsAvgAggregateOutputType | null;
    _sum: Role_has_permissionsSumAggregateOutputType | null;
    _min: Role_has_permissionsMinAggregateOutputType | null;
    _max: Role_has_permissionsMaxAggregateOutputType | null;
};
type GetRole_has_permissionsGroupByPayload<T extends role_has_permissionsGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<Role_has_permissionsGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof Role_has_permissionsGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], Role_has_permissionsGroupByOutputType[P]> : Prisma.GetScalarType<T[P], Role_has_permissionsGroupByOutputType[P]>;
}>>;
export type role_has_permissionsWhereInput = {
    AND?: Prisma.role_has_permissionsWhereInput | Prisma.role_has_permissionsWhereInput[];
    OR?: Prisma.role_has_permissionsWhereInput[];
    NOT?: Prisma.role_has_permissionsWhereInput | Prisma.role_has_permissionsWhereInput[];
    permission_id?: Prisma.BigIntFilter<"role_has_permissions"> | bigint | number;
    role_id?: Prisma.BigIntFilter<"role_has_permissions"> | bigint | number;
    permissions?: Prisma.XOR<Prisma.PermissionsScalarRelationFilter, Prisma.permissionsWhereInput>;
    roles?: Prisma.XOR<Prisma.RolesScalarRelationFilter, Prisma.rolesWhereInput>;
};
export type role_has_permissionsOrderByWithRelationInput = {
    permission_id?: Prisma.SortOrder;
    role_id?: Prisma.SortOrder;
    permissions?: Prisma.permissionsOrderByWithRelationInput;
    roles?: Prisma.rolesOrderByWithRelationInput;
};
export type role_has_permissionsWhereUniqueInput = Prisma.AtLeast<{
    permission_id_role_id?: Prisma.role_has_permissionsPermission_idRole_idCompoundUniqueInput;
    AND?: Prisma.role_has_permissionsWhereInput | Prisma.role_has_permissionsWhereInput[];
    OR?: Prisma.role_has_permissionsWhereInput[];
    NOT?: Prisma.role_has_permissionsWhereInput | Prisma.role_has_permissionsWhereInput[];
    permission_id?: Prisma.BigIntFilter<"role_has_permissions"> | bigint | number;
    role_id?: Prisma.BigIntFilter<"role_has_permissions"> | bigint | number;
    permissions?: Prisma.XOR<Prisma.PermissionsScalarRelationFilter, Prisma.permissionsWhereInput>;
    roles?: Prisma.XOR<Prisma.RolesScalarRelationFilter, Prisma.rolesWhereInput>;
}, "permission_id_role_id">;
export type role_has_permissionsOrderByWithAggregationInput = {
    permission_id?: Prisma.SortOrder;
    role_id?: Prisma.SortOrder;
    _count?: Prisma.role_has_permissionsCountOrderByAggregateInput;
    _avg?: Prisma.role_has_permissionsAvgOrderByAggregateInput;
    _max?: Prisma.role_has_permissionsMaxOrderByAggregateInput;
    _min?: Prisma.role_has_permissionsMinOrderByAggregateInput;
    _sum?: Prisma.role_has_permissionsSumOrderByAggregateInput;
};
export type role_has_permissionsScalarWhereWithAggregatesInput = {
    AND?: Prisma.role_has_permissionsScalarWhereWithAggregatesInput | Prisma.role_has_permissionsScalarWhereWithAggregatesInput[];
    OR?: Prisma.role_has_permissionsScalarWhereWithAggregatesInput[];
    NOT?: Prisma.role_has_permissionsScalarWhereWithAggregatesInput | Prisma.role_has_permissionsScalarWhereWithAggregatesInput[];
    permission_id?: Prisma.BigIntWithAggregatesFilter<"role_has_permissions"> | bigint | number;
    role_id?: Prisma.BigIntWithAggregatesFilter<"role_has_permissions"> | bigint | number;
};
export type role_has_permissionsCreateInput = {
    permissions: Prisma.permissionsCreateNestedOneWithoutRole_has_permissionsInput;
    roles: Prisma.rolesCreateNestedOneWithoutRole_has_permissionsInput;
};
export type role_has_permissionsUncheckedCreateInput = {
    permission_id: bigint | number;
    role_id: bigint | number;
};
export type role_has_permissionsUpdateInput = {
    permissions?: Prisma.permissionsUpdateOneRequiredWithoutRole_has_permissionsNestedInput;
    roles?: Prisma.rolesUpdateOneRequiredWithoutRole_has_permissionsNestedInput;
};
export type role_has_permissionsUncheckedUpdateInput = {
    permission_id?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    role_id?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
};
export type role_has_permissionsCreateManyInput = {
    permission_id: bigint | number;
    role_id: bigint | number;
};
export type role_has_permissionsUpdateManyMutationInput = {};
export type role_has_permissionsUncheckedUpdateManyInput = {
    permission_id?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    role_id?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
};
export type Role_has_permissionsListRelationFilter = {
    every?: Prisma.role_has_permissionsWhereInput;
    some?: Prisma.role_has_permissionsWhereInput;
    none?: Prisma.role_has_permissionsWhereInput;
};
export type role_has_permissionsOrderByRelationAggregateInput = {
    _count?: Prisma.SortOrder;
};
export type role_has_permissionsPermission_idRole_idCompoundUniqueInput = {
    permission_id: bigint | number;
    role_id: bigint | number;
};
export type role_has_permissionsCountOrderByAggregateInput = {
    permission_id?: Prisma.SortOrder;
    role_id?: Prisma.SortOrder;
};
export type role_has_permissionsAvgOrderByAggregateInput = {
    permission_id?: Prisma.SortOrder;
    role_id?: Prisma.SortOrder;
};
export type role_has_permissionsMaxOrderByAggregateInput = {
    permission_id?: Prisma.SortOrder;
    role_id?: Prisma.SortOrder;
};
export type role_has_permissionsMinOrderByAggregateInput = {
    permission_id?: Prisma.SortOrder;
    role_id?: Prisma.SortOrder;
};
export type role_has_permissionsSumOrderByAggregateInput = {
    permission_id?: Prisma.SortOrder;
    role_id?: Prisma.SortOrder;
};
export type role_has_permissionsCreateNestedManyWithoutPermissionsInput = {
    create?: Prisma.XOR<Prisma.role_has_permissionsCreateWithoutPermissionsInput, Prisma.role_has_permissionsUncheckedCreateWithoutPermissionsInput> | Prisma.role_has_permissionsCreateWithoutPermissionsInput[] | Prisma.role_has_permissionsUncheckedCreateWithoutPermissionsInput[];
    connectOrCreate?: Prisma.role_has_permissionsCreateOrConnectWithoutPermissionsInput | Prisma.role_has_permissionsCreateOrConnectWithoutPermissionsInput[];
    createMany?: Prisma.role_has_permissionsCreateManyPermissionsInputEnvelope;
    connect?: Prisma.role_has_permissionsWhereUniqueInput | Prisma.role_has_permissionsWhereUniqueInput[];
};
export type role_has_permissionsUncheckedCreateNestedManyWithoutPermissionsInput = {
    create?: Prisma.XOR<Prisma.role_has_permissionsCreateWithoutPermissionsInput, Prisma.role_has_permissionsUncheckedCreateWithoutPermissionsInput> | Prisma.role_has_permissionsCreateWithoutPermissionsInput[] | Prisma.role_has_permissionsUncheckedCreateWithoutPermissionsInput[];
    connectOrCreate?: Prisma.role_has_permissionsCreateOrConnectWithoutPermissionsInput | Prisma.role_has_permissionsCreateOrConnectWithoutPermissionsInput[];
    createMany?: Prisma.role_has_permissionsCreateManyPermissionsInputEnvelope;
    connect?: Prisma.role_has_permissionsWhereUniqueInput | Prisma.role_has_permissionsWhereUniqueInput[];
};
export type role_has_permissionsUpdateManyWithoutPermissionsNestedInput = {
    create?: Prisma.XOR<Prisma.role_has_permissionsCreateWithoutPermissionsInput, Prisma.role_has_permissionsUncheckedCreateWithoutPermissionsInput> | Prisma.role_has_permissionsCreateWithoutPermissionsInput[] | Prisma.role_has_permissionsUncheckedCreateWithoutPermissionsInput[];
    connectOrCreate?: Prisma.role_has_permissionsCreateOrConnectWithoutPermissionsInput | Prisma.role_has_permissionsCreateOrConnectWithoutPermissionsInput[];
    upsert?: Prisma.role_has_permissionsUpsertWithWhereUniqueWithoutPermissionsInput | Prisma.role_has_permissionsUpsertWithWhereUniqueWithoutPermissionsInput[];
    createMany?: Prisma.role_has_permissionsCreateManyPermissionsInputEnvelope;
    set?: Prisma.role_has_permissionsWhereUniqueInput | Prisma.role_has_permissionsWhereUniqueInput[];
    disconnect?: Prisma.role_has_permissionsWhereUniqueInput | Prisma.role_has_permissionsWhereUniqueInput[];
    delete?: Prisma.role_has_permissionsWhereUniqueInput | Prisma.role_has_permissionsWhereUniqueInput[];
    connect?: Prisma.role_has_permissionsWhereUniqueInput | Prisma.role_has_permissionsWhereUniqueInput[];
    update?: Prisma.role_has_permissionsUpdateWithWhereUniqueWithoutPermissionsInput | Prisma.role_has_permissionsUpdateWithWhereUniqueWithoutPermissionsInput[];
    updateMany?: Prisma.role_has_permissionsUpdateManyWithWhereWithoutPermissionsInput | Prisma.role_has_permissionsUpdateManyWithWhereWithoutPermissionsInput[];
    deleteMany?: Prisma.role_has_permissionsScalarWhereInput | Prisma.role_has_permissionsScalarWhereInput[];
};
export type role_has_permissionsUncheckedUpdateManyWithoutPermissionsNestedInput = {
    create?: Prisma.XOR<Prisma.role_has_permissionsCreateWithoutPermissionsInput, Prisma.role_has_permissionsUncheckedCreateWithoutPermissionsInput> | Prisma.role_has_permissionsCreateWithoutPermissionsInput[] | Prisma.role_has_permissionsUncheckedCreateWithoutPermissionsInput[];
    connectOrCreate?: Prisma.role_has_permissionsCreateOrConnectWithoutPermissionsInput | Prisma.role_has_permissionsCreateOrConnectWithoutPermissionsInput[];
    upsert?: Prisma.role_has_permissionsUpsertWithWhereUniqueWithoutPermissionsInput | Prisma.role_has_permissionsUpsertWithWhereUniqueWithoutPermissionsInput[];
    createMany?: Prisma.role_has_permissionsCreateManyPermissionsInputEnvelope;
    set?: Prisma.role_has_permissionsWhereUniqueInput | Prisma.role_has_permissionsWhereUniqueInput[];
    disconnect?: Prisma.role_has_permissionsWhereUniqueInput | Prisma.role_has_permissionsWhereUniqueInput[];
    delete?: Prisma.role_has_permissionsWhereUniqueInput | Prisma.role_has_permissionsWhereUniqueInput[];
    connect?: Prisma.role_has_permissionsWhereUniqueInput | Prisma.role_has_permissionsWhereUniqueInput[];
    update?: Prisma.role_has_permissionsUpdateWithWhereUniqueWithoutPermissionsInput | Prisma.role_has_permissionsUpdateWithWhereUniqueWithoutPermissionsInput[];
    updateMany?: Prisma.role_has_permissionsUpdateManyWithWhereWithoutPermissionsInput | Prisma.role_has_permissionsUpdateManyWithWhereWithoutPermissionsInput[];
    deleteMany?: Prisma.role_has_permissionsScalarWhereInput | Prisma.role_has_permissionsScalarWhereInput[];
};
export type role_has_permissionsCreateNestedManyWithoutRolesInput = {
    create?: Prisma.XOR<Prisma.role_has_permissionsCreateWithoutRolesInput, Prisma.role_has_permissionsUncheckedCreateWithoutRolesInput> | Prisma.role_has_permissionsCreateWithoutRolesInput[] | Prisma.role_has_permissionsUncheckedCreateWithoutRolesInput[];
    connectOrCreate?: Prisma.role_has_permissionsCreateOrConnectWithoutRolesInput | Prisma.role_has_permissionsCreateOrConnectWithoutRolesInput[];
    createMany?: Prisma.role_has_permissionsCreateManyRolesInputEnvelope;
    connect?: Prisma.role_has_permissionsWhereUniqueInput | Prisma.role_has_permissionsWhereUniqueInput[];
};
export type role_has_permissionsUncheckedCreateNestedManyWithoutRolesInput = {
    create?: Prisma.XOR<Prisma.role_has_permissionsCreateWithoutRolesInput, Prisma.role_has_permissionsUncheckedCreateWithoutRolesInput> | Prisma.role_has_permissionsCreateWithoutRolesInput[] | Prisma.role_has_permissionsUncheckedCreateWithoutRolesInput[];
    connectOrCreate?: Prisma.role_has_permissionsCreateOrConnectWithoutRolesInput | Prisma.role_has_permissionsCreateOrConnectWithoutRolesInput[];
    createMany?: Prisma.role_has_permissionsCreateManyRolesInputEnvelope;
    connect?: Prisma.role_has_permissionsWhereUniqueInput | Prisma.role_has_permissionsWhereUniqueInput[];
};
export type role_has_permissionsUpdateManyWithoutRolesNestedInput = {
    create?: Prisma.XOR<Prisma.role_has_permissionsCreateWithoutRolesInput, Prisma.role_has_permissionsUncheckedCreateWithoutRolesInput> | Prisma.role_has_permissionsCreateWithoutRolesInput[] | Prisma.role_has_permissionsUncheckedCreateWithoutRolesInput[];
    connectOrCreate?: Prisma.role_has_permissionsCreateOrConnectWithoutRolesInput | Prisma.role_has_permissionsCreateOrConnectWithoutRolesInput[];
    upsert?: Prisma.role_has_permissionsUpsertWithWhereUniqueWithoutRolesInput | Prisma.role_has_permissionsUpsertWithWhereUniqueWithoutRolesInput[];
    createMany?: Prisma.role_has_permissionsCreateManyRolesInputEnvelope;
    set?: Prisma.role_has_permissionsWhereUniqueInput | Prisma.role_has_permissionsWhereUniqueInput[];
    disconnect?: Prisma.role_has_permissionsWhereUniqueInput | Prisma.role_has_permissionsWhereUniqueInput[];
    delete?: Prisma.role_has_permissionsWhereUniqueInput | Prisma.role_has_permissionsWhereUniqueInput[];
    connect?: Prisma.role_has_permissionsWhereUniqueInput | Prisma.role_has_permissionsWhereUniqueInput[];
    update?: Prisma.role_has_permissionsUpdateWithWhereUniqueWithoutRolesInput | Prisma.role_has_permissionsUpdateWithWhereUniqueWithoutRolesInput[];
    updateMany?: Prisma.role_has_permissionsUpdateManyWithWhereWithoutRolesInput | Prisma.role_has_permissionsUpdateManyWithWhereWithoutRolesInput[];
    deleteMany?: Prisma.role_has_permissionsScalarWhereInput | Prisma.role_has_permissionsScalarWhereInput[];
};
export type role_has_permissionsUncheckedUpdateManyWithoutRolesNestedInput = {
    create?: Prisma.XOR<Prisma.role_has_permissionsCreateWithoutRolesInput, Prisma.role_has_permissionsUncheckedCreateWithoutRolesInput> | Prisma.role_has_permissionsCreateWithoutRolesInput[] | Prisma.role_has_permissionsUncheckedCreateWithoutRolesInput[];
    connectOrCreate?: Prisma.role_has_permissionsCreateOrConnectWithoutRolesInput | Prisma.role_has_permissionsCreateOrConnectWithoutRolesInput[];
    upsert?: Prisma.role_has_permissionsUpsertWithWhereUniqueWithoutRolesInput | Prisma.role_has_permissionsUpsertWithWhereUniqueWithoutRolesInput[];
    createMany?: Prisma.role_has_permissionsCreateManyRolesInputEnvelope;
    set?: Prisma.role_has_permissionsWhereUniqueInput | Prisma.role_has_permissionsWhereUniqueInput[];
    disconnect?: Prisma.role_has_permissionsWhereUniqueInput | Prisma.role_has_permissionsWhereUniqueInput[];
    delete?: Prisma.role_has_permissionsWhereUniqueInput | Prisma.role_has_permissionsWhereUniqueInput[];
    connect?: Prisma.role_has_permissionsWhereUniqueInput | Prisma.role_has_permissionsWhereUniqueInput[];
    update?: Prisma.role_has_permissionsUpdateWithWhereUniqueWithoutRolesInput | Prisma.role_has_permissionsUpdateWithWhereUniqueWithoutRolesInput[];
    updateMany?: Prisma.role_has_permissionsUpdateManyWithWhereWithoutRolesInput | Prisma.role_has_permissionsUpdateManyWithWhereWithoutRolesInput[];
    deleteMany?: Prisma.role_has_permissionsScalarWhereInput | Prisma.role_has_permissionsScalarWhereInput[];
};
export type role_has_permissionsCreateWithoutPermissionsInput = {
    roles: Prisma.rolesCreateNestedOneWithoutRole_has_permissionsInput;
};
export type role_has_permissionsUncheckedCreateWithoutPermissionsInput = {
    role_id: bigint | number;
};
export type role_has_permissionsCreateOrConnectWithoutPermissionsInput = {
    where: Prisma.role_has_permissionsWhereUniqueInput;
    create: Prisma.XOR<Prisma.role_has_permissionsCreateWithoutPermissionsInput, Prisma.role_has_permissionsUncheckedCreateWithoutPermissionsInput>;
};
export type role_has_permissionsCreateManyPermissionsInputEnvelope = {
    data: Prisma.role_has_permissionsCreateManyPermissionsInput | Prisma.role_has_permissionsCreateManyPermissionsInput[];
    skipDuplicates?: boolean;
};
export type role_has_permissionsUpsertWithWhereUniqueWithoutPermissionsInput = {
    where: Prisma.role_has_permissionsWhereUniqueInput;
    update: Prisma.XOR<Prisma.role_has_permissionsUpdateWithoutPermissionsInput, Prisma.role_has_permissionsUncheckedUpdateWithoutPermissionsInput>;
    create: Prisma.XOR<Prisma.role_has_permissionsCreateWithoutPermissionsInput, Prisma.role_has_permissionsUncheckedCreateWithoutPermissionsInput>;
};
export type role_has_permissionsUpdateWithWhereUniqueWithoutPermissionsInput = {
    where: Prisma.role_has_permissionsWhereUniqueInput;
    data: Prisma.XOR<Prisma.role_has_permissionsUpdateWithoutPermissionsInput, Prisma.role_has_permissionsUncheckedUpdateWithoutPermissionsInput>;
};
export type role_has_permissionsUpdateManyWithWhereWithoutPermissionsInput = {
    where: Prisma.role_has_permissionsScalarWhereInput;
    data: Prisma.XOR<Prisma.role_has_permissionsUpdateManyMutationInput, Prisma.role_has_permissionsUncheckedUpdateManyWithoutPermissionsInput>;
};
export type role_has_permissionsScalarWhereInput = {
    AND?: Prisma.role_has_permissionsScalarWhereInput | Prisma.role_has_permissionsScalarWhereInput[];
    OR?: Prisma.role_has_permissionsScalarWhereInput[];
    NOT?: Prisma.role_has_permissionsScalarWhereInput | Prisma.role_has_permissionsScalarWhereInput[];
    permission_id?: Prisma.BigIntFilter<"role_has_permissions"> | bigint | number;
    role_id?: Prisma.BigIntFilter<"role_has_permissions"> | bigint | number;
};
export type role_has_permissionsCreateWithoutRolesInput = {
    permissions: Prisma.permissionsCreateNestedOneWithoutRole_has_permissionsInput;
};
export type role_has_permissionsUncheckedCreateWithoutRolesInput = {
    permission_id: bigint | number;
};
export type role_has_permissionsCreateOrConnectWithoutRolesInput = {
    where: Prisma.role_has_permissionsWhereUniqueInput;
    create: Prisma.XOR<Prisma.role_has_permissionsCreateWithoutRolesInput, Prisma.role_has_permissionsUncheckedCreateWithoutRolesInput>;
};
export type role_has_permissionsCreateManyRolesInputEnvelope = {
    data: Prisma.role_has_permissionsCreateManyRolesInput | Prisma.role_has_permissionsCreateManyRolesInput[];
    skipDuplicates?: boolean;
};
export type role_has_permissionsUpsertWithWhereUniqueWithoutRolesInput = {
    where: Prisma.role_has_permissionsWhereUniqueInput;
    update: Prisma.XOR<Prisma.role_has_permissionsUpdateWithoutRolesInput, Prisma.role_has_permissionsUncheckedUpdateWithoutRolesInput>;
    create: Prisma.XOR<Prisma.role_has_permissionsCreateWithoutRolesInput, Prisma.role_has_permissionsUncheckedCreateWithoutRolesInput>;
};
export type role_has_permissionsUpdateWithWhereUniqueWithoutRolesInput = {
    where: Prisma.role_has_permissionsWhereUniqueInput;
    data: Prisma.XOR<Prisma.role_has_permissionsUpdateWithoutRolesInput, Prisma.role_has_permissionsUncheckedUpdateWithoutRolesInput>;
};
export type role_has_permissionsUpdateManyWithWhereWithoutRolesInput = {
    where: Prisma.role_has_permissionsScalarWhereInput;
    data: Prisma.XOR<Prisma.role_has_permissionsUpdateManyMutationInput, Prisma.role_has_permissionsUncheckedUpdateManyWithoutRolesInput>;
};
export type role_has_permissionsCreateManyPermissionsInput = {
    role_id: bigint | number;
};
export type role_has_permissionsUpdateWithoutPermissionsInput = {
    roles?: Prisma.rolesUpdateOneRequiredWithoutRole_has_permissionsNestedInput;
};
export type role_has_permissionsUncheckedUpdateWithoutPermissionsInput = {
    role_id?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
};
export type role_has_permissionsUncheckedUpdateManyWithoutPermissionsInput = {
    role_id?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
};
export type role_has_permissionsCreateManyRolesInput = {
    permission_id: bigint | number;
};
export type role_has_permissionsUpdateWithoutRolesInput = {
    permissions?: Prisma.permissionsUpdateOneRequiredWithoutRole_has_permissionsNestedInput;
};
export type role_has_permissionsUncheckedUpdateWithoutRolesInput = {
    permission_id?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
};
export type role_has_permissionsUncheckedUpdateManyWithoutRolesInput = {
    permission_id?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
};
export type role_has_permissionsSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    permission_id?: boolean;
    role_id?: boolean;
    permissions?: boolean | Prisma.permissionsDefaultArgs<ExtArgs>;
    roles?: boolean | Prisma.rolesDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["role_has_permissions"]>;
export type role_has_permissionsSelectScalar = {
    permission_id?: boolean;
    role_id?: boolean;
};
export type role_has_permissionsOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"permission_id" | "role_id", ExtArgs["result"]["role_has_permissions"]>;
export type role_has_permissionsInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    permissions?: boolean | Prisma.permissionsDefaultArgs<ExtArgs>;
    roles?: boolean | Prisma.rolesDefaultArgs<ExtArgs>;
};
export type $role_has_permissionsPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "role_has_permissions";
    objects: {
        permissions: Prisma.$permissionsPayload<ExtArgs>;
        roles: Prisma.$rolesPayload<ExtArgs>;
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        permission_id: bigint;
        role_id: bigint;
    }, ExtArgs["result"]["role_has_permissions"]>;
    composites: {};
};
export type role_has_permissionsGetPayload<S extends boolean | null | undefined | role_has_permissionsDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$role_has_permissionsPayload, S>;
export type role_has_permissionsCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<role_has_permissionsFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: Role_has_permissionsCountAggregateInputType | true;
};
export interface role_has_permissionsDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['role_has_permissions'];
        meta: {
            name: 'role_has_permissions';
        };
    };
    findUnique<T extends role_has_permissionsFindUniqueArgs>(args: Prisma.SelectSubset<T, role_has_permissionsFindUniqueArgs<ExtArgs>>): Prisma.Prisma__role_has_permissionsClient<runtime.Types.Result.GetResult<Prisma.$role_has_permissionsPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findUniqueOrThrow<T extends role_has_permissionsFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, role_has_permissionsFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__role_has_permissionsClient<runtime.Types.Result.GetResult<Prisma.$role_has_permissionsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findFirst<T extends role_has_permissionsFindFirstArgs>(args?: Prisma.SelectSubset<T, role_has_permissionsFindFirstArgs<ExtArgs>>): Prisma.Prisma__role_has_permissionsClient<runtime.Types.Result.GetResult<Prisma.$role_has_permissionsPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findFirstOrThrow<T extends role_has_permissionsFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, role_has_permissionsFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__role_has_permissionsClient<runtime.Types.Result.GetResult<Prisma.$role_has_permissionsPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findMany<T extends role_has_permissionsFindManyArgs>(args?: Prisma.SelectSubset<T, role_has_permissionsFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$role_has_permissionsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    create<T extends role_has_permissionsCreateArgs>(args: Prisma.SelectSubset<T, role_has_permissionsCreateArgs<ExtArgs>>): Prisma.Prisma__role_has_permissionsClient<runtime.Types.Result.GetResult<Prisma.$role_has_permissionsPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    createMany<T extends role_has_permissionsCreateManyArgs>(args?: Prisma.SelectSubset<T, role_has_permissionsCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    delete<T extends role_has_permissionsDeleteArgs>(args: Prisma.SelectSubset<T, role_has_permissionsDeleteArgs<ExtArgs>>): Prisma.Prisma__role_has_permissionsClient<runtime.Types.Result.GetResult<Prisma.$role_has_permissionsPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    update<T extends role_has_permissionsUpdateArgs>(args: Prisma.SelectSubset<T, role_has_permissionsUpdateArgs<ExtArgs>>): Prisma.Prisma__role_has_permissionsClient<runtime.Types.Result.GetResult<Prisma.$role_has_permissionsPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    deleteMany<T extends role_has_permissionsDeleteManyArgs>(args?: Prisma.SelectSubset<T, role_has_permissionsDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateMany<T extends role_has_permissionsUpdateManyArgs>(args: Prisma.SelectSubset<T, role_has_permissionsUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    upsert<T extends role_has_permissionsUpsertArgs>(args: Prisma.SelectSubset<T, role_has_permissionsUpsertArgs<ExtArgs>>): Prisma.Prisma__role_has_permissionsClient<runtime.Types.Result.GetResult<Prisma.$role_has_permissionsPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    count<T extends role_has_permissionsCountArgs>(args?: Prisma.Subset<T, role_has_permissionsCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], Role_has_permissionsCountAggregateOutputType> : number>;
    aggregate<T extends Role_has_permissionsAggregateArgs>(args: Prisma.Subset<T, Role_has_permissionsAggregateArgs>): Prisma.PrismaPromise<GetRole_has_permissionsAggregateType<T>>;
    groupBy<T extends role_has_permissionsGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: role_has_permissionsGroupByArgs['orderBy'];
    } : {
        orderBy?: role_has_permissionsGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, role_has_permissionsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetRole_has_permissionsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    readonly fields: role_has_permissionsFieldRefs;
}
export interface Prisma__role_has_permissionsClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    permissions<T extends Prisma.permissionsDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.permissionsDefaultArgs<ExtArgs>>): Prisma.Prisma__permissionsClient<runtime.Types.Result.GetResult<Prisma.$permissionsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    roles<T extends Prisma.rolesDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.rolesDefaultArgs<ExtArgs>>): Prisma.Prisma__rolesClient<runtime.Types.Result.GetResult<Prisma.$rolesPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): runtime.Types.Utils.JsPromise<TResult1 | TResult2>;
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): runtime.Types.Utils.JsPromise<T | TResult>;
    finally(onfinally?: (() => void) | undefined | null): runtime.Types.Utils.JsPromise<T>;
}
export interface role_has_permissionsFieldRefs {
    readonly permission_id: Prisma.FieldRef<"role_has_permissions", 'BigInt'>;
    readonly role_id: Prisma.FieldRef<"role_has_permissions", 'BigInt'>;
}
export type role_has_permissionsFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.role_has_permissionsSelect<ExtArgs> | null;
    omit?: Prisma.role_has_permissionsOmit<ExtArgs> | null;
    include?: Prisma.role_has_permissionsInclude<ExtArgs> | null;
    where: Prisma.role_has_permissionsWhereUniqueInput;
};
export type role_has_permissionsFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.role_has_permissionsSelect<ExtArgs> | null;
    omit?: Prisma.role_has_permissionsOmit<ExtArgs> | null;
    include?: Prisma.role_has_permissionsInclude<ExtArgs> | null;
    where: Prisma.role_has_permissionsWhereUniqueInput;
};
export type role_has_permissionsFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
export type role_has_permissionsFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
export type role_has_permissionsFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
export type role_has_permissionsCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.role_has_permissionsSelect<ExtArgs> | null;
    omit?: Prisma.role_has_permissionsOmit<ExtArgs> | null;
    include?: Prisma.role_has_permissionsInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.role_has_permissionsCreateInput, Prisma.role_has_permissionsUncheckedCreateInput>;
};
export type role_has_permissionsCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.role_has_permissionsCreateManyInput | Prisma.role_has_permissionsCreateManyInput[];
    skipDuplicates?: boolean;
};
export type role_has_permissionsUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.role_has_permissionsSelect<ExtArgs> | null;
    omit?: Prisma.role_has_permissionsOmit<ExtArgs> | null;
    include?: Prisma.role_has_permissionsInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.role_has_permissionsUpdateInput, Prisma.role_has_permissionsUncheckedUpdateInput>;
    where: Prisma.role_has_permissionsWhereUniqueInput;
};
export type role_has_permissionsUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.XOR<Prisma.role_has_permissionsUpdateManyMutationInput, Prisma.role_has_permissionsUncheckedUpdateManyInput>;
    where?: Prisma.role_has_permissionsWhereInput;
    limit?: number;
};
export type role_has_permissionsUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.role_has_permissionsSelect<ExtArgs> | null;
    omit?: Prisma.role_has_permissionsOmit<ExtArgs> | null;
    include?: Prisma.role_has_permissionsInclude<ExtArgs> | null;
    where: Prisma.role_has_permissionsWhereUniqueInput;
    create: Prisma.XOR<Prisma.role_has_permissionsCreateInput, Prisma.role_has_permissionsUncheckedCreateInput>;
    update: Prisma.XOR<Prisma.role_has_permissionsUpdateInput, Prisma.role_has_permissionsUncheckedUpdateInput>;
};
export type role_has_permissionsDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.role_has_permissionsSelect<ExtArgs> | null;
    omit?: Prisma.role_has_permissionsOmit<ExtArgs> | null;
    include?: Prisma.role_has_permissionsInclude<ExtArgs> | null;
    where: Prisma.role_has_permissionsWhereUniqueInput;
};
export type role_has_permissionsDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.role_has_permissionsWhereInput;
    limit?: number;
};
export type role_has_permissionsDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.role_has_permissionsSelect<ExtArgs> | null;
    omit?: Prisma.role_has_permissionsOmit<ExtArgs> | null;
    include?: Prisma.role_has_permissionsInclude<ExtArgs> | null;
};
export {};
