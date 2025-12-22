export default interface Response {
    /** Content items */
    items: unknown[];
    /** Offset */
    offset: number;
    /** Limit */
    limit: number;
    /** Total counter */
    total: number;
}