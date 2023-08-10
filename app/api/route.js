import fsPromises from 'fs/promises';
import { NextResponse } from 'next/server';
import path from 'path'

const filePath = path.join(process.cwd(), 'app/utils/pageData.json')

export async function GET() {
    const jsonData = await fsPromises.readFile(filePath);
    
    const objectData = JSON.parse(jsonData);

    return NextResponse.json(objectData)
}