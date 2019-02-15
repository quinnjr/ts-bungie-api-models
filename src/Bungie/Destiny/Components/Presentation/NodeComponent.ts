/**
 * Bungie.Net API
 * These endpoints constitute the functionality exposed by Bungie.net, both for more traditional website functionality and for connectivity to Bungie video games and their related functionality.
 *
 * OpenAPI spec version: 2.3.3
 * Contact: support@bungie.com
 */
 
import { State } from '../../Presentation/Node/State';
import { ObjectiveProgress } from '../../Quests/ObjectiveProgress';

export interface NodeComponent { 
    state?: State;
    /**
     * An optional property: presentation nodes MAY have objectives, which can be used to infer more human readable data about the progress. However, progressValue and completionValue ought to be considered the canonical values for progress on Progression Nodes.
     */
    objective?: ObjectiveProgress;
    /**
     * How much of the presentation node is considered to be completed so far by the given character/profile.
     */
    progressValue?: number;
    /**
     * The value at which the presentation ode is considered to be completed.
     */
    completionValue?: number;
}
