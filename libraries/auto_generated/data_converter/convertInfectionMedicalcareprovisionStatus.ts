// To parse this data:
//
//   import { Convert, InfectionMedicalcareprovisionStatus } from "./file";
//
//   const infectionMedicalcareprovisionStatus = Convert.toInfectionMedicalcareprovisionStatus(json);
//
// These functions will throw an error if the JSON doesn't
// match the expected interface, even if the JSON is valid.

export interface InfectionMedicalcareprovisionStatus {
    date:        string;
    vaccinedate: string;
    data:        Data;
}

export interface Data {
    新規陽性者:        number;
    濃厚接触者・接触者:    number;
    海外渡航歴あり:      number;
    不明:           number;
    調査中:          number;
    死亡者数:         number;
    無症状:          number;
    軽症:           number;
    中症:           number;
    重症:           number;
    pcR更新日時:      Date;
    うち1日当たりの検査人数: number;
    累計検査人数:       number;
    うち1日当たりの検査件数: number;
    累計検査件数:       number;
    男性:           number;
    女性:           number;
    累計陽性者数:       number;
    うち10歳未満:      number;
    うち10代:        number;
    うち20代:        number;
    うち30代:        number;
    うち40代:        number;
    うち50代:        number;
    うち60代:        number;
    うち70代:        number;
    うち80代:        number;
    うち90代:        number;
    うち100歳以上:     number;
}

// Converts JSON strings to/from your types
// and asserts the results of JSON.parse at runtime
export class Convert {
    public static toInfectionMedicalcareprovisionStatus(json: string): InfectionMedicalcareprovisionStatus {
        return cast(JSON.parse(json), r("InfectionMedicalcareprovisionStatus"));
    }

    public static infectionMedicalcareprovisionStatusToJson(value: InfectionMedicalcareprovisionStatus): string {
        return JSON.stringify(uncast(value, r("InfectionMedicalcareprovisionStatus")), null, 2);
    }
}

function invalidValue(typ: any, val: any, key: any = ''): never {
    if (key) {
        throw Error(`Invalid value for key "${key}". Expected type ${JSON.stringify(typ)} but got ${JSON.stringify(val)}`);
    }
    throw Error(`Invalid value ${JSON.stringify(val)} for type ${JSON.stringify(typ)}`, );
}

function jsonToJSProps(typ: any): any {
    if (typ.jsonToJS === undefined) {
        const map: any = {};
        typ.props.forEach((p: any) => map[p.json] = { key: p.js, typ: p.typ });
        typ.jsonToJS = map;
    }
    return typ.jsonToJS;
}

function jsToJSONProps(typ: any): any {
    if (typ.jsToJSON === undefined) {
        const map: any = {};
        typ.props.forEach((p: any) => map[p.js] = { key: p.json, typ: p.typ });
        typ.jsToJSON = map;
    }
    return typ.jsToJSON;
}

function transform(val: any, typ: any, getProps: any, key: any = ''): any {
    function transformPrimitive(typ: string, val: any): any {
        if (typeof typ === typeof val) return val;
        return invalidValue(typ, val, key);
    }

    function transformUnion(typs: any[], val: any): any {
        // val must validate against one typ in typs
        const l = typs.length;
        for (let i = 0; i < l; i++) {
            const typ = typs[i];
            try {
                return transform(val, typ, getProps);
            } catch (_) {}
        }
        return invalidValue(typs, val);
    }

    function transformEnum(cases: string[], val: any): any {
        if (cases.indexOf(val) !== -1) return val;
        return invalidValue(cases, val);
    }

    function transformArray(typ: any, val: any): any {
        // val must be an array with no invalid elements
        if (!Array.isArray(val)) return invalidValue("array", val);
        return val.map(el => transform(el, typ, getProps));
    }

    function transformDate(val: any): any {
        if (val === null) {
            return null;
        }
        const d = new Date(val);
        if (isNaN(d.valueOf())) {
            return invalidValue("Date", val);
        }
        return d;
    }

    function transformObject(props: { [k: string]: any }, additional: any, val: any): any {
        if (val === null || typeof val !== "object" || Array.isArray(val)) {
            return invalidValue("object", val);
        }
        const result: any = {};
        Object.getOwnPropertyNames(props).forEach(key => {
            const prop = props[key];
            const v = Object.prototype.hasOwnProperty.call(val, key) ? val[key] : undefined;
            result[prop.key] = transform(v, prop.typ, getProps, prop.key);
        });
        Object.getOwnPropertyNames(val).forEach(key => {
            if (!Object.prototype.hasOwnProperty.call(props, key)) {
                result[key] = transform(val[key], additional, getProps, key);
            }
        });
        return result;
    }

    if (typ === "any") return val;
    if (typ === null) {
        if (val === null) return val;
        return invalidValue(typ, val);
    }
    if (typ === false) return invalidValue(typ, val);
    while (typeof typ === "object" && typ.ref !== undefined) {
        typ = typeMap[typ.ref];
    }
    if (Array.isArray(typ)) return transformEnum(typ, val);
    if (typeof typ === "object") {
        return typ.hasOwnProperty("unionMembers") ? transformUnion(typ.unionMembers, val)
            : typ.hasOwnProperty("arrayItems")    ? transformArray(typ.arrayItems, val)
            : typ.hasOwnProperty("props")         ? transformObject(getProps(typ), typ.additional, val)
            : invalidValue(typ, val);
    }
    // Numbers can be parsed by Date but shouldn't be.
    if (typ === Date && typeof val !== "number") return transformDate(val);
    return transformPrimitive(typ, val);
}

function cast<T>(val: any, typ: any): T {
    return transform(val, typ, jsonToJSProps);
}

function uncast<T>(val: T, typ: any): any {
    return transform(val, typ, jsToJSONProps);
}

function a(typ: any) {
    return { arrayItems: typ };
}

function u(...typs: any[]) {
    return { unionMembers: typs };
}

function o(props: any[], additional: any) {
    return { props, additional };
}

function m(additional: any) {
    return { props: [], additional };
}

function r(name: string) {
    return { ref: name };
}

const typeMap: any = {
    "InfectionMedicalcareprovisionStatus": o([
        { json: "date", js: "date", typ: "" },
        { json: "vaccinedate", js: "vaccinedate", typ: "" },
        { json: "data", js: "data", typ: r("Data") },
    ], false),
    "Data": o([
        { json: "新規陽性者", js: "新規陽性者", typ: 0 },
        { json: "濃厚接触者・接触者", js: "濃厚接触者・接触者", typ: 0 },
        { json: "海外渡航歴あり", js: "海外渡航歴あり", typ: 0 },
        { json: "不明", js: "不明", typ: 0 },
        { json: "調査中", js: "調査中", typ: 0 },
        { json: "死亡者数", js: "死亡者数", typ: 0 },
        { json: "無症状", js: "無症状", typ: 0 },
        { json: "軽症", js: "軽症", typ: 0 },
        { json: "中症", js: "中症", typ: 0 },
        { json: "重症", js: "重症", typ: 0 },
        { json: "PCR更新日時", js: "pcR更新日時", typ: Date },
        { json: "うち1日当たりの検査人数", js: "うち1日当たりの検査人数", typ: 0 },
        { json: "累計検査人数", js: "累計検査人数", typ: 0 },
        { json: "うち1日当たりの検査件数", js: "うち1日当たりの検査件数", typ: 0 },
        { json: "累計検査件数", js: "累計検査件数", typ: 0 },
        { json: "男性", js: "男性", typ: 0 },
        { json: "女性", js: "女性", typ: 0 },
        { json: "累計陽性者数", js: "累計陽性者数", typ: 0 },
        { json: "うち10歳未満", js: "うち10歳未満", typ: 0 },
        { json: "うち10代", js: "うち10代", typ: 0 },
        { json: "うち20代", js: "うち20代", typ: 0 },
        { json: "うち30代", js: "うち30代", typ: 0 },
        { json: "うち40代", js: "うち40代", typ: 0 },
        { json: "うち50代", js: "うち50代", typ: 0 },
        { json: "うち60代", js: "うち60代", typ: 0 },
        { json: "うち70代", js: "うち70代", typ: 0 },
        { json: "うち80代", js: "うち80代", typ: 0 },
        { json: "うち90代", js: "うち90代", typ: 0 },
        { json: "うち100歳以上", js: "うち100歳以上", typ: 0 },
    ], false),
};
