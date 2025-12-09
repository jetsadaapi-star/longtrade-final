import type * as runtime from "@prisma/client/runtime/client";
import type * as $Enums from "../enums.js";
import type * as Prisma from "../internal/prismaNamespace.js";
export type email_templatesModel = runtime.Types.Result.DefaultSelection<Prisma.$email_templatesPayload>;
export type AggregateEmail_templates = {
    _count: Email_templatesCountAggregateOutputType | null;
    _avg: Email_templatesAvgAggregateOutputType | null;
    _sum: Email_templatesSumAggregateOutputType | null;
    _min: Email_templatesMinAggregateOutputType | null;
    _max: Email_templatesMaxAggregateOutputType | null;
};
export type Email_templatesAvgAggregateOutputType = {
    id: number | null;
};
export type Email_templatesSumAggregateOutputType = {
    id: bigint | null;
};
export type Email_templatesMinAggregateOutputType = {
    id: bigint | null;
    name: string | null;
    category: $Enums.email_templates_category | null;
    subject: string | null;
    html_content: string | null;
    plain_text_content: string | null;
    thumbnail_url: string | null;
    is_active: boolean | null;
    is_default: boolean | null;
    created_at: Date | null;
    updated_at: Date | null;
    deleted_at: Date | null;
};
export type Email_templatesMaxAggregateOutputType = {
    id: bigint | null;
    name: string | null;
    category: $Enums.email_templates_category | null;
    subject: string | null;
    html_content: string | null;
    plain_text_content: string | null;
    thumbnail_url: string | null;
    is_active: boolean | null;
    is_default: boolean | null;
    created_at: Date | null;
    updated_at: Date | null;
    deleted_at: Date | null;
};
export type Email_templatesCountAggregateOutputType = {
    id: number;
    name: number;
    category: number;
    subject: number;
    html_content: number;
    plain_text_content: number;
    available_variables: number;
    thumbnail_url: number;
    is_active: number;
    is_default: number;
    created_at: number;
    updated_at: number;
    deleted_at: number;
    _all: number;
};
export type Email_templatesAvgAggregateInputType = {
    id?: true;
};
export type Email_templatesSumAggregateInputType = {
    id?: true;
};
export type Email_templatesMinAggregateInputType = {
    id?: true;
    name?: true;
    category?: true;
    subject?: true;
    html_content?: true;
    plain_text_content?: true;
    thumbnail_url?: true;
    is_active?: true;
    is_default?: true;
    created_at?: true;
    updated_at?: true;
    deleted_at?: true;
};
export type Email_templatesMaxAggregateInputType = {
    id?: true;
    name?: true;
    category?: true;
    subject?: true;
    html_content?: true;
    plain_text_content?: true;
    thumbnail_url?: true;
    is_active?: true;
    is_default?: true;
    created_at?: true;
    updated_at?: true;
    deleted_at?: true;
};
export type Email_templatesCountAggregateInputType = {
    id?: true;
    name?: true;
    category?: true;
    subject?: true;
    html_content?: true;
    plain_text_content?: true;
    available_variables?: true;
    thumbnail_url?: true;
    is_active?: true;
    is_default?: true;
    created_at?: true;
    updated_at?: true;
    deleted_at?: true;
    _all?: true;
};
export type Email_templatesAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.email_templatesWhereInput;
    orderBy?: Prisma.email_templatesOrderByWithRelationInput | Prisma.email_templatesOrderByWithRelationInput[];
    cursor?: Prisma.email_templatesWhereUniqueInput;
    take?: number;
    skip?: number;
    _count?: true | Email_templatesCountAggregateInputType;
    _avg?: Email_templatesAvgAggregateInputType;
    _sum?: Email_templatesSumAggregateInputType;
    _min?: Email_templatesMinAggregateInputType;
    _max?: Email_templatesMaxAggregateInputType;
};
export type GetEmail_templatesAggregateType<T extends Email_templatesAggregateArgs> = {
    [P in keyof T & keyof AggregateEmail_templates]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateEmail_templates[P]> : Prisma.GetScalarType<T[P], AggregateEmail_templates[P]>;
};
export type email_templatesGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.email_templatesWhereInput;
    orderBy?: Prisma.email_templatesOrderByWithAggregationInput | Prisma.email_templatesOrderByWithAggregationInput[];
    by: Prisma.Email_templatesScalarFieldEnum[] | Prisma.Email_templatesScalarFieldEnum;
    having?: Prisma.email_templatesScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: Email_templatesCountAggregateInputType | true;
    _avg?: Email_templatesAvgAggregateInputType;
    _sum?: Email_templatesSumAggregateInputType;
    _min?: Email_templatesMinAggregateInputType;
    _max?: Email_templatesMaxAggregateInputType;
};
export type Email_templatesGroupByOutputType = {
    id: bigint;
    name: string;
    category: $Enums.email_templates_category;
    subject: string | null;
    html_content: string;
    plain_text_content: string | null;
    available_variables: runtime.JsonValue | null;
    thumbnail_url: string | null;
    is_active: boolean;
    is_default: boolean;
    created_at: Date | null;
    updated_at: Date | null;
    deleted_at: Date | null;
    _count: Email_templatesCountAggregateOutputType | null;
    _avg: Email_templatesAvgAggregateOutputType | null;
    _sum: Email_templatesSumAggregateOutputType | null;
    _min: Email_templatesMinAggregateOutputType | null;
    _max: Email_templatesMaxAggregateOutputType | null;
};
type GetEmail_templatesGroupByPayload<T extends email_templatesGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<Email_templatesGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof Email_templatesGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], Email_templatesGroupByOutputType[P]> : Prisma.GetScalarType<T[P], Email_templatesGroupByOutputType[P]>;
}>>;
export type email_templatesWhereInput = {
    AND?: Prisma.email_templatesWhereInput | Prisma.email_templatesWhereInput[];
    OR?: Prisma.email_templatesWhereInput[];
    NOT?: Prisma.email_templatesWhereInput | Prisma.email_templatesWhereInput[];
    id?: Prisma.BigIntFilter<"email_templates"> | bigint | number;
    name?: Prisma.StringFilter<"email_templates"> | string;
    category?: Prisma.Enumemail_templates_categoryFilter<"email_templates"> | $Enums.email_templates_category;
    subject?: Prisma.StringNullableFilter<"email_templates"> | string | null;
    html_content?: Prisma.StringFilter<"email_templates"> | string;
    plain_text_content?: Prisma.StringNullableFilter<"email_templates"> | string | null;
    available_variables?: Prisma.JsonNullableFilter<"email_templates">;
    thumbnail_url?: Prisma.StringNullableFilter<"email_templates"> | string | null;
    is_active?: Prisma.BoolFilter<"email_templates"> | boolean;
    is_default?: Prisma.BoolFilter<"email_templates"> | boolean;
    created_at?: Prisma.DateTimeNullableFilter<"email_templates"> | Date | string | null;
    updated_at?: Prisma.DateTimeNullableFilter<"email_templates"> | Date | string | null;
    deleted_at?: Prisma.DateTimeNullableFilter<"email_templates"> | Date | string | null;
};
export type email_templatesOrderByWithRelationInput = {
    id?: Prisma.SortOrder;
    name?: Prisma.SortOrder;
    category?: Prisma.SortOrder;
    subject?: Prisma.SortOrderInput | Prisma.SortOrder;
    html_content?: Prisma.SortOrder;
    plain_text_content?: Prisma.SortOrderInput | Prisma.SortOrder;
    available_variables?: Prisma.SortOrderInput | Prisma.SortOrder;
    thumbnail_url?: Prisma.SortOrderInput | Prisma.SortOrder;
    is_active?: Prisma.SortOrder;
    is_default?: Prisma.SortOrder;
    created_at?: Prisma.SortOrderInput | Prisma.SortOrder;
    updated_at?: Prisma.SortOrderInput | Prisma.SortOrder;
    deleted_at?: Prisma.SortOrderInput | Prisma.SortOrder;
    _relevance?: Prisma.email_templatesOrderByRelevanceInput;
};
export type email_templatesWhereUniqueInput = Prisma.AtLeast<{
    id?: bigint | number;
    AND?: Prisma.email_templatesWhereInput | Prisma.email_templatesWhereInput[];
    OR?: Prisma.email_templatesWhereInput[];
    NOT?: Prisma.email_templatesWhereInput | Prisma.email_templatesWhereInput[];
    name?: Prisma.StringFilter<"email_templates"> | string;
    category?: Prisma.Enumemail_templates_categoryFilter<"email_templates"> | $Enums.email_templates_category;
    subject?: Prisma.StringNullableFilter<"email_templates"> | string | null;
    html_content?: Prisma.StringFilter<"email_templates"> | string;
    plain_text_content?: Prisma.StringNullableFilter<"email_templates"> | string | null;
    available_variables?: Prisma.JsonNullableFilter<"email_templates">;
    thumbnail_url?: Prisma.StringNullableFilter<"email_templates"> | string | null;
    is_active?: Prisma.BoolFilter<"email_templates"> | boolean;
    is_default?: Prisma.BoolFilter<"email_templates"> | boolean;
    created_at?: Prisma.DateTimeNullableFilter<"email_templates"> | Date | string | null;
    updated_at?: Prisma.DateTimeNullableFilter<"email_templates"> | Date | string | null;
    deleted_at?: Prisma.DateTimeNullableFilter<"email_templates"> | Date | string | null;
}, "id">;
export type email_templatesOrderByWithAggregationInput = {
    id?: Prisma.SortOrder;
    name?: Prisma.SortOrder;
    category?: Prisma.SortOrder;
    subject?: Prisma.SortOrderInput | Prisma.SortOrder;
    html_content?: Prisma.SortOrder;
    plain_text_content?: Prisma.SortOrderInput | Prisma.SortOrder;
    available_variables?: Prisma.SortOrderInput | Prisma.SortOrder;
    thumbnail_url?: Prisma.SortOrderInput | Prisma.SortOrder;
    is_active?: Prisma.SortOrder;
    is_default?: Prisma.SortOrder;
    created_at?: Prisma.SortOrderInput | Prisma.SortOrder;
    updated_at?: Prisma.SortOrderInput | Prisma.SortOrder;
    deleted_at?: Prisma.SortOrderInput | Prisma.SortOrder;
    _count?: Prisma.email_templatesCountOrderByAggregateInput;
    _avg?: Prisma.email_templatesAvgOrderByAggregateInput;
    _max?: Prisma.email_templatesMaxOrderByAggregateInput;
    _min?: Prisma.email_templatesMinOrderByAggregateInput;
    _sum?: Prisma.email_templatesSumOrderByAggregateInput;
};
export type email_templatesScalarWhereWithAggregatesInput = {
    AND?: Prisma.email_templatesScalarWhereWithAggregatesInput | Prisma.email_templatesScalarWhereWithAggregatesInput[];
    OR?: Prisma.email_templatesScalarWhereWithAggregatesInput[];
    NOT?: Prisma.email_templatesScalarWhereWithAggregatesInput | Prisma.email_templatesScalarWhereWithAggregatesInput[];
    id?: Prisma.BigIntWithAggregatesFilter<"email_templates"> | bigint | number;
    name?: Prisma.StringWithAggregatesFilter<"email_templates"> | string;
    category?: Prisma.Enumemail_templates_categoryWithAggregatesFilter<"email_templates"> | $Enums.email_templates_category;
    subject?: Prisma.StringNullableWithAggregatesFilter<"email_templates"> | string | null;
    html_content?: Prisma.StringWithAggregatesFilter<"email_templates"> | string;
    plain_text_content?: Prisma.StringNullableWithAggregatesFilter<"email_templates"> | string | null;
    available_variables?: Prisma.JsonNullableWithAggregatesFilter<"email_templates">;
    thumbnail_url?: Prisma.StringNullableWithAggregatesFilter<"email_templates"> | string | null;
    is_active?: Prisma.BoolWithAggregatesFilter<"email_templates"> | boolean;
    is_default?: Prisma.BoolWithAggregatesFilter<"email_templates"> | boolean;
    created_at?: Prisma.DateTimeNullableWithAggregatesFilter<"email_templates"> | Date | string | null;
    updated_at?: Prisma.DateTimeNullableWithAggregatesFilter<"email_templates"> | Date | string | null;
    deleted_at?: Prisma.DateTimeNullableWithAggregatesFilter<"email_templates"> | Date | string | null;
};
export type email_templatesCreateInput = {
    id?: bigint | number;
    name: string;
    category: $Enums.email_templates_category;
    subject?: string | null;
    html_content: string;
    plain_text_content?: string | null;
    available_variables?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    thumbnail_url?: string | null;
    is_active?: boolean;
    is_default?: boolean;
    created_at?: Date | string | null;
    updated_at?: Date | string | null;
    deleted_at?: Date | string | null;
};
export type email_templatesUncheckedCreateInput = {
    id?: bigint | number;
    name: string;
    category: $Enums.email_templates_category;
    subject?: string | null;
    html_content: string;
    plain_text_content?: string | null;
    available_variables?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    thumbnail_url?: string | null;
    is_active?: boolean;
    is_default?: boolean;
    created_at?: Date | string | null;
    updated_at?: Date | string | null;
    deleted_at?: Date | string | null;
};
export type email_templatesUpdateInput = {
    id?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    category?: Prisma.Enumemail_templates_categoryFieldUpdateOperationsInput | $Enums.email_templates_category;
    subject?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    html_content?: Prisma.StringFieldUpdateOperationsInput | string;
    plain_text_content?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    available_variables?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    thumbnail_url?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    is_active?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    is_default?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    created_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    updated_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    deleted_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
};
export type email_templatesUncheckedUpdateInput = {
    id?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    category?: Prisma.Enumemail_templates_categoryFieldUpdateOperationsInput | $Enums.email_templates_category;
    subject?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    html_content?: Prisma.StringFieldUpdateOperationsInput | string;
    plain_text_content?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    available_variables?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    thumbnail_url?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    is_active?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    is_default?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    created_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    updated_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    deleted_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
};
export type email_templatesCreateManyInput = {
    id?: bigint | number;
    name: string;
    category: $Enums.email_templates_category;
    subject?: string | null;
    html_content: string;
    plain_text_content?: string | null;
    available_variables?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    thumbnail_url?: string | null;
    is_active?: boolean;
    is_default?: boolean;
    created_at?: Date | string | null;
    updated_at?: Date | string | null;
    deleted_at?: Date | string | null;
};
export type email_templatesUpdateManyMutationInput = {
    id?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    category?: Prisma.Enumemail_templates_categoryFieldUpdateOperationsInput | $Enums.email_templates_category;
    subject?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    html_content?: Prisma.StringFieldUpdateOperationsInput | string;
    plain_text_content?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    available_variables?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    thumbnail_url?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    is_active?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    is_default?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    created_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    updated_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    deleted_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
};
export type email_templatesUncheckedUpdateManyInput = {
    id?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    category?: Prisma.Enumemail_templates_categoryFieldUpdateOperationsInput | $Enums.email_templates_category;
    subject?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    html_content?: Prisma.StringFieldUpdateOperationsInput | string;
    plain_text_content?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    available_variables?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    thumbnail_url?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    is_active?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    is_default?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    created_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    updated_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    deleted_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
};
export type email_templatesOrderByRelevanceInput = {
    fields: Prisma.email_templatesOrderByRelevanceFieldEnum | Prisma.email_templatesOrderByRelevanceFieldEnum[];
    sort: Prisma.SortOrder;
    search: string;
};
export type email_templatesCountOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    name?: Prisma.SortOrder;
    category?: Prisma.SortOrder;
    subject?: Prisma.SortOrder;
    html_content?: Prisma.SortOrder;
    plain_text_content?: Prisma.SortOrder;
    available_variables?: Prisma.SortOrder;
    thumbnail_url?: Prisma.SortOrder;
    is_active?: Prisma.SortOrder;
    is_default?: Prisma.SortOrder;
    created_at?: Prisma.SortOrder;
    updated_at?: Prisma.SortOrder;
    deleted_at?: Prisma.SortOrder;
};
export type email_templatesAvgOrderByAggregateInput = {
    id?: Prisma.SortOrder;
};
export type email_templatesMaxOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    name?: Prisma.SortOrder;
    category?: Prisma.SortOrder;
    subject?: Prisma.SortOrder;
    html_content?: Prisma.SortOrder;
    plain_text_content?: Prisma.SortOrder;
    thumbnail_url?: Prisma.SortOrder;
    is_active?: Prisma.SortOrder;
    is_default?: Prisma.SortOrder;
    created_at?: Prisma.SortOrder;
    updated_at?: Prisma.SortOrder;
    deleted_at?: Prisma.SortOrder;
};
export type email_templatesMinOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    name?: Prisma.SortOrder;
    category?: Prisma.SortOrder;
    subject?: Prisma.SortOrder;
    html_content?: Prisma.SortOrder;
    plain_text_content?: Prisma.SortOrder;
    thumbnail_url?: Prisma.SortOrder;
    is_active?: Prisma.SortOrder;
    is_default?: Prisma.SortOrder;
    created_at?: Prisma.SortOrder;
    updated_at?: Prisma.SortOrder;
    deleted_at?: Prisma.SortOrder;
};
export type email_templatesSumOrderByAggregateInput = {
    id?: Prisma.SortOrder;
};
export type Enumemail_templates_categoryFieldUpdateOperationsInput = {
    set?: $Enums.email_templates_category;
};
export type email_templatesSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    name?: boolean;
    category?: boolean;
    subject?: boolean;
    html_content?: boolean;
    plain_text_content?: boolean;
    available_variables?: boolean;
    thumbnail_url?: boolean;
    is_active?: boolean;
    is_default?: boolean;
    created_at?: boolean;
    updated_at?: boolean;
    deleted_at?: boolean;
}, ExtArgs["result"]["email_templates"]>;
export type email_templatesSelectScalar = {
    id?: boolean;
    name?: boolean;
    category?: boolean;
    subject?: boolean;
    html_content?: boolean;
    plain_text_content?: boolean;
    available_variables?: boolean;
    thumbnail_url?: boolean;
    is_active?: boolean;
    is_default?: boolean;
    created_at?: boolean;
    updated_at?: boolean;
    deleted_at?: boolean;
};
export type email_templatesOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "name" | "category" | "subject" | "html_content" | "plain_text_content" | "available_variables" | "thumbnail_url" | "is_active" | "is_default" | "created_at" | "updated_at" | "deleted_at", ExtArgs["result"]["email_templates"]>;
export type $email_templatesPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "email_templates";
    objects: {};
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id: bigint;
        name: string;
        category: $Enums.email_templates_category;
        subject: string | null;
        html_content: string;
        plain_text_content: string | null;
        available_variables: runtime.JsonValue | null;
        thumbnail_url: string | null;
        is_active: boolean;
        is_default: boolean;
        created_at: Date | null;
        updated_at: Date | null;
        deleted_at: Date | null;
    }, ExtArgs["result"]["email_templates"]>;
    composites: {};
};
export type email_templatesGetPayload<S extends boolean | null | undefined | email_templatesDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$email_templatesPayload, S>;
export type email_templatesCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<email_templatesFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: Email_templatesCountAggregateInputType | true;
};
export interface email_templatesDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['email_templates'];
        meta: {
            name: 'email_templates';
        };
    };
    findUnique<T extends email_templatesFindUniqueArgs>(args: Prisma.SelectSubset<T, email_templatesFindUniqueArgs<ExtArgs>>): Prisma.Prisma__email_templatesClient<runtime.Types.Result.GetResult<Prisma.$email_templatesPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findUniqueOrThrow<T extends email_templatesFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, email_templatesFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__email_templatesClient<runtime.Types.Result.GetResult<Prisma.$email_templatesPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findFirst<T extends email_templatesFindFirstArgs>(args?: Prisma.SelectSubset<T, email_templatesFindFirstArgs<ExtArgs>>): Prisma.Prisma__email_templatesClient<runtime.Types.Result.GetResult<Prisma.$email_templatesPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findFirstOrThrow<T extends email_templatesFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, email_templatesFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__email_templatesClient<runtime.Types.Result.GetResult<Prisma.$email_templatesPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findMany<T extends email_templatesFindManyArgs>(args?: Prisma.SelectSubset<T, email_templatesFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$email_templatesPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    create<T extends email_templatesCreateArgs>(args: Prisma.SelectSubset<T, email_templatesCreateArgs<ExtArgs>>): Prisma.Prisma__email_templatesClient<runtime.Types.Result.GetResult<Prisma.$email_templatesPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    createMany<T extends email_templatesCreateManyArgs>(args?: Prisma.SelectSubset<T, email_templatesCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    delete<T extends email_templatesDeleteArgs>(args: Prisma.SelectSubset<T, email_templatesDeleteArgs<ExtArgs>>): Prisma.Prisma__email_templatesClient<runtime.Types.Result.GetResult<Prisma.$email_templatesPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    update<T extends email_templatesUpdateArgs>(args: Prisma.SelectSubset<T, email_templatesUpdateArgs<ExtArgs>>): Prisma.Prisma__email_templatesClient<runtime.Types.Result.GetResult<Prisma.$email_templatesPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    deleteMany<T extends email_templatesDeleteManyArgs>(args?: Prisma.SelectSubset<T, email_templatesDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateMany<T extends email_templatesUpdateManyArgs>(args: Prisma.SelectSubset<T, email_templatesUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    upsert<T extends email_templatesUpsertArgs>(args: Prisma.SelectSubset<T, email_templatesUpsertArgs<ExtArgs>>): Prisma.Prisma__email_templatesClient<runtime.Types.Result.GetResult<Prisma.$email_templatesPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    count<T extends email_templatesCountArgs>(args?: Prisma.Subset<T, email_templatesCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], Email_templatesCountAggregateOutputType> : number>;
    aggregate<T extends Email_templatesAggregateArgs>(args: Prisma.Subset<T, Email_templatesAggregateArgs>): Prisma.PrismaPromise<GetEmail_templatesAggregateType<T>>;
    groupBy<T extends email_templatesGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: email_templatesGroupByArgs['orderBy'];
    } : {
        orderBy?: email_templatesGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, email_templatesGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetEmail_templatesGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    readonly fields: email_templatesFieldRefs;
}
export interface Prisma__email_templatesClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): runtime.Types.Utils.JsPromise<TResult1 | TResult2>;
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): runtime.Types.Utils.JsPromise<T | TResult>;
    finally(onfinally?: (() => void) | undefined | null): runtime.Types.Utils.JsPromise<T>;
}
export interface email_templatesFieldRefs {
    readonly id: Prisma.FieldRef<"email_templates", 'BigInt'>;
    readonly name: Prisma.FieldRef<"email_templates", 'String'>;
    readonly category: Prisma.FieldRef<"email_templates", 'email_templates_category'>;
    readonly subject: Prisma.FieldRef<"email_templates", 'String'>;
    readonly html_content: Prisma.FieldRef<"email_templates", 'String'>;
    readonly plain_text_content: Prisma.FieldRef<"email_templates", 'String'>;
    readonly available_variables: Prisma.FieldRef<"email_templates", 'Json'>;
    readonly thumbnail_url: Prisma.FieldRef<"email_templates", 'String'>;
    readonly is_active: Prisma.FieldRef<"email_templates", 'Boolean'>;
    readonly is_default: Prisma.FieldRef<"email_templates", 'Boolean'>;
    readonly created_at: Prisma.FieldRef<"email_templates", 'DateTime'>;
    readonly updated_at: Prisma.FieldRef<"email_templates", 'DateTime'>;
    readonly deleted_at: Prisma.FieldRef<"email_templates", 'DateTime'>;
}
export type email_templatesFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.email_templatesSelect<ExtArgs> | null;
    omit?: Prisma.email_templatesOmit<ExtArgs> | null;
    where: Prisma.email_templatesWhereUniqueInput;
};
export type email_templatesFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.email_templatesSelect<ExtArgs> | null;
    omit?: Prisma.email_templatesOmit<ExtArgs> | null;
    where: Prisma.email_templatesWhereUniqueInput;
};
export type email_templatesFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.email_templatesSelect<ExtArgs> | null;
    omit?: Prisma.email_templatesOmit<ExtArgs> | null;
    where?: Prisma.email_templatesWhereInput;
    orderBy?: Prisma.email_templatesOrderByWithRelationInput | Prisma.email_templatesOrderByWithRelationInput[];
    cursor?: Prisma.email_templatesWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.Email_templatesScalarFieldEnum | Prisma.Email_templatesScalarFieldEnum[];
};
export type email_templatesFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.email_templatesSelect<ExtArgs> | null;
    omit?: Prisma.email_templatesOmit<ExtArgs> | null;
    where?: Prisma.email_templatesWhereInput;
    orderBy?: Prisma.email_templatesOrderByWithRelationInput | Prisma.email_templatesOrderByWithRelationInput[];
    cursor?: Prisma.email_templatesWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.Email_templatesScalarFieldEnum | Prisma.Email_templatesScalarFieldEnum[];
};
export type email_templatesFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.email_templatesSelect<ExtArgs> | null;
    omit?: Prisma.email_templatesOmit<ExtArgs> | null;
    where?: Prisma.email_templatesWhereInput;
    orderBy?: Prisma.email_templatesOrderByWithRelationInput | Prisma.email_templatesOrderByWithRelationInput[];
    cursor?: Prisma.email_templatesWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.Email_templatesScalarFieldEnum | Prisma.Email_templatesScalarFieldEnum[];
};
export type email_templatesCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.email_templatesSelect<ExtArgs> | null;
    omit?: Prisma.email_templatesOmit<ExtArgs> | null;
    data: Prisma.XOR<Prisma.email_templatesCreateInput, Prisma.email_templatesUncheckedCreateInput>;
};
export type email_templatesCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.email_templatesCreateManyInput | Prisma.email_templatesCreateManyInput[];
    skipDuplicates?: boolean;
};
export type email_templatesUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.email_templatesSelect<ExtArgs> | null;
    omit?: Prisma.email_templatesOmit<ExtArgs> | null;
    data: Prisma.XOR<Prisma.email_templatesUpdateInput, Prisma.email_templatesUncheckedUpdateInput>;
    where: Prisma.email_templatesWhereUniqueInput;
};
export type email_templatesUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.XOR<Prisma.email_templatesUpdateManyMutationInput, Prisma.email_templatesUncheckedUpdateManyInput>;
    where?: Prisma.email_templatesWhereInput;
    limit?: number;
};
export type email_templatesUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.email_templatesSelect<ExtArgs> | null;
    omit?: Prisma.email_templatesOmit<ExtArgs> | null;
    where: Prisma.email_templatesWhereUniqueInput;
    create: Prisma.XOR<Prisma.email_templatesCreateInput, Prisma.email_templatesUncheckedCreateInput>;
    update: Prisma.XOR<Prisma.email_templatesUpdateInput, Prisma.email_templatesUncheckedUpdateInput>;
};
export type email_templatesDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.email_templatesSelect<ExtArgs> | null;
    omit?: Prisma.email_templatesOmit<ExtArgs> | null;
    where: Prisma.email_templatesWhereUniqueInput;
};
export type email_templatesDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.email_templatesWhereInput;
    limit?: number;
};
export type email_templatesDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.email_templatesSelect<ExtArgs> | null;
    omit?: Prisma.email_templatesOmit<ExtArgs> | null;
};
export {};
