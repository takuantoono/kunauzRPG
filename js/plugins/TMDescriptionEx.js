//=============================================================================
// TMVplugin - 詳細説明ウィンドウ
// バージョン: 2.0.3
// 最終更新日: 2017/02/21
// 配布元    : http://hikimoki.sakura.ne.jp/
//-----------------------------------------------------------------------------
// Copyright (c) 2016 tomoaky
// Released under the MIT license.
// http://opensource.org/licenses/mit-license.php
//=============================================================================

/*:
 * @plugindesc アイテムやスキルの詳細情報を表示する機能を追加します。
 *
 * @author tomoaky (http://hikimoki.sakura.ne.jp/)
 *
 * @param descriptionKeyCode
 * @desc 説明ボタンとして使うキー
 * 初期値: 65
 * @default 65
 *
 * @param leftPaneWidth
 * @desc 左側のパラメータの幅
 * 初期値: 300
 * @default 300
 *
 * @param rightPaneWidth
 * @desc 右側のパラメータの幅
 * 初期値: 400
 * @default 400
 *
 * @param horzLineHeight
 * @desc 横線の余白も含めた高さ
 * 初期値: 28
 * @default 28
 *
 * @param secretItemA
 * @desc 隠しアイテムＡのタイプ名
 * 初期値: 隠しアイテムＡ
 * @default 隠しアイテムＡ
 *
 * @param secretItemB
 * @desc 隠しアイテムＢのタイプ名
 * 初期値: 隠しアイテムＢ
 * @default 隠しアイテムＢ
 *
 * @param consumableText
 * @desc 消耗の項目名
 * 初期値: 消耗
 * @default 消耗
 *
 * @param occasionText
 * @desc 使用可能時の項目名
 * 初期値: 制限
 * @default 制限
 *
 * @param scopeText
 * @desc 範囲の項目名
 * 初期値: 範囲
 * @default 範囲
 *
 * @param speedText
 * @desc 速度補正の項目名
 * 初期値: 速度補正
 * @default 速度補正
 *
 * @param successRateText
 * @desc 成功率の項目名
 * 初期値: 成功率
 * @default 成功率
 *
 * @param repeatsText
 * @desc 連続回数の項目名
 * 初期値: 連続回数
 * @default 連続回数
 *
 * @param tpGainText
 * @desc 得ＴＰの項目名
 * 初期値: 獲得ＴＰ
 * @default 獲得ＴＰ
 *
 * @param hitTypeText
 * @desc 命中タイプの項目名
 * 初期値: 命中判定
 * @default 命中判定
 *
 * @param priceText
 * @desc 価格の項目名
 * 初期値: 売却額
 * @default 売却額
 *
 * @param priceRate
 * @desc 価格の表示倍率
 * 初期値: 0.5
 * @default 0.5
 *
 * @param mpCostText
 * @desc 消費ＭＰの項目名
 * 初期値: 消費ＭＰ
 * @default 消費ＭＰ
 *
 * @param tpCostText
 * @desc 消費ＴＰの項目名
 * 初期値: 消費ＴＰ
 * @default 消費ＴＰ
 *
 * @param requiredWtypeText
 * @desc 必要武器の項目名
 * 初期値: 必要武器
 * @default 必要武器
 *
 * @param effectText
 * @desc 使用効果の項目名
 * 初期値: 効果
 * @default 効果
 *
 * @param traitText
 * @desc 特徴の項目名
 * 初期値: 特徴
 * @default 特徴
 *
 * @param effectTextRecoverHp
 * @desc ＨＰ回復の書式
 * 初期値: ＨＰが%1回復
 * @default ＨＰが%1回復
 *
 * @param effectTextRecoverMp
 * @desc ＭＰ回復の書式
 * 初期値: ＭＰが%1回復
 * @default ＭＰが%1回復
 *
 * @param effectTextGainTp
 * @desc ＴＰ増加の書式
 * 初期値: ＴＰが%1増加
 * @default ＴＰが%1増加
 *
 * @param effectTextAddState
 * @desc ステート付加の書式
 * 初期値: %2%の確率で%1を付加
 * @default %2%の確率で%1を付加
 *
 * @param effectTextRemoveState
 * @desc ステート解除の書式
 * 初期値: %2%の確率で%1を解除
 * @default %2%の確率で%1を解除
 *
 * @param effectTextAddBuff
 * @desc 強化の書式
 * 初期値: %2ターンの間だけ%1アップ
 * @default %2ターンの間だけ%1アップ
 *
 * @param effectTextAddDebuff
 * @desc 弱体の書式
 * 初期値: %2ターンの間だけ%1ダウン
 * @default %2ターンの間だけ%1ダウン
 *
 * @param effectTextRemoveBuff
 * @desc 強化の解除の書式
 * 初期値: %1アップの効果を解除
 * @default %1アップの効果を解除
 *
 * @param effectTextRemoveDebuff
 * @desc 弱体の解除の書式
 * 初期値: %1ダウンの効果を解除
 * @default %1ダウンの効果を解除
 *
 * @param effectTextSpecial
 * @desc 特殊効果の書式
 * 初期値: 戦闘から離脱する
 * @default 戦闘から離脱する
 *
 * @param effectTextGrow
 * @desc 成長の書式
 * 初期値: %1が永続的に%2上がる
 * @default %1が永続的に%2上がる
 *
 * @param effectTextLearnSkill
 * @desc スキル習得の書式
 * 初期値: %1を習得する
 * @default %1を習得する
 *
 * @param damageTextDamageHp
 * @desc ダメージタイプ『ＨＰダメージ』の書式
 * 初期値: ＨＰに%1ダメージを与える
 * @default ＨＰに%1ダメージを与える
 *
 * @param damageTextDamageMp
 * @desc ダメージタイプ『ＭＰダメージ』の書式
 * 初期値: ＭＰに%1ダメージを与える
 * @default ＭＰに%1ダメージを与える
 *
 * @param damageTextRecoverHp
 * @desc ダメージタイプ『ＨＰ回復』の書式
 * 初期値: ＨＰを回復する
 * @default ＨＰを回復する
 *
 * @param damageTextRecoverMp
 * @desc ダメージタイプ『ＭＰ回復』の書式
 * 初期値: ＭＰを回復する
 * @default ＭＰを回復する
 *
 * @param damageTextDrainHp
 * @desc ダメージタイプ『ＨＰ吸収』の書式
 * 初期値: 与えたダメージをＨＰとして吸収する
 * @default 与えたダメージをＨＰとして吸収する
 *
 * @param damageTextDrainMp
 * @desc ダメージタイプ『ＭＰ吸収』の書式
 * 初期値: 与えたダメージをＭＰとして吸収する
 * @default 与えたダメージをＭＰとして吸収する
 *
 * @param traitTextElementRate
 * @desc 属性有効度の書式
 * 初期値: %1耐性%2%
 * @default %1耐性%2%
 *
 * @param traitTextDebuffRate
 * @desc 弱体有効度の書式
 * 初期値: %1ダウン耐性%2%
 * @default %1ダウン耐性%2%
 *
 * @param traitTextStateRate
 * @desc ステート有効度の書式
 * 初期値: %1耐性%2%
 * @default %1耐性%2%
 *
 * @param traitTextStateResist
 * @desc ステート無効化の書式
 * 初期値: %1無効
 * @default %1無効
 *
 * @param traitTextParam
 * @desc 通常能力値の書式
 * 初期値: %1%2%
 * @default %1%2%
 *
 * @param traitTextXparam
 * @desc 追加能力値の書式
 * 初期値: %1%2
 * @default %1%2
 *
 * @param traitTextSparam
 * @desc 特殊能力値の書式
 * 初期値: %1%2%
 * @default %1%2%
 *
 * @param traitTextAttackElement
 * @desc 攻撃時属性の書式
 * 初期値: 攻撃に%1付加
 * @default 攻撃に%1付加
 *
 * @param traitTextAttackState
 * @desc 攻撃時ステートの書式
 * 初期値: 攻撃時に%2%の確率で%1を付加
 * @default 攻撃時に%2%の確率で%1を付加
 *
 * @param traitTextAttackSpeed
 * @desc 攻撃速度補正の書式
 * 初期値: 攻撃速度%1
 * @default 攻撃速度%1
 *
 * @param traitTextAttackTimes
 * @desc 攻撃追加回数の書式
 * 初期値: 攻撃回数%1
 * @default 攻撃回数%1
 *
 * @param traitTextStypeAdd
 * @desc スキルタイプ追加の書式
 * 初期値: %1使用可能
 * @default %1使用可能
 *
 * @param traitTextStypeSeal
 * @desc スキルタイプ封印の書式
 * 初期値: %1使用不可
 * @default %1使用不可
 *
 * @param traitTextSkillAdd
 * @desc スキル追加の書式
 * 初期値: %1使用可能
 * @default %1使用可能
 *
 * @param traitTextSkillSeal
 * @desc スキル封印の書式
 * 初期値: %1使用不可
 * @default %1使用不可
 *
 * @param traitTextEquipWtype
 * @desc 武器タイプ装備の書式
 * 初期値: %1装備可能
 * @default %1装備可能
 *
 * @param traitTextEquipAtype
 * @desc 防具タイプ装備の書式
 * 初期値: %1装備可能
 * @default %1装備可能
 *
 * @param traitTextEquipLock
 * @desc 装備固定の書式
 * 初期値: 
 * @default 
 *
 * @param traitTextEquipSeal
 * @desc 装備封印の書式
 * 初期値: %1装備不可
 * @default %1装備不可
 *
 * @param traitTextActionPlus
 * @desc 行動回数追加の書式
 * 初期値: %1%の確率で連続行動
 * @default %1%の確率で連続行動
 *
 * @param xparamText
 * @desc 追加能力値の項目名（カンマ区切りで１０項目）
 * 初期値: 命中,回避,会心,会心回避,魔法回避,魔法反射,反撃,…
 * @default 命中,回避,会心,会心回避,魔法回避,魔法反射,反撃,ＨＰ再生,ＭＰ再生,ＴＰ再生
 *
 * @param sparamText
 * @desc 特殊能力値の項目名（カンマ区切りで１０項目）
 * 初期値: 狙われ率,防御効果,回復効果,薬の知識,ＭＰ消費,…
 * @default 狙われ率,防御効果,回復効果,薬の知識,ＭＰ消費,ＴＰチャージ,物理ダメージ,魔法ダメージ,床ダメージ,経験値獲得
 *
 * @param consumableValue
 * @desc 消費の値
 * 初期値: する,しない
 * @default する,しない
 *
 * @param occasionValue
 * @desc 使用可能時の値
 * 初期値: なし,バトルのみ,メニューのみ,使用不可
 * @default なし,バトルのみ,メニューのみ,使用不可
 *
 * @param scopeValue
 * @desc 範囲の値（カンマ区切りで１２項目）
 * 初期値: なし,敵単体,敵全体,敵１体,敵２体,敵３体,敵４対,味方単体,…
 * @default なし,敵単体,敵全体,敵１体,敵２体,敵３体,敵４対,味方単体,味方全体,味方単体,味方全体,使用者
 *
 * @param hitTypeValue
 * @desc 命中タイプの値
 * 初期値: 必中,物理,魔法
 * @default 必中,物理,魔法
 *
 * @param slotTypeValue
 * @desc 特殊能力値の値
 * 初期値: 二刀流使用不可,二刀流使用可能
 * @default 二刀流使用不可,二刀流使用可能
 *
 * @param specialFlagValue
 * @desc 特殊フラグの値
 * 初期値: 自動戦闘,防御,身代わり,ＴＰ持ち越し
 * @default 自動戦闘,防御,身代わり,ＴＰ持ち越し
 *
 * @param partyAbilityValue
 * @desc パーティ能力の値（カンマ区切りで６項目）
 * 初期値: エンカウント半減,エンカウント無効,不意打ち無効,…
 * @default エンカウント半減,エンカウント無効,不意打ち無効,先制攻撃率アップ,獲得金額２倍,アイテム入手率２倍
 *
 * @param elementFooter
 * @desc 属性の接尾語
 * 初期値: 属性
 * @default 属性
 *
 * @param costExTextHp
 * @desc 消費ＨＰの書式（ TMSkillCostEx.js が必要）
 * 初期値: ＨＰを%1消費する
 * @default ＨＰを%1消費する
 *
 * @param costExTextItem
 * @desc 消費アイテムの書式（ TMSkillCostEx.js が必要）
 * 初期値: %1を%2個消費する
 * @default %1を%2個消費する
 *
 * @param costExTextExp
 * @desc 消費経験値の書式（ TMSkillCostEx.js が必要）
 * 初期値: 経験値を%1消費する
 * @default 経験値を%1消費する
 *
 * @param costExTextGold
 * @desc 消費金額の書式（ TMSkillCostEx.js が必要）
 * 初期値: お金を%1消費する
 * @default お金を%1消費する
 *
 * @param passiveAlwaysText
 * @desc 常時発動の書式（ TMPassiveSkill.js が必要）
 * 初期値: 常に効果が適用される
 * @default 常に効果が適用される
 *
 * @param passiveTpText
 * @desc ＴＰ○○以上で発動の書式（ TMPassiveSkill.js が必要）
 * 初期値: ＴＰ%1以上で効果が適用される
 * @default ＴＰ%1以上で効果が適用される
 *
 * @param passiveTpText2
 * @desc ＴＰ○○未満で発動の書式（ TMPassiveSkill.js が必要）
 * 初期値: ＴＰ%1未満で効果が適用される
 * @default ＴＰ%1未満で効果が適用される
 *
 * @param passiveStateText
 * @desc ○○状態で発動の書式（ TMPassiveSkill.js が必要）
 * 初期値: %1状態で効果が適用される
 * @default %1状態で効果が適用される
 *
 * @help
 * TMPlugin - 詳細説明ウィンドウ ver2.0.3
 * 
 * 使い方:
 *
 *   このプラグインを導入すると、アイテムやスキルを選択中にＡキーを押すことで
 *   詳細説明ウィンドウが開くようになります。
 *   ヘルプウィンドウをクリック（タップ）しても開けます。
 *
 *   使用するキーは descriptionKeyCode の値を変更することで設定できます。
 *   65 ならＡ、66 ならＢ、とアルファベットが順に並んでいます、
 *   ＸやＺなど他の機能に割り当てられていないキーを設定してください。
 *
 *   プラグインコマンドはありません。
 * 
 *   このプラグインは RPGツクールMV Version 1.3.4 で動作確認をしています。
 *
 *
 * メモ欄タグ（スキル、アイテム、武器、防具）:
 *
 *   <dType:素材>       # タイプ名（右上に表示）を素材にする
 *   <dText:テキスト>   # 右側パラメータの下部にテキストを追加（改行可能）
 */

var Imported = Imported || {};
Imported.TMDescriptionEx = true;

var TMPlugin = TMPlugin || {};
TMPlugin.DescriptionEx = {};
TMPlugin.DescriptionEx.Parameters = PluginManager.parameters('TMDescriptionEx');
TMPlugin.DescriptionEx.LeftPaneWidth = +TMPlugin.DescriptionEx.Parameters['leftPaneWidth'];
TMPlugin.DescriptionEx.RightPaneWidth = +TMPlugin.DescriptionEx.Parameters['rightPaneWidth'];
TMPlugin.DescriptionEx.HorzLineHeight = +TMPlugin.DescriptionEx.Parameters['horzLineHeight'];
TMPlugin.DescriptionEx.SecretItemA = TMPlugin.DescriptionEx.Parameters['secretItemA'];
TMPlugin.DescriptionEx.SecretItemB = TMPlugin.DescriptionEx.Parameters['secretItemB'];
TMPlugin.DescriptionEx.ConsumableText = TMPlugin.DescriptionEx.Parameters['consumableText'];
TMPlugin.DescriptionEx.OccasionText = TMPlugin.DescriptionEx.Parameters['occasionText'];
TMPlugin.DescriptionEx.ScopeText = TMPlugin.DescriptionEx.Parameters['scopeText'];
TMPlugin.DescriptionEx.SpeedText = TMPlugin.DescriptionEx.Parameters['speedText'];
TMPlugin.DescriptionEx.SuccessRateText = TMPlugin.DescriptionEx.Parameters['successRateText'];
TMPlugin.DescriptionEx.RepeatsText = TMPlugin.DescriptionEx.Parameters['repeatsText'];
TMPlugin.DescriptionEx.TpGainText = TMPlugin.DescriptionEx.Parameters['tpGainText'];
TMPlugin.DescriptionEx.HitTypeText = TMPlugin.DescriptionEx.Parameters['hitTypeText'];
TMPlugin.DescriptionEx.PriceText = TMPlugin.DescriptionEx.Parameters['priceText'];
TMPlugin.DescriptionEx.PriceRate = +TMPlugin.DescriptionEx.Parameters['priceRate'];
TMPlugin.DescriptionEx.MpCostText = TMPlugin.DescriptionEx.Parameters['mpCostText'];
TMPlugin.DescriptionEx.TpCostText = TMPlugin.DescriptionEx.Parameters['tpCostText'];
TMPlugin.DescriptionEx.RequiredWtypeText = TMPlugin.DescriptionEx.Parameters['requiredWtypeText'];
TMPlugin.DescriptionEx.EffectText = TMPlugin.DescriptionEx.Parameters['effectText'];
TMPlugin.DescriptionEx.TraitText = TMPlugin.DescriptionEx.Parameters['traitText'];
TMPlugin.DescriptionEx.EffectTextRecoverHp = TMPlugin.DescriptionEx.Parameters['effectTextRecoverHp'];
TMPlugin.DescriptionEx.EffectTextRecoverMp = TMPlugin.DescriptionEx.Parameters['effectTextRecoverMp'];
TMPlugin.DescriptionEx.EffectTextGainTp = TMPlugin.DescriptionEx.Parameters['effectTextGainTp'];
TMPlugin.DescriptionEx.EffectTextAddState = TMPlugin.DescriptionEx.Parameters['effectTextAddState'];
TMPlugin.DescriptionEx.EffectTextRemoveState = TMPlugin.DescriptionEx.Parameters['effectTextRemoveState'];
TMPlugin.DescriptionEx.EffectTextAddBuff = TMPlugin.DescriptionEx.Parameters['effectTextAddBuff'];
TMPlugin.DescriptionEx.EffectTextAddDebuff = TMPlugin.DescriptionEx.Parameters['effectTextAddDebuff'];
TMPlugin.DescriptionEx.EffectTextRemoveBuff = TMPlugin.DescriptionEx.Parameters['effectTextRemoveBuff'];
TMPlugin.DescriptionEx.EffectTextRemoveDebuff = TMPlugin.DescriptionEx.Parameters['effectTextRemoveDebuff'];
TMPlugin.DescriptionEx.EffectTextSpecial = TMPlugin.DescriptionEx.Parameters['effectTextSpecial'];
TMPlugin.DescriptionEx.EffectTextGrow = TMPlugin.DescriptionEx.Parameters['effectTextGrow'];
TMPlugin.DescriptionEx.EffectTextLearnSkill = TMPlugin.DescriptionEx.Parameters['effectTextLearnSkill'];
TMPlugin.DescriptionEx.DamageTextDamageHp  = TMPlugin.DescriptionEx.Parameters['damageTextDamageHp'];
TMPlugin.DescriptionEx.DamageTextDamageMp  = TMPlugin.DescriptionEx.Parameters['damageTextDamageMp'];
TMPlugin.DescriptionEx.DamageTextRecoverHp = TMPlugin.DescriptionEx.Parameters['damageTextRecoverHp'];
TMPlugin.DescriptionEx.DamageTextRecoverMp = TMPlugin.DescriptionEx.Parameters['damageTextRecoverMp'];
TMPlugin.DescriptionEx.DamageTextDrainHp   = TMPlugin.DescriptionEx.Parameters['damageTextDrainHp'];
TMPlugin.DescriptionEx.DamageTextDrainMp   = TMPlugin.DescriptionEx.Parameters['damageTextDrainMp'];
TMPlugin.DescriptionEx.TraitTextElementRate = TMPlugin.DescriptionEx.Parameters['traitTextElementRate'];
TMPlugin.DescriptionEx.TraitTextDebuffRate = TMPlugin.DescriptionEx.Parameters['traitTextDebuffRate'];
TMPlugin.DescriptionEx.TraitTextStateRate = TMPlugin.DescriptionEx.Parameters['traitTextStateRate'];
TMPlugin.DescriptionEx.TraitTextStateResist = TMPlugin.DescriptionEx.Parameters['traitTextStateResist'];
TMPlugin.DescriptionEx.TraitTextParam = TMPlugin.DescriptionEx.Parameters['traitTextParam'];
TMPlugin.DescriptionEx.TraitTextXparam = TMPlugin.DescriptionEx.Parameters['traitTextXparam'];
TMPlugin.DescriptionEx.TraitTextSparam = TMPlugin.DescriptionEx.Parameters['traitTextSparam'];
TMPlugin.DescriptionEx.TraitTextAttackElement = TMPlugin.DescriptionEx.Parameters['traitTextAttackElement'];
TMPlugin.DescriptionEx.TraitTextAttackState = TMPlugin.DescriptionEx.Parameters['traitTextAttackState'];
TMPlugin.DescriptionEx.TraitTextAttackSpeed = TMPlugin.DescriptionEx.Parameters['traitTextAttackSpeed'];
TMPlugin.DescriptionEx.TraitTextAttackTimes = TMPlugin.DescriptionEx.Parameters['traitTextAttackTimes'];
TMPlugin.DescriptionEx.TraitTextStypeAdd = TMPlugin.DescriptionEx.Parameters['traitTextStypeAdd'];
TMPlugin.DescriptionEx.TraitTextStypeSeal = TMPlugin.DescriptionEx.Parameters['traitTextStypeSeal'];
TMPlugin.DescriptionEx.TraitTextSkillAdd = TMPlugin.DescriptionEx.Parameters['traitTextSkillAdd'];
TMPlugin.DescriptionEx.TraitTextSkillSeal = TMPlugin.DescriptionEx.Parameters['traitTextSkillSeal'];
TMPlugin.DescriptionEx.TraitTextEquipWtype = TMPlugin.DescriptionEx.Parameters['traitTextEquipWtype'];
TMPlugin.DescriptionEx.TraitTextEquipAtype = TMPlugin.DescriptionEx.Parameters['traitTextEquipAtype'];
TMPlugin.DescriptionEx.TraitTextEquipLock = TMPlugin.DescriptionEx.Parameters['traitTextEquipLock'];
TMPlugin.DescriptionEx.TraitTextEquipSeal = TMPlugin.DescriptionEx.Parameters['traitTextEquipSeal'];
TMPlugin.DescriptionEx.TraitTextActionPlus = TMPlugin.DescriptionEx.Parameters['traitTextActionPlus'];
TMPlugin.DescriptionEx.XparamText = TMPlugin.DescriptionEx.Parameters['xparamText'].split(',');
TMPlugin.DescriptionEx.SparamText = TMPlugin.DescriptionEx.Parameters['sparamText'].split(',');
TMPlugin.DescriptionEx.ConsumableValue = TMPlugin.DescriptionEx.Parameters['consumableValue'].split(',');
TMPlugin.DescriptionEx.OccasionValue = TMPlugin.DescriptionEx.Parameters['occasionValue'].split(',');
TMPlugin.DescriptionEx.ScopeValue = TMPlugin.DescriptionEx.Parameters['scopeValue'].split(',');
TMPlugin.DescriptionEx.HitTypeValue = TMPlugin.DescriptionEx.Parameters['hitTypeValue'].split(',');
TMPlugin.DescriptionEx.SlotTypeValue = TMPlugin.DescriptionEx.Parameters['slotTypeValue'].split(',');
TMPlugin.DescriptionEx.SpecialFlagValue = TMPlugin.DescriptionEx.Parameters['specialFlagValue'].split(',');
TMPlugin.DescriptionEx.PartyAbilityValue = TMPlugin.DescriptionEx.Parameters['partyAbilityValue'].split(',');
TMPlugin.DescriptionEx.ElementFooter = TMPlugin.DescriptionEx.Parameters['elementFooter'];
TMPlugin.DescriptionEx.CostExTextHp   = TMPlugin.DescriptionEx.Parameters['costExTextHp'];
TMPlugin.DescriptionEx.CostExTextItem = TMPlugin.DescriptionEx.Parameters['costExTextItem'];
TMPlugin.DescriptionEx.CostExTextExp  = TMPlugin.DescriptionEx.Parameters['costExTextExp'];
TMPlugin.DescriptionEx.CostExTextGold = TMPlugin.DescriptionEx.Parameters['costExTextGold'];
TMPlugin.DescriptionEx.PassiveAlwaysText = TMPlugin.DescriptionEx.Parameters['passiveAlwaysText'];
TMPlugin.DescriptionEx.PassiveTpText = TMPlugin.DescriptionEx.Parameters['passiveTpText'];
TMPlugin.DescriptionEx.PassiveTpText2 = TMPlugin.DescriptionEx.Parameters['passiveTpText2'];
TMPlugin.DescriptionEx.PassiveStateText = TMPlugin.DescriptionEx.Parameters['passiveStateText'];

(function() {

  //-----------------------------------------------------------------------------
  // Input
  //

  Input.keyMapper[+TMPlugin.DescriptionEx.Parameters['descriptionKeyCode']] = 'description';

  //-----------------------------------------------------------------------------
  // Window_Selectable
  //

  var _Window_Selectable_processHandling = Window_Selectable.prototype.processHandling;
  Window_Selectable.prototype.processHandling = function() {
    if (this.isOpenAndActive() && this.isDescriptionEnabled() &&
        this.isDescriptionTriggered()) {
      this.processDescription();
    } else {
      _Window_Selectable_processHandling.call(this);
    }
  };

  Window_Selectable.prototype.isDescriptionEnabled = function() {
    return this.isHandled('description');
  };

  Window_Selectable.prototype.isDescriptionTriggered = function() {
    if (this._helpWindow && TouchInput.isTriggered()) {
      var wx = (Graphics.width - Graphics.boxWidth) / 2 + this._helpWindow.x;
      var wy = (Graphics.height - Graphics.boxHeight) / 2 + this._helpWindow.y;
      return (TouchInput.x >= wx && TouchInput.x < wx + this._helpWindow.width &&
              TouchInput.y >= wy && TouchInput.y < wy + this._helpWindow.height);
    }
    if (SceneManager._scene._descriptionExWindow.active && TouchInput.isTriggered()) {
       return true
    }
    return Input.isRepeated('description');
  };

  Window_Selectable.prototype.processDescription = function() {
    if (this.isCurrentItemDescriptionEnabled()) {
      SoundManager.playOk();
      this.updateInputData();
      this.deactivate();
      this.callDescriptionHandler();
    } else {
      this.playBuzzerSound();
    }
  };

  Window_Selectable.prototype.isCurrentItemDescriptionEnabled = function() {
    return true;
  };
  
  Window_Selectable.prototype.callDescriptionHandler = function() {
    if (this.isHandled('description')) {
      this._handlers['description'](this);
    }
  };
  
  //-----------------------------------------------------------------------------
  // Window_ItemList
  //

  Window_ItemList.prototype.isCurrentItemDescriptionEnabled = function() {
    return this.item();
  };
  
  //-----------------------------------------------------------------------------
  // Window_SkillList
  //

  Window_SkillList.prototype.isCurrentItemDescriptionEnabled = function() {
    return this.item();
  };
  
  //-----------------------------------------------------------------------------
  // Window_EquipSlot
  //

  Window_EquipSlot.prototype.isCurrentItemDescriptionEnabled = function() {
    return this.item();
  };
  
  Window_AugmentItemList.prototype.isCurrentItemDescriptionEnabled = function() {
    return this.item();
  };
  
  //-----------------------------------------------------------------------------
  // Window_ShopBuy
  //

  Window_ShopBuy.prototype.isCurrentItemDescriptionEnabled = function() {
    return this.item();
  };
  
  //-----------------------------------------------------------------------------
  // Window_Message
  //
  
  Window_Message.prototype.setDescriptionExWindow = function(descriptionExWindow) {
    this._descriptionExWindow = descriptionExWindow;
  };

  var _Window_Message_isAnySubWindowActive = Window_Message.prototype.isAnySubWindowActive;
  Window_Message.prototype.isAnySubWindowActive = function() {
    return (_Window_Message_isAnySubWindowActive.call(this) ||
            this._descriptionExWindow.active);
  };

  //-----------------------------------------------------------------------------
  // Window_DescriptionEx
  //

  function Window_DescriptionEx() {
    this.initialize.apply(this, arguments);
  }

  Window_DescriptionEx.prototype = Object.create(Window_Selectable.prototype);
  Window_DescriptionEx.prototype.constructor = Window_DescriptionEx;

  Window_DescriptionEx.prototype.initialize = function() {
    var width = Graphics.boxWidth;
    var height = Graphics.boxHeight;
    Window_Selectable.prototype.initialize.call(this, 0, 0, width, height);
    this.openness = 0;
  };

  Window_DescriptionEx.prototype.setItem = function(item) {
    if (this._item !== item) {
      this._item = item;
      this.refresh();
    }
  };

  Window_DescriptionEx.prototype.refresh = function() {
    this.contents.clear();
    if (this._item) {
      if (DataManager.isItem(this._item)) {
        this.refreshItem();
      } else if (DataManager.isWeapon(this._item)) {
        this.refreshWeapon();
      } else if (DataManager.isArmor(this._item)) {
        this.refreshArmor();
      } else if (DataManager.isSkill(this._item)) {
        this.refreshSkill();
      }
    }
  };

  Window_DescriptionEx.prototype.refreshItem = function() {
    var y = 0;
    this.drawItemName(this._item, 0, y);
    this.drawItemType();
    y = this.drawHorzLine(y + this.lineHeight());
    this.drawItemParameters(this.textPadding(), y);
    this.drawEffects(this.contents.width - this.textPadding() - TMPlugin.DescriptionEx.RightPaneWidth, y);
    //var profileY = this.profileY();
    //y = this.drawHorzLine(profileY);
    //this.drawProfile(0, y);
  };

  Window_DescriptionEx.prototype.refreshWeapon = function() {
    var y = 0;
    var x = 0;
    this.drawItemName(this._item, 0, y);
    this.drawWeaponType();
    y = this.drawHorzLine(y + this.lineHeight());
    //this.drawEquipParameters(this.textPadding(), y);
    var ichi = this.drawTraits(0, y);
    y = ichi[1]
    x = ichi[0]
    y+= this.lineHeight();
    this.drawPrice(x, y);
    y+= this.lineHeight();
    this.drawDetails(x, y);
    y+= this.lineHeight();
    this.drawOptionText(x, y);
    //var profileY = this.profileY();
    //y = this.drawHorzLine(profileY);
    //this.drawProfile(0, y);
  };

  Window_DescriptionEx.prototype.refreshArmor = function() {
  	var y = 0;
    var x = 0;
    this.drawItemName(this._item, 0, y);
    this.drawArmorType();
    y = this.drawHorzLine(y + this.lineHeight());
    //this.drawEquipParameters(this.textPadding(), y);
    var ichi = this.drawTraits(0, y);
    y = ichi[1]
    x = ichi[0]
    y+= this.lineHeight();
    this.drawPrice(x, y);
    y+= this.lineHeight();
    this.drawDetails(x, y);
    y+= this.lineHeight();
    this.drawOptionText(x, y);
    //var profileY = this.profileY();
    //y = this.drawHorzLine(profileY);
    //this.drawProfile(0, y);
  };
  
  Window_DescriptionEx.prototype.refreshSkill = function() {
    var y = 0;
    this.drawItemName(this._item, 0, y);
    this.drawSkillType();
    y = this.drawHorzLine(y + this.lineHeight());
    if (Imported.TMPassiveSkill && this._item.meta.passive) {
      this.drawPassiveSkillParameters(this.textPadding(), y);
    } else {
      this.drawSkillParameters(this.textPadding(), y);
      this.drawEffects(this.contents.width - this.textPadding() - TMPlugin.DescriptionEx.RightPaneWidth, y);
    }
    //var profileY = this.profileY();
    //y = this.drawHorzLine(profileY);
    //this.drawProfile(0, y);
  };

  Window_DescriptionEx.prototype.drawItemType = function() {
    if (this._item.meta.dType) {
      var text = this._item.meta.dType;
    } else if (this._item.itypeId === 1) {
      var text = TextManager.item;
    } else if (this._item.itypeId === 2) {
      var text = TextManager.keyItem;
    } else if (this._item.itypeId === 3) {
      var text = TMPlugin.DescriptionEx.SecretItemA;
    } else if (this._item.itypeId === 4) {
      var text = TMPlugin.DescriptionEx.SecretItemB;
    }
    this.drawText(text, 0, 0, this.contents.width - this.textPadding(), 'right');
  };
  
  Window_DescriptionEx.prototype.drawWeaponType = function() {
    var text = this._item.meta.dType ? this._item.meta.dType :
               $dataSystem.weaponTypes[this._item.wtypeId];
    this.drawText(text, 0, 0, this.contents.width - this.textPadding(), 'right');
  };
  
  Window_DescriptionEx.prototype.drawArmorType = function() {
    var text = this._item.meta.dType ? this._item.meta.dType :
               $dataSystem.armorTypes[this._item.atypeId];
    this.drawText(text, 0, 0, this.contents.width - this.textPadding(), 'right');
  };
  
  Window_DescriptionEx.prototype.drawSkillType = function() {
    var text = this._item.meta.dType ? this._item.meta.dType :
               $dataSystem.skillTypes[this._item.stypeId];
    this.drawText(text, 0, 0, this.contents.width - this.textPadding(), 'right');
  };
  
  Window_DescriptionEx.prototype.drawItemParameters = function(x, y) {
    var lineHeight = this.lineHeight();
    var text = '';
    var valueText = '';
    if($gameSwitches.value(376)){
    text = TMPlugin.DescriptionEx.ConsumableText;
    valueText = ["する", "しない"]
    }else{
    text = "Consumable";
    valueText = ["Yes", "No"]
    }
    y = this.drawLeftParameter(x, y, text, valueText[this._item.consumable ? 0 : 1]);
    if($gameSwitches.value(376)){
    text = TMPlugin.DescriptionEx.OccasionText;
    valueText = ["常時","戦闘","メニュー","使用不可"]
    }else{
    text = "Occasion";
    valueText = ["Allways","Battle","Menu","Never"]
    }
    y = this.drawLeftParameter(x, y, text, valueText[this._item.occasion]);
    if (this._item.meta.Weight){
    this.changeTextColor(this.systemColor());
    if($gameSwitches.value(376)){
    this.drawText("重量", x, y, TMPlugin.DescriptionEx.LeftPaneWidth);
    }else{
    this.drawText("Weight", x, y, TMPlugin.DescriptionEx.LeftPaneWidth);
    }
    this.resetTextColor();
    this.drawText(this._item.meta.Weight, x + 250, y, TMPlugin.DescriptionEx.RightPaneWidth);
    }
    y = this.drawBattleItemParameters(x, y + lineHeight);
    this.drawPrice(x, y + lineHeight);
  };
  
  
  Window_DescriptionEx.prototype.drawEquipParameters = function(x, y, item) {
    item = item || this._item;
    var lineHeight = this.lineHeight();
    for (var i = 0; i < 8; i++) {
      if (TextManager.param(i)) {
        this.changeTextColor(this.systemColor());
        this.drawText(TextManager.param(i), x, y, TMPlugin.DescriptionEx.LeftPaneWidth);
        this.resetTextColor();;
        this.drawText(item.params[i], x, y, TMPlugin.DescriptionEx.LeftPaneWidth, 'right');
        y += lineHeight;
      }
    }
    this.drawPrice(x, y + lineHeight);
  };
  
  Window_DescriptionEx.prototype.drawSkillParameters = function(x, y) {
    var lineHeight = this.lineHeight();
    this.changeTextColor(this.systemColor());
    if($gameSwitches.value(376)){
    var text1 = TMPlugin.DescriptionEx.MpCostText;
    var text2 = TMPlugin.DescriptionEx.TpCostText;
    var text3 = TMPlugin.DescriptionEx.OccasionText;
    var text4 = TMPlugin.DescriptionEx.RequiredWtypeText;
    var valueText = ["常時","戦闘","メニュー","使用不可"]
    }else{
    var text1 = "MP Cost";
    var text2 = "TP Cost";
    var text3 = "Occaision";
    var text4 = "Wep.Type"
    var valueText = ["Allways","Battle","Menu","Never"]
    }
    this.drawText(text1, x, y + lineHeight * 0, TMPlugin.DescriptionEx.LeftPaneWidth);
    this.drawText(text2, x, y + lineHeight * 1, TMPlugin.DescriptionEx.LeftPaneWidth);
    this.drawText(text3, x, y + lineHeight * 2, TMPlugin.DescriptionEx.LeftPaneWidth);
    this.resetTextColor();
    var text = this._item.mpCost;
    if (Imported.TMSkillCostEx && this._item.meta.mpRateCost) {
      text = this._item.meta.mpRateCost + '%';
    }
    this.drawText(text, x, y + lineHeight * 0, TMPlugin.DescriptionEx.LeftPaneWidth, 'right');
    this.drawText(this._item.tpCost, x, y + lineHeight * 1, TMPlugin.DescriptionEx.LeftPaneWidth, 'right');
    text = valueText[this._item.occasion];
    this.drawText(text, x, y + lineHeight * 2, TMPlugin.DescriptionEx.LeftPaneWidth, 'right');
    this.drawLeftParameter(x, y + lineHeight * 3, text4, this.requiredWtypeValue());
    this.drawLeftParameter(x, y + lineHeight * 4, text4, this.requiredWtypeValue2());
    y = this.drawBattleItemParameters(x, y + lineHeight * 5);
    if(this._item.meta.times_Skill){
    this.changeTextColor(this.systemColor());
    if($gameSwitches.value(376)){
    this.drawText("*大技制限*", x+50, y + lineHeight, TMPlugin.DescriptionEx.LeftPaneWidth);
    }else{
    this.drawText("*Sp.Remit*", x+50, y + lineHeight, TMPlugin.DescriptionEx.LeftPaneWidth);
    }
    }
  };
  
  Window_DescriptionEx.prototype.elementText = function(elementId) {
    if (elementId > 0) {
      return $dataSystem.elements[elementId];
    } else if (elementId === 0) {
      return ''
    } else {
      return '';
    }
  };
  
  Window_DescriptionEx.prototype.requiredWtypeValue = function() {
    if (this._item.requiredWtypeId1 > 0) {
      text = $dataSystem.weaponTypes[this._item.requiredWtypeId1];
    } else {
      text = '----';
    }
    return text;
  };
  
  Window_DescriptionEx.prototype.requiredWtypeValue2 = function() {
    var text = '----';
    if (this._item.requiredWtypeId2 > 0) {
      text = $dataSystem.weaponTypes[this._item.requiredWtypeId2];
    } 
    return text;
  };
  
  Window_DescriptionEx.prototype.valueToText = function(value) {
    return (value >= 0 ? '+' : '') + value;
  };
  
  Window_DescriptionEx.prototype.rateToText = function(rate, useSign) {
    if (useSign === undefined) useSign = true;
    return (useSign && rate > 1 ? '+' : '') + (rate * 1000000 - 1000000) / 10000;
  };
  
  Window_DescriptionEx.prototype.drawBattleItemParameters = function(x, y) {
  if($gameSwitches.value(376)){
    text = "対象";
    valueText = ["なし","敵単体","敵全体","乱敵１体","乱敵２体","乱敵３体","乱敵４対","味方単体","味方全体","瀕死味方","瀕死味方全","使用者"]
    vText = valueText[this._item.scope];
    if(this._item.aoeCircleRadius>0||this._item.aoeCircleHeightRate>0)vText = "範囲"
    if(this._item.aoeCircleRadius>250)vText = "広範囲"
    text2 = TMPlugin.DescriptionEx.SpeedText;
    text3 = TMPlugin.DescriptionEx.SuccessRateText
    text4 = TMPlugin.DescriptionEx.RepeatsText
    text5 = TMPlugin.DescriptionEx.TpGainText
    text6 = TMPlugin.DescriptionEx.HitTypeText
    valueText2 = ["必中","物理","魔法"]
    }else{
    text = "Target";
    valueText = ["Nothing","One Enemy","All En.s","R? Enemy","R?2 En.s","R?3 En.s","R?4 En.s","one Friend","all Fr.s","one Dy. Fr.","All Dy. Fr.","User"]
    vText = valueText[this._item.scope];
    if(this._item.aoeCircleRadius>0||this._item.aoeCircleHeightRate>100)vText = "Range"
    if(this._item.aoeCircleRadius>250)vText = "Wide Range"
    text2 = "Speed";
    text3 = "Success"
    text4 = "Repeat"
    text5 = "TP Gain"
    text6 = "Hit Type"
    valueText2 = ["Certain","Phisical","Magical"]
    }
    y = this.drawLeftParameter(x, y, text, vText);
    y = this.drawLeftParameter(x, y, text2, this._item.speed);
    y = this.drawLeftParameter(x, y, text3, this._item.successRate + '%');
    y = this.drawLeftParameter(x, y, text4, this._item.repeats);
    y = this.drawLeftParameter(x, y, text5, this._item.tpGain);
    y = this.drawLeftParameter(x, y, text6, valueText2[this._item.hitType]);
    return y;
  };
  
  Window_DescriptionEx.prototype.drawLeftParameter = function(x, y, text, value) {
    if (text === '') return y;
    this.changeTextColor(this.systemColor());
    this.drawText(text, x, y, TMPlugin.DescriptionEx.LeftPaneWidth);
    this.resetTextColor();;
    this.drawText(value, x, y, TMPlugin.DescriptionEx.LeftPaneWidth, 'right');
    return y + this.lineHeight();
  };
  
  Window_DescriptionEx.prototype.drawRightParameter = function(x, y, text) {
    if (text === '') return y;
    var lineHeight = this.lineHeight();
    y += lineHeight;
    if (y <= this.profileY() - lineHeight) {
      this.resetTextColor();
      this.drawText(text, x, y, TMPlugin.DescriptionEx.RightPaneWidth);
    }
    return y;
  };
  
  Window_DescriptionEx.prototype.drawRightParameter2 = function(x, y, text, nameT) {
    if (text === '') return y;
    var lineHeight = this.lineHeight();
    y += lineHeight;
    if (y <= this.profileY() - lineHeight) {
      this.resetTextColor();
      this.drawIcon(nameT, x, y)
      this.drawText(text, x+32, y, TMPlugin.DescriptionEx.RightPaneWidth);
    }
    return y;
  };
  
  Window_DescriptionEx.prototype.drawPrice = function(x, y) {
    if (TMPlugin.DescriptionEx.PriceText === '' || this._item.price === undefined) return y;
    this.changeTextColor(this.systemColor());
    if($gameSwitches.value(376)){
    var text = TMPlugin.DescriptionEx.PriceText;
    }else{
    var text = "Sell Price"
    }
    this.drawText(text, x, y, TMPlugin.DescriptionEx.LeftPaneWidth);
    if(this._item.price * TMPlugin.DescriptionEx.PriceRate<0){
    this.changeTextColor(this.normalColor());
    this.drawText("不可", x+200, y, TMPlugin.DescriptionEx.LeftPaneWidth);
    }else{
    this.drawCurrencyValue((this._item.price * TMPlugin.DescriptionEx.PriceRate).toFixed(0),
        TextManager.currencyUnit, x, y, TMPlugin.DescriptionEx.LeftPaneWidth);
    }
    return y + this.lineHeight();
  };
  
  Window_DescriptionEx.prototype.drawDetails = function(x, y) {
  yy=this.lineHeight()+TMPlugin.DescriptionEx.HorzLineHeight;
  	if (this._item.durMax>0){
    if(y>550&&x<100){
      x+=400;
      y = yy
    }
    this.changeTextColor(this.systemColor());
    if($gameSwitches.value(376)){
    this.drawText("最大耐久", x, y, TMPlugin.DescriptionEx.LeftPaneWidth);
    }else{
    this.drawText("M.Durability", x, y, TMPlugin.DescriptionEx.LeftPaneWidth);
    }
    this.resetTextColor();
    this.drawText(this._item.durMax, x + 250, y, TMPlugin.DescriptionEx.RightPaneWidth);
    y+=this.lineHeight();
    }
    if (this._item.meta.Weight){
    if(y>550&&x<100){
      x+=400;
      y = yy
    }
    this.changeTextColor(this.systemColor());
    if($gameSwitches.value(376)){
    this.drawText("重量", x, y, TMPlugin.DescriptionEx.LeftPaneWidth);
    }else{
    this.drawText("Weight", x, y, TMPlugin.DescriptionEx.LeftPaneWidth);
    }
    this.resetTextColor();
    this.drawText(this._item.meta.Weight, x + 250, y, TMPlugin.DescriptionEx.RightPaneWidth);
    y+=this.lineHeight();
    }
    if (this._item.meta.front){
    if(y>550&&x<100){
      x+=400;
      y = yy
    }
    this.changeTextColor(this.systemColor());
    if($gameSwitches.value(376)){
    this.drawText("隊列", x, y, TMPlugin.DescriptionEx.LeftPaneWidth);
    this.resetTextColor();
    this.drawText("前衛", x + 200, y, TMPlugin.DescriptionEx.LeftPaneWidth);
    }else{
    this.drawText("Formation", x, y, TMPlugin.DescriptionEx.LeftPaneWidth);
    this.resetTextColor();
    this.drawText("Front", x + 200, y, TMPlugin.DescriptionEx.LeftPaneWidth);
    }
    y+=this.lineHeight();
    }
    if (this._item.meta.gstone>=1){
    if(y>550&&x<100){
      x+=400;
      y = yy
    }
    this.changeTextColor(this.systemColor());
    if($gameSwitches.value(376)){
    this.drawText("神脈", x, y, TMPlugin.DescriptionEx.LeftPaneWidth);
    this.resetTextColor();
    this.drawText(this._item.meta.gstone, x + 200, y, TMPlugin.DescriptionEx.LeftPaneWidth);
    }else{
    this.drawText("G.Stone", x, y, TMPlugin.DescriptionEx.LeftPaneWidth);
    this.resetTextColor();
    this.drawText(this._item.meta.gstone, x + 200, y, TMPlugin.DescriptionEx.LeftPaneWidth);
    }
    y+=this.lineHeight();
    }
    if (this._item.meta.agear>=1){
    if(y>550&&x<100){
      x+=400;
      y = yy
    }
    this.changeTextColor(this.systemColor());
    if($gameSwitches.value(376)){
    this.drawText("ギア", x, y, TMPlugin.DescriptionEx.LeftPaneWidth);
    this.resetTextColor();
    this.drawText(this._item.meta.agear, x + 200, y, TMPlugin.DescriptionEx.LeftPaneWidth);
    }else{
    this.drawText("Gear", x, y, TMPlugin.DescriptionEx.LeftPaneWidth);
    this.resetTextColor();
    this.drawText(this._item.meta.agear, x + 200, y, TMPlugin.DescriptionEx.LeftPaneWidth);
    }
    y+=this.lineHeight();
    }
    return y
  };
  
  Window_DescriptionEx.prototype.drawAttackElement = function(x, y, id, name) {
    if (id>1){
    var lineHeight = this.lineHeight();
    y += lineHeight;
    this.changeTextColor(this.systemColor());
    if($gameSwitches.value(376)){
    this.drawText("攻撃属性", x, y, TMPlugin.DescriptionEx.LeftPaneWidth);
    }else{
    this.drawText("Attack Ele.", x, y, TMPlugin.DescriptionEx.LeftPaneWidth);
    }
    this.resetTextColor();
    var iconId = this.iconArray(id)
    this.drawIcon(iconId, x+168, y)
    this.drawText(name, x + 200, y, TMPlugin.DescriptionEx.RightPaneWidth);
    }
    if(this._item.multipleElements){
    for (var i = 0; i < this._item.multipleElements.length; i++) {
    iconId = this.iconArray(this._item.multipleElements[i])
    var xx = 32*i
    this.drawIcon(iconId, x+300+xx, y)
    }
    }
    return y;
   }
   
   Window_DescriptionEx.prototype.drawStateResist = function(x, y, id, name) {
    if (id>1){
    var lineHeight = this.lineHeight();
    y += lineHeight;
    this.changeTextColor(this.systemColor());
    if($gameSwitches.value(376)){
    this.drawText("ステート耐性", x, y, TMPlugin.DescriptionEx.LeftPaneWidth);
    }else{
    this.drawText("Sta. Resist", x, y, TMPlugin.DescriptionEx.LeftPaneWidth);
    }
    this.resetTextColor();
    var iconId = $dataStates[id].iconIndex
    this.drawIcon(iconId, x+168, y)
    this.drawText(name, x + 200, y, TMPlugin.DescriptionEx.RightPaneWidth);
    }
    return y;
   }
   
   Window_DescriptionEx.prototype.drawAddSkill = function(x, y, name) {
    if (id>1){
    var lineHeight = this.lineHeight();
    y += lineHeight;
    this.changeTextColor(this.systemColor());
    if($gameSwitches.value(376)){
    this.drawText("習得", x, y, TMPlugin.DescriptionEx.LeftPaneWidth);
    }else{
    this.drawText("Learning", x, y, TMPlugin.DescriptionEx.LeftPaneWidth);
    }
    this.resetTextColor();
    this.drawText(name, x + 200, y, TMPlugin.DescriptionEx.RightPaneWidth);
    }
    return y;
   }
   
   Window_DescriptionEx.prototype.drawSealSkill = function(x, y, name) {
    if (id>1){
    var lineHeight = this.lineHeight();
    y += lineHeight;
    this.changeTextColor(this.systemColor());
    if($gameSwitches.value(376)){
    this.drawText("不可", x, y, TMPlugin.DescriptionEx.LeftPaneWidth);
    }else{
    this.drawText("Seal", x, y, TMPlugin.DescriptionEx.LeftPaneWidth);
    }
    this.resetTextColor();
    this.drawText(name, x + 200, y, TMPlugin.DescriptionEx.RightPaneWidth);
    }
    return y;
   }
   
   Window_DescriptionEx.prototype.drawStateRate = function(x, y, id, name, value) {
    if (id>0){
    var lineHeight = this.lineHeight();
    y += lineHeight;
    this.changeTextColor(this.systemColor());
    if($gameSwitches.value(376)){
    this.drawText("ステート%", x, y, TMPlugin.DescriptionEx.LeftPaneWidth);
    }else{
    this.drawText("State%", x, y, TMPlugin.DescriptionEx.LeftPaneWidth);
    }
    this.resetTextColor();
    var iconId = $dataStates[id].iconIndex
    this.drawIcon(iconId, x+138, y)
    this.drawText(name, x + 170, y, TMPlugin.DescriptionEx.RightPaneWidth);
    this.drawText(value*100 + "%", x + 260, y, TMPlugin.DescriptionEx.RightPaneWidth);
    }
    return y;
   }
   
   Window_DescriptionEx.prototype.drawAttackState = function(x, y, id, name, value) {
    if (id>0){
    var lineHeight = this.lineHeight();
    y += lineHeight;
    this.changeTextColor(this.systemColor());
    if($gameSwitches.value(376)){
    this.drawText("攻撃ｽﾃｰﾄ", x, y, TMPlugin.DescriptionEx.LeftPaneWidth);
    }else{
    this.drawText("Att. Sta.", x, y, TMPlugin.DescriptionEx.LeftPaneWidth);
    }
    this.resetTextColor();
    var iconId = $dataStates[id].iconIndex
    this.drawIcon(iconId, x+138, y)
    this.drawText(name, x + 170, y, TMPlugin.DescriptionEx.RightPaneWidth);
    this.drawText(value*100 + "%", x + 260, y, TMPlugin.DescriptionEx.RightPaneWidth);
    }
    return y;
   }
   
   Window_DescriptionEx.prototype.drawSkillState = function(x, y, id, name, value, type) {
   if(id>0&&$dataStates[id].meta.dammy)return
    var lineHeight = this.lineHeight();
    y += lineHeight;
    this.changeTextColor(this.systemColor());
    if($gameSwitches.value(376)){
     if(type==0){
      this.drawText("ｽﾃｰﾄ付与", x, y, TMPlugin.DescriptionEx.LeftPaneWidth);
     }else{
      this.drawText("ｽﾃｰﾄ解除", x, y, TMPlugin.DescriptionEx.LeftPaneWidth);
     }
    }else{
    if(type==0){
      this.drawText("Add State", x, y, TMPlugin.DescriptionEx.LeftPaneWidth);
     }else{
      this.drawText("Remove St.", x, y, TMPlugin.DescriptionEx.LeftPaneWidth);
     }
    }
    this.resetTextColor();
    if(id>0){
    var iconId = $dataStates[id].iconIndex
    this.drawIcon(iconId, x+153, y)
    }
    this.drawText(name, x + 185, y, TMPlugin.DescriptionEx.RightPaneWidth);
    if(id>0)this.drawText(value*100 + "%", x + 315, y, TMPlugin.DescriptionEx.RightPaneWidth);
    return y;
   }
   
   Window_DescriptionEx.prototype.drawSkillBuff = function(x, y, id, name, value, type) {
    var lineHeight = this.lineHeight();
    y += lineHeight;
    this.changeTextColor(this.systemColor());
    if($gameSwitches.value(376)){
     if(type==0){
      this.drawText("能力上昇", x, y, TMPlugin.DescriptionEx.LeftPaneWidth);
     }
     if(type==1){
      this.drawText("上昇解除", x, y, TMPlugin.DescriptionEx.LeftPaneWidth);
     }
     if(type==2){
      this.drawText("能力低下", x, y, TMPlugin.DescriptionEx.LeftPaneWidth);
     }
     if(type==3){
      this.drawText("低下解除", x, y, TMPlugin.DescriptionEx.LeftPaneWidth);
     }
    }else{
    if(type==0){
      this.drawText("Add Buff", x, y, TMPlugin.DescriptionEx.LeftPaneWidth);
     }
     if(type==1){
      this.drawText("Rem. Buff", x, y, TMPlugin.DescriptionEx.LeftPaneWidth);
     }
     if(type==2){
      this.drawText("Add Debuff", x, y, 130);
     }
     if(type==3){
      this.drawText("Rem. Debuff", x, y, 130);
     }
    }
    this.resetTextColor();
    var iconId = this.nIcons(id)
    this.drawIcon(iconId, x+138, y)
    var name = this.nArray(id)
    this.drawText(name, x+170, y, TMPlugin.DescriptionEx.RightPaneWidth);
    if(type==0||type==2){
    this.resetTextColor();
    this.drawText(value+ "T", x + 290, y, TMPlugin.DescriptionEx.RightPaneWidth);
    }
    return y;
   }
   
   Window_DescriptionEx.prototype.drawElementRate = function(x, y, id, name, value) {
    if (id>0){
    var lineHeight = this.lineHeight();
    y += lineHeight;
    this.changeTextColor(this.systemColor());
    if($gameSwitches.value(376)){
    this.drawText("属性%", x, y, TMPlugin.DescriptionEx.LeftPaneWidth);
    }else{
    this.drawText("Element%", x, y, TMPlugin.DescriptionEx.LeftPaneWidth);
    }
    this.resetTextColor();
    var iconId = this.iconArray(id)
    this.drawIcon(iconId, x+138, y)
    this.drawText(name, x + 170, y, TMPlugin.DescriptionEx.RightPaneWidth);
    this.drawText(value*100 + "%", x + 260, y, TMPlugin.DescriptionEx.RightPaneWidth);
    }
    return y;
   }
   
   Window_DescriptionEx.prototype.drawAttackDamage = function(x, y, id, name, type) {
    if (type>0){
    var lineHeight = this.lineHeight();
    y += lineHeight;
    this.changeTextColor(this.systemColor());
    if(type==1||type==3||type==5){
    tt="HP"
    }else{
    tt="MP"
    }
    if($gameSwitches.value(376)){
    if(type==1||type==2){
    tt2="ダメージ"
    }
    if(type==3||type==4){
    tt2="回復"
    }
    if(type==5||type==6){
    tt2="吸収"
    }
    this.drawText(tt+tt2, x, y, TMPlugin.DescriptionEx.LeftPaneWidth);
    }else{
    if(type==1||type==2){
    tt2=" Damage"
    }
    if(type==3||type==4){
    tt2=" Recover"
    }
    if(type==5||type==6){
    tt2=" Drain"
    }
    this.drawText(tt+tt2, x, y, TMPlugin.DescriptionEx.LeftPaneWidth);
    }
    this.resetTextColor();
    if(id>0){
    var iconId = this.iconArray(id)
    this.drawIcon(iconId, x+188, y)
    this.drawText(name, x + 221, y, TMPlugin.DescriptionEx.RightPaneWidth);
    }
    if(this._item.multipleElements){
    for (var i = 0; i < this._item.multipleElements.length; i++) {
    iconId = this.iconArray(this._item.multipleElements[i])
    var xx = 32*i
    this.drawIcon(iconId, x+300+xx, y)
    }
    }
    if(this._item.meta.damBase){
    var damB = Number(this._item.meta.damBase)
    y += lineHeight;
    this.changeTextColor(this.systemColor());
    if($gameSwitches.value(376)){
    this.drawText(" 威力基準", x, y, TMPlugin.DescriptionEx.LeftPaneWidth);
    }else{
    this.drawText(" Pow.Base", x, y, TMPlugin.DescriptionEx.LeftPaneWidth);
    }
    if(damB<8){
    var iconId = this.nIcons(damB)
    this.drawIcon(iconId, x+188, y)
    }else{
    this.resetTextColor();
    if(damB==8)this.drawText("現HP", x+158, y, TMPlugin.DescriptionEx.LeftPaneWidth);
    if(damB==9)this.drawText("現MP", x+158, y, TMPlugin.DescriptionEx.LeftPaneWidth);
    }
    }
    if(this._item.meta.damBase2){
    var damB = Number(this._item.meta.damBase2)
    this.changeTextColor(this.systemColor());
    var iconId = this.nIcons(damB)
    this.drawIcon(iconId, x+221, y)
    }
    if(this._item.meta.damBase3){
    var damB = Number(this._item.meta.damBase3)
    this.changeTextColor(this.systemColor());
    var iconId = this.nIcons(damB)
    this.drawIcon(iconId, x+254, y)
    }
    if(this._item.meta.defBase){
    var damB = Number(this._item.meta.defBase)
    y += lineHeight;
    this.changeTextColor(this.systemColor());
    if($gameSwitches.value(376)){
    this.drawText(" 防御基準", x, y, TMPlugin.DescriptionEx.LeftPaneWidth);
    }else{
    this.drawText(" Def.Base", x, y, TMPlugin.DescriptionEx.LeftPaneWidth);
    }
    var iconId = this.nIcons(damB)
    this.drawIcon(iconId, x+188, y)
    }
    if(this._item.meta.defBase2){
    var damB = Number(this._item.meta.defBase2)
    this.changeTextColor(this.systemColor());
    var iconId = this.nIcons(damB)
    this.drawIcon(iconId, x+221, y)
    }
    if(this._item.meta.defBase3){
    var damB = Number(this._item.meta.defBase3)
    this.changeTextColor(this.systemColor());
    var iconId = this.nIcons(damB)
    this.drawIcon(iconId, x+254, y)
    }
    if(this._item.meta['mrf rate']){
    var damB = Number(this._item.meta['mrf rate'])
    y += lineHeight;
    this.changeTextColor(this.systemColor());
    if($gameSwitches.value(376)){
    this.drawText(" 反射率", x, y, TMPlugin.DescriptionEx.LeftPaneWidth);
    }else{
    this.drawText(" MRF.Rate", x, y, TMPlugin.DescriptionEx.LeftPaneWidth);
    }
    this.resetTextColor();
    this.drawText(damB, x+200, y, TMPlugin.DescriptionEx.LeftPaneWidth);
    }
    this.changeTextColor(this.systemColor());
    y += lineHeight;
    if($gameSwitches.value(376)){
    this.drawText(" 会心", x, y, TMPlugin.DescriptionEx.LeftPaneWidth);
    }else{
    this.drawText(" Critical", x, y, TMPlugin.DescriptionEx.LeftPaneWidth);
    }
    this.resetTextColor();
    if(this._item.damage['critical']){
    if($gameSwitches.value(376)){
    this.drawText("有", x+200, y, TMPlugin.DescriptionEx.LeftPaneWidth);
    }else{
    this.drawText("Possible", x+200, y, TMPlugin.DescriptionEx.LeftPaneWidth);
    }
    }else{
    if($gameSwitches.value(376)){
    this.drawText("なし", x+200, y, TMPlugin.DescriptionEx.LeftPaneWidth);
    }else{
    this.drawText("None", x+200, y, TMPlugin.DescriptionEx.LeftPaneWidth);
    }
    }
    }
    return y;
   }
   
   Window_DescriptionEx.prototype.drawDebuffRate = function(x, y, id, name, value) {
    if (id>0){
    var lineHeight = this.lineHeight();
    y += lineHeight;
    this.changeTextColor(this.systemColor());
    if($gameSwitches.value(376)){
    this.drawText("デバフ%", x, y, TMPlugin.DescriptionEx.LeftPaneWidth);
    }else{
    this.drawText("Debuff%", x, y, TMPlugin.DescriptionEx.LeftPaneWidth);
    }
    this.resetTextColor();
    var iconId = this.iconArray(id)
    this.drawIcon(iconId, x+138, y)
    this.drawText(name, x + 170, y, TMPlugin.DescriptionEx.RightPaneWidth);
    this.drawText(value*100 + "%", x + 260, y, TMPlugin.DescriptionEx.RightPaneWidth);
    }
    return y;
   }
   
   Window_DescriptionEx.prototype.drawAttackSpeed = function(x, y, value) {
    var lineHeight = this.lineHeight();
    y += lineHeight;
    this.changeTextColor(this.systemColor());
    if($gameSwitches.value(376)){
    this.drawText("攻撃速補", x, y, TMPlugin.DescriptionEx.LeftPaneWidth);
    }else{
    this.drawText("Att. Speed", x, y, TMPlugin.DescriptionEx.LeftPaneWidth);
    }
    this.resetTextColor();
    if(value > 0){
    this.drawText("+"+value, x + 230, y, TMPlugin.DescriptionEx.RightPaneWidth);
    }else{
    this.drawText(value, x + 230, y, TMPlugin.DescriptionEx.RightPaneWidth);
    }
    return y;
   }
   
   Window_DescriptionEx.prototype.drawAttackTimes = function(x, y, value) {
    var lineHeight = this.lineHeight();
    y += lineHeight;
    this.changeTextColor(this.systemColor());
    if($gameSwitches.value(376)){
    this.drawText("攻撃速補", x, y, TMPlugin.DescriptionEx.LeftPaneWidth);
    }else{
    this.drawText("Att. Times", x, y, TMPlugin.DescriptionEx.LeftPaneWidth);
    }
    this.resetTextColor();
    if(value > 0){
    this.drawText("+"+value, x + 230, y, TMPlugin.DescriptionEx.RightPaneWidth);
    }else{
    this.drawText(value, x + 230, y, TMPlugin.DescriptionEx.RightPaneWidth);
    }
    return y;
   }
   
   Window_DescriptionEx.prototype.drawReAction = function(x, y, value) {
    var lineHeight = this.lineHeight();
    y += lineHeight;
    this.changeTextColor(this.systemColor());
    if($gameSwitches.value(376)){
    this.drawText("再行動", x, y, TMPlugin.DescriptionEx.LeftPaneWidth);
    }else{
    this.drawText("Re-Action", x, y, TMPlugin.DescriptionEx.LeftPaneWidth);
    }
    this.resetTextColor();
    this.drawText(value *100 + "%", x + 230, y, TMPlugin.DescriptionEx.RightPaneWidth);
    return y;
   }
   
   Window_DescriptionEx.prototype.drawNparamP = function(x, y, id, value) {
    var lineHeight = this.lineHeight();
    y += lineHeight;
    this.changeTextColor(this.systemColor());
    var iconId = this.nIcons(id)
    this.drawIcon(iconId, x, y)
    var name = this.nArray(id)
    this.drawText(name, x+32, y, TMPlugin.DescriptionEx.RightPaneWidth);
    this.resetTextColor();
    this.drawText(Math.floor(value*100) + "%", x + 230, y, TMPlugin.DescriptionEx.RightPaneWidth);
    return y;
   }
   
   Window_DescriptionEx.prototype.drawXparamP = function(x, y, id, value) {
    var lineHeight = this.lineHeight();
    y += lineHeight;
    this.changeTextColor(this.systemColor());
    var iconId = this.xIcons(id)
    this.drawIcon(iconId, x, y)
    var name = this.xArray(id)
    this.drawText(name, x+32, y, TMPlugin.DescriptionEx.RightPaneWidth);
    this.resetTextColor();
    value=Math.floor(value*100)
    if(value > 0){
    this.drawText("+"+value+ "%", x + 230, y, TMPlugin.DescriptionEx.RightPaneWidth);
    }else{
    this.drawText(value + "%", x + 230, y, TMPlugin.DescriptionEx.RightPaneWidth);
    }
    return y;
   }
   
   Window_DescriptionEx.prototype.drawSparamP = function(x, y, id, value) {
    var lineHeight = this.lineHeight();
    y += lineHeight;
    this.changeTextColor(this.systemColor());
    var iconId = this.sIcons(id)
    this.drawIcon(iconId, x, y)
    var name = this.sArray(id)
    this.drawText(name, x+32, y, TMPlugin.DescriptionEx.RightPaneWidth);
    this.resetTextColor();
    if(value > 0){
    this.drawText("+"+value*100 + "%", x + 230, y, TMPlugin.DescriptionEx.RightPaneWidth);
    }else{
    this.drawText(value*100 + "%", x + 230, y, TMPlugin.DescriptionEx.RightPaneWidth);
    }
    return y;
   }
   
   Window_Base.prototype.iconArray  = function(id){
   var array = [0, 0, 64,65,66,67,68,69,70,71,76,993,992,0,1003,1002,994,0,1004,0,995,999,998,1000,996,997,0,1001,0,992,0,0,0,0,0,0,0];
   return array[id]
   }
  
  Window_DescriptionEx.prototype.drawEffects = function(x, y) {
    this.changeTextColor(this.systemColor());
    if($gameSwitches.value(376)){
    var text = "-効果-"
    }else{
    var text = "-Effect-"
    }
    this.drawText(text, x, y, TMPlugin.DescriptionEx.RightPaneWidth);
    this.resetTextColor();;
    if (Imported.TMSkillCostEx) y = this.drawCostEx(x, y);
    y = this.drawDamage(x, y);
    for (var i = 0; i < this._item.effects.length; i++) {
      var effect = this._item.effects[i];
      var text = '';
      if (effect.code === Game_Action.EFFECT_RECOVER_HP) {
        y = this.drawAttackDamage(x, y, 0, 0, 3)
      } else if (effect.code === Game_Action.EFFECT_RECOVER_MP) {
        y = this.drawAttackDamage(x, y, 0, 0, 4)
      } else if (effect.code === Game_Action.EFFECT_GAIN_TP) {
        y = this.drawAttackDamage(x, y, 0, 0, 7)
      } else if (effect.code === Game_Action.EFFECT_ADD_STATE) {
      if(effect.dataId==0){
        if($gameSwitches.value(376)){
    	stateName = "通常攻撃ｽﾃｰﾄ"
    	}else{
    	stateName = "Attack State"
    	}
      }else{
      stateName = $dataStates[effect.dataId].name
      }
        y = this.drawSkillState(x, y, effect.dataId, stateName, effect.value1, 0)
      } else if (effect.code === Game_Action.EFFECT_REMOVE_STATE) {
      if(effect.dataId==0){
        if($gameSwitches.value(376)){
    	stateName = "通常攻撃ｽﾃｰﾄ"
    	}else{
    	stateName = "Attack State"
    	}
      }else{
      stateName = $dataStates[effect.dataId].name
      }
        y = this.drawSkillState(x, y, effect.dataId, stateName, effect.value1, 1)
      } else if (effect.code === Game_Action.EFFECT_ADD_BUFF) {
        y = this.drawSkillBuff(x, y, effect.dataId, 0, effect.value1, 0)
      } else if (effect.code === Game_Action.EFFECT_ADD_DEBUFF) {
        y = this.drawSkillBuff(x, y, effect.dataId, 0, effect.value1, 2)
      } else if (effect.code === Game_Action.EFFECT_REMOVE_BUFF) {
        y = this.drawSkillBuff(x, y, effect.dataId, 0, effect.value1, 1)
      } else if (effect.code === Game_Action.EFFECT_REMOVE_DEBUFF) {
        y = this.drawSkillBuff(x, y, effect.dataId, 0, effect.value1, 3)
      } else if (effect.code === Game_Action.EFFECT_SPECIAL) {
        text = TMPlugin.DescriptionEx.EffectTextSpecial;
      } else if (effect.code === Game_Action.EFFECT_GROW) {
        text = TMPlugin.DescriptionEx.EffectTextGrow.format(TextManager.param(effect.dataId), effect.value1);
      } else if (effect.code === Game_Action.EFFECT_LEARN_SKILL) {
        text = TMPlugin.DescriptionEx.EffectTextLearnSkill.format($dataSkills[effect.dataId].name);
      }
      y = this.drawRightParameter(x, y, text);
    }
    this.drawOptionText(x, y);
  };
  
  Window_DescriptionEx.prototype.profileY = function() {
    return this.contents.height - this.lineHeight() * 2 - TMPlugin.DescriptionEx.HorzLineHeight;
  };
  
  Window_DescriptionEx.prototype.drawDamage = function(x, y) {
    y = this.drawAttackDamage(x, y, this._item.damage.elementId, this.elementText(this._item.damage.elementId), this._item.damage.type)
    return y;
  };
  
  Window_Base.prototype.xArray  = function(id){
   if($gameSwitches.value(376)){
    var array = ["命中","回避","会心","会心回避","魔法回避","魔法反射","反撃","ＨＰ再生","ＭＰ再生","ＴＰ再生"]
    }else{
    var array = ['Hit%', 'Evasion', 'Critical', 'Cri. Ev.', 'Mag. Eva.', 'Mag. Ref.', 'Counter', 'HP Reg.', 'MP Reg.', 'TP Reg.']
   }
   return array[id]
   }
   
   Window_Base.prototype.xIcons  = function(id){
    var array = [733,734,721,888,1019,735,732,1020,1021,1022]
    return array[id]
   }
   
   Window_Base.prototype.nArray  = function(id){
   if($gameSwitches.value(376)){
    var array = ["最大HP","最大MP","攻撃力","防御力","魔力","魔法防御","敏捷","運"]
    }else{
    var array = ['Max HP', 'Max MP', 'Attack', 'Deffend', 'Magic Pow', 'Mag. Def.', 'Speed', 'Luck']
   }
   return array[id]
   }
   
   Window_Base.prototype.nIcons  = function(id){
    var array = [729,730,723,724,725,726,727,728]
    return array[id]
   }
   
   Window_Base.prototype.sArray  = function(id){
   if($gameSwitches.value(376)){
    var array = ["狙われ率","防御効果","回復効果","薬の知識","ＭＰ消費","ＴＰチャージ","物理ダメージ","魔法ダメージ","床ダメージ","経験獲得率"]
    }else{
    var array = ['Target', 'Guard', 'Recovery', 'Pharmacy', 'MP Consume', 'TP Charge', 'Phisical Dam,', 'Magical Dam.', 'Flor Dam.', 'EXP Rate']
   }
   return array[id]
   }
   
   Window_Base.prototype.sIcons  = function(id){
    var array = [720,722,731,889,1008,1009,1005,1006,1010,1011]
    return array[id]
   }
  
  Window_DescriptionEx.prototype.drawTraits = function(x, y, item) {
    item = item || this._item
    //this.changeTextColor(this.systemColor());
    //this.drawText(TMPlugin.DescriptionEx.TraitText, x, y, TMPlugin.DescriptionEx.RightPaneWidth);
    this.resetTextColor();;
    if (Imported.TMPassiveSkill && this._item.meta.passive) {
      y = this.drawPassiveSkillOccasion(x, y);
    }
    y-= this.lineHeight()
    yy = y
    for (var i = 0; i < item.traits.length; i++) {
      var trait = item.traits[i];
      var text = '';
      if(y>=528&&x<100){
      x+=400;
      y = yy
      }
      if (trait.code === Game_BattlerBase.TRAIT_ELEMENT_RATE) {
        y = this.drawElementRate(x, y, trait.dataId, this.elementText(trait.dataId), trait.value)
        text = '';
      } else if (trait.code === Game_BattlerBase.TRAIT_DEBUFF_RATE) {
        y = this.drawDebuffRate(x, y, trait.dataId, TextManager.param(trait.dataId), trait.value)
        text = '';
      } else if (trait.code === Game_BattlerBase.TRAIT_STATE_RATE) {
        y = this.drawStateRate(x, y, trait.dataId, $dataStates[trait.dataId].name, trait.value)
        text = '';
      } else if (trait.code === Game_BattlerBase.TRAIT_STATE_RESIST) {
        y = this.drawStateResist(x, y, trait.dataId, $dataStates[trait.dataId].name)
        text = '';
      } else if (trait.code === Game_BattlerBase.TRAIT_PARAM) {
        y = this.drawNparamP(x, y, trait.dataId, trait.value)
        text = '';
      } else if (trait.code === Game_BattlerBase.TRAIT_XPARAM) {
        y = this.drawXparamP(x, y, trait.dataId, trait.value)
        text = '';
      } else if (trait.code === Game_BattlerBase.TRAIT_SPARAM) {
        y = this.drawSparamP(x, y, trait.dataId, trait.value)
        text = '';
      } else if (trait.code === Game_BattlerBase.TRAIT_ATTACK_ELEMENT) {
      	y = this.drawAttackElement(x, y, trait.dataId, this.elementText(trait.dataId))
      	text = '';
      } else if (trait.code === Game_BattlerBase.TRAIT_ATTACK_STATE) {
        y = this.drawAttackState(x, y, trait.dataId, $dataStates[trait.dataId].name, trait.value)
        text = '';
      } else if (trait.code === Game_BattlerBase.TRAIT_ATTACK_SPEED) {
        y = this.drawAttackSpeed(x, y,  trait.value)
      } else if (trait.code === Game_BattlerBase.TRAIT_ATTACK_TIMES) {
        y = this.drawAttackTimes(x, y,  trait.value)
      } else if (trait.code === Game_BattlerBase.TRAIT_STYPE_ADD) {
        text = TMPlugin.DescriptionEx.TraitTextStypeAdd.format($dataSystem.skillTypes[trait.dataId]);
      } else if (trait.code === Game_BattlerBase.TRAIT_STYPE_SEAL) {
        text = TMPlugin.DescriptionEx.TraitTextStypeSeal.format($dataSystem.skillTypes[trait.dataId]);
      } else if (trait.code === Game_BattlerBase.TRAIT_SKILL_ADD) {
        y = this.drawAddSkill(x, y,  $dataSkills[trait.dataId].name)
      } else if (trait.code === Game_BattlerBase.TRAIT_SKILL_SEAL) {
        y = this.drawSealSkill(x, y,  $dataSkills[trait.dataId].name)
      } else if (trait.code === Game_BattlerBase.TRAIT_EQUIP_WTYPE) {
        text = TMPlugin.DescriptionEx.TraitTextEquipWtype.format($dataSystem.weaponTypes[trait.dataId]);
      } else if (trait.code === Game_BattlerBase.TRAIT_EQUIP_ATYPE) {
        text = TMPlugin.DescriptionEx.TraitTextEquipAtype.format($dataSystem.armorTypes[trait.dataId]);
      } else if (trait.code === Game_BattlerBase.TRAIT_EQUIP_LOCK) {
        text = TMPlugin.DescriptionEx.TraitTextEquipLock.format($dataSystem.equipTypes[trait.dataId]);
      } else if (trait.code === Game_BattlerBase.TRAIT_EQUIP_SEAL) {
        text = TMPlugin.DescriptionEx.TraitTextEquipSeal.format($dataSystem.equipTypes[trait.dataId]);
      } else if (trait.code === Game_BattlerBase.TRAIT_SLOT_TYPE) {
        text = TMPlugin.DescriptionEx.SlotTypeValue[trait.value];
      } else if (trait.code === Game_BattlerBase.TRAIT_ACTION_PLUS) {
        y = this.drawReAction(x, y,  trait.value)
      } else if (trait.code === Game_BattlerBase.TRAIT_SPECIAL_FLAG) {
        text = TMPlugin.DescriptionEx.SpecialFlagValue[trait.dataId];
      } else if (trait.code === Game_BattlerBase.TRAIT_PARTY_ABILITY) {
        text = TMPlugin.DescriptionEx.PartyAbilityValue[trait.dataId];
      }
      y = this.drawRightParameter(x, y, text);
    }
    var mass = [x, y];
    return mass
  };
  
  Window_DescriptionEx.prototype.drawOptionText = function(x, y) {
    if (this._item.meta.dText&&$gameSwitches.value(376)) {
      var textArray = this._item.meta.dText.split(/\r\n|\r|\n/);
      for (var i = 0; i < textArray.length; i++) {
        y = this.drawRightParameter(x, y, textArray[i]);
      }
    }
    if (this._item.meta.dTextEn&&!$gameSwitches.value(376)) {
      var textArray = this._item.meta.dTextEn.split(/\r\n|\r|\n/);
      for (var i = 0; i < textArray.length; i++) {
        y = this.drawRightParameter(x, y, textArray[i]);
      }
    }
  };
  
  Window_DescriptionEx.prototype.drawHorzLine = function(y) {
    var lineY = y + TMPlugin.DescriptionEx.HorzLineHeight / 2 - 1;
    this.contents.paintOpacity = 48;
    this.contents.fillRect(0, lineY, this.contentsWidth(), 2, this.lineColor());
    this.contents.paintOpacity = 255;
    return y + TMPlugin.DescriptionEx.HorzLineHeight;
  };

  Window_DescriptionEx.prototype.lineColor = function() {
    return this.normalColor();
  };

  Window_DescriptionEx.prototype.drawProfile = function(x, y) {
    this.drawTextEx(this._item.description, x + this.textPadding(), y);
  };

  Window_DescriptionEx.prototype.drawCostEx = function(x, y) {
    var dummyActor = new Game_Actor(1);
    var text = '';
    if (this._item.meta.hpRateCost) {
      text = TMPlugin.DescriptionEx.CostExTextHp.format(this._item.meta.hpRateCost + '%');
    } else if (this._item.meta.hpCost) {
      text = TMPlugin.DescriptionEx.CostExTextHp.format(this._item.meta.hpCost);
    }
    y = this.drawRightParameter(x, y, text);
    var cost = dummyActor.skillItemCost(this._item);
    if (cost) {
      text = TMPlugin.DescriptionEx.CostExTextItem.format(cost.item.name, cost.num);
      y = this.drawRightParameter(x, y, text);
    }
    if (this._item.meta.expCost) {
      text = TMPlugin.DescriptionEx.CostExTextExp.format(this._item.meta.expCost);
      y = this.drawRightParameter(x, y, text);
    }
    if (this._item.meta.goldCost) {
      text = TMPlugin.DescriptionEx.CostExTextGold.format(this._item.meta.goldCost +
             TextManager.currencyUnit);
      y = this.drawRightParameter(x, y, text);
    }
    return y;
  };
  
  Window_DescriptionEx.prototype.drawPassiveSkillParameters = function(x, y) {
    var item = $dataWeapons[+this._item.meta.passive];
    this.drawTraits(this.contents.width - this.textPadding() - TMPlugin.DescriptionEx.RightPaneWidth, y, item);
    this.drawLeftParameter(x, y, TMPlugin.DescriptionEx.RequiredWtypeText, this.requiredWtypeValue());
    y += this.lineHeight() * 2;
    this.drawEquipParameters(this.textPadding(), y, item);
  };
  
  Window_DescriptionEx.prototype.drawPassiveSkillOccasion = function(x, y) {
    var lastY = y;
    if (this._item.meta.passiveTp) {
      if (+this._item.meta.passiveTp > 0) {
        var text = TMPlugin.DescriptionEx.PassiveTpText.format(this._item.meta.passiveTp);
      } else {
        var text = TMPlugin.DescriptionEx.PassiveTpText2.format(-this._item.meta.passiveTp);
      }
      y = this.drawRightParameter(x, y, text);
    }
    if (this._item.meta.passiveState) {
      var text = TMPlugin.DescriptionEx.PassiveStateText.format($dataStates[+this._item.meta.passiveState].name);
      y = this.drawRightParameter(x, y, text);
    }
    if (lastY === y) {
      y = this.drawRightParameter(x, y, TMPlugin.DescriptionEx.PassiveAlwaysText);
    }
    return y;
  };
  
  //-----------------------------------------------------------------------------
  // Scene_Base
  //

  Scene_Base.prototype.createDescriptionExWindow = function() {
    this._descriptionExWindow = new Window_DescriptionEx();
    this._descriptionExWindow.setHandler('description', this.descriptionClose.bind(this));
    this._descriptionExWindow.setHandler('cancel',      this.descriptionClose.bind(this));
    this.addWindow(this._descriptionExWindow);
  };
  
  Scene_Base.prototype.descriptionOpen = function(mainWindow) {
    if(SceneManager._scene._directionalPad)SceneManager._scene._directionalPad.hide();
    this._descriptionMainWindow = mainWindow;
    this._descriptionExWindow.setItem(this._descriptionMainWindow.item());
    this._descriptionExWindow.open();
    this._descriptionExWindow.activate();
    if(this._statusWindow && !$gameParty.inBattle()) this._statusWindow.hide();
    if(this._compareWindow) this._compareWindow.hide();
    if(this._statusWindow) $gameVariables.setValue(155, false);
    if(this._goldWindow) this._goldWindow.hide();
    if(this._invLimitWindow) this._invLimitWindow.hide();
    if(this._skillLearnDataWindow) this._skillLearnDataWindow.hide();
    if(this._infoWindow) this._infoWindow.hide();
    if(this._infoWindow2) this._infoWindow2.hide();
  };
  
  Scene_Base.prototype.descriptionClose = function() {
  if(SceneManager._scene._directionalPad)SceneManager._scene._directionalPad.show();
    this._descriptionExWindow.close();
    this._descriptionMainWindow.activate();
    if(this._statusWindow && !$gameParty.inBattle()) this._statusWindow.show();
    if(this._compareWindow) this._compareWindow.show();
    if(this._statusWindow) $gameVariables.setValue(155, true);
    if(this._goldWindow) this._goldWindow.show();
    if(this._invLimitWindow) this._invLimitWindow.show();
    if(this._skillLearnDataWindow) this._skillLearnDataWindow.show();
    if(this._infoWindow) this._infoWindow.show();
    if(this._infoWindow2) this._infoWindow2.show();
  };

  //-----------------------------------------------------------------------------
  // Scene_Map
  //

  var _Scene_Map_createMessageWindow = Scene_Map.prototype.createMessageWindow;
  Scene_Map.prototype.createMessageWindow = function() {
    _Scene_Map_createMessageWindow.call(this);
    this._messageWindow._itemWindow.setHandler('description',
        this.descriptionOpen.bind(this));
    this.createDescriptionExWindow();
    this._messageWindow.setDescriptionExWindow(this._descriptionExWindow);
  };

  //-----------------------------------------------------------------------------
  // Scene_Item
  //

  var _Scene_Item_createItemWindow = Scene_Item.prototype.createItemWindow;
  Scene_Item.prototype.createItemWindow = function() {
    _Scene_Item_createItemWindow.call(this);
    this._itemWindow.setHandler('description', this.descriptionOpen.bind(this));
    this.createDescriptionExWindow();
  };

  //-----------------------------------------------------------------------------
  // Scene_Skill
  //

  var _Scene_Skill_createItemWindow = Scene_Skill.prototype.createItemWindow;
  Scene_Skill.prototype.createItemWindow = function() {
    _Scene_Skill_createItemWindow.call(this);
    this._itemWindow.setHandler('description', this.descriptionOpen.bind(this));
    this.createDescriptionExWindow();
  };
  
  var _Scene_LearnSkill_create = Scene_LearnSkill.prototype.create;
  Scene_LearnSkill.prototype.create = function() {
    _Scene_LearnSkill_create.call(this);
    this._skillLearnWindow.setHandler('description', this.descriptionOpen.bind(this));
    this.createDescriptionExWindow();
  };

  //-----------------------------------------------------------------------------
  // Scene_Equip
  //

  var _Scene_Equip_createItemWindow = Scene_Equip.prototype.createItemWindow;
  Scene_Equip.prototype.createItemWindow = function() {
    _Scene_Equip_createItemWindow.call(this);
    this._itemWindow.setHandler('description', this.descriptionOpen.bind(this));
    this.createDescriptionExWindow();
  };

  var _Scene_Equip_createSlotWindow = Scene_Equip.prototype.createSlotWindow;
  Scene_Equip.prototype.createSlotWindow = function() {
    _Scene_Equip_createSlotWindow.call(this);
    this._slotWindow.setHandler('description', this.descriptionOpen.bind(this));
  };

  //-----------------------------------------------------------------------------
  // Scene_Shop
  //

  var _Scene_Shop_createBuyWindow = Scene_Shop.prototype.createBuyWindow;
  Scene_Shop.prototype.createBuyWindow = function() {
    _Scene_Shop_createBuyWindow.call(this);
    this._buyWindow.setHandler('description', this.descriptionOpen.bind(this));
  };

  var _Scene_Shop_createSellWindow = Scene_Shop.prototype.createSellWindow;
  Scene_Shop.prototype.createSellWindow = function() {
    _Scene_Shop_createSellWindow.call(this);
    this._sellWindow.setHandler('description', this.descriptionOpen.bind(this));
    this.createDescriptionExWindow();
  };

  var _Scene_Shop_descriptionOpen = Scene_Shop.prototype.descriptionOpen;
  Scene_Shop.prototype.descriptionOpen = function(mainWindow) {
    _Scene_Shop_descriptionOpen.call(this, mainWindow);
    if (Imported.TMGreedShop) {
      if (this._materialWindow) this._materialWindow.hide();
    }
  };
  
  var _Scene_Shop_descriptionClose = Scene_Shop.prototype.descriptionClose;
  Scene_Shop.prototype.descriptionClose = function() {
    _Scene_Shop_descriptionClose.call(this);
    if (Imported.TMGreedShop) {
      if (this._materialWindow) this._materialWindow.show();
    }
  };

  //-----------------------------------------------------------------------------
  // Scene_Battle
  //

  var _Scene_Battle_isAnyInputWindowActive = Scene_Battle.prototype.isAnyInputWindowActive;
  Scene_Battle.prototype.isAnyInputWindowActive = function() {
    return _Scene_Battle_isAnyInputWindowActive.call(this) ||
           this._descriptionExWindow.active;
  };

  var _Scene_Battle_createSkillWindow = Scene_Battle.prototype.createSkillWindow;
  Scene_Battle.prototype.createSkillWindow = function() {
    _Scene_Battle_createSkillWindow.call(this);
    this._skillWindow.setHandler('description', this.descriptionOpen.bind(this));
  };

  var _Scene_Battle_createItemWindow = Scene_Battle.prototype.createItemWindow;
  Scene_Battle.prototype.createItemWindow = function() {
    _Scene_Battle_createItemWindow.call(this);
    this._itemWindow.setHandler('description', this.descriptionOpen.bind(this));
  };

  var _Scene_Battle_createMessageWindow = Scene_Battle.prototype.createMessageWindow;
  Scene_Battle.prototype.createMessageWindow = function() {
    _Scene_Battle_createMessageWindow.call(this);
    this._messageWindow._itemWindow.setHandler('description',
        this.descriptionOpen.bind(this));
    this.createDescriptionExWindow();
    this._messageWindow.setDescriptionExWindow(this._descriptionExWindow);
  };

})();
