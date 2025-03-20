export type Json = string | number | boolean | null | { [key: string]: Json | undefined } | Json[]

export interface Database {
  public: {
    Tables: {
      bookmarks: {
        Row: {
          id: string
          created_at: string
          url: string
          title: string
          description: string | null
          tags: string[] | null
          user_id: string
        }
        Insert: {
          id?: string
          created_at?: string
          url: string
          title: string
          description?: string | null
          tags?: string[] | null
          user_id: string
        }
        Update: {
          id?: string
          created_at?: string
          url?: string
          title?: string
          description?: string | null
          tags?: string[] | null
          user_id?: string
        }
      }
    }
    Views: {
      [_ in never]: never
    }
    Functions: {
      [_ in never]: never
    }
  }
}
