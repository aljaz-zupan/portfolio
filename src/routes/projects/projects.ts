type Project {
    title: string,
    categories: Array<string>,
    website: string
    done: boolean
}

export const projects: Array<Project> = [
    {
        title: "Supabase",
        categories: ["database", "auth"],
        website: "https://supabase.com/",
        done: false
    },
    {
        title: "Pocketbase",
        categories: ["database", "auth"],
        website: "https://pocketbase.io/",
        done: false
    },
    {
        title: "AppWrite",
        categories: ["database", "auth"],
        website: "https://appwrite.io/",
        done: false
    },
    {
        title: "SurrealDB",
        categories: ["database"],
        website: "https://surrealdb.com/",
        done: false
    },
    {
        title: "Redis",
        categories: ["database", "cache"],
        website: "https://redis.io/",
        done: false
    },
    {
        title: "Meilisearcg",
        categories: ["database", "search"],
        website: "https://www.meilisearch.com/",
        done: false
    },
    {
        title: "MindsDB",
        categories: ["database", "machine learning"],
        website: "https://mindsdb.com/",
        done: false
    },
]