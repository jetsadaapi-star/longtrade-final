import type * as runtime from "@prisma/client/runtime/client";
import type * as Prisma from "../internal/prismaNamespace.js";
export type activity_logsModel = runtime.Types.Result.DefaultSelection<Prisma.$activity_logsPayload>;
export type AggregateActivity_logs = {
    _count: Activity_logsCountAggregateOutputType | null;
    _avg: Activity_logsAvgAggregateOutputType | null;
    _sum: Activity_logsSumAggregateOutputType | null;
    _min: Activity_logsMinAggregateOutputType | null;
    _max: Activity_logsMaxAggregateOutputType | null;
};
export type Activity_logsAvgAggregateOutputType = {
    id: number | null;
    user_id: number | null;
    subject_id: number | null;
    causer_id: number | null;
};
export type Activity_logsSumAggregateOutputType = {
    id: bigint | null;
    user_id: bigint | null;
    subject_id: bigint | null;
    causer_id: bigint | null;
};
export type Activity_logsMinAggregateOutputType = {
    id: bigint | null;
    user_id: bigint | null;
    log_name: string | null;
    description: string | null;
    subject_type: string | null;
    subject_id: bigint | null;
    event: string | null;
    causer_type: string | null;
    causer_id: bigint | null;
    batch_uuid: string | null;
    ip_address: string | null;
    user_agent: string | null;
    created_at: Date | null;
    updated_at: Date | null;
};
export type Activity_logsMaxAggregateOutputType = {
    id: bigint | null;
    user_id: bigint | null;
    log_name: string | null;
    description: string | null;
    subject_type: string | null;
    subject_id: bigint | null;
    event: string | null;
    causer_type: string | null;
    causer_id: bigint | null;
    batch_uuid: string | null;
    ip_address: string | null;
    user_agent: string | null;
    created_at: Date | null;
    updated_at: Date | null;
};
export type Activity_logsCountAggregateOutputType = {
    id: number;
    user_id: number;
    log_name: number;
    description: number;
    subject_type: number;
    subject_id: number;
    event: number;
    causer_type: number;
    causer_id: number;
    properties: number;
    batch_uuid: number;
    ip_address: number;
    user_agent: number;
    created_at: number;
    updated_at: number;
    _all: number;
};
export type Activity_logsAvgAggregateInputType = {
    id?: true;
    user_id?: true;
    subject_id?: true;
    causer_id?: true;
};
export type Activity_logsSumAggregateInputType = {
    id?: true;
    user_id?: true;
    subject_id?: true;
    causer_id?: true;
};
export type Activity_logsMinAggregateInputType = {
    id?: true;
    user_id?: true;
    log_name?: true;
    description?: true;
    subject_type?: true;
    subject_id?: true;
    event?: true;
    causer_type?: true;
    causer_id?: true;
    batch_uuid?: true;
    ip_address?: true;
    user_agent?: true;
    created_at?: true;
    updated_at?: true;
};
export type Activity_logsMaxAggregateInputType = {
    id?: true;
    user_id?: true;
    log_name?: true;
    description?: true;
    subject_type?: true;
    subject_id?: true;
    event?: true;
    causer_type?: true;
    causer_id?: true;
    batch_uuid?: true;
    ip_address?: true;
    user_agent?: true;
    created_at?: true;
    updated_at?: true;
};
export type Activity_logsCountAggregateInputType = {
    id?: true;
    user_id?: true;
    log_name?: true;
    description?: true;
    subject_type?: true;
    subject_id?: true;
    event?: true;
    causer_type?: true;
    causer_id?: true;
    properties?: true;
    batch_uuid?: true;
    ip_address?: true;
    user_agent?: true;
    created_at?: true;
    updated_at?: true;
    _all?: true;
};
export type Activity_logsAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.activity_logsWhereInput;
    orderBy?: Prisma.activity_logsOrderByWithRelationInput | Prisma.activity_logsOrderByWithRelationInput[];
    cursor?: Prisma.activity_logsWhereUniqueInput;
    take?: number;
    skip?: number;
    _count?: true | Activity_logsCountAggregateInputType;
    _avg?: Activity_logsAvgAggregateInputType;
    _sum?: Activity_logsSumAggregateInputType;
    _min?: Activity_logsMinAggregateInputType;
    _max?: Activity_logsMaxAggregateInputType;
};
export type GetActivity_logsAggregateType<T extends Activity_logsAggregateArgs> = {
    [P in keyof T & keyof AggregateActivity_logs]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateActivity_logs[P]> : Prisma.GetScalarType<T[P], AggregateActivity_logs[P]>;
};
export type activity_logsGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.activity_logsWhereInput;
    orderBy?: Prisma.activity_logsOrderByWithAggregationInput | Prisma.activity_logsOrderByWithAggregationInput[];
    by: Prisma.Activity_logsScalarFieldEnum[] | Prisma.Activity_logsScalarFieldEnum;
    having?: Prisma.activity_logsScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: Activity_logsCountAggregateInputType | true;
    _avg?: Activity_logsAvgAggregateInputType;
    _sum?: Activity_logsSumAggregateInputType;
    _min?: Activity_logsMinAggregateInputType;
    _max?: Activity_logsMaxAggregateInputType;
};
export type Activity_logsGroupByOutputType = {
    id: bigint;
    user_id: bigint | null;
    log_name: string | null;
    description: string;
    subject_type: string | null;
    subject_id: bigint | null;
    event: string | null;
    causer_type: string | null;
    causer_id: bigint | null;
    properties: runtime.JsonValue | null;
    batch_uuid: string | null;
    ip_address: string | null;
    user_agent: string | null;
    created_at: Date | null;
    updated_at: Date | null;
    _count: Activity_logsCountAggregateOutputType | null;
    _avg: Activity_logsAvgAggregateOutputType | null;
    _sum: Activity_logsSumAggregateOutputType | null;
    _min: Activity_logsMinAggregateOutputType | null;
    _max: Activity_logsMaxAggregateOutputType | null;
};
type GetActivity_logsGroupByPayload<T extends activity_logsGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<Activity_logsGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof Activity_logsGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], Activity_logsGroupByOutputType[P]> : Prisma.GetScalarType<T[P], Activity_logsGroupByOutputType[P]>;
}>>;
export type activity_logsWhereInput = {
    AND?: Prisma.activity_logsWhereInput | Prisma.activity_logsWhereInput[];
    OR?: Prisma.activity_logsWhereInput[];
    NOT?: Prisma.activity_logsWhereInput | Prisma.activity_logsWhereInput[];
    id?: Prisma.BigIntFilter<"activity_logs"> | bigint | number;
    user_id?: Prisma.BigIntNullableFilter<"activity_logs"> | bigint | number | null;
    log_name?: Prisma.StringNullableFilter<"activity_logs"> | string | null;
    description?: Prisma.StringFilter<"activity_logs"> | string;
    subject_type?: Prisma.StringNullableFilter<"activity_logs"> | string | null;
    subject_id?: Prisma.BigIntNullableFilter<"activity_logs"> | bigint | number | null;
    event?: Prisma.StringNullableFilter<"activity_logs"> | string | null;
    causer_type?: Prisma.StringNullableFilter<"activity_logs"> | string | null;
    causer_id?: Prisma.BigIntNullableFilter<"activity_logs"> | bigint | number | null;
    properties?: Prisma.JsonNullableFilter<"activity_logs">;
    batch_uuid?: Prisma.StringNullableFilter<"activity_logs"> | string | null;
    ip_address?: Prisma.StringNullableFilter<"activity_logs"> | string | null;
    user_agent?: Prisma.StringNullableFilter<"activity_logs"> | string | null;
    created_at?: Prisma.DateTimeNullableFilter<"activity_logs"> | Date | string | null;
    updated_at?: Prisma.DateTimeNullableFilter<"activity_logs"> | Date | string | null;
    users?: Prisma.XOR<Prisma.UsersNullableScalarRelationFilter, Prisma.usersWhereInput> | null;
};
export type activity_logsOrderByWithRelationInput = {
    id?: Prisma.SortOrder;
    user_id?: Prisma.SortOrderInput | Prisma.SortOrder;
    log_name?: Prisma.SortOrderInput | Prisma.SortOrder;
    description?: Prisma.SortOrder;
    subject_type?: Prisma.SortOrderInput | Prisma.SortOrder;
    subject_id?: Prisma.SortOrderInput | Prisma.SortOrder;
    event?: Prisma.SortOrderInput | Prisma.SortOrder;
    causer_type?: Prisma.SortOrderInput | Prisma.SortOrder;
    causer_id?: Prisma.SortOrderInput | Prisma.SortOrder;
    properties?: Prisma.SortOrderInput | Prisma.SortOrder;
    batch_uuid?: Prisma.SortOrderInput | Prisma.SortOrder;
    ip_address?: Prisma.SortOrderInput | Prisma.SortOrder;
    user_agent?: Prisma.SortOrderInput | Prisma.SortOrder;
    created_at?: Prisma.SortOrderInput | Prisma.SortOrder;
    updated_at?: Prisma.SortOrderInput | Prisma.SortOrder;
    users?: Prisma.usersOrderByWithRelationInput;
    _relevance?: Prisma.activity_logsOrderByRelevanceInput;
};
export type activity_logsWhereUniqueInput = Prisma.AtLeast<{
    id?: bigint | number;
    AND?: Prisma.activity_logsWhereInput | Prisma.activity_logsWhereInput[];
    OR?: Prisma.activity_logsWhereInput[];
    NOT?: Prisma.activity_logsWhereInput | Prisma.activity_logsWhereInput[];
    user_id?: Prisma.BigIntNullableFilter<"activity_logs"> | bigint | number | null;
    log_name?: Prisma.StringNullableFilter<"activity_logs"> | string | null;
    description?: Prisma.StringFilter<"activity_logs"> | string;
    subject_type?: Prisma.StringNullableFilter<"activity_logs"> | string | null;
    subject_id?: Prisma.BigIntNullableFilter<"activity_logs"> | bigint | number | null;
    event?: Prisma.StringNullableFilter<"activity_logs"> | string | null;
    causer_type?: Prisma.StringNullableFilter<"activity_logs"> | string | null;
    causer_id?: Prisma.BigIntNullableFilter<"activity_logs"> | bigint | number | null;
    properties?: Prisma.JsonNullableFilter<"activity_logs">;
    batch_uuid?: Prisma.StringNullableFilter<"activity_logs"> | string | null;
    ip_address?: Prisma.StringNullableFilter<"activity_logs"> | string | null;
    user_agent?: Prisma.StringNullableFilter<"activity_logs"> | string | null;
    created_at?: Prisma.DateTimeNullableFilter<"activity_logs"> | Date | string | null;
    updated_at?: Prisma.DateTimeNullableFilter<"activity_logs"> | Date | string | null;
    users?: Prisma.XOR<Prisma.UsersNullableScalarRelationFilter, Prisma.usersWhereInput> | null;
}, "id">;
export type activity_logsOrderByWithAggregationInput = {
    id?: Prisma.SortOrder;
    user_id?: Prisma.SortOrderInput | Prisma.SortOrder;
    log_name?: Prisma.SortOrderInput | Prisma.SortOrder;
    description?: Prisma.SortOrder;
    subject_type?: Prisma.SortOrderInput | Prisma.SortOrder;
    subject_id?: Prisma.SortOrderInput | Prisma.SortOrder;
    event?: Prisma.SortOrderInput | Prisma.SortOrder;
    causer_type?: Prisma.SortOrderInput | Prisma.SortOrder;
    causer_id?: Prisma.SortOrderInput | Prisma.SortOrder;
    properties?: Prisma.SortOrderInput | Prisma.SortOrder;
    batch_uuid?: Prisma.SortOrderInput | Prisma.SortOrder;
    ip_address?: Prisma.SortOrderInput | Prisma.SortOrder;
    user_agent?: Prisma.SortOrderInput | Prisma.SortOrder;
    created_at?: Prisma.SortOrderInput | Prisma.SortOrder;
    updated_at?: Prisma.SortOrderInput | Prisma.SortOrder;
    _count?: Prisma.activity_logsCountOrderByAggregateInput;
    _avg?: Prisma.activity_logsAvgOrderByAggregateInput;
    _max?: Prisma.activity_logsMaxOrderByAggregateInput;
    _min?: Prisma.activity_logsMinOrderByAggregateInput;
    _sum?: Prisma.activity_logsSumOrderByAggregateInput;
};
export type activity_logsScalarWhereWithAggregatesInput = {
    AND?: Prisma.activity_logsScalarWhereWithAggregatesInput | Prisma.activity_logsScalarWhereWithAggregatesInput[];
    OR?: Prisma.activity_logsScalarWhereWithAggregatesInput[];
    NOT?: Prisma.activity_logsScalarWhereWithAggregatesInput | Prisma.activity_logsScalarWhereWithAggregatesInput[];
    id?: Prisma.BigIntWithAggregatesFilter<"activity_logs"> | bigint | number;
    user_id?: Prisma.BigIntNullableWithAggregatesFilter<"activity_logs"> | bigint | number | null;
    log_name?: Prisma.StringNullableWithAggregatesFilter<"activity_logs"> | string | null;
    description?: Prisma.StringWithAggregatesFilter<"activity_logs"> | string;
    subject_type?: Prisma.StringNullableWithAggregatesFilter<"activity_logs"> | string | null;
    subject_id?: Prisma.BigIntNullableWithAggregatesFilter<"activity_logs"> | bigint | number | null;
    event?: Prisma.StringNullableWithAggregatesFilter<"activity_logs"> | string | null;
    causer_type?: Prisma.StringNullableWithAggregatesFilter<"activity_logs"> | string | null;
    causer_id?: Prisma.BigIntNullableWithAggregatesFilter<"activity_logs"> | bigint | number | null;
    properties?: Prisma.JsonNullableWithAggregatesFilter<"activity_logs">;
    batch_uuid?: Prisma.StringNullableWithAggregatesFilter<"activity_logs"> | string | null;
    ip_address?: Prisma.StringNullableWithAggregatesFilter<"activity_logs"> | string | null;
    user_agent?: Prisma.StringNullableWithAggregatesFilter<"activity_logs"> | string | null;
    created_at?: Prisma.DateTimeNullableWithAggregatesFilter<"activity_logs"> | Date | string | null;
    updated_at?: Prisma.DateTimeNullableWithAggregatesFilter<"activity_logs"> | Date | string | null;
};
export type activity_logsCreateInput = {
    id?: bigint | number;
    log_name?: string | null;
    description: string;
    subject_type?: string | null;
    subject_id?: bigint | number | null;
    event?: string | null;
    causer_type?: string | null;
    causer_id?: bigint | number | null;
    properties?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    batch_uuid?: string | null;
    ip_address?: string | null;
    user_agent?: string | null;
    created_at?: Date | string | null;
    updated_at?: Date | string | null;
    users?: Prisma.usersCreateNestedOneWithoutActivity_logsInput;
};
export type activity_logsUncheckedCreateInput = {
    id?: bigint | number;
    user_id?: bigint | number | null;
    log_name?: string | null;
    description: string;
    subject_type?: string | null;
    subject_id?: bigint | number | null;
    event?: string | null;
    causer_type?: string | null;
    causer_id?: bigint | number | null;
    properties?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    batch_uuid?: string | null;
    ip_address?: string | null;
    user_agent?: string | null;
    created_at?: Date | string | null;
    updated_at?: Date | string | null;
};
export type activity_logsUpdateInput = {
    id?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    log_name?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    description?: Prisma.StringFieldUpdateOperationsInput | string;
    subject_type?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    subject_id?: Prisma.NullableBigIntFieldUpdateOperationsInput | bigint | number | null;
    event?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    causer_type?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    causer_id?: Prisma.NullableBigIntFieldUpdateOperationsInput | bigint | number | null;
    properties?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    batch_uuid?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    ip_address?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    user_agent?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    created_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    updated_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    users?: Prisma.usersUpdateOneWithoutActivity_logsNestedInput;
};
export type activity_logsUncheckedUpdateInput = {
    id?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    user_id?: Prisma.NullableBigIntFieldUpdateOperationsInput | bigint | number | null;
    log_name?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    description?: Prisma.StringFieldUpdateOperationsInput | string;
    subject_type?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    subject_id?: Prisma.NullableBigIntFieldUpdateOperationsInput | bigint | number | null;
    event?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    causer_type?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    causer_id?: Prisma.NullableBigIntFieldUpdateOperationsInput | bigint | number | null;
    properties?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    batch_uuid?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    ip_address?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    user_agent?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    created_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    updated_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
};
export type activity_logsCreateManyInput = {
    id?: bigint | number;
    user_id?: bigint | number | null;
    log_name?: string | null;
    description: string;
    subject_type?: string | null;
    subject_id?: bigint | number | null;
    event?: string | null;
    causer_type?: string | null;
    causer_id?: bigint | number | null;
    properties?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    batch_uuid?: string | null;
    ip_address?: string | null;
    user_agent?: string | null;
    created_at?: Date | string | null;
    updated_at?: Date | string | null;
};
export type activity_logsUpdateManyMutationInput = {
    id?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    log_name?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    description?: Prisma.StringFieldUpdateOperationsInput | string;
    subject_type?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    subject_id?: Prisma.NullableBigIntFieldUpdateOperationsInput | bigint | number | null;
    event?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    causer_type?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    causer_id?: Prisma.NullableBigIntFieldUpdateOperationsInput | bigint | number | null;
    properties?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    batch_uuid?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    ip_address?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    user_agent?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    created_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    updated_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
};
export type activity_logsUncheckedUpdateManyInput = {
    id?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    user_id?: Prisma.NullableBigIntFieldUpdateOperationsInput | bigint | number | null;
    log_name?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    description?: Prisma.StringFieldUpdateOperationsInput | string;
    subject_type?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    subject_id?: Prisma.NullableBigIntFieldUpdateOperationsInput | bigint | number | null;
    event?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    causer_type?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    causer_id?: Prisma.NullableBigIntFieldUpdateOperationsInput | bigint | number | null;
    properties?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    batch_uuid?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    ip_address?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    user_agent?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    created_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    updated_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
};
export type activity_logsOrderByRelevanceInput = {
    fields: Prisma.activity_logsOrderByRelevanceFieldEnum | Prisma.activity_logsOrderByRelevanceFieldEnum[];
    sort: Prisma.SortOrder;
    search: string;
};
export type activity_logsCountOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    user_id?: Prisma.SortOrder;
    log_name?: Prisma.SortOrder;
    description?: Prisma.SortOrder;
    subject_type?: Prisma.SortOrder;
    subject_id?: Prisma.SortOrder;
    event?: Prisma.SortOrder;
    causer_type?: Prisma.SortOrder;
    causer_id?: Prisma.SortOrder;
    properties?: Prisma.SortOrder;
    batch_uuid?: Prisma.SortOrder;
    ip_address?: Prisma.SortOrder;
    user_agent?: Prisma.SortOrder;
    created_at?: Prisma.SortOrder;
    updated_at?: Prisma.SortOrder;
};
export type activity_logsAvgOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    user_id?: Prisma.SortOrder;
    subject_id?: Prisma.SortOrder;
    causer_id?: Prisma.SortOrder;
};
export type activity_logsMaxOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    user_id?: Prisma.SortOrder;
    log_name?: Prisma.SortOrder;
    description?: Prisma.SortOrder;
    subject_type?: Prisma.SortOrder;
    subject_id?: Prisma.SortOrder;
    event?: Prisma.SortOrder;
    causer_type?: Prisma.SortOrder;
    causer_id?: Prisma.SortOrder;
    batch_uuid?: Prisma.SortOrder;
    ip_address?: Prisma.SortOrder;
    user_agent?: Prisma.SortOrder;
    created_at?: Prisma.SortOrder;
    updated_at?: Prisma.SortOrder;
};
export type activity_logsMinOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    user_id?: Prisma.SortOrder;
    log_name?: Prisma.SortOrder;
    description?: Prisma.SortOrder;
    subject_type?: Prisma.SortOrder;
    subject_id?: Prisma.SortOrder;
    event?: Prisma.SortOrder;
    causer_type?: Prisma.SortOrder;
    causer_id?: Prisma.SortOrder;
    batch_uuid?: Prisma.SortOrder;
    ip_address?: Prisma.SortOrder;
    user_agent?: Prisma.SortOrder;
    created_at?: Prisma.SortOrder;
    updated_at?: Prisma.SortOrder;
};
export type activity_logsSumOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    user_id?: Prisma.SortOrder;
    subject_id?: Prisma.SortOrder;
    causer_id?: Prisma.SortOrder;
};
export type Activity_logsListRelationFilter = {
    every?: Prisma.activity_logsWhereInput;
    some?: Prisma.activity_logsWhereInput;
    none?: Prisma.activity_logsWhereInput;
};
export type activity_logsOrderByRelationAggregateInput = {
    _count?: Prisma.SortOrder;
};
export type BigIntFieldUpdateOperationsInput = {
    set?: bigint | number;
    increment?: bigint | number;
    decrement?: bigint | number;
    multiply?: bigint | number;
    divide?: bigint | number;
};
export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null;
};
export type StringFieldUpdateOperationsInput = {
    set?: string;
};
export type NullableBigIntFieldUpdateOperationsInput = {
    set?: bigint | number | null;
    increment?: bigint | number;
    decrement?: bigint | number;
    multiply?: bigint | number;
    divide?: bigint | number;
};
export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null;
};
export type activity_logsCreateNestedManyWithoutUsersInput = {
    create?: Prisma.XOR<Prisma.activity_logsCreateWithoutUsersInput, Prisma.activity_logsUncheckedCreateWithoutUsersInput> | Prisma.activity_logsCreateWithoutUsersInput[] | Prisma.activity_logsUncheckedCreateWithoutUsersInput[];
    connectOrCreate?: Prisma.activity_logsCreateOrConnectWithoutUsersInput | Prisma.activity_logsCreateOrConnectWithoutUsersInput[];
    createMany?: Prisma.activity_logsCreateManyUsersInputEnvelope;
    connect?: Prisma.activity_logsWhereUniqueInput | Prisma.activity_logsWhereUniqueInput[];
};
export type activity_logsUncheckedCreateNestedManyWithoutUsersInput = {
    create?: Prisma.XOR<Prisma.activity_logsCreateWithoutUsersInput, Prisma.activity_logsUncheckedCreateWithoutUsersInput> | Prisma.activity_logsCreateWithoutUsersInput[] | Prisma.activity_logsUncheckedCreateWithoutUsersInput[];
    connectOrCreate?: Prisma.activity_logsCreateOrConnectWithoutUsersInput | Prisma.activity_logsCreateOrConnectWithoutUsersInput[];
    createMany?: Prisma.activity_logsCreateManyUsersInputEnvelope;
    connect?: Prisma.activity_logsWhereUniqueInput | Prisma.activity_logsWhereUniqueInput[];
};
export type activity_logsUpdateManyWithoutUsersNestedInput = {
    create?: Prisma.XOR<Prisma.activity_logsCreateWithoutUsersInput, Prisma.activity_logsUncheckedCreateWithoutUsersInput> | Prisma.activity_logsCreateWithoutUsersInput[] | Prisma.activity_logsUncheckedCreateWithoutUsersInput[];
    connectOrCreate?: Prisma.activity_logsCreateOrConnectWithoutUsersInput | Prisma.activity_logsCreateOrConnectWithoutUsersInput[];
    upsert?: Prisma.activity_logsUpsertWithWhereUniqueWithoutUsersInput | Prisma.activity_logsUpsertWithWhereUniqueWithoutUsersInput[];
    createMany?: Prisma.activity_logsCreateManyUsersInputEnvelope;
    set?: Prisma.activity_logsWhereUniqueInput | Prisma.activity_logsWhereUniqueInput[];
    disconnect?: Prisma.activity_logsWhereUniqueInput | Prisma.activity_logsWhereUniqueInput[];
    delete?: Prisma.activity_logsWhereUniqueInput | Prisma.activity_logsWhereUniqueInput[];
    connect?: Prisma.activity_logsWhereUniqueInput | Prisma.activity_logsWhereUniqueInput[];
    update?: Prisma.activity_logsUpdateWithWhereUniqueWithoutUsersInput | Prisma.activity_logsUpdateWithWhereUniqueWithoutUsersInput[];
    updateMany?: Prisma.activity_logsUpdateManyWithWhereWithoutUsersInput | Prisma.activity_logsUpdateManyWithWhereWithoutUsersInput[];
    deleteMany?: Prisma.activity_logsScalarWhereInput | Prisma.activity_logsScalarWhereInput[];
};
export type activity_logsUncheckedUpdateManyWithoutUsersNestedInput = {
    create?: Prisma.XOR<Prisma.activity_logsCreateWithoutUsersInput, Prisma.activity_logsUncheckedCreateWithoutUsersInput> | Prisma.activity_logsCreateWithoutUsersInput[] | Prisma.activity_logsUncheckedCreateWithoutUsersInput[];
    connectOrCreate?: Prisma.activity_logsCreateOrConnectWithoutUsersInput | Prisma.activity_logsCreateOrConnectWithoutUsersInput[];
    upsert?: Prisma.activity_logsUpsertWithWhereUniqueWithoutUsersInput | Prisma.activity_logsUpsertWithWhereUniqueWithoutUsersInput[];
    createMany?: Prisma.activity_logsCreateManyUsersInputEnvelope;
    set?: Prisma.activity_logsWhereUniqueInput | Prisma.activity_logsWhereUniqueInput[];
    disconnect?: Prisma.activity_logsWhereUniqueInput | Prisma.activity_logsWhereUniqueInput[];
    delete?: Prisma.activity_logsWhereUniqueInput | Prisma.activity_logsWhereUniqueInput[];
    connect?: Prisma.activity_logsWhereUniqueInput | Prisma.activity_logsWhereUniqueInput[];
    update?: Prisma.activity_logsUpdateWithWhereUniqueWithoutUsersInput | Prisma.activity_logsUpdateWithWhereUniqueWithoutUsersInput[];
    updateMany?: Prisma.activity_logsUpdateManyWithWhereWithoutUsersInput | Prisma.activity_logsUpdateManyWithWhereWithoutUsersInput[];
    deleteMany?: Prisma.activity_logsScalarWhereInput | Prisma.activity_logsScalarWhereInput[];
};
export type activity_logsCreateWithoutUsersInput = {
    id?: bigint | number;
    log_name?: string | null;
    description: string;
    subject_type?: string | null;
    subject_id?: bigint | number | null;
    event?: string | null;
    causer_type?: string | null;
    causer_id?: bigint | number | null;
    properties?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    batch_uuid?: string | null;
    ip_address?: string | null;
    user_agent?: string | null;
    created_at?: Date | string | null;
    updated_at?: Date | string | null;
};
export type activity_logsUncheckedCreateWithoutUsersInput = {
    id?: bigint | number;
    log_name?: string | null;
    description: string;
    subject_type?: string | null;
    subject_id?: bigint | number | null;
    event?: string | null;
    causer_type?: string | null;
    causer_id?: bigint | number | null;
    properties?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    batch_uuid?: string | null;
    ip_address?: string | null;
    user_agent?: string | null;
    created_at?: Date | string | null;
    updated_at?: Date | string | null;
};
export type activity_logsCreateOrConnectWithoutUsersInput = {
    where: Prisma.activity_logsWhereUniqueInput;
    create: Prisma.XOR<Prisma.activity_logsCreateWithoutUsersInput, Prisma.activity_logsUncheckedCreateWithoutUsersInput>;
};
export type activity_logsCreateManyUsersInputEnvelope = {
    data: Prisma.activity_logsCreateManyUsersInput | Prisma.activity_logsCreateManyUsersInput[];
    skipDuplicates?: boolean;
};
export type activity_logsUpsertWithWhereUniqueWithoutUsersInput = {
    where: Prisma.activity_logsWhereUniqueInput;
    update: Prisma.XOR<Prisma.activity_logsUpdateWithoutUsersInput, Prisma.activity_logsUncheckedUpdateWithoutUsersInput>;
    create: Prisma.XOR<Prisma.activity_logsCreateWithoutUsersInput, Prisma.activity_logsUncheckedCreateWithoutUsersInput>;
};
export type activity_logsUpdateWithWhereUniqueWithoutUsersInput = {
    where: Prisma.activity_logsWhereUniqueInput;
    data: Prisma.XOR<Prisma.activity_logsUpdateWithoutUsersInput, Prisma.activity_logsUncheckedUpdateWithoutUsersInput>;
};
export type activity_logsUpdateManyWithWhereWithoutUsersInput = {
    where: Prisma.activity_logsScalarWhereInput;
    data: Prisma.XOR<Prisma.activity_logsUpdateManyMutationInput, Prisma.activity_logsUncheckedUpdateManyWithoutUsersInput>;
};
export type activity_logsScalarWhereInput = {
    AND?: Prisma.activity_logsScalarWhereInput | Prisma.activity_logsScalarWhereInput[];
    OR?: Prisma.activity_logsScalarWhereInput[];
    NOT?: Prisma.activity_logsScalarWhereInput | Prisma.activity_logsScalarWhereInput[];
    id?: Prisma.BigIntFilter<"activity_logs"> | bigint | number;
    user_id?: Prisma.BigIntNullableFilter<"activity_logs"> | bigint | number | null;
    log_name?: Prisma.StringNullableFilter<"activity_logs"> | string | null;
    description?: Prisma.StringFilter<"activity_logs"> | string;
    subject_type?: Prisma.StringNullableFilter<"activity_logs"> | string | null;
    subject_id?: Prisma.BigIntNullableFilter<"activity_logs"> | bigint | number | null;
    event?: Prisma.StringNullableFilter<"activity_logs"> | string | null;
    causer_type?: Prisma.StringNullableFilter<"activity_logs"> | string | null;
    causer_id?: Prisma.BigIntNullableFilter<"activity_logs"> | bigint | number | null;
    properties?: Prisma.JsonNullableFilter<"activity_logs">;
    batch_uuid?: Prisma.StringNullableFilter<"activity_logs"> | string | null;
    ip_address?: Prisma.StringNullableFilter<"activity_logs"> | string | null;
    user_agent?: Prisma.StringNullableFilter<"activity_logs"> | string | null;
    created_at?: Prisma.DateTimeNullableFilter<"activity_logs"> | Date | string | null;
    updated_at?: Prisma.DateTimeNullableFilter<"activity_logs"> | Date | string | null;
};
export type activity_logsCreateManyUsersInput = {
    id?: bigint | number;
    log_name?: string | null;
    description: string;
    subject_type?: string | null;
    subject_id?: bigint | number | null;
    event?: string | null;
    causer_type?: string | null;
    causer_id?: bigint | number | null;
    properties?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    batch_uuid?: string | null;
    ip_address?: string | null;
    user_agent?: string | null;
    created_at?: Date | string | null;
    updated_at?: Date | string | null;
};
export type activity_logsUpdateWithoutUsersInput = {
    id?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    log_name?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    description?: Prisma.StringFieldUpdateOperationsInput | string;
    subject_type?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    subject_id?: Prisma.NullableBigIntFieldUpdateOperationsInput | bigint | number | null;
    event?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    causer_type?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    causer_id?: Prisma.NullableBigIntFieldUpdateOperationsInput | bigint | number | null;
    properties?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    batch_uuid?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    ip_address?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    user_agent?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    created_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    updated_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
};
export type activity_logsUncheckedUpdateWithoutUsersInput = {
    id?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    log_name?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    description?: Prisma.StringFieldUpdateOperationsInput | string;
    subject_type?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    subject_id?: Prisma.NullableBigIntFieldUpdateOperationsInput | bigint | number | null;
    event?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    causer_type?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    causer_id?: Prisma.NullableBigIntFieldUpdateOperationsInput | bigint | number | null;
    properties?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    batch_uuid?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    ip_address?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    user_agent?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    created_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    updated_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
};
export type activity_logsUncheckedUpdateManyWithoutUsersInput = {
    id?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    log_name?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    description?: Prisma.StringFieldUpdateOperationsInput | string;
    subject_type?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    subject_id?: Prisma.NullableBigIntFieldUpdateOperationsInput | bigint | number | null;
    event?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    causer_type?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    causer_id?: Prisma.NullableBigIntFieldUpdateOperationsInput | bigint | number | null;
    properties?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    batch_uuid?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    ip_address?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    user_agent?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    created_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    updated_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
};
export type activity_logsSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    user_id?: boolean;
    log_name?: boolean;
    description?: boolean;
    subject_type?: boolean;
    subject_id?: boolean;
    event?: boolean;
    causer_type?: boolean;
    causer_id?: boolean;
    properties?: boolean;
    batch_uuid?: boolean;
    ip_address?: boolean;
    user_agent?: boolean;
    created_at?: boolean;
    updated_at?: boolean;
    users?: boolean | Prisma.activity_logs$usersArgs<ExtArgs>;
}, ExtArgs["result"]["activity_logs"]>;
export type activity_logsSelectScalar = {
    id?: boolean;
    user_id?: boolean;
    log_name?: boolean;
    description?: boolean;
    subject_type?: boolean;
    subject_id?: boolean;
    event?: boolean;
    causer_type?: boolean;
    causer_id?: boolean;
    properties?: boolean;
    batch_uuid?: boolean;
    ip_address?: boolean;
    user_agent?: boolean;
    created_at?: boolean;
    updated_at?: boolean;
};
export type activity_logsOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "user_id" | "log_name" | "description" | "subject_type" | "subject_id" | "event" | "causer_type" | "causer_id" | "properties" | "batch_uuid" | "ip_address" | "user_agent" | "created_at" | "updated_at", ExtArgs["result"]["activity_logs"]>;
export type activity_logsInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    users?: boolean | Prisma.activity_logs$usersArgs<ExtArgs>;
};
export type $activity_logsPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "activity_logs";
    objects: {
        users: Prisma.$usersPayload<ExtArgs> | null;
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id: bigint;
        user_id: bigint | null;
        log_name: string | null;
        description: string;
        subject_type: string | null;
        subject_id: bigint | null;
        event: string | null;
        causer_type: string | null;
        causer_id: bigint | null;
        properties: runtime.JsonValue | null;
        batch_uuid: string | null;
        ip_address: string | null;
        user_agent: string | null;
        created_at: Date | null;
        updated_at: Date | null;
    }, ExtArgs["result"]["activity_logs"]>;
    composites: {};
};
export type activity_logsGetPayload<S extends boolean | null | undefined | activity_logsDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$activity_logsPayload, S>;
export type activity_logsCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<activity_logsFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: Activity_logsCountAggregateInputType | true;
};
export interface activity_logsDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['activity_logs'];
        meta: {
            name: 'activity_logs';
        };
    };
    findUnique<T extends activity_logsFindUniqueArgs>(args: Prisma.SelectSubset<T, activity_logsFindUniqueArgs<ExtArgs>>): Prisma.Prisma__activity_logsClient<runtime.Types.Result.GetResult<Prisma.$activity_logsPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findUniqueOrThrow<T extends activity_logsFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, activity_logsFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__activity_logsClient<runtime.Types.Result.GetResult<Prisma.$activity_logsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findFirst<T extends activity_logsFindFirstArgs>(args?: Prisma.SelectSubset<T, activity_logsFindFirstArgs<ExtArgs>>): Prisma.Prisma__activity_logsClient<runtime.Types.Result.GetResult<Prisma.$activity_logsPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findFirstOrThrow<T extends activity_logsFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, activity_logsFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__activity_logsClient<runtime.Types.Result.GetResult<Prisma.$activity_logsPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findMany<T extends activity_logsFindManyArgs>(args?: Prisma.SelectSubset<T, activity_logsFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$activity_logsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    create<T extends activity_logsCreateArgs>(args: Prisma.SelectSubset<T, activity_logsCreateArgs<ExtArgs>>): Prisma.Prisma__activity_logsClient<runtime.Types.Result.GetResult<Prisma.$activity_logsPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    createMany<T extends activity_logsCreateManyArgs>(args?: Prisma.SelectSubset<T, activity_logsCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    delete<T extends activity_logsDeleteArgs>(args: Prisma.SelectSubset<T, activity_logsDeleteArgs<ExtArgs>>): Prisma.Prisma__activity_logsClient<runtime.Types.Result.GetResult<Prisma.$activity_logsPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    update<T extends activity_logsUpdateArgs>(args: Prisma.SelectSubset<T, activity_logsUpdateArgs<ExtArgs>>): Prisma.Prisma__activity_logsClient<runtime.Types.Result.GetResult<Prisma.$activity_logsPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    deleteMany<T extends activity_logsDeleteManyArgs>(args?: Prisma.SelectSubset<T, activity_logsDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateMany<T extends activity_logsUpdateManyArgs>(args: Prisma.SelectSubset<T, activity_logsUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    upsert<T extends activity_logsUpsertArgs>(args: Prisma.SelectSubset<T, activity_logsUpsertArgs<ExtArgs>>): Prisma.Prisma__activity_logsClient<runtime.Types.Result.GetResult<Prisma.$activity_logsPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    count<T extends activity_logsCountArgs>(args?: Prisma.Subset<T, activity_logsCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], Activity_logsCountAggregateOutputType> : number>;
    aggregate<T extends Activity_logsAggregateArgs>(args: Prisma.Subset<T, Activity_logsAggregateArgs>): Prisma.PrismaPromise<GetActivity_logsAggregateType<T>>;
    groupBy<T extends activity_logsGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: activity_logsGroupByArgs['orderBy'];
    } : {
        orderBy?: activity_logsGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, activity_logsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetActivity_logsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    readonly fields: activity_logsFieldRefs;
}
export interface Prisma__activity_logsClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    users<T extends Prisma.activity_logs$usersArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.activity_logs$usersArgs<ExtArgs>>): Prisma.Prisma__usersClient<runtime.Types.Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): runtime.Types.Utils.JsPromise<TResult1 | TResult2>;
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): runtime.Types.Utils.JsPromise<T | TResult>;
    finally(onfinally?: (() => void) | undefined | null): runtime.Types.Utils.JsPromise<T>;
}
export interface activity_logsFieldRefs {
    readonly id: Prisma.FieldRef<"activity_logs", 'BigInt'>;
    readonly user_id: Prisma.FieldRef<"activity_logs", 'BigInt'>;
    readonly log_name: Prisma.FieldRef<"activity_logs", 'String'>;
    readonly description: Prisma.FieldRef<"activity_logs", 'String'>;
    readonly subject_type: Prisma.FieldRef<"activity_logs", 'String'>;
    readonly subject_id: Prisma.FieldRef<"activity_logs", 'BigInt'>;
    readonly event: Prisma.FieldRef<"activity_logs", 'String'>;
    readonly causer_type: Prisma.FieldRef<"activity_logs", 'String'>;
    readonly causer_id: Prisma.FieldRef<"activity_logs", 'BigInt'>;
    readonly properties: Prisma.FieldRef<"activity_logs", 'Json'>;
    readonly batch_uuid: Prisma.FieldRef<"activity_logs", 'String'>;
    readonly ip_address: Prisma.FieldRef<"activity_logs", 'String'>;
    readonly user_agent: Prisma.FieldRef<"activity_logs", 'String'>;
    readonly created_at: Prisma.FieldRef<"activity_logs", 'DateTime'>;
    readonly updated_at: Prisma.FieldRef<"activity_logs", 'DateTime'>;
}
export type activity_logsFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.activity_logsSelect<ExtArgs> | null;
    omit?: Prisma.activity_logsOmit<ExtArgs> | null;
    include?: Prisma.activity_logsInclude<ExtArgs> | null;
    where: Prisma.activity_logsWhereUniqueInput;
};
export type activity_logsFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.activity_logsSelect<ExtArgs> | null;
    omit?: Prisma.activity_logsOmit<ExtArgs> | null;
    include?: Prisma.activity_logsInclude<ExtArgs> | null;
    where: Prisma.activity_logsWhereUniqueInput;
};
export type activity_logsFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.activity_logsSelect<ExtArgs> | null;
    omit?: Prisma.activity_logsOmit<ExtArgs> | null;
    include?: Prisma.activity_logsInclude<ExtArgs> | null;
    where?: Prisma.activity_logsWhereInput;
    orderBy?: Prisma.activity_logsOrderByWithRelationInput | Prisma.activity_logsOrderByWithRelationInput[];
    cursor?: Prisma.activity_logsWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.Activity_logsScalarFieldEnum | Prisma.Activity_logsScalarFieldEnum[];
};
export type activity_logsFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.activity_logsSelect<ExtArgs> | null;
    omit?: Prisma.activity_logsOmit<ExtArgs> | null;
    include?: Prisma.activity_logsInclude<ExtArgs> | null;
    where?: Prisma.activity_logsWhereInput;
    orderBy?: Prisma.activity_logsOrderByWithRelationInput | Prisma.activity_logsOrderByWithRelationInput[];
    cursor?: Prisma.activity_logsWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.Activity_logsScalarFieldEnum | Prisma.Activity_logsScalarFieldEnum[];
};
export type activity_logsFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.activity_logsSelect<ExtArgs> | null;
    omit?: Prisma.activity_logsOmit<ExtArgs> | null;
    include?: Prisma.activity_logsInclude<ExtArgs> | null;
    where?: Prisma.activity_logsWhereInput;
    orderBy?: Prisma.activity_logsOrderByWithRelationInput | Prisma.activity_logsOrderByWithRelationInput[];
    cursor?: Prisma.activity_logsWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.Activity_logsScalarFieldEnum | Prisma.Activity_logsScalarFieldEnum[];
};
export type activity_logsCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.activity_logsSelect<ExtArgs> | null;
    omit?: Prisma.activity_logsOmit<ExtArgs> | null;
    include?: Prisma.activity_logsInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.activity_logsCreateInput, Prisma.activity_logsUncheckedCreateInput>;
};
export type activity_logsCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.activity_logsCreateManyInput | Prisma.activity_logsCreateManyInput[];
    skipDuplicates?: boolean;
};
export type activity_logsUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.activity_logsSelect<ExtArgs> | null;
    omit?: Prisma.activity_logsOmit<ExtArgs> | null;
    include?: Prisma.activity_logsInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.activity_logsUpdateInput, Prisma.activity_logsUncheckedUpdateInput>;
    where: Prisma.activity_logsWhereUniqueInput;
};
export type activity_logsUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.XOR<Prisma.activity_logsUpdateManyMutationInput, Prisma.activity_logsUncheckedUpdateManyInput>;
    where?: Prisma.activity_logsWhereInput;
    limit?: number;
};
export type activity_logsUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.activity_logsSelect<ExtArgs> | null;
    omit?: Prisma.activity_logsOmit<ExtArgs> | null;
    include?: Prisma.activity_logsInclude<ExtArgs> | null;
    where: Prisma.activity_logsWhereUniqueInput;
    create: Prisma.XOR<Prisma.activity_logsCreateInput, Prisma.activity_logsUncheckedCreateInput>;
    update: Prisma.XOR<Prisma.activity_logsUpdateInput, Prisma.activity_logsUncheckedUpdateInput>;
};
export type activity_logsDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.activity_logsSelect<ExtArgs> | null;
    omit?: Prisma.activity_logsOmit<ExtArgs> | null;
    include?: Prisma.activity_logsInclude<ExtArgs> | null;
    where: Prisma.activity_logsWhereUniqueInput;
};
export type activity_logsDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.activity_logsWhereInput;
    limit?: number;
};
export type activity_logs$usersArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.usersSelect<ExtArgs> | null;
    omit?: Prisma.usersOmit<ExtArgs> | null;
    include?: Prisma.usersInclude<ExtArgs> | null;
    where?: Prisma.usersWhereInput;
};
export type activity_logsDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.activity_logsSelect<ExtArgs> | null;
    omit?: Prisma.activity_logsOmit<ExtArgs> | null;
    include?: Prisma.activity_logsInclude<ExtArgs> | null;
};
export {};
