import type * as runtime from "@prisma/client/runtime/client";
import type * as Prisma from "../internal/prismaNamespace.js";
export type bookingsModel = runtime.Types.Result.DefaultSelection<Prisma.$bookingsPayload>;
export type AggregateBookings = {
    _count: BookingsCountAggregateOutputType | null;
    _avg: BookingsAvgAggregateOutputType | null;
    _sum: BookingsSumAggregateOutputType | null;
    _min: BookingsMinAggregateOutputType | null;
    _max: BookingsMaxAggregateOutputType | null;
};
export type BookingsAvgAggregateOutputType = {
    id: number | null;
};
export type BookingsSumAggregateOutputType = {
    id: bigint | null;
};
export type BookingsMinAggregateOutputType = {
    id: bigint | null;
    created_at: Date | null;
    updated_at: Date | null;
};
export type BookingsMaxAggregateOutputType = {
    id: bigint | null;
    created_at: Date | null;
    updated_at: Date | null;
};
export type BookingsCountAggregateOutputType = {
    id: number;
    created_at: number;
    updated_at: number;
    _all: number;
};
export type BookingsAvgAggregateInputType = {
    id?: true;
};
export type BookingsSumAggregateInputType = {
    id?: true;
};
export type BookingsMinAggregateInputType = {
    id?: true;
    created_at?: true;
    updated_at?: true;
};
export type BookingsMaxAggregateInputType = {
    id?: true;
    created_at?: true;
    updated_at?: true;
};
export type BookingsCountAggregateInputType = {
    id?: true;
    created_at?: true;
    updated_at?: true;
    _all?: true;
};
export type BookingsAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.bookingsWhereInput;
    orderBy?: Prisma.bookingsOrderByWithRelationInput | Prisma.bookingsOrderByWithRelationInput[];
    cursor?: Prisma.bookingsWhereUniqueInput;
    take?: number;
    skip?: number;
    _count?: true | BookingsCountAggregateInputType;
    _avg?: BookingsAvgAggregateInputType;
    _sum?: BookingsSumAggregateInputType;
    _min?: BookingsMinAggregateInputType;
    _max?: BookingsMaxAggregateInputType;
};
export type GetBookingsAggregateType<T extends BookingsAggregateArgs> = {
    [P in keyof T & keyof AggregateBookings]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateBookings[P]> : Prisma.GetScalarType<T[P], AggregateBookings[P]>;
};
export type bookingsGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.bookingsWhereInput;
    orderBy?: Prisma.bookingsOrderByWithAggregationInput | Prisma.bookingsOrderByWithAggregationInput[];
    by: Prisma.BookingsScalarFieldEnum[] | Prisma.BookingsScalarFieldEnum;
    having?: Prisma.bookingsScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: BookingsCountAggregateInputType | true;
    _avg?: BookingsAvgAggregateInputType;
    _sum?: BookingsSumAggregateInputType;
    _min?: BookingsMinAggregateInputType;
    _max?: BookingsMaxAggregateInputType;
};
export type BookingsGroupByOutputType = {
    id: bigint;
    created_at: Date | null;
    updated_at: Date | null;
    _count: BookingsCountAggregateOutputType | null;
    _avg: BookingsAvgAggregateOutputType | null;
    _sum: BookingsSumAggregateOutputType | null;
    _min: BookingsMinAggregateOutputType | null;
    _max: BookingsMaxAggregateOutputType | null;
};
type GetBookingsGroupByPayload<T extends bookingsGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<BookingsGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof BookingsGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], BookingsGroupByOutputType[P]> : Prisma.GetScalarType<T[P], BookingsGroupByOutputType[P]>;
}>>;
export type bookingsWhereInput = {
    AND?: Prisma.bookingsWhereInput | Prisma.bookingsWhereInput[];
    OR?: Prisma.bookingsWhereInput[];
    NOT?: Prisma.bookingsWhereInput | Prisma.bookingsWhereInput[];
    id?: Prisma.BigIntFilter<"bookings"> | bigint | number;
    created_at?: Prisma.DateTimeNullableFilter<"bookings"> | Date | string | null;
    updated_at?: Prisma.DateTimeNullableFilter<"bookings"> | Date | string | null;
};
export type bookingsOrderByWithRelationInput = {
    id?: Prisma.SortOrder;
    created_at?: Prisma.SortOrderInput | Prisma.SortOrder;
    updated_at?: Prisma.SortOrderInput | Prisma.SortOrder;
};
export type bookingsWhereUniqueInput = Prisma.AtLeast<{
    id?: bigint | number;
    AND?: Prisma.bookingsWhereInput | Prisma.bookingsWhereInput[];
    OR?: Prisma.bookingsWhereInput[];
    NOT?: Prisma.bookingsWhereInput | Prisma.bookingsWhereInput[];
    created_at?: Prisma.DateTimeNullableFilter<"bookings"> | Date | string | null;
    updated_at?: Prisma.DateTimeNullableFilter<"bookings"> | Date | string | null;
}, "id">;
export type bookingsOrderByWithAggregationInput = {
    id?: Prisma.SortOrder;
    created_at?: Prisma.SortOrderInput | Prisma.SortOrder;
    updated_at?: Prisma.SortOrderInput | Prisma.SortOrder;
    _count?: Prisma.bookingsCountOrderByAggregateInput;
    _avg?: Prisma.bookingsAvgOrderByAggregateInput;
    _max?: Prisma.bookingsMaxOrderByAggregateInput;
    _min?: Prisma.bookingsMinOrderByAggregateInput;
    _sum?: Prisma.bookingsSumOrderByAggregateInput;
};
export type bookingsScalarWhereWithAggregatesInput = {
    AND?: Prisma.bookingsScalarWhereWithAggregatesInput | Prisma.bookingsScalarWhereWithAggregatesInput[];
    OR?: Prisma.bookingsScalarWhereWithAggregatesInput[];
    NOT?: Prisma.bookingsScalarWhereWithAggregatesInput | Prisma.bookingsScalarWhereWithAggregatesInput[];
    id?: Prisma.BigIntWithAggregatesFilter<"bookings"> | bigint | number;
    created_at?: Prisma.DateTimeNullableWithAggregatesFilter<"bookings"> | Date | string | null;
    updated_at?: Prisma.DateTimeNullableWithAggregatesFilter<"bookings"> | Date | string | null;
};
export type bookingsCreateInput = {
    id?: bigint | number;
    created_at?: Date | string | null;
    updated_at?: Date | string | null;
};
export type bookingsUncheckedCreateInput = {
    id?: bigint | number;
    created_at?: Date | string | null;
    updated_at?: Date | string | null;
};
export type bookingsUpdateInput = {
    id?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    created_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    updated_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
};
export type bookingsUncheckedUpdateInput = {
    id?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    created_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    updated_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
};
export type bookingsCreateManyInput = {
    id?: bigint | number;
    created_at?: Date | string | null;
    updated_at?: Date | string | null;
};
export type bookingsUpdateManyMutationInput = {
    id?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    created_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    updated_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
};
export type bookingsUncheckedUpdateManyInput = {
    id?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    created_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    updated_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
};
export type bookingsCountOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    created_at?: Prisma.SortOrder;
    updated_at?: Prisma.SortOrder;
};
export type bookingsAvgOrderByAggregateInput = {
    id?: Prisma.SortOrder;
};
export type bookingsMaxOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    created_at?: Prisma.SortOrder;
    updated_at?: Prisma.SortOrder;
};
export type bookingsMinOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    created_at?: Prisma.SortOrder;
    updated_at?: Prisma.SortOrder;
};
export type bookingsSumOrderByAggregateInput = {
    id?: Prisma.SortOrder;
};
export type bookingsSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    created_at?: boolean;
    updated_at?: boolean;
}, ExtArgs["result"]["bookings"]>;
export type bookingsSelectScalar = {
    id?: boolean;
    created_at?: boolean;
    updated_at?: boolean;
};
export type bookingsOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "created_at" | "updated_at", ExtArgs["result"]["bookings"]>;
export type $bookingsPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "bookings";
    objects: {};
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id: bigint;
        created_at: Date | null;
        updated_at: Date | null;
    }, ExtArgs["result"]["bookings"]>;
    composites: {};
};
export type bookingsGetPayload<S extends boolean | null | undefined | bookingsDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$bookingsPayload, S>;
export type bookingsCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<bookingsFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: BookingsCountAggregateInputType | true;
};
export interface bookingsDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['bookings'];
        meta: {
            name: 'bookings';
        };
    };
    findUnique<T extends bookingsFindUniqueArgs>(args: Prisma.SelectSubset<T, bookingsFindUniqueArgs<ExtArgs>>): Prisma.Prisma__bookingsClient<runtime.Types.Result.GetResult<Prisma.$bookingsPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findUniqueOrThrow<T extends bookingsFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, bookingsFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__bookingsClient<runtime.Types.Result.GetResult<Prisma.$bookingsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findFirst<T extends bookingsFindFirstArgs>(args?: Prisma.SelectSubset<T, bookingsFindFirstArgs<ExtArgs>>): Prisma.Prisma__bookingsClient<runtime.Types.Result.GetResult<Prisma.$bookingsPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findFirstOrThrow<T extends bookingsFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, bookingsFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__bookingsClient<runtime.Types.Result.GetResult<Prisma.$bookingsPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findMany<T extends bookingsFindManyArgs>(args?: Prisma.SelectSubset<T, bookingsFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$bookingsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    create<T extends bookingsCreateArgs>(args: Prisma.SelectSubset<T, bookingsCreateArgs<ExtArgs>>): Prisma.Prisma__bookingsClient<runtime.Types.Result.GetResult<Prisma.$bookingsPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    createMany<T extends bookingsCreateManyArgs>(args?: Prisma.SelectSubset<T, bookingsCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    delete<T extends bookingsDeleteArgs>(args: Prisma.SelectSubset<T, bookingsDeleteArgs<ExtArgs>>): Prisma.Prisma__bookingsClient<runtime.Types.Result.GetResult<Prisma.$bookingsPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    update<T extends bookingsUpdateArgs>(args: Prisma.SelectSubset<T, bookingsUpdateArgs<ExtArgs>>): Prisma.Prisma__bookingsClient<runtime.Types.Result.GetResult<Prisma.$bookingsPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    deleteMany<T extends bookingsDeleteManyArgs>(args?: Prisma.SelectSubset<T, bookingsDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateMany<T extends bookingsUpdateManyArgs>(args: Prisma.SelectSubset<T, bookingsUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    upsert<T extends bookingsUpsertArgs>(args: Prisma.SelectSubset<T, bookingsUpsertArgs<ExtArgs>>): Prisma.Prisma__bookingsClient<runtime.Types.Result.GetResult<Prisma.$bookingsPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    count<T extends bookingsCountArgs>(args?: Prisma.Subset<T, bookingsCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], BookingsCountAggregateOutputType> : number>;
    aggregate<T extends BookingsAggregateArgs>(args: Prisma.Subset<T, BookingsAggregateArgs>): Prisma.PrismaPromise<GetBookingsAggregateType<T>>;
    groupBy<T extends bookingsGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: bookingsGroupByArgs['orderBy'];
    } : {
        orderBy?: bookingsGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, bookingsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetBookingsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    readonly fields: bookingsFieldRefs;
}
export interface Prisma__bookingsClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): runtime.Types.Utils.JsPromise<TResult1 | TResult2>;
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): runtime.Types.Utils.JsPromise<T | TResult>;
    finally(onfinally?: (() => void) | undefined | null): runtime.Types.Utils.JsPromise<T>;
}
export interface bookingsFieldRefs {
    readonly id: Prisma.FieldRef<"bookings", 'BigInt'>;
    readonly created_at: Prisma.FieldRef<"bookings", 'DateTime'>;
    readonly updated_at: Prisma.FieldRef<"bookings", 'DateTime'>;
}
export type bookingsFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.bookingsSelect<ExtArgs> | null;
    omit?: Prisma.bookingsOmit<ExtArgs> | null;
    where: Prisma.bookingsWhereUniqueInput;
};
export type bookingsFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.bookingsSelect<ExtArgs> | null;
    omit?: Prisma.bookingsOmit<ExtArgs> | null;
    where: Prisma.bookingsWhereUniqueInput;
};
export type bookingsFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.bookingsSelect<ExtArgs> | null;
    omit?: Prisma.bookingsOmit<ExtArgs> | null;
    where?: Prisma.bookingsWhereInput;
    orderBy?: Prisma.bookingsOrderByWithRelationInput | Prisma.bookingsOrderByWithRelationInput[];
    cursor?: Prisma.bookingsWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.BookingsScalarFieldEnum | Prisma.BookingsScalarFieldEnum[];
};
export type bookingsFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.bookingsSelect<ExtArgs> | null;
    omit?: Prisma.bookingsOmit<ExtArgs> | null;
    where?: Prisma.bookingsWhereInput;
    orderBy?: Prisma.bookingsOrderByWithRelationInput | Prisma.bookingsOrderByWithRelationInput[];
    cursor?: Prisma.bookingsWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.BookingsScalarFieldEnum | Prisma.BookingsScalarFieldEnum[];
};
export type bookingsFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.bookingsSelect<ExtArgs> | null;
    omit?: Prisma.bookingsOmit<ExtArgs> | null;
    where?: Prisma.bookingsWhereInput;
    orderBy?: Prisma.bookingsOrderByWithRelationInput | Prisma.bookingsOrderByWithRelationInput[];
    cursor?: Prisma.bookingsWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.BookingsScalarFieldEnum | Prisma.BookingsScalarFieldEnum[];
};
export type bookingsCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.bookingsSelect<ExtArgs> | null;
    omit?: Prisma.bookingsOmit<ExtArgs> | null;
    data?: Prisma.XOR<Prisma.bookingsCreateInput, Prisma.bookingsUncheckedCreateInput>;
};
export type bookingsCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.bookingsCreateManyInput | Prisma.bookingsCreateManyInput[];
    skipDuplicates?: boolean;
};
export type bookingsUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.bookingsSelect<ExtArgs> | null;
    omit?: Prisma.bookingsOmit<ExtArgs> | null;
    data: Prisma.XOR<Prisma.bookingsUpdateInput, Prisma.bookingsUncheckedUpdateInput>;
    where: Prisma.bookingsWhereUniqueInput;
};
export type bookingsUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.XOR<Prisma.bookingsUpdateManyMutationInput, Prisma.bookingsUncheckedUpdateManyInput>;
    where?: Prisma.bookingsWhereInput;
    limit?: number;
};
export type bookingsUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.bookingsSelect<ExtArgs> | null;
    omit?: Prisma.bookingsOmit<ExtArgs> | null;
    where: Prisma.bookingsWhereUniqueInput;
    create: Prisma.XOR<Prisma.bookingsCreateInput, Prisma.bookingsUncheckedCreateInput>;
    update: Prisma.XOR<Prisma.bookingsUpdateInput, Prisma.bookingsUncheckedUpdateInput>;
};
export type bookingsDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.bookingsSelect<ExtArgs> | null;
    omit?: Prisma.bookingsOmit<ExtArgs> | null;
    where: Prisma.bookingsWhereUniqueInput;
};
export type bookingsDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.bookingsWhereInput;
    limit?: number;
};
export type bookingsDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.bookingsSelect<ExtArgs> | null;
    omit?: Prisma.bookingsOmit<ExtArgs> | null;
};
export {};
