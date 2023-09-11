import { Repository } from './repository';
import { Release } from './release';
import { Changelog } from './changelog';
import { AffectedFile } from './affected_file';

export interface Artifact {
    id: number;
    defconfig: string;
    url: string;
    filesize: number;
    build_log_url: string;
    repository_id: number;
    release_id: number;
}

export interface ArtifactDTO {
    repository: Repository;
    artifact: Artifact;
    release: Release;
    changelogs: Changelog[];
    affected_files: AffectedFile[];
}

export interface DefconfigDTO {
    defconfig: string;
    count: number;
}
