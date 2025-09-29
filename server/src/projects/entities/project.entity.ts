import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

@Schema({ timestamps: true })
export class Project extends Document {
  @Prop({ required: true })
  image: string; // filename/path stored as string

  @Prop({ required: true })
  title: string;

  @Prop({ required: true })
  description: string;

  @Prop({ required: true })
  liveSite: string;

  @Prop({ required: true })
  githubLink: string;
}

export const ProjectSchema = SchemaFactory.createForClass(Project);
