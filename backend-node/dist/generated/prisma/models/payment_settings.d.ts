import type * as runtime from "@prisma/client/runtime/client";
import type * as Prisma from "../internal/prismaNamespace.js";
export type payment_settingsModel = runtime.Types.Result.DefaultSelection<Prisma.$payment_settingsPayload>;
export type AggregatePayment_settings = {
    _count: Payment_settingsCountAggregateOutputType | null;
    _avg: Payment_settingsAvgAggregateOutputType | null;
    _sum: Payment_settingsSumAggregateOutputType | null;
    _min: Payment_settingsMinAggregateOutputType | null;
    _max: Payment_settingsMaxAggregateOutputType | null;
};
export type Payment_settingsAvgAggregateOutputType = {
    id: number | null;
    sort_order: number | null;
};
export type Payment_settingsSumAggregateOutputType = {
    id: bigint | null;
    sort_order: number | null;
};
export type Payment_settingsMinAggregateOutputType = {
    id: bigint | null;
    key: string | null;
    name: string | null;
    is_enabled: boolean | null;
    sort_order: number | null;
    created_at: Date | null;
    updated_at: Date | null;
};
export type Payment_settingsMaxAggregateOutputType = {
    id: bigint | null;
    key: string | null;
    name: string | null;
    is_enabled: boolean | null;
    sort_order: number | null;
    created_at: Date | null;
    updated_at: Date | null;
};
export type Payment_settingsCountAggregateOutputType = {
    id: number;
    key: number;
    name: number;
    is_enabled: number;
    configuration: number;
    sort_order: number;
    created_at: number;
    updated_at: number;
    _all: number;
};
export type Payment_settingsAvgAggregateInputType = {
    id?: true;
    sort_order?: true;
};
export type Payment_settingsSumAggregateInputType = {
    id?: true;
    sort_order?: true;
};
export type Payment_settingsMinAggregateInputType = {
    id?: true;
    key?: true;
    name?: true;
    is_enabled?: true;
    sort_order?: true;
    created_at?: true;
    updated_at?: true;
};
export type Payment_settingsMaxAggregateInputType = {
    id?: true;
    key?: true;
    name?: true;
    is_enabled?: true;
    sort_order?: true;
    created_at?: true;
    updated_at?: true;
};
export type Payment_settingsCountAggregateInputType = {
    id?: true;
    key?: true;
    name?: true;
    is_enabled?: true;
    configuration?: true;
    sort_order?: true;
    created_at?: true;
    updated_at?: true;
    _all?: true;
};
export type Payment_settingsAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.payment_settingsWhereInput;
    orderBy?: Prisma.payment_settingsOrderByWithRelationInput | Prisma.payment_settingsOrderByWithRelationInput[];
    cursor?: Prisma.payment_settingsWhereUniqueInput;
    take?: number;
    skip?: number;
    _count?: true | Payment_settingsCountAggregateInputType;
    _avg?: Payment_settingsAvgAggregateInputType;
    _sum?: Payment_settingsSumAggregateInputType;
    _min?: Payment_settingsMinAggregateInputType;
    _max?: Payment_settingsMaxAggregateInputType;
};
export type GetPayment_settingsAggregateType<T extends Payment_settingsAggregateArgs> = {
    [P in keyof T & keyof AggregatePayment_settings]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregatePayment_settings[P]> : Prisma.GetScalarType<T[P], AggregatePayment_settings[P]>;
};
export type payment_settingsGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.payment_settingsWhereInput;
    orderBy?: Prisma.payment_settingsOrderByWithAggregationInput | Prisma.payment_settingsOrderByWithAggregationInput[];
    by: Prisma.Payment_settingsScalarFieldEnum[] | Prisma.Payment_settingsScalarFieldEnum;
    having?: Prisma.payment_settingsScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: Payment_settingsCountAggregateInputType | true;
    _avg?: Payment_settingsAvgAggregateInputType;
    _sum?: Payment_settingsSumAggregateInputType;
    _min?: Payment_settingsMinAggregateInputType;
    _max?: Payment_settingsMaxAggregateInputType;
};
export type Payment_settingsGroupByOutputType = {
    id: bigint;
    key: string;
    name: string;
    is_enabled: boolean;
    configuration: runtime.JsonValue | null;
    sort_order: number;
    created_at: Date | null;
    updated_at: Date | null;
    _count: Payment_settingsCountAggregateOutputType | null;
    _avg: Payment_settingsAvgAggregateOutputType | null;
    _sum: Payment_settingsSumAggregateOutputType | null;
    _min: Payment_settingsMinAggregateOutputType | null;
    _max: Payment_settingsMaxAggregateOutputType | null;
};
type GetPayment_settingsGroupByPayload<T extends payment_settingsGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<Payment_settingsGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof Payment_settingsGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], Payment_settingsGroupByOutputType[P]> : Prisma.GetScalarType<T[P], Payment_settingsGroupByOutputType[P]>;
}>>;
export type payment_settingsWhereInput = {
    AND?: Prisma.payment_settingsWhereInput | Prisma.payment_settingsWhereInput[];
    OR?: Prisma.payment_settingsWhereInput[];
    NOT?: Prisma.payment_settingsWhereInput | Prisma.payment_settingsWhereInput[];
    id?: Prisma.BigIntFilter<"payment_settings"> | bigint | number;
    key?: Prisma.StringFilter<"payment_settings"> | string;
    name?: Prisma.StringFilter<"payment_settings"> | string;
    is_enabled?: Prisma.BoolFilter<"payment_settings"> | boolean;
    configuration?: Prisma.JsonNullableFilter<"payment_settings">;
    sort_order?: Prisma.IntFilter<"payment_settings"> | number;
    created_at?: Prisma.DateTimeNullableFilter<"payment_settings"> | Date | string | null;
    updated_at?: Prisma.DateTimeNullableFilter<"payment_settings"> | Date | string | null;
};
export type payment_settingsOrderByWithRelationInput = {
    id?: Prisma.SortOrder;
    key?: Prisma.SortOrder;
    name?: Prisma.SortOrder;
    is_enabled?: Prisma.SortOrder;
    configuration?: Prisma.SortOrderInput | Prisma.SortOrder;
    sort_order?: Prisma.SortOrder;
    created_at?: Prisma.SortOrderInput | Prisma.SortOrder;
    updated_at?: Prisma.SortOrderInput | Prisma.SortOrder;
    _relevance?: Prisma.payment_settingsOrderByRelevanceInput;
};
export type payment_settingsWhereUniqueInput = Prisma.AtLeast<{
    id?: bigint | number;
    key?: string;
    AND?: Prisma.payment_settingsWhereInput | Prisma.payment_settingsWhereInput[];
    OR?: Prisma.payment_settingsWhereInput[];
    NOT?: Prisma.payment_settingsWhereInput | Prisma.payment_settingsWhereInput[];
    name?: Prisma.StringFilter<"payment_settings"> | string;
    is_enabled?: Prisma.BoolFilter<"payment_settings"> | boolean;
    configuration?: Prisma.JsonNullableFilter<"payment_settings">;
    sort_order?: Prisma.IntFilter<"payment_settings"> | number;
    created_at?: Prisma.DateTimeNullableFilter<"payment_settings"> | Date | string | null;
    updated_at?: Prisma.DateTimeNullableFilter<"payment_settings"> | Date | string | null;
}, "id" | "key">;
export type payment_settingsOrderByWithAggregationInput = {
    id?: Prisma.SortOrder;
    key?: Prisma.SortOrder;
    name?: Prisma.SortOrder;
    is_enabled?: Prisma.SortOrder;
    configuration?: Prisma.SortOrderInput | Prisma.SortOrder;
    sort_order?: Prisma.SortOrder;
    created_at?: Prisma.SortOrderInput | Prisma.SortOrder;
    updated_at?: Prisma.SortOrderInput | Prisma.SortOrder;
    _count?: Prisma.payment_settingsCountOrderByAggregateInput;
    _avg?: Prisma.payment_settingsAvgOrderByAggregateInput;
    _max?: Prisma.payment_settingsMaxOrderByAggregateInput;
    _min?: Prisma.payment_settingsMinOrderByAggregateInput;
    _sum?: Prisma.payment_settingsSumOrderByAggregateInput;
};
export type payment_settingsScalarWhereWithAggregatesInput = {
    AND?: Prisma.payment_settingsScalarWhereWithAggregatesInput | Prisma.payment_settingsScalarWhereWithAggregatesInput[];
    OR?: Prisma.payment_settingsScalarWhereWithAggregatesInput[];
    NOT?: Prisma.payment_settingsScalarWhereWithAggregatesInput | Prisma.payment_settingsScalarWhereWithAggregatesInput[];
    id?: Prisma.BigIntWithAggregatesFilter<"payment_settings"> | bigint | number;
    key?: Prisma.StringWithAggregatesFilter<"payment_settings"> | string;
    name?: Prisma.StringWithAggregatesFilter<"payment_settings"> | string;
    is_enabled?: Prisma.BoolWithAggregatesFilter<"payment_settings"> | boolean;
    configuration?: Prisma.JsonNullableWithAggregatesFilter<"payment_settings">;
    sort_order?: Prisma.IntWithAggregatesFilter<"payment_settings"> | number;
    created_at?: Prisma.DateTimeNullableWithAggregatesFilter<"payment_settings"> | Date | string | null;
    updated_at?: Prisma.DateTimeNullableWithAggregatesFilter<"payment_settings"> | Date | string | null;
};
export type payment_settingsCreateInput = {
    id?: bigint | number;
    key: string;
    name: string;
    is_enabled?: boolean;
    configuration?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    sort_order?: number;
    created_at?: Date | string | null;
    updated_at?: Date | string | null;
};
export type payment_settingsUncheckedCreateInput = {
    id?: bigint | number;
    key: string;
    name: string;
    is_enabled?: boolean;
    configuration?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    sort_order?: number;
    created_at?: Date | string | null;
    updated_at?: Date | string | null;
};
export type payment_settingsUpdateInput = {
    id?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    key?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    is_enabled?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    configuration?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    sort_order?: Prisma.IntFieldUpdateOperationsInput | number;
    created_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    updated_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
};
export type payment_settingsUncheckedUpdateInput = {
    id?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    key?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    is_enabled?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    configuration?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    sort_order?: Prisma.IntFieldUpdateOperationsInput | number;
    created_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    updated_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
};
export type payment_settingsCreateManyInput = {
    id?: bigint | number;
    key: string;
    name: string;
    is_enabled?: boolean;
    configuration?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    sort_order?: number;
    created_at?: Date | string | null;
    updated_at?: Date | string | null;
};
export type payment_settingsUpdateManyMutationInput = {
    id?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    key?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    is_enabled?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    configuration?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    sort_order?: Prisma.IntFieldUpdateOperationsInput | number;
    created_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    updated_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
};
export type payment_settingsUncheckedUpdateManyInput = {
    id?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    key?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    is_enabled?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    configuration?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    sort_order?: Prisma.IntFieldUpdateOperationsInput | number;
    created_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    updated_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
};
export type payment_settingsOrderByRelevanceInput = {
    fields: Prisma.payment_settingsOrderByRelevanceFieldEnum | Prisma.payment_settingsOrderByRelevanceFieldEnum[];
    sort: Prisma.SortOrder;
    search: string;
};
export type payment_settingsCountOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    key?: Prisma.SortOrder;
    name?: Prisma.SortOrder;
    is_enabled?: Prisma.SortOrder;
    configuration?: Prisma.SortOrder;
    sort_order?: Prisma.SortOrder;
    created_at?: Prisma.SortOrder;
    updated_at?: Prisma.SortOrder;
};
export type payment_settingsAvgOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    sort_order?: Prisma.SortOrder;
};
export type payment_settingsMaxOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    key?: Prisma.SortOrder;
    name?: Prisma.SortOrder;
    is_enabled?: Prisma.SortOrder;
    sort_order?: Prisma.SortOrder;
    created_at?: Prisma.SortOrder;
    updated_at?: Prisma.SortOrder;
};
export type payment_settingsMinOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    key?: Prisma.SortOrder;
    name?: Prisma.SortOrder;
    is_enabled?: Prisma.SortOrder;
    sort_order?: Prisma.SortOrder;
    created_at?: Prisma.SortOrder;
    updated_at?: Prisma.SortOrder;
};
export type payment_settingsSumOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    sort_order?: Prisma.SortOrder;
};
export type payment_settingsSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    key?: boolean;
    name?: boolean;
    is_enabled?: boolean;
    configuration?: boolean;
    sort_order?: boolean;
    created_at?: boolean;
    updated_at?: boolean;
}, ExtArgs["result"]["payment_settings"]>;
export type payment_settingsSelectScalar = {
    id?: boolean;
    key?: boolean;
    name?: boolean;
    is_enabled?: boolean;
    configuration?: boolean;
    sort_order?: boolean;
    created_at?: boolean;
    updated_at?: boolean;
};
export type payment_settingsOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "key" | "name" | "is_enabled" | "configuration" | "sort_order" | "created_at" | "updated_at", ExtArgs["result"]["payment_settings"]>;
export type $payment_settingsPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "payment_settings";
    objects: {};
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id: bigint;
        key: string;
        name: string;
        is_enabled: boolean;
        configuration: runtime.JsonValue | null;
        sort_order: number;
        created_at: Date | null;
        updated_at: Date | null;
    }, ExtArgs["result"]["payment_settings"]>;
    composites: {};
};
export type payment_settingsGetPayload<S extends boolean | null | undefined | payment_settingsDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$payment_settingsPayload, S>;
export type payment_settingsCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<payment_settingsFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: Payment_settingsCountAggregateInputType | true;
};
export interface payment_settingsDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['payment_settings'];
        meta: {
            name: 'payment_settings';
        };
    };
    findUnique<T extends payment_settingsFindUniqueArgs>(args: Prisma.SelectSubset<T, payment_settingsFindUniqueArgs<ExtArgs>>): Prisma.Prisma__payment_settingsClient<runtime.Types.Result.GetResult<Prisma.$payment_settingsPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findUniqueOrThrow<T extends payment_settingsFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, payment_settingsFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__payment_settingsClient<runtime.Types.Result.GetResult<Prisma.$payment_settingsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findFirst<T extends payment_settingsFindFirstArgs>(args?: Prisma.SelectSubset<T, payment_settingsFindFirstArgs<ExtArgs>>): Prisma.Prisma__payment_settingsClient<runtime.Types.Result.GetResult<Prisma.$payment_settingsPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findFirstOrThrow<T extends payment_settingsFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, payment_settingsFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__payment_settingsClient<runtime.Types.Result.GetResult<Prisma.$payment_settingsPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findMany<T extends payment_settingsFindManyArgs>(args?: Prisma.SelectSubset<T, payment_settingsFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$payment_settingsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    create<T extends payment_settingsCreateArgs>(args: Prisma.SelectSubset<T, payment_settingsCreateArgs<ExtArgs>>): Prisma.Prisma__payment_settingsClient<runtime.Types.Result.GetResult<Prisma.$payment_settingsPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    createMany<T extends payment_settingsCreateManyArgs>(args?: Prisma.SelectSubset<T, payment_settingsCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    delete<T extends payment_settingsDeleteArgs>(args: Prisma.SelectSubset<T, payment_settingsDeleteArgs<ExtArgs>>): Prisma.Prisma__payment_settingsClient<runtime.Types.Result.GetResult<Prisma.$payment_settingsPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    update<T extends payment_settingsUpdateArgs>(args: Prisma.SelectSubset<T, payment_settingsUpdateArgs<ExtArgs>>): Prisma.Prisma__payment_settingsClient<runtime.Types.Result.GetResult<Prisma.$payment_settingsPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    deleteMany<T extends payment_settingsDeleteManyArgs>(args?: Prisma.SelectSubset<T, payment_settingsDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateMany<T extends payment_settingsUpdateManyArgs>(args: Prisma.SelectSubset<T, payment_settingsUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    upsert<T extends payment_settingsUpsertArgs>(args: Prisma.SelectSubset<T, payment_settingsUpsertArgs<ExtArgs>>): Prisma.Prisma__payment_settingsClient<runtime.Types.Result.GetResult<Prisma.$payment_settingsPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    count<T extends payment_settingsCountArgs>(args?: Prisma.Subset<T, payment_settingsCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], Payment_settingsCountAggregateOutputType> : number>;
    aggregate<T extends Payment_settingsAggregateArgs>(args: Prisma.Subset<T, Payment_settingsAggregateArgs>): Prisma.PrismaPromise<GetPayment_settingsAggregateType<T>>;
    groupBy<T extends payment_settingsGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: payment_settingsGroupByArgs['orderBy'];
    } : {
        orderBy?: payment_settingsGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, payment_settingsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPayment_settingsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    readonly fields: payment_settingsFieldRefs;
}
export interface Prisma__payment_settingsClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): runtime.Types.Utils.JsPromise<TResult1 | TResult2>;
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): runtime.Types.Utils.JsPromise<T | TResult>;
    finally(onfinally?: (() => void) | undefined | null): runtime.Types.Utils.JsPromise<T>;
}
export interface payment_settingsFieldRefs {
    readonly id: Prisma.FieldRef<"payment_settings", 'BigInt'>;
    readonly key: Prisma.FieldRef<"payment_settings", 'String'>;
    readonly name: Prisma.FieldRef<"payment_settings", 'String'>;
    readonly is_enabled: Prisma.FieldRef<"payment_settings", 'Boolean'>;
    readonly configuration: Prisma.FieldRef<"payment_settings", 'Json'>;
    readonly sort_order: Prisma.FieldRef<"payment_settings", 'Int'>;
    readonly created_at: Prisma.FieldRef<"payment_settings", 'DateTime'>;
    readonly updated_at: Prisma.FieldRef<"payment_settings", 'DateTime'>;
}
export type payment_settingsFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.payment_settingsSelect<ExtArgs> | null;
    omit?: Prisma.payment_settingsOmit<ExtArgs> | null;
    where: Prisma.payment_settingsWhereUniqueInput;
};
export type payment_settingsFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.payment_settingsSelect<ExtArgs> | null;
    omit?: Prisma.payment_settingsOmit<ExtArgs> | null;
    where: Prisma.payment_settingsWhereUniqueInput;
};
export type payment_settingsFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.payment_settingsSelect<ExtArgs> | null;
    omit?: Prisma.payment_settingsOmit<ExtArgs> | null;
    where?: Prisma.payment_settingsWhereInput;
    orderBy?: Prisma.payment_settingsOrderByWithRelationInput | Prisma.payment_settingsOrderByWithRelationInput[];
    cursor?: Prisma.payment_settingsWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.Payment_settingsScalarFieldEnum | Prisma.Payment_settingsScalarFieldEnum[];
};
export type payment_settingsFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.payment_settingsSelect<ExtArgs> | null;
    omit?: Prisma.payment_settingsOmit<ExtArgs> | null;
    where?: Prisma.payment_settingsWhereInput;
    orderBy?: Prisma.payment_settingsOrderByWithRelationInput | Prisma.payment_settingsOrderByWithRelationInput[];
    cursor?: Prisma.payment_settingsWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.Payment_settingsScalarFieldEnum | Prisma.Payment_settingsScalarFieldEnum[];
};
export type payment_settingsFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.payment_settingsSelect<ExtArgs> | null;
    omit?: Prisma.payment_settingsOmit<ExtArgs> | null;
    where?: Prisma.payment_settingsWhereInput;
    orderBy?: Prisma.payment_settingsOrderByWithRelationInput | Prisma.payment_settingsOrderByWithRelationInput[];
    cursor?: Prisma.payment_settingsWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.Payment_settingsScalarFieldEnum | Prisma.Payment_settingsScalarFieldEnum[];
};
export type payment_settingsCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.payment_settingsSelect<ExtArgs> | null;
    omit?: Prisma.payment_settingsOmit<ExtArgs> | null;
    data: Prisma.XOR<Prisma.payment_settingsCreateInput, Prisma.payment_settingsUncheckedCreateInput>;
};
export type payment_settingsCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.payment_settingsCreateManyInput | Prisma.payment_settingsCreateManyInput[];
    skipDuplicates?: boolean;
};
export type payment_settingsUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.payment_settingsSelect<ExtArgs> | null;
    omit?: Prisma.payment_settingsOmit<ExtArgs> | null;
    data: Prisma.XOR<Prisma.payment_settingsUpdateInput, Prisma.payment_settingsUncheckedUpdateInput>;
    where: Prisma.payment_settingsWhereUniqueInput;
};
export type payment_settingsUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.XOR<Prisma.payment_settingsUpdateManyMutationInput, Prisma.payment_settingsUncheckedUpdateManyInput>;
    where?: Prisma.payment_settingsWhereInput;
    limit?: number;
};
export type payment_settingsUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.payment_settingsSelect<ExtArgs> | null;
    omit?: Prisma.payment_settingsOmit<ExtArgs> | null;
    where: Prisma.payment_settingsWhereUniqueInput;
    create: Prisma.XOR<Prisma.payment_settingsCreateInput, Prisma.payment_settingsUncheckedCreateInput>;
    update: Prisma.XOR<Prisma.payment_settingsUpdateInput, Prisma.payment_settingsUncheckedUpdateInput>;
};
export type payment_settingsDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.payment_settingsSelect<ExtArgs> | null;
    omit?: Prisma.payment_settingsOmit<ExtArgs> | null;
    where: Prisma.payment_settingsWhereUniqueInput;
};
export type payment_settingsDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.payment_settingsWhereInput;
    limit?: number;
};
export type payment_settingsDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.payment_settingsSelect<ExtArgs> | null;
    omit?: Prisma.payment_settingsOmit<ExtArgs> | null;
};
export {};
