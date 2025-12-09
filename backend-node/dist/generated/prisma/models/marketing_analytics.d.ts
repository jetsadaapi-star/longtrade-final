import type * as runtime from "@prisma/client/runtime/client";
import type * as $Enums from "../enums.js";
import type * as Prisma from "../internal/prismaNamespace.js";
export type marketing_analyticsModel = runtime.Types.Result.DefaultSelection<Prisma.$marketing_analyticsPayload>;
export type AggregateMarketing_analytics = {
    _count: Marketing_analyticsCountAggregateOutputType | null;
    _avg: Marketing_analyticsAvgAggregateOutputType | null;
    _sum: Marketing_analyticsSumAggregateOutputType | null;
    _min: Marketing_analyticsMinAggregateOutputType | null;
    _max: Marketing_analyticsMaxAggregateOutputType | null;
};
export type Marketing_analyticsAvgAggregateOutputType = {
    id: number | null;
    campaign_id: number | null;
    user_id: number | null;
};
export type Marketing_analyticsSumAggregateOutputType = {
    id: bigint | null;
    campaign_id: bigint | null;
    user_id: bigint | null;
};
export type Marketing_analyticsMinAggregateOutputType = {
    id: bigint | null;
    campaign_type: $Enums.marketing_analytics_campaign_type | null;
    campaign_id: bigint | null;
    user_id: bigint | null;
    session_id: string | null;
    event_type: $Enums.marketing_analytics_event_type | null;
    page_url: string | null;
    referrer: string | null;
    device_type: string | null;
    browser: string | null;
    created_at: Date | null;
};
export type Marketing_analyticsMaxAggregateOutputType = {
    id: bigint | null;
    campaign_type: $Enums.marketing_analytics_campaign_type | null;
    campaign_id: bigint | null;
    user_id: bigint | null;
    session_id: string | null;
    event_type: $Enums.marketing_analytics_event_type | null;
    page_url: string | null;
    referrer: string | null;
    device_type: string | null;
    browser: string | null;
    created_at: Date | null;
};
export type Marketing_analyticsCountAggregateOutputType = {
    id: number;
    campaign_type: number;
    campaign_id: number;
    user_id: number;
    session_id: number;
    event_type: number;
    event_data: number;
    page_url: number;
    referrer: number;
    device_type: number;
    browser: number;
    created_at: number;
    _all: number;
};
export type Marketing_analyticsAvgAggregateInputType = {
    id?: true;
    campaign_id?: true;
    user_id?: true;
};
export type Marketing_analyticsSumAggregateInputType = {
    id?: true;
    campaign_id?: true;
    user_id?: true;
};
export type Marketing_analyticsMinAggregateInputType = {
    id?: true;
    campaign_type?: true;
    campaign_id?: true;
    user_id?: true;
    session_id?: true;
    event_type?: true;
    page_url?: true;
    referrer?: true;
    device_type?: true;
    browser?: true;
    created_at?: true;
};
export type Marketing_analyticsMaxAggregateInputType = {
    id?: true;
    campaign_type?: true;
    campaign_id?: true;
    user_id?: true;
    session_id?: true;
    event_type?: true;
    page_url?: true;
    referrer?: true;
    device_type?: true;
    browser?: true;
    created_at?: true;
};
export type Marketing_analyticsCountAggregateInputType = {
    id?: true;
    campaign_type?: true;
    campaign_id?: true;
    user_id?: true;
    session_id?: true;
    event_type?: true;
    event_data?: true;
    page_url?: true;
    referrer?: true;
    device_type?: true;
    browser?: true;
    created_at?: true;
    _all?: true;
};
export type Marketing_analyticsAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.marketing_analyticsWhereInput;
    orderBy?: Prisma.marketing_analyticsOrderByWithRelationInput | Prisma.marketing_analyticsOrderByWithRelationInput[];
    cursor?: Prisma.marketing_analyticsWhereUniqueInput;
    take?: number;
    skip?: number;
    _count?: true | Marketing_analyticsCountAggregateInputType;
    _avg?: Marketing_analyticsAvgAggregateInputType;
    _sum?: Marketing_analyticsSumAggregateInputType;
    _min?: Marketing_analyticsMinAggregateInputType;
    _max?: Marketing_analyticsMaxAggregateInputType;
};
export type GetMarketing_analyticsAggregateType<T extends Marketing_analyticsAggregateArgs> = {
    [P in keyof T & keyof AggregateMarketing_analytics]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateMarketing_analytics[P]> : Prisma.GetScalarType<T[P], AggregateMarketing_analytics[P]>;
};
export type marketing_analyticsGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.marketing_analyticsWhereInput;
    orderBy?: Prisma.marketing_analyticsOrderByWithAggregationInput | Prisma.marketing_analyticsOrderByWithAggregationInput[];
    by: Prisma.Marketing_analyticsScalarFieldEnum[] | Prisma.Marketing_analyticsScalarFieldEnum;
    having?: Prisma.marketing_analyticsScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: Marketing_analyticsCountAggregateInputType | true;
    _avg?: Marketing_analyticsAvgAggregateInputType;
    _sum?: Marketing_analyticsSumAggregateInputType;
    _min?: Marketing_analyticsMinAggregateInputType;
    _max?: Marketing_analyticsMaxAggregateInputType;
};
export type Marketing_analyticsGroupByOutputType = {
    id: bigint;
    campaign_type: $Enums.marketing_analytics_campaign_type;
    campaign_id: bigint;
    user_id: bigint | null;
    session_id: string | null;
    event_type: $Enums.marketing_analytics_event_type;
    event_data: runtime.JsonValue | null;
    page_url: string | null;
    referrer: string | null;
    device_type: string | null;
    browser: string | null;
    created_at: Date;
    _count: Marketing_analyticsCountAggregateOutputType | null;
    _avg: Marketing_analyticsAvgAggregateOutputType | null;
    _sum: Marketing_analyticsSumAggregateOutputType | null;
    _min: Marketing_analyticsMinAggregateOutputType | null;
    _max: Marketing_analyticsMaxAggregateOutputType | null;
};
type GetMarketing_analyticsGroupByPayload<T extends marketing_analyticsGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<Marketing_analyticsGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof Marketing_analyticsGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], Marketing_analyticsGroupByOutputType[P]> : Prisma.GetScalarType<T[P], Marketing_analyticsGroupByOutputType[P]>;
}>>;
export type marketing_analyticsWhereInput = {
    AND?: Prisma.marketing_analyticsWhereInput | Prisma.marketing_analyticsWhereInput[];
    OR?: Prisma.marketing_analyticsWhereInput[];
    NOT?: Prisma.marketing_analyticsWhereInput | Prisma.marketing_analyticsWhereInput[];
    id?: Prisma.BigIntFilter<"marketing_analytics"> | bigint | number;
    campaign_type?: Prisma.Enummarketing_analytics_campaign_typeFilter<"marketing_analytics"> | $Enums.marketing_analytics_campaign_type;
    campaign_id?: Prisma.BigIntFilter<"marketing_analytics"> | bigint | number;
    user_id?: Prisma.BigIntNullableFilter<"marketing_analytics"> | bigint | number | null;
    session_id?: Prisma.StringNullableFilter<"marketing_analytics"> | string | null;
    event_type?: Prisma.Enummarketing_analytics_event_typeFilter<"marketing_analytics"> | $Enums.marketing_analytics_event_type;
    event_data?: Prisma.JsonNullableFilter<"marketing_analytics">;
    page_url?: Prisma.StringNullableFilter<"marketing_analytics"> | string | null;
    referrer?: Prisma.StringNullableFilter<"marketing_analytics"> | string | null;
    device_type?: Prisma.StringNullableFilter<"marketing_analytics"> | string | null;
    browser?: Prisma.StringNullableFilter<"marketing_analytics"> | string | null;
    created_at?: Prisma.DateTimeFilter<"marketing_analytics"> | Date | string;
    users?: Prisma.XOR<Prisma.UsersNullableScalarRelationFilter, Prisma.usersWhereInput> | null;
};
export type marketing_analyticsOrderByWithRelationInput = {
    id?: Prisma.SortOrder;
    campaign_type?: Prisma.SortOrder;
    campaign_id?: Prisma.SortOrder;
    user_id?: Prisma.SortOrderInput | Prisma.SortOrder;
    session_id?: Prisma.SortOrderInput | Prisma.SortOrder;
    event_type?: Prisma.SortOrder;
    event_data?: Prisma.SortOrderInput | Prisma.SortOrder;
    page_url?: Prisma.SortOrderInput | Prisma.SortOrder;
    referrer?: Prisma.SortOrderInput | Prisma.SortOrder;
    device_type?: Prisma.SortOrderInput | Prisma.SortOrder;
    browser?: Prisma.SortOrderInput | Prisma.SortOrder;
    created_at?: Prisma.SortOrder;
    users?: Prisma.usersOrderByWithRelationInput;
    _relevance?: Prisma.marketing_analyticsOrderByRelevanceInput;
};
export type marketing_analyticsWhereUniqueInput = Prisma.AtLeast<{
    id?: bigint | number;
    AND?: Prisma.marketing_analyticsWhereInput | Prisma.marketing_analyticsWhereInput[];
    OR?: Prisma.marketing_analyticsWhereInput[];
    NOT?: Prisma.marketing_analyticsWhereInput | Prisma.marketing_analyticsWhereInput[];
    campaign_type?: Prisma.Enummarketing_analytics_campaign_typeFilter<"marketing_analytics"> | $Enums.marketing_analytics_campaign_type;
    campaign_id?: Prisma.BigIntFilter<"marketing_analytics"> | bigint | number;
    user_id?: Prisma.BigIntNullableFilter<"marketing_analytics"> | bigint | number | null;
    session_id?: Prisma.StringNullableFilter<"marketing_analytics"> | string | null;
    event_type?: Prisma.Enummarketing_analytics_event_typeFilter<"marketing_analytics"> | $Enums.marketing_analytics_event_type;
    event_data?: Prisma.JsonNullableFilter<"marketing_analytics">;
    page_url?: Prisma.StringNullableFilter<"marketing_analytics"> | string | null;
    referrer?: Prisma.StringNullableFilter<"marketing_analytics"> | string | null;
    device_type?: Prisma.StringNullableFilter<"marketing_analytics"> | string | null;
    browser?: Prisma.StringNullableFilter<"marketing_analytics"> | string | null;
    created_at?: Prisma.DateTimeFilter<"marketing_analytics"> | Date | string;
    users?: Prisma.XOR<Prisma.UsersNullableScalarRelationFilter, Prisma.usersWhereInput> | null;
}, "id">;
export type marketing_analyticsOrderByWithAggregationInput = {
    id?: Prisma.SortOrder;
    campaign_type?: Prisma.SortOrder;
    campaign_id?: Prisma.SortOrder;
    user_id?: Prisma.SortOrderInput | Prisma.SortOrder;
    session_id?: Prisma.SortOrderInput | Prisma.SortOrder;
    event_type?: Prisma.SortOrder;
    event_data?: Prisma.SortOrderInput | Prisma.SortOrder;
    page_url?: Prisma.SortOrderInput | Prisma.SortOrder;
    referrer?: Prisma.SortOrderInput | Prisma.SortOrder;
    device_type?: Prisma.SortOrderInput | Prisma.SortOrder;
    browser?: Prisma.SortOrderInput | Prisma.SortOrder;
    created_at?: Prisma.SortOrder;
    _count?: Prisma.marketing_analyticsCountOrderByAggregateInput;
    _avg?: Prisma.marketing_analyticsAvgOrderByAggregateInput;
    _max?: Prisma.marketing_analyticsMaxOrderByAggregateInput;
    _min?: Prisma.marketing_analyticsMinOrderByAggregateInput;
    _sum?: Prisma.marketing_analyticsSumOrderByAggregateInput;
};
export type marketing_analyticsScalarWhereWithAggregatesInput = {
    AND?: Prisma.marketing_analyticsScalarWhereWithAggregatesInput | Prisma.marketing_analyticsScalarWhereWithAggregatesInput[];
    OR?: Prisma.marketing_analyticsScalarWhereWithAggregatesInput[];
    NOT?: Prisma.marketing_analyticsScalarWhereWithAggregatesInput | Prisma.marketing_analyticsScalarWhereWithAggregatesInput[];
    id?: Prisma.BigIntWithAggregatesFilter<"marketing_analytics"> | bigint | number;
    campaign_type?: Prisma.Enummarketing_analytics_campaign_typeWithAggregatesFilter<"marketing_analytics"> | $Enums.marketing_analytics_campaign_type;
    campaign_id?: Prisma.BigIntWithAggregatesFilter<"marketing_analytics"> | bigint | number;
    user_id?: Prisma.BigIntNullableWithAggregatesFilter<"marketing_analytics"> | bigint | number | null;
    session_id?: Prisma.StringNullableWithAggregatesFilter<"marketing_analytics"> | string | null;
    event_type?: Prisma.Enummarketing_analytics_event_typeWithAggregatesFilter<"marketing_analytics"> | $Enums.marketing_analytics_event_type;
    event_data?: Prisma.JsonNullableWithAggregatesFilter<"marketing_analytics">;
    page_url?: Prisma.StringNullableWithAggregatesFilter<"marketing_analytics"> | string | null;
    referrer?: Prisma.StringNullableWithAggregatesFilter<"marketing_analytics"> | string | null;
    device_type?: Prisma.StringNullableWithAggregatesFilter<"marketing_analytics"> | string | null;
    browser?: Prisma.StringNullableWithAggregatesFilter<"marketing_analytics"> | string | null;
    created_at?: Prisma.DateTimeWithAggregatesFilter<"marketing_analytics"> | Date | string;
};
export type marketing_analyticsCreateInput = {
    id?: bigint | number;
    campaign_type: $Enums.marketing_analytics_campaign_type;
    campaign_id: bigint | number;
    session_id?: string | null;
    event_type: $Enums.marketing_analytics_event_type;
    event_data?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    page_url?: string | null;
    referrer?: string | null;
    device_type?: string | null;
    browser?: string | null;
    created_at?: Date | string;
    users?: Prisma.usersCreateNestedOneWithoutMarketing_analyticsInput;
};
export type marketing_analyticsUncheckedCreateInput = {
    id?: bigint | number;
    campaign_type: $Enums.marketing_analytics_campaign_type;
    campaign_id: bigint | number;
    user_id?: bigint | number | null;
    session_id?: string | null;
    event_type: $Enums.marketing_analytics_event_type;
    event_data?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    page_url?: string | null;
    referrer?: string | null;
    device_type?: string | null;
    browser?: string | null;
    created_at?: Date | string;
};
export type marketing_analyticsUpdateInput = {
    id?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    campaign_type?: Prisma.Enummarketing_analytics_campaign_typeFieldUpdateOperationsInput | $Enums.marketing_analytics_campaign_type;
    campaign_id?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    session_id?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    event_type?: Prisma.Enummarketing_analytics_event_typeFieldUpdateOperationsInput | $Enums.marketing_analytics_event_type;
    event_data?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    page_url?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    referrer?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    device_type?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    browser?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    users?: Prisma.usersUpdateOneWithoutMarketing_analyticsNestedInput;
};
export type marketing_analyticsUncheckedUpdateInput = {
    id?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    campaign_type?: Prisma.Enummarketing_analytics_campaign_typeFieldUpdateOperationsInput | $Enums.marketing_analytics_campaign_type;
    campaign_id?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    user_id?: Prisma.NullableBigIntFieldUpdateOperationsInput | bigint | number | null;
    session_id?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    event_type?: Prisma.Enummarketing_analytics_event_typeFieldUpdateOperationsInput | $Enums.marketing_analytics_event_type;
    event_data?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    page_url?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    referrer?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    device_type?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    browser?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type marketing_analyticsCreateManyInput = {
    id?: bigint | number;
    campaign_type: $Enums.marketing_analytics_campaign_type;
    campaign_id: bigint | number;
    user_id?: bigint | number | null;
    session_id?: string | null;
    event_type: $Enums.marketing_analytics_event_type;
    event_data?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    page_url?: string | null;
    referrer?: string | null;
    device_type?: string | null;
    browser?: string | null;
    created_at?: Date | string;
};
export type marketing_analyticsUpdateManyMutationInput = {
    id?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    campaign_type?: Prisma.Enummarketing_analytics_campaign_typeFieldUpdateOperationsInput | $Enums.marketing_analytics_campaign_type;
    campaign_id?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    session_id?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    event_type?: Prisma.Enummarketing_analytics_event_typeFieldUpdateOperationsInput | $Enums.marketing_analytics_event_type;
    event_data?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    page_url?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    referrer?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    device_type?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    browser?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type marketing_analyticsUncheckedUpdateManyInput = {
    id?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    campaign_type?: Prisma.Enummarketing_analytics_campaign_typeFieldUpdateOperationsInput | $Enums.marketing_analytics_campaign_type;
    campaign_id?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    user_id?: Prisma.NullableBigIntFieldUpdateOperationsInput | bigint | number | null;
    session_id?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    event_type?: Prisma.Enummarketing_analytics_event_typeFieldUpdateOperationsInput | $Enums.marketing_analytics_event_type;
    event_data?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    page_url?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    referrer?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    device_type?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    browser?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type marketing_analyticsOrderByRelevanceInput = {
    fields: Prisma.marketing_analyticsOrderByRelevanceFieldEnum | Prisma.marketing_analyticsOrderByRelevanceFieldEnum[];
    sort: Prisma.SortOrder;
    search: string;
};
export type marketing_analyticsCountOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    campaign_type?: Prisma.SortOrder;
    campaign_id?: Prisma.SortOrder;
    user_id?: Prisma.SortOrder;
    session_id?: Prisma.SortOrder;
    event_type?: Prisma.SortOrder;
    event_data?: Prisma.SortOrder;
    page_url?: Prisma.SortOrder;
    referrer?: Prisma.SortOrder;
    device_type?: Prisma.SortOrder;
    browser?: Prisma.SortOrder;
    created_at?: Prisma.SortOrder;
};
export type marketing_analyticsAvgOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    campaign_id?: Prisma.SortOrder;
    user_id?: Prisma.SortOrder;
};
export type marketing_analyticsMaxOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    campaign_type?: Prisma.SortOrder;
    campaign_id?: Prisma.SortOrder;
    user_id?: Prisma.SortOrder;
    session_id?: Prisma.SortOrder;
    event_type?: Prisma.SortOrder;
    page_url?: Prisma.SortOrder;
    referrer?: Prisma.SortOrder;
    device_type?: Prisma.SortOrder;
    browser?: Prisma.SortOrder;
    created_at?: Prisma.SortOrder;
};
export type marketing_analyticsMinOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    campaign_type?: Prisma.SortOrder;
    campaign_id?: Prisma.SortOrder;
    user_id?: Prisma.SortOrder;
    session_id?: Prisma.SortOrder;
    event_type?: Prisma.SortOrder;
    page_url?: Prisma.SortOrder;
    referrer?: Prisma.SortOrder;
    device_type?: Prisma.SortOrder;
    browser?: Prisma.SortOrder;
    created_at?: Prisma.SortOrder;
};
export type marketing_analyticsSumOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    campaign_id?: Prisma.SortOrder;
    user_id?: Prisma.SortOrder;
};
export type Marketing_analyticsListRelationFilter = {
    every?: Prisma.marketing_analyticsWhereInput;
    some?: Prisma.marketing_analyticsWhereInput;
    none?: Prisma.marketing_analyticsWhereInput;
};
export type marketing_analyticsOrderByRelationAggregateInput = {
    _count?: Prisma.SortOrder;
};
export type Enummarketing_analytics_campaign_typeFieldUpdateOperationsInput = {
    set?: $Enums.marketing_analytics_campaign_type;
};
export type Enummarketing_analytics_event_typeFieldUpdateOperationsInput = {
    set?: $Enums.marketing_analytics_event_type;
};
export type marketing_analyticsCreateNestedManyWithoutUsersInput = {
    create?: Prisma.XOR<Prisma.marketing_analyticsCreateWithoutUsersInput, Prisma.marketing_analyticsUncheckedCreateWithoutUsersInput> | Prisma.marketing_analyticsCreateWithoutUsersInput[] | Prisma.marketing_analyticsUncheckedCreateWithoutUsersInput[];
    connectOrCreate?: Prisma.marketing_analyticsCreateOrConnectWithoutUsersInput | Prisma.marketing_analyticsCreateOrConnectWithoutUsersInput[];
    createMany?: Prisma.marketing_analyticsCreateManyUsersInputEnvelope;
    connect?: Prisma.marketing_analyticsWhereUniqueInput | Prisma.marketing_analyticsWhereUniqueInput[];
};
export type marketing_analyticsUncheckedCreateNestedManyWithoutUsersInput = {
    create?: Prisma.XOR<Prisma.marketing_analyticsCreateWithoutUsersInput, Prisma.marketing_analyticsUncheckedCreateWithoutUsersInput> | Prisma.marketing_analyticsCreateWithoutUsersInput[] | Prisma.marketing_analyticsUncheckedCreateWithoutUsersInput[];
    connectOrCreate?: Prisma.marketing_analyticsCreateOrConnectWithoutUsersInput | Prisma.marketing_analyticsCreateOrConnectWithoutUsersInput[];
    createMany?: Prisma.marketing_analyticsCreateManyUsersInputEnvelope;
    connect?: Prisma.marketing_analyticsWhereUniqueInput | Prisma.marketing_analyticsWhereUniqueInput[];
};
export type marketing_analyticsUpdateManyWithoutUsersNestedInput = {
    create?: Prisma.XOR<Prisma.marketing_analyticsCreateWithoutUsersInput, Prisma.marketing_analyticsUncheckedCreateWithoutUsersInput> | Prisma.marketing_analyticsCreateWithoutUsersInput[] | Prisma.marketing_analyticsUncheckedCreateWithoutUsersInput[];
    connectOrCreate?: Prisma.marketing_analyticsCreateOrConnectWithoutUsersInput | Prisma.marketing_analyticsCreateOrConnectWithoutUsersInput[];
    upsert?: Prisma.marketing_analyticsUpsertWithWhereUniqueWithoutUsersInput | Prisma.marketing_analyticsUpsertWithWhereUniqueWithoutUsersInput[];
    createMany?: Prisma.marketing_analyticsCreateManyUsersInputEnvelope;
    set?: Prisma.marketing_analyticsWhereUniqueInput | Prisma.marketing_analyticsWhereUniqueInput[];
    disconnect?: Prisma.marketing_analyticsWhereUniqueInput | Prisma.marketing_analyticsWhereUniqueInput[];
    delete?: Prisma.marketing_analyticsWhereUniqueInput | Prisma.marketing_analyticsWhereUniqueInput[];
    connect?: Prisma.marketing_analyticsWhereUniqueInput | Prisma.marketing_analyticsWhereUniqueInput[];
    update?: Prisma.marketing_analyticsUpdateWithWhereUniqueWithoutUsersInput | Prisma.marketing_analyticsUpdateWithWhereUniqueWithoutUsersInput[];
    updateMany?: Prisma.marketing_analyticsUpdateManyWithWhereWithoutUsersInput | Prisma.marketing_analyticsUpdateManyWithWhereWithoutUsersInput[];
    deleteMany?: Prisma.marketing_analyticsScalarWhereInput | Prisma.marketing_analyticsScalarWhereInput[];
};
export type marketing_analyticsUncheckedUpdateManyWithoutUsersNestedInput = {
    create?: Prisma.XOR<Prisma.marketing_analyticsCreateWithoutUsersInput, Prisma.marketing_analyticsUncheckedCreateWithoutUsersInput> | Prisma.marketing_analyticsCreateWithoutUsersInput[] | Prisma.marketing_analyticsUncheckedCreateWithoutUsersInput[];
    connectOrCreate?: Prisma.marketing_analyticsCreateOrConnectWithoutUsersInput | Prisma.marketing_analyticsCreateOrConnectWithoutUsersInput[];
    upsert?: Prisma.marketing_analyticsUpsertWithWhereUniqueWithoutUsersInput | Prisma.marketing_analyticsUpsertWithWhereUniqueWithoutUsersInput[];
    createMany?: Prisma.marketing_analyticsCreateManyUsersInputEnvelope;
    set?: Prisma.marketing_analyticsWhereUniqueInput | Prisma.marketing_analyticsWhereUniqueInput[];
    disconnect?: Prisma.marketing_analyticsWhereUniqueInput | Prisma.marketing_analyticsWhereUniqueInput[];
    delete?: Prisma.marketing_analyticsWhereUniqueInput | Prisma.marketing_analyticsWhereUniqueInput[];
    connect?: Prisma.marketing_analyticsWhereUniqueInput | Prisma.marketing_analyticsWhereUniqueInput[];
    update?: Prisma.marketing_analyticsUpdateWithWhereUniqueWithoutUsersInput | Prisma.marketing_analyticsUpdateWithWhereUniqueWithoutUsersInput[];
    updateMany?: Prisma.marketing_analyticsUpdateManyWithWhereWithoutUsersInput | Prisma.marketing_analyticsUpdateManyWithWhereWithoutUsersInput[];
    deleteMany?: Prisma.marketing_analyticsScalarWhereInput | Prisma.marketing_analyticsScalarWhereInput[];
};
export type marketing_analyticsCreateWithoutUsersInput = {
    id?: bigint | number;
    campaign_type: $Enums.marketing_analytics_campaign_type;
    campaign_id: bigint | number;
    session_id?: string | null;
    event_type: $Enums.marketing_analytics_event_type;
    event_data?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    page_url?: string | null;
    referrer?: string | null;
    device_type?: string | null;
    browser?: string | null;
    created_at?: Date | string;
};
export type marketing_analyticsUncheckedCreateWithoutUsersInput = {
    id?: bigint | number;
    campaign_type: $Enums.marketing_analytics_campaign_type;
    campaign_id: bigint | number;
    session_id?: string | null;
    event_type: $Enums.marketing_analytics_event_type;
    event_data?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    page_url?: string | null;
    referrer?: string | null;
    device_type?: string | null;
    browser?: string | null;
    created_at?: Date | string;
};
export type marketing_analyticsCreateOrConnectWithoutUsersInput = {
    where: Prisma.marketing_analyticsWhereUniqueInput;
    create: Prisma.XOR<Prisma.marketing_analyticsCreateWithoutUsersInput, Prisma.marketing_analyticsUncheckedCreateWithoutUsersInput>;
};
export type marketing_analyticsCreateManyUsersInputEnvelope = {
    data: Prisma.marketing_analyticsCreateManyUsersInput | Prisma.marketing_analyticsCreateManyUsersInput[];
    skipDuplicates?: boolean;
};
export type marketing_analyticsUpsertWithWhereUniqueWithoutUsersInput = {
    where: Prisma.marketing_analyticsWhereUniqueInput;
    update: Prisma.XOR<Prisma.marketing_analyticsUpdateWithoutUsersInput, Prisma.marketing_analyticsUncheckedUpdateWithoutUsersInput>;
    create: Prisma.XOR<Prisma.marketing_analyticsCreateWithoutUsersInput, Prisma.marketing_analyticsUncheckedCreateWithoutUsersInput>;
};
export type marketing_analyticsUpdateWithWhereUniqueWithoutUsersInput = {
    where: Prisma.marketing_analyticsWhereUniqueInput;
    data: Prisma.XOR<Prisma.marketing_analyticsUpdateWithoutUsersInput, Prisma.marketing_analyticsUncheckedUpdateWithoutUsersInput>;
};
export type marketing_analyticsUpdateManyWithWhereWithoutUsersInput = {
    where: Prisma.marketing_analyticsScalarWhereInput;
    data: Prisma.XOR<Prisma.marketing_analyticsUpdateManyMutationInput, Prisma.marketing_analyticsUncheckedUpdateManyWithoutUsersInput>;
};
export type marketing_analyticsScalarWhereInput = {
    AND?: Prisma.marketing_analyticsScalarWhereInput | Prisma.marketing_analyticsScalarWhereInput[];
    OR?: Prisma.marketing_analyticsScalarWhereInput[];
    NOT?: Prisma.marketing_analyticsScalarWhereInput | Prisma.marketing_analyticsScalarWhereInput[];
    id?: Prisma.BigIntFilter<"marketing_analytics"> | bigint | number;
    campaign_type?: Prisma.Enummarketing_analytics_campaign_typeFilter<"marketing_analytics"> | $Enums.marketing_analytics_campaign_type;
    campaign_id?: Prisma.BigIntFilter<"marketing_analytics"> | bigint | number;
    user_id?: Prisma.BigIntNullableFilter<"marketing_analytics"> | bigint | number | null;
    session_id?: Prisma.StringNullableFilter<"marketing_analytics"> | string | null;
    event_type?: Prisma.Enummarketing_analytics_event_typeFilter<"marketing_analytics"> | $Enums.marketing_analytics_event_type;
    event_data?: Prisma.JsonNullableFilter<"marketing_analytics">;
    page_url?: Prisma.StringNullableFilter<"marketing_analytics"> | string | null;
    referrer?: Prisma.StringNullableFilter<"marketing_analytics"> | string | null;
    device_type?: Prisma.StringNullableFilter<"marketing_analytics"> | string | null;
    browser?: Prisma.StringNullableFilter<"marketing_analytics"> | string | null;
    created_at?: Prisma.DateTimeFilter<"marketing_analytics"> | Date | string;
};
export type marketing_analyticsCreateManyUsersInput = {
    id?: bigint | number;
    campaign_type: $Enums.marketing_analytics_campaign_type;
    campaign_id: bigint | number;
    session_id?: string | null;
    event_type: $Enums.marketing_analytics_event_type;
    event_data?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    page_url?: string | null;
    referrer?: string | null;
    device_type?: string | null;
    browser?: string | null;
    created_at?: Date | string;
};
export type marketing_analyticsUpdateWithoutUsersInput = {
    id?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    campaign_type?: Prisma.Enummarketing_analytics_campaign_typeFieldUpdateOperationsInput | $Enums.marketing_analytics_campaign_type;
    campaign_id?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    session_id?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    event_type?: Prisma.Enummarketing_analytics_event_typeFieldUpdateOperationsInput | $Enums.marketing_analytics_event_type;
    event_data?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    page_url?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    referrer?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    device_type?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    browser?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type marketing_analyticsUncheckedUpdateWithoutUsersInput = {
    id?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    campaign_type?: Prisma.Enummarketing_analytics_campaign_typeFieldUpdateOperationsInput | $Enums.marketing_analytics_campaign_type;
    campaign_id?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    session_id?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    event_type?: Prisma.Enummarketing_analytics_event_typeFieldUpdateOperationsInput | $Enums.marketing_analytics_event_type;
    event_data?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    page_url?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    referrer?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    device_type?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    browser?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type marketing_analyticsUncheckedUpdateManyWithoutUsersInput = {
    id?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    campaign_type?: Prisma.Enummarketing_analytics_campaign_typeFieldUpdateOperationsInput | $Enums.marketing_analytics_campaign_type;
    campaign_id?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    session_id?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    event_type?: Prisma.Enummarketing_analytics_event_typeFieldUpdateOperationsInput | $Enums.marketing_analytics_event_type;
    event_data?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    page_url?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    referrer?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    device_type?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    browser?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type marketing_analyticsSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    campaign_type?: boolean;
    campaign_id?: boolean;
    user_id?: boolean;
    session_id?: boolean;
    event_type?: boolean;
    event_data?: boolean;
    page_url?: boolean;
    referrer?: boolean;
    device_type?: boolean;
    browser?: boolean;
    created_at?: boolean;
    users?: boolean | Prisma.marketing_analytics$usersArgs<ExtArgs>;
}, ExtArgs["result"]["marketing_analytics"]>;
export type marketing_analyticsSelectScalar = {
    id?: boolean;
    campaign_type?: boolean;
    campaign_id?: boolean;
    user_id?: boolean;
    session_id?: boolean;
    event_type?: boolean;
    event_data?: boolean;
    page_url?: boolean;
    referrer?: boolean;
    device_type?: boolean;
    browser?: boolean;
    created_at?: boolean;
};
export type marketing_analyticsOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "campaign_type" | "campaign_id" | "user_id" | "session_id" | "event_type" | "event_data" | "page_url" | "referrer" | "device_type" | "browser" | "created_at", ExtArgs["result"]["marketing_analytics"]>;
export type marketing_analyticsInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    users?: boolean | Prisma.marketing_analytics$usersArgs<ExtArgs>;
};
export type $marketing_analyticsPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "marketing_analytics";
    objects: {
        users: Prisma.$usersPayload<ExtArgs> | null;
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id: bigint;
        campaign_type: $Enums.marketing_analytics_campaign_type;
        campaign_id: bigint;
        user_id: bigint | null;
        session_id: string | null;
        event_type: $Enums.marketing_analytics_event_type;
        event_data: runtime.JsonValue | null;
        page_url: string | null;
        referrer: string | null;
        device_type: string | null;
        browser: string | null;
        created_at: Date;
    }, ExtArgs["result"]["marketing_analytics"]>;
    composites: {};
};
export type marketing_analyticsGetPayload<S extends boolean | null | undefined | marketing_analyticsDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$marketing_analyticsPayload, S>;
export type marketing_analyticsCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<marketing_analyticsFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: Marketing_analyticsCountAggregateInputType | true;
};
export interface marketing_analyticsDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['marketing_analytics'];
        meta: {
            name: 'marketing_analytics';
        };
    };
    findUnique<T extends marketing_analyticsFindUniqueArgs>(args: Prisma.SelectSubset<T, marketing_analyticsFindUniqueArgs<ExtArgs>>): Prisma.Prisma__marketing_analyticsClient<runtime.Types.Result.GetResult<Prisma.$marketing_analyticsPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findUniqueOrThrow<T extends marketing_analyticsFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, marketing_analyticsFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__marketing_analyticsClient<runtime.Types.Result.GetResult<Prisma.$marketing_analyticsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findFirst<T extends marketing_analyticsFindFirstArgs>(args?: Prisma.SelectSubset<T, marketing_analyticsFindFirstArgs<ExtArgs>>): Prisma.Prisma__marketing_analyticsClient<runtime.Types.Result.GetResult<Prisma.$marketing_analyticsPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findFirstOrThrow<T extends marketing_analyticsFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, marketing_analyticsFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__marketing_analyticsClient<runtime.Types.Result.GetResult<Prisma.$marketing_analyticsPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findMany<T extends marketing_analyticsFindManyArgs>(args?: Prisma.SelectSubset<T, marketing_analyticsFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$marketing_analyticsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    create<T extends marketing_analyticsCreateArgs>(args: Prisma.SelectSubset<T, marketing_analyticsCreateArgs<ExtArgs>>): Prisma.Prisma__marketing_analyticsClient<runtime.Types.Result.GetResult<Prisma.$marketing_analyticsPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    createMany<T extends marketing_analyticsCreateManyArgs>(args?: Prisma.SelectSubset<T, marketing_analyticsCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    delete<T extends marketing_analyticsDeleteArgs>(args: Prisma.SelectSubset<T, marketing_analyticsDeleteArgs<ExtArgs>>): Prisma.Prisma__marketing_analyticsClient<runtime.Types.Result.GetResult<Prisma.$marketing_analyticsPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    update<T extends marketing_analyticsUpdateArgs>(args: Prisma.SelectSubset<T, marketing_analyticsUpdateArgs<ExtArgs>>): Prisma.Prisma__marketing_analyticsClient<runtime.Types.Result.GetResult<Prisma.$marketing_analyticsPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    deleteMany<T extends marketing_analyticsDeleteManyArgs>(args?: Prisma.SelectSubset<T, marketing_analyticsDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateMany<T extends marketing_analyticsUpdateManyArgs>(args: Prisma.SelectSubset<T, marketing_analyticsUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    upsert<T extends marketing_analyticsUpsertArgs>(args: Prisma.SelectSubset<T, marketing_analyticsUpsertArgs<ExtArgs>>): Prisma.Prisma__marketing_analyticsClient<runtime.Types.Result.GetResult<Prisma.$marketing_analyticsPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    count<T extends marketing_analyticsCountArgs>(args?: Prisma.Subset<T, marketing_analyticsCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], Marketing_analyticsCountAggregateOutputType> : number>;
    aggregate<T extends Marketing_analyticsAggregateArgs>(args: Prisma.Subset<T, Marketing_analyticsAggregateArgs>): Prisma.PrismaPromise<GetMarketing_analyticsAggregateType<T>>;
    groupBy<T extends marketing_analyticsGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: marketing_analyticsGroupByArgs['orderBy'];
    } : {
        orderBy?: marketing_analyticsGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, marketing_analyticsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetMarketing_analyticsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    readonly fields: marketing_analyticsFieldRefs;
}
export interface Prisma__marketing_analyticsClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    users<T extends Prisma.marketing_analytics$usersArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.marketing_analytics$usersArgs<ExtArgs>>): Prisma.Prisma__usersClient<runtime.Types.Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): runtime.Types.Utils.JsPromise<TResult1 | TResult2>;
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): runtime.Types.Utils.JsPromise<T | TResult>;
    finally(onfinally?: (() => void) | undefined | null): runtime.Types.Utils.JsPromise<T>;
}
export interface marketing_analyticsFieldRefs {
    readonly id: Prisma.FieldRef<"marketing_analytics", 'BigInt'>;
    readonly campaign_type: Prisma.FieldRef<"marketing_analytics", 'marketing_analytics_campaign_type'>;
    readonly campaign_id: Prisma.FieldRef<"marketing_analytics", 'BigInt'>;
    readonly user_id: Prisma.FieldRef<"marketing_analytics", 'BigInt'>;
    readonly session_id: Prisma.FieldRef<"marketing_analytics", 'String'>;
    readonly event_type: Prisma.FieldRef<"marketing_analytics", 'marketing_analytics_event_type'>;
    readonly event_data: Prisma.FieldRef<"marketing_analytics", 'Json'>;
    readonly page_url: Prisma.FieldRef<"marketing_analytics", 'String'>;
    readonly referrer: Prisma.FieldRef<"marketing_analytics", 'String'>;
    readonly device_type: Prisma.FieldRef<"marketing_analytics", 'String'>;
    readonly browser: Prisma.FieldRef<"marketing_analytics", 'String'>;
    readonly created_at: Prisma.FieldRef<"marketing_analytics", 'DateTime'>;
}
export type marketing_analyticsFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.marketing_analyticsSelect<ExtArgs> | null;
    omit?: Prisma.marketing_analyticsOmit<ExtArgs> | null;
    include?: Prisma.marketing_analyticsInclude<ExtArgs> | null;
    where: Prisma.marketing_analyticsWhereUniqueInput;
};
export type marketing_analyticsFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.marketing_analyticsSelect<ExtArgs> | null;
    omit?: Prisma.marketing_analyticsOmit<ExtArgs> | null;
    include?: Prisma.marketing_analyticsInclude<ExtArgs> | null;
    where: Prisma.marketing_analyticsWhereUniqueInput;
};
export type marketing_analyticsFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.marketing_analyticsSelect<ExtArgs> | null;
    omit?: Prisma.marketing_analyticsOmit<ExtArgs> | null;
    include?: Prisma.marketing_analyticsInclude<ExtArgs> | null;
    where?: Prisma.marketing_analyticsWhereInput;
    orderBy?: Prisma.marketing_analyticsOrderByWithRelationInput | Prisma.marketing_analyticsOrderByWithRelationInput[];
    cursor?: Prisma.marketing_analyticsWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.Marketing_analyticsScalarFieldEnum | Prisma.Marketing_analyticsScalarFieldEnum[];
};
export type marketing_analyticsFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.marketing_analyticsSelect<ExtArgs> | null;
    omit?: Prisma.marketing_analyticsOmit<ExtArgs> | null;
    include?: Prisma.marketing_analyticsInclude<ExtArgs> | null;
    where?: Prisma.marketing_analyticsWhereInput;
    orderBy?: Prisma.marketing_analyticsOrderByWithRelationInput | Prisma.marketing_analyticsOrderByWithRelationInput[];
    cursor?: Prisma.marketing_analyticsWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.Marketing_analyticsScalarFieldEnum | Prisma.Marketing_analyticsScalarFieldEnum[];
};
export type marketing_analyticsFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.marketing_analyticsSelect<ExtArgs> | null;
    omit?: Prisma.marketing_analyticsOmit<ExtArgs> | null;
    include?: Prisma.marketing_analyticsInclude<ExtArgs> | null;
    where?: Prisma.marketing_analyticsWhereInput;
    orderBy?: Prisma.marketing_analyticsOrderByWithRelationInput | Prisma.marketing_analyticsOrderByWithRelationInput[];
    cursor?: Prisma.marketing_analyticsWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.Marketing_analyticsScalarFieldEnum | Prisma.Marketing_analyticsScalarFieldEnum[];
};
export type marketing_analyticsCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.marketing_analyticsSelect<ExtArgs> | null;
    omit?: Prisma.marketing_analyticsOmit<ExtArgs> | null;
    include?: Prisma.marketing_analyticsInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.marketing_analyticsCreateInput, Prisma.marketing_analyticsUncheckedCreateInput>;
};
export type marketing_analyticsCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.marketing_analyticsCreateManyInput | Prisma.marketing_analyticsCreateManyInput[];
    skipDuplicates?: boolean;
};
export type marketing_analyticsUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.marketing_analyticsSelect<ExtArgs> | null;
    omit?: Prisma.marketing_analyticsOmit<ExtArgs> | null;
    include?: Prisma.marketing_analyticsInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.marketing_analyticsUpdateInput, Prisma.marketing_analyticsUncheckedUpdateInput>;
    where: Prisma.marketing_analyticsWhereUniqueInput;
};
export type marketing_analyticsUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.XOR<Prisma.marketing_analyticsUpdateManyMutationInput, Prisma.marketing_analyticsUncheckedUpdateManyInput>;
    where?: Prisma.marketing_analyticsWhereInput;
    limit?: number;
};
export type marketing_analyticsUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.marketing_analyticsSelect<ExtArgs> | null;
    omit?: Prisma.marketing_analyticsOmit<ExtArgs> | null;
    include?: Prisma.marketing_analyticsInclude<ExtArgs> | null;
    where: Prisma.marketing_analyticsWhereUniqueInput;
    create: Prisma.XOR<Prisma.marketing_analyticsCreateInput, Prisma.marketing_analyticsUncheckedCreateInput>;
    update: Prisma.XOR<Prisma.marketing_analyticsUpdateInput, Prisma.marketing_analyticsUncheckedUpdateInput>;
};
export type marketing_analyticsDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.marketing_analyticsSelect<ExtArgs> | null;
    omit?: Prisma.marketing_analyticsOmit<ExtArgs> | null;
    include?: Prisma.marketing_analyticsInclude<ExtArgs> | null;
    where: Prisma.marketing_analyticsWhereUniqueInput;
};
export type marketing_analyticsDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.marketing_analyticsWhereInput;
    limit?: number;
};
export type marketing_analytics$usersArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.usersSelect<ExtArgs> | null;
    omit?: Prisma.usersOmit<ExtArgs> | null;
    include?: Prisma.usersInclude<ExtArgs> | null;
    where?: Prisma.usersWhereInput;
};
export type marketing_analyticsDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.marketing_analyticsSelect<ExtArgs> | null;
    omit?: Prisma.marketing_analyticsOmit<ExtArgs> | null;
    include?: Prisma.marketing_analyticsInclude<ExtArgs> | null;
};
export {};
