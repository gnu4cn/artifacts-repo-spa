import { ReleaseChannelDTO } from './release';
import { DefconfigDTO } from './artifact';

export interface Repository {
    id: number;
    org: string;
    repo: string;
}

export interface RepositoryBriefDTO {
    repo: Repository;
    release_channels: ReleaseChannelDTO[];
    defconfigs: DefconfigDTO[];
    days: string[];
}

export interface RepositoryBriefDTOResponse {
    message: string,
    data: RepositoryBriefDTO,
}

export interface RepositoriesBriefDTOResponse {
    message: string,
    data: RepositoryBriefDTO[],
}
