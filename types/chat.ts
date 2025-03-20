export interface Message {
    id: string;
    role: "data" | "user" | "assistant" | "system";
    content: string;
    isLoading?: boolean;
  }
