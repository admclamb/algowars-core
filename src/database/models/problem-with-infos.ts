import { Problem } from '../entities';
import { ProblemInfoLanguage } from '../entities/problem-info-language.entity';

export interface ProblemWithInfos extends Problem {
  problemInfo: ProblemInfoLanguage[];
}
