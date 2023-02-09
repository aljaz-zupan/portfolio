interface Project {
    title: string,
    categories: Array<string>,
    description: string,
    website: string,
    done: boolean
}

export const projects: Array<Project> = [
    {
        title: "Supabase",
        categories: ["database", "auth"],
        description: "Try this firebase alternative",
        website: "https://supabase.com/",
        done: false
    },
    {
        title: "Pocketbase",
        categories: ["database", "auth"],
        description: "A one file database based on sqlite",
        website: "https://pocketbase.io/",
        done: false
    },
    {
        title: "AppWrite",
        categories: ["database", "auth"],
        description: "Another firebase alternative",
        website: "https://appwrite.io/",
        done: false
    },
    {
        title: "SurrealDB",
        categories: ["database"],
        description: "New kind of database",
        website: "https://surrealdb.com/",
        done: false
    },
    {
        title: "Redis",
        categories: ["database", "cache"],
        description: "Add cacheing to your projects, not as main database",
        website: "https://redis.io/",
        done: false
    },
    {
        title: "Meilisearch",
        categories: ["database", "search"],
        description: "Who needs elasticsearch? Try this search engine",
        website: "https://www.meilisearch.com/",
        done: false
    },
    {
        title: "MindsDB",
        categories: ["database", "machine learning"],
        description: "New kind of database, that can give you predictions since it brings machine learning into the database",
        website: "https://mindsdb.com/",
        done: false
    },
]