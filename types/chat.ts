export interface Message {
    id: string;
    role: "user" | "assistant" | "system";
    content: string;
    isLoading?: boolean;
  }
