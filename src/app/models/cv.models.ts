export interface Header {
    name: string;
    role: string;
    email: string;
    phone: string;
    location: string;
    photoUrl: string;
}

export interface WorkExperience {
    puesto: string;
    empresa: string;
    periodo: string;
    ubicacion: string;
    logros: string | string[];
}

export interface Skill {
    name: string;
    percentage: number;
    category?: string;
}

export interface Education {
    institucion: string;
    titulo: string;
    periodo: string;
}

export interface Certificate {
    nombre: string;
    emisor: string;
    fecha: string;
}

export interface Language {
    idioma: string;
    nivel: string;
}

export interface Interest {
    actividad: string;
}
