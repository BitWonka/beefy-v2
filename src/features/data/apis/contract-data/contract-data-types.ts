import type { BeefyState } from '../../../../redux-types';
import type { BoostPromoEntity } from '../../entities/promo';
import { type BigNumber } from 'bignumber.js';
import type {
  VaultCowcentrated,
  VaultGov,
  VaultGovMulti,
  VaultStandard,
} from '../../entities/vault';
import type { TokenEntity } from '../../entities/token';
import type { Address } from 'abitype';

export interface IContractDataApi {
  fetchAllContractData(
    state: BeefyState,
    standardVaults: VaultStandard[],
    govVaults: VaultGov[],
    govVaultsMulti: VaultGovMulti[],
    cowVaults: VaultCowcentrated[],
    boosts: BoostPromoEntity[],
    boostsMulti: BoostPromoEntity[]
  ): Promise<FetchAllContractDataResult>;
}

export interface GovVaultRawContractData {
  totalSupply: bigint;
}

export interface GovVaultContractData {
  id: string;
  totalSupply: BigNumber;
}

export interface RewardContractData {
  token: Pick<TokenEntity, 'address' | 'symbol' | 'decimals' | 'oracleId' | 'chainId'>;
  rewardRate: BigNumber;
  periodFinish: Date | undefined;
  index: number;
}

export interface BoostRewardContractData extends RewardContractData {
  isPreStake: boolean;
}

export interface GovVaultMultiRawContractData {
  totalSupply: bigint;
  rewards: readonly {
    rewardAddress: string;
    rate: bigint;
    periodFinish: bigint;
  }[];
}

export interface GovVaultMultiContractData {
  id: string;
  totalSupply: BigNumber;
  rewards: RewardContractData[];
}

export interface StandardVaultRawContractData {
  balance: bigint;
  pricePerFullShare: bigint;
  strategy: string;
  paused: boolean;
}

export interface StandardVaultContractData {
  id: string;

  balance: BigNumber;

  /**
   * pricePerFullShare is how you find out how much your mooTokens (shares)
   * represent in term of the underlying asset
   * So if you deposit 1 BNB you will get, for example 0.95 mooBNB,
   * with a ppfs of X. if you multiply your mooBNB * ppfs you get your amount in BNB
   */
  pricePerFullShare: BigNumber;

  /**
   * The strategy address
   */
  strategy: string;

  paused: boolean;
}

export interface CowVaultRawContractData {
  token0Balance: bigint;
  token1Balance: bigint;
  strategy: Address;
  paused: boolean;
}
export interface CowVaultContractData {
  id: string;
  balances: BigNumber[];
  strategy: string;
  paused: boolean;
}

export interface BoostRawContractData {
  totalSupply: bigint;
  rewardRate: bigint;
  periodFinish: bigint | undefined; // undefined means boost is in prestake
  isPreStake: boolean;
}

export interface BoostContractData {
  id: string;
  periodFinish: Date | undefined;
  totalSupply: BigNumber;
  isPreStake: boolean;
  rewards: BoostRewardContractData[];
}

export interface FetchAllContractDataResult {
  boosts: BoostContractData[];
  standardVaults: StandardVaultContractData[];
  govVaults: GovVaultContractData[];
  govVaultsMulti: GovVaultMultiContractData[];
  cowVaults: CowVaultContractData[];
}
