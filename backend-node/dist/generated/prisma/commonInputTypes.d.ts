import type * as runtime from "@prisma/client/runtime/client";
import * as $Enums from "./enums.js";
import type * as Prisma from "./internal/prismaNamespace.js";
export type BigIntFilter<$PrismaModel = never> = {
    equals?: bigint | number | Prisma.BigIntFieldRefInput<$PrismaModel>;
    in?: bigint[] | number[];
    notIn?: bigint[] | number[];
    lt?: bigint | number | Prisma.BigIntFieldRefInput<$PrismaModel>;
    lte?: bigint | number | Prisma.BigIntFieldRefInput<$PrismaModel>;
    gt?: bigint | number | Prisma.BigIntFieldRefInput<$PrismaModel>;
    gte?: bigint | number | Prisma.BigIntFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedBigIntFilter<$PrismaModel> | bigint | number;
};
export type BigIntNullableFilter<$PrismaModel = never> = {
    equals?: bigint | number | Prisma.BigIntFieldRefInput<$PrismaModel> | null;
    in?: bigint[] | number[] | null;
    notIn?: bigint[] | number[] | null;
    lt?: bigint | number | Prisma.BigIntFieldRefInput<$PrismaModel>;
    lte?: bigint | number | Prisma.BigIntFieldRefInput<$PrismaModel>;
    gt?: bigint | number | Prisma.BigIntFieldRefInput<$PrismaModel>;
    gte?: bigint | number | Prisma.BigIntFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedBigIntNullableFilter<$PrismaModel> | bigint | number | null;
};
export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | Prisma.StringFieldRefInput<$PrismaModel> | null;
    in?: string[] | null;
    notIn?: string[] | null;
    lt?: string | Prisma.StringFieldRefInput<$PrismaModel>;
    lte?: string | Prisma.StringFieldRefInput<$PrismaModel>;
    gt?: string | Prisma.StringFieldRefInput<$PrismaModel>;
    gte?: string | Prisma.StringFieldRefInput<$PrismaModel>;
    contains?: string | Prisma.StringFieldRefInput<$PrismaModel>;
    startsWith?: string | Prisma.StringFieldRefInput<$PrismaModel>;
    endsWith?: string | Prisma.StringFieldRefInput<$PrismaModel>;
    search?: string;
    not?: Prisma.NestedStringNullableFilter<$PrismaModel> | string | null;
};
export type StringFilter<$PrismaModel = never> = {
    equals?: string | Prisma.StringFieldRefInput<$PrismaModel>;
    in?: string[];
    notIn?: string[];
    lt?: string | Prisma.StringFieldRefInput<$PrismaModel>;
    lte?: string | Prisma.StringFieldRefInput<$PrismaModel>;
    gt?: string | Prisma.StringFieldRefInput<$PrismaModel>;
    gte?: string | Prisma.StringFieldRefInput<$PrismaModel>;
    contains?: string | Prisma.StringFieldRefInput<$PrismaModel>;
    startsWith?: string | Prisma.StringFieldRefInput<$PrismaModel>;
    endsWith?: string | Prisma.StringFieldRefInput<$PrismaModel>;
    search?: string;
    not?: Prisma.NestedStringFilter<$PrismaModel> | string;
};
export type JsonNullableFilter<$PrismaModel = never> = Prisma.PatchUndefined<Prisma.Either<Required<JsonNullableFilterBase<$PrismaModel>>, Exclude<keyof Required<JsonNullableFilterBase<$PrismaModel>>, 'path'>>, Required<JsonNullableFilterBase<$PrismaModel>>> | Prisma.OptionalFlat<Omit<Required<JsonNullableFilterBase<$PrismaModel>>, 'path'>>;
export type JsonNullableFilterBase<$PrismaModel = never> = {
    equals?: runtime.InputJsonValue | Prisma.JsonFieldRefInput<$PrismaModel> | Prisma.JsonNullValueFilter;
    path?: string;
    mode?: Prisma.QueryMode | Prisma.EnumQueryModeFieldRefInput<$PrismaModel>;
    string_contains?: string | Prisma.StringFieldRefInput<$PrismaModel>;
    string_starts_with?: string | Prisma.StringFieldRefInput<$PrismaModel>;
    string_ends_with?: string | Prisma.StringFieldRefInput<$PrismaModel>;
    array_starts_with?: runtime.InputJsonValue | Prisma.JsonFieldRefInput<$PrismaModel> | null;
    array_ends_with?: runtime.InputJsonValue | Prisma.JsonFieldRefInput<$PrismaModel> | null;
    array_contains?: runtime.InputJsonValue | Prisma.JsonFieldRefInput<$PrismaModel> | null;
    lt?: runtime.InputJsonValue;
    lte?: runtime.InputJsonValue;
    gt?: runtime.InputJsonValue;
    gte?: runtime.InputJsonValue;
    not?: runtime.InputJsonValue | Prisma.JsonFieldRefInput<$PrismaModel> | Prisma.JsonNullValueFilter;
};
export type DateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | Prisma.DateTimeFieldRefInput<$PrismaModel> | null;
    in?: Date[] | string[] | null;
    notIn?: Date[] | string[] | null;
    lt?: Date | string | Prisma.DateTimeFieldRefInput<$PrismaModel>;
    lte?: Date | string | Prisma.DateTimeFieldRefInput<$PrismaModel>;
    gt?: Date | string | Prisma.DateTimeFieldRefInput<$PrismaModel>;
    gte?: Date | string | Prisma.DateTimeFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null;
};
export type SortOrderInput = {
    sort: Prisma.SortOrder;
    nulls?: Prisma.NullsOrder;
};
export type BigIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: bigint | number | Prisma.BigIntFieldRefInput<$PrismaModel>;
    in?: bigint[] | number[];
    notIn?: bigint[] | number[];
    lt?: bigint | number | Prisma.BigIntFieldRefInput<$PrismaModel>;
    lte?: bigint | number | Prisma.BigIntFieldRefInput<$PrismaModel>;
    gt?: bigint | number | Prisma.BigIntFieldRefInput<$PrismaModel>;
    gte?: bigint | number | Prisma.BigIntFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedBigIntWithAggregatesFilter<$PrismaModel> | bigint | number;
    _count?: Prisma.NestedIntFilter<$PrismaModel>;
    _avg?: Prisma.NestedFloatFilter<$PrismaModel>;
    _sum?: Prisma.NestedBigIntFilter<$PrismaModel>;
    _min?: Prisma.NestedBigIntFilter<$PrismaModel>;
    _max?: Prisma.NestedBigIntFilter<$PrismaModel>;
};
export type BigIntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: bigint | number | Prisma.BigIntFieldRefInput<$PrismaModel> | null;
    in?: bigint[] | number[] | null;
    notIn?: bigint[] | number[] | null;
    lt?: bigint | number | Prisma.BigIntFieldRefInput<$PrismaModel>;
    lte?: bigint | number | Prisma.BigIntFieldRefInput<$PrismaModel>;
    gt?: bigint | number | Prisma.BigIntFieldRefInput<$PrismaModel>;
    gte?: bigint | number | Prisma.BigIntFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedBigIntNullableWithAggregatesFilter<$PrismaModel> | bigint | number | null;
    _count?: Prisma.NestedIntNullableFilter<$PrismaModel>;
    _avg?: Prisma.NestedFloatNullableFilter<$PrismaModel>;
    _sum?: Prisma.NestedBigIntNullableFilter<$PrismaModel>;
    _min?: Prisma.NestedBigIntNullableFilter<$PrismaModel>;
    _max?: Prisma.NestedBigIntNullableFilter<$PrismaModel>;
};
export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | Prisma.StringFieldRefInput<$PrismaModel> | null;
    in?: string[] | null;
    notIn?: string[] | null;
    lt?: string | Prisma.StringFieldRefInput<$PrismaModel>;
    lte?: string | Prisma.StringFieldRefInput<$PrismaModel>;
    gt?: string | Prisma.StringFieldRefInput<$PrismaModel>;
    gte?: string | Prisma.StringFieldRefInput<$PrismaModel>;
    contains?: string | Prisma.StringFieldRefInput<$PrismaModel>;
    startsWith?: string | Prisma.StringFieldRefInput<$PrismaModel>;
    endsWith?: string | Prisma.StringFieldRefInput<$PrismaModel>;
    search?: string;
    not?: Prisma.NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null;
    _count?: Prisma.NestedIntNullableFilter<$PrismaModel>;
    _min?: Prisma.NestedStringNullableFilter<$PrismaModel>;
    _max?: Prisma.NestedStringNullableFilter<$PrismaModel>;
};
export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | Prisma.StringFieldRefInput<$PrismaModel>;
    in?: string[];
    notIn?: string[];
    lt?: string | Prisma.StringFieldRefInput<$PrismaModel>;
    lte?: string | Prisma.StringFieldRefInput<$PrismaModel>;
    gt?: string | Prisma.StringFieldRefInput<$PrismaModel>;
    gte?: string | Prisma.StringFieldRefInput<$PrismaModel>;
    contains?: string | Prisma.StringFieldRefInput<$PrismaModel>;
    startsWith?: string | Prisma.StringFieldRefInput<$PrismaModel>;
    endsWith?: string | Prisma.StringFieldRefInput<$PrismaModel>;
    search?: string;
    not?: Prisma.NestedStringWithAggregatesFilter<$PrismaModel> | string;
    _count?: Prisma.NestedIntFilter<$PrismaModel>;
    _min?: Prisma.NestedStringFilter<$PrismaModel>;
    _max?: Prisma.NestedStringFilter<$PrismaModel>;
};
export type JsonNullableWithAggregatesFilter<$PrismaModel = never> = Prisma.PatchUndefined<Prisma.Either<Required<JsonNullableWithAggregatesFilterBase<$PrismaModel>>, Exclude<keyof Required<JsonNullableWithAggregatesFilterBase<$PrismaModel>>, 'path'>>, Required<JsonNullableWithAggregatesFilterBase<$PrismaModel>>> | Prisma.OptionalFlat<Omit<Required<JsonNullableWithAggregatesFilterBase<$PrismaModel>>, 'path'>>;
export type JsonNullableWithAggregatesFilterBase<$PrismaModel = never> = {
    equals?: runtime.InputJsonValue | Prisma.JsonFieldRefInput<$PrismaModel> | Prisma.JsonNullValueFilter;
    path?: string;
    mode?: Prisma.QueryMode | Prisma.EnumQueryModeFieldRefInput<$PrismaModel>;
    string_contains?: string | Prisma.StringFieldRefInput<$PrismaModel>;
    string_starts_with?: string | Prisma.StringFieldRefInput<$PrismaModel>;
    string_ends_with?: string | Prisma.StringFieldRefInput<$PrismaModel>;
    array_starts_with?: runtime.InputJsonValue | Prisma.JsonFieldRefInput<$PrismaModel> | null;
    array_ends_with?: runtime.InputJsonValue | Prisma.JsonFieldRefInput<$PrismaModel> | null;
    array_contains?: runtime.InputJsonValue | Prisma.JsonFieldRefInput<$PrismaModel> | null;
    lt?: runtime.InputJsonValue;
    lte?: runtime.InputJsonValue;
    gt?: runtime.InputJsonValue;
    gte?: runtime.InputJsonValue;
    not?: runtime.InputJsonValue | Prisma.JsonFieldRefInput<$PrismaModel> | Prisma.JsonNullValueFilter;
    _count?: Prisma.NestedIntNullableFilter<$PrismaModel>;
    _min?: Prisma.NestedJsonNullableFilter<$PrismaModel>;
    _max?: Prisma.NestedJsonNullableFilter<$PrismaModel>;
};
export type DateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | Prisma.DateTimeFieldRefInput<$PrismaModel> | null;
    in?: Date[] | string[] | null;
    notIn?: Date[] | string[] | null;
    lt?: Date | string | Prisma.DateTimeFieldRefInput<$PrismaModel>;
    lte?: Date | string | Prisma.DateTimeFieldRefInput<$PrismaModel>;
    gt?: Date | string | Prisma.DateTimeFieldRefInput<$PrismaModel>;
    gte?: Date | string | Prisma.DateTimeFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null;
    _count?: Prisma.NestedIntNullableFilter<$PrismaModel>;
    _min?: Prisma.NestedDateTimeNullableFilter<$PrismaModel>;
    _max?: Prisma.NestedDateTimeNullableFilter<$PrismaModel>;
};
export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | Prisma.BooleanFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedBoolFilter<$PrismaModel> | boolean;
};
export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | Prisma.BooleanFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedBoolWithAggregatesFilter<$PrismaModel> | boolean;
    _count?: Prisma.NestedIntFilter<$PrismaModel>;
    _min?: Prisma.NestedBoolFilter<$PrismaModel>;
    _max?: Prisma.NestedBoolFilter<$PrismaModel>;
};
export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | Prisma.DateTimeFieldRefInput<$PrismaModel>;
    in?: Date[] | string[];
    notIn?: Date[] | string[];
    lt?: Date | string | Prisma.DateTimeFieldRefInput<$PrismaModel>;
    lte?: Date | string | Prisma.DateTimeFieldRefInput<$PrismaModel>;
    gt?: Date | string | Prisma.DateTimeFieldRefInput<$PrismaModel>;
    gte?: Date | string | Prisma.DateTimeFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedDateTimeFilter<$PrismaModel> | Date | string;
};
export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | Prisma.DateTimeFieldRefInput<$PrismaModel>;
    in?: Date[] | string[];
    notIn?: Date[] | string[];
    lt?: Date | string | Prisma.DateTimeFieldRefInput<$PrismaModel>;
    lte?: Date | string | Prisma.DateTimeFieldRefInput<$PrismaModel>;
    gt?: Date | string | Prisma.DateTimeFieldRefInput<$PrismaModel>;
    gte?: Date | string | Prisma.DateTimeFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string;
    _count?: Prisma.NestedIntFilter<$PrismaModel>;
    _min?: Prisma.NestedDateTimeFilter<$PrismaModel>;
    _max?: Prisma.NestedDateTimeFilter<$PrismaModel>;
};
export type Enumarticles_twitter_cardFilter<$PrismaModel = never> = {
    equals?: $Enums.articles_twitter_card | Prisma.Enumarticles_twitter_cardFieldRefInput<$PrismaModel>;
    in?: $Enums.articles_twitter_card[];
    notIn?: $Enums.articles_twitter_card[];
    not?: Prisma.NestedEnumarticles_twitter_cardFilter<$PrismaModel> | $Enums.articles_twitter_card;
};
export type Enumarticles_schema_typeFilter<$PrismaModel = never> = {
    equals?: $Enums.articles_schema_type | Prisma.Enumarticles_schema_typeFieldRefInput<$PrismaModel>;
    in?: $Enums.articles_schema_type[];
    notIn?: $Enums.articles_schema_type[];
    not?: Prisma.NestedEnumarticles_schema_typeFilter<$PrismaModel> | $Enums.articles_schema_type;
};
export type IntFilter<$PrismaModel = never> = {
    equals?: number | Prisma.IntFieldRefInput<$PrismaModel>;
    in?: number[];
    notIn?: number[];
    lt?: number | Prisma.IntFieldRefInput<$PrismaModel>;
    lte?: number | Prisma.IntFieldRefInput<$PrismaModel>;
    gt?: number | Prisma.IntFieldRefInput<$PrismaModel>;
    gte?: number | Prisma.IntFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedIntFilter<$PrismaModel> | number;
};
export type IntNullableFilter<$PrismaModel = never> = {
    equals?: number | Prisma.IntFieldRefInput<$PrismaModel> | null;
    in?: number[] | null;
    notIn?: number[] | null;
    lt?: number | Prisma.IntFieldRefInput<$PrismaModel>;
    lte?: number | Prisma.IntFieldRefInput<$PrismaModel>;
    gt?: number | Prisma.IntFieldRefInput<$PrismaModel>;
    gte?: number | Prisma.IntFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedIntNullableFilter<$PrismaModel> | number | null;
};
export type Enumarticles_twitter_cardWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.articles_twitter_card | Prisma.Enumarticles_twitter_cardFieldRefInput<$PrismaModel>;
    in?: $Enums.articles_twitter_card[];
    notIn?: $Enums.articles_twitter_card[];
    not?: Prisma.NestedEnumarticles_twitter_cardWithAggregatesFilter<$PrismaModel> | $Enums.articles_twitter_card;
    _count?: Prisma.NestedIntFilter<$PrismaModel>;
    _min?: Prisma.NestedEnumarticles_twitter_cardFilter<$PrismaModel>;
    _max?: Prisma.NestedEnumarticles_twitter_cardFilter<$PrismaModel>;
};
export type Enumarticles_schema_typeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.articles_schema_type | Prisma.Enumarticles_schema_typeFieldRefInput<$PrismaModel>;
    in?: $Enums.articles_schema_type[];
    notIn?: $Enums.articles_schema_type[];
    not?: Prisma.NestedEnumarticles_schema_typeWithAggregatesFilter<$PrismaModel> | $Enums.articles_schema_type;
    _count?: Prisma.NestedIntFilter<$PrismaModel>;
    _min?: Prisma.NestedEnumarticles_schema_typeFilter<$PrismaModel>;
    _max?: Prisma.NestedEnumarticles_schema_typeFilter<$PrismaModel>;
};
export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | Prisma.IntFieldRefInput<$PrismaModel>;
    in?: number[];
    notIn?: number[];
    lt?: number | Prisma.IntFieldRefInput<$PrismaModel>;
    lte?: number | Prisma.IntFieldRefInput<$PrismaModel>;
    gt?: number | Prisma.IntFieldRefInput<$PrismaModel>;
    gte?: number | Prisma.IntFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedIntWithAggregatesFilter<$PrismaModel> | number;
    _count?: Prisma.NestedIntFilter<$PrismaModel>;
    _avg?: Prisma.NestedFloatFilter<$PrismaModel>;
    _sum?: Prisma.NestedIntFilter<$PrismaModel>;
    _min?: Prisma.NestedIntFilter<$PrismaModel>;
    _max?: Prisma.NestedIntFilter<$PrismaModel>;
};
export type IntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | Prisma.IntFieldRefInput<$PrismaModel> | null;
    in?: number[] | null;
    notIn?: number[] | null;
    lt?: number | Prisma.IntFieldRefInput<$PrismaModel>;
    lte?: number | Prisma.IntFieldRefInput<$PrismaModel>;
    gt?: number | Prisma.IntFieldRefInput<$PrismaModel>;
    gte?: number | Prisma.IntFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null;
    _count?: Prisma.NestedIntNullableFilter<$PrismaModel>;
    _avg?: Prisma.NestedFloatNullableFilter<$PrismaModel>;
    _sum?: Prisma.NestedIntNullableFilter<$PrismaModel>;
    _min?: Prisma.NestedIntNullableFilter<$PrismaModel>;
    _max?: Prisma.NestedIntNullableFilter<$PrismaModel>;
};
export type Enumcoupons_typeFilter<$PrismaModel = never> = {
    equals?: $Enums.coupons_type | Prisma.Enumcoupons_typeFieldRefInput<$PrismaModel>;
    in?: $Enums.coupons_type[];
    notIn?: $Enums.coupons_type[];
    not?: Prisma.NestedEnumcoupons_typeFilter<$PrismaModel> | $Enums.coupons_type;
};
export type DecimalFilter<$PrismaModel = never> = {
    equals?: runtime.Decimal | runtime.DecimalJsLike | number | string | Prisma.DecimalFieldRefInput<$PrismaModel>;
    in?: runtime.Decimal[] | runtime.DecimalJsLike[] | number[] | string[];
    notIn?: runtime.Decimal[] | runtime.DecimalJsLike[] | number[] | string[];
    lt?: runtime.Decimal | runtime.DecimalJsLike | number | string | Prisma.DecimalFieldRefInput<$PrismaModel>;
    lte?: runtime.Decimal | runtime.DecimalJsLike | number | string | Prisma.DecimalFieldRefInput<$PrismaModel>;
    gt?: runtime.Decimal | runtime.DecimalJsLike | number | string | Prisma.DecimalFieldRefInput<$PrismaModel>;
    gte?: runtime.Decimal | runtime.DecimalJsLike | number | string | Prisma.DecimalFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedDecimalFilter<$PrismaModel> | runtime.Decimal | runtime.DecimalJsLike | number | string;
};
export type DecimalNullableFilter<$PrismaModel = never> = {
    equals?: runtime.Decimal | runtime.DecimalJsLike | number | string | Prisma.DecimalFieldRefInput<$PrismaModel> | null;
    in?: runtime.Decimal[] | runtime.DecimalJsLike[] | number[] | string[] | null;
    notIn?: runtime.Decimal[] | runtime.DecimalJsLike[] | number[] | string[] | null;
    lt?: runtime.Decimal | runtime.DecimalJsLike | number | string | Prisma.DecimalFieldRefInput<$PrismaModel>;
    lte?: runtime.Decimal | runtime.DecimalJsLike | number | string | Prisma.DecimalFieldRefInput<$PrismaModel>;
    gt?: runtime.Decimal | runtime.DecimalJsLike | number | string | Prisma.DecimalFieldRefInput<$PrismaModel>;
    gte?: runtime.Decimal | runtime.DecimalJsLike | number | string | Prisma.DecimalFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedDecimalNullableFilter<$PrismaModel> | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
};
export type Enumcoupons_typeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.coupons_type | Prisma.Enumcoupons_typeFieldRefInput<$PrismaModel>;
    in?: $Enums.coupons_type[];
    notIn?: $Enums.coupons_type[];
    not?: Prisma.NestedEnumcoupons_typeWithAggregatesFilter<$PrismaModel> | $Enums.coupons_type;
    _count?: Prisma.NestedIntFilter<$PrismaModel>;
    _min?: Prisma.NestedEnumcoupons_typeFilter<$PrismaModel>;
    _max?: Prisma.NestedEnumcoupons_typeFilter<$PrismaModel>;
};
export type DecimalWithAggregatesFilter<$PrismaModel = never> = {
    equals?: runtime.Decimal | runtime.DecimalJsLike | number | string | Prisma.DecimalFieldRefInput<$PrismaModel>;
    in?: runtime.Decimal[] | runtime.DecimalJsLike[] | number[] | string[];
    notIn?: runtime.Decimal[] | runtime.DecimalJsLike[] | number[] | string[];
    lt?: runtime.Decimal | runtime.DecimalJsLike | number | string | Prisma.DecimalFieldRefInput<$PrismaModel>;
    lte?: runtime.Decimal | runtime.DecimalJsLike | number | string | Prisma.DecimalFieldRefInput<$PrismaModel>;
    gt?: runtime.Decimal | runtime.DecimalJsLike | number | string | Prisma.DecimalFieldRefInput<$PrismaModel>;
    gte?: runtime.Decimal | runtime.DecimalJsLike | number | string | Prisma.DecimalFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedDecimalWithAggregatesFilter<$PrismaModel> | runtime.Decimal | runtime.DecimalJsLike | number | string;
    _count?: Prisma.NestedIntFilter<$PrismaModel>;
    _avg?: Prisma.NestedDecimalFilter<$PrismaModel>;
    _sum?: Prisma.NestedDecimalFilter<$PrismaModel>;
    _min?: Prisma.NestedDecimalFilter<$PrismaModel>;
    _max?: Prisma.NestedDecimalFilter<$PrismaModel>;
};
export type DecimalNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: runtime.Decimal | runtime.DecimalJsLike | number | string | Prisma.DecimalFieldRefInput<$PrismaModel> | null;
    in?: runtime.Decimal[] | runtime.DecimalJsLike[] | number[] | string[] | null;
    notIn?: runtime.Decimal[] | runtime.DecimalJsLike[] | number[] | string[] | null;
    lt?: runtime.Decimal | runtime.DecimalJsLike | number | string | Prisma.DecimalFieldRefInput<$PrismaModel>;
    lte?: runtime.Decimal | runtime.DecimalJsLike | number | string | Prisma.DecimalFieldRefInput<$PrismaModel>;
    gt?: runtime.Decimal | runtime.DecimalJsLike | number | string | Prisma.DecimalFieldRefInput<$PrismaModel>;
    gte?: runtime.Decimal | runtime.DecimalJsLike | number | string | Prisma.DecimalFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedDecimalNullableWithAggregatesFilter<$PrismaModel> | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    _count?: Prisma.NestedIntNullableFilter<$PrismaModel>;
    _avg?: Prisma.NestedDecimalNullableFilter<$PrismaModel>;
    _sum?: Prisma.NestedDecimalNullableFilter<$PrismaModel>;
    _min?: Prisma.NestedDecimalNullableFilter<$PrismaModel>;
    _max?: Prisma.NestedDecimalNullableFilter<$PrismaModel>;
};
export type Enumebooks_twitter_cardFilter<$PrismaModel = never> = {
    equals?: $Enums.ebooks_twitter_card | Prisma.Enumebooks_twitter_cardFieldRefInput<$PrismaModel>;
    in?: $Enums.ebooks_twitter_card[];
    notIn?: $Enums.ebooks_twitter_card[];
    not?: Prisma.NestedEnumebooks_twitter_cardFilter<$PrismaModel> | $Enums.ebooks_twitter_card;
};
export type Enumebooks_schema_typeFilter<$PrismaModel = never> = {
    equals?: $Enums.ebooks_schema_type | Prisma.Enumebooks_schema_typeFieldRefInput<$PrismaModel>;
    in?: $Enums.ebooks_schema_type[];
    notIn?: $Enums.ebooks_schema_type[];
    not?: Prisma.NestedEnumebooks_schema_typeFilter<$PrismaModel> | $Enums.ebooks_schema_type;
};
export type Enumebooks_access_typeFilter<$PrismaModel = never> = {
    equals?: $Enums.ebooks_access_type | Prisma.Enumebooks_access_typeFieldRefInput<$PrismaModel>;
    in?: $Enums.ebooks_access_type[];
    notIn?: $Enums.ebooks_access_type[];
    not?: Prisma.NestedEnumebooks_access_typeFilter<$PrismaModel> | $Enums.ebooks_access_type;
};
export type Enumebooks_twitter_cardWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.ebooks_twitter_card | Prisma.Enumebooks_twitter_cardFieldRefInput<$PrismaModel>;
    in?: $Enums.ebooks_twitter_card[];
    notIn?: $Enums.ebooks_twitter_card[];
    not?: Prisma.NestedEnumebooks_twitter_cardWithAggregatesFilter<$PrismaModel> | $Enums.ebooks_twitter_card;
    _count?: Prisma.NestedIntFilter<$PrismaModel>;
    _min?: Prisma.NestedEnumebooks_twitter_cardFilter<$PrismaModel>;
    _max?: Prisma.NestedEnumebooks_twitter_cardFilter<$PrismaModel>;
};
export type Enumebooks_schema_typeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.ebooks_schema_type | Prisma.Enumebooks_schema_typeFieldRefInput<$PrismaModel>;
    in?: $Enums.ebooks_schema_type[];
    notIn?: $Enums.ebooks_schema_type[];
    not?: Prisma.NestedEnumebooks_schema_typeWithAggregatesFilter<$PrismaModel> | $Enums.ebooks_schema_type;
    _count?: Prisma.NestedIntFilter<$PrismaModel>;
    _min?: Prisma.NestedEnumebooks_schema_typeFilter<$PrismaModel>;
    _max?: Prisma.NestedEnumebooks_schema_typeFilter<$PrismaModel>;
};
export type Enumebooks_access_typeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.ebooks_access_type | Prisma.Enumebooks_access_typeFieldRefInput<$PrismaModel>;
    in?: $Enums.ebooks_access_type[];
    notIn?: $Enums.ebooks_access_type[];
    not?: Prisma.NestedEnumebooks_access_typeWithAggregatesFilter<$PrismaModel> | $Enums.ebooks_access_type;
    _count?: Prisma.NestedIntFilter<$PrismaModel>;
    _min?: Prisma.NestedEnumebooks_access_typeFilter<$PrismaModel>;
    _max?: Prisma.NestedEnumebooks_access_typeFilter<$PrismaModel>;
};
export type Enumemail_campaigns_typeFilter<$PrismaModel = never> = {
    equals?: $Enums.email_campaigns_type | Prisma.Enumemail_campaigns_typeFieldRefInput<$PrismaModel>;
    in?: $Enums.email_campaigns_type[];
    notIn?: $Enums.email_campaigns_type[];
    not?: Prisma.NestedEnumemail_campaigns_typeFilter<$PrismaModel> | $Enums.email_campaigns_type;
};
export type Enumemail_campaigns_target_audienceFilter<$PrismaModel = never> = {
    equals?: $Enums.email_campaigns_target_audience | Prisma.Enumemail_campaigns_target_audienceFieldRefInput<$PrismaModel>;
    in?: $Enums.email_campaigns_target_audience[];
    notIn?: $Enums.email_campaigns_target_audience[];
    not?: Prisma.NestedEnumemail_campaigns_target_audienceFilter<$PrismaModel> | $Enums.email_campaigns_target_audience;
};
export type Enumemail_campaigns_schedule_typeFilter<$PrismaModel = never> = {
    equals?: $Enums.email_campaigns_schedule_type | Prisma.Enumemail_campaigns_schedule_typeFieldRefInput<$PrismaModel>;
    in?: $Enums.email_campaigns_schedule_type[];
    notIn?: $Enums.email_campaigns_schedule_type[];
    not?: Prisma.NestedEnumemail_campaigns_schedule_typeFilter<$PrismaModel> | $Enums.email_campaigns_schedule_type;
};
export type Enumemail_campaigns_statusFilter<$PrismaModel = never> = {
    equals?: $Enums.email_campaigns_status | Prisma.Enumemail_campaigns_statusFieldRefInput<$PrismaModel>;
    in?: $Enums.email_campaigns_status[];
    notIn?: $Enums.email_campaigns_status[];
    not?: Prisma.NestedEnumemail_campaigns_statusFilter<$PrismaModel> | $Enums.email_campaigns_status;
};
export type Enumemail_campaigns_typeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.email_campaigns_type | Prisma.Enumemail_campaigns_typeFieldRefInput<$PrismaModel>;
    in?: $Enums.email_campaigns_type[];
    notIn?: $Enums.email_campaigns_type[];
    not?: Prisma.NestedEnumemail_campaigns_typeWithAggregatesFilter<$PrismaModel> | $Enums.email_campaigns_type;
    _count?: Prisma.NestedIntFilter<$PrismaModel>;
    _min?: Prisma.NestedEnumemail_campaigns_typeFilter<$PrismaModel>;
    _max?: Prisma.NestedEnumemail_campaigns_typeFilter<$PrismaModel>;
};
export type Enumemail_campaigns_target_audienceWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.email_campaigns_target_audience | Prisma.Enumemail_campaigns_target_audienceFieldRefInput<$PrismaModel>;
    in?: $Enums.email_campaigns_target_audience[];
    notIn?: $Enums.email_campaigns_target_audience[];
    not?: Prisma.NestedEnumemail_campaigns_target_audienceWithAggregatesFilter<$PrismaModel> | $Enums.email_campaigns_target_audience;
    _count?: Prisma.NestedIntFilter<$PrismaModel>;
    _min?: Prisma.NestedEnumemail_campaigns_target_audienceFilter<$PrismaModel>;
    _max?: Prisma.NestedEnumemail_campaigns_target_audienceFilter<$PrismaModel>;
};
export type Enumemail_campaigns_schedule_typeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.email_campaigns_schedule_type | Prisma.Enumemail_campaigns_schedule_typeFieldRefInput<$PrismaModel>;
    in?: $Enums.email_campaigns_schedule_type[];
    notIn?: $Enums.email_campaigns_schedule_type[];
    not?: Prisma.NestedEnumemail_campaigns_schedule_typeWithAggregatesFilter<$PrismaModel> | $Enums.email_campaigns_schedule_type;
    _count?: Prisma.NestedIntFilter<$PrismaModel>;
    _min?: Prisma.NestedEnumemail_campaigns_schedule_typeFilter<$PrismaModel>;
    _max?: Prisma.NestedEnumemail_campaigns_schedule_typeFilter<$PrismaModel>;
};
export type Enumemail_campaigns_statusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.email_campaigns_status | Prisma.Enumemail_campaigns_statusFieldRefInput<$PrismaModel>;
    in?: $Enums.email_campaigns_status[];
    notIn?: $Enums.email_campaigns_status[];
    not?: Prisma.NestedEnumemail_campaigns_statusWithAggregatesFilter<$PrismaModel> | $Enums.email_campaigns_status;
    _count?: Prisma.NestedIntFilter<$PrismaModel>;
    _min?: Prisma.NestedEnumemail_campaigns_statusFilter<$PrismaModel>;
    _max?: Prisma.NestedEnumemail_campaigns_statusFilter<$PrismaModel>;
};
export type Enumemail_templates_categoryFilter<$PrismaModel = never> = {
    equals?: $Enums.email_templates_category | Prisma.Enumemail_templates_categoryFieldRefInput<$PrismaModel>;
    in?: $Enums.email_templates_category[];
    notIn?: $Enums.email_templates_category[];
    not?: Prisma.NestedEnumemail_templates_categoryFilter<$PrismaModel> | $Enums.email_templates_category;
};
export type Enumemail_templates_categoryWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.email_templates_category | Prisma.Enumemail_templates_categoryFieldRefInput<$PrismaModel>;
    in?: $Enums.email_templates_category[];
    notIn?: $Enums.email_templates_category[];
    not?: Prisma.NestedEnumemail_templates_categoryWithAggregatesFilter<$PrismaModel> | $Enums.email_templates_category;
    _count?: Prisma.NestedIntFilter<$PrismaModel>;
    _min?: Prisma.NestedEnumemail_templates_categoryFilter<$PrismaModel>;
    _max?: Prisma.NestedEnumemail_templates_categoryFilter<$PrismaModel>;
};
export type Enumenrollments_statusFilter<$PrismaModel = never> = {
    equals?: $Enums.enrollments_status | Prisma.Enumenrollments_statusFieldRefInput<$PrismaModel>;
    in?: $Enums.enrollments_status[];
    notIn?: $Enums.enrollments_status[];
    not?: Prisma.NestedEnumenrollments_statusFilter<$PrismaModel> | $Enums.enrollments_status;
};
export type Enumenrollments_payment_statusFilter<$PrismaModel = never> = {
    equals?: $Enums.enrollments_payment_status | Prisma.Enumenrollments_payment_statusFieldRefInput<$PrismaModel>;
    in?: $Enums.enrollments_payment_status[];
    notIn?: $Enums.enrollments_payment_status[];
    not?: Prisma.NestedEnumenrollments_payment_statusFilter<$PrismaModel> | $Enums.enrollments_payment_status;
};
export type Enumenrollments_statusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.enrollments_status | Prisma.Enumenrollments_statusFieldRefInput<$PrismaModel>;
    in?: $Enums.enrollments_status[];
    notIn?: $Enums.enrollments_status[];
    not?: Prisma.NestedEnumenrollments_statusWithAggregatesFilter<$PrismaModel> | $Enums.enrollments_status;
    _count?: Prisma.NestedIntFilter<$PrismaModel>;
    _min?: Prisma.NestedEnumenrollments_statusFilter<$PrismaModel>;
    _max?: Prisma.NestedEnumenrollments_statusFilter<$PrismaModel>;
};
export type Enumenrollments_payment_statusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.enrollments_payment_status | Prisma.Enumenrollments_payment_statusFieldRefInput<$PrismaModel>;
    in?: $Enums.enrollments_payment_status[];
    notIn?: $Enums.enrollments_payment_status[];
    not?: Prisma.NestedEnumenrollments_payment_statusWithAggregatesFilter<$PrismaModel> | $Enums.enrollments_payment_status;
    _count?: Prisma.NestedIntFilter<$PrismaModel>;
    _min?: Prisma.NestedEnumenrollments_payment_statusFilter<$PrismaModel>;
    _max?: Prisma.NestedEnumenrollments_payment_statusFilter<$PrismaModel>;
};
export type Enumlesson_videos_video_typeFilter<$PrismaModel = never> = {
    equals?: $Enums.lesson_videos_video_type | Prisma.Enumlesson_videos_video_typeFieldRefInput<$PrismaModel>;
    in?: $Enums.lesson_videos_video_type[];
    notIn?: $Enums.lesson_videos_video_type[];
    not?: Prisma.NestedEnumlesson_videos_video_typeFilter<$PrismaModel> | $Enums.lesson_videos_video_type;
};
export type Enumlesson_videos_statusFilter<$PrismaModel = never> = {
    equals?: $Enums.lesson_videos_status | Prisma.Enumlesson_videos_statusFieldRefInput<$PrismaModel>;
    in?: $Enums.lesson_videos_status[];
    notIn?: $Enums.lesson_videos_status[];
    not?: Prisma.NestedEnumlesson_videos_statusFilter<$PrismaModel> | $Enums.lesson_videos_status;
};
export type Enumlesson_videos_video_typeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.lesson_videos_video_type | Prisma.Enumlesson_videos_video_typeFieldRefInput<$PrismaModel>;
    in?: $Enums.lesson_videos_video_type[];
    notIn?: $Enums.lesson_videos_video_type[];
    not?: Prisma.NestedEnumlesson_videos_video_typeWithAggregatesFilter<$PrismaModel> | $Enums.lesson_videos_video_type;
    _count?: Prisma.NestedIntFilter<$PrismaModel>;
    _min?: Prisma.NestedEnumlesson_videos_video_typeFilter<$PrismaModel>;
    _max?: Prisma.NestedEnumlesson_videos_video_typeFilter<$PrismaModel>;
};
export type Enumlesson_videos_statusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.lesson_videos_status | Prisma.Enumlesson_videos_statusFieldRefInput<$PrismaModel>;
    in?: $Enums.lesson_videos_status[];
    notIn?: $Enums.lesson_videos_status[];
    not?: Prisma.NestedEnumlesson_videos_statusWithAggregatesFilter<$PrismaModel> | $Enums.lesson_videos_status;
    _count?: Prisma.NestedIntFilter<$PrismaModel>;
    _min?: Prisma.NestedEnumlesson_videos_statusFilter<$PrismaModel>;
    _max?: Prisma.NestedEnumlesson_videos_statusFilter<$PrismaModel>;
};
export type Enummarketing_analytics_campaign_typeFilter<$PrismaModel = never> = {
    equals?: $Enums.marketing_analytics_campaign_type | Prisma.Enummarketing_analytics_campaign_typeFieldRefInput<$PrismaModel>;
    in?: $Enums.marketing_analytics_campaign_type[];
    notIn?: $Enums.marketing_analytics_campaign_type[];
    not?: Prisma.NestedEnummarketing_analytics_campaign_typeFilter<$PrismaModel> | $Enums.marketing_analytics_campaign_type;
};
export type Enummarketing_analytics_event_typeFilter<$PrismaModel = never> = {
    equals?: $Enums.marketing_analytics_event_type | Prisma.Enummarketing_analytics_event_typeFieldRefInput<$PrismaModel>;
    in?: $Enums.marketing_analytics_event_type[];
    notIn?: $Enums.marketing_analytics_event_type[];
    not?: Prisma.NestedEnummarketing_analytics_event_typeFilter<$PrismaModel> | $Enums.marketing_analytics_event_type;
};
export type Enummarketing_analytics_campaign_typeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.marketing_analytics_campaign_type | Prisma.Enummarketing_analytics_campaign_typeFieldRefInput<$PrismaModel>;
    in?: $Enums.marketing_analytics_campaign_type[];
    notIn?: $Enums.marketing_analytics_campaign_type[];
    not?: Prisma.NestedEnummarketing_analytics_campaign_typeWithAggregatesFilter<$PrismaModel> | $Enums.marketing_analytics_campaign_type;
    _count?: Prisma.NestedIntFilter<$PrismaModel>;
    _min?: Prisma.NestedEnummarketing_analytics_campaign_typeFilter<$PrismaModel>;
    _max?: Prisma.NestedEnummarketing_analytics_campaign_typeFilter<$PrismaModel>;
};
export type Enummarketing_analytics_event_typeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.marketing_analytics_event_type | Prisma.Enummarketing_analytics_event_typeFieldRefInput<$PrismaModel>;
    in?: $Enums.marketing_analytics_event_type[];
    notIn?: $Enums.marketing_analytics_event_type[];
    not?: Prisma.NestedEnummarketing_analytics_event_typeWithAggregatesFilter<$PrismaModel> | $Enums.marketing_analytics_event_type;
    _count?: Prisma.NestedIntFilter<$PrismaModel>;
    _min?: Prisma.NestedEnummarketing_analytics_event_typeFilter<$PrismaModel>;
    _max?: Prisma.NestedEnummarketing_analytics_event_typeFilter<$PrismaModel>;
};
export type Enummedia_optimization_statusFilter<$PrismaModel = never> = {
    equals?: $Enums.media_optimization_status | Prisma.Enummedia_optimization_statusFieldRefInput<$PrismaModel>;
    in?: $Enums.media_optimization_status[];
    notIn?: $Enums.media_optimization_status[];
    not?: Prisma.NestedEnummedia_optimization_statusFilter<$PrismaModel> | $Enums.media_optimization_status;
};
export type Enummedia_optimization_statusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.media_optimization_status | Prisma.Enummedia_optimization_statusFieldRefInput<$PrismaModel>;
    in?: $Enums.media_optimization_status[];
    notIn?: $Enums.media_optimization_status[];
    not?: Prisma.NestedEnummedia_optimization_statusWithAggregatesFilter<$PrismaModel> | $Enums.media_optimization_status;
    _count?: Prisma.NestedIntFilter<$PrismaModel>;
    _min?: Prisma.NestedEnummedia_optimization_statusFilter<$PrismaModel>;
    _max?: Prisma.NestedEnummedia_optimization_statusFilter<$PrismaModel>;
};
export type Enumpopups_trigger_typeFilter<$PrismaModel = never> = {
    equals?: $Enums.popups_trigger_type | Prisma.Enumpopups_trigger_typeFieldRefInput<$PrismaModel>;
    in?: $Enums.popups_trigger_type[];
    notIn?: $Enums.popups_trigger_type[];
    not?: Prisma.NestedEnumpopups_trigger_typeFilter<$PrismaModel> | $Enums.popups_trigger_type;
};
export type Enumpopups_display_typeFilter<$PrismaModel = never> = {
    equals?: $Enums.popups_display_type | Prisma.Enumpopups_display_typeFieldRefInput<$PrismaModel>;
    in?: $Enums.popups_display_type[];
    notIn?: $Enums.popups_display_type[];
    not?: Prisma.NestedEnumpopups_display_typeFilter<$PrismaModel> | $Enums.popups_display_type;
};
export type Enumpopups_positionFilter<$PrismaModel = never> = {
    equals?: $Enums.popups_position | Prisma.Enumpopups_positionFieldRefInput<$PrismaModel>;
    in?: $Enums.popups_position[];
    notIn?: $Enums.popups_position[];
    not?: Prisma.NestedEnumpopups_positionFilter<$PrismaModel> | $Enums.popups_position;
};
export type Enumpopups_target_user_typeFilter<$PrismaModel = never> = {
    equals?: $Enums.popups_target_user_type | Prisma.Enumpopups_target_user_typeFieldRefInput<$PrismaModel>;
    in?: $Enums.popups_target_user_type[];
    notIn?: $Enums.popups_target_user_type[];
    not?: Prisma.NestedEnumpopups_target_user_typeFilter<$PrismaModel> | $Enums.popups_target_user_type;
};
export type Enumpopups_frequencyFilter<$PrismaModel = never> = {
    equals?: $Enums.popups_frequency | Prisma.Enumpopups_frequencyFieldRefInput<$PrismaModel>;
    in?: $Enums.popups_frequency[];
    notIn?: $Enums.popups_frequency[];
    not?: Prisma.NestedEnumpopups_frequencyFilter<$PrismaModel> | $Enums.popups_frequency;
};
export type Enumpopups_trigger_typeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.popups_trigger_type | Prisma.Enumpopups_trigger_typeFieldRefInput<$PrismaModel>;
    in?: $Enums.popups_trigger_type[];
    notIn?: $Enums.popups_trigger_type[];
    not?: Prisma.NestedEnumpopups_trigger_typeWithAggregatesFilter<$PrismaModel> | $Enums.popups_trigger_type;
    _count?: Prisma.NestedIntFilter<$PrismaModel>;
    _min?: Prisma.NestedEnumpopups_trigger_typeFilter<$PrismaModel>;
    _max?: Prisma.NestedEnumpopups_trigger_typeFilter<$PrismaModel>;
};
export type Enumpopups_display_typeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.popups_display_type | Prisma.Enumpopups_display_typeFieldRefInput<$PrismaModel>;
    in?: $Enums.popups_display_type[];
    notIn?: $Enums.popups_display_type[];
    not?: Prisma.NestedEnumpopups_display_typeWithAggregatesFilter<$PrismaModel> | $Enums.popups_display_type;
    _count?: Prisma.NestedIntFilter<$PrismaModel>;
    _min?: Prisma.NestedEnumpopups_display_typeFilter<$PrismaModel>;
    _max?: Prisma.NestedEnumpopups_display_typeFilter<$PrismaModel>;
};
export type Enumpopups_positionWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.popups_position | Prisma.Enumpopups_positionFieldRefInput<$PrismaModel>;
    in?: $Enums.popups_position[];
    notIn?: $Enums.popups_position[];
    not?: Prisma.NestedEnumpopups_positionWithAggregatesFilter<$PrismaModel> | $Enums.popups_position;
    _count?: Prisma.NestedIntFilter<$PrismaModel>;
    _min?: Prisma.NestedEnumpopups_positionFilter<$PrismaModel>;
    _max?: Prisma.NestedEnumpopups_positionFilter<$PrismaModel>;
};
export type Enumpopups_target_user_typeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.popups_target_user_type | Prisma.Enumpopups_target_user_typeFieldRefInput<$PrismaModel>;
    in?: $Enums.popups_target_user_type[];
    notIn?: $Enums.popups_target_user_type[];
    not?: Prisma.NestedEnumpopups_target_user_typeWithAggregatesFilter<$PrismaModel> | $Enums.popups_target_user_type;
    _count?: Prisma.NestedIntFilter<$PrismaModel>;
    _min?: Prisma.NestedEnumpopups_target_user_typeFilter<$PrismaModel>;
    _max?: Prisma.NestedEnumpopups_target_user_typeFilter<$PrismaModel>;
};
export type Enumpopups_frequencyWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.popups_frequency | Prisma.Enumpopups_frequencyFieldRefInput<$PrismaModel>;
    in?: $Enums.popups_frequency[];
    notIn?: $Enums.popups_frequency[];
    not?: Prisma.NestedEnumpopups_frequencyWithAggregatesFilter<$PrismaModel> | $Enums.popups_frequency;
    _count?: Prisma.NestedIntFilter<$PrismaModel>;
    _min?: Prisma.NestedEnumpopups_frequencyFilter<$PrismaModel>;
    _max?: Prisma.NestedEnumpopups_frequencyFilter<$PrismaModel>;
};
export type Enumproducts_categoryFilter<$PrismaModel = never> = {
    equals?: $Enums.products_category | Prisma.Enumproducts_categoryFieldRefInput<$PrismaModel>;
    in?: $Enums.products_category[];
    notIn?: $Enums.products_category[];
    not?: Prisma.NestedEnumproducts_categoryFilter<$PrismaModel> | $Enums.products_category;
};
export type Enumproducts_access_typeFilter<$PrismaModel = never> = {
    equals?: $Enums.products_access_type | Prisma.Enumproducts_access_typeFieldRefInput<$PrismaModel>;
    in?: $Enums.products_access_type[];
    notIn?: $Enums.products_access_type[];
    not?: Prisma.NestedEnumproducts_access_typeFilter<$PrismaModel> | $Enums.products_access_type;
};
export type Enumproducts_statusFilter<$PrismaModel = never> = {
    equals?: $Enums.products_status | Prisma.Enumproducts_statusFieldRefInput<$PrismaModel>;
    in?: $Enums.products_status[];
    notIn?: $Enums.products_status[];
    not?: Prisma.NestedEnumproducts_statusFilter<$PrismaModel> | $Enums.products_status;
};
export type Enumproducts_categoryWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.products_category | Prisma.Enumproducts_categoryFieldRefInput<$PrismaModel>;
    in?: $Enums.products_category[];
    notIn?: $Enums.products_category[];
    not?: Prisma.NestedEnumproducts_categoryWithAggregatesFilter<$PrismaModel> | $Enums.products_category;
    _count?: Prisma.NestedIntFilter<$PrismaModel>;
    _min?: Prisma.NestedEnumproducts_categoryFilter<$PrismaModel>;
    _max?: Prisma.NestedEnumproducts_categoryFilter<$PrismaModel>;
};
export type Enumproducts_access_typeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.products_access_type | Prisma.Enumproducts_access_typeFieldRefInput<$PrismaModel>;
    in?: $Enums.products_access_type[];
    notIn?: $Enums.products_access_type[];
    not?: Prisma.NestedEnumproducts_access_typeWithAggregatesFilter<$PrismaModel> | $Enums.products_access_type;
    _count?: Prisma.NestedIntFilter<$PrismaModel>;
    _min?: Prisma.NestedEnumproducts_access_typeFilter<$PrismaModel>;
    _max?: Prisma.NestedEnumproducts_access_typeFilter<$PrismaModel>;
};
export type Enumproducts_statusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.products_status | Prisma.Enumproducts_statusFieldRefInput<$PrismaModel>;
    in?: $Enums.products_status[];
    notIn?: $Enums.products_status[];
    not?: Prisma.NestedEnumproducts_statusWithAggregatesFilter<$PrismaModel> | $Enums.products_status;
    _count?: Prisma.NestedIntFilter<$PrismaModel>;
    _min?: Prisma.NestedEnumproducts_statusFilter<$PrismaModel>;
    _max?: Prisma.NestedEnumproducts_statusFilter<$PrismaModel>;
};
export type Enumpromotions_typeFilter<$PrismaModel = never> = {
    equals?: $Enums.promotions_type | Prisma.Enumpromotions_typeFieldRefInput<$PrismaModel>;
    in?: $Enums.promotions_type[];
    notIn?: $Enums.promotions_type[];
    not?: Prisma.NestedEnumpromotions_typeFilter<$PrismaModel> | $Enums.promotions_type;
};
export type Enumpromotions_discount_typeFilter<$PrismaModel = never> = {
    equals?: $Enums.promotions_discount_type | Prisma.Enumpromotions_discount_typeFieldRefInput<$PrismaModel>;
    in?: $Enums.promotions_discount_type[];
    notIn?: $Enums.promotions_discount_type[];
    not?: Prisma.NestedEnumpromotions_discount_typeFilter<$PrismaModel> | $Enums.promotions_discount_type;
};
export type Enumpromotions_applicable_toFilter<$PrismaModel = never> = {
    equals?: $Enums.promotions_applicable_to | Prisma.Enumpromotions_applicable_toFieldRefInput<$PrismaModel>;
    in?: $Enums.promotions_applicable_to[];
    notIn?: $Enums.promotions_applicable_to[];
    not?: Prisma.NestedEnumpromotions_applicable_toFilter<$PrismaModel> | $Enums.promotions_applicable_to;
};
export type Enumpromotions_typeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.promotions_type | Prisma.Enumpromotions_typeFieldRefInput<$PrismaModel>;
    in?: $Enums.promotions_type[];
    notIn?: $Enums.promotions_type[];
    not?: Prisma.NestedEnumpromotions_typeWithAggregatesFilter<$PrismaModel> | $Enums.promotions_type;
    _count?: Prisma.NestedIntFilter<$PrismaModel>;
    _min?: Prisma.NestedEnumpromotions_typeFilter<$PrismaModel>;
    _max?: Prisma.NestedEnumpromotions_typeFilter<$PrismaModel>;
};
export type Enumpromotions_discount_typeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.promotions_discount_type | Prisma.Enumpromotions_discount_typeFieldRefInput<$PrismaModel>;
    in?: $Enums.promotions_discount_type[];
    notIn?: $Enums.promotions_discount_type[];
    not?: Prisma.NestedEnumpromotions_discount_typeWithAggregatesFilter<$PrismaModel> | $Enums.promotions_discount_type;
    _count?: Prisma.NestedIntFilter<$PrismaModel>;
    _min?: Prisma.NestedEnumpromotions_discount_typeFilter<$PrismaModel>;
    _max?: Prisma.NestedEnumpromotions_discount_typeFilter<$PrismaModel>;
};
export type Enumpromotions_applicable_toWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.promotions_applicable_to | Prisma.Enumpromotions_applicable_toFieldRefInput<$PrismaModel>;
    in?: $Enums.promotions_applicable_to[];
    notIn?: $Enums.promotions_applicable_to[];
    not?: Prisma.NestedEnumpromotions_applicable_toWithAggregatesFilter<$PrismaModel> | $Enums.promotions_applicable_to;
    _count?: Prisma.NestedIntFilter<$PrismaModel>;
    _min?: Prisma.NestedEnumpromotions_applicable_toFilter<$PrismaModel>;
    _max?: Prisma.NestedEnumpromotions_applicable_toFilter<$PrismaModel>;
};
export type JsonFilter<$PrismaModel = never> = Prisma.PatchUndefined<Prisma.Either<Required<JsonFilterBase<$PrismaModel>>, Exclude<keyof Required<JsonFilterBase<$PrismaModel>>, 'path'>>, Required<JsonFilterBase<$PrismaModel>>> | Prisma.OptionalFlat<Omit<Required<JsonFilterBase<$PrismaModel>>, 'path'>>;
export type JsonFilterBase<$PrismaModel = never> = {
    equals?: runtime.InputJsonValue | Prisma.JsonFieldRefInput<$PrismaModel> | Prisma.JsonNullValueFilter;
    path?: string;
    mode?: Prisma.QueryMode | Prisma.EnumQueryModeFieldRefInput<$PrismaModel>;
    string_contains?: string | Prisma.StringFieldRefInput<$PrismaModel>;
    string_starts_with?: string | Prisma.StringFieldRefInput<$PrismaModel>;
    string_ends_with?: string | Prisma.StringFieldRefInput<$PrismaModel>;
    array_starts_with?: runtime.InputJsonValue | Prisma.JsonFieldRefInput<$PrismaModel> | null;
    array_ends_with?: runtime.InputJsonValue | Prisma.JsonFieldRefInput<$PrismaModel> | null;
    array_contains?: runtime.InputJsonValue | Prisma.JsonFieldRefInput<$PrismaModel> | null;
    lt?: runtime.InputJsonValue;
    lte?: runtime.InputJsonValue;
    gt?: runtime.InputJsonValue;
    gte?: runtime.InputJsonValue;
    not?: runtime.InputJsonValue | Prisma.JsonFieldRefInput<$PrismaModel> | Prisma.JsonNullValueFilter;
};
export type JsonWithAggregatesFilter<$PrismaModel = never> = Prisma.PatchUndefined<Prisma.Either<Required<JsonWithAggregatesFilterBase<$PrismaModel>>, Exclude<keyof Required<JsonWithAggregatesFilterBase<$PrismaModel>>, 'path'>>, Required<JsonWithAggregatesFilterBase<$PrismaModel>>> | Prisma.OptionalFlat<Omit<Required<JsonWithAggregatesFilterBase<$PrismaModel>>, 'path'>>;
export type JsonWithAggregatesFilterBase<$PrismaModel = never> = {
    equals?: runtime.InputJsonValue | Prisma.JsonFieldRefInput<$PrismaModel> | Prisma.JsonNullValueFilter;
    path?: string;
    mode?: Prisma.QueryMode | Prisma.EnumQueryModeFieldRefInput<$PrismaModel>;
    string_contains?: string | Prisma.StringFieldRefInput<$PrismaModel>;
    string_starts_with?: string | Prisma.StringFieldRefInput<$PrismaModel>;
    string_ends_with?: string | Prisma.StringFieldRefInput<$PrismaModel>;
    array_starts_with?: runtime.InputJsonValue | Prisma.JsonFieldRefInput<$PrismaModel> | null;
    array_ends_with?: runtime.InputJsonValue | Prisma.JsonFieldRefInput<$PrismaModel> | null;
    array_contains?: runtime.InputJsonValue | Prisma.JsonFieldRefInput<$PrismaModel> | null;
    lt?: runtime.InputJsonValue;
    lte?: runtime.InputJsonValue;
    gt?: runtime.InputJsonValue;
    gte?: runtime.InputJsonValue;
    not?: runtime.InputJsonValue | Prisma.JsonFieldRefInput<$PrismaModel> | Prisma.JsonNullValueFilter;
    _count?: Prisma.NestedIntFilter<$PrismaModel>;
    _min?: Prisma.NestedJsonFilter<$PrismaModel>;
    _max?: Prisma.NestedJsonFilter<$PrismaModel>;
};
export type Enumsms_campaigns_typeFilter<$PrismaModel = never> = {
    equals?: $Enums.sms_campaigns_type | Prisma.Enumsms_campaigns_typeFieldRefInput<$PrismaModel>;
    in?: $Enums.sms_campaigns_type[];
    notIn?: $Enums.sms_campaigns_type[];
    not?: Prisma.NestedEnumsms_campaigns_typeFilter<$PrismaModel> | $Enums.sms_campaigns_type;
};
export type Enumsms_campaigns_target_audienceFilter<$PrismaModel = never> = {
    equals?: $Enums.sms_campaigns_target_audience | Prisma.Enumsms_campaigns_target_audienceFieldRefInput<$PrismaModel>;
    in?: $Enums.sms_campaigns_target_audience[];
    notIn?: $Enums.sms_campaigns_target_audience[];
    not?: Prisma.NestedEnumsms_campaigns_target_audienceFilter<$PrismaModel> | $Enums.sms_campaigns_target_audience;
};
export type Enumsms_campaigns_schedule_typeFilter<$PrismaModel = never> = {
    equals?: $Enums.sms_campaigns_schedule_type | Prisma.Enumsms_campaigns_schedule_typeFieldRefInput<$PrismaModel>;
    in?: $Enums.sms_campaigns_schedule_type[];
    notIn?: $Enums.sms_campaigns_schedule_type[];
    not?: Prisma.NestedEnumsms_campaigns_schedule_typeFilter<$PrismaModel> | $Enums.sms_campaigns_schedule_type;
};
export type Enumsms_campaigns_statusFilter<$PrismaModel = never> = {
    equals?: $Enums.sms_campaigns_status | Prisma.Enumsms_campaigns_statusFieldRefInput<$PrismaModel>;
    in?: $Enums.sms_campaigns_status[];
    notIn?: $Enums.sms_campaigns_status[];
    not?: Prisma.NestedEnumsms_campaigns_statusFilter<$PrismaModel> | $Enums.sms_campaigns_status;
};
export type Enumsms_campaigns_typeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.sms_campaigns_type | Prisma.Enumsms_campaigns_typeFieldRefInput<$PrismaModel>;
    in?: $Enums.sms_campaigns_type[];
    notIn?: $Enums.sms_campaigns_type[];
    not?: Prisma.NestedEnumsms_campaigns_typeWithAggregatesFilter<$PrismaModel> | $Enums.sms_campaigns_type;
    _count?: Prisma.NestedIntFilter<$PrismaModel>;
    _min?: Prisma.NestedEnumsms_campaigns_typeFilter<$PrismaModel>;
    _max?: Prisma.NestedEnumsms_campaigns_typeFilter<$PrismaModel>;
};
export type Enumsms_campaigns_target_audienceWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.sms_campaigns_target_audience | Prisma.Enumsms_campaigns_target_audienceFieldRefInput<$PrismaModel>;
    in?: $Enums.sms_campaigns_target_audience[];
    notIn?: $Enums.sms_campaigns_target_audience[];
    not?: Prisma.NestedEnumsms_campaigns_target_audienceWithAggregatesFilter<$PrismaModel> | $Enums.sms_campaigns_target_audience;
    _count?: Prisma.NestedIntFilter<$PrismaModel>;
    _min?: Prisma.NestedEnumsms_campaigns_target_audienceFilter<$PrismaModel>;
    _max?: Prisma.NestedEnumsms_campaigns_target_audienceFilter<$PrismaModel>;
};
export type Enumsms_campaigns_schedule_typeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.sms_campaigns_schedule_type | Prisma.Enumsms_campaigns_schedule_typeFieldRefInput<$PrismaModel>;
    in?: $Enums.sms_campaigns_schedule_type[];
    notIn?: $Enums.sms_campaigns_schedule_type[];
    not?: Prisma.NestedEnumsms_campaigns_schedule_typeWithAggregatesFilter<$PrismaModel> | $Enums.sms_campaigns_schedule_type;
    _count?: Prisma.NestedIntFilter<$PrismaModel>;
    _min?: Prisma.NestedEnumsms_campaigns_schedule_typeFilter<$PrismaModel>;
    _max?: Prisma.NestedEnumsms_campaigns_schedule_typeFilter<$PrismaModel>;
};
export type Enumsms_campaigns_statusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.sms_campaigns_status | Prisma.Enumsms_campaigns_statusFieldRefInput<$PrismaModel>;
    in?: $Enums.sms_campaigns_status[];
    notIn?: $Enums.sms_campaigns_status[];
    not?: Prisma.NestedEnumsms_campaigns_statusWithAggregatesFilter<$PrismaModel> | $Enums.sms_campaigns_status;
    _count?: Prisma.NestedIntFilter<$PrismaModel>;
    _min?: Prisma.NestedEnumsms_campaigns_statusFilter<$PrismaModel>;
    _max?: Prisma.NestedEnumsms_campaigns_statusFilter<$PrismaModel>;
};
export type Enumusers_roleFilter<$PrismaModel = never> = {
    equals?: $Enums.users_role | Prisma.Enumusers_roleFieldRefInput<$PrismaModel>;
    in?: $Enums.users_role[];
    notIn?: $Enums.users_role[];
    not?: Prisma.NestedEnumusers_roleFilter<$PrismaModel> | $Enums.users_role;
};
export type Enumusers_roleWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.users_role | Prisma.Enumusers_roleFieldRefInput<$PrismaModel>;
    in?: $Enums.users_role[];
    notIn?: $Enums.users_role[];
    not?: Prisma.NestedEnumusers_roleWithAggregatesFilter<$PrismaModel> | $Enums.users_role;
    _count?: Prisma.NestedIntFilter<$PrismaModel>;
    _min?: Prisma.NestedEnumusers_roleFilter<$PrismaModel>;
    _max?: Prisma.NestedEnumusers_roleFilter<$PrismaModel>;
};
export type Enumverification_codes_typeFilter<$PrismaModel = never> = {
    equals?: $Enums.verification_codes_type | Prisma.Enumverification_codes_typeFieldRefInput<$PrismaModel>;
    in?: $Enums.verification_codes_type[];
    notIn?: $Enums.verification_codes_type[];
    not?: Prisma.NestedEnumverification_codes_typeFilter<$PrismaModel> | $Enums.verification_codes_type;
};
export type Enumverification_codes_typeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.verification_codes_type | Prisma.Enumverification_codes_typeFieldRefInput<$PrismaModel>;
    in?: $Enums.verification_codes_type[];
    notIn?: $Enums.verification_codes_type[];
    not?: Prisma.NestedEnumverification_codes_typeWithAggregatesFilter<$PrismaModel> | $Enums.verification_codes_type;
    _count?: Prisma.NestedIntFilter<$PrismaModel>;
    _min?: Prisma.NestedEnumverification_codes_typeFilter<$PrismaModel>;
    _max?: Prisma.NestedEnumverification_codes_typeFilter<$PrismaModel>;
};
export type NestedBigIntFilter<$PrismaModel = never> = {
    equals?: bigint | number | Prisma.BigIntFieldRefInput<$PrismaModel>;
    in?: bigint[] | number[];
    notIn?: bigint[] | number[];
    lt?: bigint | number | Prisma.BigIntFieldRefInput<$PrismaModel>;
    lte?: bigint | number | Prisma.BigIntFieldRefInput<$PrismaModel>;
    gt?: bigint | number | Prisma.BigIntFieldRefInput<$PrismaModel>;
    gte?: bigint | number | Prisma.BigIntFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedBigIntFilter<$PrismaModel> | bigint | number;
};
export type NestedBigIntNullableFilter<$PrismaModel = never> = {
    equals?: bigint | number | Prisma.BigIntFieldRefInput<$PrismaModel> | null;
    in?: bigint[] | number[] | null;
    notIn?: bigint[] | number[] | null;
    lt?: bigint | number | Prisma.BigIntFieldRefInput<$PrismaModel>;
    lte?: bigint | number | Prisma.BigIntFieldRefInput<$PrismaModel>;
    gt?: bigint | number | Prisma.BigIntFieldRefInput<$PrismaModel>;
    gte?: bigint | number | Prisma.BigIntFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedBigIntNullableFilter<$PrismaModel> | bigint | number | null;
};
export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | Prisma.StringFieldRefInput<$PrismaModel> | null;
    in?: string[] | null;
    notIn?: string[] | null;
    lt?: string | Prisma.StringFieldRefInput<$PrismaModel>;
    lte?: string | Prisma.StringFieldRefInput<$PrismaModel>;
    gt?: string | Prisma.StringFieldRefInput<$PrismaModel>;
    gte?: string | Prisma.StringFieldRefInput<$PrismaModel>;
    contains?: string | Prisma.StringFieldRefInput<$PrismaModel>;
    startsWith?: string | Prisma.StringFieldRefInput<$PrismaModel>;
    endsWith?: string | Prisma.StringFieldRefInput<$PrismaModel>;
    search?: string;
    not?: Prisma.NestedStringNullableFilter<$PrismaModel> | string | null;
};
export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | Prisma.StringFieldRefInput<$PrismaModel>;
    in?: string[];
    notIn?: string[];
    lt?: string | Prisma.StringFieldRefInput<$PrismaModel>;
    lte?: string | Prisma.StringFieldRefInput<$PrismaModel>;
    gt?: string | Prisma.StringFieldRefInput<$PrismaModel>;
    gte?: string | Prisma.StringFieldRefInput<$PrismaModel>;
    contains?: string | Prisma.StringFieldRefInput<$PrismaModel>;
    startsWith?: string | Prisma.StringFieldRefInput<$PrismaModel>;
    endsWith?: string | Prisma.StringFieldRefInput<$PrismaModel>;
    search?: string;
    not?: Prisma.NestedStringFilter<$PrismaModel> | string;
};
export type NestedDateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | Prisma.DateTimeFieldRefInput<$PrismaModel> | null;
    in?: Date[] | string[] | null;
    notIn?: Date[] | string[] | null;
    lt?: Date | string | Prisma.DateTimeFieldRefInput<$PrismaModel>;
    lte?: Date | string | Prisma.DateTimeFieldRefInput<$PrismaModel>;
    gt?: Date | string | Prisma.DateTimeFieldRefInput<$PrismaModel>;
    gte?: Date | string | Prisma.DateTimeFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null;
};
export type NestedBigIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: bigint | number | Prisma.BigIntFieldRefInput<$PrismaModel>;
    in?: bigint[] | number[];
    notIn?: bigint[] | number[];
    lt?: bigint | number | Prisma.BigIntFieldRefInput<$PrismaModel>;
    lte?: bigint | number | Prisma.BigIntFieldRefInput<$PrismaModel>;
    gt?: bigint | number | Prisma.BigIntFieldRefInput<$PrismaModel>;
    gte?: bigint | number | Prisma.BigIntFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedBigIntWithAggregatesFilter<$PrismaModel> | bigint | number;
    _count?: Prisma.NestedIntFilter<$PrismaModel>;
    _avg?: Prisma.NestedFloatFilter<$PrismaModel>;
    _sum?: Prisma.NestedBigIntFilter<$PrismaModel>;
    _min?: Prisma.NestedBigIntFilter<$PrismaModel>;
    _max?: Prisma.NestedBigIntFilter<$PrismaModel>;
};
export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | Prisma.IntFieldRefInput<$PrismaModel>;
    in?: number[];
    notIn?: number[];
    lt?: number | Prisma.IntFieldRefInput<$PrismaModel>;
    lte?: number | Prisma.IntFieldRefInput<$PrismaModel>;
    gt?: number | Prisma.IntFieldRefInput<$PrismaModel>;
    gte?: number | Prisma.IntFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedIntFilter<$PrismaModel> | number;
};
export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | Prisma.FloatFieldRefInput<$PrismaModel>;
    in?: number[];
    notIn?: number[];
    lt?: number | Prisma.FloatFieldRefInput<$PrismaModel>;
    lte?: number | Prisma.FloatFieldRefInput<$PrismaModel>;
    gt?: number | Prisma.FloatFieldRefInput<$PrismaModel>;
    gte?: number | Prisma.FloatFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedFloatFilter<$PrismaModel> | number;
};
export type NestedBigIntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: bigint | number | Prisma.BigIntFieldRefInput<$PrismaModel> | null;
    in?: bigint[] | number[] | null;
    notIn?: bigint[] | number[] | null;
    lt?: bigint | number | Prisma.BigIntFieldRefInput<$PrismaModel>;
    lte?: bigint | number | Prisma.BigIntFieldRefInput<$PrismaModel>;
    gt?: bigint | number | Prisma.BigIntFieldRefInput<$PrismaModel>;
    gte?: bigint | number | Prisma.BigIntFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedBigIntNullableWithAggregatesFilter<$PrismaModel> | bigint | number | null;
    _count?: Prisma.NestedIntNullableFilter<$PrismaModel>;
    _avg?: Prisma.NestedFloatNullableFilter<$PrismaModel>;
    _sum?: Prisma.NestedBigIntNullableFilter<$PrismaModel>;
    _min?: Prisma.NestedBigIntNullableFilter<$PrismaModel>;
    _max?: Prisma.NestedBigIntNullableFilter<$PrismaModel>;
};
export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | Prisma.IntFieldRefInput<$PrismaModel> | null;
    in?: number[] | null;
    notIn?: number[] | null;
    lt?: number | Prisma.IntFieldRefInput<$PrismaModel>;
    lte?: number | Prisma.IntFieldRefInput<$PrismaModel>;
    gt?: number | Prisma.IntFieldRefInput<$PrismaModel>;
    gte?: number | Prisma.IntFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedIntNullableFilter<$PrismaModel> | number | null;
};
export type NestedFloatNullableFilter<$PrismaModel = never> = {
    equals?: number | Prisma.FloatFieldRefInput<$PrismaModel> | null;
    in?: number[] | null;
    notIn?: number[] | null;
    lt?: number | Prisma.FloatFieldRefInput<$PrismaModel>;
    lte?: number | Prisma.FloatFieldRefInput<$PrismaModel>;
    gt?: number | Prisma.FloatFieldRefInput<$PrismaModel>;
    gte?: number | Prisma.FloatFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedFloatNullableFilter<$PrismaModel> | number | null;
};
export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | Prisma.StringFieldRefInput<$PrismaModel> | null;
    in?: string[] | null;
    notIn?: string[] | null;
    lt?: string | Prisma.StringFieldRefInput<$PrismaModel>;
    lte?: string | Prisma.StringFieldRefInput<$PrismaModel>;
    gt?: string | Prisma.StringFieldRefInput<$PrismaModel>;
    gte?: string | Prisma.StringFieldRefInput<$PrismaModel>;
    contains?: string | Prisma.StringFieldRefInput<$PrismaModel>;
    startsWith?: string | Prisma.StringFieldRefInput<$PrismaModel>;
    endsWith?: string | Prisma.StringFieldRefInput<$PrismaModel>;
    search?: string;
    not?: Prisma.NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null;
    _count?: Prisma.NestedIntNullableFilter<$PrismaModel>;
    _min?: Prisma.NestedStringNullableFilter<$PrismaModel>;
    _max?: Prisma.NestedStringNullableFilter<$PrismaModel>;
};
export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | Prisma.StringFieldRefInput<$PrismaModel>;
    in?: string[];
    notIn?: string[];
    lt?: string | Prisma.StringFieldRefInput<$PrismaModel>;
    lte?: string | Prisma.StringFieldRefInput<$PrismaModel>;
    gt?: string | Prisma.StringFieldRefInput<$PrismaModel>;
    gte?: string | Prisma.StringFieldRefInput<$PrismaModel>;
    contains?: string | Prisma.StringFieldRefInput<$PrismaModel>;
    startsWith?: string | Prisma.StringFieldRefInput<$PrismaModel>;
    endsWith?: string | Prisma.StringFieldRefInput<$PrismaModel>;
    search?: string;
    not?: Prisma.NestedStringWithAggregatesFilter<$PrismaModel> | string;
    _count?: Prisma.NestedIntFilter<$PrismaModel>;
    _min?: Prisma.NestedStringFilter<$PrismaModel>;
    _max?: Prisma.NestedStringFilter<$PrismaModel>;
};
export type NestedJsonNullableFilter<$PrismaModel = never> = Prisma.PatchUndefined<Prisma.Either<Required<NestedJsonNullableFilterBase<$PrismaModel>>, Exclude<keyof Required<NestedJsonNullableFilterBase<$PrismaModel>>, 'path'>>, Required<NestedJsonNullableFilterBase<$PrismaModel>>> | Prisma.OptionalFlat<Omit<Required<NestedJsonNullableFilterBase<$PrismaModel>>, 'path'>>;
export type NestedJsonNullableFilterBase<$PrismaModel = never> = {
    equals?: runtime.InputJsonValue | Prisma.JsonFieldRefInput<$PrismaModel> | Prisma.JsonNullValueFilter;
    path?: string;
    mode?: Prisma.QueryMode | Prisma.EnumQueryModeFieldRefInput<$PrismaModel>;
    string_contains?: string | Prisma.StringFieldRefInput<$PrismaModel>;
    string_starts_with?: string | Prisma.StringFieldRefInput<$PrismaModel>;
    string_ends_with?: string | Prisma.StringFieldRefInput<$PrismaModel>;
    array_starts_with?: runtime.InputJsonValue | Prisma.JsonFieldRefInput<$PrismaModel> | null;
    array_ends_with?: runtime.InputJsonValue | Prisma.JsonFieldRefInput<$PrismaModel> | null;
    array_contains?: runtime.InputJsonValue | Prisma.JsonFieldRefInput<$PrismaModel> | null;
    lt?: runtime.InputJsonValue;
    lte?: runtime.InputJsonValue;
    gt?: runtime.InputJsonValue;
    gte?: runtime.InputJsonValue;
    not?: runtime.InputJsonValue | Prisma.JsonFieldRefInput<$PrismaModel> | Prisma.JsonNullValueFilter;
};
export type NestedDateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | Prisma.DateTimeFieldRefInput<$PrismaModel> | null;
    in?: Date[] | string[] | null;
    notIn?: Date[] | string[] | null;
    lt?: Date | string | Prisma.DateTimeFieldRefInput<$PrismaModel>;
    lte?: Date | string | Prisma.DateTimeFieldRefInput<$PrismaModel>;
    gt?: Date | string | Prisma.DateTimeFieldRefInput<$PrismaModel>;
    gte?: Date | string | Prisma.DateTimeFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null;
    _count?: Prisma.NestedIntNullableFilter<$PrismaModel>;
    _min?: Prisma.NestedDateTimeNullableFilter<$PrismaModel>;
    _max?: Prisma.NestedDateTimeNullableFilter<$PrismaModel>;
};
export type NestedBoolFilter<$PrismaModel = never> = {
    equals?: boolean | Prisma.BooleanFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedBoolFilter<$PrismaModel> | boolean;
};
export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | Prisma.BooleanFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedBoolWithAggregatesFilter<$PrismaModel> | boolean;
    _count?: Prisma.NestedIntFilter<$PrismaModel>;
    _min?: Prisma.NestedBoolFilter<$PrismaModel>;
    _max?: Prisma.NestedBoolFilter<$PrismaModel>;
};
export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | Prisma.DateTimeFieldRefInput<$PrismaModel>;
    in?: Date[] | string[];
    notIn?: Date[] | string[];
    lt?: Date | string | Prisma.DateTimeFieldRefInput<$PrismaModel>;
    lte?: Date | string | Prisma.DateTimeFieldRefInput<$PrismaModel>;
    gt?: Date | string | Prisma.DateTimeFieldRefInput<$PrismaModel>;
    gte?: Date | string | Prisma.DateTimeFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedDateTimeFilter<$PrismaModel> | Date | string;
};
export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | Prisma.DateTimeFieldRefInput<$PrismaModel>;
    in?: Date[] | string[];
    notIn?: Date[] | string[];
    lt?: Date | string | Prisma.DateTimeFieldRefInput<$PrismaModel>;
    lte?: Date | string | Prisma.DateTimeFieldRefInput<$PrismaModel>;
    gt?: Date | string | Prisma.DateTimeFieldRefInput<$PrismaModel>;
    gte?: Date | string | Prisma.DateTimeFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string;
    _count?: Prisma.NestedIntFilter<$PrismaModel>;
    _min?: Prisma.NestedDateTimeFilter<$PrismaModel>;
    _max?: Prisma.NestedDateTimeFilter<$PrismaModel>;
};
export type NestedEnumarticles_twitter_cardFilter<$PrismaModel = never> = {
    equals?: $Enums.articles_twitter_card | Prisma.Enumarticles_twitter_cardFieldRefInput<$PrismaModel>;
    in?: $Enums.articles_twitter_card[];
    notIn?: $Enums.articles_twitter_card[];
    not?: Prisma.NestedEnumarticles_twitter_cardFilter<$PrismaModel> | $Enums.articles_twitter_card;
};
export type NestedEnumarticles_schema_typeFilter<$PrismaModel = never> = {
    equals?: $Enums.articles_schema_type | Prisma.Enumarticles_schema_typeFieldRefInput<$PrismaModel>;
    in?: $Enums.articles_schema_type[];
    notIn?: $Enums.articles_schema_type[];
    not?: Prisma.NestedEnumarticles_schema_typeFilter<$PrismaModel> | $Enums.articles_schema_type;
};
export type NestedEnumarticles_twitter_cardWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.articles_twitter_card | Prisma.Enumarticles_twitter_cardFieldRefInput<$PrismaModel>;
    in?: $Enums.articles_twitter_card[];
    notIn?: $Enums.articles_twitter_card[];
    not?: Prisma.NestedEnumarticles_twitter_cardWithAggregatesFilter<$PrismaModel> | $Enums.articles_twitter_card;
    _count?: Prisma.NestedIntFilter<$PrismaModel>;
    _min?: Prisma.NestedEnumarticles_twitter_cardFilter<$PrismaModel>;
    _max?: Prisma.NestedEnumarticles_twitter_cardFilter<$PrismaModel>;
};
export type NestedEnumarticles_schema_typeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.articles_schema_type | Prisma.Enumarticles_schema_typeFieldRefInput<$PrismaModel>;
    in?: $Enums.articles_schema_type[];
    notIn?: $Enums.articles_schema_type[];
    not?: Prisma.NestedEnumarticles_schema_typeWithAggregatesFilter<$PrismaModel> | $Enums.articles_schema_type;
    _count?: Prisma.NestedIntFilter<$PrismaModel>;
    _min?: Prisma.NestedEnumarticles_schema_typeFilter<$PrismaModel>;
    _max?: Prisma.NestedEnumarticles_schema_typeFilter<$PrismaModel>;
};
export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | Prisma.IntFieldRefInput<$PrismaModel>;
    in?: number[];
    notIn?: number[];
    lt?: number | Prisma.IntFieldRefInput<$PrismaModel>;
    lte?: number | Prisma.IntFieldRefInput<$PrismaModel>;
    gt?: number | Prisma.IntFieldRefInput<$PrismaModel>;
    gte?: number | Prisma.IntFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedIntWithAggregatesFilter<$PrismaModel> | number;
    _count?: Prisma.NestedIntFilter<$PrismaModel>;
    _avg?: Prisma.NestedFloatFilter<$PrismaModel>;
    _sum?: Prisma.NestedIntFilter<$PrismaModel>;
    _min?: Prisma.NestedIntFilter<$PrismaModel>;
    _max?: Prisma.NestedIntFilter<$PrismaModel>;
};
export type NestedIntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | Prisma.IntFieldRefInput<$PrismaModel> | null;
    in?: number[] | null;
    notIn?: number[] | null;
    lt?: number | Prisma.IntFieldRefInput<$PrismaModel>;
    lte?: number | Prisma.IntFieldRefInput<$PrismaModel>;
    gt?: number | Prisma.IntFieldRefInput<$PrismaModel>;
    gte?: number | Prisma.IntFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null;
    _count?: Prisma.NestedIntNullableFilter<$PrismaModel>;
    _avg?: Prisma.NestedFloatNullableFilter<$PrismaModel>;
    _sum?: Prisma.NestedIntNullableFilter<$PrismaModel>;
    _min?: Prisma.NestedIntNullableFilter<$PrismaModel>;
    _max?: Prisma.NestedIntNullableFilter<$PrismaModel>;
};
export type NestedEnumcoupons_typeFilter<$PrismaModel = never> = {
    equals?: $Enums.coupons_type | Prisma.Enumcoupons_typeFieldRefInput<$PrismaModel>;
    in?: $Enums.coupons_type[];
    notIn?: $Enums.coupons_type[];
    not?: Prisma.NestedEnumcoupons_typeFilter<$PrismaModel> | $Enums.coupons_type;
};
export type NestedDecimalFilter<$PrismaModel = never> = {
    equals?: runtime.Decimal | runtime.DecimalJsLike | number | string | Prisma.DecimalFieldRefInput<$PrismaModel>;
    in?: runtime.Decimal[] | runtime.DecimalJsLike[] | number[] | string[];
    notIn?: runtime.Decimal[] | runtime.DecimalJsLike[] | number[] | string[];
    lt?: runtime.Decimal | runtime.DecimalJsLike | number | string | Prisma.DecimalFieldRefInput<$PrismaModel>;
    lte?: runtime.Decimal | runtime.DecimalJsLike | number | string | Prisma.DecimalFieldRefInput<$PrismaModel>;
    gt?: runtime.Decimal | runtime.DecimalJsLike | number | string | Prisma.DecimalFieldRefInput<$PrismaModel>;
    gte?: runtime.Decimal | runtime.DecimalJsLike | number | string | Prisma.DecimalFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedDecimalFilter<$PrismaModel> | runtime.Decimal | runtime.DecimalJsLike | number | string;
};
export type NestedDecimalNullableFilter<$PrismaModel = never> = {
    equals?: runtime.Decimal | runtime.DecimalJsLike | number | string | Prisma.DecimalFieldRefInput<$PrismaModel> | null;
    in?: runtime.Decimal[] | runtime.DecimalJsLike[] | number[] | string[] | null;
    notIn?: runtime.Decimal[] | runtime.DecimalJsLike[] | number[] | string[] | null;
    lt?: runtime.Decimal | runtime.DecimalJsLike | number | string | Prisma.DecimalFieldRefInput<$PrismaModel>;
    lte?: runtime.Decimal | runtime.DecimalJsLike | number | string | Prisma.DecimalFieldRefInput<$PrismaModel>;
    gt?: runtime.Decimal | runtime.DecimalJsLike | number | string | Prisma.DecimalFieldRefInput<$PrismaModel>;
    gte?: runtime.Decimal | runtime.DecimalJsLike | number | string | Prisma.DecimalFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedDecimalNullableFilter<$PrismaModel> | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
};
export type NestedEnumcoupons_typeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.coupons_type | Prisma.Enumcoupons_typeFieldRefInput<$PrismaModel>;
    in?: $Enums.coupons_type[];
    notIn?: $Enums.coupons_type[];
    not?: Prisma.NestedEnumcoupons_typeWithAggregatesFilter<$PrismaModel> | $Enums.coupons_type;
    _count?: Prisma.NestedIntFilter<$PrismaModel>;
    _min?: Prisma.NestedEnumcoupons_typeFilter<$PrismaModel>;
    _max?: Prisma.NestedEnumcoupons_typeFilter<$PrismaModel>;
};
export type NestedDecimalWithAggregatesFilter<$PrismaModel = never> = {
    equals?: runtime.Decimal | runtime.DecimalJsLike | number | string | Prisma.DecimalFieldRefInput<$PrismaModel>;
    in?: runtime.Decimal[] | runtime.DecimalJsLike[] | number[] | string[];
    notIn?: runtime.Decimal[] | runtime.DecimalJsLike[] | number[] | string[];
    lt?: runtime.Decimal | runtime.DecimalJsLike | number | string | Prisma.DecimalFieldRefInput<$PrismaModel>;
    lte?: runtime.Decimal | runtime.DecimalJsLike | number | string | Prisma.DecimalFieldRefInput<$PrismaModel>;
    gt?: runtime.Decimal | runtime.DecimalJsLike | number | string | Prisma.DecimalFieldRefInput<$PrismaModel>;
    gte?: runtime.Decimal | runtime.DecimalJsLike | number | string | Prisma.DecimalFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedDecimalWithAggregatesFilter<$PrismaModel> | runtime.Decimal | runtime.DecimalJsLike | number | string;
    _count?: Prisma.NestedIntFilter<$PrismaModel>;
    _avg?: Prisma.NestedDecimalFilter<$PrismaModel>;
    _sum?: Prisma.NestedDecimalFilter<$PrismaModel>;
    _min?: Prisma.NestedDecimalFilter<$PrismaModel>;
    _max?: Prisma.NestedDecimalFilter<$PrismaModel>;
};
export type NestedDecimalNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: runtime.Decimal | runtime.DecimalJsLike | number | string | Prisma.DecimalFieldRefInput<$PrismaModel> | null;
    in?: runtime.Decimal[] | runtime.DecimalJsLike[] | number[] | string[] | null;
    notIn?: runtime.Decimal[] | runtime.DecimalJsLike[] | number[] | string[] | null;
    lt?: runtime.Decimal | runtime.DecimalJsLike | number | string | Prisma.DecimalFieldRefInput<$PrismaModel>;
    lte?: runtime.Decimal | runtime.DecimalJsLike | number | string | Prisma.DecimalFieldRefInput<$PrismaModel>;
    gt?: runtime.Decimal | runtime.DecimalJsLike | number | string | Prisma.DecimalFieldRefInput<$PrismaModel>;
    gte?: runtime.Decimal | runtime.DecimalJsLike | number | string | Prisma.DecimalFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedDecimalNullableWithAggregatesFilter<$PrismaModel> | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    _count?: Prisma.NestedIntNullableFilter<$PrismaModel>;
    _avg?: Prisma.NestedDecimalNullableFilter<$PrismaModel>;
    _sum?: Prisma.NestedDecimalNullableFilter<$PrismaModel>;
    _min?: Prisma.NestedDecimalNullableFilter<$PrismaModel>;
    _max?: Prisma.NestedDecimalNullableFilter<$PrismaModel>;
};
export type NestedEnumebooks_twitter_cardFilter<$PrismaModel = never> = {
    equals?: $Enums.ebooks_twitter_card | Prisma.Enumebooks_twitter_cardFieldRefInput<$PrismaModel>;
    in?: $Enums.ebooks_twitter_card[];
    notIn?: $Enums.ebooks_twitter_card[];
    not?: Prisma.NestedEnumebooks_twitter_cardFilter<$PrismaModel> | $Enums.ebooks_twitter_card;
};
export type NestedEnumebooks_schema_typeFilter<$PrismaModel = never> = {
    equals?: $Enums.ebooks_schema_type | Prisma.Enumebooks_schema_typeFieldRefInput<$PrismaModel>;
    in?: $Enums.ebooks_schema_type[];
    notIn?: $Enums.ebooks_schema_type[];
    not?: Prisma.NestedEnumebooks_schema_typeFilter<$PrismaModel> | $Enums.ebooks_schema_type;
};
export type NestedEnumebooks_access_typeFilter<$PrismaModel = never> = {
    equals?: $Enums.ebooks_access_type | Prisma.Enumebooks_access_typeFieldRefInput<$PrismaModel>;
    in?: $Enums.ebooks_access_type[];
    notIn?: $Enums.ebooks_access_type[];
    not?: Prisma.NestedEnumebooks_access_typeFilter<$PrismaModel> | $Enums.ebooks_access_type;
};
export type NestedEnumebooks_twitter_cardWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.ebooks_twitter_card | Prisma.Enumebooks_twitter_cardFieldRefInput<$PrismaModel>;
    in?: $Enums.ebooks_twitter_card[];
    notIn?: $Enums.ebooks_twitter_card[];
    not?: Prisma.NestedEnumebooks_twitter_cardWithAggregatesFilter<$PrismaModel> | $Enums.ebooks_twitter_card;
    _count?: Prisma.NestedIntFilter<$PrismaModel>;
    _min?: Prisma.NestedEnumebooks_twitter_cardFilter<$PrismaModel>;
    _max?: Prisma.NestedEnumebooks_twitter_cardFilter<$PrismaModel>;
};
export type NestedEnumebooks_schema_typeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.ebooks_schema_type | Prisma.Enumebooks_schema_typeFieldRefInput<$PrismaModel>;
    in?: $Enums.ebooks_schema_type[];
    notIn?: $Enums.ebooks_schema_type[];
    not?: Prisma.NestedEnumebooks_schema_typeWithAggregatesFilter<$PrismaModel> | $Enums.ebooks_schema_type;
    _count?: Prisma.NestedIntFilter<$PrismaModel>;
    _min?: Prisma.NestedEnumebooks_schema_typeFilter<$PrismaModel>;
    _max?: Prisma.NestedEnumebooks_schema_typeFilter<$PrismaModel>;
};
export type NestedEnumebooks_access_typeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.ebooks_access_type | Prisma.Enumebooks_access_typeFieldRefInput<$PrismaModel>;
    in?: $Enums.ebooks_access_type[];
    notIn?: $Enums.ebooks_access_type[];
    not?: Prisma.NestedEnumebooks_access_typeWithAggregatesFilter<$PrismaModel> | $Enums.ebooks_access_type;
    _count?: Prisma.NestedIntFilter<$PrismaModel>;
    _min?: Prisma.NestedEnumebooks_access_typeFilter<$PrismaModel>;
    _max?: Prisma.NestedEnumebooks_access_typeFilter<$PrismaModel>;
};
export type NestedEnumemail_campaigns_typeFilter<$PrismaModel = never> = {
    equals?: $Enums.email_campaigns_type | Prisma.Enumemail_campaigns_typeFieldRefInput<$PrismaModel>;
    in?: $Enums.email_campaigns_type[];
    notIn?: $Enums.email_campaigns_type[];
    not?: Prisma.NestedEnumemail_campaigns_typeFilter<$PrismaModel> | $Enums.email_campaigns_type;
};
export type NestedEnumemail_campaigns_target_audienceFilter<$PrismaModel = never> = {
    equals?: $Enums.email_campaigns_target_audience | Prisma.Enumemail_campaigns_target_audienceFieldRefInput<$PrismaModel>;
    in?: $Enums.email_campaigns_target_audience[];
    notIn?: $Enums.email_campaigns_target_audience[];
    not?: Prisma.NestedEnumemail_campaigns_target_audienceFilter<$PrismaModel> | $Enums.email_campaigns_target_audience;
};
export type NestedEnumemail_campaigns_schedule_typeFilter<$PrismaModel = never> = {
    equals?: $Enums.email_campaigns_schedule_type | Prisma.Enumemail_campaigns_schedule_typeFieldRefInput<$PrismaModel>;
    in?: $Enums.email_campaigns_schedule_type[];
    notIn?: $Enums.email_campaigns_schedule_type[];
    not?: Prisma.NestedEnumemail_campaigns_schedule_typeFilter<$PrismaModel> | $Enums.email_campaigns_schedule_type;
};
export type NestedEnumemail_campaigns_statusFilter<$PrismaModel = never> = {
    equals?: $Enums.email_campaigns_status | Prisma.Enumemail_campaigns_statusFieldRefInput<$PrismaModel>;
    in?: $Enums.email_campaigns_status[];
    notIn?: $Enums.email_campaigns_status[];
    not?: Prisma.NestedEnumemail_campaigns_statusFilter<$PrismaModel> | $Enums.email_campaigns_status;
};
export type NestedEnumemail_campaigns_typeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.email_campaigns_type | Prisma.Enumemail_campaigns_typeFieldRefInput<$PrismaModel>;
    in?: $Enums.email_campaigns_type[];
    notIn?: $Enums.email_campaigns_type[];
    not?: Prisma.NestedEnumemail_campaigns_typeWithAggregatesFilter<$PrismaModel> | $Enums.email_campaigns_type;
    _count?: Prisma.NestedIntFilter<$PrismaModel>;
    _min?: Prisma.NestedEnumemail_campaigns_typeFilter<$PrismaModel>;
    _max?: Prisma.NestedEnumemail_campaigns_typeFilter<$PrismaModel>;
};
export type NestedEnumemail_campaigns_target_audienceWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.email_campaigns_target_audience | Prisma.Enumemail_campaigns_target_audienceFieldRefInput<$PrismaModel>;
    in?: $Enums.email_campaigns_target_audience[];
    notIn?: $Enums.email_campaigns_target_audience[];
    not?: Prisma.NestedEnumemail_campaigns_target_audienceWithAggregatesFilter<$PrismaModel> | $Enums.email_campaigns_target_audience;
    _count?: Prisma.NestedIntFilter<$PrismaModel>;
    _min?: Prisma.NestedEnumemail_campaigns_target_audienceFilter<$PrismaModel>;
    _max?: Prisma.NestedEnumemail_campaigns_target_audienceFilter<$PrismaModel>;
};
export type NestedEnumemail_campaigns_schedule_typeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.email_campaigns_schedule_type | Prisma.Enumemail_campaigns_schedule_typeFieldRefInput<$PrismaModel>;
    in?: $Enums.email_campaigns_schedule_type[];
    notIn?: $Enums.email_campaigns_schedule_type[];
    not?: Prisma.NestedEnumemail_campaigns_schedule_typeWithAggregatesFilter<$PrismaModel> | $Enums.email_campaigns_schedule_type;
    _count?: Prisma.NestedIntFilter<$PrismaModel>;
    _min?: Prisma.NestedEnumemail_campaigns_schedule_typeFilter<$PrismaModel>;
    _max?: Prisma.NestedEnumemail_campaigns_schedule_typeFilter<$PrismaModel>;
};
export type NestedEnumemail_campaigns_statusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.email_campaigns_status | Prisma.Enumemail_campaigns_statusFieldRefInput<$PrismaModel>;
    in?: $Enums.email_campaigns_status[];
    notIn?: $Enums.email_campaigns_status[];
    not?: Prisma.NestedEnumemail_campaigns_statusWithAggregatesFilter<$PrismaModel> | $Enums.email_campaigns_status;
    _count?: Prisma.NestedIntFilter<$PrismaModel>;
    _min?: Prisma.NestedEnumemail_campaigns_statusFilter<$PrismaModel>;
    _max?: Prisma.NestedEnumemail_campaigns_statusFilter<$PrismaModel>;
};
export type NestedEnumemail_templates_categoryFilter<$PrismaModel = never> = {
    equals?: $Enums.email_templates_category | Prisma.Enumemail_templates_categoryFieldRefInput<$PrismaModel>;
    in?: $Enums.email_templates_category[];
    notIn?: $Enums.email_templates_category[];
    not?: Prisma.NestedEnumemail_templates_categoryFilter<$PrismaModel> | $Enums.email_templates_category;
};
export type NestedEnumemail_templates_categoryWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.email_templates_category | Prisma.Enumemail_templates_categoryFieldRefInput<$PrismaModel>;
    in?: $Enums.email_templates_category[];
    notIn?: $Enums.email_templates_category[];
    not?: Prisma.NestedEnumemail_templates_categoryWithAggregatesFilter<$PrismaModel> | $Enums.email_templates_category;
    _count?: Prisma.NestedIntFilter<$PrismaModel>;
    _min?: Prisma.NestedEnumemail_templates_categoryFilter<$PrismaModel>;
    _max?: Prisma.NestedEnumemail_templates_categoryFilter<$PrismaModel>;
};
export type NestedEnumenrollments_statusFilter<$PrismaModel = never> = {
    equals?: $Enums.enrollments_status | Prisma.Enumenrollments_statusFieldRefInput<$PrismaModel>;
    in?: $Enums.enrollments_status[];
    notIn?: $Enums.enrollments_status[];
    not?: Prisma.NestedEnumenrollments_statusFilter<$PrismaModel> | $Enums.enrollments_status;
};
export type NestedEnumenrollments_payment_statusFilter<$PrismaModel = never> = {
    equals?: $Enums.enrollments_payment_status | Prisma.Enumenrollments_payment_statusFieldRefInput<$PrismaModel>;
    in?: $Enums.enrollments_payment_status[];
    notIn?: $Enums.enrollments_payment_status[];
    not?: Prisma.NestedEnumenrollments_payment_statusFilter<$PrismaModel> | $Enums.enrollments_payment_status;
};
export type NestedEnumenrollments_statusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.enrollments_status | Prisma.Enumenrollments_statusFieldRefInput<$PrismaModel>;
    in?: $Enums.enrollments_status[];
    notIn?: $Enums.enrollments_status[];
    not?: Prisma.NestedEnumenrollments_statusWithAggregatesFilter<$PrismaModel> | $Enums.enrollments_status;
    _count?: Prisma.NestedIntFilter<$PrismaModel>;
    _min?: Prisma.NestedEnumenrollments_statusFilter<$PrismaModel>;
    _max?: Prisma.NestedEnumenrollments_statusFilter<$PrismaModel>;
};
export type NestedEnumenrollments_payment_statusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.enrollments_payment_status | Prisma.Enumenrollments_payment_statusFieldRefInput<$PrismaModel>;
    in?: $Enums.enrollments_payment_status[];
    notIn?: $Enums.enrollments_payment_status[];
    not?: Prisma.NestedEnumenrollments_payment_statusWithAggregatesFilter<$PrismaModel> | $Enums.enrollments_payment_status;
    _count?: Prisma.NestedIntFilter<$PrismaModel>;
    _min?: Prisma.NestedEnumenrollments_payment_statusFilter<$PrismaModel>;
    _max?: Prisma.NestedEnumenrollments_payment_statusFilter<$PrismaModel>;
};
export type NestedEnumlesson_videos_video_typeFilter<$PrismaModel = never> = {
    equals?: $Enums.lesson_videos_video_type | Prisma.Enumlesson_videos_video_typeFieldRefInput<$PrismaModel>;
    in?: $Enums.lesson_videos_video_type[];
    notIn?: $Enums.lesson_videos_video_type[];
    not?: Prisma.NestedEnumlesson_videos_video_typeFilter<$PrismaModel> | $Enums.lesson_videos_video_type;
};
export type NestedEnumlesson_videos_statusFilter<$PrismaModel = never> = {
    equals?: $Enums.lesson_videos_status | Prisma.Enumlesson_videos_statusFieldRefInput<$PrismaModel>;
    in?: $Enums.lesson_videos_status[];
    notIn?: $Enums.lesson_videos_status[];
    not?: Prisma.NestedEnumlesson_videos_statusFilter<$PrismaModel> | $Enums.lesson_videos_status;
};
export type NestedEnumlesson_videos_video_typeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.lesson_videos_video_type | Prisma.Enumlesson_videos_video_typeFieldRefInput<$PrismaModel>;
    in?: $Enums.lesson_videos_video_type[];
    notIn?: $Enums.lesson_videos_video_type[];
    not?: Prisma.NestedEnumlesson_videos_video_typeWithAggregatesFilter<$PrismaModel> | $Enums.lesson_videos_video_type;
    _count?: Prisma.NestedIntFilter<$PrismaModel>;
    _min?: Prisma.NestedEnumlesson_videos_video_typeFilter<$PrismaModel>;
    _max?: Prisma.NestedEnumlesson_videos_video_typeFilter<$PrismaModel>;
};
export type NestedEnumlesson_videos_statusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.lesson_videos_status | Prisma.Enumlesson_videos_statusFieldRefInput<$PrismaModel>;
    in?: $Enums.lesson_videos_status[];
    notIn?: $Enums.lesson_videos_status[];
    not?: Prisma.NestedEnumlesson_videos_statusWithAggregatesFilter<$PrismaModel> | $Enums.lesson_videos_status;
    _count?: Prisma.NestedIntFilter<$PrismaModel>;
    _min?: Prisma.NestedEnumlesson_videos_statusFilter<$PrismaModel>;
    _max?: Prisma.NestedEnumlesson_videos_statusFilter<$PrismaModel>;
};
export type NestedEnummarketing_analytics_campaign_typeFilter<$PrismaModel = never> = {
    equals?: $Enums.marketing_analytics_campaign_type | Prisma.Enummarketing_analytics_campaign_typeFieldRefInput<$PrismaModel>;
    in?: $Enums.marketing_analytics_campaign_type[];
    notIn?: $Enums.marketing_analytics_campaign_type[];
    not?: Prisma.NestedEnummarketing_analytics_campaign_typeFilter<$PrismaModel> | $Enums.marketing_analytics_campaign_type;
};
export type NestedEnummarketing_analytics_event_typeFilter<$PrismaModel = never> = {
    equals?: $Enums.marketing_analytics_event_type | Prisma.Enummarketing_analytics_event_typeFieldRefInput<$PrismaModel>;
    in?: $Enums.marketing_analytics_event_type[];
    notIn?: $Enums.marketing_analytics_event_type[];
    not?: Prisma.NestedEnummarketing_analytics_event_typeFilter<$PrismaModel> | $Enums.marketing_analytics_event_type;
};
export type NestedEnummarketing_analytics_campaign_typeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.marketing_analytics_campaign_type | Prisma.Enummarketing_analytics_campaign_typeFieldRefInput<$PrismaModel>;
    in?: $Enums.marketing_analytics_campaign_type[];
    notIn?: $Enums.marketing_analytics_campaign_type[];
    not?: Prisma.NestedEnummarketing_analytics_campaign_typeWithAggregatesFilter<$PrismaModel> | $Enums.marketing_analytics_campaign_type;
    _count?: Prisma.NestedIntFilter<$PrismaModel>;
    _min?: Prisma.NestedEnummarketing_analytics_campaign_typeFilter<$PrismaModel>;
    _max?: Prisma.NestedEnummarketing_analytics_campaign_typeFilter<$PrismaModel>;
};
export type NestedEnummarketing_analytics_event_typeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.marketing_analytics_event_type | Prisma.Enummarketing_analytics_event_typeFieldRefInput<$PrismaModel>;
    in?: $Enums.marketing_analytics_event_type[];
    notIn?: $Enums.marketing_analytics_event_type[];
    not?: Prisma.NestedEnummarketing_analytics_event_typeWithAggregatesFilter<$PrismaModel> | $Enums.marketing_analytics_event_type;
    _count?: Prisma.NestedIntFilter<$PrismaModel>;
    _min?: Prisma.NestedEnummarketing_analytics_event_typeFilter<$PrismaModel>;
    _max?: Prisma.NestedEnummarketing_analytics_event_typeFilter<$PrismaModel>;
};
export type NestedEnummedia_optimization_statusFilter<$PrismaModel = never> = {
    equals?: $Enums.media_optimization_status | Prisma.Enummedia_optimization_statusFieldRefInput<$PrismaModel>;
    in?: $Enums.media_optimization_status[];
    notIn?: $Enums.media_optimization_status[];
    not?: Prisma.NestedEnummedia_optimization_statusFilter<$PrismaModel> | $Enums.media_optimization_status;
};
export type NestedEnummedia_optimization_statusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.media_optimization_status | Prisma.Enummedia_optimization_statusFieldRefInput<$PrismaModel>;
    in?: $Enums.media_optimization_status[];
    notIn?: $Enums.media_optimization_status[];
    not?: Prisma.NestedEnummedia_optimization_statusWithAggregatesFilter<$PrismaModel> | $Enums.media_optimization_status;
    _count?: Prisma.NestedIntFilter<$PrismaModel>;
    _min?: Prisma.NestedEnummedia_optimization_statusFilter<$PrismaModel>;
    _max?: Prisma.NestedEnummedia_optimization_statusFilter<$PrismaModel>;
};
export type NestedEnumpopups_trigger_typeFilter<$PrismaModel = never> = {
    equals?: $Enums.popups_trigger_type | Prisma.Enumpopups_trigger_typeFieldRefInput<$PrismaModel>;
    in?: $Enums.popups_trigger_type[];
    notIn?: $Enums.popups_trigger_type[];
    not?: Prisma.NestedEnumpopups_trigger_typeFilter<$PrismaModel> | $Enums.popups_trigger_type;
};
export type NestedEnumpopups_display_typeFilter<$PrismaModel = never> = {
    equals?: $Enums.popups_display_type | Prisma.Enumpopups_display_typeFieldRefInput<$PrismaModel>;
    in?: $Enums.popups_display_type[];
    notIn?: $Enums.popups_display_type[];
    not?: Prisma.NestedEnumpopups_display_typeFilter<$PrismaModel> | $Enums.popups_display_type;
};
export type NestedEnumpopups_positionFilter<$PrismaModel = never> = {
    equals?: $Enums.popups_position | Prisma.Enumpopups_positionFieldRefInput<$PrismaModel>;
    in?: $Enums.popups_position[];
    notIn?: $Enums.popups_position[];
    not?: Prisma.NestedEnumpopups_positionFilter<$PrismaModel> | $Enums.popups_position;
};
export type NestedEnumpopups_target_user_typeFilter<$PrismaModel = never> = {
    equals?: $Enums.popups_target_user_type | Prisma.Enumpopups_target_user_typeFieldRefInput<$PrismaModel>;
    in?: $Enums.popups_target_user_type[];
    notIn?: $Enums.popups_target_user_type[];
    not?: Prisma.NestedEnumpopups_target_user_typeFilter<$PrismaModel> | $Enums.popups_target_user_type;
};
export type NestedEnumpopups_frequencyFilter<$PrismaModel = never> = {
    equals?: $Enums.popups_frequency | Prisma.Enumpopups_frequencyFieldRefInput<$PrismaModel>;
    in?: $Enums.popups_frequency[];
    notIn?: $Enums.popups_frequency[];
    not?: Prisma.NestedEnumpopups_frequencyFilter<$PrismaModel> | $Enums.popups_frequency;
};
export type NestedEnumpopups_trigger_typeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.popups_trigger_type | Prisma.Enumpopups_trigger_typeFieldRefInput<$PrismaModel>;
    in?: $Enums.popups_trigger_type[];
    notIn?: $Enums.popups_trigger_type[];
    not?: Prisma.NestedEnumpopups_trigger_typeWithAggregatesFilter<$PrismaModel> | $Enums.popups_trigger_type;
    _count?: Prisma.NestedIntFilter<$PrismaModel>;
    _min?: Prisma.NestedEnumpopups_trigger_typeFilter<$PrismaModel>;
    _max?: Prisma.NestedEnumpopups_trigger_typeFilter<$PrismaModel>;
};
export type NestedEnumpopups_display_typeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.popups_display_type | Prisma.Enumpopups_display_typeFieldRefInput<$PrismaModel>;
    in?: $Enums.popups_display_type[];
    notIn?: $Enums.popups_display_type[];
    not?: Prisma.NestedEnumpopups_display_typeWithAggregatesFilter<$PrismaModel> | $Enums.popups_display_type;
    _count?: Prisma.NestedIntFilter<$PrismaModel>;
    _min?: Prisma.NestedEnumpopups_display_typeFilter<$PrismaModel>;
    _max?: Prisma.NestedEnumpopups_display_typeFilter<$PrismaModel>;
};
export type NestedEnumpopups_positionWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.popups_position | Prisma.Enumpopups_positionFieldRefInput<$PrismaModel>;
    in?: $Enums.popups_position[];
    notIn?: $Enums.popups_position[];
    not?: Prisma.NestedEnumpopups_positionWithAggregatesFilter<$PrismaModel> | $Enums.popups_position;
    _count?: Prisma.NestedIntFilter<$PrismaModel>;
    _min?: Prisma.NestedEnumpopups_positionFilter<$PrismaModel>;
    _max?: Prisma.NestedEnumpopups_positionFilter<$PrismaModel>;
};
export type NestedEnumpopups_target_user_typeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.popups_target_user_type | Prisma.Enumpopups_target_user_typeFieldRefInput<$PrismaModel>;
    in?: $Enums.popups_target_user_type[];
    notIn?: $Enums.popups_target_user_type[];
    not?: Prisma.NestedEnumpopups_target_user_typeWithAggregatesFilter<$PrismaModel> | $Enums.popups_target_user_type;
    _count?: Prisma.NestedIntFilter<$PrismaModel>;
    _min?: Prisma.NestedEnumpopups_target_user_typeFilter<$PrismaModel>;
    _max?: Prisma.NestedEnumpopups_target_user_typeFilter<$PrismaModel>;
};
export type NestedEnumpopups_frequencyWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.popups_frequency | Prisma.Enumpopups_frequencyFieldRefInput<$PrismaModel>;
    in?: $Enums.popups_frequency[];
    notIn?: $Enums.popups_frequency[];
    not?: Prisma.NestedEnumpopups_frequencyWithAggregatesFilter<$PrismaModel> | $Enums.popups_frequency;
    _count?: Prisma.NestedIntFilter<$PrismaModel>;
    _min?: Prisma.NestedEnumpopups_frequencyFilter<$PrismaModel>;
    _max?: Prisma.NestedEnumpopups_frequencyFilter<$PrismaModel>;
};
export type NestedEnumproducts_categoryFilter<$PrismaModel = never> = {
    equals?: $Enums.products_category | Prisma.Enumproducts_categoryFieldRefInput<$PrismaModel>;
    in?: $Enums.products_category[];
    notIn?: $Enums.products_category[];
    not?: Prisma.NestedEnumproducts_categoryFilter<$PrismaModel> | $Enums.products_category;
};
export type NestedEnumproducts_access_typeFilter<$PrismaModel = never> = {
    equals?: $Enums.products_access_type | Prisma.Enumproducts_access_typeFieldRefInput<$PrismaModel>;
    in?: $Enums.products_access_type[];
    notIn?: $Enums.products_access_type[];
    not?: Prisma.NestedEnumproducts_access_typeFilter<$PrismaModel> | $Enums.products_access_type;
};
export type NestedEnumproducts_statusFilter<$PrismaModel = never> = {
    equals?: $Enums.products_status | Prisma.Enumproducts_statusFieldRefInput<$PrismaModel>;
    in?: $Enums.products_status[];
    notIn?: $Enums.products_status[];
    not?: Prisma.NestedEnumproducts_statusFilter<$PrismaModel> | $Enums.products_status;
};
export type NestedEnumproducts_categoryWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.products_category | Prisma.Enumproducts_categoryFieldRefInput<$PrismaModel>;
    in?: $Enums.products_category[];
    notIn?: $Enums.products_category[];
    not?: Prisma.NestedEnumproducts_categoryWithAggregatesFilter<$PrismaModel> | $Enums.products_category;
    _count?: Prisma.NestedIntFilter<$PrismaModel>;
    _min?: Prisma.NestedEnumproducts_categoryFilter<$PrismaModel>;
    _max?: Prisma.NestedEnumproducts_categoryFilter<$PrismaModel>;
};
export type NestedEnumproducts_access_typeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.products_access_type | Prisma.Enumproducts_access_typeFieldRefInput<$PrismaModel>;
    in?: $Enums.products_access_type[];
    notIn?: $Enums.products_access_type[];
    not?: Prisma.NestedEnumproducts_access_typeWithAggregatesFilter<$PrismaModel> | $Enums.products_access_type;
    _count?: Prisma.NestedIntFilter<$PrismaModel>;
    _min?: Prisma.NestedEnumproducts_access_typeFilter<$PrismaModel>;
    _max?: Prisma.NestedEnumproducts_access_typeFilter<$PrismaModel>;
};
export type NestedEnumproducts_statusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.products_status | Prisma.Enumproducts_statusFieldRefInput<$PrismaModel>;
    in?: $Enums.products_status[];
    notIn?: $Enums.products_status[];
    not?: Prisma.NestedEnumproducts_statusWithAggregatesFilter<$PrismaModel> | $Enums.products_status;
    _count?: Prisma.NestedIntFilter<$PrismaModel>;
    _min?: Prisma.NestedEnumproducts_statusFilter<$PrismaModel>;
    _max?: Prisma.NestedEnumproducts_statusFilter<$PrismaModel>;
};
export type NestedEnumpromotions_typeFilter<$PrismaModel = never> = {
    equals?: $Enums.promotions_type | Prisma.Enumpromotions_typeFieldRefInput<$PrismaModel>;
    in?: $Enums.promotions_type[];
    notIn?: $Enums.promotions_type[];
    not?: Prisma.NestedEnumpromotions_typeFilter<$PrismaModel> | $Enums.promotions_type;
};
export type NestedEnumpromotions_discount_typeFilter<$PrismaModel = never> = {
    equals?: $Enums.promotions_discount_type | Prisma.Enumpromotions_discount_typeFieldRefInput<$PrismaModel>;
    in?: $Enums.promotions_discount_type[];
    notIn?: $Enums.promotions_discount_type[];
    not?: Prisma.NestedEnumpromotions_discount_typeFilter<$PrismaModel> | $Enums.promotions_discount_type;
};
export type NestedEnumpromotions_applicable_toFilter<$PrismaModel = never> = {
    equals?: $Enums.promotions_applicable_to | Prisma.Enumpromotions_applicable_toFieldRefInput<$PrismaModel>;
    in?: $Enums.promotions_applicable_to[];
    notIn?: $Enums.promotions_applicable_to[];
    not?: Prisma.NestedEnumpromotions_applicable_toFilter<$PrismaModel> | $Enums.promotions_applicable_to;
};
export type NestedEnumpromotions_typeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.promotions_type | Prisma.Enumpromotions_typeFieldRefInput<$PrismaModel>;
    in?: $Enums.promotions_type[];
    notIn?: $Enums.promotions_type[];
    not?: Prisma.NestedEnumpromotions_typeWithAggregatesFilter<$PrismaModel> | $Enums.promotions_type;
    _count?: Prisma.NestedIntFilter<$PrismaModel>;
    _min?: Prisma.NestedEnumpromotions_typeFilter<$PrismaModel>;
    _max?: Prisma.NestedEnumpromotions_typeFilter<$PrismaModel>;
};
export type NestedEnumpromotions_discount_typeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.promotions_discount_type | Prisma.Enumpromotions_discount_typeFieldRefInput<$PrismaModel>;
    in?: $Enums.promotions_discount_type[];
    notIn?: $Enums.promotions_discount_type[];
    not?: Prisma.NestedEnumpromotions_discount_typeWithAggregatesFilter<$PrismaModel> | $Enums.promotions_discount_type;
    _count?: Prisma.NestedIntFilter<$PrismaModel>;
    _min?: Prisma.NestedEnumpromotions_discount_typeFilter<$PrismaModel>;
    _max?: Prisma.NestedEnumpromotions_discount_typeFilter<$PrismaModel>;
};
export type NestedEnumpromotions_applicable_toWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.promotions_applicable_to | Prisma.Enumpromotions_applicable_toFieldRefInput<$PrismaModel>;
    in?: $Enums.promotions_applicable_to[];
    notIn?: $Enums.promotions_applicable_to[];
    not?: Prisma.NestedEnumpromotions_applicable_toWithAggregatesFilter<$PrismaModel> | $Enums.promotions_applicable_to;
    _count?: Prisma.NestedIntFilter<$PrismaModel>;
    _min?: Prisma.NestedEnumpromotions_applicable_toFilter<$PrismaModel>;
    _max?: Prisma.NestedEnumpromotions_applicable_toFilter<$PrismaModel>;
};
export type NestedJsonFilter<$PrismaModel = never> = Prisma.PatchUndefined<Prisma.Either<Required<NestedJsonFilterBase<$PrismaModel>>, Exclude<keyof Required<NestedJsonFilterBase<$PrismaModel>>, 'path'>>, Required<NestedJsonFilterBase<$PrismaModel>>> | Prisma.OptionalFlat<Omit<Required<NestedJsonFilterBase<$PrismaModel>>, 'path'>>;
export type NestedJsonFilterBase<$PrismaModel = never> = {
    equals?: runtime.InputJsonValue | Prisma.JsonFieldRefInput<$PrismaModel> | Prisma.JsonNullValueFilter;
    path?: string;
    mode?: Prisma.QueryMode | Prisma.EnumQueryModeFieldRefInput<$PrismaModel>;
    string_contains?: string | Prisma.StringFieldRefInput<$PrismaModel>;
    string_starts_with?: string | Prisma.StringFieldRefInput<$PrismaModel>;
    string_ends_with?: string | Prisma.StringFieldRefInput<$PrismaModel>;
    array_starts_with?: runtime.InputJsonValue | Prisma.JsonFieldRefInput<$PrismaModel> | null;
    array_ends_with?: runtime.InputJsonValue | Prisma.JsonFieldRefInput<$PrismaModel> | null;
    array_contains?: runtime.InputJsonValue | Prisma.JsonFieldRefInput<$PrismaModel> | null;
    lt?: runtime.InputJsonValue;
    lte?: runtime.InputJsonValue;
    gt?: runtime.InputJsonValue;
    gte?: runtime.InputJsonValue;
    not?: runtime.InputJsonValue | Prisma.JsonFieldRefInput<$PrismaModel> | Prisma.JsonNullValueFilter;
};
export type NestedEnumsms_campaigns_typeFilter<$PrismaModel = never> = {
    equals?: $Enums.sms_campaigns_type | Prisma.Enumsms_campaigns_typeFieldRefInput<$PrismaModel>;
    in?: $Enums.sms_campaigns_type[];
    notIn?: $Enums.sms_campaigns_type[];
    not?: Prisma.NestedEnumsms_campaigns_typeFilter<$PrismaModel> | $Enums.sms_campaigns_type;
};
export type NestedEnumsms_campaigns_target_audienceFilter<$PrismaModel = never> = {
    equals?: $Enums.sms_campaigns_target_audience | Prisma.Enumsms_campaigns_target_audienceFieldRefInput<$PrismaModel>;
    in?: $Enums.sms_campaigns_target_audience[];
    notIn?: $Enums.sms_campaigns_target_audience[];
    not?: Prisma.NestedEnumsms_campaigns_target_audienceFilter<$PrismaModel> | $Enums.sms_campaigns_target_audience;
};
export type NestedEnumsms_campaigns_schedule_typeFilter<$PrismaModel = never> = {
    equals?: $Enums.sms_campaigns_schedule_type | Prisma.Enumsms_campaigns_schedule_typeFieldRefInput<$PrismaModel>;
    in?: $Enums.sms_campaigns_schedule_type[];
    notIn?: $Enums.sms_campaigns_schedule_type[];
    not?: Prisma.NestedEnumsms_campaigns_schedule_typeFilter<$PrismaModel> | $Enums.sms_campaigns_schedule_type;
};
export type NestedEnumsms_campaigns_statusFilter<$PrismaModel = never> = {
    equals?: $Enums.sms_campaigns_status | Prisma.Enumsms_campaigns_statusFieldRefInput<$PrismaModel>;
    in?: $Enums.sms_campaigns_status[];
    notIn?: $Enums.sms_campaigns_status[];
    not?: Prisma.NestedEnumsms_campaigns_statusFilter<$PrismaModel> | $Enums.sms_campaigns_status;
};
export type NestedEnumsms_campaigns_typeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.sms_campaigns_type | Prisma.Enumsms_campaigns_typeFieldRefInput<$PrismaModel>;
    in?: $Enums.sms_campaigns_type[];
    notIn?: $Enums.sms_campaigns_type[];
    not?: Prisma.NestedEnumsms_campaigns_typeWithAggregatesFilter<$PrismaModel> | $Enums.sms_campaigns_type;
    _count?: Prisma.NestedIntFilter<$PrismaModel>;
    _min?: Prisma.NestedEnumsms_campaigns_typeFilter<$PrismaModel>;
    _max?: Prisma.NestedEnumsms_campaigns_typeFilter<$PrismaModel>;
};
export type NestedEnumsms_campaigns_target_audienceWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.sms_campaigns_target_audience | Prisma.Enumsms_campaigns_target_audienceFieldRefInput<$PrismaModel>;
    in?: $Enums.sms_campaigns_target_audience[];
    notIn?: $Enums.sms_campaigns_target_audience[];
    not?: Prisma.NestedEnumsms_campaigns_target_audienceWithAggregatesFilter<$PrismaModel> | $Enums.sms_campaigns_target_audience;
    _count?: Prisma.NestedIntFilter<$PrismaModel>;
    _min?: Prisma.NestedEnumsms_campaigns_target_audienceFilter<$PrismaModel>;
    _max?: Prisma.NestedEnumsms_campaigns_target_audienceFilter<$PrismaModel>;
};
export type NestedEnumsms_campaigns_schedule_typeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.sms_campaigns_schedule_type | Prisma.Enumsms_campaigns_schedule_typeFieldRefInput<$PrismaModel>;
    in?: $Enums.sms_campaigns_schedule_type[];
    notIn?: $Enums.sms_campaigns_schedule_type[];
    not?: Prisma.NestedEnumsms_campaigns_schedule_typeWithAggregatesFilter<$PrismaModel> | $Enums.sms_campaigns_schedule_type;
    _count?: Prisma.NestedIntFilter<$PrismaModel>;
    _min?: Prisma.NestedEnumsms_campaigns_schedule_typeFilter<$PrismaModel>;
    _max?: Prisma.NestedEnumsms_campaigns_schedule_typeFilter<$PrismaModel>;
};
export type NestedEnumsms_campaigns_statusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.sms_campaigns_status | Prisma.Enumsms_campaigns_statusFieldRefInput<$PrismaModel>;
    in?: $Enums.sms_campaigns_status[];
    notIn?: $Enums.sms_campaigns_status[];
    not?: Prisma.NestedEnumsms_campaigns_statusWithAggregatesFilter<$PrismaModel> | $Enums.sms_campaigns_status;
    _count?: Prisma.NestedIntFilter<$PrismaModel>;
    _min?: Prisma.NestedEnumsms_campaigns_statusFilter<$PrismaModel>;
    _max?: Prisma.NestedEnumsms_campaigns_statusFilter<$PrismaModel>;
};
export type NestedEnumusers_roleFilter<$PrismaModel = never> = {
    equals?: $Enums.users_role | Prisma.Enumusers_roleFieldRefInput<$PrismaModel>;
    in?: $Enums.users_role[];
    notIn?: $Enums.users_role[];
    not?: Prisma.NestedEnumusers_roleFilter<$PrismaModel> | $Enums.users_role;
};
export type NestedEnumusers_roleWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.users_role | Prisma.Enumusers_roleFieldRefInput<$PrismaModel>;
    in?: $Enums.users_role[];
    notIn?: $Enums.users_role[];
    not?: Prisma.NestedEnumusers_roleWithAggregatesFilter<$PrismaModel> | $Enums.users_role;
    _count?: Prisma.NestedIntFilter<$PrismaModel>;
    _min?: Prisma.NestedEnumusers_roleFilter<$PrismaModel>;
    _max?: Prisma.NestedEnumusers_roleFilter<$PrismaModel>;
};
export type NestedEnumverification_codes_typeFilter<$PrismaModel = never> = {
    equals?: $Enums.verification_codes_type | Prisma.Enumverification_codes_typeFieldRefInput<$PrismaModel>;
    in?: $Enums.verification_codes_type[];
    notIn?: $Enums.verification_codes_type[];
    not?: Prisma.NestedEnumverification_codes_typeFilter<$PrismaModel> | $Enums.verification_codes_type;
};
export type NestedEnumverification_codes_typeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.verification_codes_type | Prisma.Enumverification_codes_typeFieldRefInput<$PrismaModel>;
    in?: $Enums.verification_codes_type[];
    notIn?: $Enums.verification_codes_type[];
    not?: Prisma.NestedEnumverification_codes_typeWithAggregatesFilter<$PrismaModel> | $Enums.verification_codes_type;
    _count?: Prisma.NestedIntFilter<$PrismaModel>;
    _min?: Prisma.NestedEnumverification_codes_typeFilter<$PrismaModel>;
    _max?: Prisma.NestedEnumverification_codes_typeFilter<$PrismaModel>;
};
