declare module 'alt:chat' {
    export function send(player: any, message: string): void;
    export function broadcast(message: string): void;
}