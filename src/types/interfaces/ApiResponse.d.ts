export interface ErrorResponse {
    http_status?: number;
    message: string;
}
export interface ApiResponse {
    errors?: ErrorResponse[];
    [key: string]: any;
}
