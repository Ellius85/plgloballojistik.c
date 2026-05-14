CREATE TABLE inquiries (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    name VARCHAR(255) NOT NULL,
    email VARCHAR(255) NOT NULL,
    phone VARCHAR(50) NOT NULL,
    message TEXT,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
    is_processed BOOLEAN DEFAULT FALSE
);

-- Разрешения для Supabase
GRANT INSERT ON inquiries TO anon;
GRANT SELECT ON inquiries TO authenticated;
GRANT UPDATE ON inquiries TO authenticated;