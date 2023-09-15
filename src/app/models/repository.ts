import { ReleaseChannelDTO } from './release';
import { DefconfigDTO } from './artifact';
import { Tag } from './tag';

export interface Repository {
    id: number;
    org: string;
    repo: string;
}

export interface RepositoryBriefDTO {
    repo: Repository;
    release_channels: ReleaseChannelDTO[];
    tags: Tag[] | null;
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
